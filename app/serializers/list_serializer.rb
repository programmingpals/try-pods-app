class ListSerializer
  include JSONAPI::Serializer
  attributes :name, :description
  has_many :podcasts, serializer: PodcastSerializer
end
