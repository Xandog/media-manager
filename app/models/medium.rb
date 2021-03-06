class Medium < ApplicationRecord
    belongs_to :list 
    has_one :user, through: :list

    validates :list_id, presence: true

    #validates :score, numericality: {greater_than_or_equal_to: 1, less_than_or_equal_to: 5}

    validates :title, presence: true
    validates :title, length: {maximum: 20}
    validates :title, length: {minimum: 1}

    validates :studio, presence: true
    validates :studio, length: {maximum: 25}

    validates :medium_type, presence: true
    validates :medium_type, inclusion: {in: ["PENDING", "COMPLETE"]}

    validates :image, presence: true
end
