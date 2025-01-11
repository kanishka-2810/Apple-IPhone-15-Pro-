import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import Lights from './Lights'
import Iphone from './Iphone'
import * as THREE from 'three'
import Loader from './Loader'

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, smallRotation, item, size }) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}>

      {/* Ambient Light which lights up all the object in the scene equally*/}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      {/*use target to target the center of the screen / vector3(x,y,z)axis
      getAzimuthalAngle() to know where we are in the space means where we left the mesh after clicking */}

      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large'`}
        position={[0, 0, 0]}>

        {/* set position to [0,0,0] to set it in center */}

        <Suspense fallback={<Loader />} >
          <Iphone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size} />
        </Suspense>
      </group>

      {/* loader untils mesh or image loads */}
    </View>
  )
}

export default ModelView