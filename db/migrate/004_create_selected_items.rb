class CreateSelectedItems < ActiveRecord::Migration[6.1]
  def change
    create_table :selected_items do |t|
      t.integer :quantity_selected
      t.belongs_to :item, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
