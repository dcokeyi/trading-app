import React, { useEffect, useRef, useState } from "react";
import { Link} from "react-router-dom";
import { 
    VerticalContainer, 
} from "../Containers";

import './SideBar.css'
// import { AccountHeader } from "../AccountHeader";

interface SideBarProps {
    title?: string,
    items: {
        __typename?: string | undefined,
        id: string,
        name: string
    }[]| undefined,
    selectedNavItemId?: string,
    onNavItemSelected?: (navItemId: string) => void;
}

export const SideBar = (props: SideBarProps) => {
    // const [selectedItem, setSelectedItem] = useState("")
    const [clickedItem, setClickedItem] = useState("")
    const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
    const {title, items } = props

    useEffect(()=> {
        if (items && items.length > 0) {
            const firstItemId = items[0]?.id;
            setClickedItem(firstItemId)
            
            if (firstLinkRef.current) {
                firstLinkRef.current.click();
            }
        }
          
    }, [setClickedItem, items, firstLinkRef] )

    const handleClick = (id: string, name: string) => {
        // setSelectedItem(name)
        setClickedItem(id)
    }
    const ItemArray = items?.map((item, i) => <Link
        ref={i === 0 ? firstLinkRef : null} 
        to={item.id}
        onClick={() => handleClick(item.id, item.name)} 
        key={item.id}
        className={`py-1 ${clickedItem === item.id ? "accounts__content_selected": "accounts__content"}`} 
        >{item.name}</Link> 
    );


    return (
        <VerticalContainer className="accounts__container p-2">
            <p className="account__title">{title}</p>
            {ItemArray} 
        </VerticalContainer>
    )
}