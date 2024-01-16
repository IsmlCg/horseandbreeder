<template>
  <div class="lg:col-start-1 lg:row-end-1">
    <div class="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5 p-6">
      <dl class="flex flex-wrap">
        <div class="flex-auto">
          <dt class="text-sm font-semibold leading-6 text-gray-900">
            Contact Information
          </dt>
          <dd class="mt-1 text-base font-semibold leading-6 text-gray-900">
            $ 1.00
          </dd>
        </div>
        <div class="self-end pt-4">
          <dt class="sr-only">Email</dt>
          <a :href="emailLink" target="_blank" rel="noopener noreferrer">
            <dd
              class="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20"
            >
              Email
            </dd>
          </a>
        </div>
        <div
          class="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6"
        >
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            :src="getAbsoluteUrl(breederDetail.logo || '/favicon.ico')"
            alt="Transistor"
            width="158"
            height="48"
          />
        </div>
        <div
          class="mt-6 flex w-full flex-none gap-x-4 border-gray-900/5 px-6 pt-6"
        >
          <dt class="flex-none">
            <span class="sr-only">Client</span>
            <UserCircleIcon class="h-6 w-5 text-gray-400" aria-hidden="true" />
          </dt>
          <dd class="text-sm font-medium leading-6 text-gray-900">
            {{ breederDetail.breedername || "N/A" }}
          </dd>
        </div>

        <div class="mt-4 flex w-full flex-none gap-x-4 px-6">
          <dt class="flex-none">
            <span class="sr-only">Address</span>
            <LocationMarkerIcon
              class="h-6 w-5 text-gray-400"
              aria-hidden="true"
            />
          </dt>
          <dd class="text-sm leading-6 text-gray-500">
            {{ breederDetail.addr1.replace(/\r?\n/g, "") || "N/A" }}
          </dd>
        </div>

        <div class="mt-4 flex w-full flex-none gap-x-4 px-6">
          <dt class="flex-none">
            <span class="sr-only">Phone</span>
            <PhoneIcon class="h-6 w-5 text-gray-400" aria-hidden="true" />
          </dt>
          <dd class="text-sm leading-6 text-gray-500">
            {{ breederDetail.tel || "N/A" }}
          </dd>
        </div>

        <div class="mt-4 flex w-full flex-none gap-x-4 px-6">
          <dt class="flex-none">
            <span class="sr-only">Email</span>
            <MailIcon class="h-6 w-5 text-gray-400" aria-hidden="true" />
          </dt>
          <dd class="text-sm leading-6 text-gray-500">
            {{ breederDetail.email || "N/A" }}
          </dd>
        </div>

        <div class="mt-4 flex w-full flex-none gap-x-4 px-6">
          <dt class="flex-none">
            <span class="sr-only">Web site</span>
            <ExternalLinkIcon
              class="h-6 w-5 text-gray-400"
              aria-hidden="true"
            />
          </dt>
          <dd class="text-sm leading-6 text-gray-500">
            <a
              target="_blank"
              rel="noopener noreferrer"
              :href="
                getAbsoluteUrl(breederDetail.website) ||
                'https://maps.google.com'
              "
              class="text-sm font-semibold leading-6 text-gray-900"
            >
              {{ breederDetail.website || "N/A" }}
            </a>
          </dd>
        </div>
        <!-- Additional details... -->
        <div class="mt-6 border-t border-gray-900/5 px-6 pt-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            :href="
              getAbsoluteUrl(breederDetail.mapref) || 'https://maps.google.com'
            "
            class="text-sm font-semibold leading-6 text-gray-900"
          >
            Show on Google Map <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </dl>
    </div>
  </div>
</template>
  
  <script setup>
import {
  UserCircleIcon,
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon,
  ExternalLinkIcon,
} from "@heroicons/vue/solid"; // Adjust the path based on your project structure
const props = defineProps(["breederDetail"]);
const emailLink = `mailto:${props.breederDetail.email}?subject=Subject%20of%20the%20email&body=Body%20of%20the%20email`;
const getAbsoluteUrl = (website) => {
  if (website && website.startsWith("www.")) {
    return "https://" + website;
  }
  return website;
};
</script>
  