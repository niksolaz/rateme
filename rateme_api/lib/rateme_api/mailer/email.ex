defmodule RatemeApi.Email do
  import Swoosh.Email

  def welcome_email(user) do
    new()
    |> to(user.email)
    |> from("noreply@rateme.ai")
    |> subject("Benvenuto in RateMe AI")
    |> html_body("<h1>Ciao #{user.email}!</h1><p>Grazie per esserti registrato.</p>")
  end
end
