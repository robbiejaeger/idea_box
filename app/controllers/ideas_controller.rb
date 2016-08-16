class IdeasController < ApplicationController

  def index
    @ideas = Idea.all
  end

  def create
    Idea.create(idea_params)
  end

  private
    def idea_params
      params.require(:idea).permit(:title, :body)
    end
end
