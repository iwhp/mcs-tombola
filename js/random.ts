window.onload = () => {
    let currentIndex = 0;
    document.getElementById('prize').setAttribute("style", "display:none;");
    document.getElementById('digits').setAttribute("style", "display:none;");

    document.getElementById('body').onclick = () => {
        if (currentIndex >= prices.length) { return; }

        document.getElementById('prize').removeAttribute("style");
        document.getElementById('digits').removeAttribute("style");

        document.getElementById('level').innerText = prices[currentIndex].level.toString();
        document.getElementById('title').innerText = prices[currentIndex].title;
        document.getElementById('sponsor').innerText = prices[currentIndex].sponsor;
        document.getElementById('value').innerText = prices[currentIndex].value.toString();

        document.getElementById('digit1').innerText = ' ';
        document.getElementById('digit2').innerText = ' ';
        document.getElementById('digit3').innerText = ' ';
        //document.getElementById('digit4').innerText = ' ';

        currentIndex++;
    };

    document.getElementById('body').onkeydown = () => {
        let random = Math.floor(Math.random() * 500) + 101;
        console.log(random);

        // digit 1
        let timerId1 = setInterval(() => { document.getElementById('digit1').innerText = (Math.floor(Math.random() * 9) + 0).toString(); }, 50);
        setTimeout(() => { document.getElementById('digit1').innerText = random.toString().charAt(0); }, 1100);
        setTimeout(() => { clearInterval(timerId1); }, 1000);
        // digit 2
        let timerId2 = setInterval(() => { document.getElementById('digit2').innerText = (Math.floor(Math.random() * 9) + 0).toString(); }, 50);
        setTimeout(() => { document.getElementById('digit2').innerText = random.toString().charAt(1); }, 2100);
        setTimeout(() => { clearInterval(timerId2); }, 2000);
        // digit 3
        let timerId3 = setInterval(() => { document.getElementById('digit3').innerText = (Math.floor(Math.random() * 9) + 0).toString(); }, 50);
        setTimeout(() => { document.getElementById('digit3').innerText = random.toString().charAt(2); }, 3100);
        setTimeout(() => { clearInterval(timerId3); }, 3000);
        // digit 4
        //let timerId4 = setInterval(() => { document.getElementById('digit4').innerText = (Math.floor(Math.random() * 9) + 0).toString(); }, 50);
        //setTimeout(() => { document.getElementById('digit4').innerText = random.toString().charAt(3); }, 4100);
        //setTimeout(() => { clearInterval(timerId4); }, 4000);
    };
};

interface IPrice {
    level: number;
    title: string;
    sponsor: string;
    value: number;
}

let prices: IPrice[] = [
    { level: 10, title: 'Konsumationsgutschein', sponsor: 'Long John Bar, Schaan', value: 200.00 },
    { level: 9, title: 'Einkaufsgutschein', sponsor: 'Hermann Quaderer AG, Schaan', value: 250.00 },
    { level: 8, title: 'Akku Bohrmaschine Hilti 2F2A', sponsor: 'HILTI AG, Schaan', value: 350.00 },
    { level: 7, title: 'Eine Übernachtung Juniorsuite', sponsor: 'Park Hotel Sonnenhof ****, Vaduz', value: 500.00 },
    { level: 6, title: 'Barolo Bric del Fiasc, Paolo Scavino 2012', sponsor: 'Ritter Weine, Schaan', value: 510.00 },
    { level: 5, title: 'Kaffeevollautomat Jura D400', sponsor: 'LKW, Schaan', value: 720.00 },
    { level: 4, title: '½ Grabser Riet-Schwein', sponsor: 'Fleisch Reich, Grabs', value: 750.00 },
    { level: 3, title: 'Einkaufsgutschein', sponsor: '1912 Fachgeschäft für Mode, Schaan', value: 1000.00 },
    { level: 2, title: 'Fitness Super Premium Abo', sponsor: 'Fitnesshaus, Schaan & Ruggell', value: 1690.00 },
    { level: 1, title: 'Cresta E-Bike Enviolo Gates', sponsor: 'Sele Radsport, Eschen', value: 4098.00 },
];