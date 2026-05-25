<template>
  <div class="min-h-screen">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    NavBar, HeroSection, AboutSection, SkillsSection,
    ProjectsSection, ExperienceSection, ContactSection, FooterSection,
  },
  mounted() {
    this.initReveal()
  },
  methods: {
    initReveal() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      )
      // Observe after a tick to let DOM settle
      this.$nextTick(() => {
        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
      })
    },
  },
}
</script>
