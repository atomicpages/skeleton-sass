#!/bin/sh

echo "Theme Setup utility working..."
cwd=${PWD##*/}

if [[ $cwd = "bin" ]]; then
	cd ../
fi

echo "Please enter in the name of your theme with no spaces or special characters other than - or _ and press [ENTER]"
read name
validated=0;

case $name in
	*\ * )
		let validated=0
		;;
	*)
		echo "Theme name saved"
		let validated=1
		;;
esac

while [ $validated -ne 1 ]; do
	echo "Theme name invalid, please try again and press [ENTER]"
	read name
	case $name in
		*\ * )
			let validated=0
			;;
		*)
			echo "Theme name saved"
			let validated=1
			;;
	esac
done

echo "Theme name is ${name}"

echo "Creating required files and folders..."
touch core/bones/_${name}.scss;
echo "// ${name} theme created with love" > core/bones/_${name}.scss
echo "@import \"../../skeleton/${name}/vars\";" >> core/bones/_${name}.scss
echo "@import \"../../skeleton/${name}/base\";" >> core/bones/_${name}.scss
echo "@import \"../../skeleton/sphenoid/vars\"; // Override manually if you wish to create your own grid" >> core/bones/_${name}.scss
echo "core/bones/_${name}.scss has been created"


mkdir -p skeleton/${name}/marrow
cp skeleton/demo/_base.scss skeleton/${name}
cp skeleton/demo/_vars.scss skeleton/${name}

echo "Use Bourbon? [y/n]"
read ans
valid=0

if [[ ("$ans" = "y" || "$ans" = "n" || "$ans" = "Y" || "$ans" = "N") ]]; then
	let valid=1
else
	let valid=0
fi

while [ $valid -ne 1 ]; do
	echo "Invalid response, try again"
	read ans
	if [[ ("$ans" = "y" || "$ans" = "n" || "$ans" = "Y" || "$ans" = "N") ]]; then
		let valid=1
	else
		let valid=0
	fi
done

if [ $valid -eq 1 ]; then
	# If gem doesn't exist then we don't need to bother
	command -v gem >/dev/null 2>&1 || {
		echo >&2 "Ruby Gems is not installed. Aborting."
		echo "Note: your project setup to this point was successful"
		exit 0
	}
	# Does bourbon exist? No? Want to install it? Sure. Awesome! Let me install it for you.
	command -v bourbon >/dev/null 2>&1 || {
		echo >&2 "Bourbon is not currently installed. Install bourbon now? [y/n]"
		echo "Note: you will be promoted to enter in your account password. This password is never saved. Ever."
		read ans
		valid=0
		if [[ ("$ans" = "y" || "$ans" = "n" || "$ans" = "Y" || "$ans" = "N") ]]; then
			let valid=1
			echo "Installing bourbon..."
			sudo gem install bourbon
		else
			let valid=0
		fi

		while [ $valid -ne 1 ]; do
			echo "Invalid response, try again"
			read ans
			if [[ ("$ans" = "y" || "$ans" = "n" || "$ans" = "Y" || "$ans" = "N") ]]; then
				let valid=1
				echo "Installing bourbon..."
				sudo gem install bourbon
				command -v bourbon >/dev/null 2>&1 || {
					echo 2>&1 "Bourbon install failed. Aborting."
					echo "Note: your project setup to this point was successful"
					exit 0
				}
				echo "Bourbon install was successful! Continuing..."
			else
				let valid=0
			fi
		done
	}
	bourbon install --path=skeleton/${name}/
	cp skeleton/demo/_bourbon.scss skeleton/${name}
	sed -i "" -e $'8 a\\\n'"@import \"bourbon\";" skeleton/${name}/_vars.scss
	echo "Theme setup complete!"
	exit 0
fi

echo "Theme setup complete!"
exit 0
