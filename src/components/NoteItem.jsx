import React from 'react';
import { NavLink } from 'react-router-dom';

const NoteItem = React.memo(({ note, index }) => {
    return (
        <li>
            <NavLink
                className={({ isActive }) =>
                    `flex justify-between py-2 px-3 rounded-lg transition hover:bg-white/15 ${
                        isActive ? 'bg-white/15' : ''
                    }`
                }
                to={`/note/${index}`}
            >
                {note.name}
                <span>
                    {new Date(note.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </span>
            </NavLink>
        </li>
    );
});

export default NoteItem;
