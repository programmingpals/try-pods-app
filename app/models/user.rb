class User < ApplicationRecord
  has_many :friendships
  has_many :friends, through: :friendships
  has_many :lists
  has_many :podcasts, through: :lists

  def has_podcast_on_list?(pod_uuid)
    podcasts.any?{|p| p.pod_uuid == pod_uuid}
  end
end
