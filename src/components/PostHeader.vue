<template>
  <header>
    <!-- <div v-if="post.cover" class="relative overflow-hidden post-cover" :class="[post.fullscreen ? 'fullscreen' : 'max-h-cover']">
      <div class="absolute z-10 max-w-xl px-6 text-center md:max-w-3xl xl:max-w-4xl" :class="[post.fullscreen ? 'flex flex-col items-center m-auto inset-0': 'mx-auto bottom-0 inset-x-0 pb-16']">
        <div class="m-auto">
          <p class="mb-2 text-xs text-white uppercase">{{ post.timeToRead }} min read</p>
          <h1 class="mb-2 font-sans text-3xl font-bold leading-tight text-white sm:text-5xl">{{ post.title }}</h1>
          <p class="text-white">
            <span v-if="post.author">
              <g-link :to="`${post.author.path}/`" class="text-white capitalize border-b border-transparent hover:border-white transition-border-color">{{ titleCase(post.author.title) }}</g-link> &bull;
            </span>
            <time :datetime="post.datetime">{{ formattedPublishDate }}</time>
          </p>
        </div>
      </div>
      <ClientOnly>
        <parallax :speed-factor="speedFactor" :sectionHeight="80">
          <img :src="post.cover.src" :alt="post.title">
        </parallax>
      </ClientOnly>
    </div> -->
    <div  class="pt-24">
      <div class="max-w-xl px-6 mx-auto text-center md:max-w-3xl xl:max-w-4xl">
        <!-- <p class="mb-2 text-xs text-gray-700 uppercase">{{ post.timeToRead }} min read</p> -->
        <h1 class="mb-2 font-sans text-3xl font-bold leading-tight text-black sm:text-5xl">{{ post.title }}</h1>
        <p class="text-gray-700">
          <span v-if="post.author">
            <g-link :to="`${post.author.path}/`" class="text-gray-700 capitalize border-b border-transparent hover:border-gray-400 transition-border-color">{{ titleCase(post.author.title) }}</g-link> &bull;
          </span>
          <time :datetime="post.datetime">{{ formattedPublishDate }}</time>
        </p>
      </div>
    </div>
    <nav class="absolute top-0 left-0 z-20 mt-6 ml-6">
      <!-- <g-link to="/" :class="[post.cover ? 'text-white border-white' : 'text-gray-900 border-gray-400']" class="px-4 py-2 text-sm transition-opacity border rounded-full opacity-75 hover:opacity-100">&larr; Home</g-link> -->
      <g-link to="/"  class="px-4 py-2 text-sm text-gray-900 transition-opacity border border-gray-400 rounded-full opacity-75 hover:opacity-100">&larr; Voltar</g-link>
    </nav>
  </header>
</template>

<script>
import moment from 'moment'
import 'moment/locale/pt-br'
import Parallax from "vue-parallaxy"

export default {
  props: ['post'],
  components: {
    Parallax
  },
  methods: {
    titleCase(str) {
      return str.replace('-', ' ')
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')
    }
  },
  computed: {
    formattedPublishDate() {
      return moment(this.post.datetime).format('LL');
    },
    speedFactor() {
      return this.post.fullscreen ? 0.21 : 0.37
    }
  },
}
</script>
