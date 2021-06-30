Webcam.set({
    image_format:"png",
    height:300,
    width:300,
    png_quality:90,
    constraints:{
    facingMode:"environment"
    }
    });
    Webcam.attach(document.getElementById("camera"));

    function takepic() {
        Webcam.snap(function (photo) {
         document.getElementById("result").innerHTML="<img class='img-responsive' id='clickphoto' src="+photo+">";
        })  ;
      }
      var ml10=ml5.imageClassifier('MobileNet',modelmade);
      function modelmade() {
          console.log("modelmade");
      }
      function predict() {
       var img=document.getElementById("clickphoto");  
       ml10.classify(img,gotresult);
       }
       function gotresult(error,result) {
       if (error) {
        console.error(error);   
       } else {
          console.log(result);
          document.getElementById("objectname").innerHTML=result[0].label;
       }    
       }