import {React,useState, useEffect} from "react";
import "./stayle.css";
import { useHistory } from "react-router-dom";
import axios from "axios";



const Cards = () => {

    const history = useHistory()
   
    
    const [pok,setPok]=useState([]);

    useEffect(() => {
      getpok();
     
    }, [])

  
 const getpok = async ()=>{
   const respinciv = await axios.get('https://api.pokemontcg.io/v2/cards?pageSize=3');
   setPok(respinciv.data.data)
 }

  const cihing =(id)=>{
  history.push(`/Carid/${id}`)
console.log(id);
  }

  return (
    <div className="pearntimage">
      
      {pok.map((item) => {
        return (
            
          <div className="cardimage" >
            <h1>{item.name}</h1>
            <img src={item.images.small} alt="" onClick={() => cihing(item.id)} />
          </div>
        );
      })}
      
    </div>
  );
};

export default Cards;
