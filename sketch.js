let f,a1,a2,a3,an1,an2,aq,q1,q2,end;
let startBttn;
let onscreen; 
let myRec = new p5.SpeechRec();


function preload() {
    f = loadImage ('first.jpg');
    a1 = createVideo ('alex1.mp4');
    a2 = createVideo ('alex2.mp4');
    a3 = createVideo ('alex3.mp4');
    aan = createVideo ('alex_annie.mp4');
    an1 = createVideo ('annie1.mp4');
    an2 = createVideo ('annie2.mp4');
    aq = createVideo ('annie_qashka.mp4');
    q1 = createVideo ('qashka1.mp4');
    q2 = createVideo ('qashka2.mp4');
    q3 = createVideo ('qashka3.mp4')
    end = createVideo ('ending.mp4');

    a1.hide();
    a2.hide();
    a3.hide();
    aan.hide();
    an1.hide();
    an2.hide();
    aq.hide();
    q1.hide();
    q2.hide();
    q3.hide();
    end.hide();
}

function setup() {
    createCanvas(960, 540);
    onscreen = f;

    startBttn = createButton ('Click here to start');
    startBttn.position (385, 150);
    startBttn.mousePressed (starting);
  }
  
  function draw() {
    background(220);
    image (onscreen, 0, 0, width, height);
  }

function starting() {
    onscreen = a1;
    startBttn.hide();
    a1.play();

    myRec.start();
    myRec.onResult = showResult; // callback for when there's speech detected
    myRec.onEnd = restartRec;
}

function showResult() {
    console.log(myRec.resultString);
    let lowStr = myRec.resultString.toLowerCase();
    if (lowStr.indexOf("hello") !== -1) {
      onscreen = a2;
      a1.stop();
      a2.play();
    }
    if (lowStr.indexOf("doing here") !== -1) {
        onscreen = a3;
        a2.stop();
        a3.play();
    }
    if (lowStr.indexOf("over the world") !== -1) {
        onscreen = aan;
        a3.stop();
        aan.play();
    }
    if (lowStr.indexOf("is your name") !== -1) {
        onscreen = an1;
        aan.stop();
        an1.play();
    }
    if (lowStr.indexOf("you from") !== -1) {
        onscreen = an2;
        an1.stop();
        an2.play();
    }
    if (lowStr.indexOf("intelligence") !== -1) {
        onscreen = aq;
        an2.stop();
        aq.play();
    }
    if (lowStr.indexOf("who are you") !== -1) {
        onscreen = q1;
        aq.stop();
        q1.play();
    }
    if (lowStr.indexOf("not your name") !== -1) {
        onscreen = q2;
        q1.stop();
        q2.play();
    }
    if (lowStr.indexOf("change voice") !== -1) {
        onscreen = q3;
        q2.stop();
        q3.play();
    }
    if (lowStr.indexOf("singularity") !== -1) {
        onscreen = end;
        q3.stop();
        end.play();
        //setTimeout (restartButton, 2000);
    }
}
function restartRec() {
    myRec.start();
  }

//function restartButton() {
    //let restartBttn;
    //restartBttn = createButton ('Restart?');
    //restartBttn.mousePressed (textAppears);
//}

//function textAppears() {
    //fill ('white');
    //text ('Actually this button will not work. Restart the page hehe', width/2, height/2);
//}