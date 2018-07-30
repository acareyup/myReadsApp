import React from 'react' 
import Book from './Book'

const ListBooks = (props)=>{
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <Book updateShelf={props.updateShelf} books={props.currentlyReading} name={'Currently Reading'} />
                <Book updateShelf={props.updateShelf} books={props.wantToRead} name={'Want To Read'} />
                <Book updateShelf={props.updateShelf} books={props.read} name={'Read'} />
            </div>
        </div>
    )
}

export default ListBooks


