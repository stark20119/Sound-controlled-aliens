function  work(){

    navigator.mediaDevices.getUserMedia({ audio: true });

classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/G2PqdMuOu/model.json" , modelReady)
}


function modelReady(){

  classifier.classify(gotResults)  
}

