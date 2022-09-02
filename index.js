const myImg = document.getElementById('img');
console.log(myImg);
async function myfirstAPI(){
  const response = await fetch("dota2_social.jpg");
  const data = await response.blob();
  img.src = URL.createObjectURL(data);
}

myfirstAPI()
.then(response=>{
    console.log("Image loaded successfully!")
})
.catch(error=>{
  console.log(error);
})
