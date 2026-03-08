function addPatient(){

let name=document.getElementById("name").value;
let age=document.getElementById("age").value;
let disease=document.getElementById("disease").value;
let doctor=document.getElementById("doctor").value;

if(name=="" || age=="" || disease=="" || doctor==""){
alert("Please fill all fields");
return;
}

let table=document.getElementById("patientTable");

let row=table.insertRow();

row.insertCell(0).innerHTML=name;
row.insertCell(1).innerHTML=age;
row.insertCell(2).innerHTML=disease;
row.insertCell(3).innerHTML=doctor;

document.getElementById("name").value="";
document.getElementById("age").value="";
document.getElementById("disease").value="";
document.getElementById("doctor").value="";
}
