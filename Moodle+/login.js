console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector("#login"); // Fill the selector for the login element in ""
let login_text = login_element.innerText;

let part= login_text.split(" "); //"\n" remains in one element

//console.log(login_text)
//type-1 (please add/subtract x + y)
//type-2 (please enter first/second value x , y)

console.log("\n\n\n\n\n");
console.log(part[5]); // "subtract" and "add" (type-1), "enter" (type-2)
console.log(part[6]); // x (type-1), "second"/"first" (type-2)
console.log(part[7]); // "+","-" operators (type-1), "value" (type-2)
console.log(part[8]); // y (type-1), x (type-2)
console.log(part[9]); // "=" (type-1),(type-2)
console.log(part[10]); // y (type-2)
console.log("\n\n\n\n\n");



let question = part[5]; // Use split and array operations on the login_text string to extract the question
console.log(question);
let answer ; // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked
let operator=part[7];
if (question=="add" && operator=="+"){
    let x = parseInt(part[6]);
    let y = parseInt(part[8]);
    console.log(x);
    console.log(y);
    console.log("Please add....");
    answer = x+y;

}
else if (question=="subtract"){
    let x = part[6];
    let y = part[8];
    console.log(x);
    console.log(y);
    console.log("Please subtract...");
    answer = x-y;

}
else if (question=="enter"){
    let operation= part[6];
    let x = part[8];
    let y = part[10];
    console.log(x);
    console.log(y);

    if (operation=="first"){
        answer = x;
        console.log("first Number...")

    }
    else if (operation=="second"){
        answer = y;
        console.log("second number....")

    }

}

console.log(answer);



const captcha_input_element = document.querySelector("#valuepkg3"); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;
