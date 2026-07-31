
interface LargeTextProps{

    text : string
    textSize : string
    
}


export const LargeText = ({text, textSize} : LargeTextProps) => {
    return (
        <>
            <p className={`${textSize} text-base-200 font-poppins`}>{text}</p>
        </>

    )    
} 