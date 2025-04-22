'use client';

export default function CancelButton() {
  return (
    // latest push
    <button
      onClick={() => window.location.href = '/dashboard/settings'}
      className="mt-6 bg-gray-300 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-200 mr-4"
    >
      Cancel
    </button>
  );
}
