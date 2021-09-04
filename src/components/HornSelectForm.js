import React from "react";
import Form from "react-bootstrap/Form";

class hornsSelectForm extends React.Component {
  render() {
    return (
      <div>
        <Form.Select
          onChange={this.props.selectedHorns}
          aria-label="Default select example"
        >
          <option value="All">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </Form.Select>
      </div>
    );
  }
}
export default hornsSelectForm;
