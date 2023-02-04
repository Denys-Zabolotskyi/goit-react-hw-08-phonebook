const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const rootReducer = (state = initialState, action) => {
  // Редюсер различает экшены по значению свойства type
  switch (action.type) {
    // В зависимости от типа экшена будет выполняться разная логика
    case 'contact/addContact': {
      // Нужно вернуть новый объект состояния
      return {
        // в котором есть все данные существующего состояния
        ...state,
        // и новый массив задач
        contacts: [
          // в котором есть все существующие задачи
          ...state.contacts,
          // и объект новой задачи
          action.payload,
        ],
      };
    }
    case 'contact/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    default:
      // Каждый редюсер получает все экшены отправленные в стор.
      // Если редюсер не должен обрабатывать какой-то тип экшена,
      // необходимо вернуть существующее состояние без изменений.
      return state;
  }
};
