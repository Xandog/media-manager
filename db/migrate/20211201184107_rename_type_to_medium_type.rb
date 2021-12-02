class RenameTypeToMediumType < ActiveRecord::Migration[6.1]
  def change
    rename_column :media, :type, :medium_type
  end
end
