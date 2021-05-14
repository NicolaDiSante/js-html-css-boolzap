const app = new Vue({

  el: '#app',
  data: {

    user: {
      name: 'Nome Utente',
      avatar: '_io'
    },

    activeIndex: 0,
    ricerca: "",
    

    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
    ],
    msgSent: "",
    rdmAnswer: ['non va bene', 'chi sei?', 'cosa vuoi?', 'vattaddurme!'],
    active: false,
  },

  methods: {

  addMsg(){
    let index = this.activeIndex
    this.contacts[index].messages.push({
      date: dayjs().format('DD/MM/YYYY HH:mm:ss'), 
      status: 'sent',
      text: this.msgSent
    }),

    setTimeout(() => {
      let risp = this.rdmAnswer[Math.floor(Math.random() * this.rdmAnswer.length- 1) + 1]
      this.contacts[index].messages.push({
        date: dayjs().format('DD/MM/YYYY HH:mm:ss'), 
        status: 'received',
        text: risp
      })
   }, 1000);

   this.msgSent = "";

    
  },

  lastAccess(index){
    let contactMsg = this.contacts[index].messages;
    return contactMsg[contactMsg.length -1].date;
  },

  lastMsg(index){
    let contactMsg = this.contacts[index].messages;
    if(contactMsg[contactMsg.length - 1].text.length > 20){
      return contactMsg[contactMsg.length - 1].text.slice(0, 30) + "..."
    }
    return contactMsg[contactMsg.length - 1].text;
  },

   toggle(){
    
      this.active = !this.active
    
    
  } 

 
  

  
 
 
}}

)
