<template lang="pug">
#app
  button.btn-login(@click.prevent="login", v-if="!this.loginManager.isLoggedIn()") LOGIN
  button.btn-login(@click.prevent="logout", v-if="this.loginManager.isLoggedIn()") LOGOUT
  .header.bg-black.green.f-logo Comicomic
  .container.bg-black-10
    img.banner(v-if="!this.loginManager.isLoggedIn()", src="/src/static/assets/ad-1.png", alt="Vue", title="Vue")
    .main
      img.left(src="/src/static/assets/comic cover.png", alt="MY HEXSCHOOL vol.1")
      .right
        header.f-title.white.bg-black MY HEXSCHOOL
        ul.info
          li.item
            .title.f-sub-title Genres
            .content Fusce/vehicula/dolor
          li.item
            .title.f-sub-title Author
            .content Namae Shiranai
          li.item
            .title.f-sub-title Status
            .content Ongoing
          li.item
            .title.f-sub-title Rate
            .content
              .star.fas.fa-star
              .star.fas.fa-star
              .star.fas.fa-star
              .star.fas.fa-star
              .star.far.fa-star
          li.item.summary
            .title.f-sub-title Summary
            .content
              .paragraph.f-paragraph If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die. 
              .paragraph.f-paragraph Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals. 
    img.banner(v-if="!this.loginManager.isLoggedIn()", src="/src/static/assets/ad-2.png", alt="Bootstrap 4", title="Bootstrap 4")
    .chapters
      .title.f-title2.bg-black.white All Chapters
      ul.list
        li.item.f-sub-title(@click.prevent="navigator.pushTo('/reading/chapter1')") Chapter 1: The F2E Challenge Start!
        li.item.f-sub-title.new(@click.prevent="navigator.pushTo('/reading/chapter2')") Chapter 2: Todo List is Going Crazy!
    img.banner(v-if="!this.loginManager.isLoggedIn()", src="/src/static/assets/ad-3.png", alt="HTML 5", title="HTML 5")
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    login() {
      this.loginManager.login();
      this.loggedIn = this.loginManager.isLoggedIn();
      this.$forceUpdate();
      // console.log('index','login',this.loginManager.isLoggedIn());
    },
    logout() {
      this.loginManager.logout();
      this.$forceUpdate();
      // console.log('index','logout',this.loginManager.isLoggedIn());
    }
  },
  create() {
    console.log('index','create',this.loginManager.isLoggedIn());
  },
  updated() {
    console.log('index', 'updated', this.loginManager.isLoggedIn());
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
    display: flex;
    margin-top: 24px;
    
    .left {
      border: 4px solid $color-black;
      box-sizing: border-box;
      height: 446px;
      width: 300px;
    }

    .right {
      width: 320px;

      header {
        height: 52px;
        line-height: 52px;
        text-align: center;
      }

      .info {
        display: flex;
        flex-flow: column wrap;
        padding-left: 24px;
        padding-top: 24px;

        .item {
          display: flex;
          line-height: 24px;
          padding-bottom: 8px;
          
          .title {
            width: 72px;
          }

          .content {
            .star {
              margin-right: 10px;
              font-size: 16px;
            }
          }

          &.summary {
            flex-flow: column wrap;
            margin-top: 16px;

            .content {
              margin-top: 8px;
              line-height: 24px;

              .paragraph:not(:last-child) {
                padding-bottom: 24px;
              }
            }
          }
        }
      }
    }
  }

  .chapters {
    display: flex;
    flex-flow: column wrap;
    margin-top: 24px;
    width: 620px;

    .title {
      height: 44px;
      line-height: 44px;
      text-align: center;
      width: 181px;
    }

    .list {
      background-color: $color-white;
      border: 4px solid $color-black;
      box-sizing: border-box;
      
      
      .item {
        // height: 42px;
        line-height: 42px;
        padding: 0 22px;

        &.new::after {
          @extend .f-label;
          content: 'NEW';
          background-color: $color-green;
          color: $color-black;
          margin-left: 16px;
          padding: 0 12px;
          width: 55px;
        }
      }
      .item:first-child {
        margin-top: 11px;
      }
      .item:last-child {
        margin-bottom: 11px;
      }
      .item:hover {
        background-color: $color-black;
        color: $color-white;
        cursor: pointer;
      }
    }
  }
}
</style>
