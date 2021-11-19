import React from 'react'; 


import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';


const controls = [
    {label: 'Salad' , type : 'salad'},
    {label: 'Bacon' , type : 'bacon'},
    {label: 'Cheese' , type : 'cheese'},
    {label: 'Meat' , type : 'meat'},
]

const buildcontrols = (props) => (

    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label}
             label={ctrl.label}
      
             added={() => props.ingredientAdded(ctrl.type)} />
        )) }

    </div>
);

export default buildcontrols ;