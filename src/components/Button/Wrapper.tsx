import React, { useState } from "react";
import { Button } from "./Button";

export const Wrapper = () => {
    const [count, setCount] = useState(false)

    const handleCount = () => {
        setCount(true)
    } 

    return (
        <div>
            <p>The Button was {count ? "Clicked" : "Not Clicked"}</p>
            <Button 
              label="Click Me" 
              rootClass="btn-primary" 
              title="Click Me" 
              handleClick={handleCount}
            />
        </div>
    )
}