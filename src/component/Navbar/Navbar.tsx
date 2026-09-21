import { useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const user = useSelector((state: any) => state.applicationreducer.user);

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        navigate('/login');
    }

    return (
        <nav className='flex items-center justify-between bg-black p-4 text-white'>
            {/* navbar left */}
            <div className='navbar-left flex items-center gap-4'>
                <button className='text-3xl'>&#9776;</button>
                <h1 className='hidden md:block'>Youtube</h1>
            </div>

            {/* Navbar center */}
            <div className='navbar-center'>
                <input type='text' placeholder='Search' className='px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
            </div>

            {/* Navbar right */}
            <div className='navbar-right'>
                { !user ?
                <button onClick={(e) => { handleLogin(e) }} className='px-2 py-1 rounded bg-blue-500 hover:bg-blue-600'>Login</button>
                :
                <div className='flex items-center gap-4'>
                    <img src={user.avatar} alt='user-profile' className='w-8 h-8 rounded-full' />
                </div>
                }
            </div>
        </nav>
    )
}

export default Navbar;