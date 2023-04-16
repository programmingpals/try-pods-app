class Api::ListsController < ApplicationController

  def index
    lists = List.all
    render json: lists
  end

  def show
    list = List.includes(:podcasts).find(params[:id])
    render json: list
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
    params.require(:list).permit(:user_id, :name)
  end
end
