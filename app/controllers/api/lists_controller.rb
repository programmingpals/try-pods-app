class Api::ListsController < ApplicationController

  def index
    list = List.find(1)
    render :json => {
      message: list.name
    }
  end

end
