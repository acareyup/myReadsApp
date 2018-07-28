import React from 'react'
import { Route, Link } from "react-router-dom"
import * as BooksAPI from './BooksAPI'  // import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './listBooks'
import Search from './search'

class BooksApp extends React.Component {
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books
      })
      this.updateBooks()
    })
  }

  updateBooks(){
    const {books} = this.state
    let currentlyReading = books.filter(book => book.shelf === "currentlyReading")
    let wantToRead = books.filter(book => book.shelf === "wantToRead")
    let read = books.filter(book => book.shelf === "read")
    this.setState({currentlyReading, wantToRead, read})
  }
  
  render() {
    return (
      <div className="app">
         <Route path='/search' exact render={()=>(
              <Search books={this.state.books} />
              )}
            />
          <Route path='/' exact render={()=>(
            <div>
              <ListBooks currentlyReading={this.state.currentlyReading}
                         wantToRead={this.state.wantToRead}
                         read={this.state.read}
              />
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
