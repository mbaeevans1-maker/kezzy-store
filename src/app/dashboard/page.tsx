export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Salon Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-2">
            Total Bookings
          </h2>

          <p className="text-4xl text-green-500 font-bold">
            24
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-2">
            Pending
          </h2>

          <p className="text-4xl text-yellow-500 font-bold">
            6
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-2">
            Confirmed
          </h2>

          <p className="text-4xl text-blue-500 font-bold">
            18
          </p>
        </div>

      </div>
      <div className="mt-12">
  <h2 className="text-3xl font-bold mb-6">
    Recent Bookings
  </h2>

  <div className="space-y-4">

    <div className="bg-zinc-900 p-5 rounded-2xl flex justify-between items-center">
      <div>
        <h3 className="text-xl font-bold">
          Evans
        </h3>

        <p className="text-gray-400">
          Braiding • 11:30 AM
        </p>
      </div>

      <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
        Pending
      </span>
    </div>

    <div className="bg-zinc-900 p-5 rounded-2xl flex justify-between items-center">
      <div>
        <h3 className="text-xl font-bold">
          Mercy
        </h3>

        <p className="text-gray-400">
          Nails • 2:00 PM
        </p>
      </div>

      <span className="bg-green-500 text-black px-4 py-2 rounded-full font-bold">
        Confirmed
      </span>
    </div>

  </div>
</div>
    </main>
  );
}