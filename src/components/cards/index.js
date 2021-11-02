import React from "react";
import "./stayle.css";
import { useHistory } from "react-router-dom";



const Cards = () => {

    const history = useHistory()
   
    
  const card = [
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
  ];

  const cihing =(id)=>{
  history.push(`/Carid/${id}`)
console.log(id);
  }

  return (
    <div className="pearntimage">
      <h1>cards</h1>
      {card.map((item) => {
        return (
            
          <div className="cardimage" >
            <h1>{item.City}</h1>
            <img src={item.imgurl} onClick={() => cihing(item.id)} />
          </div>
        );
      })}
      
    </div>
  );
};

export default Cards;
