<template>
  <div class="p-4 mx-auto text-center bg-gray-100 rounded sm:px-8 md:text-left">
    <!-- Begin Mailchimp Signup Form -->
    <p class="mb-4 text-lg text-gray-700 md:text-xl">
      <slot
        >Assine <strong>📚Heloiche Lê</strong> e receba dicas de leituras a cada duas semanas, direto no seu email&nbsp;&darr;</slot
      >
    </p>
    <form
      action="https://mailchi.us20.list-manage.com/subscribe/post?u=098dc617c09a7514b2f1ca78d&amp;id=77c52737df"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
      class="mx-auto md:w-full md:flex md:items-center"
      novalidate
    >
      <p class="mb-4 text-left md:mr-4">
        <label for="mce-EMAIL" class="font-sans text-sm">Email </label>
        <input type="email" value="" name="EMAIL" class="w-full p-2 font-sans text-base border rounded shadow-inner" id="mce-EMAIL" placeholder="Insira seu email"/>
      </p>
      <p>
        <input
          type="submit"
          value="Assinar"
          name="subscribe"
          id="mc-embedded-subscribe"
          class="px-4 py-1 font-sans text-sm font-semibold text-white bg-teal-400 border border-teal-400 rounded-full cursor-pointer md:mt-2 hover:text-teal-400 hover:bg-white"
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
  name: 'MailchimpFormSimple'
}
</script>

<style lang="scss" scoped></style>
