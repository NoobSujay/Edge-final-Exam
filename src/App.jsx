import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="navbar bg-base-100 flex ">
      <div className="flex-1">
      <a className="btn btn-ghost text-xl">ALL</a>
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
      </div>
    {/* <span className="countdown font-mono text-2xl">
      <span style={{"--value":10}}></span>:
      <span style={{"--value":24}}></span>:
      <span style={{"--value":${counter}}}></span>
    </span> */}
    {/* <span class="countdown font-mono text-2xl">
      <span style="--value:10;"></span>
      :
      <span style="--value:24;"></span>
      :
      <span style="--value:${counter};"></span>
    </span> */}
      
      <div className="flex-none gap-2">
        
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 flex rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  
              </div>
              
            </div>
            
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
            <span>sujay</span>
        </div>
        
      </div>
  </div>
    </>
  )
}

export default App
