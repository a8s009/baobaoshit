/*document.querySelector('html').onclick = function(){
    alert('ouch! stop it nigga!');
}*/


var myImage = document.querySelector('img');

myImage.onclick = function () 
{
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'image/ahego.jpg')
  {
    myImage.setAttribute ('src','image/ahego2.jpg');
  } else
  {
    myImage.setAttribute ('src','image/ahego.jpg');
  }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() 
{
 var myName = prompt('Please enter your name.');
 localStorage.setItem('name',myName);
    myHeading.innerHTML = 'hentai is fucking awesome,' + myName;
}

if(!localStorage.getItem('name'))
    {
        setUserName();
    }
else
    {
        var storedName = localStorage.getItem('name');
        myHeading.innerHTML = 'hentai is fucking awesome,' + storedName;
    }

myButton.onclick = function()
{
    setUserName();
}
