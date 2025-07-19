defmodule RatemeApiWeb.ErrorJSONTest do
  use RatemeApiWeb.ConnCase, async: true

  test "renders 404" do
    assert RatemeApiWeb.ErrorJSON.render("404.json", %{}) == %{errors: %{detail: "Not Found"}}
  end

  test "renders 500" do
    assert RatemeApiWeb.ErrorJSON.render("500.json", %{}) ==
             %{errors: %{detail: "Internal Server Error"}}
  end
end
