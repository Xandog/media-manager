class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :bio, :profile_pic

  has_many :lists 
  has_many :media, through: :lists
end
