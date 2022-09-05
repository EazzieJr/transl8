<script setup>
import { ref, computed } from 'vue';
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import MovingFollow from './components/MovingFollow.vue';
import Github from './components/icons/Github.vue';


const translate = document.querySelector('.translate-now');

const input = ref("");
const output = ref("");



const isTranslateDisabled = computed(() => {
  if(input.value) return false;
  else return true;
})

const isCopyDisabled = computed(() => {
  if(output.value) return false;
  else return true;
})

// A function to copy the output to the clipboard
const copyToClipboard = () => {
  const el = document.createElement('textarea');
  el.value = output.value;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}
</script>

<template>
  <Navigation class="sticky top-0 mix-blend-exclusion invert dark:invert-0" />

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
    <form @submit.prevent="submit" class="">
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
          <textarea v-model="input" name="inputtext" id="inputtext" placeholder="This is a dummy text that will be replaced by  your translated data and  will make you rather pleased"></textarea>

          <div class="buttons between">
            <button class="info" @click="modalOpened = !modalOpened">
              <svg width="57" height="56" class="dark:fill-white stroke-dark dark:stroke-light fill-light" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="56" height="56" rx="28" class="fill-dark dark:fill-white"/>
                <path d="M29.5445 33.0816L29.564 33.064L29.5816 33.0445C29.698 32.9152 29.8063 32.7657 29.8842 32.566C29.954 32.3964 30 32.2033 30 32C30 31.7941 29.9528 31.5988 29.8815 31.4277C29.8091 31.2538 29.7081 31.096 29.5816 30.9555L29.564 30.936L29.5445 30.9184C29.404 30.7919 29.2462 30.6909 29.0723 30.6185C28.7092 30.4672 28.2908 30.4672 27.9277 30.6185C27.7538 30.6909 27.596 30.7919 27.4555 30.9184L27.436 30.936L27.4184 30.9555C27.2919 31.096 27.1909 31.2538 27.1185 31.4277C27.0472 31.5988 27 31.7941 27 32C27 32.2033 27.046 32.3964 27.1158 32.566C27.1937 32.7657 27.302 32.9152 27.4184 33.0445L27.436 33.064L27.4555 33.0816C27.596 33.2081 27.7538 33.3091 27.9277 33.3815C28.0988 33.4528 28.2941 33.5 28.5 33.5C28.7059 33.5 28.9012 33.4528 29.0723 33.3815C29.2462 33.3091 29.404 33.2081 29.5445 33.0816ZM19 28C19 22.7661 23.2661 18.5 28.5 18.5C33.7339 18.5 38 22.7661 38 28C38 33.2339 33.7339 37.5 28.5 37.5C23.2661 37.5 19 33.2339 19 28ZM28.5 22.75C27.8139 22.75 27.25 23.3139 27.25 24V29C27.25 29.6861 27.8139 30.25 28.5 30.25C29.1861 30.25 29.75 29.6861 29.75 29V24C29.75 23.3139 29.1861 22.75 28.5 22.75Z" class="fill-white dark:fill-dark dark:stroke-dark stoke-white"/>
              </svg>
            </button>

            <button class="translate-now" :disabled="isTranslateDisabled">
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
          <textarea name="outputtext" v-model="output" id="outputtext" disabled placeholder="This is a dummy text that will be replaced by  your translated data and  will make you rather pleased"></textarea>

          <div class="buttons between">
            <button>
            </button>

            <button class="copy-text" :disabled="isCopyDisabled" @click="copyToClipboard">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 12.9833V17.1833C16.5 20.6833 15.1 22.0833 11.6 22.0833H7.4C3.9 22.0833 2.5 20.6833 2.5 17.1833V12.9833C2.5 9.48325 3.9 8.08325 7.4 8.08325H11.6C15.1 8.08325 16.5 9.48325 16.5 12.9833Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.5 6.98325V11.1833C22.5 14.6833 21.1 16.0833 17.6 16.0833H16.5V12.9833C16.5 9.48325 15.1 8.08325 11.6 8.08325H8.5V6.98325C8.5 3.48325 9.9 2.08325 13.4 2.08325H17.6C21.1 2.08325 22.5 3.48325 22.5 6.98325Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class=""/>
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
      <svg width="437" height="437" class="fill-dark dark:fill-light" viewBox="0 0 437 437" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M162.6 36.4167H91.4058C54.625 36.4167 36.4167 54.625 36.4167 91.4058V162.783C36.4167 200.292 54.625 218.5 91.4058 217.59H162.783C200.292 218.5 218.5 200.292 217.59 162.6V91.4058C218.5 54.625 200.292 36.4167 162.6 36.4167ZM164.057 177.713C151.675 177.713 139.658 172.979 129.643 164.603C118.354 172.797 104.698 177.713 89.9492 177.713C82.4838 177.713 76.2929 171.523 76.2929 164.057C76.2929 156.592 82.4838 150.401 89.9492 150.401C108.522 150.401 123.999 137.655 129.643 120.175H89.9492C82.4838 120.175 76.2929 113.984 76.2929 106.519C76.2929 99.0533 82.4838 92.8625 89.9492 92.8625H113.438C114.166 85.9433 119.811 80.4809 126.912 80.4809C134.013 80.4809 139.658 85.9433 140.386 92.8625H145.12C145.303 92.8625 145.485 92.8625 145.485 92.8625H145.849H163.875C171.34 92.8625 177.531 99.0533 177.531 106.519C177.531 113.984 171.523 120.175 163.875 120.175H157.866C156.228 128.915 152.768 137.109 148.216 144.574C153.132 148.216 158.413 150.401 164.057 150.401C171.523 150.401 177.713 156.592 177.713 164.057C177.713 171.523 171.523 177.713 164.057 177.713Z"/>
        <path d="M163.875 414.24C86.1254 414.24 22.7604 350.875 22.7604 273.125C22.7604 265.66 28.9513 259.469 36.4167 259.469C43.8821 259.469 50.0729 265.66 50.0729 273.125C50.0729 327.022 87.5821 372.178 138.019 384.014L133.103 375.82C129.279 369.265 131.282 360.889 137.837 357.065C144.21 353.242 152.768 355.245 156.592 361.8L175.71 393.664C178.26 397.852 178.26 403.133 175.893 407.32C173.343 411.508 168.791 414.24 163.875 414.24Z"/>
        <path d="M400.583 177.531C393.118 177.531 386.927 171.34 386.927 163.875C386.927 109.978 349.418 64.8217 298.981 52.9863L303.897 61.18C307.721 67.735 305.718 76.1108 299.163 79.9346C292.79 83.7583 284.232 81.7554 280.408 75.2004L261.29 43.3359C258.74 39.1479 258.74 33.8675 261.107 29.6796C263.657 25.4917 268.209 22.7604 273.125 22.7604C350.875 22.7604 414.24 86.1254 414.24 163.875C414.24 171.34 408.049 177.531 400.583 177.531Z"/>
        <path d="M308.085 215.769C257.102 215.769 215.587 257.102 215.587 308.267C215.587 359.25 256.92 400.765 308.085 400.765C359.068 400.765 400.583 359.432 400.583 308.267C400.583 257.102 359.25 215.769 308.085 215.769ZM353.242 352.149C346.505 355.427 338.311 352.877 334.851 345.958L331.756 339.767H284.596L281.501 345.958C279.134 350.692 274.218 353.424 269.301 353.424C267.298 353.424 265.113 352.877 263.293 351.967C256.555 348.507 253.824 340.314 257.102 333.577L296.068 255.827C298.435 251.275 303.169 248.362 308.267 248.362C313.365 248.362 318.1 251.275 320.467 256.009L359.432 333.759C362.71 340.496 359.979 348.69 353.242 352.149Z"/>
        <path d="M298.252 312.455H318.1L308.085 292.608L298.252 312.455Z"/>
      </svg>
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

  <div class="modal center" v-if="modalOpened">
    <div class="popup">
      <button class="close place-self-end" @click="modalOpened = !modalOpened">
        <svg width="32" height="32" class="fill-[#24292E] dark:fill-[#D1D6DB]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0487 10.6344C11.6582 10.2438 11.025 10.2438 10.6345 10.6344C10.244 11.0249 10.244 11.6581 10.6345 12.0486L14.5857 15.9998L10.6345 19.951C10.244 20.3416 10.244 20.9747 10.6345 21.3652C11.025 21.7558 11.6582 21.7558 12.0487 21.3652L15.9999 17.414L19.9512 21.3652C20.3417 21.7558 20.9748 21.7558 21.3654 21.3652C21.7559 20.9747 21.7559 20.3416 21.3654 19.951L17.4141 15.9998L21.3654 12.0486C21.7559 11.6581 21.7559 11.0249 21.3654 10.6344C20.9748 10.2438 20.3417 10.2438 19.9512 10.6344L15.9999 14.5856L12.0487 10.6344Z"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 1.33334C7.89986 1.33334 1.33337 7.89983 1.33337 16C1.33337 24.1002 7.89986 30.6667 16 30.6667C24.1002 30.6667 30.6667 24.1002 30.6667 16C30.6667 7.89983 24.1002 1.33334 16 1.33334ZM3.33337 16C3.33337 9.0044 9.00443 3.33334 16 3.33334C22.9956 3.33334 28.6667 9.0044 28.6667 16C28.6667 22.9956 22.9956 28.6667 16 28.6667C9.00443 28.6667 3.33337 22.9956 3.33337 16Z"/>
        </svg>
      </button>

      <div class="texts">
        <h5>Feedback</h5>

        <span>How has the experience using me been?</span>
      </div>

      <form @submit.prevent="submitForm">
        <div class="input-text">
          <p>
            Do have a suggestion, did you find a bug somewhere on the platform or do you think this is not well done, please let me know in the box below.
          </p>
  
          <textarea name=""></textarea>
        </div>
  
        <button class="send">
          <svg width="25" height="25" class="dark:fill-[#0D0D0D] fill-white" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.8 13.063H18.32C17.34 13.063 16.47 13.603 16.03 14.483L15.19 16.143C14.99 16.543 14.59 16.793 14.15 16.793H10.87C10.56 16.793 10.12 16.723 9.83 16.143L8.99 14.493C8.55 13.623 7.67 13.073 6.7 13.073H3.2C2.81 13.073 2.5 13.383 2.5 13.773V17.033C2.5 20.663 4.68 22.833 8.32 22.833H16.7C20.13 22.833 22.24 20.953 22.5 17.613V13.763C22.5 13.383 22.19 13.063 21.8 13.063Z"/>
            <path d="M13.25 4.64324L13.97 5.36324C14.12 5.51324 14.31 5.58324 14.5 5.58324C14.69 5.58324 14.88 5.51324 15.03 5.36324C15.32 5.07324 15.32 4.59324 15.03 4.30324L13.03 2.30324C13.02 2.29324 13.01 2.29324 13.01 2.28324C12.95 2.22324 12.87 2.17324 12.79 2.13324C12.78 2.13324 12.78 2.13324 12.77 2.12324C12.69 2.09324 12.61 2.08324 12.53 2.07324C12.5 2.07324 12.48 2.07324 12.45 2.07324C12.39 2.07324 12.33 2.09324 12.27 2.11324C12.24 2.12324 12.22 2.13324 12.2 2.14324C12.12 2.18324 12.04 2.22324 11.98 2.29324L9.97995 4.29324C9.68995 4.58324 9.68995 5.06324 9.97995 5.35324C10.27 5.64324 10.75 5.64324 11.04 5.35324L11.76 4.63324V5.83324H13.26V4.64324H13.25Z"/>
            <path d="M22.5 11.643V11.683C22.28 11.603 22.04 11.563 21.8 11.563H18.32C16.77 11.563 15.38 12.423 14.69 13.803L13.94 15.283H11.08L10.33 13.813C9.64 12.423 8.25 11.563 6.7 11.563H3.2C2.96 11.563 2.72 11.603 2.5 11.683V11.643C2.5 8.00301 4.67 5.83301 8.31 5.83301H11.75V9.83301C11.75 10.243 12.09 10.583 12.5 10.583C12.91 10.583 13.25 10.243 13.25 9.83301V5.83301H16.69C20.33 5.83301 22.5 8.00301 22.5 11.643Z"/>
          </svg>

          <span>
            Send feedback
          </span>
        </button>
      </form>
    </div>
  </div>
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
                @apply first:fill-white first:dark:fill-[#0D0D0D];
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
    svg {
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

.modal {
  @apply fixed top-0 right-0 bottom-0 left-0 px-4;
  background: rgba(18, 18, 18, 0.2);
  backdrop-filter: blur(8px);

  .popup {
    @apply bg-white dark:bg-[#0D0D0D] rounded-3xl lg:rounded-[40px] w-full mx-auto max-w-[800px] p-5 lg:p-10 grid grid-cols-1 h-fit;

    .texts {
      @apply mt-5 lg:mt-7 space-y-7 lg:space-y-10 text-center mb-7 lg:mb-10;

      h5 {
        @apply font-migra text-3xl lg:text-4xl xl:text-5xl text-dark dark:text-light uppercase;
      }

      span {
        @apply font-sans text-dark dark:text-light font-semibold text-sm lg:text-xl xl:text-2xl;
      }
    }

    form {
      @apply space-y-10 lg:space-y-12 xl:space-y-[60px];

      .input-text {
        @apply space-y-5 lg:space-y-8 xl:space-y-10;

        p {
          @apply font-medium text-explainer text-xs lg:text-xl;
        }

        textarea {
          @apply max-w-full min-w-full min-h-[180px] max-h-[180px] lg:max-h-[210px] xl:max-h-[240px] resize-none p-4 lg:p-5 border border-[#999999] bg-transparent
        }
      }

      button {
        @apply dark:bg-white bg-dark rounded-full p-3 lg:p-4 w-fit space-x-2 lg:space-x-2.5 text-white dark:text-dark flex items-center mx-auto;

        svg {
          @apply w-5 lg:w-6;
        }
      }
    }
  }
}
</style>