import React from 'react'
import { useNavigate } from 'react-router-dom'

const Item = ({data, idx}) => {
    /*
    프로필 카드 클릭 시 해당하는 선수의 상세페이지로 이동
    /detail/idx
    => useNavigate()
    */
    const nav = useNavigate()
  return (
    <div className='item-item' onClick={()=>{
        nav(`/detail/${idx}`)
    }}>
      <img src={data.imgSrc}/>
      <table>
        <tbody>
        <tr>
            <td>이름</td>
            <td>{data.name}</td>
        </tr>
        <tr>
            <td>포지션</td>
            <td>{data.position}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Item
