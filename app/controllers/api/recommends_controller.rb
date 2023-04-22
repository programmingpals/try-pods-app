class Api::RecommendsController < ApplicationController
  def show
    friends = User.find(params[:user_id]).friends
    friends_who_recommend = friends.select{|f| f.has_podcast_on_list?(params[:id])}
    render json: {friends: friends_who_recommend}
  end
end
