import React, { Component } from 'react'
import './Burgur.css'
import { connect } from 'react-redux'
class Burgur extends Component {

    renderFood = (num, classChild) => {
        let food = []
        for (let index = 0; index < num; index++) {
            let item = <div key={index} className={`${classChild}`}></div>
            food.push(item)
        }
        return food
    }

    renderListFood = () => {
        return this.props.listFood.map((food, index) => {
            switch (food.name) {
                case 'salad':
                    return <div key={index}>
                        {this.renderFood(food.amount, food.name)}
                    </div>
                case 'cheese':
                    return <div key={index}>
                        {this.renderFood(food.amount, food.name)}
                    </div>
                default:
                    return <div key={index}>
                        {this.renderFood(food.amount, food.name)}
                    </div>
            }
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="breadTop"></div>
                {this.renderListFood()}
                <div className="breadBottom"></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listFood: state.BurgurReducer.burgur
    }

}

export default connect(mapStateToProps)(Burgur)
