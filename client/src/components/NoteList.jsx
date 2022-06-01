import NoteView from "./NoteView";

export default function NoteList(props) {
    const notes = props.notes;
    const onDeleteNote = props.onDeleteNote;

    const noteElements = notes?.map(note => 
        <NoteView key={note.id} note={note} onDelete={() => onDeleteNote(note)} />
    );

    return (
        <div>
            {noteElements}
        </div>
    );
}