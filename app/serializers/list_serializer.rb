class ListSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :list_type
  
  has_many :media
  belongs_to :user
end
