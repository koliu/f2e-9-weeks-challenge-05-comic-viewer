<template lang="pug">
#app
  button.btn-login(@click="loggedIn = true", v-if="!loggedIn") LOGIN
  button.btn-login(@click="loggedIn = false", v-if="loggedIn") LOGOUT
  .header.bg-black.green.f-logo Comicomic
  .container.bg-black-10
    img.banner(v-if="!loggedIn", src="/src/static/assets/ad-1.png", alt="Vue", title="Vue")
    .header-bar
      .nav CHAPTER: {{chapter}}
      .view-mode
    img.banner(v-if="!loggedIn", src="/src/static/assets/ad-2.png", alt="Bootstrap 4", title="Bootstrap 4")
    .main
      .content
        .left
        .center
        .right
      .previewer

    img.banner(v-if="!loggedIn", src="/src/static/assets/ad-3.png", alt="HTML 5", title="HTML 5")
</template>
<script>
export default {
  data() {
    return {
      loggedIn: false,
      chapter: 0
    }
  },
  created () {
    console.log('created')
    this.chapter = this.$route.params.chapter;
  }
}
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900");
@import "../css/partials/variables";
@import "../css/partials/predefined";
@import "../css/partials/animations";
@import "../css/partials/text-utils";

.btn-login {
  border: 1px dashed $color-yellow;
  background: rgba(255, 255, 255, 0.3);
  color: $color-yellow;
  position: fixed;
  left: 5px;
  top: 5px;
  z-index: 9999;

  &:hover {
    border-color: $color-blue;
    color: $color-blue;
    cursor: pointer;
    font-weight: bolder;
  }
}

.header {
  height: 74px;
  line-height: 74px;
  min-width: 1024px;
  text-align: center;
}

.container {
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  padding-bottom: 24px;

  .banner {
    cursor: pointer;
    height: 120px;
    margin-top: 24px;
    width: 620px;
  }

  .main {
    
  }

}
</style>
