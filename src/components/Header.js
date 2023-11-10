import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
      <Navbar style={{ backgroundColor: '#fff2cf' }} expand="lg">
        <Container>
          <Navbar.Brand href="">
            <img className='w-25' src="https://cdn.discordapp.com/attachments/1165501917884071981/1172370145801420820/seedsowmaqtic.png?ex=656011c8&is=654d9cc8&hm=4a31c6ddf46dc7d321aa3d747ddb9b545b18987b3c944a830279f73459451fb2&"></img>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex justify-content-end">
              <Nav.Link style={{ marginRight: '50px', marginLeft: '50px' }} href="/">Home</Nav.Link>
              <Nav.Link style={{ marginRight: '50px', marginLeft: '50px' }} href="/history">History</Nav.Link>
              <Nav.Link style={{ marginRight: '50px', marginLeft: '50px' }} href="about">About</Nav.Link>
              {/* Add more navigation links as needed */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default Header;