<template>
  <section id="contact" class="py-24 border-t border-border">
    <div class="section-container">
      <div class="max-w-2xl mx-auto text-center reveal">
        <p class="font-mono text-accent text-xs tracking-widest uppercase mb-3">// get in touch</p>
        <h2 class="section-title mb-4">Let's build something.</h2>
        <p class="text-muted mb-12 text-lg">
          Whether it's a senior role, a system you need designed, or just a conversation about scalable architecture —
          I'm happy to talk.
        </p>

        <!-- Contact cards -->
        <div class="grid sm:grid-cols-2 gap-4 mb-10">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            target="_blank"
            class="glass-card p-5 flex items-center gap-4 hover:border-accent/40 hover:bg-surface-2 transition-all duration-200 group text-left"
          >
            <div class="w-10 h-10 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-xl group-hover:border-accent/40 transition-colors">
              {{ link.icon }}
            </div>
            <div>
              <div class="text-muted text-xs mb-0.5">{{ link.label }}</div>
              <div class="font-500 text-white text-sm group-hover:text-accent transition-colors">{{ link.value }}</div>
            </div>
            <svg class="ml-auto text-muted group-hover:text-accent transition-colors" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg>
          </a>
        </div>

        <!-- Resume CTA -->
        <a href="/resume.pdf" download class="btn-primary text-sm px-8 py-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      links: [
        { icon: '✉️', label: 'Email', value: 'aquino.igenesis@gmail.com', href: 'mailto:aquino.igenesis@gmail.com' },
        { icon: '🐙', label: 'GitHub', value: 'github.com/genesisaquino', href: 'https://github.com/genesisaquino' },
        { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/genesisaquino', href: 'https://linkedin.com/in/genesisaquino' },
        { icon: '📍', label: 'Location', value: 'Pasig, Metro Manila · Open to Remote', href: '#' },
      ],
    }
  },
}
</script>
