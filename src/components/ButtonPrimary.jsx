export default function ButtonPrimary({ title, onClick }) {
  return (
    <button 
    className="bg-sky-900 px-4 py-2 rounded-xl mt-4 text-white text-lg min-w-30"
    onClick={onClick}>{title}    
    </button>
  )
}