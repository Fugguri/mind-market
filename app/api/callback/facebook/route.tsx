import axios from 'axios'

import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	console.log(req)
	return NextResponse.json('success')
}

export async function GET(req: Request) {
	console.log(req)
	return NextResponse.json('success')
}

export async function PATCH(req: Request) {
	console.log(req)
	return NextResponse.json('success')
}

export async function DELETE(req: Request) {
	console.log(req)
	return NextResponse.json('success')
}
