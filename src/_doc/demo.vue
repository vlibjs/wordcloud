<template>
  <div>
    <WordCloud :data="data" />
  </div>
</template>

<script lang="ts" setup>
import { WordCloud, WordCloudData } from 'wordcloud';
import { keywords } from './data';

const data: WordCloudData[] = Object.entries(keywords).map(([name, value]) => ({
  name,
  value,
}));
</script>
