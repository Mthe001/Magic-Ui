import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const SignUp = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-neutral-900 text-neutral-100">
            <div className="w-full max-w-md p-8 bg-neutral-800 rounded-lg shadow-lg border border-neutral-700 space-y-6">

                <button
                    onClick={handleBackToHome}
                    className="text-neutral-400 hover:text-neutral-200 mb-4 text-sm font-medium"
                >
                    &larr; Back
                </button>

                <div className="text-center">
                    <h1 className="text-3xl font-semibold mb-2">Hey, Anonymous User</h1>
                    <h4 className="text-neutral-400 mb-6">Sign up for your account</h4>
                </div>

                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full bg-neutral-900 border border-neutral-700 text-neutral-200 px-4 py-2 rounded-lg focus:border-neutral-500 focus:outline-none"
                        required
                    />
                    <input
                        type="email"
                        placeholder="name@example.com"
                        className="w-full bg-neutral-900 border border-neutral-700 text-neutral-200 px-4 py-2 rounded-lg focus:border-neutral-500 focus:outline-none"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full bg-neutral-900 border border-neutral-700 text-neutral-200 px-4 py-2 rounded-lg focus:border-neutral-500 focus:outline-none"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full bg-neutral-900 border border-neutral-700 text-neutral-200 px-4 py-2 rounded-lg focus:border-neutral-500 focus:outline-none"
                        required
                    />
                    <button
                        className="w-full bg-zinc-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                        Sign up
                    </button>
                </div>

                <div className="flex items-center my-6">
                    <hr className="w-full border-neutral-700" />
                    <span className="mx-3 text-neutral-400">OR</span>
                    <hr className="w-full border-neutral-700" />
                </div>

                <div>
                    <button
                        className="w-full flex items-center justify-center gap-2 bg-neutral-700 hover:bg-neutral-600 text-neutral-100 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                        <FaGithub className="text-lg" /> Continue with GitHub
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
