const app = new Vue({

  el:'#app',

  data:{
    users:[
      {
        img: 'img/avatar_1.jpg',
        nome: 'Michele',
        msg: 'Tutto fatto',
        ultimoAccesso: '10/01/2020 16:15:22'
      },
      {
        img: 'img/avatar_2.jpg',
        nome: 'Fabio',
        msg: 'Mi piacerebbe ma devo andare a ...',
        ultimoAccesso: '20/03/2020 16:35:00'
      },
      {
        img: 'img/avatar_3.jpg',
        nome: 'Samuele',
        msg: 'Ah scusa! ...',
        ultimoAccesso: '28/03/2020 16:15:22'
      },
      {
        img: 'img/avatar_4.jpg',
        nome: 'Luisa',
        msg: 'Si, ma preferirei andare al ci ...',
        ultimoAccesso: '10/01/2020 15:50:00'
      },
    ]
  }

})