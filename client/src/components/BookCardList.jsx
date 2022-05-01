import BookCard from "./BookCard";

export default function BookCardList(props) {
    const books = props.books;

    const cards = books?.map((element) => 
        <BookCard book={element} />
    );
    
    return (
        <div>
            {cards}
        </div>
    );
}
