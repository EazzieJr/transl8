import { defineStore } from "pinia";

export const useStore = defineStore({
	id: "main",
	state: () => ({
		darkMode: false,
	}),

	getters: {
		darkModeClass() {
			return this.darkMode ? "dark" : "light";
		}
	},

	actions: {
		toggleDarkMode() {
			this.darkMode = !this.darkMode;
		}
	}
});