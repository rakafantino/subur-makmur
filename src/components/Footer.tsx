export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t-8 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h4 className="font-bold text-xl text-primary mb-1">
            Subur Makmur Pantang Mundur
          </h4>
          <p className="text-gray-400 text-sm max-w-md">
            Jl. Raya Pematang Reba - Pekan Heran, Pekan Heran, Kec. Rengat Barat, Kabupaten Indragiri Hulu, Riau 29351
          </p>
        </div>
        <div className="flex space-x-4">
          <a
            className="text-gray-400 hover:text-primary transition-colors"
            href="#"
          >
            <span className="material-icons">facebook</span>
          </a>
          <a
            className="text-gray-400 hover:text-primary transition-colors"
            href="#"
          >
            <span className="material-icons">camera_alt</span>
          </a>
        </div>
      </div>
      <div className="text-center mt-8 text-xs text-gray-600">
        © 2026 Subur Makmur. All rights reserved.
      </div>
    </footer>
  );
}
