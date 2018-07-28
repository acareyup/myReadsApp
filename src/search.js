import React, {Component} from 'react' 
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Search extends Component {

    static propTypes = {
      showingBooks: PropTypes.array.isRequired,
    }

    state={
      query :'',
      showingBooks : []
    }

    updateQuery = (query)=> {
        this.setState({query})
    }

    search = (query)=>{
      if (query) {
            BooksAPI.search(query, 20).then((dt)=>{this.setState({showingBooks : dt})})
        } 
    }

    render(){
        const {query,showingBooks} = this.state
        const {books} = this.props

        this.search(query)
        
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link  to = '/' className="close-search"> Close </Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={query} 
                       onChange={(event)=>this.updateQuery(event.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {query && (
                        <Book books={showingBooks}/>
                    )}
              </ol>
            </div>
          </div>
        )
        
    }
}

export default Search
