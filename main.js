const url="https://potterapi-fedeperin.vercel.app/en/characters" //const url to be fetched
 fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
     document.querySelector('button').addEventListener('click',() =>{ //event listener for button click
         let inputName=document.querySelector('.name').value.trim().toLowerCase(); //converts input to lower case
         console.log(`Input Name: "${inputName}"`); 

         console.log(data)
         const character=data.find(char => {
            return char.fullName && char.fullName.toLowerCase().includes(inputName)
         }) //looks in array to find charcter name that matches inputName and converts inputName to lower case
      
         if(character){//if inputName is found
          document.querySelector('.fullname').textContent=character.fullName || "Unknown";
          document.querySelector('.nickname').textContent=character.nickname || "Unknown";
          document.querySelector('.birthdate').textContent=character.birthdate || "Unknown";
          document.querySelector('.house').textContent=character.hogwartsHouse || "Unknown";
          document.querySelector('.children').textContent = character.children ? character.children.join(', ') : "None"; //if character has children,show the array as a string. If not, show none
          document.querySelector('.playedby').textContent = character.interpretedBy || "Unknown";

          document.querySelector('.img').src = character.image || "No image found";
         }else{//if inputName is not found
          document.querySelector('.fullname').textContent = "Character not found";
          document.querySelector('.nickname').textContent = "";
          document.querySelector('.birthdate').textContent = "";
          document.querySelector('.house').textContent = "";
          document.querySelector('.children').textContent = "";
          document.querySelector('.playedby').textContent = "";
          document.querySelector('.img').src = '';
        }
    });
    })
    .catch(err => { 
        console.log(`error ${err}`) 
    });
