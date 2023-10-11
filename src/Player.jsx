import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import List from './components/List'
import Detail from './components/Detail'
import './Player.css'

const Player = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/Player.json")
      .then((res) => {
        // console.log(res.data.list);
        setList(res.data.list)
      })
      
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/list' element={<List list={list}/>}/>
        <Route path='/detail/:idx' element={<Detail list={list}/>}/>
      </Routes>
    </div>
  )
}

export default Player
