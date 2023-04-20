export const WALLET_APP = {
  baseUrl: "https://dplatdev.zbyte.io",
  authConfig: {
    tokenExpiry: 900,
    typeOfToken: "Bearer",
    domain: "https://dplatdev.zbyte.io/zbyte-sso/oidc/community",
    clientId: "wallet-app",
    verifier: "dplatdev-keycloak-verifier"
  }
};

export const LCNC_TEST = {
  baseUrl: "https://dplattestnew.zbyte.io",
  authConfig: {
    tokenExpiry: 900,
    typeOfToken: "Bearer",
    domain: "https://dplattestnew.zbyte.io/zbyte-sso/oidc/community",
    clientId: "zbyte-lcnc-app",
    verifier: "keycloak-dplattest-new"
  }
};
