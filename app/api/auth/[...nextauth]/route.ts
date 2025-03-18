import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials?: Record<string, string>) {
        /* 
          Here we need to check the user existence by getting from the database. As far we don't have the database connection 
          user will be redirected to the home page if password and email are entered correctly based on form validation.
        **/
        if (credentials) {
          const { email, password, firstName, lastName } = credentials;

          if (email && password) {
            return { id: "1", name: `${firstName} ${lastName}`, email };
          }
        }

        throw new Error("Invalid credentials");
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
};

export const GET = (req: Request, res: unknown) =>
  NextAuth(authOptions)(req, res);
export const POST = (req: Request, res: unknown) =>
  NextAuth(authOptions)(req, res);
