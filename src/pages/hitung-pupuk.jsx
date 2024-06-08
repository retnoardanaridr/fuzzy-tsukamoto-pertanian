import React from "react";

export default function HitungPupuk() {
    return(
        <>
            <div className="max-w-sm mx-auto mt-20">
                <h1 className="font-bold">Hitung Pupuk Yang Dibutuhkan</h1>
                <form className="max-w-sm mx-auto mt-5">
                    <div className="mb-5">
                        <label for="luaslahan" className="block mb-2 text-sm font-medium text-gray-900" >Luas Lahan</label>
                        <input type="number" name="luaslahan" id="luaslahan" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Luas lahan" required="" />
                    </div>
                    <div className="mb-5">
                        <label for="pupukurea" className="block mb-2 text-sm font-medium text-gray-900" >Kondisi Urea</label>
                        <input type="number" name="pupukurea" id="pupukurea" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Kondisi Urea" required="" />
                    </div>
                    <div className="mb-5">
                        <label for="pupukza" className="block mb-2 text-sm font-medium text-gray-900" >Kondisi ZA</label>
                        <input type="number" name="pupukza" id="pupukza" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Kondisi ZA" required="" />
                    </div>
                    <div className="mb-5">
                        <label for="pupuksp" className="block mb-2 text-sm font-medium text-gray-900" >Kondisi SP36</label>
                        <input type="number" name="pupuksp" id="pupuksp" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Kondisi SP36" required="" />
                    </div>
                    <div className="mb-5">
                        <label for="pupukkcl" className="block mb-2 text-sm font-medium text-gray-900" >Kondisi KCL</label>
                        <input type="number" name="pupukkcl" id="pupukkcl" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Kondisi KCL" required="" />
                    </div>
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">Hitung Pupuk</button>
                </form>
            </div>
        </>
    )
}