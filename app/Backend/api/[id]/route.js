import { NextResponse } from "next/server";

// request and response
export function GET(request, { params }) {
    const { id } = params;
    return NextResponse.json({ id });
}
