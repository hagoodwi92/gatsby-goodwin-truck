import * as React from "react";
import {
  Input,
  FormHelperText,
  InputLabel,
  Button,
  Container,
} from "@material-ui/core";
import { Link, StaticQuery } from "gatsby";
import firebase from "./../firebase.js";
import "fontsource-roboto";
import { propTypes } from "react-bootstrap/esm/Image";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { useEffect, useState } from "react";

const handleTruckForm = (event) => {
  event.preventDefault();
  firebase.firestore().collection("truck").add({
    name: event.target.name.value,
  });
};

function NewTrucks() {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("truck")
      .onSnapshot((snapshot) => {
        const newList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTrucks(newList);
      });
  }, []);

  return trucks;
}

export default function Inventory(props) {
  const trucks = NewTrucks();

  return (
    <Container style={pageStyles}>
      <h1 style={headingAccentStyles}>Add a Truck</h1>
      <form onSubmit={handleTruckForm}>
        <label>Truck Name: </label>
        <input type="text" name="name" placeholder="Name"></input>
        <button type="submit">Submit</button>
      </form>

      <ul>
        {trucks.map((truck) => (
          <li key={truck.id}>
            <ul>Name: {truck.name}</ul>
          </li>
        ))}
      </ul>
      <Link to="/">
        <Button style={buttonStyle} variant="contained" color="primary">
          <p>Home</p>
        </Button>
      </Link>
    </Container>
  );
}

const linkStyle = {
  color: "#0e3786",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
};

const headingAccentStyles = {
  color: "#0e3786",
};
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const buttonStyle = {
  width: 150,
  height: 40,
  margin: 20,
  marginLeft: -10,
};
