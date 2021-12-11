import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const userVlad = {
  csrfToken: "16d5c19d0c22059793de23406140e67dbdc1f8a5ae579b5185ae83d562cda7e6",
  email: "vlad.somai@gmail.com",
  password: "password",
};

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      async authorize(credentials, req) {
        console.log(credentials);
        console.log(userVlad);

        if (
          userVlad.email === credentials.email &&
          userVlad.password === credentials.password
        ) {
          console.log("User OK");
          return userVlad;
        } else {
          console.log("User NOK");
          throw new Error("Invalid account");
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    error: "/signin"
  },
  secret: "Sy21b2!G*&JY!GYGaknlngkdsbsi!NUI#GVUYT!^&Vy",
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return "/signin";
    },
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
});
