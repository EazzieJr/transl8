<script setup>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import MovingFollow from './components/MovingFollow.vue';
import Github from './components/icons/Github.vue';



</script>

<template>
  <Navigation />

  <div class="trnsl constraint">
    <div class="trnsl-container between">
      <div class="left">
        <h5>Danish Translator</h5>
  
        <p>
          Translate to English, like a pro .
        </p>
      </div>
  
      <div class="right">
        <a href="/">
          <Github />
  
          <span>View on Github</span>
        </a>
      </div>
    </div>
  </div>

  <div class="converters">

  </div>

  <section class="translate-talk md:center constraint">
    <div class="image">
      <img src="./assets/svg/translate.svg" alt="">
    </div>

    <div class="texts">
      <h2>Translate to Danish in one click</h2>

      <p>Thanks to <span>Vicbyte</span>’s creation, You can now translate from English language to Danish language and have fun doing it! <br><br>
        It doesnt matter how long of a text it is that you want to translate, this platform is capable. You can do all this with <span>Trnsl8</span>.
      </p>
    </div>
  </section>
  
  <MovingFollow />

  <Footer />
</template>

<style lang="postcss" scoped>
.trnsl {
  @apply mt-5;
  .trnsl-container {
    @apply py-3 lg:py-5 px-5 lg:px-10 rounded-full w-full bg-dark dark:bg-light;
    .left {
      @apply flex items-center divide-x-2 divide-light dark:divide-dark;

      h5 {
        @apply text-base lg:text-xl xl:text-2xl font-sans font-medium text-light dark:text-dark md:pr-5 lg:pr-8 xl:pr-10;
      }

      p {
        @apply md:pl-5 lg:pl-8 xl:pl-10 hidden md:block md:text-sm lg:text-base xl:text-xl text-light dark:text-dark;
      }
    } 

    .right {
      a {
        @apply rounded-full bg-light dark:bg-dark p-2.5 lg:p-4 flex items-center space-x-2 lg:space-x-2.5 text-dark dark:text-light text-xs lg:text-sm;

        img {
          @appl w-5 lg:w-6;
        }
      }
    }
  }
}
  
.translate-talk {
  @apply mb-24 lg:mb-28 xl:mb-40 space-y-14 md:space-x-24 xl:space-x-40 md:space-y-0;
  @apply mt-24 md:mt-32 lg:mt-40 xl:mt-72;

  .image {
    img {
      @apply w-72 md:min-w-[260px] min-h-[260px] lg:w-[320px] lg:h-[320px] xl:w-[437px] xl:h-[437px] mx-auto
    }
  }

  .texts {
    @apply space-y-12 lg:space-y-16 xl:space-y-20 lg:w-[33%] xl:w-[491px];

    h2 {
      @apply text-dark dark:text-light font-migra text-4xl xl:text-5xl tracking-widest uppercase xl:leading-[58px];
    }

    p {
      @apply xl:text-2xl font-sans text-explainer tracking-wide xl:leading-[29px];

      span {
        @apply text-dark dark:text-light font-semibold
      }
    }
  }
}
</style>