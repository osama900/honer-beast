import React from "react";
import HornedBeasts from "./HornedBeasts";
import Information from "../assets/data.json";

class Main extends React.Component {
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
