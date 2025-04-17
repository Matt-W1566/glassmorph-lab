"use client";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html>
      <body>
        <h1>Something went wrong!</h1>
        <button onClick={() => window.location.reload()}>Try again</button>
      </body>
    </html>
  );
}
