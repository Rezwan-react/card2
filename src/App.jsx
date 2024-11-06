import './App.css'
import { FaGithub } from 'react-icons/fa';
function App() {

  return (
    <>
         <div className="flex justify-center items-center h-screen bg-[#212121] ">
      <div
        data-text="GitHub"
        className="relative w-[180px] h-[200px] border border-white/10 shadow-[0px_25px_25px_rgba(0,0,0,0.25)] flex justify-center items-center transition-transform duration-500 rounded-lg mx-4   backdrop-blur-md"
        style={{
          background: 'linear-gradient(rgba(255, 255, 255, 0.2), transparent)', // Custom gradient background
        }}
      >
        <FaGithub className="text-white text-5xl" />
        <div className="absolute bottom-0 w-full h-10 bg-white/5 flex justify-center items-center text-white">
          GitHub
        </div>
      </div>
    </div>
        
    </>
  )
}

export default App
