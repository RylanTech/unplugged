import { Button, Card, Container, Form, FormGroup, Row } from "react-bootstrap"
import NavigationBar from "../../Components/NavigationBar"
import { useContext, useState } from "react"
import { UserContext } from "../../Contexts/UserContext"
import { useNavigate } from "react-router-dom"

function AdminLogin() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    let navigate = useNavigate()
    const {login} = useContext(UserContext)

    async function submitLogin() {
        let loginInfo = {
            username: username,
            password: password
        }
        let res = await login(loginInfo)
        if (res.status === 200) {
            navigate('/admin-panel')
            setPassword("")
            setUsername("")
        } else {
            setPassword("")
            setUsername("")
        }
    }

    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    <div className="col-md-3" />
                    <Card className="col-12 col-md-6">
                        <Card.Body>
                            <Card.Title>
                                Admin Login
                            </Card.Title>
                            <Form>
                                <FormGroup>
                                    <Form.Label>
                                        Username
                                    </Form.Label>
                                    <Form.Control 
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}/>
                                </FormGroup>
                                <FormGroup>
                                    <Form.Label>
                                        Password
                                    </Form.Label>
                                    <Form.Control 
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}/>
                                </FormGroup>
                            </Form>
                            <br/>
                            <Row>
                                <Button className="co-12"
                                onClick={submitLogin}>
                                    Login
                                </Button>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}
export default AdminLogin