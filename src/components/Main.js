import React from "react";
import HornedBeasts from "./HornedBeasts";
import Information from "../assets/data.json";
import SelectedBeast from "./SelectedBeast";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <main>
        {Information.map((value) => {
          return (
            <div>
              <HornedBeasts
                title={value.title}
                description={value.description}
                image_url={value.image_url}
              />
              <SelectedBeast
                show={this.state.show}
                handleClose={this.handleClose}
              />
            </div>
          );
        })}
      </main>
    );
  }
}

export default Main;
