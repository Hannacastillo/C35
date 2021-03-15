var ball;

const database=firebase.database()

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    
    var location=database.ref('ball/position')
location.on("value",read)
}


function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;

var location2=database.ref('ball/position')
location2.set({
    x:ball.x,
    y:ball.y
})

}

function read(data){

ballposition=data.val()
console.log(ballposition)

ball.x=ballposition.x
ball.y=ballposition.y

}
