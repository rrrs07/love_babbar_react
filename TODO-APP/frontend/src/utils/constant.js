import axios from 'axios';

export const baseURL = `http://localhost:3000/api`;

const getAllToDo = (setToDo) => {
    axios
        .get(baseURL)
        .then(({data}) => {
        setToDo(data) 
})}
        
export { getAllToDo };  