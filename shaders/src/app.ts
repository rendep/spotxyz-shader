import {
  ArcRotateCamera, Color3, CubeTexture, Engine, HemisphericLight, Light, Mesh,
  MeshBuilder, Scene, StandardMaterial, ShaderMaterial, Texture, Vector3,
} from 'babylonjs';

export default class App {
  private engine: BABYLON.Engine;
  private scene: BABYLON.Scene;
  private camera: BABYLON.ArcRotateCamera;
  private light: BABYLON.Light;

  constructor(private canvas: HTMLCanvasElement) {
    this.engine = new BABYLON.Engine(this.canvas, true);
  }

  /**
   * Creates the BABYLONJS Scene
   */
  createScene(): void {
    this.scene = new BABYLON.Scene(this.engine);
    this.camera = new BABYLON.ArcRotateCamera(
      "Camera",
      0,
      Math.PI / 3,
      8,
      BABYLON.Vector3.Zero(),
      this.scene
    );
    this.camera.attachControl(this.canvas, true);

    this.light = new BABYLON.HemisphericLight(
      "Light",
      new BABYLON.Vector3(0,1,0),
      this.scene
    );

    let skybox = BABYLON.Mesh.CreateBox(name, 1000.0, this.scene);
    let skyboxMaterial = new BABYLON.StandardMaterial(name, this.scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(
      "./assets/TropicalSunnyDay",
      this.scene
    );
    skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new Color3(0, 0, 0);
    skyboxMaterial.specularColor = new Color3(0, 0, 0);
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;

    let matBox = this.createBoxMaterial();
    let mat = this.createMaterial();
    // let matExtra = this.createMaterial();

    let box = BABYLON.MeshBuilder.CreateBox("Box", { size: 2 }, this.scene);
    box.position.z = -1;
    box.material = matBox;

    // let funBall = BABYLON.MeshBuilder.CreateSphere("funBall", {diameter: 2}, this.scene);
    // funBall.position.x = -2;
    // funBall.material = matExtra;

    let polyhedron = BABYLON.MeshBuilder.CreatePolyhedron(
      "Shape",
      { type: 2, size: 1 },
      this.scene
    );
    polyhedron.position.z = 2;
    polyhedron.material = mat;

  }


  /**
   * 
   */
  createBoxMaterial() {

    var nodeMaterial = new BABYLON.NodeMaterial("node");

    // InputBlock
    var position = new BABYLON.InputBlock("position");
    position.setAsAttribute("position");

    // TransformBlock
    var WorldPos = new BABYLON.TransformBlock("WorldPos");
    WorldPos.complementZ = 0;
    WorldPos.complementW = 1;

    // InputBlock
    var World = new BABYLON.InputBlock("World");
    World.setAsSystemValue(BABYLON.NodeMaterialSystemValues.World);

    // TransformBlock
    var Worldnormal = new BABYLON.TransformBlock("World normal");
    Worldnormal.complementZ = 0;
    Worldnormal.complementW = 0;

    // InputBlock
    var normal = new BABYLON.InputBlock("normal");
    normal.setAsAttribute("normal");

    // LightBlock
    var Lights = new BABYLON.LightBlock("Lights");
    // InputBlock
    var cameraPosition = new BABYLON.InputBlock("cameraPosition");
    cameraPosition.setAsSystemValue(BABYLON.NodeMaterialSystemValues.CameraPosition);

    // ViewDirectionBlock
    var Viewdirection = new BABYLON.ViewDirectionBlock("View direction");
    // AddBlock
    var Add = new BABYLON.AddBlock("Add");
    // MultiplyBlock
    var Multiply = new BABYLON.MultiplyBlock("Multiply");
    // ScaleBlock
    var Scale = new BABYLON.ScaleBlock("Scale");
    // AddBlock
    var Add1 = new BABYLON.AddBlock("Add");
    // GradientBlock
    var Gradient = new BABYLON.GradientBlock("Gradient");
    Gradient.colorSteps.push(new BABYLON.GradientBlockColorStep(0, new BABYLON.Color3(0.7450980392156863, 0.7450980392156863, 0.7450980392156863)));
    Gradient.colorSteps.push(new BABYLON.GradientBlockColorStep(1, new BABYLON.Color3(1, 1, 1)));

    // SmoothStepBlock
    var Smoothstep = new BABYLON.SmoothStepBlock("Smooth step");
    // SubtractBlock
    var Subtract = new BABYLON.SubtractBlock("Subtract");
    // InputBlock
    var Float = new BABYLON.InputBlock("Float");
    Float.value = 1;
    Float.min = 0;
    Float.max = 0;
    Float.isBoolean = false;
    Float.matrixMode = 0;
    Float.animationType = BABYLON.AnimatedInputBlockTypes.None;
    Float.isConstant = true;

    // SubtractBlock
    var Subtract1 = new BABYLON.SubtractBlock("Subtract");
    // LengthBlock
    var Length = new BABYLON.LengthBlock("Length");
    // VectorMergerBlock
    var VectorMerger = new BABYLON.VectorMergerBlock("VectorMerger");
    // SubtractBlock
    var Subtract2 = new BABYLON.SubtractBlock("Subtract");
    // InputBlock
    var Float1 = new BABYLON.InputBlock("Float");
    Float1.value = 1;
    Float1.min = 0;
    Float1.max = 0;
    Float1.isBoolean = false;
    Float1.matrixMode = 0;
    Float1.animationType = BABYLON.AnimatedInputBlockTypes.None;
    Float1.isConstant = true;

    // SubtractBlock
    var Subtract3 = new BABYLON.SubtractBlock("Subtract");
    // MultiplyBlock
    var Multiply1 = new BABYLON.MultiplyBlock("Multiply");
    // VectorSplitterBlock
    var VectorSplitter = new BABYLON.VectorSplitterBlock("VectorSplitter");
    // InputBlock
    var uv = new BABYLON.InputBlock("uv");
    uv.setAsAttribute("uv");

    // MultiplyBlock
    var Multiply2 = new BABYLON.MultiplyBlock("Multiply");
    // InputBlock
    var Float2 = new BABYLON.InputBlock("Float");
    Float2.value = 2;
    Float2.min = 0;
    Float2.max = 0;
    Float2.isBoolean = false;
    Float2.matrixMode = 0;
    Float2.animationType = BABYLON.AnimatedInputBlockTypes.None;
    Float2.isConstant = true;

    // VectorMergerBlock
    var VectorMerger1 = new BABYLON.VectorMergerBlock("VectorMerger");
    // LengthBlock
    var Length1 = new BABYLON.LengthBlock("Length");
    // SmoothStepBlock
    var Smoothstep1 = new BABYLON.SmoothStepBlock("Smooth step");
    // InputBlock
    var Float3 = new BABYLON.InputBlock("Float");
    Float3.value = 0;
    Float3.min = 0;
    Float3.max = 0;
    Float3.isBoolean = false;
    Float3.matrixMode = 0;
    Float3.animationType = BABYLON.AnimatedInputBlockTypes.None;
    Float3.isConstant = false;

    // InputBlock
    var Float4 = new BABYLON.InputBlock("Float");
    Float4.value = 0.15;
    Float4.min = 0;
    Float4.max = 0;
    Float4.isBoolean = false;
    Float4.matrixMode = 0;
    Float4.animationType = BABYLON.AnimatedInputBlockTypes.None;
    Float4.isConstant = false;

    // GradientBlock
    var Gradient1 = new BABYLON.GradientBlock("Gradient");
    Gradient1.colorSteps.push(new BABYLON.GradientBlockColorStep(0, new BABYLON.Color3(0.7450980392156863, 0.7450980392156863, 0.7450980392156863)));
    Gradient1.colorSteps.push(new BABYLON.GradientBlockColorStep(1, new BABYLON.Color3(1, 1, 1)));

    // VectorMergerBlock
    var VectorMerger2 = new BABYLON.VectorMergerBlock("VectorMerger");
    // InputBlock
    var Float5 = new BABYLON.InputBlock("Float");
    Float5.value = 0.59;
    Float5.min = 0;
    Float5.max = 0;
    Float5.isBoolean = false;
    Float5.matrixMode = 0;
    Float5.animationType = BABYLON.AnimatedInputBlockTypes.None;
    Float5.isConstant = false;

    // ScaleBlock
    // add this to last add before frag output to control light location
    var Scale1 = new BABYLON.ScaleBlock("Scale");
    // InputBlock
    var Color = new BABYLON.InputBlock("Color3");
    Color.value = new BABYLON.Color3(1, 1, 1);
    Color.isConstant = false;

    // MaxBlock
    var Max = new BABYLON.MaxBlock("Max");
    // InputBlock
    var Float6 = new BABYLON.InputBlock("Float");
    Float6.value = 0;
    Float6.min = 0;
    Float6.max = 0;
    Float6.isBoolean = false;
    Float6.matrixMode = 0;
    Float6.animationType = BABYLON.AnimatedInputBlockTypes.None;
    Float6.isConstant = true;

    // DotBlock
    var Dot = new BABYLON.DotBlock("Dot");
    // NormalizeBlock
    var Normalize = new BABYLON.NormalizeBlock("Normalize");
    // SubtractBlock
    var Subtract4 = new BABYLON.SubtractBlock("Subtract");
    // InputBlock
    var Vector = new BABYLON.InputBlock("Vector3");
    
    Vector.value = new BABYLON.Vector3(10, 20, 10);
    Vector.isConstant = false;

    // FragmentOutputBlock
    var FragmentOutput = new BABYLON.FragmentOutputBlock("FragmentOutput");
    // TransformBlock
    var WorldPosViewProjectionTransform = new BABYLON.TransformBlock("WorldPos * ViewProjectionTransform");
    WorldPosViewProjectionTransform.complementZ = 0;
    WorldPosViewProjectionTransform.complementW = 1;

    // InputBlock
    var WorldxViewxProjection = new BABYLON.InputBlock("World x View x Projection");
    WorldxViewxProjection.setAsSystemValue(BABYLON.NodeMaterialSystemValues.WorldViewProjection);

    // VertexOutputBlock
    var VertexOutput = new BABYLON.VertexOutputBlock("VertexOutput");
    // Connections
    position.output.connectTo(WorldPos.vector);
    World.output.connectTo(WorldPos.transform);
    WorldPos.output.connectTo(WorldPosViewProjectionTransform.vector);
    WorldxViewxProjection.output.connectTo(WorldPosViewProjectionTransform.transform);
    WorldPosViewProjectionTransform.output.connectTo(VertexOutput.vector);
    Float.output.connectTo(Subtract.left);
    Float1.output.connectTo(Subtract3.left);
    uv.output.connectTo(VectorSplitter.xyIn);
    VectorSplitter.x.connectTo(Multiply1.left);
    Float2.output.connectTo(Multiply1.right);
    Multiply1.output.connectTo(Subtract3.right);
    Subtract3.output.connectTo(VectorMerger1.x);
    VectorMerger1.xyz.connectTo(Length1.value);
    Length1.output.connectTo(Subtract.right);
    Subtract.output.connectTo(Smoothstep.value);
    Float3.output.connectTo(Smoothstep.edge0);
    Float4.output.connectTo(Smoothstep.edge1);
    Smoothstep.output.connectTo(Gradient.gradient);
    Gradient.output.connectTo(Add1.left);
    Float.output.connectTo(Subtract1.left);
    Float1.output.connectTo(Subtract2.left);
    VectorSplitter.y.connectTo(Multiply2.left);
    Float2.output.connectTo(Multiply2.right);
    Multiply2.output.connectTo(Subtract2.right);
    Subtract2.output.connectTo(VectorMerger.y);
    VectorMerger.xyz.connectTo(Length.value);
    Length.output.connectTo(Subtract1.right);
    Subtract1.output.connectTo(Smoothstep1.value);
    Float3.output.connectTo(Smoothstep1.edge0);
    Float4.output.connectTo(Smoothstep1.edge1);
    Smoothstep1.output.connectTo(Gradient1.gradient);
    Gradient1.output.connectTo(Add1.right);
    Add1.output.connectTo(Scale.input);
    Float5.output.connectTo(Scale.factor);
    Scale.output.connectTo(Multiply.left);
    Color.output.connectTo(Scale1.input);
    Float6.output.connectTo(Max.left);
    normal.output.connectTo(Worldnormal.vector);
    World.output.connectTo(Worldnormal.transform);
    Worldnormal.xyz.connectTo(Dot.left);
    Vector.output.connectTo(Subtract4.left);
    WorldPos.xyz.connectTo(Subtract4.right);
    Subtract4.output.connectTo(Normalize.input);
    Normalize.output.connectTo(Dot.right);
    Dot.output.connectTo(Max.right);
    Max.output.connectTo(Scale1.factor);
    Scale1.output.connectTo(Multiply.right);
    Multiply.output.connectTo(Add.left);
    WorldPos.output.connectTo(Lights.worldPosition);
    Worldnormal.output.connectTo(Lights.worldNormal);
    cameraPosition.output.connectTo(Lights.cameraPosition);
    Lights.specularOutput.connectTo(Add.right);
    Add.output.connectTo(FragmentOutput.rgb);

    // Output nodes
    nodeMaterial.addOutputNode(VertexOutput);
    nodeMaterial.addOutputNode(FragmentOutput);
    nodeMaterial.build();

    return nodeMaterial;
  }

  // createExtraMaterial() {
  //   var nodeMaterial = new BABYLON.NodeMaterial("node");

  //   // InputBlock
  //   var position = new BABYLON.InputBlock("position");
  //   position.setAsAttribute("position");

  //   // TransformBlock
  //   var WorldPos = new BABYLON.TransformBlock("WorldPos");
  //   WorldPos.complementZ = 0;
  //   WorldPos.complementW = 1;

  //   // InputBlock
  //   var World = new BABYLON.InputBlock("World");
  //   World.setAsSystemValue(BABYLON.NodeMaterialSystemValues.World);

  //   // TransformBlock
  //   var Worldnormal = new BABYLON.TransformBlock("World normal");
  //   Worldnormal.complementZ = 0;
  //   Worldnormal.complementW = 0;

  //   // InputBlock
  //   var normal = new BABYLON.InputBlock("normal");
  //   normal.setAsAttribute("normal");

  //   // LightBlock
  //   var Lights = new BABYLON.LightBlock("Lights");
  //   // InputBlock
  //   var cameraPosition = new BABYLON.InputBlock("cameraPosition");
  //   cameraPosition.setAsSystemValue(BABYLON.NodeMaterialSystemValues.CameraPosition);

  //   // ViewDirectionBlock
  //   var Viewdirection = new BABYLON.ViewDirectionBlock("View direction");
  //   // MultiplyBlock
  //   var Multiply = new BABYLON.MultiplyBlock("Multiply");
  //   // ScaleBlock
  //   // add this to last add before frag output to control light location
  //   var Scale = new BABYLON.ScaleBlock("Scale");
  //   // InputBlock
  //   var Color = new BABYLON.InputBlock("Color3");
  //   Color.value = new BABYLON.Color3(1, 1, 1);
  //   Color.isConstant = false;

  //   // MaxBlock
  //   var Max = new BABYLON.MaxBlock("Max");
  //   // InputBlock
  //   var Float = new BABYLON.InputBlock("Float");
  //   Float.value = 0;
  //   Float.min = 0;
  //   Float.max = 0;
  //   Float.isBoolean = false;
  //   Float.matrixMode = 0;
  //   Float.animationType = BABYLON.AnimatedInputBlockTypes.None;
  //   Float.isConstant = true;

  //   // DotBlock
  //   var Dot = new BABYLON.DotBlock("Dot");
  //   // NormalizeBlock
  //   var Normalize = new BABYLON.NormalizeBlock("Normalize");
  //   // SubtractBlock
  //   var Subtract = new BABYLON.SubtractBlock("Subtract");
  //   // InputBlock
  //   var Vector = new BABYLON.InputBlock("Vector3");
  //   Vector.value = new BABYLON.Vector3(10, 20, 10);
  //   Vector.isConstant = false;

  //   // AddBlock
  //   var Add = new BABYLON.AddBlock("Add");
  //   // FragmentOutputBlock
  //   var FragmentOutput = new BABYLON.FragmentOutputBlock("FragmentOutput");
  //   // TransformBlock
  //   var WorldPosViewProjectionTransform = new BABYLON.TransformBlock("WorldPos * ViewProjectionTransform");
  //   WorldPosViewProjectionTransform.complementZ = 0;
  //   WorldPosViewProjectionTransform.complementW = 1;

  //   // InputBlock
  //   var WorldxViewxProjection = new BABYLON.InputBlock("World x View x Projection");
  //   WorldxViewxProjection.setAsSystemValue(BABYLON.NodeMaterialSystemValues.WorldViewProjection);

  //   // VertexOutputBlock
  //   var VertexOutput = new BABYLON.VertexOutputBlock("VertexOutput");
  //   // Connections
  //   position.output.connectTo(WorldPos.vector);
  //   World.output.connectTo(WorldPos.transform);
  //   WorldPos.output.connectTo(WorldPosViewProjectionTransform.vector);
  //   WorldxViewxProjection.output.connectTo(WorldPosViewProjectionTransform.transform);
  //   WorldPosViewProjectionTransform.output.connectTo(VertexOutput.vector);
  //   WorldPos.output.connectTo(Viewdirection.worldPosition);
  //   cameraPosition.output.connectTo(Viewdirection.cameraPosition);
  //   Viewdirection.output.connectTo(Multiply.left);
  //   Color.output.connectTo(Scale.input);
  //   Float.output.connectTo(Max.left);
  //   normal.output.connectTo(Worldnormal.vector);
  //   World.output.connectTo(Worldnormal.transform);
  //   Worldnormal.xyz.connectTo(Dot.left);
  //   Vector.output.connectTo(Subtract.left);
  //   WorldPos.xyz.connectTo(Subtract.right);
  //   Subtract.output.connectTo(Normalize.input);
  //   Normalize.output.connectTo(Dot.right);
  //   Dot.output.connectTo(Max.right);
  //   Max.output.connectTo(Scale.factor);
  //   Scale.output.connectTo(Multiply.right);
  //   Multiply.output.connectTo(Add.left);
  //   WorldPos.output.connectTo(Lights.worldPosition);
  //   Worldnormal.output.connectTo(Lights.worldNormal);
  //   cameraPosition.output.connectTo(Lights.cameraPosition);
  //   Lights.specularOutput.connectTo(Add.right);
  //   Add.output.connectTo(FragmentOutput.rgb);

  //   // Output nodes
  //   nodeMaterial.addOutputNode(VertexOutput);
  //   nodeMaterial.addOutputNode(FragmentOutput);
  //   nodeMaterial.build();

  //   return nodeMaterial;
  // }

  createMaterial() {
    let mat = new BABYLON.StandardMaterial("Takehome Material", this.scene);
    return mat;
  }

  /**
   * Starts the render loop
   */
  start(): void {
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });

    window.addEventListener("resize", () => {
      this.engine.resize();
    });
  }
}
