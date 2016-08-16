Rails.application.routes.draw do
  root to: "homes#index"

  resources :ideas, only: [:index, :create], defaults: {format: :json}
end
