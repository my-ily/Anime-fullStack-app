import { useState } from "react";

function Login({ setMode, setModel }) {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      
      <div 
        onClick={() => setModel(false)} 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      ></div>

      <div className="relative bg-neutral-900 text-white p-6 w-full max-w-md rounded-xl shadow-xl border border-white/10 z-[1000]">
        
        <button 
          onClick={() => setModel(false)} 
          className="absolute right-3 top-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold mb-4">Login to our platform</h3>

        <form className="space-y-4">
          <div>
            <label className="block mb-1">Your email</label>
            <input className="w-full p-2 rounded bg-neutral-800 border border-neutral-600" />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input className="w-full p-2 rounded bg-neutral-800 border border-neutral-600" />
          </div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg font-semibold">
            Login
          </button>
        </form>

        <p className="mt-3 text-sm">
          Don't have an account?{" "}
          <button
            className="text-purple-400 hover:underline"
            onClick={() => setMode("signup")}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}


function Signup({ setMode, setModel }) {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      
      <div 
        onClick={() => setModel(false)} 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      ></div>

      <div className="relative bg-neutral-900 text-white p-6 w-full max-w-md rounded-xl shadow-xl border border-white/10 z-[1000]">
        
        <button 
          onClick={() => setModel(false)} 
          className="absolute right-3 top-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold mb-4">Create an account</h3>

        <form className="space-y-4">
          <div>
            <label className="block mb-1">Your email</label>
            <input className="w-full p-2 rounded bg-neutral-800 border border-neutral-600" />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input className="w-full p-2 rounded bg-neutral-800 border border-neutral-600" />
          </div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg font-semibold">
            Sign up
          </button>
        </form>

        <p className="mt-3 text-sm">
          Already have an account?{" "}
          <button
            className="text-purple-400 hover:underline"
            onClick={() => setMode("login")}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}


function AuthContainer({ model, setModel }) {
  const [mode, setMode] = useState("login"); 
  // login | signup

  if (!model) return null;

  return (
    <>
      {mode === "login" && <Login setMode={setMode} setModel={setModel} />}
      {mode === "signup" && <Signup setMode={setMode} setModel={setModel} />}
    </>
  );
}

export default AuthContainer;
