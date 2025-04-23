export function Loader({ loading }) {
  if (loading) {
    return (
      <main className="flex flex-col items-center justify-center p-4 bg-gray-100 text-gray-900">
        <h1 className="my-4 text-6xl">Loading...</h1>
      </main>
    );
  }
}
