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
        variantColor: "green",
        variantImage: './assets/vmSocks-green.jpg'
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: './assets/vmSocks-blue.jpg'
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
    ],
    cart: 0
  },

  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    }
  }
})