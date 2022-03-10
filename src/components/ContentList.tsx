import {Layout} from 'antd';
import { Navbar } from './contentitem/navbar/Navbar';
import { Home } from './contentitem/home/Home';
import { TicketManage } from './contentitem/ticketmanage/TicketManage';
import { Setting } from './contentitem/ticketsetting/Setting';
import {TicketChange} from './contentitem/ticketchange/TicketChange'
import { Content } from 'antd/lib/layout/layout';


export const ContentList = () => {
    return (
        <div>
            <Layout>
                <Layout style={{background: '#f9f6f4'}}>
                    <Navbar/>
                    {/* <Home /> */}
                    {/* <TicketManage/> */}
                    {/* <TicketChange/> */}
                    <Setting/>
                </Layout>
            </Layout>
        </div>
    )
}