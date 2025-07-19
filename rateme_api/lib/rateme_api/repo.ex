defmodule RatemeApi.Repo do
  use Ecto.Repo,
    otp_app: :rateme_api,
    adapter: Ecto.Adapters.SQLite3
end
