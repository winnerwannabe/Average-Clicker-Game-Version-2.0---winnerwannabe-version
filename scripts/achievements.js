function Achievement(name, img, color, reason, id) {

    this.name = name;
    this.img = img;
    this.id = id;
    this.color = color;
    this.reason = reason;


    this.create = ()=> {
        var div = document.createElement("div");
        div.id = this.id;
        div.classList.add('achievement');

        var image = document.createElement('img');
        image.setAttribute('src', 'images/'+this.img);

        var about = document.createElement('div');
        about.classList.add('about');

        var header = document.createElement('h2');
        header.setAttribute('style', 'color:'+this.color);
        header.innerHTML = this.name;

        var des = document.createElement('p');
        des.classList.add('why');
        des.innerHTML = this.reason;


        // build

        about.appendChild(header);
        about.appendChild(des);

        div.appendChild(image);
        div.appendChild(about);

        return div;
    }
}
