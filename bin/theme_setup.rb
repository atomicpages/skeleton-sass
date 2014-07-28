#!/usr/bin/env ruby -w

require_relative("assets/helper")

BEGIN {
	if Dir.pwd =~ /bin$/i
		Dir.chdir("../")
	end
	puts "Theme setup utility working..."
}

include Helper

STDOUT.flush
name = Helper.nfqr("Please enter in the name of your theme with no spaces or special characters other than - or _ and press [ENTER]", /[^\w\-]/, "Theme name invalid, please try again and press [ENTER]")
puts "Theme name is #{name}"

if !Dir.exists?("skeleton/themes/#{name}")
	Dir.mkdir("skeleton/themes/#{name}")
end

# create files and folders
puts "Creating required files and folders..."
file = File.open("skeleton/themes/_loader.scss", "w")
file.puts("// #{name} theme created with love using Skeleton Sass theme setup script!")
file.puts("\n@import \"#{name}/vars\";")
file.puts("@import \"#{name}/base\";")
file.puts("@import \"sphenoid/skeleton\"; // Override manually if you wish to create your own grid")
puts "skeleton/themes/_loader.scss has been updated... moving on"

if !Dir.exists?("skeleton/themes/#{name}/marrow")
	Dir.mkdir("skeleton/themes/#{name}/marrow")
end

Helper.cp("skeleton/themes/demo/_base.scss", "skeleton/themes/#{name}/_base.scss")
Helper.cp("skeleton/themes/demo/_vars.scss", "skeleton/themes/#{name}/_vars.scss")
Helper.cp("skeleton/themes/demo/marrow/_mixins.scss", "skeleton/themes/#{name}/marrow/_mixins.scss")

END {
	puts "Theme setup complete!"
}
