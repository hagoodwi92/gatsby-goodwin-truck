import * as React from "react";
import {
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  TableContainer,
  Table,
  Button,
  Container,
  Paper,
} from "@material-ui/core";
import { Link, StaticQuery } from "gatsby";
import firebase from "./../firebase.js";
import "fontsource-roboto";
import { propTypes } from "react-bootstrap/esm/Image";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { useEffect, useState } from "react";

// const handleDelete = (id) => {
//   firebase.firestore().get({collection: 'truck', doc: id}).then((truck) => {
//     const firestoretruck = {
//       id: truck.id
//     }
// });
//   firebase.firestore().delete({collection: 'truck', doc:id})
// }

const handleTruckForm = (event) => {
  event.preventDefault();
  firebase.firestore().collection("truck").add({
    name: event.target.name.value,
    year: event.target.year.value,
    price: event.target.price.value,
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
    <React.Fragment>
      <Container style={pageStyles}>
        <h1 style={headingAccentStyles}>Add a Truck</h1>
        <form onSubmit={handleTruckForm}>
          <input type="text" name="name" placeholder="Name"></input>
          <input type="text" name="year" placeholder="Year"></input>
          <input type="text" name="price" placeholder="Price"></input>
          <button type="submit">Submit</button>
        </form>
        <br></br>
        <br></br>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow style={headingAccentStyles}>
                <TableCell>Truck (Model)</TableCell>
                <TableCell>Year</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trucks.map((truck) => (
                <TableRow key={truck.id}>
                  <TableCell>{truck.name}</TableCell>
                  <TableCell>{truck.year}</TableCell>
                  <TableCell>{truck.price}</TableCell>
                  <TableCell>
                    <button onClick={() => firebase.firestore().collection('truck').doc(truck.id).delete()}>Delete</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Link to="/">
          <Button style={buttonStyle} variant="contained" color="primary">
            <p>Home</p>
          </Button>
        </Link>
      </Container>
    </React.Fragment>
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
const tableStyle = {
  minWidth: 650,
};
