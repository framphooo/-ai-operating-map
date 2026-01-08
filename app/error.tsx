"use client";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-heading font-bold text-foreground">
          Something went wrong
        </h1>
        <p className="text-lg text-secondary">
          {error.message || "An unexpected error occurred"}
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-accent text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          Try again
        </button>
      </div>
    </div>
  );
}



