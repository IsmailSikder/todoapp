//import axios from 'axios';
import { useState } from 'react';
import CustomButton from './custom-button.component';
const FetchApi =()=>{
    const [books, setBooks] = useState(null);
    const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

    const fetchData = async ()=>{
        // const res = await axios.get(apiURL)
        // setBooks(res.data)

       await fetch(apiURL)
        .then(response=>response.json())
        .then(books=>setBooks(books))
    }
    console.log(books)
    return(
        <div>
            <h1>Books</h1>
            <CustomButton onClick={fetchData}>Fetch Books</CustomButton>
            <div>
                {
                   books && 
                   books.map((book, index) => {
                    // const cleanedDate = new Date(book.released).toDateString();
                    // const authors = book.authors.join(', ');
        
                    return (
                      <div className="book" key={index}>
                          <div>
                        <p>{book.name}</p>
                        <p>{book.isbn}</p>
                        <p>{book.released}</p>
                        </div>
                      </div>
                    );
                  })}
            </div>
           
        </div>
    )
}

export default FetchApi