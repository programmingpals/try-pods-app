class Api::ListsController < ApplicationController

  def index
    user = User.find(params[:user_id])
    lists = List.where(user_id: user)
    render json: serializer(lists)
  end

  def show

    list = List.includes(:podcasts).find(params[:id])
    render json: serializer(list)
  end
  
  def create
    list = List.create(list_params)
    render json: list
  end

  def update
    list = List.find(params[:id])
    list.update(list_params)
    render json: list
  end

  def destroy
    list = List.find(params[:id])
    list.destroy
  end

  private
  def list_params
    params.require(:list).permit(:user_id, :name, :description)
  end

  def options
    @options ||= { include: %i[podcasts, title, description] }
  end

  def serializer(records, options = {})
  ListSerializer.new(records, options).
  serializable_hash
  end


end
