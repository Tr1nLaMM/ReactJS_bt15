import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL;

export const createBook = async (term) => {
  const resp = await axios.post(`${apiURL}/books`, term);
  return resp.data;
};
export const fetchBook = async () => {
  const resp = await axios.get(`${apiURL}/books`);
  return resp.data;
};
export const updateBook = async (id, term) => {
  const resp = await axios.put(`${apiURL}/books/${id}`, term);
  return resp.data;
};
export const deleteBook = async (id) => {
  const resp = await axios.delete(`${apiURL}/books/${id}`);
  return resp.data;
};
export const handleSearch = async (term) => {
  try {
    const resp = await axios.get(`${apiURL}/books/search?term=${term}`);
    return resp.data;
  } catch (error) {
    console.error('Error searching books:', error);
    return [];
  }
}
