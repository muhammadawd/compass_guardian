<template>
  <div id="app">
    <Loader ref="loader" />
    <router-view></router-view>
  </div>
</template>

<script>
  import themeConfig from '@/../themeConfig.js'
  import Loader from '@/layouts/components/Loader';

  export default {
    watch: {
      '$store.state.theme'(val) {
        this.toggleClassInBody(val);
      }
    },
    components: {
      Loader
    },
    async created() {
      try {
        await this.changeLang(this.$ml.current)
      } catch (e) {
        console.log(e);
      }
    },
    methods: {
      changeLang(lang) {
        this.$ml.change(lang)
        let htmlEl = document.querySelector("html");
        const el = document.body;
        let classNameToAdd = 'vuesax-app-is-rtl';
        let classNameToRemove = 'vuesax-app-is-ltr';
        let direction = 'rtl';
        if (lang == 'en') {
          classNameToAdd = 'vuesax-app-is-ltr';
          classNameToRemove = 'vuesax-app-is-rtl';
          direction = 'ltr'
        }

        htmlEl.setAttribute('lang', lang);
        el.setAttribute('dir', direction);
        el.classList.add(classNameToAdd);
        el.classList.remove(classNameToRemove);
      },
      toggleClassInBody(className) {
        if (className == 'dark') {
          if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
          document.body.classList.add('theme-dark');
        } else if (className == 'semi-dark') {
          if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
          document.body.classList.add('theme-semi-dark');
        } else {
          if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
          if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
        }
      },
      handleWindowResize(event) {
        this.$store.dispatch('updateWindowWidth', event.currentTarget.innerWidth);
      },
    },
    mounted() {
      this.toggleClassInBody(themeConfig.theme)
      this.$nextTick(() => {
        window.addEventListener('resize', this.handleWindowResize);
      });
      this.$store.dispatch('updateWindowWidth', window.innerWidth);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleWindowResize);
    },
  }

</script>
