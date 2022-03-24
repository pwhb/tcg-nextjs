# React take-home challenge

### Resources

- API: <https://pokemontcg.io>
- Design:

  - file: <https://figma.fun/hIqDAm>
  - prototype: <https://figma.fun/8blDqC>

  Also available as `design.fig` in this folder, open it using <https://figma.com>.

## Requirement

- [x] Card list:
  - [x] Implement search/filter:
    - [x] Name
    - [x] Type
    - [x] Rarity
    - [ ] Set (set isn't an object and has too many distinct values to be a select component)
  - [x] Loading/PageSize limit: `12` cards on each api call
  - [x] Implement `Loadmore` style pagination
- [x] Use card `price` data from `cardmarket.prices.*` or `cardmarket.prices.averageSellPrice`
- [x] Use card's stock from `set.total`
- [x] Cart:
  - [x] Display selected cards as per design
  - [x] Quantity must be able to increase, decrease & remove. Must respect the stock left limit
  - [x] Display total number of selected cards
  - [x] Display total price of all the cards
  - [x] All cards should be clearable at once from cart

If you found missing requirements or have any questions, please feel free to contact us.

## Notes

- Please provide a way on how to run and build your application
- You can use any library, plugins & styling solutions

How to run the app:

```bash
npm run dev
# or
yarn dev
```

And open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Or

```bash
npm run build
# or
yarn build
```

To get a next optimized build.

## Impress us

The followings are ways you can get better impressions from us. But remember, **they're not required**.

- Build near pixel-perfect UIs
- Responsive to any screen sizes
- Smooth & Snappy CSS Transitions
- Using Nextjs with `getServerSideProps` or `getStaticProps`
- Using React hooks
- Using TypeScript
- Well-structured and organized repository
- Commenting your code
- Writing tests

Good luck ✌️
