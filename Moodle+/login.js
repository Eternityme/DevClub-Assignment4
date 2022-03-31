console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector("#login"); // Fill the selector for the login element in ""
let login_text = login_element.innerText;

//test
console.log(login_text)
let part= login_text.split(" "); //"\n" remains in one element
console.log(part[0]); // gives "Username"
console.log(part[4]); // gives "usernme \n please"
console.log(part[5]);



let question = ""; // Use split and array operations on the login_text string to extract the question

let answer = ""; // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked

const captcha_input_element = document.querySelector("#valuepkg3"); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;
