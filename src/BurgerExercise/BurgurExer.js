import React, { Component } from 'react'
import Burgur from './Burgur'
import InfoBurgur from './InfoBurgur'
import './burgurExer.css'
export default class BurgurExer extends Component {
    render() {
        return (
            <div className="bg-burgur container-fluid">
                <h1 className="txt-title text-center text-danger">Order Burgur</h1>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-6">
                            <Burgur />
                        </div>
                        <div className="col-6">
                            <InfoBurgur />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
