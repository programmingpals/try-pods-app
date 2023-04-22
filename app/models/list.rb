class List < ApplicationRecord

  has_many :podcasts, dependent: :destroy

  belongs_to :user
end
