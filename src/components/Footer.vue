<script setup>
import Telegram from './icons/Telegram.vue';
import Github from './icons/Github.vue';
import Discord from './icons/Discord.vue';
import Twitter from './icons/Twitter.vue';

</script>

<template>
	<footer>
		<h3>Don't be a <span>stranger</span></h3>

		<div class="join">
			<p>Join our social communities to keep up to date with our latest <br class="hidden md:block"> work and announcements.</p>

			<div class="socials center">
				<a href="/">
					<Telegram />
				</a>

				<a href="/">
					<Twitter />
				</a>

				<a href="/">
					<Discord />
				</a>

				<a href="/">
					<Github />
				</a>
			</div>
		</div>

		<p class="copy">
			<span class="whitespace-pre">© </span>Copyup {{ new Date().getFullYear() }} This is a project by Vicbyte
		</p>
	</footer>
</template>

<style lang="postcss" scoped>
footer {
	@apply px-5 lg:px-6 pb-16 lg:pb-20 xl:pb-[100px];

	h3 {
		@apply font-migra text-[10vw] xl:text-[11.2vw] text-dark dark:text-light text-center;

		span {
			@apply line-through;
			text-decoration-thickness: 0.4vw;
		}
	}

	.join {
		@apply space-y-5 mt-8 md:mt-10 lg:mt-12 xl:mt-16;

		p {
			@apply font-euclid text-explainer text-center text-sm md:text-base xl:text-lg;
		}

		.socials {
			@apply space-x-6 lg:space-x-9 xl:space-x-10;

			a {
				@apply p-2 bg-dark dark:bg-light rounded-full bg-blend-exclusion;

				svg {
					@apply invert w-3 h-3 md:w-4 md:h-4
				}
			}
		}
	}

	.copy {
		@apply text-dark dark:text-light italic text-sm md:text-base xl:text-xl text-center mt-9 md:mt-10 xl:mt-12
	}
}
</style>