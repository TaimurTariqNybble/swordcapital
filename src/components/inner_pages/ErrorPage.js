import React, { Component } from 'react'

export default class ErrorPage extends Component {
    render() {
        return (
            <>
                <div className="inner-pages-text content-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <img width="440px" src="https://sword-capital.com/dev/wp/wp-content/uploads/2021/11/404-img.png" alt=""/>
                                <h2>404, Page not found</h2>
                                <p>The page you requested cannot be found. The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
