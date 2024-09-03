// Istanza di vue
const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      imgUrl: 'https://www.searchabledesign.com/blog/image.axd?picture=/vue.jpg',
    }
  }
}).mount('#app');
