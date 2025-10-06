import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Sky from "./Sky";
import Water from "./Water";
import Text from "./Text";

export default function Hero() {
  return (
    <section  className="h-screen absolute w-screen bg-black overflow-hidden">
      <Canvas camera={{ position: [0, 4, 20], fov: 50 }}>
        <fog attach="fog" args={["#000000", 20, 30]} />
        <Sky />
        {/* <Text /> */}
        <Water position={[0, 0, -2]} size={60} color={0x001010} distortion={2} speed={0} />
        <Environment preset="studio" />
      </Canvas>
    </section>
  );
}
