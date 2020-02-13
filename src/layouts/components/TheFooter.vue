<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <footer class="the-footer flex-wrap justify-between" :class="classes">
    <span>COPYRIGHT &copy; {{ new Date().getFullYear() }}
      <a class="text-bold" href="" target="_blank" rel="nofollow">{{getCopyRights()}}</a>
      , All rights Reserved <small>V1.01.15 </small>
      <b>powered by <a href="http://approc.com"> Approc</a></b>
    </span>
    <!--    <span class="md:flex hidden items-center"> -->
    <!--            <feather-icon icon="HeartIcon" svgClasses="stroke-current text-danger w-6 h-6" class="ml-2"/>-->
    <!--        </span>-->
  </footer>
</template>

<script>
  export default {
    name: "the-footer",
    props: {
      classes: {
        type: String,
      },
    },
    methods: {
      getCopyRights() {
        return window.location.host
      }
    }
  }
</script>
