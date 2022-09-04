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

  <div class="converters constraint">
    <form action="" class="">
      <div class="english">
        <div class="top between">
          <div class="country-info">
            <img src="./assets/svg/british.svg" alt="">

            <span>English</span>
          </div>

          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71967 8.71967C5.42678 9.01256 5.42678 9.48744 5.71967 9.78033L11.9697 16.0303C12.2626 16.3232 12.7374 16.3232 13.0303 16.0303L19.2803 9.78033C19.5732 9.48744 19.5732 9.01256 19.2803 8.71967C18.9874 8.42678 18.5126 8.42678 18.2197 8.71967L12.5 14.4393L6.78033 8.71967C6.48744 8.42678 6.01256 8.42678 5.71967 8.71967Z"/>
          </svg>
        </div>

        <div class="bottom">
          <textarea name="inputtext" id="inputtext" placeholder="This is a dummy text that will be replaced by  your translated data and  will make you rather pleased"></textarea>

          <div class="buttons between">
            <button class="info">
              <svg width="57" height="56" class="dark:fill-white stroke-dark dark:stroke-light fill-light" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="56" height="56" rx="28" class="fill-dark dark:fill-white"/>
                <path d="M29.5445 33.0816L29.564 33.064L29.5816 33.0445C29.698 32.9152 29.8063 32.7657 29.8842 32.566C29.954 32.3964 30 32.2033 30 32C30 31.7941 29.9528 31.5988 29.8815 31.4277C29.8091 31.2538 29.7081 31.096 29.5816 30.9555L29.564 30.936L29.5445 30.9184C29.404 30.7919 29.2462 30.6909 29.0723 30.6185C28.7092 30.4672 28.2908 30.4672 27.9277 30.6185C27.7538 30.6909 27.596 30.7919 27.4555 30.9184L27.436 30.936L27.4184 30.9555C27.2919 31.096 27.1909 31.2538 27.1185 31.4277C27.0472 31.5988 27 31.7941 27 32C27 32.2033 27.046 32.3964 27.1158 32.566C27.1937 32.7657 27.302 32.9152 27.4184 33.0445L27.436 33.064L27.4555 33.0816C27.596 33.2081 27.7538 33.3091 27.9277 33.3815C28.0988 33.4528 28.2941 33.5 28.5 33.5C28.7059 33.5 28.9012 33.4528 29.0723 33.3815C29.2462 33.3091 29.404 33.2081 29.5445 33.0816ZM19 28C19 22.7661 23.2661 18.5 28.5 18.5C33.7339 18.5 38 22.7661 38 28C38 33.2339 33.7339 37.5 28.5 37.5C23.2661 37.5 19 33.2339 19 28ZM28.5 22.75C27.8139 22.75 27.25 23.3139 27.25 24V29C27.25 29.6861 27.8139 30.25 28.5 30.25C29.1861 30.25 29.75 29.6861 29.75 29V24C29.75 23.3139 29.1861 22.75 28.5 22.75Z" class="fill-white dark:fill-dark dark:stroke-dark stoke-white"/>
              </svg>
            </button>

            <button class="translate-now" disabled="false">
              <svg width="25" height="24" class="stroke-white dark:stroke-[#0D0D0D]" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.505 21.9842C18.0164 21.9842 22.4842 17.5164 22.4842 12.005C22.4842 6.49363 18.0164 2.02579 12.505 2.02579C6.99363 2.02579 2.52579 6.49363 2.52579 12.005C2.52579 17.5164 6.99363 21.9842 12.505 21.9842Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.63721 4.02161L14.8002 12.2046L14.8202 7.66402"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.3628 19.9784L10.1998 11.8054L10.1798 16.336"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <span>Translate now</span>
            </button>
          </div>
        </div>
      </div>

      <div class="danish">
        <div class="top between">
          <div class="country-info">
            <img src="./assets/svg/danish.svg" alt="">

            <span>Danish</span>
          </div>

          <svg width="25" height="24" class="arrow" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71967 8.71967C5.42678 9.01256 5.42678 9.48744 5.71967 9.78033L11.9697 16.0303C12.2626 16.3232 12.7374 16.3232 13.0303 16.0303L19.2803 9.78033C19.5732 9.48744 19.5732 9.01256 19.2803 8.71967C18.9874 8.42678 18.5126 8.42678 18.2197 8.71967L12.5 14.4393L6.78033 8.71967C6.48744 8.42678 6.01256 8.42678 5.71967 8.71967Z" />
          </svg>
        </div>

        <div class="bottom">
          <textarea name="inputtext" id="inputtext" placeholder="This is a dummy text that will be replaced by  your translated data and  will make you rather pleased"></textarea>

          <div class="buttons between">
            <button>
            </button>

            <button class="copy-text" disabled="false">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 12.9833V17.1833C16.5 20.6833 15.1 22.0833 11.6 22.0833H7.4C3.9 22.0833 2.5 20.6833 2.5 17.1833V12.9833C2.5 9.48325 3.9 8.08325 7.4 8.08325H11.6C15.1 8.08325 16.5 9.48325 16.5 12.9833Z" fill="#0D0D0D" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.5 6.98325V11.1833C22.5 14.6833 21.1 16.0833 17.6 16.0833H16.5V12.9833C16.5 9.48325 15.1 8.08325 11.6 8.08325H8.5V6.98325C8.5 3.48325 9.9 2.08325 13.4 2.08325H17.6C21.1 2.08325 22.5 3.48325 22.5 6.98325Z" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <span>Copy text</span>
            </button>
          </div>
        </div>
      </div>
    </form>
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
.converters {
  form {
    @apply space-y-8 md:space-y-0 mt-10 lg:mt-12 xl:mt-[60px] md:flex justify-between;

    .english, .danish { 
      @apply bg-light dark:bg-[#0D0D0D] rounded-3xl lg:rounded-[40px] md:w-[48%] min-h-fit;
      box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.12);

      .top {
        @apply py-5 lg:py-[30px] px-7 lg:px-10 border-b-[0.5px] border-dark dark:border-light;

        .country-info {
          @apply flex items-center space-x-4 lg:space-x-5;

          img {
            @apply w-8 h-8 lg:w-10 lg:h-10;
          }

          span {
            @apply text-dark dark:text-light lg:text-xl xl:text-2xl font-medium;
          }
        }

        > svg {
          @apply w-5 lg:w-6 fill-[#24292E] dark:fill-[#D1D6DB];
        }
      }

      .bottom {
        textarea {
          @apply min-w-full max-w-full px-6 lg:px-8 py-7 lg:py-10 resize-none min-h-[220px] max-h-[220px] lg:min-h-[320px] xl:max-h-[360px] xl:min-h-[360px] bg-transparent text-sm lg:text-base text-[#999999];
        }

        .buttons {
          @apply px-7 lg:px-10 pb-7 lg:pb-10;

          .info svg {
            @apply w-11 lg:w-14
          }

          .translate-now {
            @apply p-2.5 lg:p-3 rounded-full bg-dark dark:bg-light flex items-center space-x-2 lg:space-x-2.5 text-xs lg:text-sm text-light dark:text-dark;
            @apply  disabled:bg-[#999999] disabled:text-explainer;

            &:disabled {
              svg {
                @apply stroke-[#666666];
              }
            }
          }

          .copy-text {
            @apply p-2.5 lg:p-3 rounded-full bg-dark dark:bg-light flex items-center space-x-2 lg:space-x-2.5 text-xs lg:text-sm text-light dark:text-dark;
            @apply  disabled:bg-[#999999] disabled:text-explainer;

            svg {
              @apply stroke-white dark:stroke-[#0D0D0D];

              path {
                @apply first:fill-white first:dark:fill-[#0D0D0D]
              }
            }

            &:disabled {
              svg {
                @apply stroke-[#666666];

                path {
                  @apply first:fill-[#666666] first:dark:fill-[#666666]
                }
              }
            }
          }
        }
      }
    }
  }

}
  
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