
       async function getRepos(){
        const url= "https://api.github.com/users/ngmars/starred"
        const l_url= "https://api.github.com/repos/ngmars/Face-Mask-CNN/languages"
        const lang_resp= await fetch(l_url)
        const response= await fetch(url)
        const result = await response.json()
        const result_l = await lang_resp.json()
     console.log(result)
     console.log(result_l)
     var i =0;
     
     for (i=0; i<6;i++ ){
         var div = document.createElement("div");
         div.classList.add("full-element");
         var img = document.createElement("IMG");
         img.setAttribute("src", "Vector.png");
         img.setAttribute("class", "repo-img")
         var namediv= document.createElement("div")
         namediv.classList.add("name-element");
         var name = document.createTextNode(result[i].name);
         namediv.appendChild(name)
         var languagediv= document.createElement("div")
         languagediv.classList.add("language-element");
         var language= document.createTextNode(result[i].language);
         languagediv.appendChild(language)
         var descriptiondiv= document.createElement("div")
         descriptiondiv.classList.add("description-element");
         var description= document.createTextNode(result[i].description);
         descriptiondiv.appendChild(description)
         var spot = document.createElement("div")
         spot.setAttribute("class", "dot")
         var langfull= document.createElement("div")
         langfull.setAttribute("class", "lang-full")
         langfull.appendChild(spot);
         langfull.appendChild(languagediv);

         div.appendChild(img)
         div.appendChild(namediv);
         div.appendChild(descriptiondiv);
         div.appendChild(langfull);

         
         
         document.getElementById("divResult").appendChild(div);

    }

     }
    
     function chbg(color) {
        document.getElementsByClassName('name-element').style.Color = color;
    }   