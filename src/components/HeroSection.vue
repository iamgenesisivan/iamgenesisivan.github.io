<template>
  <section id="hero" class="relative min-h-screen flex items-center overflow-hidden noise">
    <!-- Animated background grid -->
    <div class="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>

    <!-- Glowing orbs -->
    <div class="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
    <div class="absolute bottom-1/3 right-0 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style="animation-delay:2s"></div>

    <div class="section-container relative z-10 pt-24 pb-16">
      <div class="max-w-4xl">
        <!-- Status badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-2 border border-border rounded-full text-xs text-muted mb-8 animate-fade-in">
          <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Available for senior roles · Pasig, Metro Manila, PH
        </div>

        <!-- Name -->
        <h1 class="font-display font-700 text-5xl md:text-7xl lg:text-8xl text-white mb-4 leading-none tracking-tight text-balance" style="animation-delay:0.1s">
          Genesis Ivan<br>
          <span class="gradient-text">Aquino</span>
        </h1>

        <!-- Title -->
        <div class="flex items-center gap-3 mb-6" style="animation-delay:0.2s">
          <div class="w-8 h-px bg-accent"></div>
          <p class="font-mono text-accent text-sm tracking-widest uppercase">Senior Software Developer</p>
        </div>

        <!-- Intro -->
        <p class="text-muted text-lg md:text-xl max-w-2xl mb-10 text-balance leading-relaxed" style="animation-delay:0.3s">
          7+ years of end-to-end software delivery specializing in
          <span class="text-white font-500">Laravel</span>,
          <span class="text-white font-500">Vue.js</span>, and
          <span class="text-white font-500">AI systems</span>.
          From architecting scalable platforms to modernizing legacy codebases — shipping production-grade software that actually matters.
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-3 mb-16" style="animation-delay:0.4s">
          <a href="#projects" class="btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5V5h14V1.5a.5.5 0 0 0-.5-.5h-13zM16 6H0v8.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V6z"/>
            </svg>
            View Projects
          </a>
          <a href="/resume.pdf" download class="btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
            Download Resume
          </a>
          <a href="#contact" class="btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
            </svg>
            Contact Me
          </a>
        </div>

        <!-- Stats row -->
        <div class="flex flex-wrap gap-8" style="animation-delay:0.5s">
          <div v-for="stat in stats" :key="stat.label" class="group">
            <div class="font-display font-700 text-2xl text-white group-hover:text-accent transition-colors">{{ stat.value }}</div>
            <div class="text-muted text-xs mt-0.5">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
      <span class="text-muted text-xs tracking-widest uppercase">Scroll</span>
      <div class="w-px h-12 bg-gradient-to-b from-muted to-transparent"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      stats: [
        { value: '7+', label: 'Years Experience' },
        { value: '20+', label: 'Projects Delivered' },
        { value: '2×', label: 'Employee of the Year' },
        { value: '∞', label: 'Coffee Consumed' },
      ],
    }
  },
}
</script>

<style scoped>
.bg-grid {
  background-image:
    linear-gradient(rgba(88,166,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(88,166,255,0.04) 1px, transparent 1px);
  background-size: 40px 40px;
}
</style>
