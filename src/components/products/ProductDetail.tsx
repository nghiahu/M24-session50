import React from 'react'
import { useParams } from 'react-router-dom'
export default function ProductDetail() {
    let products=[
        {
            id:1,
            name:"Duy Anh",
            price: 5000,
            image: "./public/image/76e27abe-1bae-42a1-bc09-47f333fb24a6.png",
            address: "Thái Bình"
        },
        {
            id:2,
            name:"Hưng",
            price: 5000,
            image: "./public/image/444765587_1707739539963636_6313064212453257806_n.jpg",
            address: "Hải Phòng"
        },
        {
            id:1,
            name:"Anh Dũng",
            price: 15000,
            image: "./public/image/Ảnh chụp màn hình 2024-02-22 193517.png",
            address: "Quảng Ninh"
        },
    ]
    // dùng hook useParams
    const {params} = useParams()


    //lấy id ra
    let id = Number(params);
    const product = products.find(item=> item.id === id)
    if(!product){
        <p>not found</p>
        }
  return (
    <div>ProductDetail
        <p>Tên: {product?.name}</p>
        <p>Giá: {product?.price}</p>
        <img src={product?.image} alt="" />
    </div>
  )
}
