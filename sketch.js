var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car
var form, player, game;
var ambulanceGroup, busGroup, tramGroup
var border1, border2, border3

function preload(){
  backgroundImage = loadImage("track.png")
  carImage = loadImage("car.png")
  ambulanceImage = loadImage("ambulance.png")
  track2Image = loadImage("track 2.png");
  trackImage = loadImage("trackMain.jpg");
  carRightImage = loadImage("carRight.png")
  tramImage = loadImage("tram.png")
  busImage =loadImage("bus.png")
  carLeftImage = loadImage("carLeft.png")
  carDownImage = loadImage("carDown.png")


}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-120);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  ambulanceGroup = new Group()
  tramGroup = new Group()
  busGroup =new Group()
  border1 = createSprite(-156,450.5,20,905)
  border2 = createSprite(538,-0.5,1396,20)
  border3 = createSprite(844,45,587,20)
  border4 = createSprite(47.5,507.5,20,760)
  border5 = createSprite(123,133,150,20)
  border6 = createSprite(377,310,20,595)
  border7 = createSprite(200,435,20,600)
  border8 = createSprite(457,727,540,20)
  border9 = createSprite(457,605,150,20)
  border10 = createSprite(538,327,20,550)
  border11 = createSprite(732,445,20,550)
  border12 = createSprite(874,445,20,550)
  border13 = createSprite(800,180,150,20)
  border14 = createSprite(1070,340,20,555)
  border15 = createSprite(1040,750,340,20)
  border16 = createSprite(1145,615,120,20)

  border1.shapeColor = "RED"
  border2.shapeColor = "RED"
  border3.shapeColor = "RED"
  border4.shapeColor = "RED"
  border5.shapeColor = "RED"
  border6.shapeColor = "RED"
  border7.shapeColor = "RED"
  border8.shapeColor = "RED"
  border9.shapeColor = "RED"
  border10.shapeColor = "RED"
  border11.shapeColor = "RED"
  border12.shapeColor = "RED"
  border13.shapeColor = "RED"
  border14.shapeColor = "RED"
  border15.shapeColor = "RED"
  border16.shapeColor = "RED"
  border1.visible = false
  border2.visible = false
  border3.visible = false
  border4.visible = false
  border5.visible = false
  border6.visible = false
  border7.visible = false
  border8.visible = false
  border9.visible = false
  border10.visible = false
  border11.visible = false
  border12.visible = false
  border13.visible = false
  border14.visible = false
  border15.visible = false
  border16.visible = false

  /*border1.debug = true
  border4.debug = true
  border5.debug = true
  border3.debug = true
  border2.debug = true*/

 



}


function draw(){

  console.log(gameState)

  if(gameState === 1){
    clear();
    game.play();




  }

  if(gameState === 2){
    game.end()
  }
}
