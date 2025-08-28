import { useContext, useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContextProvider';

export default function Note() {
    const { noteIndex } = useParams(); // Get the index from the URL
    const { notesList, saveNote } = useContext(GlobalContext);
    const navigate = useNavigate();

    const [editableNoteName, setEditableNoteName] = useState('');
    const tagsRef = useRef('');
    const mediaRef = useRef('');
    const locationRef = useRef('');
    const moodRef = useRef('');
    const positiveRemarksRef = useRef('');
    const negativeRemarksRef = useRef('');
    const physicalEffortRef = useRef(0);
    const monetaryEffortRef = useRef(0);
    const totalMoneySpentRef = useRef(0);
    const dateRef = useRef('');

    useEffect(() => {
        const note = notesList[noteIndex]; // Get the note by index
        if (note) {
            setEditableNoteName(note.name);
            tagsRef.current.value = note.tags;
            mediaRef.current.value = note.media;
            locationRef.current.value = note.location;
            moodRef.current.value = note.mood;
            positiveRemarksRef.current.value = note.positiveRemarks;
            negativeRemarksRef.current.value = note.negativeRemarks;
            physicalEffortRef.current.value = note.physicalEffort;
            monetaryEffortRef.current.value = note.monetaryEffort;
            totalMoneySpentRef.current.value = note.totalMoneySpent;
            dateRef.current = note.date;
        } else {
            navigate('/');
        }
    }, [noteIndex, notesList]);

    const handleSave = (e) => {
        e.preventDefault();

        const noteData = {
            name: editableNoteName,
            tags: tagsRef.current.value,
            media: mediaRef.current.value,
            location: locationRef.current.value,
            mood: moodRef.current.value,
            positiveRemarks: positiveRemarksRef.current.value,
            negativeRemarks: negativeRemarksRef.current.value,
            physicalEffort: physicalEffortRef.current.value,
            monetaryEffort: monetaryEffortRef.current.value,
            totalMoneySpent: totalMoneySpentRef.current.value,
            date: dateRef.current,
        };

        console.log('Saved Note Data:', noteData);
        saveNote(noteData, noteIndex); // Pass the index to saveNote
    };

    const handleNoteNameChange = (e) => {
        setEditableNoteName(e.target.value);
    };

    return (
        <div className="justify-center flex">
            <form
                className="bg-white text-black w-full p-4 rounded-lg max-w-2xl overflow-clip mt-10 mb-150"
                onSubmit={handleSave}
            >
                <div className="flex justify-between mb-4">
                    {/* Editable noteName input */}
                    <input
                        type="text"
                        value={editableNoteName}
                        onChange={handleNoteNameChange}
                        className="text-2xl font-bold border-b-2 border-gray-300 w-full"
                    />

                    <span>
                        {new Date(dateRef.current).toLocaleDateString()}
                    </span>
                </div>

                <h4>Tags:</h4>
                <input
                    type="text"
                    ref={tagsRef}
                    placeholder="Enter tags"
                    className="border p-2 rounded w-full mb-4"
                />

                <h2>Media</h2>
                <textarea
                    ref={mediaRef}
                    placeholder="Describe media"
                    className="border p-2 rounded w-full mb-4"
                ></textarea>

                <h2>Location</h2>
                <input
                    type="text"
                    ref={locationRef}
                    placeholder="Enter location details"
                    className="border p-2 rounded w-full mb-4"
                />

                <h2>Mood</h2>
                <textarea
                    ref={moodRef}
                    placeholder="Describe mood"
                    className="border p-2 rounded w-full mb-4"
                ></textarea>

                <h2>Positive Remarks</h2>
                <textarea
                    ref={positiveRemarksRef}
                    placeholder="Enter positive remarks"
                    className="border p-2 rounded w-full mb-4"
                ></textarea>

                <h2>Negative Remarks</h2>
                <textarea
                    ref={negativeRemarksRef}
                    placeholder="Enter negative remarks"
                    className="border p-2 rounded w-full mb-4"
                ></textarea>

                <h2>Physical Effort</h2>
                <input
                    type="number"
                    ref={physicalEffortRef}
                    placeholder="Enter physical effort details"
                    className="border p-2 rounded w-full mb-4"
                />

                <h2>Monetary Effort</h2>
                <input
                    type="number"
                    ref={monetaryEffortRef}
                    placeholder="Enter monetary effort details"
                    className="border p-2 rounded w-full mb-4"
                />

                <h3>Total Money Spent</h3>
                <input
                    type="number"
                    ref={totalMoneySpentRef}
                    placeholder="Enter total money spent"
                    className="border p-2 rounded w-full mb-4"
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded w-full"
                >
                    Save Note
                </button>
            </form>
        </div>
    );
}
