import Link from 'next/link';
import 'tailwindcss/dist/tailwind.min.css'
const NotFound = () => {
  return (
      <div className="w-screen mx-auto w">
        <div className="flex items-center justify-center">
          <div className="sm:w-screen lg:w-screen">
            <div className="bg-404 shadow-xl rounded-lg overflow-hidden">
              <div className="bg-cover bg-center h-screen p-4 flex justify-center items-center">
                <div className="block text-center">
                  <p className="text-15xl text-gray-900 font-bold ">4<p className="inline-block text-purple-700">0</p>4</p>
                  <h2 className="text-4xl text-gray-900 font-bold py-3">
                    Página no encontrada
                  </h2>
                  <Link type="button" href="/login" className="p-2 bg-purple-700 w-full sm:w-auto font-bold uppercase text-xs rounded p-4 text-white shadow-md">
                    Volver al inicio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default NotFound;