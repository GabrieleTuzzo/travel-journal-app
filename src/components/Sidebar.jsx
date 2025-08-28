import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContextProvider';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    const { createNote, filteredNotes, setFilterQuery, setOrderAsc } =
        useContext(GlobalContext);
    console.log('Notes List in Sidebar:', filteredNotes);

    return (
        // Sidebar
        <aside className="Sidebar flex flex-col bg-secondary w-70 p-2 h-screen text-white">
            <div className="flex flex-col gap-3 mb-2">
                <div className="flex justify-between">
                    <button onClick={createNote}>Create Note</button>
                    <input
                        onChange={(e) => setFilterQuery(e.target.value)}
                        className="px-1.5 rounded-md"
                        type="text"
                    />
                </div>
                <button onClick={() => setOrderAsc((prev) => !prev)}>
                    Order By Date
                </button>
            </div>
            <nav className="overflow-y-auto grow">
                <ul className="flex flex-col gap-1">
                    {filteredNotes.length > 0 &&
                        filteredNotes.map((note, index) => (
                            <li key={index}>
                                <NavLink
                                    className={({ isActive }) =>
                                        `flex justify-between py-2 px-3 rounded-lg transitio hover:bg-white/15 ${
                                            isActive ? 'bg-white/15' : ''
                                        }`
                                    }
                                    to={`/note/${index}`}
                                >
                                    {note.name}
                                    <span>
                                        {new Date(
                                            note.date
                                        ).toLocaleDateString()}
                                    </span>
                                </NavLink>
                            </li>
                        ))}
                </ul>
            </nav>
        </aside>
    );
}
