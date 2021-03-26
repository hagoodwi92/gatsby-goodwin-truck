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
  TextField
} from "@material-ui/core";
import { Link } from "gatsby";
import firebase from "./../firebase.js";
import "fontsource-roboto";
import { useEffect, useState } from "react";



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

  const handleTruckForm = (event) => {
    event.preventDefault();
    firebase.firestore().collection("truck").add({
      name: event.target.name.value,
      year: event.target.year.value,
      price: event.target.price.value,
    });

    
  };

  return (
    <React.Fragment>
      <Container style={pageStyles}>
        <h1 style={headingAccentStyles}>Add a Truck</h1>
        <form onSubmit={handleTruckForm}>
          <TextField type="text" name="name" placeholder='Model'></TextField>
          <TextField type="text" name="year" placeholder="Year"></TextField>
          <TextField type="text" name="price" placeholder="Price"></TextField>
          <Button type="submit">Submit</Button>
          <Button type="reset">Clear Form</Button>
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
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trucks.map((truck) => (
                <TableRow key={truck.id}>
                  <TableCell>{truck.name}</TableCell>
                  <TableCell>{truck.year}</TableCell>
                  <TableCell>{truck.price}</TableCell>
                  <TableCell>
                    <Button onClick={() => firebase.firestore().collection('truck').doc(truck.id).delete()}>Delete</Button>
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

