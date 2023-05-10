var screen =document.getElementById("screen");
var enter =document.getElementById("enter");

var sum = 0;
var result =0;

enter.addEventListener('click',calc)
function display(s)
{
    screen.value += s;
}
function clearScreen()
{
    screen.value="";
}
function deleteChar()
{
    result =screen.value;
    screen.value =result.slice(0,result.length-1)
}
var n = screen.value;
function calc()
{   
    try{
        var q =eval(screen.value);
    if(q== undefined)
    {
        screen.value = '0';
        return;
    }
    screen.value = q;
    }
    catch(err)
    {
        screen.value="Error";
    }
}

