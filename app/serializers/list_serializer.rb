class ListSerializer
  include JSONAPI::Serializer
  attributes :name, :description, :podcasts, :user_id
  # has_many :podcasts, serializer: PodcastSerializer
end
