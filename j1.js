let J1 = function(x,y)
{
    if
     (x<y) return -1;
    else
     if
     (x>y) 
     return 1;
    else
     return 0;
}

let J_1 = (x,y)=>
{ 
    if 
    (x<y)
     return -1; 
    else
     if
     (x<y)
      return 1;
    else
     return 0;
}

document.write(`Результат = ${ J_1(1,5)} <br/>`);
document.write(`Результат = ${ J_1(5,1)} <br/>`);
document.write(`Результат = ${ J_1(1,1)} <br/>`);