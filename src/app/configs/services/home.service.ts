import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
  getHomeOffers() {
    return {
      left: {
        id: '2',
        image:
          'https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltac0e9cfb246b3568/6513466d4d72e9d49384beb7/wi-20231004-feature-grid-fg-google-pixel-8-gwp-carousel-xs.png?width=50p&amp;quality=80&amp;auto=webp',
        headline: 'Get a select fashion product at big discount',
        searchString: 'abc',
      },
      right: [
        {
          id: '2',
          headline: 'Score major discounts on major category.',
          image:
            'https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt78006536b6ed1d2c/651300c36f86ad040446e039/majorapps-20230929-uae-grid1-fg-xs.png?width=50p&amp;quality=80&amp;auto=webp',
          searchString: 'abc',
        },
        {
          id: '2',
          headline: 'Best offers for you',
          image:
            'https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt45e7284baba737c1/6435b486c2c6bc10e59e067e/global-20230414-feature-fg-top-deals-lockup-stacked-s.png?width=50p&amp;quality=80&amp;auto=webp',
          searchString: 'abc',
        },
        {
          id: '2',
          headline: 'Category Sale is on.',
          image:
            'https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blte8251eb4a4aa5431/650c879ab556bd299dd3c2da/computing-20230922-feature-grid-3-fg-pc-gaming-sale-xs.png?width=50p&amp;quality=80&amp;auto=webp',
          searchString: 'abc',
        },
      ],
    };
  }
}
