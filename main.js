var mouseEvent="empty";
var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
Color="red";
Width_of_line="10";
Radius="3";
var last_position_of_x, last_position_of_y;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    
    Color=document.getElementById("Color").value;
    Width_of_line=document.getElementById("Width_of_line").value;
    Radius=document.getElementById("Radius").value;
    mouseEvent= "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseuup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e);
{
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x= e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y= e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown"){
        console.log("current position of x and y coordinates = ");
        console.log("x = "+ current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = Color;
        ctx.lineWidth = Width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, Radius, 0, 2 * Math.PI);
        ctx.stroke();
    mouseEvent="mousemove";}
}
