<template>
  <h4>You are in home Admin.</h4>
</template>
<script>

  export default {

    mounted() {
      let auth_data = JSON.parse(window.ls.getFromStorage('auth_data'));
      if (auth_data.type == 'student') {
        this.$router.push({name: 'home_student'})
      } else if (auth_data.type == 'teacher') {
        this.$router.push({name: 'home_teacher'})
      } else {
        console.log('i\'m here')
      }
    }
  }
</script>
