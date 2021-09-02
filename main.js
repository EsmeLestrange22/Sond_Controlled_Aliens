function startComparing() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });

    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pJx9Pon03/model.json', modelReady)
}

function modelReady() {
    console.log("Your model has been loaded successfully")
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("sd").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("acc").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
random_r= Math.floor(Math.random() * 255) + 1;
random_g= Math.floor(Math.random() * 255) + 1;
random_b= Math.floor(Math.random() * 255) + 1;

document.getElementById("sd").style.color= "rgb("
+random_r+ "," +random_g+ "," +random_b+ ")"
document.getElementById("acc").style.color= "rgb("
+random_r+ "," +random_g+ "," +random_b+ ")"


        img1 = document.getElementById("one");
        img2 = document.getElementById("two");
        img3 = document.getElementById("three");
        img4 = document.getElementById("four");

        if (results[0].label == "Clap") {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.gif"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        }
        if (results[0].label == "Pages Rustling") {
            img1.src = "aliens-01.gif"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        }
        if (results[0].label == "Snap") {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.gif"
            img4.src = "aliens-04.png"
        }
        if (results[0].label == "Background Noise") {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.gif"
        }

    }
}