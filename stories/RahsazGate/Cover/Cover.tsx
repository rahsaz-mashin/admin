"use client"

import {Canvas, useFrame, useLoader} from "@react-three/fiber";
import {Suspense, useEffect, useRef, useState} from "react";
import {Environment, OrbitControls, PerspectiveCamera, useFBX} from "@react-three/drei";
import {FBXLoader, GLTFLoader} from "three-stdlib";
import {TextureLoader} from "three";
import * as THREE from 'three'
import {Input} from "@nextui-org/input";


export const Cover = () => {
    // const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([2, 2, 2]);

    return (
        <>
            <div className="w-full h-full flex-1 flex flex-col relative" dir="ltr">
                <Canvas className="!h-screen w-full">
                    <Area />
                </Canvas>
                {/*<div className="absolute top-0 left-0 p-3 z-50">*/}
                {/*    <Input*/}
                {/*        type="text"*/}
                {/*        value={cameraPosition.join(",")}*/}
                {/*        onValueChange={(v) => setCameraPosition(v.split(",").map((v) => parseFloat(v)) as [number, number, number])}*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
        </>
    );
};


export const Area = () => {
    return (
        <Suspense fallback={null}>
            <color attach="background" args={["#930eff"]}/>
            {/*<Environment*/}
            {/*    files={"/3d/textures/envmap.hdr"}*/}
            {/*    background={true}*/}
            {/*/>*/}
            <ambientLight/>
            <directionalLight/>
            <hemisphereLight/>
            {/*<light/>*/}
            {/*<pointLight/>*/}
            {/*<spotLight/>*/}
            <PerspectiveCamera makeDefault zoom={0.1} position={[2, 12, 12]} fov={10}/>
            {/*<spotLight/>*/}
            {/*<light/>*/}
            {/*<pointLight  position={[5, 5, 1]}/>*/}
            {/*<rectAreaLight/>*/}
            {/*<ambientLight intensity={0.8}/>*/}
            {/*<directionalLight color="white" position={[100, 100, 100]}/>*/}
            <OrbitControls />
            <Track/>
        </Suspense>
    );
}


export function Track() {

    const model = useLoader(
        GLTFLoader,
        "/3d/cube/models/withTextureSpline.glb"
    );
    // const fbx = useFBX('/3d/models/c4d.fbx')
    //
    // const colorMap = useLoader(
    //     TextureLoader,
    //     "/3d/textures/pCube4Surface_Color.png"
    // );
    //
    // useEffect(() => {
    //     colorMap.anisotropy = 16;
    // }, [colorMap]);

    // @ts-ignore
    // const geometry = result.scene.children[0].geometry;

    console.log(model)
    //
    // // Here's the animation part
    // // *************************
    let mixer: any
    if (model.animations.length) {
        console.log("hey youuuuuuuu")
        mixer = new THREE.AnimationMixer(model.scene)
        model.animations.forEach((clip: any) => {
            console.log("hey")
            const action = mixer.clipAction(clip)
            console.log(action)
            action.play()
        })
    }

    useFrame((state, delta) => {
        mixer?.update(delta)
    })
    // // *************************
    //
    // model.scene.traverse((child: any) => {
    //     if (child.isMesh) {
    //         child.castShadow = true
    //         child.receiveShadow = true
    //         child.material.side = THREE.FrontSide
    //     }
    // })


    return <primitive object={model.scene}/>;
    // const myMesh = useRef()
    // useFrame(({ clock }) => {
    //     // @ts-ignore
    //     myMesh.current.rotation.x = clock.getElapsedTime()
    // })

    return (
        <>
            {/*// @ts-ignore*/}
            <mesh geometry={model.scene.children[0].geometry}>
                {/*<meshStandardMaterial/>*/}
                {/*<meshBasicMaterial*/}
                {/*    toneMapped={false}*/}
                {/*    map={colorMap}*/}
                {/*/>*/}
            </mesh>
        </>
    )

}