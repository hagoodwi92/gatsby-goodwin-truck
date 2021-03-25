import * as React from "react";
import logo from "./goodwin-logo.jpg";
import { Link } from "gatsby";
import "fontsource-roboto";
import { Button, Container } from "@material-ui/core";


const Header = () => {
  return (
    <div>
      <title>Goodwin's Truck and Equipment</title>
      <h1>Goodwin's Truck and Equipment</h1>
      <h3 style={headingAccentStyles}>
        Your source for quality industrial trucks and equipment
        <br />
      </h3>
    </div>
  );
};

export default function IndexPage() {
  return (
    <React.Fragment>
      <Container>
        <div style={pageStyles}>
          <Header />
          <h4>Welcome to our new web site!</h4>{" "}
          <img style={logoSize} src={logo} alt="logo"></img>
          <br></br>
          <h4>Please navigate our site using the links below:</h4>
          <Link to="/aboutUs">
            <Button style={buttonStyle} variant="contained" color="primary">
              <p>About Us</p>
            </Button>
          </Link>
          <Link to="/inventory">
            <Button style={buttonStyle} variant="contained" color="primary">
              <p>Inventory</p>
            </Button>
          </Link>
          <Link to="/directions">
            <Button style={buttonStyle} variant="contained" color="primary">
              <p>Directions</p>
            </Button>
          </Link>
          <Link to="/contact">
            <Button style={buttonStyle} variant="contained" color="primary">
              <p>Contact</p>
            </Button>
          </Link>
          <Footer />
        </div>
      </Container>
    </React.Fragment>
  );
}

const Footer = () => {
  return (
    <h4>
      <Link style={linkStyle} to="/">
        Goodwin's Truck and Equipment
      </Link>{" "}
      | 404-608-8101 | 431 Old Dixie Way, Forest Park GA 30297
    </h4>
  );
};

// styles
const buttonStyle = {
  width: 150,
  height: 40,
  margin: 20,
  marginLeft: -10,
};
const space = {
  width: 400,
  height: "auto",
};
const logoSize = {
  maxWidth: "100%",
  height: "auto",
};
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#0e3786",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
};

const linkStyle = {
  color: "#0e3786",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};
