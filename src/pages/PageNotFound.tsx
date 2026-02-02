import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-serif font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found.</p>
      <Link to="/" className="text-accent hover:underline">
        Return Home
      </Link>
    </div>
  );
};

export default PageNotFound;
