// This is how to make a javascript object stored to localStorage
const STORAGE_OBJ = "OBJECT";

const testObj = {
    name: "Example",
    author: "Test Example",
    year: 2022
}

localStorage.setItem(STORAGE_OBJ, JSON.stringify(testObj));

// And this is how to access javascript string localStorage and make it back to javascript object
parsedOBJ = JSON.parse((localStorage.getItem(STORAGE_OBJ)));

const headingTitle = document.createElement("h3");
const headingAuthor = document.createElement("h4");
const year = document.createElement("p");

headingTitle.innerText = parsedOBJ.name;
headingAuthor.innerText = parsedOBJ.author;
year.innerText = parsedOBJ.year;

const bookOBJ = document.createElement("div");
bookOBJ.setAttribute("style", "text-align: center;");
bookOBJ.append(headingTitle, headingAuthor, year);
const container = document.querySelector(".container");


container.append(bookOBJ);
