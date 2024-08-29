import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const data = await req.json(); // Parse the JSON data
//     console.log(data); // Log the data to the console

//     return NextResponse.json({ message: "Data sent successfully" });
//   } catch (error) {
//     console.error("Error parsing JSON:", error);
//     return NextResponse.json({ error: "Bad Request" }, { status: 400 });
//   }
// }


export async function POST(req,res) {

  
  const {name,age}= await req.json();
  if(!name || !age) {
    return NextResponse.json({ error: "give me proper details" });

  
}

return NextResponse.json({  res:"data is store thanks" });
}
