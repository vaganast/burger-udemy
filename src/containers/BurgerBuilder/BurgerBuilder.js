import React , {Component} from 'react' ;

import Auxx from '../../hoc/Auxx'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


const INGREDIENT_PRICES = {
    salad : 0.5 ,
    cheese : 0.4 ,
    bacon : 0.7 ,
    meat : 1.3 ,
    
};

class BurgerBuilder extends Component {
    state={
        ingredients:{
            salad: 0 ,
            bacon: 0,
            cheese: 0,
            meat : 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type]= updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + this.priceAddition;
        this.setState({totalPrice: newPrice , ingredients:updateIngredients})


    }

    removeIngredientHandler = () => {
 
    }

    render(){
        return(
            <Auxx>
                <Burger ingredients={this.state.ingredients}/>
              <BuildControls 
                ingredientAdded={this.addIngredientHandler}/>
            </Auxx>
        );
    }
}

export default BurgerBuilder ;