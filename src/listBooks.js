import React, {Component} from 'react' 
import Book from './Book'

class ListBooks extends Component {

    render(){
        const {currentlyReading, wantToRead, read, updateShelf} = this.props
        return(
            <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <Book updateShelf={updateShelf} books={currentlyReading} name={'Currently Reading'} />
                            <Book updateShelf={updateShelf} books={wantToRead} name={'Want To Read'} />
                            <Book updateShelf={updateShelf} books={read} name={'Read'} />
                        </div>
                    </div>
        )
         
            
    }
}

export default ListBooks


