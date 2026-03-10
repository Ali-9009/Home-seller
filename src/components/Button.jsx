export default function Button({ text, onClick, type = "button", className = "" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-8 py-4 rounded-full border border-[#BEBEBE]
             bg-[#FEFEFF] text-[#272727] hover:bg-[#272727] hover:text-white
             transition-all duration-300 ${className}`}
        >
            {text}
        </button>
    );
}