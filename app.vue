<script setup lang="ts">
const nav = [
  { label: "Home", to: "/" },
  { label: "Premium profile", to: "/premium-profile/14" },
];
</script>

<template>
  <div>
    <div class="bg-gray-800 text-white p-4">
      <nav class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <ul class="flex space-x-4">
            <li v-for="item in nav" :key="item.to">
              <NuxtLink
                :to="item.to"
                class="hover:text-gray-300 focus:text-gray-300"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
      <NuxtLoadingIndicator />
    </div>
    <NuxtPage />
  </div>
</template>



<!-- #instal
npx nuxi init .
    yarn add -D @nuxtjs/tailwindcss

    yarn add @prisma/cli @prisma/client
    npx prisma init
    npx prisma generate
    yarn global add prisma
      



    git remote add origin https://github.com/IsmlCg/horseandbreeder.git
    git branch -M main
    git push -u origin main
    git fetch origin main
git reset --hard origin/main -->