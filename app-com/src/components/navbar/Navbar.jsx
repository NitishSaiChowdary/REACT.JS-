import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';

function Navbar() {
    const [dateString, setDateString] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            const dateObj = new Date();
            setDateString(`${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`);
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    return (
        <nav className="bg-blue-900 text-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="h-8 w-auto" src="https://www.google.com/imgres?q=log%20for%20company&imgurl=https%3A%2F%2Fimages-platform.99static.com%2F%2FJxmCZ9GA_I_zwhj4KOIAXJA-hcY%3D%2F0x0%3A960x960%2Ffit-in%2F500x500%2F99designs-contests-attachments%2F109%2F109312%2Fattachment_109312867&imgrefurl=https%3A%2F%2F99designs.com%2Finspiration%2Flogos%2Flog&docid=gNQUnpmwgV-NpM&tbnid=t5HXxiycLAFhyM&vet=12ahUKEwiS2qX68fGIAxUgzzgGHUJzC0kQM3oECH0QAA..i&w=500&h=500&hcb=2&ved=2ahUKEwiS2qX68fGIAxUgzzgGHUJzC0kQM3oECH0QAA" alt="Your Company" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link className="rounded-md px-3 py-2 text-gray-200 hover:bg-blue-800 hover:text-white" to="/">Home</Link>
                                <Link className="rounded-md px-3 py-2 text-gray-200 hover:bg-blue-800 hover:text-white" to="/products">Products</Link>
                                <Link className="rounded-md px-3 py-2 text-gray-200 hover:bg-blue-800 hover:text-white" to="/cart">Cart</Link>
                                <Link className="rounded-md px-3 py-2 text-gray-200 hover:bg-blue-800 hover:text-white" to="/Todos">Todo</Link>
                                <Link className="rounded-md px-3 py-2 text-gray-200 hover:bg-blue-800 hover:text-white" to="/ReportGenerator">ReportGenerator</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <p className="bg-gray-800 text-gray-200 px-3 py-1 rounded-md shadow-md text-sm font-semibold transition duration-200 ease-in-out hover:bg-gray-700 hover:text-white me-2">{dateString}</p>
                        {isLoggedIn ? (
                            <Fragment>
                                <button type="button" className="relative rounded-full bg-blue-800 p-1 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">View notifications</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                    </svg>
                                </button>

                                <div className="relative ml-3">
                                    <div>
                                        <button type="button" className="relative flex rounded-full bg-blue-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                            <span className="absolute -inset-1.5"></span>
                                            <span className="sr-only">Open user menu</span>
                                            <img className="h-8 w-8 rounded-full" src="./navbar/po.jpg" alt="" />
                                        </button>
                                    </div>

                                    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                                        <a className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                                        <a className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
                                        <a className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
                                    </div>
                                </div>
                            </Fragment>
                        ) : (
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <Link className="rounded-md px-3 py-2 text-gray-200 hover:bg-blue-800 hover:text-white" to="/auth/register">Register</Link>
                                    <Link className="rounded-md px-3 py-2 text-gray-200 hover:bg-blue-800 hover:text-white" to="/auth/Login">Login</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a className="block rounded-md bg-blue-800 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
                    <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-blue-700 hover:text-white">Team</a>
                    <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-blue-700 hover:text-white">Projects</a>
                    <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-blue-700 hover:text-white">Calendar</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
