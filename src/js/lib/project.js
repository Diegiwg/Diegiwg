function genProject(data) {
    let title = document.createElement("p");
    title.className = "title";
    title.innerText = data.title;

    let source = document.createElement("a");
    source.className = "source";
    source.innerText = "Codigo";
    source.href = data.source;

    let demo = document.createElement("a");
    demo.className = "demo";
    demo.innerText = "Demo";
    demo.href = data.demo;

    let desc = document.createElement("p");
    desc.className = "desc";
    desc.innerText = data.desc;

    let imgs = document.createElement("div");
    imgs.className = "imgs";
    data.imgs.forEach((img) => {
        let _ = document.createElement("img");
        _.className = "preview";
        _.src = img;
        _.alt = "";

        imgs.appendChild(_);
    });

    let projeto = document.createElement("div");
    projeto.className = "projeto";
    projeto.appendChild(title);
    projeto.appendChild(imgs);
    projeto.appendChild(desc);
    projeto.appendChild(source);
    projeto.appendChild(demo);

    return projeto;
}

export { genProject };
