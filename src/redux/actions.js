import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'contact/addContact',
    payload: {
      id: nanoid(5),
      name,
      number,
    },
  };
};

export const deleteContact = ({ id }) => {
  return {
    type: 'tasks/deleteTask',
    payload: id,
  };
};
