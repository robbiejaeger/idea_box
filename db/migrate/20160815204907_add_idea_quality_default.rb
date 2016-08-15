class AddIdeaQualityDefault < ActiveRecord::Migration[5.0]
  def change
    change_column_default :ideas, :quality, 0
  end
end
