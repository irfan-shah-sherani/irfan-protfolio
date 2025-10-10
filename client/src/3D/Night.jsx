import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Sky from "./stars";

export default function Hero() {
  return (
    <section  className="h-screen absolute w-screen bg-black overflow-hidden">
      <Canvas camera={{ position: [0, 4, 20], fov: 50 }}>
        <Sky />
      </Canvas>
    </section>
  );
}
