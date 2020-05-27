import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';


 class MainTemplate extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default MainTemplate;
