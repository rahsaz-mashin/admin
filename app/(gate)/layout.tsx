import {Metadata} from "next";
import React from "react";


export const metadata: Metadata = {
    title: "احراز هویت مرکزی",
};


export default function Layout({children}: { children: React.ReactNode }) {


    // const containerRef = useRef<HTMLDivElement>(null);
    //
    // const cube = useRef(null);
    //
    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         const scene = new THREE.Scene();
    //         const camera = new THREE.PerspectiveCamera(75, 800 / 800, 0.1, 1000);
    //         const renderer = new THREE.WebGLRenderer();
    //         renderer.setSize(800, 800);
    //         containerRef.current?.appendChild(renderer.domElement);
    //         camera.position.z = 5;
    //
    //         const geometry = new THREE.BoxGeometry();
    //         const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    //         const cube = new THREE.Mesh(geometry, material);
    //         scene.add(cube);
    //
    //         // Render the scene and camera
    //         renderer.render(scene, camera);
    //
    //         const renderScene = () => {
    //             cube.rotation.x += 0.01;
    //             cube.rotation.y += 0.01;
    //             renderer.render(scene, camera);
    //             requestAnimationFrame(renderScene);
    //         };
    //         renderScene()
    //     }
    // }, []);


    // @ts-ignore
    return (
        <main className="flex w-full min-h-screen overflow-hidden flex-col h-full bg-primary">
            <aside className="flex-1 relative h-full flex-row flex">
                <div className="h-2/5 md:h-2/3 w-full md:w-auto transition-all aspect-square bottom-0 md:top-0 end-0 bg-white/70 rounded-br-3xl absolute flex justify-center p-3">
                    <div className="relative w-full h-full flex justify-center max-w-sm">
                        {children}
                    </div>
                </div>
            </aside>
        </main>

    );
}
