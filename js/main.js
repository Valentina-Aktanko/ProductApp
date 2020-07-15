var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'A pair of warm, fuzzy socks',
    image: './assets/vmSocks-green.jpg',
    altText: 'Green Vue Mastery socks',
    inventory: 100,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green"
      },
      {
        variantId: 2235,
        variantColor: "blue"
      }
    ],
    sizes: [
      {
        sizeId: 0,
        sizeValue: 'S'
      },
      {
        sizeId: 1,
        sizeValue: 'M'
      },
      {
        sizeId: 2,
        sizeValue: 'L'
      },
    ]
  }
})