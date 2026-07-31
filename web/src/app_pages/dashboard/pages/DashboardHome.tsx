import { Link } from "react-router"
import { Button } from "../../../components/dashboard-components/Button"
import { LargeText } from "../../../components/dashboard-components/LargeText"
import { StatBadge } from "../../../components/dashboard-components/StatBadge"
import { StatItem } from "../../../components/dashboard-components/StatItem"
import { ServiceLogo } from "../../../components/dashboard-components/ServiceLogo"
import { SegmentedProgress } from "../../../components/dashboard-components/SegmentedProgress"
import { DateFormat } from "../../../components/dashboard-components/DateFormat"
import { CoinStat } from "../../../components/dashboard-components/CoinSat"





export const DashboardHome = () => {

    const coins = [
        {coinName : "BTC", imgSrc : "/coins/bitcoin.png", currentPrice : "$77,788.00", stateText : "Up 2.5% since last week", isActive: true},
        {coinName : "ETH", imgSrc : "/coins/eth.png", currentPrice : "$67,788.00", stateText : "Down 3.5% since last week", isActive: false},
        {coinName : "SOL", imgSrc : "/coins/sol.png", currentPrice : "$37,788.00", stateText : "Up 1.5% since last week", isActive: true},
        {coinName : "USDT", imgSrc : "/coins/usdt.png", currentPrice : "$27,788.00", stateText : "Down 1.5% since last week", isActive: false},
    ]

     const baseStylesForCard  = "hover:shadow-lg shadow-md outline-1 transition-all rounded-2xl py-4 px-3 font-poppins";


    return(
        <div className="space-y-3">

            {/*Greeting and new transaction button*/}
            <div className="flex justify-between py-2">
                <LargeText textSize="text-3xl" text={`Good Afternoon, John!`}/>

                <Button buttonStyle={`btn btn-neutral font-poppins shadow-sm hover:shadow-lg transition-all rounded-full flex bg-primary text-white p-4`} >
                    <span className="icon-[tabler--plus] size-4" area-hidden="true"> </span>
                    <Link  className="text-center " to={"/dashboard/send"}>
                        <p>New transaction</p> 
                    </Link>    
                </Button>
            </div>

            {/*Cards*/}
            <div className="grid grid-cols-3 gap-4">

                {/*card 1*/}
                <div className={` ${baseStylesForCard}`} >
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
                <div className={` ${baseStylesForCard}`}>
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
                            <StatItem label="Venmo" value="$38.5k" borderColorClass="border-blue-400" > 
                                <ServiceLogo divStyle="avatar" imgStyle="w-12" altAttributeValue="paypal" imgSrc="/services/paypal.png"/>
                            </StatItem>

                            <StatItem label="Venmo" value="$38.5k" borderColorClass="border-lime-400" > 
                                <ServiceLogo divStyle="avatar" imgStyle="w-12" altAttributeValue="cashpp logo" imgSrc="/services/cashapp.png"/>
                            </StatItem>

                            <StatItem label="Venmo" value="$38.5k" borderColorClass="border-teal-400" > 
                                <ServiceLogo divStyle="avatar" imgStyle="w-12" altAttributeValue="Venmo logo" imgSrc="/services/zelle.png"/>
                            </StatItem>

                        </div>
                    </div>

                </div>

                {/*card 3*/}
                <div>
                    <div className={` ${baseStylesForCard} `}>
                        <div>
                            <h1 className="text-black text-4xl" >$15,000</h1>
                            <h5 className="text-primary text-sm">Last transaction amount</h5>

                        </div>

                        <div className="mt-6 mb-6 space-x-2 flex items-center gap-2 ">
                            <StatBadge iconClass="icon-[tabler--arrow-up-right]">  
                                <ServiceLogo imgSrc="/services/paypal.png" imgStyle="w-12" altAttributeValue="PayPal"  />
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
                        <div className="my-2 flex items-center justify-between" >
                            <DateFormat className="text-sm text-black" monthFormat="long" yearFormat="numeric"/>
                            
                            <StatBadge iconClass="icon-[tabler--flag-pause]">
                                <span className="text-slate-600 text-sm">Daily limit</span>
                                <span className="text-success text-sm tracking-wide">$500,000.00</span>
                            </StatBadge>
                        </div>
                    </div>

                </div>
            </div>

            {/*coins card*/}
            <div className="grid grid-cols-3 gap-4 mt-1 ">
                <div className={`col-span-2 grid sm:grid-cols-2 gap-2 hover:shadow-lg rounded-2xl outline-1 p-2 overflow-y-auto scrollbar-thin`}>
                    { coins.map((coin) => (
                        <CoinStat key={coin.coinName} coin={coin} />
                    )) }
                </div>

                {/*largest transfer*/}
                <div>
                    <div className={` ${baseStylesForCard} `}>
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