 function show_mom_img(){
    document.getElementById("mother_img").src = "mother.png";
 }
  
 function show_dad_img(){
     document.getElementById("dad_img").src = "father.png"
 }
  
 function show_my_img(){
     document.getElementById("my_img").src = "my_img.png"
 }

 Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 90
 })

 Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(imgSnap){
        document.getElementById('snapshot').innerHTML = "<img id='result_img' src="+imgSnap+">"
    })
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sJSCp3jy9/model.json' , modelLoaded);
function modelLoaded(){
    console.log('madal loaded');
}

function check(){
    img = document.getElementById("result_img");
    classifier.classify(img , got_result);
}
function got_result( error , result){
    if (error){
        console.log(error);
    } else {
        console.log(result);
        document.getElementById("objectName").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = (result[0].confidence.toFixed(2))*100 + "%";
    }
}