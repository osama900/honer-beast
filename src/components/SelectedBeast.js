import React from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class SelectedBeast extends React.Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.description}
            <Card style={{ width: '100%"' }}>
              <Card.Img
                variant="top"
                src={this.props.selectedBeast.image_url}
                className="cardImg"
              ></Card.Img>
              <Card.Body>
                <Card.Text>{this.props.selectedBeast.description}</Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;
