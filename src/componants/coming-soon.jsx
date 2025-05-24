const ComingSoon = () => {

  return (
    <div
      className="min-h-screen bg-center bg-no-repeat bg-contain"
      style={{ backgroundImage: "url('/logo_2.png')", backgroundSize: "70% auto", }}
    >
      <div className="min-h-screen bg-black/70 flex flex-col">
        <header className="flex items-center justify-between p-4 border-b border-gray-700 relative">
          <img src="/logo_2.png" alt="Company Logo" className="w-10 h-10 md:w-12 md:h-12" />
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-xl md:text-3xl font-extrabold tracking-wide text-white uppercase">
              Code Cybers
            </h1>
          </div>
        </header>

     <main className="flex flex-col justify-center items-center flex-1 text-center space-y-12 px-4">
  <span className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-wide text-white uppercase">
    We are Coming Very Soon
  </span>
  <p className="text-md sm:text-lg md:text-2xl text-gray-300">
    <span className="animate-pulse">info@codecybers.com</span>
  </p>
</main>

        <footer className="w-full py-4 text-center text-gray-400 text-sm border-t border-gray-700">
          &copy; {new Date().getFullYear()} Code Cybers. All rights reserved.
        </footer>
      </div>
    </div>
  );
};
export default ComingSoon; 