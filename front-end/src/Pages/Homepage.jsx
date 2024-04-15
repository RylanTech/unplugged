import { Card, Container, Nav, NavDropdown, Navbar, Offcanvas, Row } from "react-bootstrap"
import NavigationBar from "../Components/NavigationBar"
import { Helmet } from 'react-helmet'
import { useEffect, useState } from "react"

function Homepage() {
    const [headings, setHeadings] = useState()

    useEffect(() => {
        setHeadings([
            {
                "title": "All Inclusive Youth Retreat.",
                "body": "Meals, worship services, and all activities are included in the price of unplugged"
            },
            {
                "title": "Activities",
                "body": "Paintball, zipline, highropes, obstical courses & more!"
            },
            {
                "title": "Early Bird",
                "body": "Early Bird pricing is $155 - deadline is February 1st"
            },
            {
                "title": "Registration",
                "body": "Regular registration price is $165 - deadline is March 1st"
            },
        ])
    }, [])

    function mapThroughHeadings() {
        if (headings) {
            return headings.map((heading) => {
                return (
                    <div className="col-12 col-md-6">
                        <Card className="col-12 secondRowCard">
                            <Card.Body>
                                <Card.Title>
                                    {heading.title}
                                </Card.Title>
                                {heading.body}
                            </Card.Body>
                        </Card>
                    </div>
                )
            })
        }
    }

    return (
        <>
            <Helmet>
                <style>{'body { background-color: black; }'}</style>
            </Helmet>
            <NavigationBar />
            <img className="navimg" src="https://i.postimg.cc/9XtYKN8m/og3-removebg-preview.png" />
            <img className="headingImg" src="https://images.unsplash.com/photo-1428988449731-1e5ccfb5b84f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Container>
                <Row>
                    <div className="col-12 bebas-neue-regular headingText">
                        UNPLUGGED
                        RETREAT
                        <div className="bebas-neue-regular headingSubtext">
                            September 19th-21st
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="homepageRowTwo col-12">
                        <Row>
                            {mapThroughHeadings()}
                            {/* <div className="col-12 col-md-6">
                                <Card className="col-12 secondRowCard">
                                    <Card.Body>
                                        <Card.Title>
                                            All Inclusive Youth Retreat.
                                        </Card.Title>
                                        Meals, worship services, and all activities are included in the price of unplugged
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-12 col-md-6 secondRowCard">
                                <Card className="col-12">
                                    <Card.Body>
                                        <Card.Title>
                                            Activities
                                        </Card.Title>
                                        Paintball, zipline, highropes, obstical courses & more!
                                    </Card.Body>
                                </Card>
                            </div> */}
                        </Row>
                    </div>
                </Row>
                <Row>
                    <div className="homepageRowThree">
                        <Card>
                            <Card.Body>
                                <Row>
                                    <iframe
                                        className="col-12 col-lg-6"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.604497533344!2d-78.54057312411643!3d37.775870871985006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b398949ebb7cc7%3A0x7c1165b6a2fd213e!2sWatermarks%20Camp!5e0!3m2!1sen!2sus!4v1713221648851!5m2!1sen!2sus"
                                        allowfullscreen=""
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"
                                        height={250}></iframe>
                                    <div className="col-12 col-lg-6">
                                        <Card.Title>
                                            <br />
                                            <center>
                                                Watermarks Campgronds
                                            </center>
                                        </Card.Title>
                                        <center>
                                            Unplugged takes place at Watermarks Camp. <br />
                                            1145 James River Road,
                                            Scottsville, VA, 24590
                                        </center>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default Homepage