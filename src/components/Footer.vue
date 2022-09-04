<script setup>

</script>

<template>
	<footer>
		<h2>Don't be a <span>stranger</span></h2>

		<div class="join">
			<p>Join our social communities to keep up to date with our latest work and announcements.</p>
		</div>
	</footer>
</template>

<style lang="postcss" scoped>
footer {
	@apply px-5 lg:px-6;

	h2 {
		@apply font-migra text-[10vw] text-dark dark:text-light text-center;

		span {
			@apply line-through;
			text-decoration-thickness: 0.4vw;
		}
	}

	.join {
		@apply space-y-5;

		p {
			@apply font-euclid
		}
	}
}
</style>