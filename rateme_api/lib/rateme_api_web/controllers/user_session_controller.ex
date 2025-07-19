defmodule RatemeApiWeb.UserSessionController do
  use RatemeApiWeb, :controller

  alias RatemeApi.Accounts
  alias RatemeApiWeb.UserAuth

  def new(conn, _params) do
    render(conn, :new, error_message: nil)
  end

  def create(conn, %{"user" => %{"email" => email, "password" => password}}) do
    case Accounts.get_user_by_email_and_password(email, password) do
      nil ->
        conn
        |> put_status(:unauthorized)
        |> json(%{error: "Email o password non validi"})

      user ->
        conn
        |> put_status(:ok)
        |> json(%{message: "Login effettuato", user: %{id: user.id, email: user.email}})
    end
  end

  def delete(conn, _params) do
    conn
    |> put_status(:ok)
    |> json(%{message: "Logged out successfully."})
    |> UserAuth.log_out_user()
  end
end
