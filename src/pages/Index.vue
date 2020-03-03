<template>
  <Layout class="bg-white">
    <main>
      <header>
        <div class="max-w-xl px-6 py-10 mx-auto text-center border-b border-gray-300 md:max-w-3xl xl:max-w-4xl md:py-32">
          <h1 class="mb-1 text-6xl font-semibold font-logo sm:text-5xl md:text-6xl">
            <g-link to="/" class="text-black">
            Heloiche
            </g-link>
          </h1>
          <p class="font-sans text-lg text-gray-700 sm:text-3xl">Avó 👵🏼, arteira 🧶, e leitora voraz 📚</p>
        </div>
      </header>
      <section>
        <div class="max-w-3xl px-6 py-8 mx-auto text-lg text-gray-700 bg-gray-100 border-b border-gray-300 sm:bg-white">
          <mailchimp-form/>
        </div>
      </section>
      <section>
        <post-item v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
      </section>
      <pagination :info="$page.posts.pageInfo" v-if="$page.posts.pageInfo.totalPages > 1" />
      <site-footer class="py-8 sm:py-16" />
    </main>
  </Layout>
</template>

<script>
import config from '~/.temp/config.js'
import SiteFooter from '@/components/Footer'
import PostItem from '@/components/PostItem'
import Pagination from '@/components/Pagination'
import MailchimpForm from '@/components/MailchimpForm'

export default {
  components: {
    PostItem,
    MailchimpForm,
    Pagination,
    SiteFooter,
  },
  metaInfo () {
    return {
      title: `${this.$static.metadata.siteName} - Avó, arteira, e leitora voraz`,
      titleTemplate: null,
      meta: [
        { property: "og:type", content: 'website' },
        { property: "og:title", content: this.$static.metadata.siteName },
        { property: "og:description", content: this.$static.metadata.siteDescription },
        { property: "og:url", content: this.$static.metadata.siteUrl },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$static.metadata.siteName },
        { name: "twitter:description", content: this.$static.metadata.siteDescription },
        { name: "twitter:site", content: "@cossssmin" },
        { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    }
  },
  computed: {
    config () {
      return config
    },
    ogImageUrl () {
      return `${this.config.siteUrl}/images/bleda-card.png`
    }
  },
}
</script>

<page-query>
  query Home ($page: Int) {
    posts: allPost (page: $page, perPage: 6) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          datetime: date (format: "YYYY-MM-DD HH:mm:ss")
          content
          excerpt
          description
          path
          cover
          tags {
            id
            title
            path
          }
        }
      }
    }
  }
</page-query>

<static-query>
query {
  metadata {
    siteName
    siteUrl
    siteDescription
  }
}
</static-query>
