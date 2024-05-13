import BookContext from "../context/book";
import { useContext } from "react";

const useUserContext = () => {
    return useContext(BookContext)
}
export default useUserContext