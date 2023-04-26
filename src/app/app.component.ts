import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //#region 'Variables'
  private loteria = [
    [1, 'gallo', './assets/images/cartas/1.png'],
    [2, 'diablito', './assets/images/cartas/2.png'],
    [3, 'dama', './assets/images/cartas/3.png'],
    [4, 'catrin', './assets/images/cartas/4.png'],
    [5, 'paraguas', './assets/images/cartas/5.png'],
    [6, 'sirena', './assets/images/cartas/6.png'],
    [7, 'escalera', './assets/images/cartas/7.png'],
    [8, 'botella', './assets/images/cartas/8.png'],
    [9, 'barril', './assets/images/cartas/9.png'],
    [10, 'arbol', './assets/images/cartas/10.png'],
    [11, 'melon', './assets/images/cartas/11.png'],
    [12, 'valiente', './assets/images/cartas/12.png'],
    [13, 'gorrito', './assets/images/cartas/13.png'],
    [14, 'muerte', './assets/images/cartas/14.png'],
    [15, 'pera', './assets/images/cartas/15.png'],
    [16, 'bandera', './assets/images/cartas/16.png'],
    [17, 'bandolon', './assets/images/cartas/17.png'],
    [18, 'violoncello', './assets/images/cartas/18.png'],
    [19, 'garza', './assets/images/cartas/19.png'],
    [20, 'pajaro', './assets/images/cartas/20.png'],
    [21, 'mano', './assets/images/cartas/21.png'],
    [22, 'bota', './assets/images/cartas/22.png'],
    [23, 'luna', './assets/images/cartas/23.png'],
    [24, 'cotorro', './assets/images/cartas/24.png'],
    [25, 'borracho', './assets/images/cartas/25.png'],
    [26, 'negrito', './assets/images/cartas/26.png'],
    [27, 'corazon', './assets/images/cartas/27.png'],
    [28, 'sandia', './assets/images/cartas/28.png'],
    [29, 'tambor', './assets/images/cartas/29.png'],
    [30, 'camaron', './assets/images/cartas/30.png'],
    [31, 'jaras', './assets/images/cartas/31.png'],
    [32, 'musico', './assets/images/cartas/32.png'],
    [33, 'arania', './assets/images/cartas/33.png'],
    [34, 'soldado', './assets/images/cartas/34.png'],
    [35, 'estrella', './assets/images/cartas/35.png'],
    [36, 'cazo', './assets/images/cartas/36.png'],
    [37, 'mundo', './assets/images/cartas/37.png'],
    [38, 'apache', './assets/images/cartas/38.png'],
    [39, 'nopal', './assets/images/cartas/39.png'],
    [40, 'alacran', './assets/images/cartas/40.png'],
    [41, 'rosa', './assets/images/cartas/41.png'],
    [42, 'calavera', './assets/images/cartas/42.png'],
    [43, 'campana', './assets/images/cartas/43.png'],
    [44, 'cantarito', './assets/images/cartas/44.png'],
    [45, 'venado', './assets/images/cartas/45.png'],
    [46, 'sol', './assets/images/cartas/46.png'],
    [47, 'corona', './assets/images/cartas/47.png'],
    [48, 'chalupa', './assets/images/cartas/48.png'],
    [49, 'pino', './assets/images/cartas/49.png'],
    [50, 'pescado', './assets/images/cartas/50.png'],
    [51, 'palma', './assets/images/cartas/51.png'],
    [52, 'maceta', './assets/images/cartas/52.png'],
    [53, 'arpa', './assets/images/cartas/53.png'],
    [54, 'rana', './assets/images/cartas/54.png'],
  ];
  private doubles = ['14', '113', '116', '413', '416', '611', '710', '1316'];

  public card: any[] = [];
  public cards: any[] = [];
  public cards_ordered: any[] = [];

  public name_top = '';
  public dobles = 'true';
  public cuantas = '0';
  public cantidad = '';
  public ubicacion = '666';
  public ubicacionDoblesIMG = './assets/images/orden/666.png';
  //#endregion 'Variables'

  //#region 'Angular LifeCycle'
  constructor() {}

  ngOnInit() {}
  //#endregion 'Angular LifeCycle'

  //#region 'General Methods'
  public ubicacionDobles(): void {
    this.ubicacionDoblesIMG = `./assets/images/orden/${this.ubicacion}.png`;
  }

  public create_cards() {
    this.cards = [];
    this.cards_ordered = [];
    const CANTIDAD = this.cuantas == '0' ? 54 : Number(this.cantidad);

    for (let i = 1; i <= CANTIDAD; i++) {
      this.create_card(i);
      let cc = this.cloneData(this.card).sort();

      while (this.cards_ordered.filter((obj) => obj === cc).length > 0) {
        this.create_card(i);
        cc = this.cloneData(this.card).sort();
      }

      this.cards.push(this.cloneData(this.card));
      this.cards_ordered.push(cc);
    }

    this.showData();
  }

  private create_card(double: number) {
    this.card = [];
    for (let i = 1; i < 16; i++) {
      let random = this.get_random(1, 54, double);
      let lote = this.loteria.filter((obj) => obj[0] === random)[0];

      if (i < 15) {
        this.card.push(lote);
      } else {
        lote = this.loteria.filter((obj) => obj[0] === double)[0];
        this.setDouble(lote);
      }
    }
  }

  private get_random(min: number, max: number, double: number) {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    let exist = this.card.filter((obj) => obj[0] === random);

    while (exist.length > 0 || double == random) {
      random = Math.floor(Math.random() * (max - min + 1) + min);
      exist = this.card.filter((obj) => obj[0] === random);
    }
    return random;
  }

  private setDouble(lote) {
    let d1 = 0;
    let d2 = 0;
    let ran = this.ubicacion;

    if (ran == '666') {
      ran = this.doubles[Math.floor(Math.random() * 8)];
    }

    if (ran == '14') {
      d1 = 0;
      d2 = 3;
    }
    if (ran == '113') {
      d1 = 0;
      d2 = 12;
    }
    if (ran == '116') {
      d1 = 0;
      d2 = 15;
    }
    if (ran == '413') {
      d1 = 3;
      d2 = 12;
    }
    if (ran == '416') {
      d1 = 3;
      d2 = 15;
    }
    if (ran == '611') {
      d1 = 5;
      d2 = 10;
    }
    if (ran == '710') {
      d1 = 6;
      d2 = 9;
    }
    if (ran == '1316') {
      d1 = 12;
      d2 = 15;
    }

    this.card.splice(d1, 0, lote);
    this.card.splice(d2, 0, lote);
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
      this.cards.push(this.cloneData(this.card));
    }
  }

  private showData() {
    this.cards.forEach((el) => {
      // console.log(
      //   `${el[0][0].toString().length === 1 ? `0${el[0][0]}` : el[0][0]}-${
      //     el[1][0].toString().length === 1 ? `0${el[1][0]}` : el[1][0]
      //   }-${el[2][0].toString().length === 1 ? `0${el[2][0]}` : el[2][0]}-${
      //     el[3][0].toString().length === 1 ? `0${el[3][0]}` : el[3][0]
      //   }-${el[4][0].toString().length === 1 ? `0${el[4][0]}` : el[4][0]}-${
      //     el[5][0].toString().length === 1 ? `0${el[5][0]}` : el[5][0]
      //   }-${el[6][0].toString().length === 1 ? `0${el[6][0]}` : el[6][0]}-${
      //     el[7][0].toString().length === 1 ? `0${el[7][0]}` : el[7][0]
      //   }-${el[8][0].toString().length === 1 ? `0${el[8][0]}` : el[8][0]}-${
      //     el[9][0].toString().length === 1 ? `0${el[9][0]}` : el[9][0]
      //   }-${el[10][0].toString().length === 1 ? `0${el[10][0]}` : el[10][0]}-${
      //     el[11][0].toString().length === 1 ? `0${el[11][0]}` : el[11][0]
      //   }-${el[12][0].toString().length === 1 ? `0${el[12][0]}` : el[12][0]}-${
      //     el[13][0].toString().length === 1 ? `0${el[13][0]}` : el[13][0]
      //   }-${el[14][0].toString().length === 1 ? `0${el[14][0]}` : el[14][0]}-${
      //     el[15][0].toString().length === 1 ? `0${el[15][0]}` : el[15][0]
      //   }`
      // );

      const DATA = [
        el[0][0],
        el[1][0],
        el[2][0],
        el[3][0],
        el[4][0],
        el[5][0],
        el[6][0],
        el[7][0],
        el[8][0],
        el[9][0],
        el[10][0],
        el[11][0],
        el[12][0],
        el[13][0],
        el[14][0],
        el[15][0],
      ].sort();
      console.log(DATA);
    });
  }

  private cloneData(data: any): any {
    return JSON.parse(JSON.stringify(data));
  }
  //#endregion 'General Methods'
}
