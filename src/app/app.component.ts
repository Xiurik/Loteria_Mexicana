import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //#region 'Variables'
  loteria = [
    [1, 'gallo', './assets/images/1.jpg'],
    [2, 'diablito', './assets/images/2.jpg'],
    [3, 'dama', './assets/images/3.jpg'],
    [4, 'catrin', './assets/images/4.jpg'],
    [5, 'paraguas', './assets/images/5.jpg'],
    [6, 'sirena', './assets/images/6.jpg'],
    [7, 'escalera', './assets/images/7.jpg'],
    [8, 'botella', './assets/images/8.jpg'],
    [9, 'barril', './assets/images/9.jpg'],
    [10, 'arbol', './assets/images/10.jpg'],
    [11, 'melon', './assets/images/11.jpg'],
    [12, 'valiente', './assets/images/12.jpg'],
    [13, 'gorrito', './assets/images/13.jpg'],
    [14, 'muerte', './assets/images/14.jpg'],
    [15, 'pera', './assets/images/15.jpg'],
    [16, 'bandera', './assets/images/16.jpg'],
    [17, 'bandolon', './assets/images/17.jpg'],
    [18, 'violoncello', './assets/images/18.jpg'],
    [19, 'garza', './assets/images/19.jpg'],
    [20, 'pajaro', './assets/images/20.jpg'],
    [21, 'mano', './assets/images/21.jpg'],
    [22, 'bota', './assets/images/22.jpg'],
    [23, 'luna', './assets/images/23.jpg'],
    [24, 'cotorro', './assets/images/24.jpg'],
    [25, 'borracho', './assets/images/25.jpg'],
    [26, 'negrito', './assets/images/26.jpg'],
    [27, 'corazon', './assets/images/27.jpg'],
    [28, 'sandia', './assets/images/28.jpg'],
    [29, 'tambor', './assets/images/29.jpg'],
    [30, 'camaron', './assets/images/30.jpg'],
    [31, 'jaras', './assets/images/31.jpg'],
    [32, 'musico', './assets/images/32.jpg'],
    [33, 'arania', './assets/images/33.jpg'],
    [34, 'soldado', './assets/images/34.jpg'],
    [35, 'estrella', './assets/images/35.jpg'],
    [36, 'cazo', './assets/images/36.jpg'],
    [37, 'mundo', './assets/images/37.jpg'],
    [38, 'apache', './assets/images/38.jpg'],
    [39, 'nopal', './assets/images/39.jpg'],
    [40, 'alacran', './assets/images/40.jpg'],
    [41, 'rosa', './assets/images/41.jpg'],
    [42, 'calavera', './assets/images/42.jpg'],
    [43, 'campana', './assets/images/43.jpg'],
    [44, 'cantarito', './assets/images/44.jpg'],
    [45, 'venado', './assets/images/45.jpg'],
    [46, 'sol', './assets/images/46.jpg'],
    [47, 'corona', './assets/images/47.jpg'],
    [48, 'chalupa', './assets/images/48.jpg'],
    [49, 'pino', './assets/images/49.jpg'],
    [50, 'pescado', './assets/images/50.jpg'],
    [51, 'palma', './assets/images/51.jpg'],
    [52, 'maceta', './assets/images/52.jpg'],
    [53, 'arpa', './assets/images/53.jpg'],
    [54, 'rana', './assets/images/54.jpg'],
  ];

  public card: any[] = [];
  public cards: any[] = [];
  public cards_ordered: any[] = [];

  public name_top = 'Frida Sofia Lopez Rodriguez';
  //#endregion 'Variables'

  //#region 'Angular LifeCycle'
  constructor() {}

  ngOnInit() {
    this.create_cards();
    // this.create_specific_cards();
  }
  //#endregion 'Angular LifeCycle'

  //#region 'General Methods'
  private get_random(min: number, max: number, invalid: number) {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    let exist = this.card.filter((obj) => obj[0] === random);
    while (exist.length > 0 || invalid == random) {
      random = Math.floor(Math.random() * (max - min + 1) + min);
      exist = this.card.filter((obj) => obj[0] === random);
    }
    return random;
  }

  private get_min_max(index: number) {
    let min = 0;
    let max = 0;

    if (index == 1 || index == 5 || index == 9 || index == 13) {
      min = 1;
      max = 14;
    } else if (index == 2 || index == 6 || index == 10 || index == 14) {
      min = 15;
      max = 28;
    } else if (index == 3 || index == 7 || index == 11 || index == 15) {
      min = 29;
      max = 36;
    } else {
      min = 37;
      max = 54;
    }

    return { min, max };
  }

  private create_card(invalid: number) {
    this.card = [];
    for (let i = 1; i < 16; i++) {
      // let min_max = this.get_min_max(i);
      // let random = this.get_random(min_max.min, min_max.max, invalid);
      let random = this.get_random(1, 54, invalid);
      let lote = this.loteria.filter((obj) => obj[0] === random)[0];
      if (i < 15) {
        this.card.push(lote);
      } else {
        lote = this.loteria.filter((obj) => obj[0] === invalid)[0];
        this.card.splice(5, 0, lote);
        this.card.splice(10, 0, lote);
      }
    }
  }

  public create_cards() {
    this.cards = [];
    this.cards_ordered = [];

    for (let i = 1; i <= 54; i++) {
      this.create_card(i);
      let card_copy = JSON.parse(JSON.stringify(this.card));
      card_copy.sort();
      while (this.cards_ordered.filter((obj) => obj === card_copy).length > 0) {
        this.create_card(i);
        card_copy = JSON.parse(JSON.stringify(this.card));
        card_copy.sort();
      }

      this.cards.push(JSON.parse(JSON.stringify(this.card)));
      this.cards_ordered.push(card_copy);
    }

    // this.showData();
  }

  public create_specific_cards() {
    this.name_top = 'Lidia Martinez Garcia';
    this.cards = [];
    this.cards_ordered = [];

    const personal_cards = [
      [15, 52, 33, 23, 17, 44, 8, 1, 18, 32, 44, 13, 35, 19, 9, 24],
      [25, 11, 13, 48, 41, 37, 53, 16, 7, 37, 36, 47, 49, 50, 54, 20],
      [14, 17, 20, 22, 16, 45, 52, 47, 3, 21, 45, 18, 10, 33, 38, 19],
      [12, 3, 48, 39, 10, 53, 54, 45, 13, 4, 54, 50, 33, 24, 16, 23],
      [8, 46, 7, 29, 22, 35, 23, 21, 31, 26, 35, 16, 17, 41, 47, 52],
      [31, 29, 47, 2, 6, 43, 30, 42, 25, 44, 43, 20, 21, 28, 26, 53],
      [44, 42, 7, 8, 45, 23, 35, 41, 1, 46, 23, 18, 50, 14, 9, 43],
      [27, 10, 29, 28, 31, 11, 15, 12, 26, 49, 11, 34, 17, 51, 52, 32],
    ];

    for (let i = 0; i < personal_cards.length; i++) {
      const element = personal_cards[i];
      this.card = [];
      element.forEach((t) => {
        let lote = this.loteria.filter((obj) => obj[0] === t)[0];
        this.card.push(lote);
      });
      this.cards.push(JSON.parse(JSON.stringify(this.card)));
    }
  }

  private showData() {
    this.cards.forEach((el) => {
      console.log(
        `${el[0][0].toString().length === 1 ? `0${el[0][0]}` : el[0][0]}-${
          el[1][0].toString().length === 1 ? `0${el[1][0]}` : el[1][0]
        }-${el[2][0].toString().length === 1 ? `0${el[2][0]}` : el[2][0]}-${
          el[3][0].toString().length === 1 ? `0${el[3][0]}` : el[3][0]
        }-${el[4][0].toString().length === 1 ? `0${el[4][0]}` : el[4][0]}-${
          el[5][0].toString().length === 1 ? `0${el[5][0]}` : el[5][0]
        }-${el[6][0].toString().length === 1 ? `0${el[6][0]}` : el[6][0]}-${
          el[7][0].toString().length === 1 ? `0${el[7][0]}` : el[7][0]
        }-${el[8][0].toString().length === 1 ? `0${el[8][0]}` : el[8][0]}-${
          el[9][0].toString().length === 1 ? `0${el[9][0]}` : el[9][0]
        }-${el[10][0].toString().length === 1 ? `0${el[10][0]}` : el[10][0]}-${
          el[11][0].toString().length === 1 ? `0${el[11][0]}` : el[11][0]
        }-${el[12][0].toString().length === 1 ? `0${el[12][0]}` : el[12][0]}-${
          el[13][0].toString().length === 1 ? `0${el[13][0]}` : el[13][0]
        }-${el[14][0].toString().length === 1 ? `0${el[14][0]}` : el[14][0]}-${
          el[15][0].toString().length === 1 ? `0${el[15][0]}` : el[15][0]
        }`
      );
    });
  }
  //#endregion 'General Methods'
}
