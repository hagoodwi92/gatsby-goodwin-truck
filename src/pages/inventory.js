import React from "react";
import { Input, FormHelperText, InputLabel, Button } from "@material-ui/core";
import { Link } from "gatsby";

export default function Inventory() {
  return (
    <div>
        <h1>Add a Truck</h1>
        <InputLabel htmlFor="my-input">Model</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">Truck Make/Model</FormHelperText>
        <br></br>

        <InputLabel htmlFor="my-input">Brand</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">Truck Brand</FormHelperText>
        <br></br>

        <InputLabel htmlFor="my-input">Year</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">Truck Year</FormHelperText>
        <br></br>

        <Link style={linkStyle} to="/">
          <Button variant="contained" color="primary">
            Home
          </Button>
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
