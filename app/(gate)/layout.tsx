"use client"


import {Metadata} from "next";
import React, {useEffect, useRef} from "react";
import * as THREE from "three";

// export const metadata: Metadata = {
//     title: "احراز هویت",
//     icons: {
//         icon: "/favicon.ico",
//     },
// };


export default function Layout({children}: { children: React.ReactNode }) {


    const containerRef = useRef<HTMLDivElement>(null);

    const cube = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, 800 / 800, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(800, 800);
            containerRef.current?.appendChild(renderer.domElement);
            camera.position.z = 5;

            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            // Render the scene and camera
            renderer.render(scene, camera);

            const renderScene = () => {
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                renderer.render(scene, camera);
                requestAnimationFrame(renderScene);
            };
            renderScene()
        }
    }, []);


    // @ts-ignore
    return (
        <main className="flex w-full min-h-screen overflow-hidden flex-col h-full bg-primary">
            <aside className="flex-1 relative h-full bg-amber-400 flex-row flex">
                <section className="h-full bg-red-500">
                    <div className="bg-yellow-50" ref={containerRef}/>
                </section>
                <section className="h-full bg-green-300">
                    {/*<svg className="w-full rotate-[-64deg] mt-[-140px] mr-[180px]" viewBox="0 0 928 894" fill="none"*/}
                    {/*     xmlns="http://www.w3.org/2000/svg">*/}
                    {/*    <g filter="url(#filter0_i_1962_76283)">*/}
                    {/*        <path*/}
                    {/*            d="M394.496 22.8919C435.854 -7.15614 491.856 -7.1561 533.214 22.8919L878.922 274.064C920.279 304.112 937.585 357.373 921.788 405.992L789.739 812.396C773.942 861.015 728.635 893.932 677.514 893.932H250.195C199.075 893.932 153.768 861.015 137.971 812.396L5.92201 405.992C-9.87515 357.373 7.43052 304.112 48.788 274.064L394.496 22.8919Z"*/}
                    {/*            fill="white" fillOpacity="0.7"/>*/}
                    {/*    </g>*/}
                    {/*    <defs>*/}
                    {/*        <filter id="filter0_i_1962_76283" x="-3.86133" y="-3.64417" width="931.432"*/}
                    {/*                height="897.576" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">*/}
                    {/*            <feFlood floodOpacity="0" result="BackgroundImageFix"/>*/}
                    {/*            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>*/}
                    {/*            <feColorMatrix in="SourceAlpha" type="matrix"*/}
                    {/*                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"*/}
                    {/*                           result="hardAlpha"/>*/}
                    {/*            <feOffset dx="-4" dy="-4"/>*/}
                    {/*            <feGaussianBlur stdDeviation="6"/>*/}
                    {/*            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>*/}
                    {/*            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>*/}
                    {/*            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1962_76283"/>*/}
                    {/*        </filter>*/}
                    {/*    </defs>*/}
                    {/*</svg>*/}
                </section>
            </aside>
        </main>

    );
}
