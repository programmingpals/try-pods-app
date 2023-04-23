class ListSerializer
  include JSONAPI::Serializer
  attributes :name, :description, :podcasts, :user_id
end
