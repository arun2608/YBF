import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      id: "credentials",
      authorize: async (credentials) => {
        const user = {
          id: credentials.id,
          name: credentials.name,
          role: credentials.role,
          roleId: credentials.roleId,
        };
        return user ? user : null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, 
  },
  callbacks: {
    jwt({ token, user }) {
      const now = Math.floor(Date.now() / 1000);
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.role = user.role;
        token.roleId = user.roleId;
        token.expires = now + 24 * 60 * 60; 
      }
      if (token.expires && now > token.expires) {
        return {}; 
      }
      return token;
    },
    session({ session, token }) {
      if (!token.id) {
        return null; 
      }
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.role = token.role;
      session.user.roleId = token.roleId;
      session.expires = new Date(token.expires * 1000).toISOString(); 
      return session;
    },
  },
  secret: process.env.JWT_SECRET, 
};
