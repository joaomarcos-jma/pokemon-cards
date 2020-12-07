<template>
  <div class="fill-height">
    <div class="loader">
      <loader :animation-duration="2000" :size="60" color="#ff1d5e" />
    </div>
  </div>
</template>

<script>
import { OrbitSpinner } from "epic-spinners";

export default {
  name: "loading",
  components: {
    loader: OrbitSpinner,
  },
};
</script>
