import {NextResponse} from "next/server"

export async function GET() {
    const res = {
        status: "success",
        message: "Halo dari API Route Next.js!"
    }

  return NextResponse.json(res)
}