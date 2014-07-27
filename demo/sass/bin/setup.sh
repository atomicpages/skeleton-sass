#!/bin/sh

echo "Setup utility working..."
cwd=${PWD##*/}

if [[ $cwd = "bin" ]]; then
	cd ../
fi

echo "Please enter in the name of your project with no spaces or special characters other than - or _ and press [ENTER]"
read name
validated=0;

case $name in
	*\ * )
		let validated=0
		;;
	*)
		echo "Project name saved"
		let validated=1
		;;
esac

while [ $validated -ne 1 ]; do
	echo "Project name invalid, please try again and press [ENTER]"
	read name
	case $name in
		*\ * )
			let validated=0
			;;
		*)
			echo "Project name saved"
			let validated=1
			;;
	esac
done

echo "Project name is ${name}"
echo "Renaming user config from _MYconfig.scss to _${name}.config.scss"
mv _MYconfig.scss _${name}.config.scss

echo "Renaming skeleton_template to skeleton"
mv skeleton_template.scss skeleton.scss

echo "Adding user override to core/_config.scss"
echo "@import \"../../_${name}.config.scss\"" >> skeleton/core/_config.scss

echo "Setup complete!"
exit 0;
