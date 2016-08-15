json.ideas do
  json.array! @ideas, :id, :title, :body, :quality, :updated_at, :created_at
end
