


export default function UserProfile(){


    console.log("UserProfile component rendered");
    return (

       <div className="p-6 rounded-xl border bg-white shadow-sm flex flex-col items-center gap-4"
       
                >
  <h1 className="text-lg font-semibold text-gray-700">
    User Profile
  </h1>

  <div className="w-80 rounded-xl border bg-gray-50 p-6 shadow-md flex flex-col items-center gap-3">
    
    <div className="w-20 h-20 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
      JD
    </div>

    <h2 className="text-xl font-bold text-gray-800">
      John Doe
    </h2>

    <div className="text-sm text-gray-600 space-y-1 text-center">
      <p>
        <span className="font-medium text-gray-700">Email:</span>{" "}
        2QZBx@example.com
      </p>
      <p>
        <span className="font-medium text-gray-700">Location:</span>{" "}
        Uttar Pradesh, India
      </p>
    </div>

    <button className="mt-3 px-4 py-2 text-sm font-medium text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 transition">
      View Profile
    </button>
  </div>
</div>

    )
}