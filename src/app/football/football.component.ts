import { Component, OnInit } from '@angular/core';

export interface PlayerDetails {
  id: number
  avatar: string
  name:string,
  lastName:string,
  age:string,
  positioncolor: string,
  position: string,
  club:string
  clubName:string,
  property:any
}

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.scss']
})


export class FootballComponent implements OnInit {
  players: Array<PlayerDetails> = [
    
    {
      id:1,
      avatar:'/assets/images/club/play1.png',
      name:'Pedri',
      lastName:'Pedro Pedri',
      age:'20',
      positioncolor: 'green',
      position: 'CM',
      club:'/assets/images/club/club1.png',
      clubName:'Barcelona',
      property:{
        value: "$99000",
        wage: "$000",
        release: "$000",
        athleticism: 80,
        technicalAbility: 90,
        rate: 90,
        shooting: 70,
        passing: 50,
        defending: 90,
        height:173
      }

    },
    {
      id:2,
      avatar:'/assets/images/club/play2.png',
      name:'Cucurella',
      lastName:'Marc Cucurella',
      clubName:'Chelsea',


      age:'24',
      positioncolor: 'yellow',
      position: 'RB',
      club:'/assets/images/club/club2.png',
      property:{
        value: "$967889",
        wage: "$44000",
        release: "$000",
        athleticism: 70,
        technicalAbility: 60,
        rate: 70,
        shooting: 50,
        passing: 80,
        defending: 40,
        height:183
      }
    },

    {
      id:3,
      avatar:'/assets/images/club/play3.png',
      name:' Saka',
      lastName:'Bukayo Saka',
      clubName:'Arsenal',

      age:'21',
      positioncolor: 'green',
      position: 'RW',
      club:'/assets/images/club/club3.png',
      property:{
        value: "$99",
        wage: "$666000",
        release: "$9000000",
        athleticism: 30,
        technicalAbility: 30,
        rate: 30,
        shooting: 50,
        passing: 500,
        defending: 40,
        height:173

      }
    },

    {
      id:4,
      avatar:'/assets/images/club/play4.png',
      name:'J. Sancho',
      lastName:'Jadon Sancho',
      clubName:'Manchester',

      age:'23',
      positioncolor: 'green',
      position: 'LF',
      club:'/assets/images/club/club4.png',
      property:{
        value: "$99",
        wage: "$666000",
        release: "$9000000",
        athleticism: 30,
        technicalAbility: 30,
        rate: 30,
        shooting: 50,
        passing: 50,
        defending: 40,
        height:173
      }
    },

    {
      id:5,
      avatar:'/assets/images/club/play5.png',
      name:'Caciedo',
      lastName:'Moises Caciedo ',
      clubName:'BrentFord',

      age:'21',
      positioncolor: 'yellow',
      position: 'DM',
      club:'/assets/images/club/club5.png',
      property:{
        value: "$99",
        wage: "$66000",
        release: "$900000",
        athleticism: 70,
        technicalAbility: 80,
        rate: 90,
        shooting: 50,
        passing: 60,
        defending: 40,
        height:163
      }
    },

    {
      id:6,
      avatar:'/assets/images/club/play6.png',
      name:'Mason',
      lastName:'Mason Mount',
      clubName:'Chelsea',

      age:'24',
      positioncolor: 'red',
      position: 'AMF',
      club:'/assets/images/club/club2.png',
      property:{
  value: "$99",
        wage: "$66000",
        release: "$900000",
        athleticism: 70,
        technicalAbility: 80,
        rate: 90,
        shooting: 50,
        passing: 60,
        defending: 40,
        height:163
      }
    },

    {
      id:7,
      avatar:'/assets/images/club/play7.png',
      name:'Salah',
      lastName:'Mo Salah',
      clubName:'Liverpool',
      
      age:'30',
      positioncolor: 'green',
      position: 'RW',
      club:'/assets/images/club/club6.png',
      property:{
  value: "$99",
        wage: "$66000",
        release: "$900000",
        athleticism: 70,
        technicalAbility: 80,
        rate: 90,
        shooting: 50,
        passing: 60,
        defending: 40,
        height:163
      }
    },
    {
      id:8,
      avatar:'/assets/images/club/play8.png',
      name:'Kane',
      lastName:'Harry Kane',
      clubName:'Liverpool',

      age:'29',
      positioncolor: 'blue',
      position: 'ST',
      club:'/assets/images/club/club6.png',
      property:{
  value: "$99",
        wage: "$66000",
        release: "$900000",
        athleticism: 70,
        technicalAbility: 80,
        rate: 90,
        shooting: 50,
        passing: 60,
        defending: 40,
        height:163
      }
    },
    {
      id:9,
      avatar:'/assets/images/club/play9.png',
      name:'Mitoma',
      lastName:'Kaoru Mitoma',
      clubName:'BrentFord',

      age:'26',
      positioncolor: 'green',
      position: 'CM',
      club:'/assets/images/club/club5.png',
      property:{
  value: "$99",
        wage: "$66000",
        release: "$900000",
        athleticism: 70,
        technicalAbility: 80,
        rate: 90,
        shooting: 50,
        passing: 60,
        defending: 40,
        height:163
      }
    },
    {
      id:10,
      avatar:'/assets/images/club/play1.png',
      name:'pedri',
      lastName:'Harry Kane',
      clubName:'Barcelona',

      age:'20',
      positioncolor: 'red',
      position: 'CM',
      club:'/assets/images/club/club1.png',
      property:{
  value: "$99",
        wage: "$66000",
        release: "$900000",
        athleticism: 70,
        technicalAbility: 80,
        rate: 90,
        shooting: 50,
        passing: 60,
        defending: 40,
        height:163
      }
    },
    {
      id:11,
      avatar:'/assets/images/club/play1.png',
      name:'pedri',
      lastName:'Harry Kane',
      clubName:'Barcelona',

      age:'20',
      positioncolor: 'red',
      position: 'CM',
      club:'/assets/images/club/club1.png',
      property:{
  value: "$99",
        wage: "$66000",
        release: "$900000",
        athleticism: 70,
        technicalAbility: 80,
        rate: 90,
        shooting: 50,
        passing: 60,
        defending: 40,
        height:163
      }
    },
    {
      id:12,
      avatar:'/assets/images/club/play1.png',
      name:'pedri',
      lastName:'Harry Kane',
      clubName:'Barcelona',

      age:'20',
      positioncolor: 'red',
      position: 'CM',
      club:'/assets/images/club/club1.png',
      property:{
  value: "$99",
        wage: "$66000",
        release: "$900000",
        athleticism: 70,
        technicalAbility: 80,
        rate: 90,
        shooting: 50,
        passing: 60,
        defending: 40,
        height:163
      }
    },
  
  


  ]
  constructor() { }
  selectedPlayer: PlayerDetails = this.players[0]
  ngOnInit(): void {
  }

  setSelectedPlayer(player: PlayerDetails){
    this.selectedPlayer = player
  }


}
