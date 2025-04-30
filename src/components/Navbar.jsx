/** @format */

import React, { useState } from "react";
import { Navbar as BootstrapNavbar, Container, Form, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <BootstrapNavbar.Brand href="/">Movie Cards</BootstrapNavbar.Brand>
        <Form className="d-flex ms-auto">
          <FormControl
            type="search"
            placeholder="Search movies..."
            className="me-2"
            value={searchTerm}
            onChange={handleSearch}
          />
        </Form>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
