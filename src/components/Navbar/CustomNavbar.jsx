import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "./CustomNavbar.css";
import WatchLogo from "./logo.svg"

export default class CustomNavbar extends React.Component {
    render() {
        return (
            <Navbar expand='lg'>
                <Container fluid>
                    <Navbar.Brand href='/'><img src={WatchLogo} alt='Watch TV+' className='main-logo' /></Navbar.Brand>
                    <Nav.Link href="/search" className="search"><Button className="search-button">Search</Button></Nav.Link>
                    <Nav.Link href="/top-anime"><Button className="other-button">Top Anime</Button></Nav.Link>
                    <Nav.Link href="/seasonal-anime"><Button className="other-button">Seasonal Anime</Button></Nav.Link>
                </Container>
            </Navbar>
        );
    }
}