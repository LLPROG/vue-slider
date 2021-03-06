const app = new Vue({
	el: '#root', //container dove Vue agisce
	data: {
        indexCards: 0,
		arrSlides: [
			{
				title: 'Svezia',
				img:'01.jpg',
				text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
			},
            {
				title: 'Svizzera',
				img:'02.jpg',
				text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
			},
            {
				title: 'Gran Bretagna',
				img:'03.jpg',
				text: 'Lorem ipsum.',
			},
            {
				title: 'Germania',
				img:'04.jpg',
				text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
			},
            {
				title: 'Paradise',
				img:'05.jpg',
				text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum.',
			},
		],

        create: null,
	},
    methods: {
        changeImageUp() {
            if (this.indexCards < this.arrSlides.length - 1) {
                this.indexCards++
                console.log(this.indexCards);
            } else {
                this.indexCards = 0;

            }
        },
        changeImageDown() {
            if (this.indexCards == 0) {
                this.indexCards = this.arrSlides.length - 1;
            } else {
                this.indexCards--
                console.log(this.indexCards);
            }
        },
        change(i) {
            this.indexCards = i;
        },
        interval () {
            
            this.create = setInterval(() => {
                if (this.indexCards < this.arrSlides.length - 1) {
                    this.indexCards++
                } else {
                    this.indexCards = 0;
    
                }
            }, 2000)
        },
        mouseover() {
            clearInterval(this.create);
        },
        mouseout() {
            this.interval();
        },   
    },
    created () {
        this.interval();
    },
});






/*

Descrizione:

Bonus:

2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente

3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

Consiglio del giorno:
- regola d'oro: riciclare ovunque possibile! E il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
Buon lavoro e buon divertimento!

*/