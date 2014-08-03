#!/usr/bin/env ruby -w

# Add module directly so the script works when copied
module Helper

	def isValidName(name)
		if name !~ /[-a-zA-Z0-9_]+/i
			return false
		end

		return true
	end

	def yesno(question)
		puts question
		answer = gets.chomp
		while answer !~ /y(es)?|n(o)?/i do
			puts "Invalid input. #{question} [y/n]"
			answer = gets.chomp
			yesno(question)
		end

		if answer =~ /y(es)/i
			return true
		end

		return false
	end

	def nfqr(question, regex, errorMsg = "Invalid input. #{question}", isValid = nil)
    puts isValid != 0 ? question : errorMsg
		reply = gets.chomp

		if reply =~ regex
			return nfqr(question, regex, errorMsg, 0)
		end

		return reply
	end

	def cp(file, destination)
		if !File.exists?(file) # fail quickly if not found
			raise SystemCallError, "#{file} was not found or does not exist"
		end

		dest = File.open(destination, "w")

		File.open(file, "r") do |f|
			f.each_line do |line|
				dest.puts(line)
			end
		end

		dest.close
	end

	def gem_available?(name)
		Gem::Specification.find_by_name(name)
		rescue Gem::LoadError
			return false
		rescue
			return Gem.available?(name)
	end

end


BEGIN {
	if Dir.pwd =~ /bin$/i
		Dir.chdir("../")
	end
	puts "Upgrade utility..."
}

include Helper

STDOUT.flush

puts "Disclaimer: this utility it meant to aid in upgrading from Skeleton Sass 1.x to Skeleton Sass 2.x. If you have followed the wiki articles then please do not use this script without a clean installation of Skeleton Sass 2.x. We, AtomicPages LLC, are not responsible for any unforeseen events that arise by using this script. Please follow the prompts.\n"

resp = Helper.yesno("Did you add the contents from _vars.scss in Skeleton Sass 1.x to _MYconfig.scss in Skeleton Sass 2.x? [y/n]\nNote: If you ran the setup utility, your global configuration name might differ")

if resp =~ /y(es)?/i
	abort("Please copy the variables from _vars.scss and run the script again")
end

puts "Converting variable names..."

filename = ""
if RUBY_PLATFORM.downcase =~ /w(in)?32/i
	filename = %x(dir /b *config.scss)
else
	filename = %x(ls | grep config)
end

if filename !~ /_+[\w-]*\.?conf(ig)?(uration)?\.scss/i
	abort("Global config file in root not found. Please execute bin/upgrade within the skeleton-sass directory. Current working directory is #{Dir.pwd}")
end

puts "Using #{filename}..."

variables = {
	"backgroundColor" => "background-color",
	"fontSize" => "font-size",
	"fontFamily" => "font-family",
	"fontColor" => "font-color",
	"formFont" => "form-font",
	"linkColor" => "link-color",
	"linkHoverColor" => "link-hover-color",
	"linkDecoration" => "link-decoration",
	"headingFamily" => "heading-family",
	"headingColor" => "heading-color",
	"baseWidth" => "base-width",
	"baseWidthMQ" => "REMOVE_ME",
	"baseColWidth" => "base-col-width",
	"baseGutterWidth" => "base-gutter-width",
	"isFluid" => "is-fluid",
	"baseColCount" => "base-col-count",
	"tabletWidth" => "tablet-width",
	"mobilePortraitWidth" => "mobile-portrait-width",
	"mobileLandscapeWidth" => "mobile-landscape-width"
}

variables.each do |key, value|
	%x(ruby -i.bak -pe "gsub /#{key}/i, '#{value}'" #{filename})
end

if File.exists?("#{filename}.bak")
	File.delete("#{filename}.bak")
end

puts "Variable conversion complete..."
if filename == "_MYconfig.scss"
	resp = Helper.yesno("Launch setup utility now? [y/n]")
	if(resp =~ /n(o)?/i)
		abort("Upgrade is complete! Rename _MYconfig.scss to a different name if you haven't done so already and import that file into core/_config.scss. You may also run bin/setup.rb from command line to automate this task.")
	else
		puts "Upgrade process complete! Launching setup now..."
		system("ruby -w bin/setup.rb")
	end
end

puts "Upgrade is complete!"
