import * as React from 'react';
import {ListGroup } from 'react-bootstrap';
import Card from "react-bootstrap/Card";


const BoxTest = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header><h3>Our Contact Info: </h3></Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Telephone: 404-608-8101</ListGroup.Item>
        <ListGroup.Item>Email: sales@goodwintruck.com</ListGroup.Item>
        <ListGroup.Item>Fax: 404-608-0164</ListGroup.Item>
        <ListGroup.Item>431 Old Dixie Way
Forest Park, GA 30297</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}


const Contact = () => {
  return (
    <main style={pageStyles}>
      <h1>Contact</h1>
      <p>Please contact us if you have questions about any of our
      products.  Please fill out the form below or contact us by
      telephone, fax, mail, or by e-mail.  Thank you for your
comments.</p>
      <BoxTest />
    </main>
  )
}
export default Contact;


const boxStyles = {
  color: 'black',
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}