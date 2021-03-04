import React from "react";
import { Link } from "gatsby";

export default function AboutUs() {
  return (
    <div style={pageStyles}>
      <h1>About Us</h1>
      Located in metro Atlanta, Goodwin's Truck & Equipment specializes in
      selling high-value industrial equipment at competitive prices. In addition
      to buses, trucks, tractors, trailers and yard equipment, we have a large
      (and growing) selection of quality parts. We'll feature more parts on this
      web site over time. For now, call us at 404-608-8101 to inquire about
      parts we have in stock. We appreciate your business!
      <br></br>
      <br></br>
      <Link style={linkStyle} to="/">
        Home
      </Link>
    </div>
  );
}

const linkStyle = {
  color: "#0e3786",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
};
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
