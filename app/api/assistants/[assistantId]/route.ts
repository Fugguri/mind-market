import { NextResponse } from "next/server";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import axios from "axios";

export async function POST(req:Request) {
    try {
        const { token } = await req.json();
        const profile = await currentProfile();
        if (!profile) {
            return new NextResponse("Unauthorize", { status: 401 })
        }
        // const  assistant = await db.assistant.create({ 
        //   data: {

        //         token: token,
        //         profileId:profile.id,
                
        //     }
        // })
        try {
            await axios.post(`https://web-mindmarket/api_v2/integrations/tgbot/${profile.token}}`, {
                headers: { 'Content-Type': 'application/json'}, data: {
                  "token":token
                }
              }); 
            
        } catch(error) {
            console.log(error)
        }
        // return NextResponse.json(integration)

    }catch(error) {
        console.log("[ASSISTANTS_POST]",error)
        return new NextResponse("Enternal error",{status: 500});
    }
}

export async function DELETE(
  req: Request,
  { params }: { params: { assistantId: string } }
) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const server = await db.assistant.delete({
      where: {
        id: params.assistantId,
        // profileId: profile.id,
      }
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log("[SERVER_ID_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { assistantId: string } }
) {
  try {
    const profile = await currentProfile();
    const { name,  settings, comment, imageUrl} = await req.json();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const server = await db.assistant.update({
      where: {
        id: params.assistantId,
        // profileId: profile.id,
      },
      data: {
        name,
        settings,
        comment,
        imageUrl
      }
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log("[SERVER_ID_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}