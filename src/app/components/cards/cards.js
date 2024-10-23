"use client"

export default function Cards({ text, title, buttonText }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-5">
      <img
        className="w-full rounded"
        src="https://via.placeholder.com/400"
        alt="Imagem do Card"
      />
      <div className="py-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-base mt-2">
          {text}
        </p>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
