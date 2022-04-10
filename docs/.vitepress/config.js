const base = process.env.NODE_ENV === 'production' ? '/wordcloud' : '';
const { resolve } = require('path');

module.exports = {
  title: 'wordcloud',
  description: '',
  // 扫描srcIncludes里面的 *.md文件
  srcIncludes: ['src'],
  alias: {
    // 为了能在demo中正确的使用  import { X } from 'wordcloud'
    [`wordcloud`]: resolve('./src'),
  },
  base,
  themeConfig: {
    // logo: '../logo.svg',
    repo: 'dewfall123/wordcloud',
    repoLabel: 'Github',
    lastUpdated: true,
    prevLink: true,
    nextLink: true,
  },
};
