import axios from 'axios';

const fetchTodos = () => {
  return axios.get('http://localhost:8080/todos/').then(({ data }) => data);
};

const addTodo = payLoad =>
  axios.post('http://localhost:8080/todos/', payLoad).then(({ data }) => data);

export default { fetchTodos, addTodo };
