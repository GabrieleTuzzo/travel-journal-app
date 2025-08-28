import { createContext } from 'react';
import useNotes from '../hooks/useNotes';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const notesController = useNotes();

    return (
        <GlobalContext.Provider value={{ ...notesController }}>
            {children}
        </GlobalContext.Provider>
    );
};
