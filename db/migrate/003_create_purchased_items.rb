class CreatePurchasedItems < ActiveRecord::Migration[6.1]
  def change
    create_table :purchased_items do |t|
      t.belongs_to :item, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :quantity_purchased

      t.timestamps
    end
  end
end
