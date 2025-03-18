import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

export const GET = (req: Request, res: unknown) =>
  NextAuth(authOptions)(req, res);
export const POST = (req: Request, res: unknown) =>
  NextAuth(authOptions)(req, res);
