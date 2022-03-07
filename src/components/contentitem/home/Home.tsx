import {Layout, Input, Button, Table, Tag, Radio, Space, DatePicker, Checkbox, Divider} from 'antd';
import './Home.css'
import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';
const { Content } = Layout;


export const Home = () => {
    const DemoArea = () => {
        const [data, setData] = useState([]);
    
        useEffect(() => {
            asyncFetch();
        }, []);
    
        const asyncFetch = () => {
            fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
                .then((response) => response.json())
                .then((json) => setData(json))
                .catch((error) => {
                    console.log('fetch data failed', error);
                });
        };
        const config = {
            data,
            xField: 'timePeriod',
            yField: 'value',
            xAxis: {
                range: [0, 1],
            },
            smooth:true,
            line: {
                color: '#ff6600',
                size: 4,
            },
            
            areaStyle: () => {
                return {
                  fill: 'l(270) 0:#ffffff 0.5:#ffa200 1:#ffb431',
                };
              },
        };
    
        return <Area {...config} />;
    };

    return (
        <div>
            <Layout className="layout_content-home">
                <Content className="content-home">
                    <h2 className="content-home_title">Thống kê</h2>
                    <span className="content-home_charttitle">Doanh thu</span>
                    {/*   */}
                    <div className="content-home_chart">
                        <DemoArea/>
                    </div>
                    <span className="content-home_totalrevenuetitle">Tổng doanh thu theo tuần</span>
                    <span className="content-home_totalrevenue">525.145.000</span>
                    <span className="content-home_totalrevenueunit">đồng</span>

                </Content>
            </Layout>
        </div>
    )
}