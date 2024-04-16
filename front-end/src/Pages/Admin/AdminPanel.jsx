import { useContext, useEffect, useState } from "react";
import NavigationBar from "../../Components/NavigationBar";
import { UserContext } from "../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Form, Row } from "react-bootstrap";

function AdminPanel() {
    const [headingImage, setHeadingImage] = useState("https://images.unsplash.com/photo-1428988449731-1e5ccfb5b84f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

    const { verify } = useContext(UserContext)
    let navigate = useNavigate()

    useEffect(() => {
        async function verifying() {
            let res = await verify()
            if (!res) {
                navigate("/")
            }
        }
        verifying()
    }, [])

    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    <Card>
                        <Card.Body>
                            <Row>
                                <div className="col-12 col-md-6">
                                    <Card.Title>Heading Image (3:2)</Card.Title>
                                    <br/>
                                    <Form.Group>
                                        <Form.Label>Image URL</Form.Label>
                                        <Form.Control
                                        title="heading image"
                                        className="col-12"
                                        value={headingImage}/>
                                    </Form.Group>
                                    <br/>
                                    <Button className="col-12">
                                        Change
                                    </Button>
                                    <br/><br/>
                                </div>
                                <div className="col-12 col-md-6">
                                    <Row>
                                    <img className="col-12" src={headingImage}/>
                                    </Row>
                                </div>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}
export default AdminPanel