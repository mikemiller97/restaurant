export function menu() {
    const infoDiv = document.querySelector('#info');
    const menuDiv = document.createElement('div');
    menuDiv.id = 'menuInfo';
    infoDiv.appendChild(menuDiv);

    const wetFood = document.createElement('p');
    wetFood.innerText = 'wet food';
    menuDiv.appendChild(wetFood);

    const dryFood = document.createElement('p');
    dryFood.innerText = 'dry food';
    menuDiv.appendChild(dryFood);
} 