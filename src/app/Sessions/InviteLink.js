import React from "react";
import {
  Form,
  Input,
  Checkbox,
  Button,
  Select,
  Segment,
  TextArea,
  Header,
  Modal,
} from "semantic-ui-react";

const InviteLink = ({ session }) => {
  const [open, setOpen] = React.useState(false);
  const expireOptions = [
    { text: "3 Hours", value: "3h" },
    { text: "12 Hours", value: "12h" },
    { text: "1 Day", value: "1d" },
    { text: "3 Days", value: "3d" },
    { text: "1 Week", value: "1w" },
    { text: "Never", value: "never" },
  ];

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Create invite link</Modal.Header>
      <Modal.Content image>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              control={Select}
              fluid
              label="Expires after"
              options={expireOptions}
              placeholder="Choose expiration"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              type="number"
              min="0"
              max="8"
              label="Maximum number of Players"
              placeholder="Player limit"
            />
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button.Group fluid>
          <Button color="red">Cancel</Button>
          <Button.Or />
          <Button color="green">Generate link</Button>
        </Button.Group>
      </Modal.Actions>
    </Modal>
  );
};

export default InviteLink;
