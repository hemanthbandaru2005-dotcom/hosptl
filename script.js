function login(){

let u=document.getElementById("username").value;
let p=document.getElementById("password").value;

if(u=="admin" && p=="1234"){
window.location="dashboard.html";
}
else{
document.getElementById("msg").innerHTML="Invalid Login";
}

}

function savePatient(){

let name=document.getElementById("name").value;
let age=document.getElementById("age").value;
let disease=document.getElementById("disease").value;
let doctor=document.getElementById("doctor").value;

let patients=JSON.parse(localStorage.getItem("patients")) || [];

patients.push({name,age,disease,doctor});

localStorage.setItem("patients",JSON.stringify(patients));

alert("Patient Saved");

}

if(document.getElementById("table")){

let patients=JSON.parse(localStorage.getItem("patients")) || [];
let table=document.getElementById("table");

patients.forEach((p,i)=>{

let row=table.insertRow();

row.insertCell(0).innerHTML=p.name;
row.insertCell(1).innerHTML=p.age;
row.insertCell(2).innerHTML=p.disease;
row.insertCell(3).innerHTML=p.doctor;

row.insertCell(4).innerHTML=
`<button onclick="deletePatient(${i})">Delete</button>`;

});

}

function deletePatient(i){

let patients=JSON.parse(localStorage.getItem("patients"));
patients.splice(i,1);
localStorage.setItem("patients",JSON.stringify(patients));
location.reload();

}
