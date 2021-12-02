class Rename < ActiveRecord::Migration[6.1]
  def change
    rename_column :lists, :type, :list_type
  end
end
