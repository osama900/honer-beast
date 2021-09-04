import "./App.css";
import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HornedData from "./assets/data.json";
import SelectedBeast from "./components/SelectedBeast";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: HornedData,
      show: false,
    };
  }
  displayModal = (title) => {
    const selectedCardBeast = HornedData.filter((item) => {
      return item.title === title;
    });

    this.setState({
      show: true,
      selectedBeast: selectedCardBeast[0],
    });
    console.log(selectedCardBeast[0].title);
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <Header />
        <Main HornedData={HornedData} displayModal={this.displayModal} />
        <SelectedBeast
          selectedBeast={this.state.selectedBeast}
          show={this.state.show}
          handleClose={this.handleClose}
          displayModal={this.props.displayModal}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
