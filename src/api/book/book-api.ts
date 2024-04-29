import axios from 'axios';

export const addBook = async (data: { name: string; type: string }) => {
  await axios.post('http://localhost:8080/book', data);
};

export const loanReturnHistory = async () => {
  const response = await axios.get('http://localhost:8080/user/loan');
  return response.data;
};

export const addLoan = async (data: { userName: string; bookName: string }) => {
  await axios.post('http://localhost:8080/book/loan', data);
};

export const returnBook = async (data: { userName: string; bookName: string }) => {
  await axios.put('http://localhost:8080/book/return', data);
};
