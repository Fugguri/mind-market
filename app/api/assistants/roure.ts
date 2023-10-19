import { NextResponse } from "next/server";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import axios from "axios";

export async function POST(req:Request) {
    const { token } = await req.json();
    const profile = await currentProfile();
    if (!profile) {return new NextResponse("Unauthorize", { status: 401 })}
    try {
        await axios.post(`https://web-mindmarket/api_v2/assistant/new/${profile.token}}`, {
          "token":token
          })
    } catch(error) {
          console.log("[ASSISTANTS_POST]",error)
          return new NextResponse("Enternal error",{status: 500});
    }
        // return NextResponse.json(integration)

}