import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './App.css';

import Header from './Header';
import Landing from './Landing.js';
const InitialSearch = () => <h2>InitialSearch</h2>;
const Footer = () => <div className="footer-container"><h2>Footer</h2></div>;
const ListView = () => <h2>ListView</h2>;
const MapView = () => <h2>MapView</h2>;


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/search" component={InitialSearch} />
            <Route path="/listview" component={ListView} />
            <Route path="/mapview" component={MapView} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
