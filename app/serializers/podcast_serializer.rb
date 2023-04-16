class PodcastSerializer
  include JSONAPI::Serializer
  attributes :name, :description
  belongs_to: list
end
