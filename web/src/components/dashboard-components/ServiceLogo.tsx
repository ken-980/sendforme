

interface ServiceLogoProps{
    divStyle? : string
    imgStyle? : string 
    imgSrc : string
    altAttributeValue: string 
}


export const ServiceLogo = ( {divStyle, imgStyle, imgSrc, altAttributeValue} : ServiceLogoProps ) => {
    return(
        <>
            <div className={divStyle ?? " "}>
                <img className={imgStyle ?? " "} src={imgSrc} alt={altAttributeValue} />
            </div>
        </>
    )
} 