import { AuthOptions, User } from "next-auth";

import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/db";
import { randomUUID } from "crypto";



export const authConfig: AuthOptions = {
    
    // Configure one or more authentication providers
    providers: [CredentialsProvider({
      
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "login or email",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Имя пользователя или email ", type: "text"||"email", placeholder: "Имя пользователя или email", required:true},
        password: { label: "Пароль", type: "password" ,placeholder: "password", required:true},
      },
      async authorize(credentials) {

      if (!credentials?.username || !credentials.password) return null
      
      const profile = await db.profile.findFirst({
          where: {
            login: credentials?.username?.toString(),
            password: credentials?.password?.toString()
          }
        })
      
      if(profile && credentials?.password === profile.password) {
          const { password, ...profileWithoutPass } = profile

          return profileWithoutPass as User
        }
      if(profile && credentials?.password !== profile.password) {
          return null
        }
      if(!profile) {
        const newProfile = await db.profile.create({
          data: {
            userId: randomUUID(),
            imageUrl: "",
            name:"Full name",
            login: credentials.username,
            password: credentials.password
          }
            
          
        })
        const { password, ...profileWithoutPass } = newProfile

        return profileWithoutPass as User
      }
      return null
    }
  }),
      GoogleProvider ({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET??'',
      
    }),
      GithubProvider({
        clientId: process.env.GITHUB_ID ?? '',
        clientSecret: process.env.GITHUB_SECRET??'',
      }),
      // ...add more providers herec
    ],

    theme: {
      colorScheme: "auto", // "auto" | "dark" | "light"
      brandColor: "", // Hex color code
      logo: "http://localhost:3000/favicon.ico", // Absolute URL to Image
      buttonText: "Web-Mindmarket" // Hex color code
    },
    
    // callbacks: {
    //   session({session, user} ) {
    //     if (session.user) {
    //       session.user.i = user.id;
    //     }
    //     return session;
    //   },
    // },

  }