defmodule RatemeApiWeb.UserRegistrationController do
  use RatemeApiWeb, :controller

  alias RatemeApi.Accounts
  alias RatemeApi.Accounts.User
  alias RatemeApi.Mailer
  alias RatemeApi.Email

  def create(conn, %{"user" => user_params}) do
    case Accounts.register_user(user_params) do
      {:ok, user} ->
        # Invio email di benvenuto
        Email.welcome_email(user)
        |> Mailer.deliver()

        # Invio (opzionale) istruzioni per conferma email
        _ = Accounts.deliver_user_confirmation_instructions(
          user,
          &url(~p"/users/confirm/#{&1}")
        )

        conn
        |> put_status(:created)
        |> json(%{
          message: "Utente creato con successo. Email di benvenuto inviata.",
          user: %{
            id: user.id,
            email: user.email,
            confirmed_at: user.confirmed_at
          }
        })

      {:error, %Ecto.Changeset{} = changeset} ->
        errors = Ecto.Changeset.traverse_errors(changeset, fn {msg, _opts} -> msg end)

        conn
        |> put_status(:unprocessable_entity)
        |> json(%{errors: errors})
    end
  end
end
