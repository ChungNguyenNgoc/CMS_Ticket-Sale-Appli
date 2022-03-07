
import {Layout } from 'antd';
import {PackageTicketList} from './ticketchangeitem/PackageTicketList'
import {TicketFilter} from './ticketchangeitem/TicketFilter'


export const TicketChange = () => {
    return (
        <div className='' style={{display: 'flex'}}>
            <PackageTicketList/>
            <TicketFilter/>
        </div>


    )
}