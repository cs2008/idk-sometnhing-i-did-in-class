var fixed, unfixed;

function setup() { 
  createCanvas(800,400);
   fixed = createSprite(400, 200, 50, 50);
    fixed.shapeColor = "green"; 
    unfixed = createSprite(500, 300, 50, 50);
     unfixed.shapeColor = "black";
     } 
     
     function draw() {
        background(220);
         unfixed.x = World.mouseX;
          unfixed.y = World.mouseY;
           if(unfixed.x - fixed.x < unfixed.width/2 + fixed.width/2
             && fixed.x - unfixed.x < unfixed.width/2 + fixed.width/2
             && fixed.y - unfixed.y < unfixed.height/2+fixed.height/2
             && unfixed.y - fixed.y < unfixed.height/2+fixed.height/2){
             fixed.shapeColor = "brown"; 
             unfixed.shapeColor = "red";
             } 
             else{ 
               fixed.shapeColor = "green"; 
               unfixed.shapeColor = "black";
               }
                drawSprites();
               }
