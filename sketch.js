function preload(){
carImage = loadImage("car_image.png") 
  coinImage = loadImage("coin_image.png") 
  fireballImage = loadImage("fireball_image.png") 
  roadImage = loadImage("road.png") 


}

function setup() {
  score=0
 createCanvas(400, 400)
   
   road = createSprite(200, 200, 20, 20)
  road.addImage(roadImage)
  
  car = createSprite(200, 350, 20, 20)

  road.scale=2
  
  
  car.addImage(carImage)
  car.scale=0.25
  coinsGroup = new Group()
  fireballGroup = new Group()

}

function draw() {
  console.log(score)
  road.velocityY=1
  if (road.y===road.height/2){
    road.y=200
  }
 background("green")
  if(keyDown("left")){
    car.x=car.x-5
  }
  if(keyDown("right")){
    car.x=car.x+5
  }
  if (car.x===400){
    car.x=200
  }
  if (car.x===0){
    car.x=200
  }
  if (frameCount%60===0){
    spawnFireballs()
    spawncoin()
  }
  if (fireballGroup.isTouching(car)){
    score-=500
    fireballGroup.destroyEach()
  }
  if (coinsGroup.isTouching(car)){
    score+=50
    coinsGroup.destroyEach()
  }
  
  drawSprites()
  if (score<-500){
    textSize(22)
    fill("white")
    background("red")
    text("You Lose", 200, 200)
  }
  textSize(22)
  if (gameState="play")
  text("score:"+score, 200, 200)
}
function spawnFireballs(){
  rand=Math.round(random(0, 400))
   fireball = createSprite(rand, 0, 20, 20)
  fireball.addImage(fireballImage)
  fireball.scale=0.1
  fireball.velocityY=3
  fireballGroup.add(fireball)
}
function spawncoin(){
  rand1=Math.round(random(0, 400))
   coin = createSprite(rand1, 0, 20, 20)
  coin.addImage(fireballImage)
  coin.scale=0.1
  coin.velocityY=3
  fireballGroup.add(coin)
}
function spawnFireballs(){
  rand2=Math.round(random(0, 400))
   coin1 = createSprite(rand2, 0, 20, 20)
  coin1.addImage(coinImage)
  coin1.scale=0.1
  coin1.velocityY=3
  coinsGroup.add(coin1)
}