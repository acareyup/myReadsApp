import React, {Component} from 'react' 
import { Link } from "react-router-dom"
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Search extends Component {

    state={
      query :'',
      showingBooks : []
    }

    updateQuery = (query)=> {
        this.setState({query})
    }

    search = (query)=>{
      if (query) {
            BooksAPI.search(query, 20).then((dt)=>{
              let showingBooks = dt
              if(showingBooks.length > 1){
                showingBooks.map((book) => {
                  this.props.books.map((b) => {
                    if (book.id === b.id) {
                      book.shelf = b.shelf
                    } else {
                      book.shelf = 'none'
                    }
                  })
                })

                this.setState({showingBooks})
              }
            })
      } 
    }

    render(){
        const {query,showingBooks} = this.state
        const {updateShelf} = this.props

        this.search(query)
        
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link  to = '/' className="close-search"> Close </Link>
              <div className="search-books-input-wrapper">
                <input autoFocus type="text" placeholder="Search by title or author" value={query} 
                       onChange={(event)=>this.updateQuery(event.target.value)}/>
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
