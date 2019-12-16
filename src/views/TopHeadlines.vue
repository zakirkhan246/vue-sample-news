<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <top-headlines />
  </div>
</template>

<script>
import TopHeadlinesTable from '../components/TopHeadlinesTable.vue';

export default {
  components: {
    'top-headlines': TopHeadlinesTable,
  },
  data() {
    return {
      items: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Top Headlines',
          active: true,
        },
      ],
    };
  },
};
</script>
