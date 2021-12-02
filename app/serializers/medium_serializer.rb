class MediumSerializer < ActiveModel::Serializer
  attributes :id, :list_id, :score, :title, :studio, :medium_type, :image

  belongs_to :list
  has_one :user, through: :list
end
