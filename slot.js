var chip_p = document.getElementById("chip_iznos");
var dobitak_p = document.getElementById("dobitak_iznos");
var broj1A = document.getElementById("prvi_A");
var broj2A = document.getElementById("drugi_A");
var broj3A = document.getElementById("treci_A");
var broj1B = document.getElementById("prvi_B");
var broj2B = document.getElementById("drugi_B");
var broj3B = document.getElementById("treci_B");
var broj1C = document.getElementById("prvi_C");
var broj2C = document.getElementById("drugi_C");
var broj3C = document.getElementById("treci_C");
var br1A, br2A, br3A, br1B, br2B, br3B, br1C, br2C, br3C;

var ubaci_pare = Number(prompt("Upišite koliko evra očete uplatit (min 5e, max kolko ti srce oće):"));
while (isNaN(ubaci_pare) || ubaci_pare < 5)
{
    ubaci_pare = Number(prompt("Alo bre, ništa ispod 5 evra. Upiši koliko evra očeš uplatit:"));
}

var chip = Number(prompt("Upiši kolki čip oš igrat (min 0.2E, max 5E):"));
while (isNaN(chip) || chip < 0.2 || chip > 5)
{
    chip = Number(prompt("Alo retaju, od 0.2 do 5 evra. Upiši kolki čip oš igrat:"));
}   

chip_p.innerHTML = chip + " EUR";
dobitak_p.innerHTML = ubaci_pare + " EUR";

function igra()
{
    var win_counter = 0;

    if (ubaci_pare > chip)
    {
        br1A = getRandomInt();
        br2A = getRandomInt();
        br3A = getRandomInt();
        br1B = getRandomInt();
        br2B = getRandomInt();
        br3B = getRandomInt();
        br1C = getRandomInt();
        br2C = getRandomInt();
        br3C = getRandomInt();

        broj1A.innerHTML = br1A;
        broj2A.innerHTML = br2A;
        broj3A.innerHTML = br3A; 
        broj1B.innerHTML = br1B;
        broj2B.innerHTML = br2B;
        broj3B.innerHTML = br3B; 
        broj1C.innerHTML = br1C;
        broj2C.innerHTML = br2C;
        broj3C.innerHTML = br3C; 

        function match_counter(win_counter)
        {
            if (br1A == br1B && br1A == br1C)
            {win_counter++;}

            if (br2A == br2B && br2A == br2C)
            {win_counter++;}

            if (br3A == br3B && br3A == br3C)
            {win_counter++;}

            if (br1A == br2B && br1A == br3C)
            {win_counter++;}

            if (br3A == br2B && br3A == br1C)
            {win_counter++;}   
            
            return win_counter;
        }

        if ((br1A == br1B && br1A == br1C) ||
            (br2A == br2B && br2A == br2C) ||
            (br3A == br3B && br3A == br3C) ||
            (br1A == br2B && br1A == br3C) ||
            (br3A == br2B && br3A == br1C))
        {
            ubaci_pare += 50 * chip * match_counter(win_counter);
            dobitak_p.innerHTML = ubaci_pare.toFixed(2) + " EUR";
            alert("EVO GA ZARADIOS DNS NESTO!!! 50 EUR x čip: " + chip + " EUR x " + match_counter(win_counter) + "X dobitaka == " + (50 * chip * match_counter(win_counter)) + " EUR");
        }

        else
        {
            ubaci_pare -= chip;
            dobitak_p.innerHTML = ubaci_pare.toFixed(2) + " EUR";
        }
    }

    else
    {
        alert("GAME OVER LUZERU!");
    }
}

function getRandomInt() 
{
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(11);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}