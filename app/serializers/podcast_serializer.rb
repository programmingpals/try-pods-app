class PodcastSerializer
  include JSONAPI::Serializer
  attributes :title, :description, :uuid

end
