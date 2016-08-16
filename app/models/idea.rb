class Idea < ApplicationRecord
  default_scope { order(created_at: :desc) }

  enum quality: [ :swill, :plausible, :genius ]
end
