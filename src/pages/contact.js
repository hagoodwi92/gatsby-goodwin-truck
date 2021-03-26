import * as React from "react";
import { Link } from "gatsby";
import {
  Input,
  FormHelperText,
  InputLabel,
  FormControl,
  Button,
  Container,
} from "@material-ui/core";

// const BoxTest = () => {
//   return (
//       <Card style={pageStyles}>
//         <Card.Header as="H3">Our Contact Info:</Card.Header>
//         <ListGroup variant="flush">
//           <ListGroup.Item>Telephone: 404-608-8101</ListGroup.Item>
//           <ListGroup.Item>Email: sales@goodwintruck.com</ListGroup.Item>
//           <ListGroup.Item>Fax: 404-608-0164</ListGroup.Item>
//           <ListGroup.Item>
//             431 Old Dixie Way Forest Park, GA 30297
//           </ListGroup.Item>
//         </ListGroup>
//       </Card>
//   );
// };

const FormTest = () => {
  return (
    <React.Fragment>
      <FormControl>
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input id="email" aria-describedby="email-text" />
        <FormHelperText id="email-text">
          We'll never share your email.
        </FormHelperText>
        <Button type="submit" color="primary">Submit</Button>
      </FormControl>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Link style={linkStyle} to="/">
        <Button variant="contained" color="primary">
          Home
        </Button>
      </Link>
    </React.Fragment>
  );
};

const Contact = () => {
  return (
    <div style={pageStyles}>
      <Container>
        <h1 style={headingAccentStyles}>Contact Us</h1>
        <p>
          Please contact us if you have questions about any of our products.
          Please fill out the form below or contact us by telephone, fax, mail,
          or by e-mail. Thank you for your comments.
        </p>
        <FormTest />
      </Container>
    </div>
  );
};
export default Contact;

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingAccentStyles = {
  color: "#0e3786",
};

const linkStyle = {
  color: "#0e3786",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
};

