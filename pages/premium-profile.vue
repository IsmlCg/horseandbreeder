<template>
  <main class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <!-- Invoice summary -->
      <div class="lg:col-start-1 lg:row-end-1">
        <div class="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5 p-6">
          <dl class="flex flex-wrap">
            <div class="flex-auto">
              <dt class="text-sm font-semibold leading-6 text-gray-900">
                Contact Information
              </dt>
              <dd class="mt-1 text-base font-semibold leading-6 text-gray-900">
                $10,560.00
              </dd>
            </div>
            <div class="self-end pt-4">
              <dt class="sr-only">Status</dt>
              <dd
                class="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20"
              >
                Paid
              </dd>
            </div>
            <div
              class="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6"
            >
              <dt class="flex-none">
                <span class="sr-only">Client</span>
                <div class="h-6 w-5 text-gray-400" aria-hidden="true"></div>
              </dt>
              <dd class="text-sm font-medium leading-6 text-gray-900">
                Alex Curren
              </dd>
            </div>
            <!-- Additional details... -->
          </dl>
          <div class="mt-6 border-t border-gray-900/5 px-6 pt-6">
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
              >Download receipt <span aria-hidden="true">&rarr;</span></a
            >
          </div>
        </div>
      </div>

      <!-- Invoice -->
      <div
        class="px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16"
      >
        <h2 class="text-base font-semibold leading-6 text-gray-900">
          Morningside Stud
        </h2>
        <p class="mt-2 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <!-- "mt-6 grid grid-cols-1 text-sm leading-6 sm:grid-cols-2 -->
        <dl
          class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 md:gap-y-8 sm:gap-y-4 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-3"
        >
          <div v-for="order in orders" :key="order.id" class="group relative">
            <div
              class="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75"
            >
              <img
                :src="order.imageSrc"
                :alt="order.imageAlt"
                class="object-cover object-center"
              />
            </div>
            <h3 class="mt-4 text-sm text-gray-500">
              <a :href="order.href">
                <span class="absolute inset-0" />
                {{ order.productName }}
              </a>
            </h3>
            <p class="mt-1 text-lg font-medium">
              <span v-if="order.status === 'delivered'" class="text-gray-900"
                >Delivered on
                <time :datetime="order.datetime">{{ order.date }}</time></span
              >
              <span
                v-else-if="order.status === 'out-for-delivery'"
                class="text-indigo-600"
                >Out for delivery</span
              >
              <span
                v-else-if="order.status === 'cancelled'"
                class="text-gray-500"
                >Cancelled</span
              >
            </p>
          </div>
        </dl>
      </div>
    </div>
  </main>
</template>

<script setup>
const orders = [
  {
    id: 3,
    date: "June 6, 2021",
    datetime: "2021-06-06",
    status: "cancelled",
    productName: "Drawtop Canister",
    href: "#",
    imageSrc:
      "https://madbarn.ca/wp-content/uploads/2023/12/List-of-Gaited-Horse-Breeds.jpg",
    imageAlt:
      "Orange canvas cylindrical bag with drawstring top, front zipper pouch, and black shoulder strap.",
  },
  {
    id: 4,
    date: "May 24, 2021",
    datetime: "2021-05-24",
    status: "delivered",
    productName: "High Wall Tote",
    href: "#",
    imageSrc:
      "https://www.horseillustrated.com/wp-content/uploads/2019/05/alert-chestnut-horse-in-field-ss.jpg",
    imageAlt:
      "White canvas tote bag with black drawstring liner and white handle.",
  },
  {
    id: 3,
    date: "June 6, 2021",
    datetime: "2021-06-06",
    status: "cancelled",
    productName: "Drawtop Canister",
    href: "#",
    imageSrc:
      "https://madbarn.ca/wp-content/uploads/2023/12/List-of-Gaited-Horse-Breeds.jpg",
    imageAlt:
      "Orange canvas cylindrical bag with drawstring top, front zipper pouch, and black shoulder strap.",
  },
  {
    id: 4,
    date: "May 24, 2021",
    datetime: "2021-05-24",
    status: "delivered",
    productName: "High Wall Tote",
    href: "#",
    imageSrc:
      "https://www.horseillustrated.com/wp-content/uploads/2019/05/alert-chestnut-horse-in-field-ss.jpg",
    imageAlt:
      "White canvas tote bag with black drawstring liner and white handle.",
  },
  {
    id: 3,
    date: "June 6, 2021",
    datetime: "2021-06-06",
    status: "cancelled",
    productName: "Drawtop Canister",
    href: "#",
    imageSrc:
      "https://madbarn.ca/wp-content/uploads/2023/12/List-of-Gaited-Horse-Breeds.jpg",
    imageAlt:
      "Orange canvas cylindrical bag with drawstring top, front zipper pouch, and black shoulder strap.",
  },
  {
    id: 4,
    date: "May 24, 2021",
    datetime: "2021-05-24",
    status: "delivered",
    productName: "High Wall Tote",
    href: "#",
    imageSrc:
      "https://www.horseillustrated.com/wp-content/uploads/2019/05/alert-chestnut-horse-in-field-ss.jpg",
    imageAlt:
      "White canvas tote bag with black drawstring liner and white handle.",
  },
  {
    id: 3,
    date: "June 6, 2021",
    datetime: "2021-06-06",
    status: "cancelled",
    productName: "Drawtop Canister",
    href: "#",
    imageSrc:
      "https://madbarn.ca/wp-content/uploads/2023/12/List-of-Gaited-Horse-Breeds.jpg",
    imageAlt:
      "Orange canvas cylindrical bag with drawstring top, front zipper pouch, and black shoulder strap.",
  },
  {
    id: 4,
    date: "May 24, 2021",
    datetime: "2021-05-24",
    status: "delivered",
    productName: "High Wall Tote",
    href: "#",
    imageSrc:
      "https://www.horseillustrated.com/wp-content/uploads/2019/05/alert-chestnut-horse-in-field-ss.jpg",
    imageAlt:
      "White canvas tote bag with black drawstring liner and white handle.",
  },
  // More orders...
];
</script>
