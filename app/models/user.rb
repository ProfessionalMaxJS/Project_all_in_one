class User < ActiveRecord::Base

    # attr_accessor :point_tracker
    has_secure_password

    has_many :selected_items
    has_many :purchased_items




end
