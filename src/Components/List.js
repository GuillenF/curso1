import React from 'react'
import { List, Typography, Divider } from 'antd';
import {DeleteOutlined} from '@ant-design/icons'
import {EditOutlined} from '@ant-design/icons'

export default (props) => {
    return (
        <List
            header={<div>Lista</div>}
            bordered
            dataSource={props.data}
            renderItem={item => (
                <List.Item>
                    <Typography.Text>{item}</Typography.Text>
                    <DeleteOutlined
                        style={{color: 'red',
                            alignItems: 'right'}}    
                        onClick={() => props.removeName(item)}
                        /> 
                    <EditOutlined 
                        style={{color: 'green'}}
                        onClick={() => props.editName(item)}
                        />
                </List.Item>
            )}
        />
    )
}