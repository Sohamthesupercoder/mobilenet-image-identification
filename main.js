Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90 ,

constraint: {
  facingMode:"environment"
}

  });

  camera=document.getElementById("camera");
Webcam.attach("#camera");

console.log("ml5 version: ",ml5.version);


function capturePhoto() {
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='captured_photo' src='" + data_uri + "'>";
  });

}

classifier = ml5.imageClassifier('MobileNet',modelLoaded);
function modelLoaded() {
  console.log("modelLoaded");
}

function identifyImage() {
  img = document.getElementById("captured_photo");
  classifier.classify(img,gotResult);
}


function gotResult(error , result) {
if(error){
  console.error(error);
}else if(result){
console.log(result);
document.getElementById("object_name").innerHTML=result[0].label;
}
}