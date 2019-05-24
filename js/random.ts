let nextIndex = 0;
let shownIndex = -1;
let numbersDrawn: number[] = [];

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

window.onload = () => {
    document.getElementById('prize').setAttribute("style", "display:none;");
    document.getElementById('digits').setAttribute("style", "display:none;");

    // KEY: Goto Next Price | GoTo Previous Price | Enter Pressed (Calculate Random) | Clear Random
    document.getElementById('body').onkeydown = (event: KeyboardEvent) => {
        // Goto Next Price
        if (event.key === 'ArrowRight') {
            showPrice();
            return;
        }

        // GoTo Previous Price
        if (event.key === 'ArrowLeft') {
            if (nextIndex > 1) {
                nextIndex--; // show same again
                nextIndex--; // show previous
                showPrice();
                return;
            }
        }

        // Enter Pressed (Calculate Random)
        if (event.key === 'Enter' && shownIndex >= 0) {

            let isCalculateNewRandom = true;
            let random = 0;
            while (isCalculateNewRandom) {
                isCalculateNewRandom = false;
                random = calculateRandom();
                if (numbersDrawn.length === 0) { isCalculateNewRandom = false; };
                numbersDrawn.forEach(value => { if (value === random) { console.log(random.toString() + '***** SAME'); isCalculateNewRandom = true; return; } });
            }
            numbersDrawn.push(random);
            prices[shownIndex].winningNumber = random;
            console.log(random);

            // digit 1
            let timerId1 = setInterval(() => { document.getElementById('digit1').innerText = (Math.floor(Math.random() * 9) + 0).toString(); }, 50);
            setTimeout(() => { document.getElementById('digit1').innerText = random.toString().charAt(0); }, 2100);
            setTimeout(() => { clearInterval(timerId1); }, 2000);
            // digit 2
            let timerId2 = setInterval(() => { document.getElementById('digit2').innerText = (Math.floor(Math.random() * 9) + 0).toString(); }, 50);
            setTimeout(() => { document.getElementById('digit2').innerText = random.toString().charAt(1); }, 4100);
            setTimeout(() => { clearInterval(timerId2); }, 4000);
            // digit 3
            let timerId3 = setInterval(() => { document.getElementById('digit3').innerText = (Math.floor(Math.random() * 9) + 0).toString(); }, 50);
            setTimeout(() => { document.getElementById('digit3').innerText = random.toString().charAt(2); }, 6100);
            setTimeout(() => { clearInterval(timerId3); }, 6000);

            return;
        }

        // Clear Random
        if (event.key === 'Delete') {
            prices[shownIndex].winningNumber = null;
            document.getElementById('digit1').innerText = ' ';
            document.getElementById('digit2').innerText = ' ';
            document.getElementById('digit3').innerText = ' ';
        }
    };
};

function showPrice() {
    if (nextIndex >= prices.length) { return; }

    shownIndex = nextIndex;
    document.getElementById('prize').removeAttribute("style");
    document.getElementById('digits').removeAttribute("style");

    document.getElementById('level').innerText = prices[shownIndex].level.toString();
    document.getElementById('title').innerText = prices[shownIndex].title;
    document.getElementById('sponsor').innerText = prices[shownIndex].sponsor;
    document.getElementById('value').innerText = prices[shownIndex].value.toString();

    document.getElementById('digit1').innerText = ' ';
    document.getElementById('digit2').innerText = ' ';
    document.getElementById('digit3').innerText = ' ';

    if (prices[shownIndex].winningNumber) {
        document.getElementById('digit1').innerText = prices[shownIndex].winningNumber.toString().charAt(0);
        document.getElementById('digit2').innerText = prices[shownIndex].winningNumber.toString().charAt(1);
        document.getElementById('digit3').innerText = prices[shownIndex].winningNumber.toString().charAt(2);
    }

    nextIndex++;
}

function calculateRandom(): number {
    return Math.floor(Math.random() * 500) + 101;
}

interface IPrice {
    level: number;
    title: string;
    sponsor: string;
    value: number;
    winningNumber?: number;
}
