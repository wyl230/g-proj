import { Card, Col, Row } from 'antd';
import React from 'react';

import { Grid } from 'antd';



const Cards = (props) => {

    const cards_num_per_row = 3;
    const total_num = props.overview_info.length;
    const row_count = Math.ceil(total_num / cards_num_per_row)

    const items = props.overview_info.map((item) => {
            console.log(props.overview_info, '1234');
            return (
                <Col span={8}>
                    <Card title={item.name} span={8}>
                        {item.description}
                    </Card>
                </Col>
            );
        });
    const rows = () => {
        return <Row gutter={[16, 16]}>
        {(() => {
            const tmp = [];
            for(let k = 0; k < props.overview_info.length; ++k) {
                tmp.push(items[k])
            }
            return tmp;
        })()}
        </Row>

        //* 不自动换行时的函数式写法 
        // for(let i = 0; i < row_count; ++i) {
        //     row_item.push(
        //         <Row gutter={[16, 16]}>
        //         {(() => {
        //             const tmp = [];
        //             for(let k = 0; k < cards_num_per_row; ++k) {
        //                 tmp.push(items[i * cards_num_per_row + k])
        //             }
        //             return tmp;
        //         })()}
        //         </Row>
        //     )
        // }
        // return row_item;
    }
        

    return (
        <>
        {rows()}
{/* 
        <Row gutter={[16, 16]}>
        <Col span={8}>
        <Card title="Card title" bordered={false}>
            Card content
        </Card>
        </Col>
        <Col span={8}>
        <Card title="Card title" bordered={false}>
            Card content
        </Card>
        </Col>
        </Row> */}

        
        </>
        // <p>32</p>
    );
}
export default Cards;