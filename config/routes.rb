Rails.application.routes.draw do
  root to: "homes#index"

  resources :ideas, except: [:new, :edit], defaults: {format: :json}
end
