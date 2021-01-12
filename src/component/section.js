import React, {Component} from 'react'
import Products from './section/products'
import Details from './section/details'
import Cart from './section/cart'
import {Route} from 'react-router-dom'
import Payment from './section/payment'
export class Section extends Component{
    render(){
        return(
            <section>
              <Route path="/" component={Products} exact/>
                <Route path="/product" component={Products} exact/>
                <Route path="/product/:id" component={Details}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/payment" component={Payment}/>
            </section>
        )
    }

}
export default Section