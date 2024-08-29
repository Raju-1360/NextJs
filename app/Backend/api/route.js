import { NextResponse } from "next/server";

import {user} from "@/app/util/db"

// we can not give any name of function
export function GET() {
    const data = user;

    return NextResponse.json(data)
    
 

}

//return  NextResponse.json({result:"hello world ",name:"coder"});