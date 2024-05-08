let sendbtn = document.getElementById("send-button");
let inputmsg = document.getElementById("input");
let displayArea = document.getElementById("display-area");
let uinput = inputmsg.value;

const description = {
    "fever": "A fever is a temporary rise in body temperature. It's one part of an overall response from the body's immune system.",
    "cold": "cold is an illness affecting your nose and throat. Germs called viruses cause a common cold.",
    "headache": "A headache is a pain in your head or face that’s often described as a pressure that’s throbbing, constant, sharp or dull. Headaches can differ greatly in regard to pain type, severity, location and frequency"
}
const diet = {
    fever: ["juices", "soups", "beverages", "Milk & milk based items", "well cooked fruites"],
    cold: ["Coconut water", "Hot tea", "Ginger items", "Spicy foods"],
    headache: ["coffee ", "leafy greens", "low sodium foods", "almonds"]
}
const prescriptionList = {
    fever: ["ASOZEN-FORTE - Aceclofenac + paracetamol + Chlorzoxazone", "Amoxible", "Paracetmol"],
    cold: ["Ibuprofen", "Crocin cold and flu ", "Benadryl allergy plus congestion.", "Nux vomica"],
    headache: [" aspirin", "naproxen ", "acetaminophen"]
}
const precautionsList={
    fever:["Drink plenty of fluids to stay hydrated.","Avoid alcohol, tea and coffee as these drinks","Avoid taking cold baths or showers.","eat citrus fruits","Sponge exposed skin with tepid water"],
    cold:["Avoid touching your eyes, nose or mouth","Try to avoid close contact with sick people.","Avoid consuming cold water.","Eat a healthy diet."],
    headache:["drink more water","turn off the lights and sounds","try temperature therapy.","get sone caffeine","practice relaxation"]
}
function userInput(userinput) {
    let div = document.createElement('div');
    div.setAttribute("class", "right");
    div.classList.add("animation")
    div.innerHTML = "<p>" + userinput + "</p>";
    displayArea.appendChild(div);
    inputmsg.value = "";
    processInput(userinput);

}
function processInput(result) {
    if (result == "fever") {
        fever();
    }
    else if (result == "cold") {
        cold();
    }
    else if (result == "headache") {
        headache();
    }

}

function fever() {
    botOutput("fever")

}
function cold() {
    botOutput("cold");
}
function headache() {
    botOutput("headache");
}

function botOutput(message) {
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    div1.setAttribute("class", "chatbot-icon");
    div1.classList.add("animation");
    div1.innerHTML='<i class="fa-solid fa-robot"></i>';
    div.setAttribute("class", "left");
    div.classList.add("animation");
    div.innerHTML = "<h3>" + message + "</h3>";
    div.innerHTML += "<p>" + description[message] + "</p>";
    displayArea.appendChild(div1);
    displayArea.appendChild(div);
    optionsDisplayer(message);


}

function optionsDisplayer(message) {
    let circlecontainer = document.createElement('div');
    circlecontainer.setAttribute('class', "circle-container");
    circlecontainer.classList.add("animation");

    let c1 = document.createElement('div');
    c1.setAttribute('class', "circles");
    c1.addEventListener('click', foodDiet);
    c1.innerHTML='<div><i class="fa-solid fa-utensils icons"></i></div>'
    c1.innerHTML+= "<div>food</div>";


    let c2 = document.createElement('div');
    c2.setAttribute('class', "circles");
    c2.addEventListener('click',prescription);
    c2.innerHTML='<div><i class="fa-solid fa-stethoscope icons"></i></div>'
    c2.innerHTML+= "<div>prescription</div>";

    let c3 = document.createElement('div');
    c3.setAttribute('class', "circles");
    c3.addEventListener('click',precautions);
    c3.innerHTML='<div><i class="fa-solid fa-user-shield icons"></i></div>'
    c3.innerHTML+= "<div>precautions</div>";

    circlecontainer.appendChild(c1);
    circlecontainer.appendChild(c2);
    circlecontainer.appendChild(c3);

    displayArea.appendChild(circlecontainer);


}
function foodDiet() {
    if (userinput == "fever") {
        foodOutput('fever');
    }
    else if (userinput == "cold") {
        foodOutput('cold');

    }
    else if (userinput == "headache") {
        foodOutput('headache');

    }

}

function foodOutput(illness) {
    let div = document.createElement('div');
    div.setAttribute('class', 'left');
    div.classList.add('animation')
    div.innerHTML = "<h2>food items</h2>";
    let ul = document.createElement('ul');
    ul.setAttribute('class', 'left');
    ul.style.paddingLeft = '20px'
    ul.style.marginTop = '2px';

    for (let i = 0; i < diet[illness].length; i++) {
        let li = document.createElement('li');
        li.innerHTML = diet[illness][i];
        ul.appendChild(li);
    }
    div.appendChild(ul);
    displayArea.appendChild(div);
    scroll();


}
function prescription() {
    if (userinput == "fever") {
        prescriptionOutput('fever');
    }
    else if (userinput == "cold") {
        prescriptionOutput('cold');

    }
    else if (userinput == "headache") {
        prescriptionOutput('headache');
    }
}
function prescriptionOutput(illness) {
    let h = document.createElement('div');
    h.setAttribute('class', 'left');
    h.innerHTML = "<h2>Prescription</h2>";
    h.innerHTML+="<p><mark>NOTE :</mark> it is good to consult the doctor for the presecription .we are providing the medicines for your knowledge</p>";
    let ul = document.createElement('ul');
     
    ul.style.paddingLeft = '18px'
    ul.style.marginTop = '2px';

    for (let i = 0; i < prescriptionList[illness].length; i++) {
        let li = document.createElement('li');
        li.innerHTML = prescriptionList[illness][i];
        ul.appendChild(li);
    }
    h.appendChild(ul);
    displayArea.appendChild(h);
    scroll();

}
function precautions(){
    if (userinput == "fever") {
       precautionsOutput('fever');
    }
    else if (userinput == "cold") {
        precautionsOutput('cold');

    }
    else if (userinput == "headache") {
        precautionsOutput('headache');
    }

}
function precautionsOutput(illness){
    let div = document.createElement('div');
    div.setAttribute('class', 'left');
    div.classList.add('animation')
    div.innerHTML = "<h2>Precautions</h2>";
    let ul = document.createElement('ul');
    // ul.setAttribute('class', 'left');
    ul.style.paddingLeft = '20px'
    ul.style.marginTop = '2px';

    for (let i = 0; i < precautionsList[illness].length; i++) {
        let li = document.createElement('li');
        li.innerHTML = precautionsList[illness][i];
        ul.appendChild(li);
    }
    div.appendChild(ul);
    displayArea.appendChild(div);
    scroll();

}

// function symptoms(){
//     let div=document.createElement('div');
//     div.setAttribute('class','left');
//     let h3=document.createElement('h3');
//     h3.textContent="Symptoms";
//     let input=document.createElement("input");
//     input.type='text';
//     input.setAttribute()

// }

function scroll(){
    var elem = document.getElementById("display-area" );
  elem.scrollTop = elem.scrollHeight;
}

let userinput;

sendbtn.onclick = function () {
    userinput = inputmsg.value;
    if (userinput == "") {
        alert("enter valid input");

    }
    // else if (userinput=="symptoms"){
    //     symptoms();
    // }
    else {
        userInput(userinput);
        scroll()
    }
}

//contact us section
let name=document.getElementById('name');
let email=document.getElementById('email');
let query=document.getElementById('query');
let form=document.getElementById('form');
form.addEventListener("submit",()=>{
    alert(name.value+ " thanks for contacting us. We will reach you soon");
    name.value='';
    email.value='';
    query.value='';
})