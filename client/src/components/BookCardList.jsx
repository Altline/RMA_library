import BookCard from "./BookCard";

export default function BookCardList(props) {
    const books = props.books;

    const cards = books?.map((element) =>
        <BookCard key={element.id} book={element} onClick={props.onBookClick} />
    );

    return (
        <div>
            {cards}
        </div>
    );
}
