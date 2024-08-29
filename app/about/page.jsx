
"useClient"


import { Roboto } from "next/font/google";

const Robo =Roboto({subsets: ["latin"],weight: "500"});
 const  about =()=>{
    return (
        <>
        <h1 className={Robo.className}>This is a google front</h1>

        <h1>This is a default font </h1>
        </>
    )
}
export default about