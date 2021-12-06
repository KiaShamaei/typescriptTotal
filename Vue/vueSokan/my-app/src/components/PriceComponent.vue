<template>
  <div class="container">
    <div class="output-container">
      <div class="rial-price-output">
        Price: <strong>{{ rialValue }}</strong> <small> rial</small>
      </div>
      <div class="usd-price-output">
        USD: <strong>{{ usdValue }}</strong> <small> USD</small>
      </div>
    </div>
    <input
      type="number"
      class="usd-price-input"
      v-model="usdValueInput"
      placeholder="Enter USD price..."
    />
    <button class="btn-convert" @click="fetchPrice">Convert</button>
  </div>
</template>

<script>
export default {
  name: "PriceComponent",
  data() {
    return {
      rialValue: "",
      usdValue: "",
    };
  },
  methods: {
    fetchPrice() {
      fetch("https://api.tgju.online/v1/data/sana/json")
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          // find usd among all items
          let usdItem = data.sana.data.find((i) => i.slug === "sana_buy_usd");

          this.usdValue = parseInt(usdItem.p);
          this.rialValue = parseInt(this.usdValueInput | 0) * this.usdValue;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
</style>