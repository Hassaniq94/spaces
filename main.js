import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { MeshSurfaceSampler } from 'three/addons/math/MeshSurfaceSampler.js'


/**
 * Loaders
 */
// intègration des Loaders 
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('draco/')

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)




/**
 * Models
 */

let Fence = null
gltfLoader.load(
    'Fence.glb',
    (gltf) =>
    {
        Fence = gltf.scene
        Fence.scale.set(0.3, 0.3, 0.9)
        Fence.position.x =  25
        Fence.position.z =  16.8
        Fence.position.y =  -0.9

        Fence.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        scene.add(Fence)
    }
)


let Fence2 = null
gltfLoader.load(
    'Fence.glb',
    (gltf) =>
    {
        Fence2 = gltf.scene
        Fence2.scale.set(0.3, 0.3, 0.9)
        Fence2.position.x =  - 25
        Fence2.position.z =  16.8
        Fence2.position.y =  -0.9

        Fence2.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        scene.add(Fence2)
    }
)

let Fence3 = null
gltfLoader.load(
    'Fence.glb',
    (gltf) =>
    {
        Fence3 = gltf.scene
        Fence3.scale.set(0.3, 0.3, 0.9)
        Fence3.position.x =  16.4
        Fence3.position.z =  25.6
        Fence3.position.y =  -0.9
        Fence3.rotation.y = Math.PI * 0.5


        Fence3.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        scene.add(Fence3)
    }
)

let Fence4 = null
gltfLoader.load(
    'Fence.glb',
    (gltf) =>
    {
        Fence4 = gltf.scene
        Fence4.scale.set(0.3, 0.3, 0.9)
        Fence4.position.x =  - 16.4
        Fence4.position.z =  25.6
        Fence4.position.y =  -0.9
        Fence4.rotation.y = Math.PI * 0.5


        Fence4.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        scene.add(Fence4)
    }
)

let Fence5 = null
gltfLoader.load(
    'Fence.glb',
    (gltf) =>
    {
        Fence5 = gltf.scene
        Fence5.scale.set(0.3, 0.3, 0.8)
        Fence5.position.x =  0
        Fence5.position.z =  25.6
        Fence5.position.y =  -0.9
        Fence5.rotation.y = Math.PI * 0.5


        Fence5.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        scene.add(Fence5)
    }
)

let house = null
gltfLoader.load(
    'House.glb',
    (gltf) =>
    {
        house = gltf.scene
        house.scale.set(8, 8, 8)
        house.position.x =  5
        house.position.z =  -6
        house.position.y =  3
        // house.rotation.y = Math.PI * 0.5


        house.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        scene.add(house)
    }
)

let Asteroid = null
gltfLoader.load(
    'Asteroid.glb',
    (gltf) =>
    {
        Asteroid = gltf.scene
        Asteroid.position.z = 35
        Asteroid.position.x = - 4
        Asteroid.position.y = - 0.6
        Asteroid.scale.set(0.9, 0.9, 0.9)

        Asteroid.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        scene.add(Asteroid)
    }
)

let SpaceShip = null
gltfLoader.load(
    'SpaceShip.glb',
    (gltf) =>
    {
        SpaceShip = gltf.scene
        SpaceShip.position.x = - 0.7
        SpaceShip.position.z = 45
        SpaceShip.scale.set(3, 3, 3)
        SpaceShip.rotation.x = 0.5
        SpaceShip.position.y = - 3

        SpaceShip.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        scene.add(SpaceShip)
    }
)

let Astronaut = null
gltfLoader.load(
    'Astronaut.glb',
    (gltf) =>
    {
        Astronaut = gltf.scene
        Astronaut.position.x = 12
        Astronaut.position.z =  39
        Astronaut.scale.set(3, 3, 3)
        Astronaut.rotation.y = 1.5
        Astronaut.position.y = - 0.1

        Astronaut.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        scene.add(Astronaut)
    }
)

let Alien = null
gltfLoader.load(
    'Alien.glb',
    (gltf) =>
    {
        Alien = gltf.scene
        Alien.position.x = - 12
        Alien.position.z =  3.2
        Alien.scale.set(0.8, 0.8, 0.8)
        // Alien.rotation.y = - 1.5
        Alien.position.y = - 1

        Alien.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        scene.add(Alien)
    }
)
/**
 * Textures
 */
// Declaratition des textures
const textureLoader = new THREE.TextureLoader()
const floorsColorTexture = textureLoader.load('./LightWoodenParquetFlooring06_4K_BaseColor.png')
const flooraColorTexture = textureLoader.load('./Granite.png')

floorsColorTexture.wrapS = THREE.RepeatWrapping
floorsColorTexture.wrapT = THREE.RepeatWrapping
floorsColorTexture.repeat.x = 3
floorsColorTexture.repeat.y = 3
flooraColorTexture.wrapS = THREE.RepeatWrapping
flooraColorTexture.wrapT = THREE.RepeatWrapping
flooraColorTexture.repeat.x = 5
flooraColorTexture.repeat.y = 5

/**
 * Scene
 */
const scene = new THREE.Scene()

/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

/**
 * Resize
 */
window.addEventListener('resize', () =>
{
    // Update sizes object
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
})

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height)
camera.position.x = 60
camera.position.y = 25
scene.add(camera)

/**
 * Skybox
 */
var skybox = new THREE.CubeTextureLoader().load([
"Skybox/corona_ft.png",
"Skybox/corona_bk.png",
"Skybox/corona_up.png",
"Skybox/corona_dn.png",
"Skybox/corona_rt.png",
"Skybox/corona_lf.png"
]);
scene.background = skybox;

/**
 * Object
 */

const geometry = new THREE.PlaneGeometry(50, 50)
const material = new THREE.MeshBasicMaterial({  map: floorsColorTexture, side: THREE.DoubleSide })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.y = - 1
mesh.rotation.x = Math.PI * 0.5

scene.add(mesh)

const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(50, 15),
    new THREE.MeshBasicMaterial({ color: 0xffcc99 })
)
floor.rotation.x = - Math.PI * 0.5
floor.position.y = - 0.9
floor.position.z = 19
scene.add(floor)

const wall1 = new THREE.Mesh(
    new THREE.PlaneGeometry(33, 8),
    new THREE.MeshBasicMaterial({ map: flooraColorTexture, side: THREE.DoubleSide })
)
wall1.position.y = 3
wall1.position.x = 25
wall1.position.z = -8
wall1.rotation.y = - Math.PI * 0.5
scene.add(wall1)

const wall2 = new THREE.Mesh(
    new THREE.PlaneGeometry(33, 8),
    new THREE.MeshBasicMaterial({ map: flooraColorTexture, side: THREE.DoubleSide })
)
wall2.position.y = 3
wall2.position.x = - 25
wall2.position.z = - 8
wall2.rotation.y = - Math.PI * 0.5
scene.add(wall2)

const wall3 = new THREE.Mesh(
    new THREE.PlaneGeometry(50, 8),
    new THREE.MeshBasicMaterial({ map: flooraColorTexture, side: THREE.DoubleSide })
)
wall3.position.y = 3
wall3.position.z = - 24.2
scene.add(wall3)


//création des brins d'herbes "blade"s
const sampler = new MeshSurfaceSampler(floor).build();
const bladesCount = 99000
const bladeGeometry = new THREE.ConeGeometry(0.5, 0, 3);
const bladeMaterial = new THREE.MeshStandardMaterial({
  color: 0x008000, side: THREE.DoubleSide
});

const blades = new THREE.InstancedMesh(bladeGeometry, bladeMaterial, bladesCount);
blades.castShadow = true
blades.receiveShadow = true
blades.geometry.translate(0,0.1,0)
blades.rotation.x = - Math.PI * 0.5
blades.position.y = - 0.8
blades.position.z = 19
scene.add(blades);

//génération de la position aléatoire
const tempPosition = new THREE.Vector3();
const tempObject = new THREE.Object3D();
for (let i = 0; i < bladesCount; i++) {
  sampler.sample(tempPosition);
  tempObject.position.set(tempPosition.x, tempPosition.y, tempPosition.z);
  tempObject.scale.setScalar(Math.random() * 0.4 + 0.4);
  tempObject.updateMatrix();
  blades.setMatrixAt(i, tempObject.matrix);
}


// create an AudioListener and add it to the camera
const listener = new THREE.AudioListener();
camera.add( listener );

// create a global audio source
const sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load( '/Cosmos.mp4', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop(true);
	sound.setVolume(0.5);
	sound.play();
});

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
scene.add(ambientLight)

const pointLight2 = new THREE.PointLight(0xa61fd2, 1000, 30)
    pointLight2.position.x = - 0.7
    pointLight2.position.z = 50
    pointLight2.rotation.x = 0.5
    pointLight2.position.y = - 1
scene.add(pointLight2)

const pointLight = new THREE.PointLight(0xffffff, 3, 3)
pointLight.position.x = - 2.5
pointLight.position.z = - 4
pointLight.position.y = 0.5
scene.add(pointLight)

const pt1 = new THREE.PointLight(0xffffff, 10, 3)
pt1.position.x = - 12
pt1.position.z = 4
pt1.position.y = 12
scene.add(pt1)

const spotLight = new THREE.SpotLight(0xdcc51c, 10, 10,  15, 0.5)
spotLight.position.x = - 2.9
spotLight.position.z = 2.9
scene.add(spotLight)

spotLight.target.position.y = - 10
scene.add(spotLight.target)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
document.body.appendChild(renderer.domElement)

/**
 * Orbit Controls
 */
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

/**
 * Loop
 */
const loop = () =>
{
    window.requestAnimationFrame(loop)

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Update model
    if(Asteroid !== null)
    Asteroid.rotation.y = Date.now() * 0.00008

    // // Update model
    // if(Astronaut !== null)
    // Astronaut.position.x = Date.now() * (-0.00000008)
}

loop()