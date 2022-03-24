export function contact() {
    const infoDiv = document.querySelector('#info');
    const contactDiv = document.createElement('div');
    contactDiv.id = 'contactInfo';
    infoDiv.appendChild(contactDiv);

    const phoneNumber = document.createElement('p');
    phoneNumber.innerText = "Phone: 555-123-4321"
    contactDiv.appendChild(phoneNumber);

    const address = document.createElement('p');
    address.innerText =  "Address: 123 Sesame St.";
    contactDiv.appendChild(address);
}