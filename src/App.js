import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import HornedData from "./assets/data.json";
import SelectedBeast from "./components/SelectedBeast";
import HornForm from "./components/HornSelectForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: SelectedBeast,
      selectedHorns: {},
      show: false,
    };
  }

  selectedHorns = (event) => {
    const selectedHornsOption = event.target.value;
    const hornsSelected = HornedData.filter((item) => {
      if (selectedHornsOption === "All") {
        return (this.state = {
          selectedBeast: HornedData,
        });
      } else {
        return JSON.stringify(item.horns) === selectedHornsOption;
      }
    });
    console.log(hornsSelected);

    this.setState({
      selectedHorns: hornsSelected,
    });
  };
  displayModal = (title) => {
    const selectedCardBeast = HornedData.filter((item) => {
      return item.title === title;
    });

    this.setState({
      show: true,
      selectedBeast: selectedCardBeast[0],
    });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <Header />
        <HornForm selectedHorns={this.selectedHorns} />
        <Main HornedData={HornedData} displayModal={this.displayModal} />
        <SelectedBeast
          selectedBeast={this.state.selectedBeast}
          show={this.state.show}
          handleClose={this.handleClose}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
