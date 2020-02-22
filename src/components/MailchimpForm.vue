<template>
  <div class="mx-auto text-center md:text-left md:flex">
    <!-- Begin Mailchimp Signup Form -->
    <p class="mb-4 font-sans md:text-xl md:w-1/2 md:pr-4">
      <slot
        >Assine <strong>📚Heloiche Lê</strong> e receba dicas de leituras a cada duas semanas, direto no seu email&nbsp;<span class="md:hidden">&darr;</span><span class="hidden md:inline-block">&rarr;</span></slot
      >
    </p>
    <form
      action="https://mailchi.us20.list-manage.com/subscribe/post?u=098dc617c09a7514b2f1ca78d&amp;id=77c52737df"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
      class="mx-auto rounded sm:w-2/3 md:w-1/2 sm:p-4 sm:bg-gray-100"
      novalidate
    >
      <p class="text-left">
        <label for="mce-FNAME" class="font-sans text-sm">Nome </label>
        <input type="text" value="" name="FNAME" class="w-full p-2 font-sans text-base border rounded shadow-inner" id="mce-FNAME" placeholder="Nome"/>
      </p>
      <p class="mb-4 text-left">
        <label for="mce-EMAIL" class="font-sans text-sm">Email </label>
        <input type="email" value="" name="EMAIL" class="w-full p-2 font-sans text-base border rounded shadow-inner" id="mce-EMAIL" placeholder="Email"/>
      </p>
      <p>
        <input
          type="submit"
          value="Assinar"
          name="subscribe"
          id="mc-embedded-subscribe"
          class="px-4 py-1 text-teal-400 bg-white border border-teal-400 rounded-full cursor-pointer hover:text-white hover:bg-teal-400"
        />
      </p>
      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input
          type="text"
          name="b_098dc617c09a7514b2f1ca78d_77c52737df"
          tabindex="-1"
          value=""
        />
      </div>
    </form>
  </div>
  <!--End mc_embed_signup-->
</template>

<script>
export default {
  name: 'MailchimpForm'
}
</script>

<style lang="scss" scoped></style>
