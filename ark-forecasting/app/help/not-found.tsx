import Link from "next/link";

export default function HelpNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center">
      <div className="max-w-md">
        <h1 className="text-4xl font-bold text-white mb-4">
          Help topic not found
        </h1>

        <p className="text-gray-400 mb-6">
          We could not find the help article you are looking for. It might have
          been removed or the link is incorrect.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/help"
            className="rounded-lg border border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-300 hover:bg-gray-900 transition"
          >
            Browse Help Center
          </Link>

          <Link
            href="/"
            className="rounded-lg border border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-300 hover:bg-gray-900 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
