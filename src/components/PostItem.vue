<template>
  <article>
    <div class="max-w-3xl px-6 mx-auto">
      <div class="py-8 border-b border-gray-300 sm:py-20">
        <header class="mb-8 text-center">
          <time :datetime="post.datetime" class="mb-2 text-xs text-gray-700 uppercase">{{ formatPublishDate(post.datetime) }}</time>
          <h2 class="mb-1 font-sans text-3xl leading-tight sm:text-4xl sm:mb-2">
            <g-link :to="`${post.path}/`" class="font-bold text-black">{{ post.title }}</g-link>
          </h2>
          <p class="text-sm leading-normal text-gray-700 sm:text-base">
            <span v-if="post.author">por <g-link :to="`${post.author.path}/`" class="text-gray-700 capitalize border-b border-transparent hover:border-gray-400 transition-border-color" v-if="post.author">{{ titleCase(post.author.title) }}</g-link></span>
            <span v-if="post.tags && post.tags.length > 0"> em <g-link :to="`${post.tags[0].path}/`" class="text-gray-700 capitalize border-b border-transparent hover:border-gray-400 transition-border-color">{{ titleCase(post.tags[0].title) }}</g-link></span>
            <span v-if="post.author || (post.tags && post.tags.length > 0)"> · </span>
            <!-- <span>{{ post.timeToRead }} min read</span> -->
          </p>
        </header>
        <p class="px-2 text-lg leading-normal text-gray-700 sm:px-4 md:px-10" v-html="excerpt(post, 280, ' ...')"></p>
      </div>
    </div>
  </article>
</template>

<script>
import moment from 'moment'

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
