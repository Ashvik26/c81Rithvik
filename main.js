canvas=document.getElementById("my_Canvas");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=1;
ctx.rect(350,250,400,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(450,300,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(550,300,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(650,300,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="orange";
ctx.lineWidth=5;
ctx.arc(500,350,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(600,350,40,0,2*Math.PI);
ctx.stroke();