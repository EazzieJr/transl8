<script setup>
import { useStore } from '../stores/index.js';
import { computed } from 'vue';

import Icon from './icons/Icon.vue';
import Light from './icons/Light.vue';
import Dark from './icons/Dark.vue';
import Telegram from './icons/Telegram.vue';
import Twitter from './icons/Twitter.vue';
import Discord from './icons/Discord.vue';
import Github from './icons/Github.vue';

const mode = useStore();

const isDark = computed(() => mode.darkMode);

const toggleMode = () => {
	const html = document.querySelector('html');
	html.classList.toggle('dark');
	mode.toggleDarkMode();
};
</script>

<template>
  <nav>
    <div class="nav-container constraint between">
			<div class="left">
				<a href="." class="logo">
					Trnsl8.
				</a>
			</div>

			<div class="right center">
				<ul class="navlist">
					<li>
						<Telegram />
					</li>

					<li>
						<Twitter />
					</li>

					<li>
						<Discord />
					</li>

					<li>
						<Github />
					</li>
				</ul>

				<button class="mode-toggle" @click="toggleMode">
					<component :is="isDark ? Light : Dark" />
				</button>
			</div>
		</div>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
	@apply py-8 lg:py-10;
	 .nav-container {
		.left {
			a {
				@apply font-migra text-2xl lg:text-4xl xl:text-[40px] text-[#121212] dark:text-white xl:leading-[48.4px];
			}
		}

		.right {
			@apply space-x-4 lg:space-x-5;
			.navlist {
				@apply space-x-4 lg:space-x-5 hidden md:flex items-center;
				li svg {
					@apply w-5 lg:w-6;
				}
			}
		}
	}
}
</style>