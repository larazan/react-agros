import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from "../components/ScrollToTop";

class Layout extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="page_container container mx-auto min-h-screen">
                    {this.props.children}
                </div>
                <div id="snackbar-fixed-container" ></div>
                <Footer/>
                <ScrollToTop />
            </div>
        );
    }
}

export default Layout;