import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

const InitialSearch = () => <h2>InitialSearch</h2>;
const Footer = () => <h2>Footer</h2>;
const ListView = () => <h2>ListView</h2>;
const MapView = () => <h2>MapView</h2>;

const Landing = () => <h2>Landing</h2>;


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
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

export default App;
