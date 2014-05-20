#!/bin/sh

echo "Upgrade utility working..."
cwd=${PWD##*/}

if [ $cwd == "bin" ]; then
	cd ../
fi

echo "Run git pull? [y/n]"
read ans
valid=0

# { [ "$varB" = "t1" ] || [ "$varC" = "t2" ]; } then

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

if [[ "$ans" == "y" || "$ans" == "Y" ]]; then
	echo "Starting git pull..."
	git pull origin
	echo "Upgrade complete. Removing unneeded files"
fi

rm _MYconfig.scss
rm skeleton_template.scss
