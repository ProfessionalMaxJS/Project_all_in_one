class PurchasedItem < ActiveRecord::Base
  belongs_to :item
  belongs_to :user

  validates :quantity_purchased, numericality: {greater_than_or_equal_to: 1, only_integer: true}
end
