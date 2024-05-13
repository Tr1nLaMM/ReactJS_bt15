import BookEdit from "./BookEdit";
import { useContext, useState } from "react";
import './bookShow.css'
import BookContext from '../context/book'

const BookShow = ({ book }) => {
  const { onEdit, onDelete } = useContext(BookContext)

  const image = `https://picsum.photos/seed/${book.id}picsum/200/300`
  const [isEdit, setIsEdit] = useState(false)
  const handleEdit = (id, term) => {
    onEdit(id, term)
    setIsEdit(false)
  }
  const handleCancel = () => {
    setIsEdit(false)
  }
  return (
    <div className="item">
      <div className="image">
        <img src={image} alt="" />
      </div >
      {!isEdit && (
        <>
          <h2>{book.title}</h2>
          <p>{book.des}</p>
        </>
      )}
      {isEdit && <BookEdit book={book} onEdit={handleEdit} onCancel={handleCancel} />}
      {!isEdit && (

        <>
          <button className="deletebutton" onClick={() => onDelete(book.id)}><i class="fa-solid fa-trash"></i></button>
          <button className="editbutton" onClick={() => setIsEdit(!isEdit)}><i class="fa-solid fa-pen"></i></button>
        </>
      )}
    </div>
  )
}

export default BookShow;