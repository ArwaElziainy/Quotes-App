
var quotes = [
    '"Perfiction is found in accepting your imperfections."<br><br> --Bridgett Devoue',
    '"own your own story."<br><br> --Ali Edwards',
    '"Your biggest commitment must always be to yourself."<br><br> --Bridgett Devoue',
    '"Life is a journey, not a destination." <br><br> --Ralph Waldo Emerson',
    '"A little peace is all you need to calm your heart." <br><br> --Rithvik Singh',
    '"A room without books is like a body without a soul." <br><br> --Marcus Tullius Cicero',
    '“Believe in yourself. Stay in your own lane. There’s only one you.” <br><br> --Queen Latifah',
    '“Every child is an artist; the problem is staying an artist when you grow up.” <br><br> --Pablo Picasso',
    '“Art is a collaboration between God and the artist, and the less the artist does the better.” <br><br> --Andre Gide',
    '“One can have no smaller or greater mastery than mastery of oneself.” <br><br> --Leonardo da Vinci'
]

var used = [];


function newQuote() {
    var phrase = document.getElementById('phrase');

    var unUsed = quotes.filter(
        function (quote) {
            return !used.includes(quote);
        }
    );
    if (unUsed.length === 0) { 
        used = [];
        unUsed = quotes;
    }
    var random = Math.floor(Math.random() * unUsed.length);
    var randomQuote = unUsed[random];
    used.push(randomQuote);
    phrase.innerHTML = randomQuote;
   
}
