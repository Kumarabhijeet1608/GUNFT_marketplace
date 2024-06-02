/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Plane_Awp.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh004.geometry} material={materials.awp} />
      <mesh geometry={nodes.Mesh004_1.geometry} material={materials.scope_awp} />
    </group>
  )
}

useGLTF.preload('/Plane_Awp.glb')
