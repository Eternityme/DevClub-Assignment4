console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector("#login"); // Fill the selector for the login element in ""
let login_text = login_element.innerText;

let part= login_text.split(" "); //"\n" remains in one element

//console.log(login_text)
//type-1 (please add/subtract x + y)
//type-2 (please enter first/second value x , y)



let question = part[5]; // Use split and array operations on the login_text string to extract the question
let answer ; // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked
let operator=part[7];
if (question=="add" && operator=="+"){
    let x = parseInt(part[6]);
    let y = parseInt(part[8]);
    answer = x+y;

}
else if (question=="subtract"){
    let x = part[6];
    let y = part[8];
    answer = x-y;

}
else if (question=="enter"){
    let operation= part[6];
    let x = part[8];
    let y = part[10];

    if (operation=="first"){
        answer = x;

    }
    else if (operation=="second"){
        answer = y;

    }

}

const captcha_input_element = document.querySelector("#valuepkg3"); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;
