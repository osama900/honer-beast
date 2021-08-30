import React from "react";
import HornedBeasts from "./HornedBeasts";
import Information from "../assets/data.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DataR: Information,
      votes: 0,
    };
  }
  addAnotherClick = () => {
    this.setState({
      votes: this.state.votes + 1,
    });
  };

  render() {
    return (
      <main>
        {this.state.DataR.map((value, index) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={value.image_url} />
              <Card.Body>
                <Card.Title>{value.title}</Card.Title>
                <Card.Text>{value.keyword}</Card.Text>

                <Card.Text>{value.description}</Card.Text>

                <Button variant="primary" onClick={this.addAnotherClick}>
                  Click Me {this.state.votes}{" "}
                </Button>
              </Card.Body>
            </Card>
            // <HornedBeasts
            //   title={value.title}
            //   description={value.description}
            //   imgUrl={value.image_url}
            // />
          );
        })}
      </main>
    );
  }
}

export default Main;
