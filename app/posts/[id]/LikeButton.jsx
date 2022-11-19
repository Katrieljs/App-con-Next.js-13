"use client"

export default function LikeButton(){
    const handleClick=()=>{
        alert("Me gusta el post")
    }
    return (
        <button onClick={handleClick}>Me gusta</button>
    )
}