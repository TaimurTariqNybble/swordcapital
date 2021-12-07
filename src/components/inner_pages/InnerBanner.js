import React, { Component } from 'react'

export default class InnerBanner extends Component {
    render() {
        return (

            <>
                <div className="inner-banner" style={{backgroundImage:this.props.img}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>{this.props.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
