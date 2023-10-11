import React from 'react'
import Item from './Item'

const List = ({ list }) => {
    console.log(list);
    const list_mf = list.filter(item => item.position == 'MF')
    return (
        <div className='list-container'>
            <h1>KOREA REPUBLIC</h1>
            <div className='item-container'>
                {list.map((item, index) => <Item key={item.name} data={item} idx={index} />)}
            </div>

            <h1>MF</h1>
            <div className='item-container'>
                {list_mf.map((item, index)=> <Item key={item.name} data={item} idx={index} />)}

            </div>
        </div>
    )
}

export default List
