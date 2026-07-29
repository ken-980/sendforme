

interface DateFormatProps {
    monthFormat: "numeric" | "2-digit" | "long" | "short" | "narrow"
    yearFormat : "numeric" | "2-digit"
    className? : string
}

export const DateFormat = ({monthFormat = "short", yearFormat = "numeric", className } : DateFormatProps) => {

    const format = new Date();
    return (
        <>
            <span className={className}>
                { (new Intl.DateTimeFormat("en-US", { month: monthFormat, year: yearFormat } ).format(format)) }
            </span>
        </>
    )

}