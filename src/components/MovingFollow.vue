<script setup>
	
</script>
	
<template>
	<div class="moving-follow">
		<ul>
			<li>Translating has never been easier Follow  Vicbyte to know more about this Project</li>
			<li>Translating has never been easier Follow  Vicbyte to know more about this Project</li>
			<li>Translating has never been easier Follow  Vicbyte to know more about this Project</li>
			<li>Translating has never been easier Follow  Vicbyte to know more about this Project</li>
			<li>Translating has never been easier Follow  Vicbyte to know more about this Project</li>
			<li>Translating has never been easier Follow  Vicbyte to know more about this Project</li>
			<li>Translating has never been easier Follow  Vicbyte to know more about this Project</li>
			<li>Translating has never been easier Follow  Vicbyte to know more about this Project</li>
			<li>Translating has never been easier Follow  Vicbyte to know more about this Project</li>
			<li>Translating has never been easier Follow  Vicbyte to know more about this Project</li>
		</ul>
	</div>
</template>

<style lang="postcss" scoped>
	.moving-follow {
		@apply overflow-hidden mb-20 lg:mb-24 xl:mb-28;
		ul {
			@apply flex items-center whitespace-nowrap list-disc text-dark dark:text-light;

			li {
				@apply ml-5 text-xs lg:text-sm;
			}
			
			animation: move 30s linear infinite;

			@keyframes move {
				from {
					transform: translateX(0);
				}

				to {
					transform: translateX( calc( -634.21px * 4 ));

				}
			}
		}
	}
</style>