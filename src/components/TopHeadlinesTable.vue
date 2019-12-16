<template>
  <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      fields: ['title', 'description', 'author'],
      items: null,
    };
  },
  mounted() {
    axios
      .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=d734d290481446d88106eca9e1e1b870')
      .then((response) => {
        this.items = response.data.articles;
      });
  },
};
</script>
