//#region MILESTONES
// Milestone 1 [✓]
// - [✓] Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// - [✓] Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
// Milestone 2 [✓]
// - [✓] Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// - [✓] Click sul contatto mostra la conversazione del contatto cliccato
// Milestone 3 [✓]
// - [✓] Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// - [✓] Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Milestone 4
// - Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// BONUS:
// Milestone 5
// - Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
// - Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

//#endregion

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: [{
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [{
          date: '10/01/2020 15:30:55',
          message: 'Hai portato a spasso il cane?',
          status: 'sent'
        },
        {
          date: '10/01/2020 15:50:00',
          message: 'Ricordati di dargli da mangiare',
          status: 'sent'
        },
        {
          date: '10/01/2020 16:15:22',
          message: 'Tutto fatto!',
          status: 'received'
        }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [{
          date: '20/03/2020 16:30:00',
          message: 'Ciao come stai?',
          status: 'sent'
        },
        {
          date: '20/03/2020 16:30:55',
          message: 'Bene grazie! Stasera ci vediamo?',
          status: 'received'
        },
        {
          date: '20/03/2020 16:35:00',
          message: 'Mi piacerebbe ma devo andare a fare la spesa.',
          status: 'received'
        }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [{
          date: '28/03/2020 10:10:40',
          message: 'La Marianna va in campagna',
          status: 'received'
        },
        {
          date: '28/03/2020 10:20:10',
          message: 'Sicuro di non aver sbagliato chat?',
          status: 'sent'
        },
        {
          date: '28/03/2020 16:15:22',
          message: 'Ah scusa!',
          status: 'received'
        }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [{
          date: '10/01/2020 15:30:55',
          message: 'Lo sai che ha aperto una nuova pizzeria?',
          status: 'sent'
        },
        {
          date: '10/01/2020 15:50:00',
          message: 'Si, ma preferirei andare al cinema',
          status: 'received'
        }
        ],
      },
      ],
      activeChat: 0,
      userText: '',
      contactSearch: ''
    };
  },
  methods: {
    getUserImage(index) {
      const userImage = `img/avatar${this.contacts[index].avatar}.jpg`;
      return userImage;
    },
    showActiveChat(clickedIndex) {
      this.activeChat = clickedIndex;
    },
    printUserText(activeChat) {
      const newText = {
        date: '20/03/2020 16:30:00',
        message: this.userText,
        status: 'sent'
      };
      if (this.userText.length > 0) {
        this.contacts[activeChat].messages.push(newText);
        this.userText = '';
        this.sendReply = setTimeout(() => { this.receiveContactReply(activeChat); }, 1000);
      }
    },
    receiveContactReply(activeChat) {
      const contactReply = {
        date: '20/03/2020 16:30:00',
        message: 'ok',
        status: 'received'
      };
      console.log('sent');
      this.contacts[activeChat].messages.push(contactReply);
    },
    searchContact() {
      this.contacts.forEach((name, index) => {
        if (!this.contacts[index].name.toLowerCase().includes(this.contactSearch.toLowerCase())) {
          this.contacts[index].visible = false;
          console.log(this.contacts[index].visible);
        } else {
          this.contacts[index].visible = true;
        }

      });
    }
  },
  mounted() {
    console.log(this.contacts[0].visible);
  }
}).mount('#app');

// - Ricerca utenti: scrivendo qualcosa nell’input a sinistra, 
// vengono visualizzati solo i contatti il cui nome contiene le lettere inserite 
// (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

// confronto quello che cerca l'utente con i vari nomi e rendo visible solo quelli che includono i caratteri cercati

// if (list.pokemon[i].name.toLowerCase().includes(userSearch.toLowerCase())) {
//   pokemonFound.push(list.pokemon[i])
//   // e rigenero le singole card
//   generatorCard (list.pokemon[i])

// }