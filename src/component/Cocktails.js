
import React from 'react'
import './Cocktail.css';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import { Link } from 'react-router-dom';
const Cocktails = ({ cocktail }) => {
  
  return (
    <div style={{display : 'flex'}} >
      <div class="card-container">
  <div class="card u-clearfix">
    <div class="card-body">
      <span class="card-number card-circle subtle">{cocktail.idDrink}</span>
      <span class="card-author subtle">{cocktail.strCategory}</span>
      <h2 class="card-title">{cocktail.strDrink}e</h2>
      <span class="card-description subtle">{cocktail.strInstructions}</span>
      <Link to={`/Home/Try/${cocktail.idDrink}`}>
					
					{/* // pathname:
					// // state:{Cocktail:cocktail}
          // 	> */}
					
				
			
				<div class="card-read">Details</div>
				 </Link>
      
      
      
      <span class="card-tag card-circle subtle"><LocalBarIcon/></span>
    </div>
    <img src={cocktail.strDrinkThumb} alt="cocktail" class="card-media" style={{width: '40%'}}/>
  </div>
  <div class="card-shadow"></div>
</div>
    </div>
  )
}

export default Cocktails
