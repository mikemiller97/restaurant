export function mainPage() {
    const infoDiv = document.querySelector('#info');
    const homeDiv = document.createElement('div');
    homeDiv.id = "homeInfo";
    infoDiv.appendChild(homeDiv);
    
    const title = document.createElement('h1');
    title.innerText = "Perry's Breakfast";
    homeDiv.appendChild(title);

    const image = document.createElement('img');
    image.src = 'b00284279f07149f556f.jpg';
    homeDiv.appendChild(image);

    const description = document.createElement('p');
    description.innerText = 'Perry\'s Breakfast has been proudly serving the cats of Istanbul since 1977';
    homeDiv.appendChild(description);
}
