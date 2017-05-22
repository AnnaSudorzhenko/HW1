var mes = prompt("Сколько памяти? (32Гб, 128Гб, 256Гб):");
var color = prompt("Какого цвета? (red, rose gold, gold, black, silver, jet black):");


while (mes!=32 || mes!=128 || mes!=256) {
    switch (mes) {
        case '32': {
            document.write("Цена: 16 000");
            break;
        }
        case '128': {
            document.write("Цена: 24 000");
            break;
        }
        case '256': {
            document.write("Цена: 27 500");
            break;
        }
    }
}

var img = document.createElement('img');

switch (color) {
    case 'Red': case 'red':{
        img.src='1.png';
        break;
}
    case 'Rose gold': case 'rose gold': {
        img.src='rose%20gold.jpeg';
        break;
}
    case 'Gold': case 'gold': {
        img.src='gold.jpg';
        break;
}
    case 'Black': case 'black': {
        img.src='black.png';
        break;
}
    case 'Silver': case 'silver': {
        img.src='silver.png';
        break;
}
    case 'Jet black': case 'jet black': {
        img.src='jet%20black.png';
        break;
}
    default: {document.write('Телефона такого цвета не существует.')}
}

document.body.appendChild(img);


