import { defineNuxtPlugin } from "#app";
import Toast, { type PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  const options: PluginOptions = {
    transition: "Vue-Toastification__bounce",
    maxToasts: 5,
    newestOnTop: true,
  };

  nuxtApp.vueApp.use(Toast, options);
});
