import { NextResponse } from "next/server";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import axios from "axios";

export async function POST(req:Request) {
      const { name,settings,comment,imageUrl } = await req.json();
      const profile = await currentProfile();
      if (!profile) {return new NextResponse("Unauthorize", { status: 401 })}
      try {
            const newAssistant =  await db.assistant.create({
                data:{
                    profileId:profile.id,
                    name: name,
                    settings: settings,
                    comment:comment,
                    imageUrl: imageUrl
                }
            })
            console.log(newAssistant)
        } catch(error) {
          console.log("[ASSISTANTS_POST]",error)
          return new NextResponse("Enternal error",{status: 500});
        }
        // return NextResponse.json(integration)

}