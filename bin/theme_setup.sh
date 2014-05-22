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
# mkdir core/bones/_${name}.scss;
# echo "// ${name} theme created with love" > _${name}.scss
# echo "@import \"../../skeleton/${name}/vars\";" >> _${name}.scss
# echo "@import \"../../skeleton/${name}/base\";" >> _${name}.scss
# echo "@import \"../../skeleton/sphenoid/vars\"; // Override manually if you wish to create your own grid" >> _${name}.scss
echo "core/bones/_${name}.scss has been created"

# mkdir -p skeleton/${name}/marrow
# cp skeleton/demo/_base.scss skeleton/${name}
# cp skeleton/demo/_vars.scss skeleton/${name}

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
	# test to make sure bourbon exists
	command -v gem >/dev/null 2>&1 || {
		echo >&2 "Ruby Gems is not installed. Aborting."
		exit 0
	}
	command -v bourbon >/dev/null 2>&1 || {
		echo >&2 "Bourbon is currently installed. Install bourbon now? [y/n]"
		echo "Note: you will be promoted to enter in your admin password. This password is never saved. Ever."
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
			else
				let valid=0
			fi
		done
	}
fi
