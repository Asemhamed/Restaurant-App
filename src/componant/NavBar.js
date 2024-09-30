import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row } from 'react-bootstrap';
import '../index.css'

const NavBar = ({ filterBySea }) => {
  const [dataSearch,setDataSearch] = useState('');
  const onSearch = ()=>{
    
    filterBySea(dataSearch)
    setDataSearch('');
  }
  const preventDefault= (e)=>{
    e.preventDefault();
  }
  return (
    <Row>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="logo">مطعم جديد</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex" onSubmit={(e)=>{preventDefault(e)}}>
              <Form.Control type="text" placeholder="بحث" className="ms-2" onChange={(e)=>{setDataSearch(e.target.value)}}
               value={dataSearch} />
              <button className="btn-search" onClick={()=>{onSearch()}}>بحث</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar