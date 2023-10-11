import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = ({ list }) => {

    const { idx } = useParams()

    return (
        <div className='item-item'>
            <img src={list[idx].imgSrc} />
            <table>
                <tbody>
                    <tr>
                        <td>이름</td>
                        <td>{list[idx].name}</td>
                    </tr>
                    <tr>
                        <td>포지션</td>
                        <td>{list[idx].position}</td>
                    </tr>
                    <tr>
                        <td>나이</td>
                        <td>{list[idx].age}</td>
                    </tr>
                    <tr>
                        <td>키/몸무게</td>
                        <td>{list[idx].height + "/" + list[idx].weight}</td>
                    </tr>
                    <tr>
                        <td>소속팀</td>
                        <td>{list[idx].team}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Detail
