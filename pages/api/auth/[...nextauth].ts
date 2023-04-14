/* eslint-disable new-cap */
import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    KeycloakProvider({
      clientId: process.env.AUTH_CLIENT_ID!,
      clientSecret: process.env.AUTH_CLIENT_SECRET!,
      issuer: process.env.AUTH_ISSUER
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      // Send properties to the client
      // Like an access_token and user id from a provider.
      session.accessToken = token.accessToken;
      session.user.id = token.id;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // Persist the OAuth access_token and user id
      // In the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        if (profile) token.id = profile.sub;
      }
      return token;
    }
  },
  secret: process.env.JWT_SECRET
});
