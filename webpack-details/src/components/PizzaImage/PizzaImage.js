import React from 'react'
import PizzaImage from '../../assets/pizza.jpeg'
import classes from './PizzaImage.module.css'

const PizzaImage = (props) => {
    return (
        <div className={classes.PizzaImage}>
            <img src={PizzaImage} alt="pizzaimage" className={classes.PizzaImg}/>
        </div>
    )
}

export default PizzaImage
