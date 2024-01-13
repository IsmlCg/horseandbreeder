
<script setup>
import { ref } from "vue";

const count = ref(1);
const { data: events, refresh } = await useFetch("/api/events", {
  method: "POST",
  params: { id: count },
  transform: (_events) => JSON.parse(_events.body),
});
const increment = () => {
  count.value++;
  refresh();
};
</script>


<template>
  <div>
    <h1>Data from API</h1>
    <img src="/statis/images/horse.jpg" alt="Image 1" />
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <ul>
      <li v-for="event in events" :key="event.id">{{ event.body }}</li>
    </ul>
  </div>
</template>



