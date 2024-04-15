import { Container, Nav, Navbar, Offcanvas, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function NavigationBar() {

    return (
        <>
            <Navbar expand="md" className="mb-3 navigationBar">
                <Container>
                    <Navbar.Brand className="bebas-neue-regular brandHeading" href="#">Unplugged Retreat</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                                Unplugged Retreat
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/forms">Forms</Link>
                                <a className="nav-link" href="https://www.facebook.com/UnpluggedRetreatVA">
                                    <img className="soicalImg" src="https://i.postimg.cc/FKcbhPZH/facebook.webp" />
                                    Facebook
                                </a>
                                <a className="nav-link" href="https://www.instagram.com/unpluggedretreat/">
                                    <img className="soicalImg" src="https://i.postimg.cc/jdL7sgqY/Instagram-logo-2016-svg.webp" />
                                    Instagram
                                </a>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}
export default NavigationBar