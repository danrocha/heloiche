<template>
  <Layout>
    <main>
      <post-header :post="$page.post" />

      <article
        class="max-w-xl px-6 pt-16 pb-10 mx-auto mb-16 border-b md:max-w-2xl xl:max-w-3xl sm:px-12 border-grey-lighter"
      >
        <!-- <alert
          v-if="postIsOlderThanOneYear"
          class="text-orange-900 bg-orange-100 border-l-4 border-orange-500"
        >
          This post is over a year old, some of this information may be out of
          date.
        </alert> -->

        <!-- <div :class="{'pb-10': $page.post.author || $page.post.tags}" class="text-lg leading-normal text-gray-700 markdown" v-html="$page.post.content" /> -->
        <VueRemarkContent
          :class="{ 'pb-10': $page.post.author || $page.post.tags }"
          class="text-lg leading-normal text-gray-700 markdown"
        />

        <footer
          v-if="$page.post.author || $page.post.tags"
          class="flex flex-wrap pb-10 sm:pb-16"
        >
          <div>
            <g-link
              v-for="tag in $page.post.tags"
              :key="tag.id"
              :to="`${tag.path}/`"
              class="inline-block px-4 py-2 mb-2 mr-4 font-sans text-xs font-bold text-teal-400 border border-teal-400 rounded-full hover:text-white hover:bg-teal-400 sm:text-sm transition-color transition-bg"
            >
              <svg
                class="inline w-3 mr-1 align-middle fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                role="img"
              >
                <path
                  d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                />
              </svg>
              {{ tag.title }}
            </g-link>
          </div>
          <!-- <div
            v-if="$page.post.author"
            class="flex flex-wrap items-center justify-center w-full py-10 mt-10 border-t border-b border-gray-300 sm:justify-left sm:px-16"
          >
            <figure
              class="flex justify-center w-full px-2 mb-1 sm:mb-0 sm:w-1/5"
            >
              <g-link :to="`${$page.post.author.path}/`">
                <img
                  :src="avatar"
                  :alt="$page.post.author.title"
                  @error="imageLoadError"
                  width="100"
                  class="p-4 rounded-full sm:p-0"
                />
              </g-link>
            </figure>
            <div class="px-4 text-center sm:w-4/5 sm:text-left">
              <h4 class="mb-2 font-sans text-lg font-bold sm:text-xl sm:mb-4">
                <g-link
                  :to="`${$page.post.author.path}/`"
                  class="text-black capitalize border-b-2 border-transparent hover:text-gray-600 transition-color"
                  >{{ titleCase($page.post.author.title) }}</g-link
                >
              </h4>
              <p class="leading-normal">
                <g-link
                  :to="`${$page.post.author.path}/`"
                  class="text-blue-500 hover:text-blue-400 transition-color"
                  >See all posts by
                  {{ titleCase($page.post.author.title) }} &rarr;</g-link
                >
              </p>
            </div>
          </div> -->
          <div class="block w-full h-8">&nbsp;</div>
          <div class="w-full">
            <vue-disqus
              shortname="heloiche"
              :identifier="$page.post.title"
            ></vue-disqus>
          </div>
        </footer>
      </article>

      <site-footer class="pb-8 sm:pb-10" />
    </main>
  </Layout>
</template>

<script>
import moment from 'moment'
import 'moment/locale/pt-br'
import config from '~/.temp/config.js'
import Alert from '@/components/Alert'
import slugify from '@sindresorhus/slugify'
import SiteFooter from '@/components/Footer'
import PostHeader from '~/components/PostHeader'

export default {
  components: {
    Alert,
    PostHeader,
    SiteFooter
  },
  metaInfo() {
    return {
      title: `${this.$page.post.title} ${
        this.$page.post.tag ? '- ' + this.$page.post.tag.name : ''
      }`,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.description(this.$page.post)
        },

        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: this.$page.post.title },
        {
          property: 'og:description',
          content: this.description(this.$page.post)
        },
        { property: 'og:url', content: this.postUrl },
        {
          property: 'article:published_time',
          content: moment(this.$page.post.date).format('YYYY-MM-DD')
        },
        { property: 'og:image', content: this.ogImageUrl },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: this.$page.post.title },
        {
          name: 'twitter:description',
          content: this.description(this.$page.post)
        },
        { name: 'twitter:site', content: '@cossssmin' },
        { name: 'twitter:creator', content: '@cossssmin' },
        { name: 'twitter:image', content: this.ogImageUrl }
      ]
    }
  },
  mounted() {
    import('medium-zoom').then((mediumZoom) => {
      this.zoom = mediumZoom.default('.markdown p > img')
    })
  },
  methods: {
    imageLoadError(e) {
      e.target.src = `/images/authors/default.png`
    },
    description(post, length, clamp) {
      if (post.description) {
        return post.description
      }

      length = length || 280
      clamp = clamp || ' ...'
      let text = post.content
        .replace(/<pre(.|\n)*?<\/pre>/gm, '')
        .replace(/<[^>]+>/gm, '')

      return text.length > length ? `${text.slice(0, length)}${clamp}` : text
    },
    titleCase(str) {
      return str
        .replace('-', ' ')
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')
    }
  },
  computed: {
    config() {
      return config
    },
    avatar() {
      return `/images/authors/${this.$page.post.author.id}.png`
    },
    postIsOlderThanOneYear() {
      let postDate = moment(this.$page.post.datetime)
      return moment().diff(postDate, 'years') > 0 ? true : false
    },
    postUrl() {
      let siteUrl = this.config.siteUrl
      let postPath = this.$page.post.path

      return postPath
        ? `${siteUrl}${postPath}`
        : `${siteUrl}/${slugify(this.$page.post.title)}/`
    },
    ogImageUrl() {
      return (
        this.$page.post.cover || `${this.config.siteUrl}/images/bleda-card.png`
      )
    }
  }
}
</script>

<page-query>
query Post ($path: String) {
  post (path: $path) {
    title
    path
    slug
    datetime: date (format: "YYYY-MM-DD HH:mm:ss")
    content
    description
    cover
    fullscreen

    tags {
      id
      title
      path
    }
  }
}
</page-query>
