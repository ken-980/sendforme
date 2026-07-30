import { ServiceLogo } from "../ServiceLogo";
import { StatBadge } from "../StatBadge";




export const DashboardTable = () => {
    
    let id = 1;
    const rows = [
        {id: id++, name: "John Doe", email: "doe@gmail.com", status: "Reject", date: "05/26"},
        {id: id++, name: "Jane Smith", email: "smith@gmail.com", status: "Reject", date: "05/26"},
        {id: id++, name: "Jane Smith", email: "smith@gmail.com", status: "Success", date: "05/26"},
        {id: id++, name: "Jane Smith", email: "smith@gmail.com", status: "Pending", date: "05/26"}



    ]
    return(
        <>

            <div className="w-full pb-2">
                <table className="table table-sm h-54 overflow-x-auto table-pin-rows table-pin-cols ">
                    <thead>
                    <tr className="text-xs *:first:rounded-s-md *:last:rounded-e-md">
                        <th className="text-primary">Name</th>
                        <th className="text-primary">Service</th>
                        <th className="text-primary">Status</th>
                        <th className="text-primary">Date</th>
                    </tr>
                    </thead>
                    <tbody>
                        { rows.map((row) => { return( 
                            <tr key={row.id}>
                                <td className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="bg-base-content/10 h-10 w-10 rounded-full">
                                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="product image" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-sm text-gray-900 font-medium ">{row.name}</div>
                                        <div className="text-sm  text-gray-800">{row.email}</div>
                                    </div>
                                </td>
                                <td> 
                                    <ServiceLogo divStyle="avatar" imgStyle="w-12" altAttributeValue="paypal" imgSrc="/services/paypal.png"/> 
                                </td>
                                <td>
                                    <StatBadge iconClass="icon-[tabler--arrow-up-right]">
                                        <span className="text-slate-600 text-sm">Sent</span>
                                        <span className="text-success text-sm tracking-wide">$400</span>
                                    </StatBadge>
                                </td>
                                <td className="text-slate-800">{row.date}</td>
                            </tr>
                        )})}

                    </tbody>
                </table>
            </div>

        </>
    )
}