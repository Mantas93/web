import React, { useState } from 'react'
import './galery.css'
import GaletyCard from './GaletyCard'

const Galery = () => {
  const data = [
    { label: 'item 1', id: 1, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqammR48OkGtTFpo00TJXdCl4jLIsGB4cyoJoqHUDGmoiJMNpRv49XYmJ8-KxPnkIVxSg&usqp=CAU' }
    , { label: 'item 2', id: 2, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqammR48OkGtTFpo00TJXdCl4jLIsGB4cyoJoqHUDGmoiJMNpRv49XYmJ8-KxPnkIVxSg&usqp=CAU' }
    , { label: 'item 3', id: 3, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqammR48OkGtTFpo00TJXdCl4jLIsGB4cyoJoqHUDGmoiJMNpRv49XYmJ8-KxPnkIVxSg&usqp=CAU' }
    , { label: 'item 4', id: 4, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqammR48OkGtTFpo00TJXdCl4jLIsGB4cyoJoqHUDGmoiJMNpRv49XYmJ8-KxPnkIVxSg&usqp=CAU' }
    , { label: 'item 5', id: 5, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqammR48OkGtTFpo00TJXdCl4jLIsGB4cyoJoqHUDGmoiJMNpRv49XYmJ8-KxPnkIVxSg&usqp=CAU' }
    , { label: 'item 6', id: 6, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqammR48OkGtTFpo00TJXdCl4jLIsGB4cyoJoqHUDGmoiJMNpRv49XYmJ8-KxPnkIVxSg&usqp=CAU' }
    , { label: 'item 7', id: 7, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqammR48OkGtTFpo00TJXdCl4jLIsGB4cyoJoqHUDGmoiJMNpRv49XYmJ8-KxPnkIVxSg&usqp=CAU' }
    , { label: 'item 8', id: 8, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqammR48OkGtTFpo00TJXdCl4jLIsGB4cyoJoqHUDGmoiJMNpRv49XYmJ8-KxPnkIVxSg&usqp=CAU' }
  ]

  const [selected, setSelected] = useState([])

  return (
    <div className='galery'>
      <ul className='galery__list'>

        {data.map((item) => {
          return <GaletyCard selected={selected} item={item} setSelected={setSelected} />

        })}
      </ul>
    </div>
  )
}

export default Galery