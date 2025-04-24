import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Model } from "./assets/can/Can"
import { Suspense } from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="model">
        <Canvas camera={{fov: 50}}>
              <ambientLight intensity={2} />
              {/* Top hemisphere lights */}
              <pointLight position={[0, 10, 0]} intensity={1.5} />
              <pointLight position={[10, 10, 0]} intensity={1} />
              <pointLight position={[-10, 10, 0]} intensity={1} />
              <pointLight position={[0, 10, 10]} intensity={1} />
              <pointLight position={[0, 10, -10]} intensity={1} />
              
              {/* Side hemisphere lights */}
              <pointLight position={[10, 0, 0]} intensity={0.8} />
              <pointLight position={[-10, 0, 0]} intensity={0.8} />
              <pointLight position={[0, 0, 10]} intensity={0.8} />
              <pointLight position={[0, 0, -10]} intensity={0.8} />
              
              {/* Bottom fill lights */}
              <pointLight position={[0, -10, 0]} intensity={0.5} />
              <pointLight position={[10, -10, 0]} intensity={0.3} />
              <pointLight position={[-10, -10, 0]} intensity={0.3} />
              
              <Suspense fallback={null}>
                <Float rotationIntensity={2}>
                  <Model position-y={-1.5} scale={1.5}/>
                </Float>
              </Suspense>
              <OrbitControls enableZoom={false} enablePan={false}/>
        </Canvas>
      </div>
      <div className="text-box">
        <div className="text">
          <h1>THREE DIMENSIONAL FLAVOUR</h1>
          <h2>The all new Blueberry flavoured Cola from Unbelievable Drinks Co!</h2>
          <h3>Tastes so good, you'll think you're imagining things!</h3>
          <div className="button-box">
            <a href="http://laurens-southgate.dev">
              <button>Find out more</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;