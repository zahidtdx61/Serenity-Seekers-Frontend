import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const goBack = (loc) => {
    navigate(loc);
  };

  return (
    <>
      <Helmet>
        <title>Serenity Seekers | 404 - Page Not Found</title>
      </Helmet>
      <section>
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
          <div className="max-w-lg mx-auto space-y-3 text-center">
            <h3 className="text-indigo-600 font-semibold">404 Error</h3>
            <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
              Page not found
            </p>
            <p className="text-gray-600">
              Sorry, the page you are looking for could not be found or has been
              removed.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => goBack(-1)}
                className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg"
              >
                Go back
              </button>
              <button
                onClick={() => goBack("/")}
                className="block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg"
              >
                Contact support
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
