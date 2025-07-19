defmodule RatemeApiWeb.Router do
  use RatemeApiWeb, :router

  # import RatemeApiWeb.UserAuth

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", RatemeApiWeb do
    pipe_through :api

    post "/register", UserRegistrationController, :create
    post "/login", UserSessionController, :create
    delete "/logout", UserSessionController, :delete
    get "/me", UserSettingsController, :edit   # puoi creare un endpoint custom
  end

  # Enable Swoosh mailbox preview in development
  if Application.compile_env(:rateme_api, :dev_routes) do

    scope "/dev" do
      pipe_through [:fetch_session, :protect_from_forgery]

      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end

  ## Authentication routes

  # scope "/", RatemeApiWeb do
  #   pipe_through [:browser, :redirect_if_user_is_authenticated]

  #   get "/users/register", UserRegistrationController, :new
  #   post "/users/register", UserRegistrationController, :create
  #   get "/users/log_in", UserSessionController, :new
  #   post "/users/log_in", UserSessionController, :create
  #   get "/users/reset_password", UserResetPasswordController, :new
  #   post "/users/reset_password", UserResetPasswordController, :create
  #   get "/users/reset_password/:token", UserResetPasswordController, :edit
  #   put "/users/reset_password/:token", UserResetPasswordController, :update
  # end

  # scope "/", RatemeApiWeb do
  #   pipe_through [:browser, :require_authenticated_user]

  #   get "/users/settings", UserSettingsController, :edit
  #   put "/users/settings", UserSettingsController, :update
  #   get "/users/settings/confirm_email/:token", UserSettingsController, :confirm_email
  # end

  # scope "/", RatemeApiWeb do
  #   pipe_through [:browser]

  #   delete "/users/log_out", UserSessionController, :delete
  #   get "/users/confirm", UserConfirmationController, :new
  #   post "/users/confirm", UserConfirmationController, :create
  #   get "/users/confirm/:token", UserConfirmationController, :edit
  #   post "/users/confirm/:token", UserConfirmationController, :update
  # end
end
