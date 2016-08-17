class IdeasController < ApplicationController

  def index
    @ideas = Idea.all
  end

  def create
    @idea = Idea.create(idea_params)
  end

  def update
    Idea.find(params[:id]).update(idea_params)
  end

  def destroy
    Idea.find(params[:id]).destroy
  end

  private
    def idea_params
      params.require(:idea).permit(:title, :body, :quality)
    end
end
