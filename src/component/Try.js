// import React from 'react'
// import Cocktails from './Cocktails'


// const Try = ({location:{state:{Cocktail}},history,}) => {
//     console.log(Cocktail);
//     return (
//         <div>
//            {/* <Cocktails cocktail={Cocktail} />
//            <button onClick={()=>history.goBack()}>Go bacK</button> */}
           
//         </div>
        
//     )
// }

// export default Try
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import './Try.css';
const Try = ({match:{params:{id}},history}) => {
    const [drink, setDrink] = useState("");
    // const{id}=useParams
     useEffect(() => {
         getDrink();
         
     }, [],);
     
        
    
const getDrink=async()=>{
   const {data}= await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
   setDrink(data.drinks[0]);
};


return <div>
<div className="recipe-card">
        <aside>
          <img src={drink.strDrinkThumb} alt="Chai Oatmeal" style={{width: '40%'}}/>
          
        </aside>
        <article>
          <h2>{drink.strDrink}</h2>
          <h3>{drink.strTags}</h3>
          <ul>
            <li><span/><span>{drink.idDrink}</span></li>
            <li><span/><span>{drink.strCategory}</span></li>
            <li><span/><span>{drink.strAlcoholic}</span></li>
            <li><span /><span>{drink.strGlass}</span></li>
          </ul>
          <p>{drink.strInstructions}.</p>
          <p className="ingredients"><span>Ingredients:&nbsp;</span>{drink.strIngredient1},{drink.strIngredient2},{drink.strIngredient3},{drink.strIngredient4}     </p>
        </article>
      </div>
    <button onClick={()=>history.goBack()}>Go bacK</button> 


    
</div>

}

export default Try
