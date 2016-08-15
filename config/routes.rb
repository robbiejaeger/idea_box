Rails.application.routes.draw do
  root to: "homes#index"

  resources :ideas, only: [:index], defaults: {format: :json}
end
