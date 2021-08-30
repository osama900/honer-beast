import React from "react";
import HornedBeasts from "./HornedBeasts";
import Information from "../assets/data.json";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DataR: Information,
    };
  }

  render() {
    return (
      <main>
        {this.state.DataR.map((value, index) => {
          return (
            <HornedBeasts
              title={value.title}
              description={value.description}
              imgUrl={value.image_url}
            />
          );
        })}
      </main>
    );
  }
}

export default Main;
