let Arrs = ["slimes.json", "fungus.json", "triffid.json", "zed-classic.json", "zed-animal.json", "jabberwock.json", "nether_animal.json" ];
let currentArr = 0;
let currentPos = 0;
let data;

function preload() {
  data = loadJSON(Arrs[currentArr]); // Load JSON data directly in the preload function
}

function setup() {
  createCanvas(600, 600);
  background(0);

  button1 = createButton('<'); //Left Button
  // button1.color(0, 255);
  button1.size(80, 100);
  button1.position(0, 245);
  button1.mousePressed(leftBut);
 
  button2 = createButton('>'); //Right Button
  button2.size(80, 100);
  button2.position(80, 245);
  button2.mousePressed(rightBut);

  selector = createSelect();
  selector.size(160, 20)
  selector.position(0, 0);
  selector.option('slimes');
  selector.option('fungus');
  selector.option('triffids');
  selector.option('zombies');
  selector.option('zombie animals');
  selector.option('jabberwock');
  selector.option('etc');
  selector.changed(currentBestiary);

  showData();

}

function draw() {
  print(currentPos);
  if (currentPos > Object.keys(data).length-1) {
    currentPos = 0;
  }
}

function changeBG() {
  background(0);
  // let val = random(205);
  // background(val+50);
  // showData();
  
}

function showData() {

  textFont('Inconsolata');
  noStroke();
  strokeWeight(1);

  textWrap(WORD);
  textAlign(CENTER);

  if (data) {
    textSize(22);
    fill(255);
    text(data[currentPos].type + ": " + data[currentPos].name.str, 100, 50, 400); //name

    textSize(18);
    fill(0, 255, 0);
    
    text(data[currentPos].description, 100, 250, 400); //description
    
    fill(0, 255, 0);
    textSize(13);
    text("Weight: " +data[currentPos].volume, 0, 500, 300); // weight
    text("Volume: " + data[currentPos].weight, 0, 525, 300); // volume

    text("Aggression Index: " + data[currentPos].aggression, 300, 500, 300);
    text("Difficulty Rating: " + data[currentPos].diff, 300, 525, 300);

    noFill();
    stroke(0, 150, 0);
    strokeWeight(2);
    rect(55, 485, 200, 75)
    rect(350, 485, 200, 75)
  }
}

function leftBut() {
  
  if (currentPos != 0) {
    currentPos--;
  } else {
    currentPos = Object.keys(data).length-1;
  }
  changeBG();
  showData();

}

function rightBut() {
  
  if (currentPos != Object.keys(data).length-1) {
    currentPos++;
  } else {
    currentPos = 0;
  }
  changeBG();
  showData();

}

function currentBestiary() {
  if (selector.value() === 'slimes') {
    currentArr = 0;
  }
  if (selector.value() === 'fungus') {
    currentArr = 1;
  }
  if (selector.value() === 'triffids') {
    currentArr = 2;
  }
  if (selector.value() === 'zombies') {
    currentArr = 3;
  }
  if (selector.value() === 'zombie animals') {
    currentArr = 4;
  }
  if (selector.value() === 'jabberwock') {
    currentArr = 5;
  }
  if (selector.value() === 'etc') {
    currentArr = 6;
  }

  

  loadBestiary();

}

function loadBestiary() {
  data = loadJSON(Arrs[currentArr], () => {
    changeBG();
    showData();
  });

}