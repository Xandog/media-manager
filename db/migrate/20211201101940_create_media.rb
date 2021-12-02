class CreateMedia < ActiveRecord::Migration[6.1]
  def change
    create_table :media do |t|
      t.integer :list_id
      t.integer :score
      t.string :title
      t.string :studio
      t.string :type
      t.string :image

      t.timestamps
    end
  end
end
