<template>
  <div
    class="px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16"
  >
    <h2 class="text-base font-semibold leading-6 text-gray-900">
      {{ breederName }}
    </h2>
    <p class="mt-2 text-sm text-gray-500">{{ breederDescription }}</p>
    <dl
      class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 md:gap-y-8 sm:gap-y-4 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-3"
    >
      <div
        v-for="storehorse in storehorses"
        :key="storehorse.horse_id"
        class="group relative"
      >
        <div
          class="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75"
        >
          <img
            :src="
              storehorse.image ||
              'https://madbarn.ca/wp-content/uploads/2023/12/List-of-Gaited-Horse-Breeds.jpg'
            "
            alt="Horse Image"
            class="object-cover object-center"
          />
        </div>
        <h3 class="mt-4 text-sm text-gray-500">
          <a :href="getHorseDetailLink(storehorse.horse_id)">
            <span class="absolute inset-0" />
            {{ storehorse.name }} (
            <time :datetime="storehorse.datetime">
              {{ storehorse.birthyear }}
            </time>
            )
          </a>
        </h3>
        <p class="mt-1 text-lg font-medium">
          <span class="text-gray-900">{{ storehorse.name }}</span>
        </p>
      </div>
    </dl>
  </div>
</template>
  
<script>
export default {
  props: {
    breederName: String,
    breederDescription: String,
    storehorses: Array,
  },
  methods: {
    getHorseDetailLink(horseId) {
      // Implement the logic to generate the horse detail link based on the horseId
      return `#`; // Replace '#' with your actual link
    },
  },
};
</script>

 