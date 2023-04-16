class ListSerializer
  include JSONAPI::Serializer
  attributes :name, :description, :podcasts
  # has_many :podcasts, serializer: PodcastSerializer
end
