const settings = {
    x: 60,
    y: 460,
    size: 50,
    gravity: 5,
    jump: 10,
    jumping: false,
}

setup = () => {
    createCanvas(700,500);
}

draw = () => {
    clear();
    background(100);
    fill(200);
    ellipse(settings.x,settings.y,settings.size);
    if(keyIsDown(RIGHT_ARROW)) {
        settings.x += 3;
        if(keyIsDown(16)) {
            settings.x += 3;
        }
    }
    if(keyIsDown(LEFT_ARROW)) {
        settings.x -= 3;
        if(keyIsDown(16)) {
            settings.x -= 3;
        }
    }
    if(settings.jumping && settings.y > 370) {
        settings.y -= settings.jump;
    } else if(settings.jumping && settings.y <= 370) {
        settings.jumping = false;
    }
    if(settings.y < 460 && settings.jumping == false) {
        settings.y += settings.gravity;
    }
}

keyPressed = () => {
    if (keyCode === 32 && settings.y == 460) {
        settings.jumping = true;
    }
}

