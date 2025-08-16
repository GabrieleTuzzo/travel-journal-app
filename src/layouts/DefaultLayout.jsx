import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function DefaultLayout() {
    return (
        <main className="flex h-screen">
            <Sidebar />
            <div className="grow overflow-y-auto">
                <Outlet />
            </div>
        </main>
    );
}
