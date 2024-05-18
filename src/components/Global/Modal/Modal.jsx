export default function Modal({ isOpen, onClose, children }) {
    return (
        <div className={`fixed bottom-0 left-0 w-full h-screen bg-black bg-opacity-50 transform transition-transform duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="bg-white h-2/3 rounded-t-3xl p-6">
                <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
                    <span className="text-2xl">&times;</span>
                </button>
                {children}
            </div>
        </div>
    );
}