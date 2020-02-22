<template>
  <Layout>
    <main>
      <header
        class="max-w-xl px-6 pt-24 mx-auto md:max-w-2xl xl:max-w-3xl"
      >
        <h1 class="mb-1 font-sans text-4xl font-bold sm:text-5xl md:text-6xl">
          Sobre
        </h1>
        <!-- <p class="text-lg text-grey-dark sm:text-3xl">
          Lorem ipsum subtitle &hellip;
        </p> -->
      </header>
      <nav class="absolute top-0 left-0 z-20 mt-6 ml-6">
        <g-link
          to="/"
          class="px-4 py-2 text-sm text-gray-900 transition-opacity border border-gray-400 rounded-full opacity-75 hover:opacity-100"
          >&larr; Voltar</g-link
        >
      </nav>
      <article
        class="max-w-xl px-6 pt-16 pb-10 mx-auto mb-16 border-b border-gray-300 md:max-w-2xl xl:max-w-3xl sm:px-12"
      >
        <g-image src="../../static/images/heloiche.jpg" class="w-48 h-48 mb-8 rounded-full shadow-lg" />
        <div class="text-lg leading-normal text-gray-700 markdown">
          <p>
            Estou aposentada, depois de mais de 30 anos como professora de
            Computação da <a href="http://unicamp.br">Unicamp</a>.
          </p>
          <p>
            Aposentar sempre foi aquela promessa mágica de <strong>ter o dia todo para
            ler</strong>. Mas é claro, outras vontades e amores apareceram. Eu que sempre
            me julguei um zero em habilidades manuais de repente me vejo
            <strong>tricotando</strong>, <strong>“crochetando”</strong>, e até <strong>bordando</strong>. E olha que sem fazer
            feio!
          </p>
          <p>
            Também tenho os <strong>netos</strong> para encherem meu tempo de amor e doçura. Com
            eles nasceu meu encanto pela literatura infantil e agora a juvenil.
          </p>

          <p>
            Como eu estou "sempre inventando novidades" (segundo meu neto do
            meio, Felipe), criei esse espaço onde me aventuro a relatar minhas
            impressões de leituras.
          </p>
          <p class="font-bold">
            É como uma conversa, bastante informal, que pretendo manter esse
            blog e interagir com vocês que se aventurarem a me ler.
          </p>
          <p>
            Sendo uma vovó "bem conectada" (segundo a Isa, a neta adolescente),
            vocês também podem me achar no Instagram (<a
              href="https://instagram.com/heloisavrocha"
              >@helosavrocha</a
            >
            e
            <a href="https://instagram.com/heloichefazarte">@heloichefazarte</a
            >), no
            <a href="https://www.facebook.com/heloisavrocha">Facebook</a>, e no
            <a href="https://twitter.com/heloisavrocha">Twitter</a>.
          </p>
        </div>
        <div class="pt-8 mt-8 border-t">
          <mailchimp-form />
        </div>
      </article>
      <site-footer class="pb-8 sm:pb-10" />
    </main>
  </Layout>
</template>

<script>
import config from '~/.temp/config.js'
import SiteFooter from '@/components/Footer'
import MailchimpForm from '@/components/MailchimpForm'

export default {
  components: {
    MailchimpForm,
    SiteFooter
  },
  metaInfo() {
    return {
      title: 'About',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.ogDescription
        },

        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: 'About' },
        { property: 'og:description', content: this.ogDescription },
        { property: 'og:url', content: `${this.config.siteUrl}/about/` },
        { property: 'og:image', content: this.ogImageUrl },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'About' },
        { name: 'twitter:description', content: this.ogDescription },
        { name: 'twitter:site', content: '@cossssmin' },
        { name: 'twitter:creator', content: '@cossssmin' },
        { name: 'twitter:image', content: this.ogImageUrl }
      ]
    }
  },
  computed: {
    config() {
      return config
    },
    ogDescription() {
      return 'Introduction to the Bleda blog starter for Gridsome.'
    },
    ogImageUrl() {
      return `${this.config.siteUrl}/images/bleda-card.png`
    }
  }
}
</script>
