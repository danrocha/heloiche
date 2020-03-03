import VueDisqus from 'vue-disqus'
import DefaultLayout from '~/layouts/Default.vue'
require('typeface-caveat-brush')

export default function (Vue, { head }) {
  Vue.use(VueDisqus);

  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'pt-br'}

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Fira+Sans:400,700%7CCardo'
  })
}
