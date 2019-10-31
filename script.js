fetch("https://www.reddit.com/r/aww/.json")
  .then(res => res.json())
  .then(data => {
    console.log(data);

    let mainEl = document.querySelector("#content");
    for (const post of data.data.children) {
      let contentEl = document.createElement("div");
      // adds a class of content to each div
      contentEl.classList.add("posts");
      // * exception to using innerHTML since data is HTML from json file, adds json content inside of div with class of content
      // adds to section with class of post
      mainEl.appendChild(contentEl);

      let titleEl = document.createElement("h3");
      titleEl.innerText = post.data.title;
      contentEl.appendChild(titleEl);

      let linkEl = document.createElement("a");
      linkEl.setAttribute(
        "href",
        `https://www.reddit.com${post.data.permalink}`
      );
      contentEl.appendChild(linkEl);

      let picEl = document.createElement("img");
      picEl.setAttribute("src", post.data.thumbnail);
      linkEl.appendChild(picEl);
    }
  });
