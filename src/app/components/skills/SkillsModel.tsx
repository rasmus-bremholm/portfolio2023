import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SECTIONS, type Section } from "./types";


export default function SkillsModel({ hoveredSection }: { hoveredSection: Section | null }) {
	const config = SECTIONS.find((s) => s.id === hoveredSection)?.material ?? SECTIONS[0].material;
	const materialRef = useRef<THREE.MeshStandardMaterial>(null!);
	const targetColor = useRef(new THREE.Color());

	useFrame(() => {
		if (!materialRef.current) return;
		targetColor.current.set(config.color);
		materialRef.current.color.lerp(targetColor.current, 0.1);
		materialRef.current.roughness = THREE.MathUtils.lerp(materialRef.current.roughness, config.roughness, 0.1);
		materialRef.current.metalness = THREE.MathUtils.lerp(materialRef.current.metalness, config.metalness, 0.1);
	});

	return (
		<mesh>
			<meshStandardMaterial ref={materialRef} wireframe={config.wireframe} />
			<boxGeometry />
		</mesh>
	);
}
