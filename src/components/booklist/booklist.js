import React, { Component } from 'react'
import '../../css/booklist/booklist.css'
import Modal from './modal'

class Booklist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valBook: "",
            books: {
                items: []
            },
            visible: {
                display: 'block'
            },
            showModal: 0
        }
    }

    getBooks = () => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.valBook}`)
            .then(result => result.json())
            .then(res => {

                this.setState({
                    books: res
                })
                // console.log(this.state.books);
                // console.log(this.state.books.items);

            })
            .catch(err => {
                console.log(err);

            })
    }

    onSubmitHandler = e => {
        e.preventDefault();
        if (this.state.valBook.length > 0) {
            this.getBooks();
            this.setState({
                visible: {
                    display: 'none'
                }
            })
 
        }
    }

    onChangeHandler = e => {
        this.setState({
            valBook: e.target.value
        })
    }

    hideModal = () => {
        this.setState({
            showModal: 0
        })
    }

    getModal = value => {
        this.setState({
            showModal: value
        })
    }
    render() {
        return (
            <div>
                <React.Fragment>
                    <div className='container-fluid codrops-header'>
                        <section className='text-center'>
                            <h2>Search for books</h2>
                            <form className='form-inline' onSubmit={this.onSubmitHandler}>
                                <div className="form-group" style={{ margin: ' 30px auto' }}>
                                    <input
                                        className='form-control'
                                        type="search"
                                        placeholder="book title..."
                                        value={this.valBook}
                                        onChange={this.onChangeHandler}
                                    />
                                    <button style={{ padding: '8px 15px', borderRadius: '5px' }} className='btn btn-warning' type="submit">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                    <div className="main" style={{ marginTop: '10px' }}>
                        <div className="bookshelf" id='bookshelf'>
                            <div style = {this.state.visible} className="search-icon" data-reactid=".0.1.0.0">
                                <i className="fas fa-search"></i>
                            </div>

                            {
                                this.state.books.items.map((book, index) => {
                                    
                                    const poster = `http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`;
                                   
                                    return (
                                        <figure key = {index} className='details-open'>
                                            <Modal show={this.state.showModal === book.id} onHide={() => this.hideModal(book.id)} title= {book.volumeInfo.title} descr= {book.volumeInfo.description} page={book.volumeInfo.pageCount}/>
                                            <div className="perspective">
                                                <div className="book">
                                                    <div className="cover">
                                                        <div className="front" style = {{background: `url('${poster}') 0% 0% / cover no-repeat`, border: "solid 2px rgb(238, 238, 238)", width: "170px", height: "240px"}}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="buttons">
                                                <button onClick={()=> this.getModal(book.id)} className = 'btn btn-warning btn-sm' style = {{padding: '5px', borderRadius: '5px'}}>
                                                    DETTAGLI
                                                </button>
                                                <a href={book.volumeInfo.infoLink} target = '_blank'>Preview</a>
                                            </div>
                                            <figcaption>
                                                <h2>
                                                    <span>
                                                        {book.volumeInfo.title}
                                                    </span>
                                                    <span>
                                                        {book.volumeInfo.authors}
                                                    </span>
                                                    <span>
                                                        {book.volumeInfo.publishedDate}
                                                    </span>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    )
                                })

                            }

                        </div>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}

export default Booklist
