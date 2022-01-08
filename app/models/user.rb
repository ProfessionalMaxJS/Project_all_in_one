class User < ActiveRecord::Base

    # attr_accessor :point_tracker
    has_secure_password

    has_many :selected_items
    has_many :purchased_items

    validates :name, presence: true
    validates :point_tracker, presence: true, numericality: {greater_than_or_equal_to: 0, less_than: 10, only_integer: true}


end
