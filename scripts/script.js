localStorage.setItem('name', '');

function acquaintance(){
	let username = document.getElementById('username').value;
	userGreeting = document.getElementById('introduction');
	userGreeting.innerHTML += "Добро пожаловать в мир JavaScript, " + username + "!";

	localStorage.setItem('name', username);
	currentUser = document.getElementById('currentUser');
	currentUser.innerText += localStorage.getItem('name');
}


function countTriangleS(){
	let a = document.getElementById('a').value;
	let h = document.getElementById('h').value;
	let S = a*h/2;
	triangleDiv = document.getElementById('triangle');
	triangleDiv.innerHTML += "Площадь треугольника равна: " + S;
}

function compareStrings(){
	s1 = document.getElementById('firstString').value;
	s2 = document.getElementById('secondString').value;
	stringsDiv = document.getElementById('strings');

	if (s1.length == s2.length){
		stringsDiv.innerHTML += "Количество символов в строке совпадает";
	}
	else{
		stringsDiv.innerHTML += "Количество символов в строке не совпадает";
	}
}

function arrayElements(){
	let arr = [ document.getElementById('0').value,
		document.getElementById('1').value,
		document.getElementById('2').value,
		document.getElementById('3').value,
		document.getElementById('4').value]

	let min = Math.min.apply(null, arr);
	let max = Math.max.apply(null, arr);

	arrayDiv = document.getElementById('array');
	arrayDiv.innerHTML += "Минимальный элемент массива: " + min + "Максимальный элемент массива: " + max;
}

var base = 60; 
   var clocktimer,dateObj,dh,dm,ds,ms; 
   var readout=''; 
   var h=1,m=1,tm=1,s=0,ts=0,ms=0,init=0; 
   
   //функция для очистки поля
   function ClearСlock() { 
        clearTimeout(clocktimer); 
        h=1;m=1;tm=1;s=0;ts=0;ms=0; 
        init=0;
        readout='00:00:00.00'; 
        document.MyForm.stopwatch.value=readout; 
   } 
   
   //функция для старта секундомера
   function StartTIME() { 
        var cdateObj = new Date(); 
        var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000); 
        if (t>999) { s++; } 
        if (s>=(m*base)) { 
                ts=0; 
                m++; 
        } else { 
                ts=parseInt((ms/100)+s); 
                if(ts>=base) { ts=ts-((m-1)*base); } 
        } 
        if (m>(h*base)) { 
                tm=1; 
                h++; 
        } else { 
                tm=parseInt((ms/100)+m); 
                if(tm>=base) { tm=tm-((h-1)*base); } 
        } 
        ms = Math.round(t/10); 
        if (ms>99) {ms=0;} 
        if (ms==0) {ms='00';} 
        if (ms>0&&ms<=9) { ms = '0'+ms; } 
        if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; } 
        dm=tm-1; 
        if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; } 
        dh=h-1; 
        if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; } 
        readout = dh + ':' + dm + ':' + ds + '.' + ms; 
        document.MyForm.stopwatch.value = readout; 
        clocktimer = setTimeout("StartTIME()",1); 
   } 
   
   //Функция запуска и остановки
   function StartStop() { 
        if (init==0){ 
                ClearСlock();
                dateObj = new Date(); 
                StartTIME(); 
                init=1; 
        } else { 
                clearTimeout(clocktimer);
                init=0;
        } 
   }

function testAnswers(){
	let counter = 0;
	total = document.getElementById('check');
	mistakes = document.getElementById('mistakes');
	if (document.getElementById('correctAnswer1').checked == true){
		counter++;
	}
	else{
		mistakes.innerText += "В вопросе 1 выбран неверный ответ\r\n";
	}

	if (document.getElementById('correctAnswer2').checked == true){
		counter++;
	}
	else{
		mistakes.innerText += "В вопросе 2 выбран неверный ответ\r\n";
	}

	if (document.getElementById('correctAnswer3').checked == true){
		counter++;
	}
	else{
		mistakes.innerText += "В вопросе 3 выбран неверный ответ\r\n";
	}

	if (document.getElementById('correctAnswer4').checked == true){
		counter++;
	}
	else{
		mistakes.innerText += "В вопросе 4 выбран неверный ответ\r\n";
	}

	if (document.getElementById('correctAnswer5').checked == true){
		counter++;
	}
	else{
		mistakes.innerText += "В вопросе 5 выбран неверный ответ\r\n";
	}

	if (document.getElementById('correctAnswer6').checked == true){
		counter++;
	}
	else{
		mistakes.innerText += "В вопросе 6 выбран неверный ответ\r\n";
	}

	if (document.getElementById('correctAnswer7').checked == true){
		counter++;
	}
	else{
		mistakes.innerText += "В вопросе 7 выбран неверный ответ\r\n";
	}

	if (document.getElementById('correctAnswer8').checked == true){
		counter++;
	}
	else{
		mistakes.innerText += "В вопросе 8 выбран неверный ответ\r\n";
	}

	if (document.getElementById('correctAnswer9').checked == true){
		counter++;
	}
	else{
		mistakes.innerText += "В вопросе 9 выбран неверный ответ\r\n";
	}

	if (document.getElementById('correctAnswer10').checked == true){
		counter++;
	}
	else{
		mistakes.innerText += "В вопросе 10 выбран неверный ответ\r\n";
	}

	total.innerHTML += "Правильных ответов: " + counter;

}


