import React from "react";
import HornedBeasts from "./HornedBeasts";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedHorns: {},
    };
  }

  render() {
    return (
      <main>
        {this.props.HornedData.map((value) => {
          return (
            <HornedBeasts
              image_url={value.image_url}
              title={value.title}
              description={value.description}
              keyword={value.keyword}
              horns={value.horns}
              selectedHorns={this.props.selectedHorns}
              displayModal={this.props.displayModal}
            />
          );
        })}
      </main>
    );
  }
}

export default Main;
