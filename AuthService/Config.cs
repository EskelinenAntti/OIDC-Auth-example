using System.Collections.Generic;
using IdentityModel;
using IdentityServer4;
using IdentityServer4.Models;

namespace AuthService
{
    public class Config
    {
        public static List<Client> GetClients()
        {
            return new List<Client>() {
                    new Client
                        {
                            ClientId = "spa",
                            ClientName = "Demo React Client",
                            Enabled = true,
                            AllowedGrantTypes = GrantTypes.Code,
                            RequirePkce = true,
                            RequireClientSecret = false,
                            RedirectUris =
                            {
                                "https://localhost:5001/auth/loginCallback",
                                "http://localhost:3000/auth/loginCallback"
                            },
                            PostLogoutRedirectUris =
                            {
                                "http://localhost:3000/auth/logoutCallback"
                            },
                            AllowedCorsOrigins =     { "http://localhost:3000" },
                            AccessTokenLifetime = 20,
                            AllowedScopes =
                            {
                                IdentityServerConstants.StandardScopes.OpenId,
                                IdentityServerConstants.StandardScopes.Profile,
                                "api",
                            }
                        }
                    };
        }

        public static List<ApiScope> GetScopes()
        {
            return new List<ApiScope>
                    {
                        new ApiScope("api", "Api", new [] {
                            JwtClaimTypes.Name, JwtClaimTypes.Role
                        })
                    };
        }
    }
}