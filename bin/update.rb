#!/usr/bin/env ruby -w

require_relative("assets/helper")
require 'rubygems' # if rubygems is not installed then we'll fail fast

BEGIN {
	if Dir.pwd =~ /bin$/i
		Dir.chdir("../")
	end
	puts "Update utility working..."
}

include Helper
STDOUT.flush

if File.directory?("#{Dir.pwd}/.git")
	if Helper.gem_available?('git') # assets the gem exists before we try to use it
		require 'git'
		g = Git.open(Dir.pwd)
		if g.repo
			if g.index.readable?
				g.pull(g.repo, g.branch)
			end
		end
	else
		resp = Helper.yesno("Ruby git gem not found, install now? [y/n]")
		if resp =~ /y(es)?/
			puts "Installing git gem..."
			if RUBY_PLATFORM.downcase =~ /w(in)?32/i
				`gem install git`
			else
				`sudo gem install git`
			end
		else
			puts "Skipping git install..."
		end
	end
end

if File.exists?(".bower.json")
	resp = Helper.yesno("Bowers files found. Update with bower now? [y/n]")
	if resp =~ /y(es)?/i
		puts "Updating skeleton-sass"
		`bower update skeleton-sass`
	end
else
	abort("No git repository or bower files were detected. Update manually...")
end

END {
	puts "Update complete!"
}
