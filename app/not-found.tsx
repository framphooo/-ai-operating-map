import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-heading font-bold text-foreground">
          404
        </h1>
        <p className="text-lg text-secondary">
          This page could not be found.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-accent text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}



