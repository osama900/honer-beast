import React from "react";
import HornedBeasts from "./HornedBeasts";
import Information from "../assets/data.json";

class Main extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       DataR: Information,
  //       votes: 0,
  //     };
  //   }
  // addAnotherClick = () => {
  //   this.setState({
  //     votes: this.state.votes + 1,
  //   });
  // };

  render() {
    return (
      <main>
        {Information.map((value) => {
          return (
            <HornedBeasts
              title={value.title}
              description={value.description}
              image_url={value.image_url}
            />
          );
        })}
      </main>
    );
  }
}

export default Main;
