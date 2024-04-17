import { useContext, useEffect, useState } from "react";
import NavigationBar from "../../Components/NavigationBar";
import { UserContext } from "../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { HeaderContext } from "../../Contexts/HeadingContext";

function AdminPanel() {
    const [headingImage, setHeadingImage] = useState("");
    const [notes, setNotes] = useState();

    const [noteTitle, setNoteTitle] = useState("")
    const [noteBody, setNoteBody] = useState("")

    const { verify } = useContext(UserContext)
    const { getHeaderImage, editHeaderImage, createNote, getNotes } = useContext(HeaderContext)
    let navigate = useNavigate()

    useEffect(() => {
        async function verifying() {
            let res = await verify()
            if (!res) {
                navigate("/")
            }
        }
        verifying()

        async function gettingHeader() {
            let res = await getHeaderImage()
            setHeadingImage(res.headingImage)
        }
        gettingHeader()

        async function gettingNotes() {
            let res = await getNotes()
            console.log(res)
            setNotes(res)
        }
        gettingNotes()
    }, [])

    async function changeImage() {
        let newImage = {
            headingImage: headingImage
        }
        await editHeaderImage(newImage)
    }

    async function addNote() {
        let newNote = {
            homepageNotesTitle: noteTitle,
            homepageNotesBody: noteBody
        }
        let res = await createNote(newNote)
        console.log(res)
        window.location.reload()
    }

    function mapThroughNotes() {
        if (notes) {
            return notes.map((note) => {
                return (
                    <>
                        <div className="col-12 col-md-6">
                            <Card className="col-12 secondRowCard">
                                <Card.Body>
                                    <Card.Title>
                                        {note.homepageNotesTitle}
                                    </Card.Title>
                                    {note.homepageNotesBody}
                                </Card.Body>
                            </Card>
                        </div>
                    </>
                )
            })
        } else {
            return (
                <>Loading...</>
            )
        }
    }

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
                                    <br />
                                    <Form.Group>
                                        <Form.Label>Image URL</Form.Label>
                                        <Form.Control
                                            title="heading image"
                                            className="col-12"
                                            value={headingImage}
                                            onChange={(e) => setHeadingImage(e.target.value)} />
                                    </Form.Group>
                                    <br />
                                    <Button className="col-12" onClick={changeImage}>
                                        Change
                                    </Button>
                                    <br /><br />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Row>
                                        <img className="col-12" src={headingImage} />
                                    </Row>
                                </div>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
                <br />
                <Row>
                    <Card className="col-12">
                        <Card.Body>
                            <Card.Title>Notes</Card.Title>
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    value={noteTitle}
                                    onChange={(e) => setNoteTitle(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Body</Form.Label>
                                <br />
                                <textarea
                                    rows={2}
                                    cols={45}
                                    value={noteBody}
                                    onChange={(e) => setNoteBody(e.target.value)} />
                            </Form.Group>
                            <Button
                                className="col-12"
                                onClick={addNote}>
                                Create
                            </Button>
                            <br />
                            <br />
                            <Row>
                                {mapThroughNotes()}
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}
export default AdminPanel