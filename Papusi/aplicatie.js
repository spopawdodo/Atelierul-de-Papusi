var suma_totala = 0;
var nr_total = 0;

window.onload = function() {
	
	var prez= document.createElement("h1");
	prez.innerHTML = "Aplicatie Filtrare/ Sortare / Calculare <br>";
	document.body.appendChild(prez);
	
	
	var dv = document.createElement("UL");
	//dv.classList.add("container");
	dv.setAttribute("ID", "papusi");
	document.body.appendChild(dv);
	
	var btn = document.createElement("Button");
	btn.onclick = sorteaza_pret;
	btn.innerHTML = "Sorteaza-ma dupa pret";
	document.body.appendChild(btn);
	
	var btn1 = document.createElement("Button");
	btn1.onclick = sorteaza_nume;
	btn1.innerHTML = "Sorteaza-ma dupa nume";
	document.body.appendChild(btn1);
	
	var btn2 = document.createElement("select");
	var opt1 = document.createElement("option");
	opt1.value = "Marioneta";
	opt1.innerHTML = "Selecteaza doar marionete";
	btn2.appendChild(opt1);
	
	var opt2 = document.createElement("option");
	opt2.value = "Rochie";
	opt2.innerHTML = "Selecteaza doar hainute";
	btn2.appendChild(opt2);
	
	var opt3 = document.createElement("option");
	opt3.value = "Papusa";
	opt3.innerHTML = "Selecteaza doar plusuri";
	btn2.appendChild(opt3);
	btn2.onchange = selecteaza;
	document.body.appendChild(btn2);
	
	var div = document.createElement("DIV");
	div.setAttribute("ID", "rating");
	document.body.appendChild(div);
	
	creeaza_rating();
	
	add_options("Marioneta Dragon", " 50$");
	add_options("Marioneta Printesa", " 60$");
	add_options("Marioneta Zana", " 100$");
	add_options("Rochie Scolara", " 30$");
	add_options("Rochie Zana", " 70$");
	add_options("Rochie Printesa", " 90$");
	add_options("Papusa Iepure", " 120$");
	add_options("Papusa Pisica", " 50$");
	add_options("Papusa Vulpe", " 50$");
	var nr_apasari = 0;
	
	
window.addEventListener("keydown", function (e){
		if (e.key == "s") nr_apasari ++;
		else nr_apasari = 0;
		if (nr_apasari == 5)
		{
			alert ("Ai deblocat o reducere secreta. Ai 10% reducere la toate produsele din cos");
			var prod = document.getElementById ("produse_selectate");
			if (prod)
			{
				suma_totala *= 9;
				suma_totala /= 10;
				prod.innerHTML = "Ati selectat " + nr_total+ " produse in valoare de "+ suma_totala+"$";
		}}
});

	
	
window.addEventListener("dblclick", function (e){
		e.stopPropagation();
		var img = document.getElementById("papusa_japoneza");
		
		if (!img)
		{
			img = document.createElement("img");
			img.src = "https://i.ebayimg.com/thumbs/images/g/4YEAAOSwWxNYrYtN/s-l225.jpg";
			img.setAttribute("ID", "papusa_japoneza");
		}
		
		img.style.position = "absolute";
		img.style.width = "40px";
		img.style.height = "40px";
		img.style.top = e.pageY+"px";
		img.style.left = e.pageX+"px";
		img.style.height = "60px";
		img.style.width = "60px";
		var x;
		x = setInterval (function () {
			img.style.width = parseInt(img.style.width)-1 + "px";
			img.style.height = parseInt(img.style.height)-1 + "px";
			if (parseInt(img.style.width) == 0)
				clearInterval(x);
		}, 500);
		document.body.appendChild(img);
});

}


function creeaza_rating()
{
	var br = document.createElement("br");
	var br_1 = document.createElement("br");
	var d = document.getElementById("rating");
	d.innerHTML = "Rate Us!";
	var range = document.createElement("input");
	range.type = "range";
	range.min = 1;
	range.max = 5;
	range.value = 1;
	d.appendChild(range);
	range.onchange = function () {
		var p = document.getElementById("punctaj");
		if (!p)
		{
			p = document.createElement("P");
			p.setAttribute("ID", "punctaj");
			d.appendChild(p);
		}
		p.innerHTML = "Ne-ati dat nota "+range.value+" ";
		
	};
	
	d.appendChild(br);
	var text_1 = document.createElement("input");
    text_1.type = "text";	
	text_1.name = "nume";
	text_1.onchange = function () {
		localStorage.setItem ("nume", this.value);
	};
	
	text_1.placeholder = "Nume";
	
	d.appendChild (text_1);
	d.appendChild(br_1);
	var text_2 = document.createElement("input");
    text_2.type = "text";	
	text_2.name = "prenume";
	text_2.placeholder = "Prenume";
	d.appendChild (text_2);
	
	var br_3 = document.createElement("br");
	d.appendChild(br_3);
	
	
	var gen_1 = document.createElement("input");
	gen_1.type = "radio";
	gen_1.name = "gender";
	gen_1.value = "male";
	var tx_1 = document.createTextNode("Barbat");
	d.appendChild(gen_1);
	d.appendChild(tx_1);	
	
	var gen_2 = document.createElement("input");
	gen_2.type = "radio";
	gen_2.name = "gender";
	gen_2.value = "female";
	var tx_2 = document.createTextNode("Femeie");
	d.appendChild(gen_2);
	d.appendChild(tx_2);
	var br_4 = document.createElement("br");
	d.appendChild(br_4);
	
	var txt_3 = document.createTextNode("Spuneti-ne parerea voastra!")
	d.appendChild(txt_3);
	var br_5 = document.createElement("br");
	d.appendChild(br_5);
	var txt_area = document.createElement("textarea");
	txt_area.rows = "5";
	txt_area.cols = "40";
	
	d.appendChild(txt_area);

	
}

function add_options (a, b) {
	var d = document.getElementById("papusi");
	var dv = document.createElement("LI");
	dv.onclick = papusa_selectata;
	dv.onmouseover = function (e) {
		this.style.backgroundColor = "blue";
	};
	dv.onmouseout = function () {
		this.style.backgroundColor = "inherit";
	};
	//dv.ondblclick = function (e) {
		//var par = this.parentElement;
		//par.insertBefore(this, par.firstChild);
	//}
	dv.classList.add ("produse");
	dv.innerHTML = a + b;
	dv.value = b.substring (0, b.length -1 );
	d.appendChild(dv);
	
}

function sorteaza_pret (){
	var d = document.getElementsByClassName("produse");
	var v = [];
	var b;
	var swiching = true;
	var shoudSw;
	while (swiching)
	{
		swiching = false;
		b = document.getElementsByClassName("produse");
		
		for ( i = 0 ; i < b.length - 1; i++)
		{
			shoudSw = false;
		if (b[i].value > b[i + 1].value)
		{
			shoudSw = true;
			break;
		}
			
		}
		if (shoudSw) 
		{
			b[i].parentNode.insertBefore(b[i+1], b[i]);
			swiching = true;
		}
	}

}

function sorteaza_nume () {
	var d = document.getElementsByClassName("produse");
	var v = [];
	var v_sortat = [];
	for ( var i = 0; i < d.length; i++)
	{
		v.push(d[i].innerHTML);
		v_sortat.push(d[i].innerHTML);
		
	}
	v_sortat.sort();
	for (var i = 0; i < d.length; i++)
	{
		d[i].innerText = v_sortat[i];
	}
	
	var x = setTimeout(
		function () {
		for (var i = 0; i < d.length; i++)
	
		d[i].innerText = v[i];

		}, 10000
	);
}



function remove_input(elem) {
	var p = elem.parentNode;
	var text_node = elem.nextSibling;
	p.removeChild(text_node);
	var br = elem.nextSibling;
	p.removeChild (br);
	p.removeChild(elem);
}

function papusa_selectata() {
	var div = document.getElementById("cos_cumparaturi");
	if(!div)
	{
		div = document.createElement("div");
		div.classList.add("container");
		div.setAttribute("ID", "cos_cumparaturi");
		document.body.appendChild(div);
	}
	
	var p = document.getElementById("produse_selectate");
	if (!p)
	{
		p = document.createElement("p");
		p.setAttribute("ID", "produse_selectate");
		document.body.appendChild(p);
		div.appendChild(p);
	}
	nr_total ++;
	suma_totala += this.value;
	p.innerHTML = "Ati selectat " + nr_total+ " produse in valoare de "+ suma_totala+"$";
	
	var f = document.getElementById("Option");
	if (!f)
	{
		f = document.createElement("form");
		f.setAttribute("ID", "Option");
		var btn = document.createElement("Input");
		btn.type = "submit";
		btn.value = "Cumpara";
		f.appendChild(btn);
		f.onsubmit = function () {
			alert("Multimim pentru ca ati cumparat la noi, "+ localStorage.getItem("nume")+" !");
		};
		
		//document.body.appendChild(f);

		div.appendChild(f);
	}
	var b = f.lastElementChild;
	var op = document.createElement("input");
	op.value = this.value;
	op.type = "checkbox";
	op.name = "papusa"+nr_total;
	op.checked = "true";
	var x;
	op.onclick = function (){
		if (op.checked)
		{
			nr_total ++;
			suma_totala += parseInt(this.value);
			p.innerHTML = "Ati selectat " + nr_total+ " produse in valoare de "+ suma_totala+"$";
			clearTimeout(x);
		}
		else
		{
		nr_total --;
		suma_totala -= this.value;
		p.innerHTML = "Ati selectat " + nr_total+ " produse in valoare de "+ suma_totala+"$";
		
		x = setTimeout(remove_input, 2500, this);
		}
		
	};
	var t = document.createTextNode(this.innerHTML);
	var br = document.createElement("br");
	f.insertBefore(op, b);
	f.insertBefore(t, b);
	f.insertBefore(br, b);
	
	var dv = document.getElementById("rating");
	
	
	document.body.insertBefore(f, dv);
}

function selecteaza(){
	
	var s = this.children[this.selectedIndex].value;
	var prod = document.getElementsByClassName("produse");
	for ( var i = 0; i < prod.length; i++)
	{
		var sir = prod[i].innerHTML;
		if (sir.indexOf(s) !== -1) prod[i].style.border = "2px solid black";
		else prod[i].style.display = "none";
	}
	
	setTimeout(function () {
		for ( var i = 0; i < prod.length; i++)
		{
		var sir = prod[i].innerHTML;
		if (sir.indexOf(s) !== -1) prod[i].style.border = "none";
		else prod[i].style.display = "list-item";
	}
	}, 2000);
}