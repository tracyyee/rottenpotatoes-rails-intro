class Movie < ActiveRecord::Base
	def self.all_ratings
		#Movie.order(:rating) # gives checkboxes with rating object IDs
    	#Movie.order(:rating).map {|x| x.rating} # gives repeated ratings
    	((Movie.order(:rating)).map {|x| x.rating}).uniq # ['G','PG','PG-13','R']
	end
end
