import React, {useEffect, useRef} from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "../Button/Button";
import { links } from "./Data";
import { FaRedo } from "react-icons/fa"
import './AccountHeader.css'

export const AccountHeader = () => {
    const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
        if (firstLinkRef.current) {
            firstLinkRef.current.click()
        }
    },[firstLinkRef])

    const RenderLinks = links.map((item, i) => 
        <Link 
        ref={i === 0 ? firstLinkRef : null}
        to={`${item.title}`} 
        key={item.id} 
        className="accountheader__links p-1"
        >{item.title}</Link>
    )

    return (
        <div className="bg-neutral-light flex justify-between px-1">
           <div className="flex">
                {links && RenderLinks}
           </div>
           <div className="flex">
                <Button 
                    title="Transfer"
                    rootClass={`accountheader__button m-1`}
                    label=""
                    handleClick={""}
                />
                <Button 
                    title="Trade"
                    rootClass={`accountheader__button m-1`}
                    label=""
                    handleClick={""}
                />
                <FaRedo className="accountheader__refresh mt-2"/>
           </div>
           
            <Outlet/>
        </div>
    )
}