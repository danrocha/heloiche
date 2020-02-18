<template>
  <article class="flex flex-col items-center py-4 my-8 sm:flex-row">
    <figure class="z-10 flex-none shadow-lg">
      <slot></slot>
    </figure>
    <div class="hidden w-full pb-2 pl-4 bg-gray-200 border-t border-b sm:block">
      <h4><a :href="link" target="_blank">{{title}}</a></h4>
      <p class="-mt-6">{{author}}</p>
      <p><a :href="link" target="_blank">Saiba mais &rarr;</a></p>
    </div>
    <div class="w-full pt-16 -mt-16 text-center bg-gray-200 border-t border-b sm:hidden">
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
