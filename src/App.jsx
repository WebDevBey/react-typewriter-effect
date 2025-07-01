import Typewriter from "typewriter-effect";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <h1 className="text-3xl font-bold flex gap-2">
        <span>I build</span>
        <span className="text-blue-400">
          <Typewriter
            options={{
              strings: [
                "Web Apps",
                "Interactive UI",
                "Responsive Layouts",
                "Modern Designs",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
              pauseFor: 1000,
            }}
          />
        </span>
      </h1>
    </div>
  );
}

export default App;
