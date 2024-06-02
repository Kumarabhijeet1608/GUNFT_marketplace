/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function Aug_mead(props) {
  const { nodes, materials } = useGLTF('/Aug_mead.glb')

  const model_ref = useRef();

  useFrame(() => {
    model_ref.current.rotation.y +=0.01;
  })
  return (
    <group ref={model_ref} {...props} dispose={null}>
      <mesh geometry={nodes.Mesh001.geometry} material={materials.rif_aug} />
      {props.isScopePresent ? 
      <group>
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials.scope_aug} />
      <mesh geometry={nodes.Mesh001_2.geometry} material={materials.rif_aug_scope} />
      <mesh geometry={nodes.Mesh001_3.geometry} material={materials.scope_lens_dirt} />
      <mesh geometry={nodes.Mesh001_4.geometry} material={materials.rif_aug_scope_glass} />
      </group>
      :<group></group>}
      
      {props.isMuzzlePresent ? <group>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.001']} position={[0.03, 3.42, 20.11]} rotation={[1.58, 0.13, -0.02]} scale={[-0.73, -2.81, -0.73]} />
      </group>
      :<group></group>}
    </group>
  )
}

useGLTF.preload('/Aug_mead.glb')
