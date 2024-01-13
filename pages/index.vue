<template>
  <div>
    <h1>Data from API</h1>
    <ul>
      <li v-for="event in events" :key="event.id">{{ event.body }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [],
    };
  },
  async mounted() {
    try {
      const response = await $fetch("/api/events");
      // console.log("API Response:", response);

      // Check if the response has a 'data' property
      if (response.status == 200) {
        // Assuming response.data is a JSON string
        const parsedData = JSON.parse(response.body);
        this.events = parsedData;
      } else {
        console.error("API response is missing the 'data' property:", response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
};
</script>
