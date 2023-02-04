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

export const deleteContact = id => {
  return {
    type: 'contact/deleteContact',
    payload: id,
  };
};

export const changeFilter = value => {
  return {
    type: 'filter/changeFilter',
    payload: value,
  };
};
