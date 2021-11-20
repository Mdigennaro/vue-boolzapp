
const app = new Vue({
  
  el:'#app',
  
  data:{
    contacts: [
      {
        name: 'Michele',
        avatar: 'img/avatar_1.jpg',
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
        }],
      },
      {
        name: 'Fabio',
        avatar: 'img/avatar_2.jpg',
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
        }],
      },
      {
        name: 'Samuele',
        avatar: 'img/avatar_3.jpg',
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
        }],
      },
      {
        name: 'Luisa',
        avatar: 'img/avatar_4.jpg',
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
        }],
      },
    ],
    
    messaggioUser:'',
    answerUser:'ok',
    searchUser:'',
    activeUser: 0,
  },
  
  methods:{
    filterContacts() {
      console.log('stiamo facenoe partire il filtro');
      for(contact in this.contacts){

        let nome = this.contacts[contact].name;

        let nomeLower = this.contacts[contact].name.toLowerCase();

        let nomeUpper = this.contacts[contact].name.toUpperCase();

        this.contacts[contact].visible = false;

        if(nomeLower.includes(this.searchUser)||
        nome.includes(this.searchUser) || nomeUpper.includes(this.searchUser)){

          this.contacts[contact].visible = true;

        }
      }
        
    },

    //Ricavo l'utente attivo
    showName(index){
      console.log('utente attivo', index);
      this.activeUser = index;
    },
    
    //Ricavo il contenuto dell'ultimo messaggio
    lastMsgs(index){
      let lastMsg = this.contacts[index].messages[this.contacts[index].messages.length - 1].message;
      
      if (lastMsg.length > 20) {
        lastMsg = lastMsg.substr(0,20) + '...';
      }
      return lastMsg;
    },
    
     //Ricavo la data dell'ultimo messaggio
    lastDates(index){
      let lastDate = this.contacts[index].messages[this.contacts[index].messages.length - 1].date;
      
      return lastDate;
    },
    
    //inserisco il contenuto dell'input nella chat
    insertMsg(){
      if (this.messaggioUser.length >= 1) {

        //creo l'oggetto dove inserire l'input
        const newMsg= {
          date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
          message: this.messaggioUser,
          status: 'sent',
        }
        
        //Pusho il contenuto dell'input nell'array di oggetti in modo da poterlo vedere
        this.contacts[this.activeUser].messages.push(newMsg);
        //svuoto la stringa dopo aver inserito il contenuto
        this.messaggioUser='';
        
        //creo la risposta automatica ritardando di un secondo la visualizzazione su schermo
        setTimeout(() => {
          const answerMsg={
            date: dayjs().format("DD/MM/YYYY HH:mm:ss"),  
            message: this.answerUser,
            status:'received',
          }
          
          this.contacts[this.activeUser].messages.push(answerMsg);
        }, 1000);
        
      }
    },

    
  },

})


//PLUG IN
dayjs.extend(window.dayjs_plugin_customParseFormat);


