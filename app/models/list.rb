class List < ApplicationRecord
    has_many :media, dependent: :destroy
    belongs_to :user

    validates :user_id, presence: true
    validates :title, presence: true
    validates :title, length: {maximum: 15}
    validates :list_type, presence: true
    validates :list_type, inclusion: {in: ["MOVIES","SHOWS","GAMES"]}
end
