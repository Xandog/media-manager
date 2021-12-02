class User < ApplicationRecord
    has_many :lists, dependent: :destroy
    has_many :media, through: :lists
    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :username, length: {maximum: 10}
    # validates :bio, presence: true
    # validates :profile_pic, presence: true
end
