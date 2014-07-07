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
