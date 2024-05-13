import { useState } from 'react'
import './bookCreate.css'
import { useContext } from 'react'
import BookContext from '../context/book'
const BookCreate = () => {
  const {onCreate} = useContext(BookContext)
  const [title, setTitle] = useState('')
  const [des, setDes] = useState('')
  const handlChangeTitle = (e) => {
    setTitle(e.target.value);
  }
  const handlChangeDes = (e) => {
    setDes(e.target.value);
  }
   const handleSubmit = (e) => {
    e.preventDefault();
      onCreate({
      title,
      des,
    })
    setTitle('')
    setDes('')
  }
  return (
    <div className='form-create'>
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input 
            onChange={handlChangeTitle}
            type="text" 
            id="title" 
            name="title"
            value={title} 
            placeholder='Nhập Title' />
        <label htmlFor="des">Des</label>
        <input 
            onChange={handlChangeDes} 
            type="text"
            id="des"
            name="des" 
            value={des}
            placeholder='Nhập Des'/>
        <input type="submit" value="Create!" />
      </form>
    </div>
  )
}

export default BookCreate