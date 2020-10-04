import Oidc from "oidc-client";

const config = {
  authority: "https://localhost:5002",
  client_id: "spa",
  redirect_uri: "http://localhost:3000/auth/loginCallback",
  popup_post_logout_redirect_uri: "http://localhost:3000/auth/logoutCallback",
  scope: "api",
  response_type: "code",
  response_mode: "query",
};

const userManager = new Oidc.UserManager(config);
export default userManager;
