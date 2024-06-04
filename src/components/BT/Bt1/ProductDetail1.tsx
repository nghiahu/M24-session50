import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail1() {
    const {id} = useParams()

  return (
    <div>ProductDetail
        <p>Id : {id}</p>
    </div>
  )
}
