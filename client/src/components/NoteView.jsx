import { Button, Card, Image } from "react-bootstrap";
import { formatDate } from "../Utils";

export default function NoteView(props) {
    const note = props.note;
    const onDelete = props.onDelete;

    return (
        <Card className="book-note">
            <Card.Body>
                <div>
                    <Card.Title>{new Date(note.timestamp).toLocaleString()}</Card.Title>
                    <Card.Text>
                        {note.text}
                    </Card.Text>
                </div>
                <Button
                    style={{ backgroundColor: "transparent", border: "0px" }}
                    onClick={onDelete}
                >
                    <Image src="../delete.svg" />
                </Button>
            </Card.Body>
        </Card>
    );
}