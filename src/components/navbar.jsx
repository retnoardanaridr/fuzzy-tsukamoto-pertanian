import React from "react";
import Logo from '../assets/logo.png';

export default function Header() {
    return(
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="w-20 h-auto" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Fuzzy Tsukamoto</span>
                    </a>
                    {/* Menu for user login */}
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <a href="/add-pupuk" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0">
                                    Tambah Pupuk
                                </a>
                            </li>
                            <li>
                                <a href="/aturan-fuzzy" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0">
                                    Defuzzyfikasi
                                </a>
                            </li>
                            <li>
                                <a href="/hitung-pupuk" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0">
                                    Hitung Pupuk
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* button show for login */}
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</button>
                </div>
            </nav>
        </>
    ) 
}