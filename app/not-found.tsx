import { Suspense } from 'react';

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold">Not Found</h2>
        <p>Could not find requested resource</p>
      </div>
    </Suspense>
  );
}