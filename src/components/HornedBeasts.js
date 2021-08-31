import React from "react";
import Card from "react-bootstrap/Card";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    };
  }

  addAnotherClick = (e) => {
    this.setState({
      votes: this.state.votes + 1,
    });
  };
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            onClick={this.addAnotherClick}
            variant="top"
            src={this.props.image_url}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>

            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>
              {"❤️"} {this.state.votes}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default HornedBeasts;
