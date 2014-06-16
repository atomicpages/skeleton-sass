#!/bin/sh

echo "Update utility working..."
cwd=${PWD##*/}

if [[ $cwd="bin" ]]; then
	cd ../
fi

echo "Update Skeleton Sass? [y/n]"
git=$(git rev-parse --is-inside-work-tree)

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

if [[ ("$ans" = "y" || "$ans" = "Y") ]]; then
	if [[ $git="true" ]]; then
		echo "Git repo found, pulling latest version from origin/master"
		git pull origin/master
	elif [[ -f .bower.config ]]; then
		echo ".bower.config file detected, Skeleton Sass was installed using bower. Running bower update skeleton-sass"
		cd ../ && bower update skeleton-sass
	else
		echo "Git repo not found. Bower files not found. Update manually"
		exit 0
	fi
	echo "Upgrade complete. Removing unneeded files"
	rm _MYconfig.scss skeleton_template.scss
else
	echo "Aborting"
fi

exit 0
