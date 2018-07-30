import React, {Component} from 'react' 
import { Link } from "react-router-dom"
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Search extends Component {

    state={
      query :'',
      showingBooks : []
    }

    search = (event)=>{
      const query = event.target.value
      let foundBooks =[]
      this.setState({query:query})
      if (query) {
            BooksAPI.search(query, 20).then((dt)=>{
              foundBooks = dt
              if(foundBooks.length > 1){
                foundBooks.map((book) => {
                  this.props.books.map((b) => {
                    if (book.id === b.id) {
                      book.shelf = b.shelf
                    } else {
                      book.shelf = 'none'
                    }
                  })
                })
                this.setState({showingBooks:foundBooks})
                console.log(foundBooks)
              } else{
                this.setState({showingBooks : []})
              }
            })
      } else {
        this.setState({showingBooks : []})
      }
    }

    render(){
        const {query,showingBooks} = this.state
        const {updateShelf} = this.props
        
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link  to = '/' className="close-search"> Close </Link>
              <div className="search-books-input-wrapper">
                <input autoFocus type="text" placeholder="Search by title or author" value={query} 
                       onChange={this.search}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {query && (
                        <Book updateShelf={updateShelf} books={showingBooks}/>
                    )}
              </ol>
            </div>
          </div>
        )
        
    }
}

export default Search
