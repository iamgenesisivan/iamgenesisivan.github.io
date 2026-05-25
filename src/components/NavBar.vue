<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-surface/95 backdrop-blur-md border-b border-border shadow-xl' : 'bg-transparent'
    ]"
  >
    <div class="section-container">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="#hero" class="font-display font-700 text-white text-lg tracking-tight hover:text-accent transition-colors">
          GIA<span class="text-accent">.</span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            class="font-body text-sm text-muted hover:text-white transition-colors duration-200 relative group"
          >
            {{ link.label }}
            <span class="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-200 group-hover:w-full"></span>
          </a>
        </div>

        <!-- Right actions -->
        <div class="hidden md:flex items-center gap-3">
          <!-- <button @click="toggleTheme" class="p-2 rounded-lg text-muted hover:text-white hover:bg-surface-2 transition-all">
            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
            </svg>
          </button> -->
          <a href="#contact" class="btn-primary text-xs px-4 py-2">Hire Me</a>
        </div>

        <!-- Mobile hamburger -->
        <button @click="mobileOpen = !mobileOpen" class="md:hidden p-2 text-muted hover:text-white">
          <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileOpen" class="md:hidden border-t border-border py-4 space-y-3 animate-fade-in">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          class="block text-sm text-muted hover:text-white py-2 transition-colors"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </a>
        <a href="#contact" class="btn-primary text-sm w-full justify-center mt-2" @click="mobileOpen = false">Hire Me</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      scrolled: false,
      mobileOpen: false,
      isDark: true,
      navLinks: [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' },
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    // Check saved theme
    const saved = localStorage.getItem('theme')
    if (saved === 'light') {
      this.isDark = false
      document.documentElement.classList.remove('dark')
      document.documentElement.style.setProperty('--bg', '#f6f8fa')
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 40
    },
    toggleTheme() {
      this.isDark = !this.isDark
      if (this.isDark) {
        document.documentElement.classList.add('dark')
        document.body.style.background = '#0d1117'
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        document.body.style.background = '#f6f8fa'
        localStorage.setItem('theme', 'light')
      }
    },
  },
}
</script>
