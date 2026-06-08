const emojis =[128992, 128993, 128994, 128995, 128996, 128997,128998, 128999 ,129000,129001, 129002 , 129003]






const section = document.getElementById("emoji-grid");
    for (let i = 0; i < emojis.length; i++) {
        const item = emojis[i];

         const card =   document.createElement("div");
       card.classList.add("emoji-card");

        const span = document.createElement("span")
        span.innerHTML = `&#${item};`
        const text = document.createElement("code")
        text.textContent = item;
        

     


        
    }

   