import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-neutral-100 text-center">
            <h1 className="text-6xl font-bold mb-4">Oops!</h1>
            <p className="text-xl mb-2">Sorry, an unexpected error has occurred.</p>
            <p className="text-neutral-400 mb-4">
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                Go Back Home
            </Link>
        </div>
    );
}
