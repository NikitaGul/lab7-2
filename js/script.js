document.body.style.background="radial-gradient(purple, blue, lightsteelblue, aqua)";
document.body.style.display="flex";
document.body.style.justifyContent="center";
document.body.style.alignItems="center";

let firstElement = document.createElement("div");
firstElement.style.margin = "20px";
firstElement.style.border = "5px groove cyan";
firstElement.style.width = "300px";
firstElement.style.height = "385px";
firstElement.style.fontFamily = "Times New Roman";
firstElement.style.fontSize = "26px";
firstElement.style.color = "lightsteelblue";
firstElement.style.textAlign = "center";
firstElement.style.boxShadow = "10px 10px 10px aqua";
firstElement.innerHTML = "Введіть запитання";

document.body.append(firstElement);

let inputElement = document.createElement("input");
inputElement.style.margin = "50px auto";
inputElement.style.display = "block";
inputElement.style.width = "200px";
inputElement.style.height = "30px"
inputElement.style.border = "0px solid";
inputElement.style.borderRadius = "10px";
inputElement.style.backgroundColor = "mediumpurple";
inputElement.style.color = "lightsteelblue";
inputElement.style.fontFamily = "Times New Roman";
inputElement.style.fontSize = "18px";
firstElement.append(inputElement);



let secondElement = document.createElement("div");
secondElement.style.width = "200px";
secondElement.style.height = "200px";
secondElement.style.background = "radial-gradient(navy, blue, purple)";
secondElement.style.border = "5px groove cyan";
secondElement.style.borderRadius = "100px";
secondElement.style.margin = "30 auto";
secondElement.style.textAlign = "center";
secondElement.style.lineHeight = "200px"
secondElement.style.color = "lightsteelblue";
secondElement.style.fontFamily = "Times New Roman";
secondElement.style.fontSize = "22px";
secondElement.style.cursor = "pointer";
secondElement.style.boxShadow = "10px 10px 10px purple"
secondElement.onclick = () => 
{
	let result = Math.random();
	if(inputElement.value == 0)
	{
		secondElement.innerHTML = "Заповніть поле";
	}
	if(result < 0.5 && inputElement.value != 0)
	{
		secondElement.innerHTML = "No";
	}
	if(result >= 0.5 && inputElement.value != 0)
	{
		secondElement.innerHTML = "Yes";
	}
}	
firstElement.append(secondElement);