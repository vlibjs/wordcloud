---
map:
  path: /
---

## wordcloud

## 介绍

这是一个简单的`vue`词云组件。

<demo src="./demo.vue"
  language="vue"
  title="基本用法"
  desc="点击。">
</demo>

## 安装

```
yarn add @dewfall/wordcloud
```

## props

| 参数    |                 说明 |            类型 |  值 |
| ------- | -------------------: | --------------: | --: |
| data    |             词云数据 | WordCloudData[] |   - |
| options | echarts options 参数 |          Object |   - |

```ts
interface WordCloudData {
  name: string;
  value: number;
  textStyle?: Record<string, string>;
  [key: string]: any;
}
```
