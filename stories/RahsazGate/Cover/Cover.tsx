"use client"

import React, {useEffect, useRef, useState} from "react";
import {Canvas, useFrame, useLoader} from '@react-three/fiber'
import {Center, Environment, OrbitControls, PerspectiveCamera, useGLTF} from '@react-three/drei'
// import {GLTFLoader, SVGRenderer} from "three-stdlib";
// import {Island} from "@/stories/RahsazGate/Cover/Island";
// import {motion} from "framer-motion";


export const Cover = () => {

    // useFrame((state) => )

    return (
        <>
            <div className="w-full h-full flex-1 flex flex-col bg-red-600" dir="ltr">
                <Canvas
                    className="w-full !h-screen bg-purple-600"
                    // gl={(canvas) => {
                    //     const gl = new SVGRenderer()
                    //     // @ts-ignore
                    //     const parent = canvas.parentNode
                    //     parent.removeChild(canvas)
                    //     parent.appendChild(gl.domElement)
                    //     return gl
                    // }}
                >
                    {/*<PerspectiveCamera makeDefault position={[0, 1, 5]}/>*/}
                    <ambientLight args={["#ffffff", 1]}/>
                    {/*<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI}/>*/}
                    {/*<pointLight position={[100, 100, 100]} decay={0} intensity={Math.PI}/>*/}
                    <mesh position={[0, 0.5, 0]}>
                        <sphereGeometry args={[0.5, 32, 32]}/>
                        <meshStandardMaterial color="#ffffff"/>
                    </mesh>
                    <mesh rotation={[Math.PI/180 * 90, 0, 0]}>
                        <planeGeometry args={[7, 7]} />
                        <meshStandardMaterial color="#0e87ff"/>
                    </mesh>

                    {/*<group position={[0, -0.75, 0]}>*/}
                    {/*    <Center >*/}
                    {/*        /!*<Model color={'#ff9621'}/>*!/*/}
                    {/*    </Center>*/}
                    {/*</group>*/}
                    {/*<Box position={[0, 0, 0]}/>*/}
                    {/*<Model/>*/}
                    {/*<Box position={[2.2, 0, 0]}/>*/}
                    {/*<primitive object={gltf.scene} scale={0.4}/>*/}
                    <OrbitControls/>
                    {/*<Environment preset="dawn" background  />*/}
                </Canvas>


                {/*<div className="absolute">*/}
                {/*    <div className="flex gap-4">*/}
                {/*        <RChar*/}
                {/*            className=""*/}
                {/*            size={2.75}*/}
                {/*            x={0}*/}
                {/*            y={80}*/}
                {/*        />*/}
                {/*        <AChar*/}
                {/*            size={2.75}*/}
                {/*            x={-10}*/}
                {/*            y={50}*/}
                {/*        />*/}
                {/*        <HChar*/}
                {/*            size={2.75}*/}
                {/*            x={0}*/}
                {/*            y={0}*/}
                {/*        />*/}
                {/*        <SChar*/}
                {/*            size={2.75}*/}
                {/*            x={0}*/}
                {/*            y={0}*/}
                {/*        />*/}
                {/*        <AChar*/}
                {/*            size={2.75}*/}
                {/*            x={0}*/}
                {/*            y={0}*/}
                {/*        />*/}
                {/*        <ZChar*/}
                {/*            size={2.75}*/}
                {/*            x={0}*/}
                {/*            y={0}*/}
                {/*        />*/}
                {/*        <Shadow*/}
                {/*            mode="small"*/}
                {/*        />*/}
                {/*        <Shadow*/}
                {/*            mode="large"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<Stone*/}
                {/*    size={10}*/}
                {/*    x={0}*/}
                {/*    y={0}*/}
                {/*/>*/}
                {/*<Cactus*/}
                {/*    mode="big"*/}
                {/*    size={5}*/}
                {/*    x={0}*/}
                {/*    y={0}*/}
                {/*/>*/}
                {/*<Cactus*/}
                {/*    mode="tall"*/}
                {/*    size={7}*/}
                {/*    x={0}*/}
                {/*    y={0}*/}
                {/*/>*/}


                {/*<Island*/}
                {/*    size={6}*/}
                {/*    x={0}*/}
                {/*    y={0}*/}
                {/*/>*/}
                {/*<FlagPole*/}
                {/*    className="absolute z-10"*/}
                {/*    size={5}*/}
                {/*    x={-400}*/}
                {/*    y={-260}*/}
                {/*/>*/}
            </div>
        </>
    );
};


export function Model({ color, ...props }: any) {
    // @ts-ignore
    const { nodes, materials } = useGLTF('/scene.glb')
    return (
        <mesh geometry={nodes.connector.geometry}  />
    )
}






function Box(props: any) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // @ts-ignore
    useFrame((state, delta) => (ref.current.rotation.x += delta))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => (event.stopPropagation(), hover(true))}
            onPointerOut={(event) => hover(false)}
        >
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}/>
        </mesh>
    )
}