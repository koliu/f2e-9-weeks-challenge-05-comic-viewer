<template lang="pug">
.app(:class="{'dark-mode' : isDark}")
  button.btn-login(@click.prevent="login", v-if="!loggedIn") LOGIN
  button.btn-login(@click.prevent="logout", v-if="loggedIn") LOGOUT
  .header.bg-black.green.f-logo(@click.prevent="navigator.pushTo('../index')") Comicomic
  .container.bg-black-10
    img.banner(v-if="!loggedIn", src="/src/static/assets/ad-1.png", alt="Vue", title="Vue")
    .header-bar
      .nav
        i.f-title3 My Hexschool
        i.f-title3.fas.fa-caret-right
        .selection
          select.f-sub-title(v-model="selectedChapterId")
            option(v-for="(item, index) in chapters" :value="item.id" :key="index") {{item.title}}
          select.f-sub-title(v-model="selectedPage")
            option(v-for="(item, index) in selectedChapter.images" :value="index" :key="index") Page {{index + 1}}
      .view-mode
        i.fas.fa-sun
        input(id="viewMode" type="checkbox" name="viewMode" v-model="isDark")
        label(for="viewMode")
        i.far.fa-moon
    img.banner(v-if="!loggedIn", src="/src/static/assets/ad-2.png", alt="Bootstrap 4", title="Bootstrap 4")
    .main
      .content
        .left(:class="{'disabled':!currentPage.hasPre}", @click.prevent="currentPage.hasPre && selectedPage--")
          i.fas.fa-angle-left.f-title
        img.center(:src="currentPage.src", :alt="currentPage.alt")
        .right(:class="{'disabled':!currentPage.hasNext}", @click.prevent="currentPage.hasNext && selectedPage++")
          i.fas.fa-angle-right.f-title
      ul.previewer
        li.item(v-for="(item, index) in selectedChapter.images" :key="index" :id="'page_' + index")
          .no.f-sub-title {{selectedPage === index ? '_' : index + 1}}
          .img(@click.prevent="selectedPage = index", :class="getPreviewerClasses(index)")
            img(:src="item")
    img.banner(v-if="!loggedIn", src="/src/static/assets/ad-3.png", alt="HTML 5", title="HTML 5")
</template>
<script>
import SessionStorage from "../js/session-storage.js";
import Data from "../data/data.js";

export default {
  data() {
    return {
      loggedIn: false,
      isDark: false,
      chapters: [],
      selectedChapter: {},
      selectedChapterId: "",
      selectedPage: 0
    };
  },
  methods: {
    login() {
      this.loginManager.login();
      this.loggedIn = this.loginManager.isLoggedIn();
      console.log("reading", "login", this.loggedIn);
    },
    logout() {
      this.loginManager.logout();
      this.loggedIn = this.loginManager.isLoggedIn();
      console.log("reading", "logout", this.loggedIn);
    },
    findChapter(key) {
      console.log("key", key, Data.chapters);
      return Data.chapters.find(e => e.id === key);
    },
    loadData() {
      this.chapters = Data.chapters;
      this.selectedChapter = this.findChapter(this.$route.params.chapter);
      this.selectedChapterId = this.selectedChapter
        ? this.selectedChapter.id
        : "";
      this.selectedPage = 0;
    },
    getPreviewerClasses(index) {
      if (this.selectedPage === index) {
        return { selected: true };
      }
      return { filter10: true };
    },
    scrollTo(selector) {
      const target = document.querySelector(selector);
      const parent = target.parentElement;

      const childWidth = target.offsetWidth;
      const scrollCenter = 0.5 * (parent.offsetWidth - childWidth);
      const targetLeft = target.offsetLeft;
      const parentLeft = parent.offsetLeft;
      const newLeft = targetLeft - scrollCenter - parentLeft;

      if (newLeft !== parent.scrollLeft) {
        parent.scrollLeft = newLeft;
      }
    }
  },
  computed: {
    currentPage() {
      const obj = { src: "", alt: "", hasNext: false, hasPre: false };
      let s = this.selectedChapter;
      if (s && this.selectedPage < s.images.length) {
        obj.src = s.images[this.selectedPage];
        obj.alt = `${s.title}: ${s.desc} - Page ${this.selectedPage + 1}`;

        obj.hasNext = this.selectedPage < s.images.length - 1;
        obj.hasPre = this.selectedPage > 0;
      }

      console.log("currentPage", obj, this.selectedChapter, this.selectedPage);
      return obj;
    }
  },
  watch: {
    selectedChapterId() {
      this.navigator.pushTo(this.selectedChapterId);
      this.loadData();
    },
    selectedPage() {
      this.scrollTo(`#page_${this.selectedPage}`);
    }
  },
  created() {
    this.loadData();
    console.log("findChapter", this.data);

    this.loggedIn = this.loginManager.isLoggedIn();
    console.log("reading", "created", this.loggedIn);
  }
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900");
@import "../css/partials/variables";
@import "../css/partials/predefined";
@import "../css/partials/animations";
@import "../css/partials/text-utils";
.app {
  min-height: 100%;
}
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
  cursor: pointer;
  height: 74px;
  line-height: 74px;
  min-width: 1024px;
  text-align: center;
}

.container {
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  min-height: 100%;
  padding-bottom: 24px;

  .banner {
    cursor: pointer;
    height: 120px;
    margin-top: 24px;
    width: 620px;
  }

  .main {
    align-items: center;
    display: flex;
    flex-flow: column wrap;
    height: 100%;
    // justify-content: center;
    width: 780px;
    .content {
      align-items: start;
      display: flex;
      height: 100%;
      justify-content: center;
      margin-top: 24px;

      .right,
      .left {
        background-color: $color-black;
        color: $color-green;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 930px;
        width: 80px;

        &:hover {
          background-color: $color-green;
          color: $color-black;
        }
      }

      .disabled {
        background-color: transparent;
        cursor: default;
        color: $color-gray;

        &:hover {
          background-color: transparent;
          color: $color-gray;
        }
      }

      .center {
        width: 620px;
      }
    }

    .previewer {
      align-items: start;
      display: flex;
      height: 170px;
      margin-top: 12px;
      overflow-x: auto;
      scroll-behavior: smooth;
      width: 620px;

      .item {
        align-items: center;
        cursor: pointer;
        display: flex;
        flex-flow: column wrap;
        padding: 0 13px;

        .img,
        img {
          height: 120px;
          width: 80px;
        }

        & > * {
          box-sizing: border-box;
        }

        .selected {
          border: 4px solid $color-black;
          position: relative;
          transform: scale(1.1);

          img {
            height: 112px;
            width: 72px;
          }

          &::before {
            border-color: transparent transparent $color-black transparent;
            border-width: 14px;
            display: block;
            width: 0;
            height: 0;
            border-style: solid;
            content: "";
            position: absolute;
            top: -30px;
            left: 22px;
            z-index: 99999;
          }
        }

        .filter10 {
          img {
            filter: brightness(90%);
          }
        }
      }
    }
  }
}

.header-bar {
  align-items: center;
  display: flex;
  height: 35px;
  justify-content: space-between;
  margin-top: 24px;
  transition: background-color 0.5s ease-in 0.2s, color 0.5s ease 0.2s;
  width: 620px;

  .nav {
    align-items: center;
    display: flex;
    line-height: 35px;

    i {
      padding-right: 8px;
    }

    select {
      border: 2px solid $color-black;
      display: inline-block;
      height: 35px;
      width: 127px;

      & option:checked {
        background-color: $color-black;
        color: $color-white;
      }
    }
  }
  .view-mode {
    display: flex;
    align-items: center;

    i {
      font-size: 20px;
      padding-left: 8px;
    }

    input {
      display: none;

      &:checked + label:after {
        right: -2px;
      }
    }

    label {
      background-color: transparent;
      border: 2px solid $color-black;
      box-sizing: border-box;
      cursor: pointer;
      display: inline-block;
      height: 24px;
      position: relative;
      width: 48px;
      transition: border-color 0.5s ease-in 0.2s,
        background-color 0.5s ease-in 0.2s;

      &::after {
        background-color: $color-black;
        border: 2px solid $color-black;
        box-sizing: border-box;
        content: "";
        height: 24px;
        position: absolute;
        right: 22px;
        top: -2px;
        width: 24px;
        transition: right 0.2s ease, border-color 0.5s ease-in 0.2s,
          background-color 0.5s ease-in 0.2s;
      }
    }
  }
}

.app,
.header {
  transition: background-color 0.5s ease-in 0.2s, color 0.5s ease 0.2s;
}

.dark-mode {
  background-color: $color-black;

  .header {
    background-color: $color-green;
    color: $color-black;
  }

  .header-bar {
    i {
      color: $color-white;
    }

    label {
      border-color: $color-white;
      background-color: $color-black;

      &::after {
        background-color: $color-white;
        border-color: $color-white;
      }
    }
  }

  .main {
    .previewer {
      .item {
        .selected {
          border-color: $color-green;

          &::before {
            border-color: transparent transparent $color-green transparent;
          }
        }
      }
    }
  }
}
</style>
