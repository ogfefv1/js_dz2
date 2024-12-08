let calculateArea = function (length, width = length) 
{
    return length * width;
}

document.write(`Площадь: ${calculateArea(5, 10)} <br/>`);
document.write(`Площадь: ${calculateArea(7)} <br/>`);