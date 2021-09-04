import React from "react";
import HornedBeasts from "./HornedBeasts";
//import SelectedBeast from "./SelectedBeast";

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
        {this.props.HornedData.map((value) => {
          return (
            <HornedBeasts
              title={value.title}
              description={value.description}
              image_url={value.image_url}
              horns={value.horns}
              keyword={value.keyword}
              displayModal={this.props.displayModal}
            />
          );
        })}
      </main>
    );
  }
}

export default Main;
