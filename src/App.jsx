import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
// Pages
import Note from './pages/Note';
import Home from './pages/Home';

function App() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path="/note/:noteIndex" element={<Note />} />
            </Route>
        </Routes>
    );
}

export default App;
