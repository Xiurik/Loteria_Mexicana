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
  //#endregion 'Variables'

  //#region 'Angular LifeCycle'
  constructor() {}

  ngOnInit() {
    this.create_cards();
  }
  //#endregion 'Angular LifeCycle'

  //#region 'General Methods'
  private get_random() {
    let r = Math.floor(Math.random() * (54 - 1 + 1) + 1);
    let m = this.card.filter((obj) => obj[0] === r);
    while (m.length > 0) {
      r = Math.floor(Math.random() * (54 - 1 + 1) + 1);
      m = this.card.filter((obj) => obj[0] === r);
    }
    return r;
  }

  private get_position() {
    return Math.floor(Math.random() * (16 - 1 + 1) + 1);
  }

  private create_card() {
    this.card = [];
    let p = 0;
    for (let i = 1; i < 16; i++) {
      let r = this.get_random();
      const lote = this.loteria.filter((obj) => obj[0] === r)[0];
      if (i < 15) {
        this.card.push(lote);
      } else {
        console.log('r => ', lote);
        p = undefined;
        p = this.get_position();
        this.card.splice(p, 0, lote);
        p = undefined;
        p = this.get_position();
        this.card.splice(p, 0, lote);
      }
    }
  }

  public create_cards() {
    this.cards = [];
    this.cards_ordered = [];
    console.clear();
    for (let i = 1; i <= 4; i++) {
      this.create_card();
      let d = JSON.parse(JSON.stringify(this.card));
      d.sort();
      while (this.cards_ordered.filter((obj) => obj === d).length > 0) {
        this.create_card();
        d = JSON.parse(JSON.stringify(this.card));
        d.sort();
      }

      this.cards.push(JSON.parse(JSON.stringify(this.card)));
      this.cards_ordered.push(d);
    }
    console.log('this.cards => ', this.cards);
    console.log('this.cards_ordered => ', this.cards_ordered);
  }
  //#endregion 'General Methods'
}
