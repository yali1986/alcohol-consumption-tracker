export default function Modal({ onClose, children, top = "top-[180px]" }) {
    return (
        <div className={`fixed ${top} left-0 w-full h-2/3 bg-blue-100 bg-opacity-50 flex justify-center items-center z-50 border border-sky-900 rounded-xl pb-6`}>
            <div className="rounded-xl mb-10 mx-auto p-8 w-6/10 bg-white text-sky-900 text-xl leading-10 mt-16">
                <button
                    className="absolute top-2 right-4 text-xl font-bold text-sky-900"
                    onClick={onClose}
                >
                    ×
                </button>
                {children}
            </div>
        </div>
    )
}