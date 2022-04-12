<script lang="ts" setup>
import { init } from 'echarts';
import { ref, onMounted, defineProps, toRefs, watch } from 'vue-demi';
import { WordCloudData } from './type';
import { merge } from 'lodash';
import { DefaultOptions } from './constants';

const props = defineProps<{
  data: WordCloudData[];
  options?: any;
}>();

const { data, options } = toRefs(props);

const chartRef = ref();

onMounted(async () => {
  await import('echarts-wordcloud');
  const instance = init(chartRef.value);

  watch(
    [data, options],
    () => {
      const mergedOptions = merge(
        {
          type: 'wordCloud',
          data: data.value,
        },
        options?.value ?? {},
        DefaultOptions,
      );
      instance.setOption({
        series: mergedOptions,
      });
    },
    {
      immediate: true,
      deep: true,
    },
  );
});
</script>

<template>
  <div ref="chartRef" style="min-height: 300px"></div>
</template>

<style scoped></style>
