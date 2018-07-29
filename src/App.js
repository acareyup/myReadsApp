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
    let {books} = this.state
    let currentlyReading = books.filter(book => book.shelf === "currentlyReading")
    let wantToRead = books.filter(book => book.shelf === "wantToRead")
    let read = books.filter(book => book.shelf === "read")
    this.setState({currentlyReading, wantToRead, read})
  }

  updateShelf = (evt, book)=>{
    const {books} = this.state;
    let oldBook=books.filter(e=>e.id===book.id);
    oldBook[0]? oldBook[0].shelf= evt.target.value:books.push(
      {...book,shelf:evt.target.value});
    this.setState({books})
    this.updateBooks()
    BooksAPI.update(book, evt.target.value)
  }
  
  render() {
    return (
      <div className="app">
         <Route path='/search' render={()=>(
              <Search updateShelf={this.updateShelf} books={this.state.books} />
              )}
            />
          <Route path='/' exact render={()=>(
            <div>
              <ListBooks currentlyReading={this.state.currentlyReading}
                         wantToRead={this.state.wantToRead}
                         read={this.state.read}
                         updateShelf = {this.updateShelf}
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
