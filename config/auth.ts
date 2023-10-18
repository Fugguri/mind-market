import { AuthOptions } from "next-auth";

import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";

import { randomBytes, randomUUID } from "crypto";
import { db } from "@/lib/db";


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
        username: { label: "Имя пользователя или email ", type: "text"||"email", placeholder: "Имя пользователя или email"},
        password: { label: "Пароль", type: "password" ,placeholder: "password"},
      },
      async authorize(credentials, req) {


      const profile = await db.profile.findFirst({
          where: {
            login: credentials?.username?.toString(),
            password: credentials?.password?.toString()
          }
        })
        if (!profile) {
          const newProfile = await db.profile.create({
            data:{
              userId: randomUUID(),
              name:"Username",
              imageUrl:"",
              password:credentials?.password,
              login: credentials?.username

            }
          })

          const user = { 
            id: newProfile?.id||"",
            imageUrl: "",
            name: credentials?.username, 
            email: "email",
            
          }
      
          if (user) {
              // Any object returned will be saved in `user` property of the JWT
              return user
            } else {
              // If you return null then an error will be displayed advising the user to check their details.
              return null
      
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
          }
        


        // Add logic here to look up the user from the credentials supplied
        const user = { 
        id: profile?.id||"",
        imageUrl: "",
        name: credentials?.username, 
        email: "email",
        
      }
  
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },

    })
      ,
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