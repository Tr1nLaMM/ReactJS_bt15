import { createContext } from 'react'
import { fetchBook, createBook, deleteBook, updateBook } from '../api'
import { useState } from 'react'
const BookContext = createContext()

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([])
  const handleCreate = async (term) => {
    const book = await createBook(term)
    if (book) setBooks([...books, book])
  }
  const handleDelete = async (id) => {
    const confirmed = window.confirm("Do you want to delete this book?")
    if (confirmed) {
      const book = await deleteBook(id)
      setBooks(books.filter((item) => item.id !== book.id))
    }
  }
  const handleUpdate = async (id, term) => {
    const book = await updateBook(id, term)
    setBooks(
      books.map((item) => (item.id === book.id ? book : item))
    )
  }
  const getAllBooks = async () => {
    const tams = await fetchBook()
    setBooks(tams)
  }
  const valueShare = {
    onEdit: handleUpdate,
    onDelete: handleDelete,
    onCreate: handleCreate,
    getAllBooks,
    books,
  }
  return (
    <BookContext.Provider value={valueShare}>{children}</BookContext.Provider>
  )
}
export { BookProvider }
export default BookContext
