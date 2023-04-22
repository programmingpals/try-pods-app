class Api::FriendshipsController < ApplicationController
  def index
    user = User.find(params[:user_id])
    friendships = Friendship.where(user_id: user)
    render json: serializer(friendships)
  end

  def show
    friendship = Friendship.includes(:friend).find(params[:id])
    render json: serializer(friendship)
  end

  def create
    friendship = Friendship.create(friendship_params)
    render json: friendship
  end

  private

  def friendship_params
    params.require(:friendship).permit(:user_id, :friend_id)
  end

  def options
    @options ||= { include: %i[friends] }
  end

  def serializer(records, options = {})
    FriendshipSerializer.new(records, options).
    serializable_hash
  end
end
