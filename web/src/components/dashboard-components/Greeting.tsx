
interface GreetingProps{

    greetingText : string
}


export const Greeting = ({greetingText } : GreetingProps) => {
    return (
        <div className={" text-base-200 text-3xl  font-poppins"}>
            <h2>{greetingText}</h2>
        </div>
    )    
} 