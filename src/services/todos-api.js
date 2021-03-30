import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

const fetchTodos = () => {
  return axios.get('/todos/').then(({ data }) => data);
};

const addTodo = payLoad =>
  axios.post('/todos/', payLoad).then(({ data }) => data);

const deleteTodo = id => axios.delete(`/todos/${id}`).then(() => id);

//изменяем isDone
const updateTodo = (id, payLoad) =>
  axios.patch(`/todos/${id}`, payLoad).then(({ data }) => data);

export default { fetchTodos, addTodo, deleteTodo, updateTodo };
