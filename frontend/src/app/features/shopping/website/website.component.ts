import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShoppingService } from '../../../core/services/scenario-services/shopping.service';

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './website.component.html',
  styleUrl: './website.component.scss'
})
export class WebsiteComponent {

onCategoryClick(arg0: string) {
  if(this.shopping.currentIndex >= 22){
    if(arg0 === "Jacken" && !this.shopping.product[0]){
      this.shopping.product[0] = true
      this.shopping.Cart = this.shopping.Cart + 1;
    }
    if(arg0 === "Schuhe" && !this.shopping.product[1]){
      this.shopping.product[1] = true
      this.shopping.Cart = this.shopping.Cart + 1;
    }
    if(arg0 === "Accessoires" && !this.shopping.product[2]){
      this.shopping.product[2] = true
      this.shopping.Cart = this.shopping.Cart + 1;
    }
    if(this.shopping.Cart == 3){
      setTimeout(() => {
        this.shopping.showcheckout = true;
        setTimeout(() => {
          this.shopping.angebot = true;
        }, 2000);
      }, 2000);
    }
  }
}

ab4() {
  this.shopping.answers[3] = true;
  this.shopping.next();
}
ab3() {
  this.shopping.answers[2] = true;
  this.shopping.next();
}
ab2() {
  this.shopping.answers[1] = true;
  this.shopping.next();
}
ab1() {
  this.shopping.answers[0] = true;
  this.shopping.next();
}
  constructor(protected shopping: ShoppingService ){
    }
  n: number = 1;
  websites = [
    {
      header: '🔥 FLASH SALE: Up to 70% OFF on Premium Brands! Limited Time Only! Don\'t Miss Out on Exclusive Deals! Shop Now Before It\'s Gone! 🔥',
      title: 'Exclusive Fashion Deals',
      subtitle: 'Premium brands at unbeatable prices',
      ctaButton: 'SHOP NOW - LIMITED TIME OFFER!',
      footerLeft: '© 2024 LuxuryFashion. All rights reserved.<br> Registered in Somewhere™',
      footerRight: 'Business ID: XX-XXXXXXXXX <br>Terms & Conditions apply*',
      buttonTexts: [
        'Ja, weil die Preise super<br>günstig sind',
        'Ja, weil ich von dieser Seite auf<br>Instagram Werbung gesehen habe',
        'Nein, das Impressum fehlt<br>oder nicht vollständig ist',
        'Das kann ich nicht sagen, ohne mir<br>das Impressum und die<br>Kontaktmöglichkeiten anzuschauen'
      ]
      ,
      products: [
        {
          name: 'Premium Winter Jacket',
          imageUrl: 'assets/shopping/jaket.png',
          currentPrice: '$149.99',
          originalPrice: '$299.99',
          discount: '-50%',
          category: 'Jackets'
        },
        {
          name: 'Designer Sneakers',
          imageUrl: 'assets/shopping/redshoe.png',
          currentPrice: '$89.99',
          originalPrice: '$199.99',
          discount: '-55%',
          category: 'Shoes'
        },
        {
          name: 'Luxury Beanie',
          imageUrl: 'assets/shopping/cap.png',
          currentPrice: '$24.99',
          originalPrice: '$49.99',
          discount: '-50%',
          category: 'Hats'
        }
      ]
    }, {
      header: '🔥 MEGA DEAL!!! 90% RABATT AUF ALLES!!! JETZT ODER NIE!!! LETZTE CHANCE!!! NUR HEUTE!!! 🔥',
      title: 'MEGA LUXUS DEALS!!!',
      subtitle: '⚠️ NUR SOLANGE DER VORRAT REICHT!!! ⚠️',
      ctaButton: '⚡ JETZT ZUGREIFEN - ANGEBOT LÄUFT AB!!! ⚡',
      footerLeft: '© 2024 MaxStyle GmbH*<br>*in Gründung',
      footerRight: 'Inhaber: Max Mustermann<br>Irgendwo in Deutschland',
      buttonTexts: [
        'Ja, weil die Preise super<br>günstig sind',
        'Ja, weil ich von dieser Seite auf<br>Instagram Werbung gesehen habe',
        'Nein, das Impressum fehlt<br>oder nicht vollständig ist',
        'Das kann ich nicht sagen, ohne mir<br>das Impressum und die<br>Kontaktmöglichkeiten anzuschauen'
      ]
      ,
      products: [
        {
          name: 'LUXUS Winter Jacke!!!',
          imageUrl: 'assets/shopping/jaket.png',
          currentPrice: '$89.99',
          originalPrice: '$899.99',
          discount: '-90% !!!',
          category: 'PREMIUM',
          badge: 'HOT!!!',
          badgeColor: 'orange'
        },
        {
          name: 'ORIGINAL® Sneaker',
          imageUrl: 'assets/shopping/redshoe.png',
          currentPrice: '$49.99',
          originalPrice: '$499.99',
          discount: '-90% !!!',
          category: 'LIMITIERT',
          badge: 'HOT!!!',
          badgeColor: 'orange'
        },
        {
          name: 'Designer® Mütze',
          imageUrl: 'assets/shopping/cap.png',
          currentPrice: '$29.99',
          originalPrice: '$299.99',
          discount: '-90% !!!',
          category: 'EXKLUSIV',
          badge: 'HOT!!!',
          badgeColor: 'orange'
        }
      ]
    },{
      header: 'Saisonale Angebote – Qualität trifft auf Stil – Kostenloser Versand ab 50€',
      title: 'MaxStyle Collection',
      subtitle: 'Qualität und Stil für jeden Anlass',
      footerLeft: '<p style="font-size: 16px; font-weight: bold;">MaxStyle GmbH</p> <br>Geschäftsführer: Max Mustermann<br>Handelsregister: HRB 123456<br>USt-IdNr: DE123456789',
      footerRight: 'Musterstraße 123<br>12345 Musterstadt<br>Deutschland<br>Tel: +49 (0) 123 456789<br>E-Mail: kontakt@maxstyle.de',
      buttonTexts: [
        'Ja, weil es keine unseriösen<br>Angebote gibt',
        'Ja, weil das Impressum vollständig<br>vorhanden ist!',
        'Nein, da die Seite keine<br>verlockenden Angebote hat',
        'Das kann ich nicht sagen, ohne mir<br>das Impressum und die<br>Kontaktmöglichkeiten anzuschauen'
      ]
      ,
      products: [
        {
          name: 'Premium Winterjacke',
          imageUrl: 'assets/shopping/jaket.png',
          currentPrice: '€249.99',
          originalPrice: '€299.99',
          discount: '-17%',
          category: 'Jacken'
        },
        {
          name: 'Sportliche Sneaker',
          imageUrl: 'assets/shopping/redshoe.png',
          currentPrice: '€99.99',
          originalPrice: '€129.99',
          discount: '-23%',
          category: 'Schuhe'
        },
        {
          name: 'Wollmütze',
          imageUrl: 'assets/shopping/cap.png',
          currentPrice: '€34.99',
          originalPrice: '€39.99',
          discount: '-13%',
          category: 'Accessoires'
        }
      ]
    }
    
  ];
  getclasses():string[]{
    if(this.shopping.webnumber == 0){
      return ["back1","header1","title1","subtitle1","discount1","price1","button1","info1","lastb1","hidden"];
    }else if (this.shopping.webnumber == 1) {
      return ["back2","header2","title2","subtitle2","discount2","price2","button2","info2","lastb2","hot"]
    }else{
      return ["back3","header3","title3","subtitle3","discount3","price3","button3","info3","hidden","hidden"]
    }
  }
}
