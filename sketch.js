//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImage, happyDogImg;

function preload(){
  //load images here
  dogImage = loadImage("./images/dogImg.png");
  happyDogImg = loadImage("./images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  console.log(database);

  foodStock = database.ref("food");
  foodStock.on("value", readStock);
  
  dog = createSprite(200, 200);
  dog.addImage(dogImage);
  dog.scale = 0.5;
  
  
}


function draw() {  
  background(46, 139, 87)
    
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }

  drawSprites();

  fill(255);
  stroke(255);
  textSize(20);
  text("press up arrow key to feed the dog", 104, 446);
  

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if (x <= 0){
    x = 0;
  } else {
    x-- 
  }

  database.ref("/").update({
    food: x
  })
}

function keyPressed(){
  
}



