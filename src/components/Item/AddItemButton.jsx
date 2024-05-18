import { PlusIcon } from '@heroicons/react/24/outline'; // Assicurati di aver installato @heroicons/react

export default function AddItemButton() {
    return (
        <button className="w-full justify-center flex items-center space-x-2 text-white hover:text-gray-200">
            <PlusIcon className="h-6 w-6" />
            <span>Aggiungi elemento</span>
        </button>
    );
}
