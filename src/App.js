import "./App.css";
import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SelectedBeast from "./components/SelectedBeast";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClose = (e) => {
    // alert("dddddddddddddd");
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
        <SelectedBeast show={this.state.show} handleClose={this.handleClose} />
      </div>
    );
  }
}

export default App;
