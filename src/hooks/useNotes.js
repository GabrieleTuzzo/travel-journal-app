import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useNotes() {
    const [notesList, setNotesList] = useState([]);
    const [filteredNotes, setFilteredNotes] = useState([]); // State for filtered notes
    const [filterQuery, setFilterQuery] = useState(''); // State for the filter query
    const [orderAsc, setOrderAsc] = useState(true); // State for sorting order
    const navigate = useNavigate();

    // Save a note (update if it exists, otherwise add a new one)
    function saveNote(noteData, noteIndex) {
        setNotesList((prevNotes) => {
            const updatedNotes = [...prevNotes];
            updatedNotes[noteIndex] = noteData; // Update the note at the given index
            return updatedNotes;
        });
    }

    // Create a new note with an incremented name
    function createNote() {
        let newNoteName = 'Untitled Note';
        let counter = 1;

        // Find the next available name
        while (notesList.some((note) => note.name === newNoteName)) {
            newNoteName = `Untitled Note ${counter}`;
            counter++;
        }

        const newNote = {
            name: newNoteName,
            tags: '',
            media: '',
            location: '',
            mood: '',
            positiveRemarks: '',
            negativeRemarks: '',
            physicalEffort: '',
            monetaryEffort: '',
            totalMoneySpent: '',
            date: new Date().toISOString(), // Store the date as an ISO string
        };

        // Update the notes list
        const newNoteIndex = notesList.length; // Calculate the new note's index
        setNotesList((prevNotes) => [...prevNotes, newNote]);

        // Navigate to the new note AFTER the state update
        navigate(`/note/${newNoteIndex}`);
    }

    useEffect(() => {
        const filteredNotes = notesList.filter((note) =>
            note.name.toLowerCase().includes(filterQuery.toLowerCase())
        );

        const sortedNotes = [...filteredNotes].sort((a, b) => {
            if (orderAsc) {
                return new Date(a.date) - new Date(b.date); // Sort by date in ascending order
            } else {
                return new Date(b.date) - new Date(a.date); // Sort by date in descending order
            }
        });

        setFilteredNotes(sortedNotes);
    }, [filterQuery, notesList, orderAsc]);

    return {
        notesList,
        saveNote,
        createNote,
        filteredNotes,
        setFilterQuery,
        setOrderAsc,
    };
}
