<template>
  <main class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <!-- contact summary -->
      <ContactDetailHorse
        v-if="_storehorses.length > 0"
        :breederDetail="_storehorses[0]['breeder']"
      />

      <!-- breeder detail -->
      <BreederProfile
        :breederName="breederName"
        :breederDescription="breederDescription"
        :storehorses="_storehorses"
      />
    </div>
  </main>
</template>

<script setup>
import BreederProfile from "@/components/BreederProfile.vue"; // Adjust the path based on your project structure
import ContactDetailHorse from "@/components/ContactDetailHorse.vue";
const route = useRoute();
const id = route.params.id;
// Send data to breeder profile
const breederName = "Morningside Stud";
const breederDescription =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const { data: _storehorses, refresh } = await useFetch("/api/storehorse", {
  method: "POST",
  params: { id: id },
  transform: (__storehorses) => JSON.parse(__storehorses.body),
});
</script>
