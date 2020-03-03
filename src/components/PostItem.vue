<template>
  <article>
    <div class="max-w-3xl px-6 mx-auto">
      <div class="py-8 border-b border-gray-300 sm:py-20">
        <header class="mb-8">
          <time :datetime="post.datetime" class="mb-4 font-sans text-xs text-gray-700 uppercase">{{ formatPublishDate(post.datetime) }}</time>
          <h2 class="mb-1 font-sans text-3xl leading-tight sm:text-4xl sm:mb-2">
            <g-link :to="post.path" class="font-bold text-black">
            {{ post.title }}
            </g-link>
          </h2>
          <div class="text-sm leading-normal text-gray-700 sm:text-base">
            <span v-if="post.author">por <g-link :to="`${post.author.path}/`" class="text-gray-700 capitalize border-b border-transparent hover:border-gray-400 transition-border-color" v-if="post.author">{{ titleCase(post.author.title) }}</g-link></span>
            <ul v-if="post.tags && post.tags.length > 0" class="flex">
              <li>em&nbsp;</li>
              <li v-for="(tag, i) in post.tags" :key="tag">
                <g-link :to="tag.path" class="text-gray-700 capitalize border-b border-transparent hover:border-gray-400 transition-border-color">{{ titleCase(tag.title) }}</g-link>
                <span v-if="post.tags.length-1 > i">&nbsp;·&nbsp;</span>
              </li>
            </ul>
            <!-- <span v-if="post.author || (post.tags && post.tags.length > 0)"> · </span> -->
            <!-- <span>{{ post.timeToRead }} min read</span> -->
          </div>
        </header>
        <div class="text-lg leading-normal text-left text-gray-700" v-html="excerpt(post, 280, ' ...')"></div>
      </div>
    </div>
  </article>
</template>

<script>
import moment from 'moment'
import 'moment/locale/pt-br'

export default {
  props: ['post'],
  computed: {
    formattedPublishDate() {
      return moment(this.post.datetime).format('DD MMMM, YYYY');
    },
  },
  methods: {
    formatPublishDate(date) {
      return moment(date).format('DD MMMM, YYYY');
    },
    excerpt(post, length, clamp) {
      if (post.excerpt) {
        return post.excerpt
      }

      length = length || 280
      clamp = clamp || ' ...'
      let text = post.content.replace(/<pre(.|\n)*?<\/pre>/gm, '').replace(/<[^>]+>/gm, '')

      return text.length > length ? `${ text.slice(0, length)}${clamp}` : text
    },
    titleCase(str) {
      return str.replace('-', ' ').split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
    }
  },
}
</script>

