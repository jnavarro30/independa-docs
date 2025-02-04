<script setup>
defineProps({
  title: String,
  content: Array, // Array of objects (headings, text, images, links)
})
</script>

<template>
  <div class="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h1 class="text-3xl font-bold mb-4">{{ title }}</h1>

    <div v-for="(section, index) in content" :key="index" class="mb-6">
      <h2 v-if="section.heading" class="text-xl font-semibold mb-2">
        {{ section.heading }}
      </h2>
      <ul
        v-for="(text, index) in section.text"
        :key="index"
        class="text-gray-700 leading-relaxed text-justify list-disc"
      >
        <li>{{ text }}</li>
      </ul>
      <!-- <img
        v-if="section.image"
        :src="section.image"
        :alt="section.imageAlt || 'Image'"
        class="w-full h-auto rounded-lg shadow-md mt-2"
      /> -->
      <a
        v-if="section.link"
        :href="section.link.url"
        target="_blank"
        class="text-green-600 hover:underline mt-2 inline-block"
      >
        {{ section.link.text }}
      </a>
    </div>
  </div>
</template>
