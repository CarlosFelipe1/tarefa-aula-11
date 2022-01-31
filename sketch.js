var homem,correr;
var rua, rua2;

function preload(){
  //imagens pré-carregadas
  correr = loadAnimation("Runner-1.png","Runner-2.png");
  rua2 = loadImage("path.png")
}
function setup(){
  createCanvas(400,400);
  
  homem = createSprite(200, 200, 100, 100);
  homem.addAnimation("correndo", correr);
  homem.scale = 0.6
  homem.x = World.mouseX;

  rua = createSprite(200, 200)
  rua.addImage("rua", rua2)
  edges = createEdgeSprites();
}

function draw() {
  background(white);

  homem.collide(edges);
  drawSprites();
}



