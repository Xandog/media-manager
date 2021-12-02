class CreateLists < ActiveRecord::Migration[6.1]
  def change
    create_table :lists do |t|
      t.integer :user_id
      t.string :title
      t.string :type

      t.timestamps
    end
  end
end
