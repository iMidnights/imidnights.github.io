/** Készítette: Szabó Gergely (Gerviba) | GNU GENERAL PUBLIC LICENSE 3 | https://github.com/Gerviba/Tetris */

// Változók
var uuid = 0;
var score = 0;
var falling = [];
var fallingShape = 0;
var rotation = 0;
var speed = defaultSpeed;
var placed = [];
var started = false;
var animating = false;
var finished = false;
var typing = false;

// Forgatási útvonal
var rotatePath = {
    0:{
        0:{0:{"x":0, "y":0}, 1:{"x":0, "y":0}, 2:{"x":0, "y":0}, 3:{"x":0, "y":0}},
        1:{0:{"x":0, "y":0}, 1:{"x":0, "y":0}, 2:{"x":0, "y":0}, 3:{"x":0, "y":0}},
        2:{0:{"x":0, "y":0}, 1:{"x":0, "y":0}, 2:{"x":0, "y":0}, 3:{"x":0, "y":0}},
        3:{0:{"x":0, "y":0}, 1:{"x":0, "y":0}, 2:{"x":0, "y":0}, 3:{"x":0, "y":0}}
    },
    1:{
        0:{0:{"x":+2, "y":-1}, 1:{"x":+1, "y":+0}, 2:{"x":+0, "y":+1}, 3:{"x":-1, "y":+0}},
        1:{0:{"x":-1, "y":-1}, 1:{"x":+0, "y":+0}, 2:{"x":+1, "y":+1}, 3:{"x":+0, "y":+2}},
        2:{0:{"x":-2, "y":+0}, 1:{"x":-1, "y":-1}, 2:{"x":+0, "y":-2}, 3:{"x":+1, "y":-1}},
        3:{0:{"x":+1, "y":+2}, 1:{"x":+0, "y":+1}, 2:{"x":-1, "y":+0}, 3:{"x":+0, "y":-1}}
    },
    2:{
        0:{0:{"x":+1, "y":-2}, 1:{"x":+0, "y":-1}, 2:{"x":-1, "y":+0}, 3:{"x":+0, "y":+1}},
        1:{0:{"x":-2, "y":+0}, 1:{"x":-1, "y":+1}, 2:{"x":+0, "y":+2}, 3:{"x":+1, "y":+1}},
        2:{0:{"x":-1, "y":+1}, 1:{"x":+0, "y":+0}, 2:{"x":+1, "y":-1}, 3:{"x":+0, "y":-2}},
        3:{0:{"x":+2, "y":+1}, 1:{"x":+1, "y":+0}, 2:{"x":+0, "y":-1}, 3:{"x":-1, "y":+0}}
    },
    3:{
        0:{0:{"x":+2, "y":-1}, 1:{"x":+1, "y":+0}, 2:{"x":+0, "y":+1}, 3:{"x":+0, "y":-1}},
        1:{0:{"x":-1, "y":-1}, 1:{"x":+0, "y":+0}, 2:{"x":+1, "y":+1}, 3:{"x":-1, "y":+1}},
        2:{0:{"x":-2, "y":+0}, 1:{"x":-1, "y":-1}, 2:{"x":+0, "y":-2}, 3:{"x":+0, "y":+0}},
        3:{0:{"x":+1, "y":+2}, 1:{"x":+0, "y":+1}, 2:{"x":-1, "y":+0}, 3:{"x":+1, "y":+0}}
    },
    4:{ 
        0:{0:{"x":+2, "y":-3}, 1:{"x":+1, "y":-2}, 2:{"x":+0, "y":-1}, 3:{"x":-1, "y":+0}},
        1:{0:{"x":-2, "y":+0}, 1:{"x":-1, "y":+1}, 2:{"x":+0, "y":+2}, 3:{"x":+1, "y":+3}},
        2:{0:{"x":-1, "y":+0}, 1:{"x":+0, "y":-1}, 2:{"x":+1, "y":-2}, 3:{"x":+2, "y":-3}},
        3:{0:{"x":+1, "y":+3}, 1:{"x":+0, "y":+2}, 2:{"x":-1, "y":+1}, 3:{"x":-2, "y":+0}}
    },
    5:{
        0:{0:{"x":+2, "y":-1}, 1:{"x":+1, "y":+0}, 2:{"x":+0, "y":-1}, 3:{"x":-1, "y":+0}},
        1:{0:{"x":-1, "y":-1}, 1:{"x":+0, "y":+0}, 2:{"x":-1, "y":+1}, 3:{"x":+0, "y":+2}},
        2:{0:{"x":-2, "y":+0}, 1:{"x":-1, "y":-1}, 2:{"x":+0, "y":+0}, 3:{"x":+1, "y":-1}},
        3:{0:{"x":+1, "y":+2}, 1:{"x":+0, "y":+1}, 2:{"x":+1, "y":+0}, 3:{"x":+0, "y":-1}}
    },
    6:{
        0:{0:{"x":+1, "y":-2}, 1:{"x":+1, "y":+0}, 2:{"x":+0, "y":-1}, 3:{"x":+0, "y":+1}},
        1:{0:{"x":-2, "y":+0}, 1:{"x":+0, "y":+0}, 2:{"x":-1, "y":+1}, 3:{"x":+1, "y":+1}},
        2:{0:{"x":-1, "y":+1}, 1:{"x":-1, "y":-1}, 2:{"x":+0, "y":+0}, 3:{"x":+0, "y":-2}},
        3:{0:{"x":+2, "y":+1}, 1:{"x":+0, "y":+1}, 2:{"x":+1, "y":+0}, 3:{"x":-1, "y":+0}}
    }
};

// Toplista pontjai
var toplistScores = {
    0: ["-", 0], 
    1: ["-", 0], 
    2: ["-", 0], 
    3: ["-", 0], 
    4: ["-", 0], 
    5: ["-", 0], 
    6: ["-", 0], 
    7: ["-", 0], 
    8: ["-", 0], 
    9: ["-", 0]};

/** Gomb listener */
document.onkeypress = function (e) {
    e = e || window.event;
    
    //DEBUG: console.log(e.keyCode);
    
    if (e.keyCode == 37 || e.keyCode == 65 || e.keyCode == 97) {
        if (!finished)
            left();
    } else if (e.keyCode == 39 || e.keyCode == 68 || e.keyCode == 100) {
        if (!finished)
            right();
    } else if (e.keyCode == 40 || e.keyCode == 83 || e.keyCode == 115) {
        if (!finished)
            fastDown();
    } else if (e.keyCode == 81 || e.keyCode == 113) {
        if (!finished)
            rotateLeft();
    } else if (e.keyCode == 69 || e.keyCode == 101) {
        if (!finished)
            rotateRight();
    } else if (e.keyCode == 32 || e.keyCode == 114 || e.keyCode == 82) {
        if(typing)
            return;
        if (finished) {
            location.reload(true);
        } else {
            start();
        }
    } else if (e.keyCode == 102 || e.keyCode == 70) {
        if (!typing) {
            document.getElementById("dialog").style.display = "none";
            document.getElementById("toplist").style.display = "none";
        }
    }
};

/** Inicializálás */
function init() {
    var root = document.getElementById("root");
    
    for (x = 0;x < width;++x) {
        for (y = 0;y < height;++y) {
            var bg = document.createElement("div");
            bg.className = "background";
            bg.style.top = (y * 32) + "px";
            bg.style.left = (x * 32) + "px";
            root.appendChild(bg);
        }
    }
    
    if (typeof(Storage) === "undefined") {
        alert("Nincs WebStorage támogatás!\nA toplista nem fog mûködni!\n(Lehet más sem!)");
    }
    document.getElementById("tetris-username").disabled = true;
    loadScores();
}

/** Indítás */
function start() {
    if (started)
        return;
    started = true;
    
    add();
    setTimeout(function() { down(); }, speed);
}

/** Játék vége */
function finish() {
    document.getElementById("favicon").href = "0.png";
    document.getElementById("gameover").style.display = "block";
    finished = true;
    if (checkMaxScore()) {
        document.getElementById("dialog").style.display = "block";
        typing = true;
        document.getElementById("tetris-username").disabled = false;
    } else {
        initToplist();
    }
}

/** Új forma leejtése */
function add() {
    rotation = 0;
    speed = defaultSpeed;
    addShape(Math.floor(Math.random() * 7), Math.floor(Math.random() * 6) + 1);
    ///*DEBUG:*/ addShape(5, Math.floor(Math.random() * 6) + 1);
}

/** Balra forgatás */
function rotateLeft() {
    var before = rotation;
    --rotation;
    if (rotation == -1)
        rotation = 3;
        
    for (id in falling) {
        var store = rotatePath[falling[id].shape][rotation][falling[id].element];
        if (isBlockIn(falling[id].x - store.x, falling[id].y - store.y)) {
            animateBorder();
            rotation = before;
            return;
        }
    }
    
    for (id in falling) {
        var store = rotatePath[falling[id].shape][rotation][falling[id].element];
        move(falling[id], -store.x, -store.y);
    }
}

/** Jobbra forgatás */
function rotateRight() {
    for (id in falling) {
        var store = rotatePath[falling[id].shape][rotation][falling[id].element];
        if (isBlockInRot(falling[id].x + store.x, falling[id].y + store.y)) {
            animateBorder();
            return;
        }
    }
    
    for (id in falling) {
        var store = rotatePath[falling[id].shape][rotation][falling[id].element];
        move(falling[id], store.x, store.y);
    }
    ++rotation;
    if (rotation == 4)
        rotation = 0;
}

/** Forma mozgatása lefelé (semi-recursive eljárás) */
function down() {
    for (id in falling) {
        var entry = falling[id];
        if (isBlockIn(entry.x, entry.y - 1)) {
            if (fix()) {
                ++score;
                document.getElementById("scoreboard").innerHTML = "Pont: "+score;
                finish();
                return;
            }
            break;
        }
    }
    for (id in falling) {
        var entry = falling[id];
        --entry.y;
        document.getElementById("uuid_"+entry.uuid).style.top = ((height - entry.y) * 32) + "px";
    }
    setTimeout(function() { down(); }, speed);
}

/** Mozgatás balra */
function left() {
    for (id in falling) {
        var entry = falling[id];
        if (isBlockIn(entry.x - 1, entry.y)) {
            animateBorder();
            return;
        }
    }
    for (id in falling) {
        var entry = falling[id];
        entry.x -= 1;
        document.getElementById("uuid_"+entry.uuid).style.left = ((entry.x - 1) * 32) + "px";
    }
}

/** Mozgatás jobbra */
function right() {
    for (id in falling) {
        var entry = falling[id];
        if (isBlockIn(entry.x + 1, entry.y)) {
            animateBorder();
            return;
        }
    }
    for (id in falling) {
        var entry = falling[id];
        entry.x += 1;
        document.getElementById("uuid_"+entry.uuid).style.left = ((entry.x - 1) * 32) + "px";
    }
}

/** Hulló elemek fixálása */
function fix() {
    for (id in falling) {
        var entry = falling[id];
        placed.push(entry);
        if (entry.y > height - 1)
            return true;
    }
    falling = [];
    
    for (y = height;y > 0;--y) {
        var count = 0;
        for (id in placed) {
            if (placed[id].y == y)
                ++count;
        }
        
        if (count == width) {
            for (id in placed) {
                if (placed[id].y == y)
                    remove(placed[id].uuid);
            }
            for (id in placed) {
                if (placed[id].y > y)
                    moveDown(placed[id]);
            }
        }
    }
    
    add();
    ++score;
    document.getElementById("scoreboard").innerHTML = "Pont: "+score;
    return false;
}

/** Mozgatás lefelé */
function moveDown(entry) {
    --entry.y;
    document.getElementById("uuid_"+entry.uuid).style.top = ((height - entry.y) * 32) + "px";
}

/** Elem mozgatása */
function move(entry, x, y) {
    entry.y += y;
    entry.x += x;
    document.getElementById("uuid_"+entry.uuid).style.top = ((height - entry.y) * 32) + "px";
    document.getElementById("uuid_"+entry.uuid).style.left = ((entry.x - 1) * 32) + "px";
}

/** Elem eltávolítása */
function remove(uuid) {
    var entry = document.getElementById("uuid_"+uuid);
    if (entry == null)
        return;
    entry.outerHTML = "";
    for (id in placed) {
        if (placed[id].uuid == uuid) {
            placed[id].y = -1;
            break;
        }
    }
    delete entry;
}

/** Van-e lehetséges átfedés */
function isBlockIn(x, y) {
    if (y == 0 || x == 0 || x == width + 1) {
        return true;
    }
    for (id in placed) {
        var entry = placed[id];
        if (entry.x == x && entry.y == y) {
            return true;
        }
    }
    return false;
}

/** Van-e lehetséges átfedés (Forgatásnál) */
function isBlockInRot(x, y) {
    if (x < 0 || x > width) {
        return true;
    }
    for (id in placed) {
        var entry = placed[id];
        if (entry.x == x && entry.y == y) {
            return true;
        }
    }
    return false;
}

/** Gyorsított le */
function fastDown() {
    speed = 50;
}

/** Új alakzat hozzáadása */
function addShape(shape, color) {
    var root = document.getElementById("root");
    
    if (shape == 0) {
        var entry1 = document.createElement("div");
        entry1.className = "entry c"+color;
        entry1.id = "uuid_"+uuid;
        entry1.style.top = "-64px";
        entry1.style.left = ((width - 2) * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2, "y":height+2, "shape":0, "element":0});
        ++uuid;
        root.appendChild(entry1);
        
        var entry2 = document.createElement("div");
        entry2.className = "entry c"+color;
        entry2.id = "uuid_"+uuid;
        entry2.style.top = "-64px";
        entry2.style.left = (width * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2 + 1, "y":height+2, "shape":0, "element":1});
        ++uuid;
        root.appendChild(entry2);
        
        var entry3 = document.createElement("div");
        entry3.className = "entry c"+color;
        entry3.id = "uuid_"+uuid;
        entry3.style.top = "-32px";
        entry3.style.left = ((width - 2) * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2, "y":height+1, "shape":0, "element":2});
        ++uuid;
        root.appendChild(entry3);
        
        var entry4 = document.createElement("div");
        entry4.className = "entry c"+color;
        entry4.id = "uuid_"+uuid;
        entry4.style.top = "-32px";
        entry4.style.left = (width * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2 + 1, "y":height+1, "shape":0, "element":3});
        ++uuid;
        root.appendChild(entry4);
        
    } else if (shape == 1) {
        var entry1 = document.createElement("div");
        entry1.className = "entry c"+color;
        entry1.id = "uuid_"+uuid;
        entry1.style.top = "-96px";
        entry1.style.left = ((width - 2) * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2, "y":height+3, "shape":1, "element":0});
        ++uuid;
        root.appendChild(entry1);
        
        var entry2 = document.createElement("div");
        entry2.className = "entry c"+color;
        entry2.id = "uuid_"+uuid;
        entry2.style.top = "-64px";
        entry2.style.left = ((width - 2) * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2, "y":height+2, "shape":1, "element":1});
        ++uuid;
        root.appendChild(entry2);
        
        var entry3 = document.createElement("div");
        entry3.className = "entry c"+color;
        entry3.id = "uuid_"+uuid;
        entry3.style.top = "-32px";
        entry3.style.left = ((width - 2) * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2, "y":height+1, "shape":1, "element":2});
        ++uuid;
        root.appendChild(entry3);
        
        var entry4 = document.createElement("div");
        entry4.className = "entry c"+color;
        entry4.id = "uuid_"+uuid;
        entry4.style.top = "-32px";
        entry4.style.left = (width * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2 + 1, "y":height+1, "shape":1, "element":3});
        ++uuid;
        root.appendChild(entry4);
        
    } else if (shape == 2) {
        var entry1 = document.createElement("div");
        entry1.className = "entry c"+color;
        entry1.id = "uuid_"+uuid;
        entry1.style.top = "-96px";
        entry1.style.left = (width * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2 + 1, "y":height+3, "shape":2, "element":0});
        ++uuid;
        root.appendChild(entry1);
        
        var entry2 = document.createElement("div");
        entry2.className = "entry c"+color;
        entry2.id = "uuid_"+uuid;
        entry2.style.top = "-64px";
        entry2.style.left = (width * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2 + 1, "y":height+2, "shape":2, "element":1});
        ++uuid;
        root.appendChild(entry2);
        
        var entry3 = document.createElement("div");
        entry3.className = "entry c"+color;
        entry3.id = "uuid_"+uuid;
        entry3.style.top = "-32px";
        entry3.style.left = (width * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2 + 1, "y":height+1, "shape":2, "element":2});
        ++uuid;
        root.appendChild(entry3);
        
        var entry4 = document.createElement("div");
        entry4.className = "entry c"+color;
        entry4.id = "uuid_"+uuid;
        entry4.style.top = "-32px";
        entry4.style.left = ((width - 2) * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2, "y":height+1, "shape":2, "element":3});
        ++uuid;
        root.appendChild(entry4);
        
    } else if (shape == 3) {
        var entry1 = document.createElement("div");
        entry1.className = "entry c"+color;
        entry1.id = "uuid_"+uuid;
        entry1.style.top = "-96px";
        entry1.style.left = ((width - 2) * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2, "y":height+3, "shape":3, "element":0});
        ++uuid;
        root.appendChild(entry1);
        
        var entry2 = document.createElement("div");
        entry2.className = "entry c"+color;
        entry2.id = "uuid_"+uuid;
        entry2.style.top = "-64px";
        entry2.style.left = ((width - 2) * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2, "y":height+2, "shape":3, "element":1});
        ++uuid;
        root.appendChild(entry2);
        
        var entry3 = document.createElement("div");
        entry3.className = "entry c"+color;
        entry3.id = "uuid_"+uuid;
        entry3.style.top = "-32px";
        entry3.style.left = ((width - 2) * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2, "y":height+1, "shape":3, "element":2});
        ++uuid;
        root.appendChild(entry3);
        
        var entry4 = document.createElement("div");
        entry4.className = "entry c"+color;
        entry4.id = "uuid_"+uuid;
        entry4.style.top = "-64px";
        entry4.style.left = (width * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2 + 1, "y":height+2, "shape":3, "element":3});
        ++uuid;
        root.appendChild(entry4);
        
    } else if (shape == 4) {
        var xCoords, xStr;
        if (Math.floor(Math.random() * 9) % 2 == 0) {
            xCoords = width / 2;
            xStr = ((width - 2) * 16) + "px";
        } else {
            xCoords = width / 2 + 1;
            xStr = (width * 16) + "px";
        }
    
        var entry1 = document.createElement("div");
        entry1.className = "entry c"+color;
        entry1.id = "uuid_"+uuid;
        entry1.style.top = "-128px";
        entry1.style.left = xStr;
        falling.push({"uuid":uuid, "color":color, "x":xCoords, "y":height+4, "shape":4, "element":0});
        ++uuid;
        root.appendChild(entry1);
        
        var entry2 = document.createElement("div");
        entry2.className = "entry c"+color;
        entry2.id = "uuid_"+uuid;
        entry2.style.top = "-96px";
        entry2.style.left = xStr;
        falling.push({"uuid":uuid, "color":color, "x":xCoords, "y":height+3, "shape":4, "element":1});
        ++uuid;
        root.appendChild(entry2);
        
        var entry3 = document.createElement("div");
        entry3.className = "entry c"+color;
        entry3.id = "uuid_"+uuid;
        entry3.style.top = "-64px";
        entry3.style.left = xStr;
        falling.push({"uuid":uuid, "color":color, "x":xCoords, "y":height+2, "shape":4, "element":2});
        ++uuid;
        root.appendChild(entry3);
        
        var entry4 = document.createElement("div");
        entry4.className = "entry c"+color;
        entry4.id = "uuid_"+uuid;
        entry4.style.top = "-32px";
        entry4.style.left = xStr;
        falling.push({"uuid":uuid, "color":color, "x":xCoords, "y":height+1, "shape":4, "element":3});
        ++uuid;
        root.appendChild(entry4);
        
    } else if (shape == 5) {
        var entry1 = document.createElement("div");
        entry1.className = "entry c"+color;
        entry1.id = "uuid_"+uuid;
        entry1.style.top = "-96px";
        entry1.style.left = ((width - 2) * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2, "y":height+3, "shape":5, "element":0});
        ++uuid;
        root.appendChild(entry1);
        
        var entry2 = document.createElement("div");
        entry2.className = "entry c"+color;
        entry2.id = "uuid_"+uuid;
        entry2.style.top = "-64px";
        entry2.style.left = ((width - 2) * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2, "y":height+2, "shape":5, "element":1});
        ++uuid;
        root.appendChild(entry2);
        
        var entry3 = document.createElement("div");
        entry3.className = "entry c"+color;
        entry3.id = "uuid_"+uuid;
        entry3.style.top = "-64px";
        entry3.style.left = (width * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2 + 1, "y":height+2, "shape":5, "element":2});
        ++uuid;
        root.appendChild(entry3);
        
        var entry4 = document.createElement("div");
        entry4.className = "entry c"+color;
        entry4.id = "uuid_"+uuid;
        entry4.style.top = "-32px";
        entry4.style.left = (width * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2 + 1, "y":height+1, "shape":5, "element":3});
        ++uuid;
        root.appendChild(entry4);
        
    } else if (shape == 6) {
        var entry1 = document.createElement("div");
        entry1.className = "entry c"+color;
        entry1.id = "uuid_"+uuid;
        entry1.style.top = "-96px";
        entry1.style.left = (width * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2 + 1, "y":height+3, "shape":6, "element":0});
        ++uuid;
        root.appendChild(entry1);
        
        var entry2 = document.createElement("div");
        entry2.className = "entry c"+color;
        entry2.id = "uuid_"+uuid;
        entry2.style.top = "-64px";
        entry2.style.left = ((width - 2) * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2, "y":height+2, "shape":6, "element":1});
        ++uuid;
        root.appendChild(entry2);
        
        var entry3 = document.createElement("div");
        entry3.className = "entry c"+color;
        entry3.id = "uuid_"+uuid;
        entry3.style.top = "-64px";
        entry3.style.left = (width * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2 + 1, "y":height+2, "shape":6, "element":2});
        ++uuid;
        root.appendChild(entry3);
        
        var entry4 = document.createElement("div");
        entry4.className = "entry c"+color;
        entry4.id = "uuid_"+uuid;
        entry4.style.top = "-32px";
        entry4.style.left = ((width - 2) * 16) + "px";
        falling.push({"uuid":uuid, "color":color, "x":width/2, "y":height+1, "shape":6, "element":3});
        ++uuid;
        root.appendChild(entry4);
    }
    
    document.getElementById("favicon").href = color+".png";
}

/** Keret felvillanása */
function animateBorder() {
    if (animating)
        return;
    animating = true;
    document.getElementById("root").style.borderColor = "#FF000d";
    setTimeout(function() {
        document.getElementById("root").style.borderColor = "#555555";
        setTimeout(function() {
            animating = false;
        }, 100);
    }, 100);
}

/** Toplista pontok ellenõrzése */
function checkMaxScore(current) {
    for (var i = 0; i < 10; ++i) {
        if (score >= toplistScores[i][1])
            return true;
    }
    return false;
}

/** Rekord beállítása */
function sendRecord() {
    document.getElementById("dialog").style.display = "none";
    document.getElementById("tetris-username").disabled = true;
    typing = false;
    
    if (document.getElementById("tetris-username").value != "") {
        for (var i = 0; i < 10; ++i) {
            if(score >= toplistScores[i][1]) {
                for (var j = 9; j > i; --j) {
                    toplistScores[j] = toplistScores[j - 1];
                }
                toplistScores[i] = [document.getElementById("tetris-username").value, score];
                break;
            }
        }
        saveScores();
    }
    
    initToplist();
}

/** Toplista megjelenítése */
function initToplist() {
    var table = document.getElementById("table");
    for (var i = 0; i < 10; ++i)
        table.innerHTML += "<tr><td>"+(i + 1)+".</td><td>"+toplistScores[i][0]+"</td><td>"+toplistScores[i][1]+"</td></tr>";
    document.getElementById("toplist").style.display = "block";
}

/** Toplista betöltése */
function loadScores() {
    for (var i = 0; i < 10; ++i)
        if (localStorage.getItem("NAME"+i) != null && localStorage.getItem("SCORE"+i) != null)
            toplistScores[i] = [localStorage.getItem("NAME"+i), localStorage.getItem("SCORE"+i)];
}

/** Toplista mentése */
function saveScores() {
    for (var i = 0; i < 10; ++i) {
        localStorage.setItem("NAME"+i, toplistScores[i][0]);
        localStorage.setItem("SCORE"+i, toplistScores[i][1]);
    }
}

/** Sütik kezelése */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}