<template>
  <footer class="border-t border-border py-10">
    <div class="section-container">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="text-center sm:text-left">
          <div class="font-display font-700 text-white">Genesis Ivan Aquino</div>
          <div class="text-muted text-xs mt-0.5">Senior Software Developer</div>
        </div>
        <div class="text-muted text-sm font-mono text-center italic">
          "Ship things that last. Build teams that grow."
        </div>
        <div class="text-muted text-xs">
          &copy; {{ year }} · Built with Vue 3 + Vite
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  computed: {
    year() { return new Date().getFullYear() },
  },
}
</script>
