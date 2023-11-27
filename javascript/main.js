//Enter works as "Add" button
document.getElementById("userInput").addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.key === 'Enter') {
      document.getElementById("addBtn").click();
  }
});

//Creating new play-icon 
const list = document.getElementsByTagName("li");
for (i = 0; i < list.length; i++) {
const newBtn = document.createElement("button");
const txt = document.createTextNode("play_circle");
newBtn.className = "material-symbols-outlined";
newBtn.appendChild(txt);
list[i].appendChild(newBtn);
}

//Fetching link from the list and setting attribute to src
//Changing h1 text when play button is clicked
const playBtn = document.getElementsByClassName('material-symbols-outlined')
  for (i = 0; i < playBtn.length; i++) {
      playBtn[i].onclick = function() {
      const titleChange = document.getElementById('titleForClickedVideo')
      titleChange.innerText = 'You are watching:'
      const videoContainer = document.getElementById('video')
      const clickedLink = this.previousSibling.textContent
      console.log(clickedLink)
      videoContainer.setAttribute("src", clickedLink)
     }
  }

//Checking an item out from the list as 'Done'
const wholeList = document.querySelector('ul');
wholeList.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
  ev.target.classList.toggle('checked');
}
});

//Adding new item to the list from users input
function newItem(){
  const userlink = document.getElementById('userInput').value
  const newUserLink = document.createElement('li')
  const newUserLinkContent = document.createTextNode(userlink)
  newUserLink.appendChild(newUserLinkContent)
  if (userlink === '') {
      alert("There is nothing to add :)");
  }else {
       document.getElementById("toWatchList").appendChild(newUserLink);
       document.getElementById('userInput').value = ''
  }
  const list = document.getElementsByTagName("li");
  const newBtn = document.createElement("button");
  const txt = document.createTextNode("play_circle");
  newBtn.className = "material-symbols-outlined";
  newBtn.appendChild(txt);
    list[i].appendChild(newBtn);
  
    const playBtn = document.getElementsByClassName('material-symbols-outlined')
    for (i = 0; i < playBtn.length; i++) {
        playBtn[i].onclick = function() {
        const titleChange = document.getElementById('titleForClickedVideo')
        titleChange.innerText = 'You are watching:'
        const videoContainer = document.getElementById('video')
        const clickedLink = this.previousSibling.textContent
        console.log(clickedLink)
        videoContainer.setAttribute("src", clickedLink)
       }
    }
}
