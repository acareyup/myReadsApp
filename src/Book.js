import React, {Component} from 'react' 

class Book extends Component {


    render(){
        const {books, name, updateShelf} = this.props
        return(
            <div className="list-books-content">
            <div>
                <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book)=>(
                            <li key={book.id} >
                                <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" key={book.id} style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail : ''})` }}></div>
                                    <div className="book-shelf-changer">
                                    <select value={book.shelf} onChange={(evt) => updateShelf(evt, book)} >
                                        <option value="move" disabled>Move to...</option>
                                        <option value="none">None</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                    </select>
                                    
                                    </div>
                                </div>
                                <div className="book-title"  key={book.title}>{book.title}</div>
                                <div className="book-authors"  key={book.authors}>
                                        {book.authors && book.authors.length > 0 && book.authors.map((author, index) => (
                                                        <div key={index}>{author}</div>
                                        ))}
                                </div>
                                </div>
                            </li>
                            )
                        )}
                    </ol>
                </div>
                </div>
            </div>
            </div>
        )
         
            
    }
}

export default Book
