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

mkdir core/bones/_${name}.scss;
echo "// ${name} theme" > _${name}.scss
echo "@import \"../../bones/${name}/vars\";" >> _${name}.scss
echo "@import \"../../bones/${name}/base\";" >> _${name}.scss
echo "@import \"../../bones/sphenoid/vars\"; // Override manually if you wish to create your own grid" >> _${name}.scss
echo "core/bones/_${name}.scss has been created"

mkdir -p bones/${name}/marrow
cp bones/sphenoid/_base.scss bones/${name}
cp bones/sphenoid/_vars.scss bones/${name}
