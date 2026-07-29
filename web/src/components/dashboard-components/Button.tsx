import type React from "react"


interface ButtonProps {
    children? : React.ReactNode
    buttonStyle : string
    buttonText?: string
}


export const Button = ( {children, buttonStyle, buttonText} : ButtonProps ) => {
    
    return (<>
        <button className={buttonStyle ?? " "} >
            {buttonText}
            {children}
        </button>
    </>)
} 