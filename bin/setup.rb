#!/usr/bin/env ruby -w

require_relative("assets/helper")

BEGIN {
	if Dir.pwd =~ /bin$/i
		Dir.chdir("../")
	end
	puts "Setup utility working..."
}

include Helper

STDOUT.flush
name = Helper.nfqr("Please enter in the name of your project with no spaces or special characters other than - or _ and press [ENTER]", /[^\w\-]/, "Project name invalid, please try again and press [ENTER]")

puts "Project name is #{name}"
puts "Renaming _MYconfig.scss to _#{name}.config.scss"
File.rename("_MYconfig.scss", "_#{name}.config.scss")

puts "Renaming skeleton_template to skeleton"
if File.exists?("skeleton_template.scss")
	File.rename("skeleton_template.scss", "skeleton.scss")
else
	puts "skeleton_template.scss does not exist. Skipping..."
end

puts "Adding user override to core/_config.scss"
file = File.open("skeleton/core/_config.scss", "a")
file.puts "@import \"../../_#{name}.config.scss\""
file.close

END {
	puts "Setup utility is complete!"
}
