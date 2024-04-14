import { Container, Nav, NavDropdown, Navbar, Offcanvas, Row } from "react-bootstrap"
import NavigationBar from "../Components/NavigationBar"

function Homepage() {

    return (
        <>
            <NavigationBar/>
            <img className="navimg" src="https://i.postimg.cc/9XtYKN8m/og3-removebg-preview.png"/>
            <img className="headingImg" src="https://images.unsplash.com/photo-1428988449731-1e5ccfb5b84f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <Container>
                <Row>
                    <div className="col-12 bebas-neue-regular headingText">
                        UNPLUGGED
                        RETREAT
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default Homepage