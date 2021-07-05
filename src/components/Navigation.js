import React, {Component} from 'react';
import {Button, Navbar, Nav, FormControl, Form } from 'react-bootstrap';


class Navigation extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">BRAND</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/where">Donde Estamos</Nav.Link>
                        <Nav.Link href="/products">Productos</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Navigation;
