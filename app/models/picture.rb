class Picture < ApplicationRecord

    validates :title, :description, presence: true

    has_one_attached :photo
end
