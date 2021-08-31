import React from "react";
import Card from "react-bootstrap/Card";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    // this.Heart = '❤️';
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
            {/* <Card.Text>{this.props.keyword}</Card.Text> */}

            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>
              {"❤️"} {this.state.votes}
            </Card.Text>

            {/* <Button variant="primary" onClick={this.addAnotherClick}>
              Click Me {this.state.votes}{" "}
            </Button> */}
          </Card.Body>
        </Card>
        {/* 
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <img
          src={this.props.imgUrl}
          alt={this.props.title}
          title={this.props.title}/> */}
      </div>
    );
  }
}
export default HornedBeasts;
