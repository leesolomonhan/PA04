

texture1 = new Texture('/images/space.jpeg')
texture3 = new Texture('/images/ball.png')
document.getElementById('title').innerHTML="demos/pa04a"

function runTest(){
	canvas.width=900
	canvas.height=900
	const renderer = new Renderer(300,300)
	const scene = new Scene('pa04a')


	const mat1 = Material.standard()
	mat1.texture = texture3
	mat1.textureWeight = 0.5
	mat1.texture.repeatU=2
	mat1.texture.repeatV=2
	mat1.emissive= new Color(0.1,0.05,0);

	const mat2 = Material.standard()
	mat2.texture = texture3
	mat2.textureWeight = 0.5
	mat2.texture.repeatU=1
	mat2.texture.repeatV=1
	mat2.emissive= new Color(0.15,0,0.1);


	const mat3 = Material.standard()
	mat3.texture = texture3
	mat3.textureWeight = 0.5
	mat3.texture.repeatU=1
	mat3.texture.repeatV=1
	mat3.emissive= new Color(0.25,0,0);

	const mat4 = Material.standard()
	mat4.texture = texture1
	mat4.textureWeight = 0.5
	mat4.texture.repeatU=2
	mat4.texture.repeatV=2




	//const s1 = new Sphere(new Vector3(-2,0,-80),20)
	//const s2 = new Sphere(new Vector3(-50,0,-80),10)
	const s0 = new Sphere()
	s0.material = mat2
	s0.scale(new Vector3(0.4,0.4,0.4))
		.translate(new Vector3(0,4,0))
		.rotateX(.6)

	scene.addObject(s0)

	const s1 = new Sphere()
	s1.material=mat1
	s1.translate(new Vector3(1.5,1,-1.5))
		.scale(new Vector3(.4,.4,.4))
  scene.addObject(s1)

	const s2 = new Sphere()
	s2.material = mat3
	s2.translate(new Vector3(25,7,40))
	  .scale(new Vector3(.4,.4,.4))
	scene.addObject(s2)

	const s3 = new Sphere()
	s3.material = mat3
	s3.translate(new Vector3(-1.75,1,1.5))
		.scale(new Vector3(.4,.4,.4))
	scene.addObject(s3)

	const g=8
	const p1 = new Square()
	p1.material = mat4
	p1.rotateX(Math.PI/2)
	 // .translate(new Vector3(-30,-10,-50))
		.scale(new Vector3(g,g,1))
		.translate(new Vector3(-0.5,-0.5,0.5))



	scene.addObject(p1)


	const light1 = new Light(new Vector3(5,15,-10))
	light1.intensity = 0.5
	light1.diffuseColor = Color.WHITE
	light1.specularColor = Color.RED
	scene.addLight(light1)

	const light2 = new Light(new Vector3(-2,1,2))
	light2.intensity = 0.75
	light2.diffuseColor = Color.WHITE
	light2.specularColor = Color.BLUE
	scene.addLight(light2)

	const camera = new Camera()
	camera.translate(new Vector3(2,2,2))
	camera.lookAt(s0.position)

	renderer.render(scene,camera)
}

setTimeout(runTest, 1000)
