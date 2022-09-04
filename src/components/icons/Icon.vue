<script setup>
import { defineProps } from 'vue';

defineProps({
	src: String,
	name: String,
});
</script>

<template>
	<component :is="src ? 'img' : 'span'" :src="`../../assets/svg/${src}.svg`" />
</template>



<style>

</style>