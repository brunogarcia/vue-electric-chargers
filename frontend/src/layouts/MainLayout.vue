<template>
  <div class="app">
    <header>
      <div class="section">
        <p>Knowledge Frontend Test</p>
        <div class="text-align-right">
          <p>
            <img :src="LargeWallboxIcon" alt="Wallbox" class="hide-small" />
            <img :src="SmallWallboxIcon" alt="Wallbox" class="hide-large" />
          </p>
        </div>
      </div>
    </header>
    <main>
      <div class="section">
        <slot />
      </div>
    </main>
    <footer>
      <div class="section">
        <p class="hide-small">Bruno Garcia</p>
        <div class="text-align-right">
          <p class="footer--nav">
            <a href="mailto:bruno.garcia.echegaray@gmail.com">
              bruno.garcia.echegaray@gmail.com
            </a>
            <a href="https://github.com/brunogarcia/">
              <img :src="GithubIcon" alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/bruno-garcia-echegaray/">
              <img :src="LinkedinIcon" alt="Linkedin" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LargeWallboxIcon from "@/assets/icons/large_wallbox.svg";
import SmallWallboxIcon from "@/assets/icons/small_wallbox.svg";
import GithubIcon from "@/assets/icons/github.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";

export default defineComponent({
  name: "MainLayout",

  setup() {
    return {
      LargeWallboxIcon,
      SmallWallboxIcon,
      GithubIcon,
      LinkedinIcon,
    };
  },
});
</script>

<style lang="scss">
@import "@/assets/styles/variables";
@import "@/assets/styles/mixins";
@import "@/assets/styles/common";

@include for-phone-only {
  .hide-small {
    display: none;
  }
}

@include for-tablet-portrait-up {
  .hide-large {
    display: none;
  }
}

.app {
  align-items: center;
  background-color: var(--color-gray-light);
  display: flex;
  flex-direction: column;
  height: var(--app-height);

  header,
  footer,
  main {
    margin: auto;
    width: 100%;
  }

  header .section,
  footer .section,
  main .section {
    height: 100%;
    width: 80%;
    margin: auto;
  }

  header {
    flex: 0 0 var(--header-height);
  }

  main {
    flex: 1;
    padding-bottom: 50px;
    background-color: var(--color-gray-light);
  }

  footer {
    flex: 0 0 var(--footer-height);
    a {
      color: var(--color-light);
      text-decoration: none;
    }
    .footer--nav {
      a {
        margin-left: 26px;
      }
    }
  }

  header,
  footer {
    background-color: var(--color-dark);
    color: var(--color-light);
    font-size: 20px;
    line-height: 28px;

    .section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
