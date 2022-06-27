const username = prompt("Siapa namamu?");
const age = prompt("Berapa umurmu?");
const programmingLanguage = prompt("Bahasa Pemrograman termahir?");

const user = {
    userName : username,
    userAge : age,
    userProgLang : programmingLanguage
}

if(programmingLanguage == "Javascript"){
    alert("alert('hello + " + user.userName + " ');");
} else if(programmingLanguage == "Python"){
    alert("print('hello + " + user.userName + " ')");
} else if(programmingLanguage == "C++"){
    alert("cout << Hello << " + user.userName + " << endl;");
} else{
    alert("There are so many kind programming language, so, hello " + user.userName);
}