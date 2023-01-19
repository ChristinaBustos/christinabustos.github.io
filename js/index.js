var API_KEY = "YxK0LddBWYPtWzItpdgpgxfBO3L77BE6";
      const inputSearch = document.getElementById("search");
      inputSearch.onkeyup = async (event) => {
        event.preventDefault();
        console.log(event);
        if (event.keyCode != 13) return;
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${inputSearch.value}`
        );
        const datagif = await response.json();
        // console.log(data);
        // console.log(data.json);
        let content = ``;
        datagif.data.map((gif, index) => {
          content += ` <div class="col-4" >
          <img src="${gif.images.original.url}" class= "mb-3 ms-1" alt="${gif.title}" width="400" height="200" >
           </div>
          `;
        });
        gifs.innerHTML = content;
      };

      window.onload = async () => {
        const responseRandom = await fetch(
          `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
        );
        const datagifrandom = await responseRandom.json();
        let random = ``;

        random += `<div class="col-12 position-sticky" >
          <img src="${datagifrandom.data.images.original.url}" class= "mb-3 ms-1"  width="800" >
           </div>`;
        gifRandom.innerHTML = random;
      };