import ItemList from './ItemList.jsx';
import AddItemButton from './AddItemButton.jsx';
import { useState, useEffect } from 'react';


export default function ItemView() {
    const [list, setList] = useState([])
    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('list')) || [];
        setList(savedList);
    }, []);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"> {/* Cambiato a flex-col */}
            <div className="w-96 md:w-auto bg-[#121212] rounded-lg shadow-md p-6 my-8">
                <ItemList list />
            </div>

            {list.length === 0 && <AddItemButton />} {/* Spostamento del bottone */}
        </div>
    );
}
