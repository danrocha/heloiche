<template>
  <div>
    <!-- Begin Mailchimp Signup Form -->
    <p  class="mb-4">
      <slot
        >Assine <strong>Heloiche Lê</strong> e receba dicas de leituras a cada duas semanas, direto no seu email:</slot
      >
    </p>
    <form
      action="https://mailchi.us20.list-manage.com/subscribe/post?u=098dc617c09a7514b2f1ca78d&amp;id=77c52737df"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
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
      <p class="flex items-center justify-between">
        <input
          type="submit"
          value="Assinar"
          name="subscribe"
          id="mc-embedded-subscribe"
          class="px-4 py-1 border rounded-full cursor-pointer hover:border-blue-700 hover:text-blue-700"
        />
        <a
          href="https://us20.campaign-archive.com/home/?u=098dc617c09a7514b2f1ca78d&id=77c52737df"
          title="View previous campaigns"
          class="text-base text-gray-700 underline"
          >Veja as edições anteriores.</a
        >
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
