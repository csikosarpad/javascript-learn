import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { Form, Button, Col } from "react-bootstrap";

@observer
class AddNewMenu extends Component {
  @observable newMenuName = "";
  @observable newMenuDescription = "";
  @observable newMenuId = "";
  @observable isValid = false;

  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group controlId="menuName" as={Col}>
            <Form.Label>New menu item name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Menu item name"
              onChange={this.handleMenuNameChange}
              value={this.newMenuName}
            />
            <Form.Control.Feedback type="invalid">
              Please fill the menu item name
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="menuId" as={Col}>
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the ID"
              onChange={this.handleIdChange}
              value={this.newMenuId}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please fill the menu item ID
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Text id="menuItemIdHelp" muted>
              Try to provide an understandable ID without space, comma
              separated, etc.
            </Form.Text>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="menuDescription" as={Col}>
            <Form.Label>Short description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Short description"
              onChange={this.handleDescriptionChange}
              value={this.newMenuDescription}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid description.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Button
            type="button"
            onClick={this.handleFormSubmit}
            disabled={this.isValid ? "" : "disabled"}
          >
            Add new item
          </Button>
        </Form.Group>
      </Form>
    );
  }

  @action
  handleMenuNameChange = (e) => {
    console.log("value: ", e.target.value);
    console.log("this: ", this);
    this.newMenuName = e.target.value;
    //this.validateForm();
  };

  @action
  handleDescriptionChange = (e) => {
    this.newMenuDescription = e.target.value;
    this.validateForm();
  };

  @action
  handleIdChange = (e) => {
    this.newMenuId = e.target.value;
    this.validateForm();
  };

  @action
  validateForm = () => {
    if (this.newMenuId && this.newMenuName && this.newMenuDescription) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  };

  @action
  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.store.addMenu({
      name: this.newMenuName,
      description: this.newMenuDescription,
      id: this.newMenuId,
    });
    this.newMenuName = "";
    this.newMenuDescription = "";
    this.newMenuId = "";
  };
}

export default AddNewMenu;
