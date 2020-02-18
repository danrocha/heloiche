<template>
  <article class="flex flex-col items-center py-4 my-8 border-t border-b sm:flex-row">
    <slot></slot>
    <div class="-pb-4 sm:ml-4">
      <h4><a :href="link" target="_blank">{{title}}</a></h4>
      <p class="-mt-6">{{author}}</p>
      <p><a :href="link" target="_blank">Saiba mais &rarr;</a></p>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'Book',
    props: {
      title: {
        type: String,
        default: ''
      },
      author: {
        type: String,
        default: ''
      },
      link: {
        type: String,
        default: ''
      },
    },

  }
</script>

<style scoped>

</style>
