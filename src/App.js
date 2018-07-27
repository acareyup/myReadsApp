import React from 'react'
import { Route, Link } from "react-router-dom"
import * as BooksAPI from './BooksAPI'  // import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './listBooks'
import Search from './search'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books
      })
    })
  }

  render() {
    return (
      <div className="app">
         <Route path='/search' exact render={()=>(
              <Search searchChange={this.searchChange} />
              )}
            />
          <Route path='/' exact render={()=>(
            <div>
              <ListBooks books={this.state.books} />
              <div className="open-search">
                <Link to = '/search'
                    >Add a book</Link>
              </div>
            </div>
            )} 
          />
      </div>
    )
  }
}

export default BooksApp
