class List < ApplicationRecord
    has_many :media, dependent: :destroy
    belongs_to :user

    validates :user_id, presence: true
    validates :title, presence: true
    validates :list_type, presence: true
end
