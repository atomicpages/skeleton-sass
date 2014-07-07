#!/usr/bin/env ruby -w

require_relative("assets/helper")

BEGIN {
	if Dir.pwd =~ /bin$/i
		Dir.chdir("../")
	end
	puts "Upgrade utility..."
}

include Helper

STDOUT.flush

puts "Disclaimer: this utility it meant to aid in upgrading from Skeleton Sass 1.x to Skeleton Sass 2.x. If you have followed the wiki articles then please do not use this script without a clean installation of Skeleton Sass 2.x. We, AtomicPages LLC, are not responsible for any unforeseen events that arise by using this script. Please follow the prompts."

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

puts "Using #{filename}"

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
	"baseColWidth" => "base-col-width",
	"baseGutterWidth" => "base-gutter-width",
	"isFluid" => "is-fluid",
	"baseColCount" => "base-col-count",
	"tabletWidth" => "tablet-width",
	"mobilePortraitWidth" => "mobile-portrait-width",
	"mobileLandscapeWidth" => "mobile-landscape-width"
}
