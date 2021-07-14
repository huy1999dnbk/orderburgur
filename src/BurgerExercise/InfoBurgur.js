import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleChange} from '../redux/action/BurgurAction'
class InfoBurgur extends Component {

    tongTien = () => {
        return this.props.burgur.reduce((tongTien,item,index) => {
            return tongTien+=item.amount * item.initialPrice
        },0)
    }

    tinhTien = (foodName) => {
        let temp = this.props.burgur.find(item => item.name === foodName )
        return temp.amount * temp.initialPrice
    }

    renderInfo = () => {
        return this.props.burgur.map((food, index) => {
            console.log(food.name)
            return <tr key={index}>
                <td scope="row">{food.name}
                </td>
                <td>
                    <span className="ml-5">
                        <button className="btn btn-danger" onClick={() => this.props.dispatch(handleChange(food.name,-1))}>-</button>
                        {food.amount}
                        <button className="btn btn-success" onClick={() => this.props.dispatch(handleChange(food.name,1))}>+</button>
                    </span>
                </td>
                <td className="text-center">{food.initialPrice}</td>
                <td className="text-center">{this.tinhTien(food.name)}</td>
            </tr>
        })
    }

    render() {


        return (
            <div className="container-fluid">
                <div className="card text-left">
                    <h3 className="text-center text-success">Choose Your Food</h3>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>THUC AN</th>
                                    <th></th>
                                    <th>DON GIA</th>
                                    <th>THANH TIEN</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderInfo()}
                                <tr>
                                    <td className="text-right" colSpan={3} scope="row">THANH TIEN</td>
                                    <td className="text-center">{this.tongTien()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        burgur: state.BurgurReducer.burgur,
    }
}


export default connect(mapStateToProps)(InfoBurgur)
