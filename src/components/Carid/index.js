

import {React, useState} from 'react'
import { useParams} from "react-router";
import "./stayle.css"



const Carid = () => {
  
   
    const [card] = useState([
        {
          id: 1,
          City: "Kingdom Saudi Arabia",
          imgurl:"https://images.pexels.com/photos/5561857/pexels-photo-5561857.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 2,
          City: "United States of America",
          imgurl:"https://images.pexels.com/photos/5847357/pexels-photo-5847357.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
    
        {
          id: 3,
          City: "France",
          imgurl:"https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 ",
        },
      ])
    
    const {id} = useParams();
    
    let myId = card.find((item)=>{
        return(Number(id)===item.id)
    })
    
   
    return (
       
        <div className="ciald-image">
                 

            <h1>{myId.City}</h1>
            <img src={myId.imgurl}/>
        </div>
    )
    
        

    
    
}

export default Carid
