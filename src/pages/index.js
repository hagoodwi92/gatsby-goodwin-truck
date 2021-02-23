import * as React from "react"
import logo from "./goodwin-logo.jpg"
import {Link} from 'react-bootstrap'

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <img src={logo} alt='logo'></img>
      <h1>Goodwin's Truck and Equipment</h1>
      <h3 style={headingStyles}>
      Your source for quality industrial trucks and equipment
        <br />
      </h3>
      <p style={paragraphStyles}>
        Feel free to browse our inventory with the buttons on the left.
        We also have featured inventory listed below on this page.
        Please contact us anytime to find out more!
      </p>
    </main>
  )
}

export default IndexPage;


// styles
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
