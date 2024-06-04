import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';
import { AssistantType } from '@prisma/client';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log('handle webpage assistant creation')
  try {
    const { projectId, name, files, settings, comment } = await req.json();

    console.log('Received data:', { projectId, name, files, settings, comment });

    const profile = await currentProfile();
    if (!profile) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const project = await db.project.findFirst({ where: { id: projectId } });
    if (!project) {
      return new NextResponse(`No project with id ${projectId}`, { status: 403 });
    }

    console.log('Project found:', project);

    const assistant = await db.assistant.create({
      data: {
        projectId:project.id,
        name,
        type:AssistantType.DOCUMENTS,
        settings,
        comment,
        files:files
      },
    });

    return NextResponse.json(assistant);
  } catch (error) {
    console.error('[ASSISTANT_POST]', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const assistants = await db.assistant.findMany();
    return NextResponse.json(assistants);
  } catch (error) {
    console.error('[ASSISTANT_GET]', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}