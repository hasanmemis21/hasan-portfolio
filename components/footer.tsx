export default function Footer() {
  return (
    <footer className="py-10 text-center text-gray-500 text-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-2">© {new Date().getFullYear()} Hasan Memiş. Tüm hakları saklıdır.</p>
        <p>
          <a href="https://github.com/hasanmemis21" className="hover:text-gray-300">
            github.com/hasanmemis21
          </a>
        </p>
      </div>
    </footer>
  );
}
