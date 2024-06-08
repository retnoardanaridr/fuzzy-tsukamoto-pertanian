import React from "react";

export default function AddPupuk() {
    return (
        <>
            <div className="max-w-sm mx-auto mt-20">
                <h1 className="font-bold">Tambah Variable Perhitungan</h1>
                <form className="max-w-sm mx-auto mt-5">
                    <div className="mb-5">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900" >Nama Variable</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Nama Variable" required="" />
                    </div>
                    <div className="mb-5">
                        <label for="sedikit" className="block mb-2 text-sm font-medium text-gray-900" >Batas Sedikit</label>
                        <input type="number" name="sedikit" id="sedikit" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Batas Sedikit" required="" />
                    </div>
                    <div className="mb-5">
                        <label for="sedang" className="block mb-2 text-sm font-medium text-gray-900" >Batas Sedang</label>
                        <input type="number" name="sedang" id="sedang" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Batas Sedang" required="" />
                    </div>
                    <div className="mb-5">
                        <label for="banyak" className="block mb-2 text-sm font-medium text-gray-900" >Batas Banyak</label>
                        <input type="number" name="banyak" id="banyak" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Batas Banyak" required="" />
                    </div>
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">Submit</button>
                </form>
            </div>
        </>
    )
}