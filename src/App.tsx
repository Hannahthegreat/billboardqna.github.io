import billboard from "./assets/Billboard_logo.svg.png";
import DialogflowMessenger from "./DialogFlowMessenger";

function App() {
  return (
    <>
      <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-10">
        <div className="flex flex-col pt-20 lg:pt-0 lg:justify-center min-h-screen">
          <a href="">
            <img src={billboard} alt="Billboard Logo" className="max-w-2/3" />
            <img
              src="/billboardqna.github.io/Billboard_logo.svg.png"
              alt="Billboard Logo"
            />
          </a>
          <div className="py-5">
            <div className="flex items-center w-full">
              <h1 className="text-2xl font-bold mr-4">AI Powered Chatbot</h1>
              <span className="flex-1 border-t-2 border-black"></span>
            </div>
            <p>QNA about Billboard's Hot 100 Charts</p>
          </div>
        </div>
        <div>
          <DialogflowMessenger />
        </div>
      </div>
    </>
  );
}

export default App;
