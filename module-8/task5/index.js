const button = document.querySelector("button");
const fillInObj = function() {
    let inputs = document.querySelectorAll('[type="text"]');
    objGlobal = {};
    for (let i = 0; i < inputs.length; i++) {
        objGlobal[inputs[i].value] = i;
    };
    console.log(objGlobal);
};
button.addEventListener("click", fillInObj);