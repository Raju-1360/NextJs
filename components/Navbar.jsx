import { getDisplayName } from "next/dist/shared/lib/utils";
import Link from "next/link";

import "./nav.css"
import { REACT_LOADABLE_MANIFEST } from "next/dist/shared/lib/constants";
import RenderFromTemplateContext from "next/dist/client/components/render-from-template-context";
const Navbar =()=>{
    return(
        <>
        <nav >
            <ul>
                <div className="logo">
                    <h1>logo</h1>
                </div>
                <div className="link-container">

              <Link className="list"  href="/">home
              </Link>
              <Link  className="list" href="/about">about
              </Link>
              <Link  className="list" href="/about/contact">contact
              </Link>
              <Link  className="list" href="/about/contact/privacy">
              privacy</Link>
                </div>
            </ul>
        </nav>
        </>
    )
}

export default Na