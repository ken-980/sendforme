import { Link } from "react-router"
import { Button } from "../../../components/dashboard-components/Button"
import { Greeting } from "../../../components/dashboard-components/Greeting"
import { StatBadge } from "../../../components/dashboard-components/StatBadge"
import { StatItem } from "../../../components/dashboard-components/StatItem"
import { ServiceLogo } from "../../../components/dashboard-components/ServiceLogo"
import { SegmentedProgress } from "../../../components/dashboard-components/SegmentedProgress"
import { DateFormat } from "../../../components/dashboard-components/DateFormat"
import { DashboardTable } from "../../../components/dashboard-components/static-components/DashboardTable"


export const DashboardHome = () => {

    return(
        <div className="space-y-4">

            {/*Greeting and new transaction button*/}
            <div className="flex justify-between py-2 outline-amber-500">
                <Greeting greetingText={`Good Afternoon, John!`}/>

                <Button buttonStyle={`btn btn-neutral font-poppins rounded-full flex bg-primary text-white p-4`} >
                    <span className="icon-[tabler--plus] size-4" area-hidden="true"> </span>
                    <Link  className="text-center " to={"/dashboard/send"}>
                        <p>New transaction</p> 
                    </Link>    
                </Button>
            </div>

            {/*Cards*/}
            <div className="grid grid-cols-3 gap-4">

                {/*card 1*/}
                <div className="shadow-md outline-1 rounded-2xl py-4 px-3 font-poppins">
                    <div>
                        <p className="text-primary">My Balance</p>
                    </div>

                    <div className="mt-6 mb-6">
                        <h5 className="text-secondary text-sm">Total balance</h5>
                        <h1 className="text-black text-5xl" >$74,000</h1>
                    </div>

                    <div className="space-y-2">
                        {/*stat badges*/}

                         <StatBadge iconClass="icon-[tabler--arrow-up-right]">  
                            <span className="text-slate-600 text-sm"> Last transaction</span>
                            <span className="text-error text-sm tracking-wide text-center"> -$15,500</span>
                        </StatBadge>

                         <StatBadge iconClass="icon-[tabler--cloud-dollar]">
                            <span className="text-slate-600 text-sm">Gas fee</span>
                            <span className="text-success text-sm tracking-wide">$700</span>
                         </StatBadge>
                           
                    </div>
                </div>

                {/*card 2*/}
                <div className="shadow-md outline-1 rounded-2xl py-4 px-3 font-poppins">
                    <div>
                        <p className="text-primary">Amount Sent</p>
                    </div>

                    <div className="mt-6 mb-3">
                        <h5 className="text-secondary text-sm">Total amount sent</h5>
                        <h1 className="text-black text-2xl" >$101,900</h1>
                    </div>

                    <div className="space-x-2 flex items-center gap-2">
                        {/*stat badges*/}

                         <StatBadge iconClass="icon-[tabler--arrow-up-right]">  
                            <span className="text-slate-600 text-sm">Total charges</span>
                            <span className="text-error text-sm tracking-wide">3.6%</span>
                        </StatBadge>

                         <StatBadge iconClass="icon-[tabler--cloud-dollar]">
                            <span className="text-slate-600 text-sm">Total charged</span>
                            <span className="text-success text-sm tracking-wide">$500</span>
                         </StatBadge>
                           
                    </div>

                    <div className="mt-2">
                        <span className="text-xs text-primary">Top services</span>
                        <div className="flex flex-wrap items-center rounded-2xl p-4 justify-between gap-8 md:gap-12 outline">
                            <StatItem label="Paypal" value="$28.3k" borderColorClass="border-emerald-600"/>

                            <StatItem label="Venmo" value="$38.5k" borderColorClass="border-lime-400" />

                            <StatItem label="Zelle" value="$34.4k" borderColorClass="border-teal-400" />
                        </div>
                    </div>

                </div>

                {/*card 3*/}
                <div>
                    <div className="shadow-md outline-1 rounded-2xl py-4 px-3 font-poppins">
                        <div>
                            <h1 className="text-black text-4xl" >$15,000</h1>
                            <h5 className="text-primary text-sm">Last transaction amount</h5>

                        </div>

                        <div className="mt-6 mb-6 space-x-2 flex items-center gap-2 ">
                            <StatBadge iconClass="icon-[tabler--arrow-up-right]">  
                                <ServiceLogo imgSrc="/images/paypal.png" imgStyle="w-12" altAttributeValue="PayPal"  />
                                {/* <span className="text-error text-sm tracking-wide text-center"> -$15,500</span> */}
                            </StatBadge>

                            <StatBadge iconClass="icon-[tabler--cloud-dollar]">
                                <span className="text-slate-600 text-sm">Gas fee</span>
                                <span className="text-success text-sm tracking-wide">1.5%</span>
                            </StatBadge>
                        </div>


                        <div className="space-y-2">
                            <SegmentedProgress value={50}/>
                        </div>

                        {/* date and limit*/}
                        <div className="my-2 flex justify-between" >
                            <DateFormat className="text-sm text-black" monthFormat="short" yearFormat="numeric"/>
                            
                            <StatBadge iconClass="icon-[tabler--flag-pause]">
                                <span className="text-slate-600 text-sm">Daily limit</span>
                                <span className="text-success text-sm tracking-wide">$500,000.00</span>
                            </StatBadge>
                        </div>
                    </div>

                </div>
            </div>

            {/*table*/}
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="col-span-2 shadow-md outline-1 rounded-2xl">
                    <DashboardTable />
                </div>

                {/*largest transfer*/}
                <div>
                    <div className="shadow-md outline-1 rounded-2xl py-4 px-3 font-poppins">
                        <div>
                            <p className="text-primary">Monthly transfer rank</p>
                        </div>

                        <div className="mt-6 mb-6">
                            <h5 className="text-secondary text-sm">Total balance</h5>
                            <h1 className="text-black text-5xl" >$74,000</h1>
                        </div>

                        <div className="space-y-2 mt-4 p-3">
                            {/*stat badges*/}

                            <StatBadge iconClass="icon-[tabler--arrow-up-right]">  
                                <span className="text-slate-600 text-sm"> Last transaction</span>
                                <span className="text-error text-sm tracking-wide text-center"> -$15,500</span>
                            </StatBadge>

                            <StatBadge iconClass="icon-[tabler--cloud-dollar]">
                                <span className="text-slate-600 text-sm">Gas fee</span>
                                <span className="text-success text-sm tracking-wide">$700</span>
                            </StatBadge>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}