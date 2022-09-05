let nodelist=document.querySelectorAll('button:not(.bt)');
let bt=document.getElementById("bt");
let o=document.getElementById("o");
let m=document.getElementById("m");
let tm=document.getElementById("trademark");
let t=1;
function btc()
{
if(t===1)
	{ 
	mode("#181818","#505050","#202020","white");
	}
else if(t===2)
	{ 
	mode("red","blue","yellow","black");
	}
else if(t===3)
	{ 
	mode("green","cyan","orange","black");
	}
else if(t===4)
	{
	mode("#E0E0E0","#B0B0B0","#E8E8E8","black");
	}
else
	{ 
	mode("","","","");
	t=1;
	}
}
function mode(outerC,midC,innerC,textC)
{
	o.style.background=outerC;
	m.style.background=midC;
	tm.style.color=textC;
	for(let i=0;i<nodelist.length;i++){
	nodelist[i].style.backgroundColor=innerC;
	nodelist[i].style.color=textC;}
	bt.innerText=t;
	t++;
}

let display=document.getElementById("screen1");
let display2=document.getElementById("screen2")
let matheqn="";
let btns = document.querySelectorAll('button:not(.bt)');
for (btn of btns) 
{	
	btn.addEventListener('click',btnclick);
}
function btnclick(e)
{
	switch(e.target.innerText)
	{
		case '×':
			matheqn+="*";
			display.innerText+=e.target.innerText;		
			break;
		case '÷':
			matheqn+="/";
			display.innerText+=e.target.innerText;
			break;
		case '⌫':
			display.innerText=display.innerText.slice(0,-1);
			matheqn=matheqn.slice(0,-1);
			break;
		case 'A/C':
			display.innerText="";
			display2.innerText="";
			matheqn="";
			break;
		case '=':
			try{
				display2.innerText=eval(matheqn);
			}
			catch{
				display.innerText="SYNTAX ERROR !";
			}
			    break;
		default:		
			display.innerText+=e.target.innerText;	
			matheqn+=e.target.innerText;
	}	
}