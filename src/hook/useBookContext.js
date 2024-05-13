import BookContext from "../context/book";
import { useContext } from "react";

const useBookContext = () => {
    return useContext(BookContext)
}
export default useBookContext