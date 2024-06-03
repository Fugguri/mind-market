import { currentProfile } from "@/lib/current-profile";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const handleAuth = async () => {
    const profile = await currentProfile();
    console.log("prof",profile)
    if(!profile) throw new Error("Unautorize")
    return {userId: profile.id}

}

const f = createUploadthing();
 
 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  assistantImage: f({image: { maxFileSize: "4MB", maxFileCount: 1}})
    .middleware(() => handleAuth() )
    .onUploadComplete(() => {}),

  messageFile: f(["image","pdf"])
    .middleware(() => handleAuth() )
    .onUploadComplete(() => {})


} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;