class FriendshipSerializer
  include JSONAPI::Serializer
  attributes :id, :user, :friend
end
