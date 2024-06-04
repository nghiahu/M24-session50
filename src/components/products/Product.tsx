import React from 'react'
import './product.scss'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Product() {
    let products=[
        {
            id:1,
            name:"Duy Anh",
            price: 5000,
            image: "./public/image/76e27abe-1bae-42a1-bc09-47f333fb24a6.png"
        },
        {
            id:2,
            name:"Hưng",
            price: 5000,
            image: "./public/image/444765587_1707739539963636_6313064212453257806_n.jpg"
        },
        {
            id:1,
            name:"Anh Dũng",
            price: 15000,
            image: "./public/image/Ảnh chụp màn hình 2024-02-22 193517.png"
        },
    ]
    const navigate = useNavigate()
    const handleClickDetail=(id:number)=>{
        navigate(`/productDetail/${id}`)
    }
  return (
    <div className='outline'>Product
        {products.map((item)=>{
            return (
                <div className='list'>
                    <p>tên : {item.name}</p>
                    <p>giá : {item.price}</p>
                    <p> <img src={item.image} alt="" /></p>
                    <button>Mua</button>
                    <button onClick={()=>handleClickDetail(item.id)}>Chi tiết sản phẩm</button>
                </div>
            )
        })}
    </div>
  )
}
