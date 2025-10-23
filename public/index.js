const response = await fetch("/contacts");
console.log("response: ", response);

const contacts = await response.json();
console.log("contacts: ", contacts);

const dataRow = document.querySelectorAll(
  ".contact-list__row:not(.contact-list__row--header) .contact-list__item--name"
);

console.log("dataRow[1]: ", dataRow[1]);

const contactName = contacts[1].name;

console.log("contactName: ", contactName);

dataRow[0].innerText = contactName;
