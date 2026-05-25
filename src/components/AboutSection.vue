<template>
  <section id="about" class="py-24 border-t border-border">
    <div class="section-container">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Left: Text -->
        <div class="reveal">
          <p class="font-mono text-accent text-xs tracking-widest uppercase mb-3">// about me</p>
          <h2 class="section-title mb-6">Engineering with<br>purpose & craft.</h2>

          <div class="space-y-4 text-muted leading-relaxed">
            <p>
              I'm a Senior Software Developer based in Pasig, Metro Manila with over
              <span class="text-white font-500">7 years</span> of end-to-end software delivery experience —
              specializing in PHP (Laravel/CodeIgniter) and Vue.js. I take projects from database design
              all the way through containerized deployment.
            </p>
            <p>
              I've architected document routing systems, built HRIS platforms for OFWs, contributed to
              production AI chatbot systems powered by OpenAI, and served as the full-stack maintainer of
              a company's core legacy operational platform — modernizing it, eliminating recurring downtime,
              and extending its lifespan without breaking what already works.
            </p>
            <p>
              I care about <span class="text-white font-500">clean architecture</span>,
              <span class="text-white font-500">system reliability</span>, and code that junior developers
              can actually understand and grow from. Twice named
              <span class="text-white font-500">Employee of the Year</span> — not for writing the most code,
              but for taking ownership, mentoring the team, and delivering things that hold up in production.
            </p>
            <p>
              Outside the terminal, I'm a bassist at church, occasionally pick up a guitar,
              and decompress with Dota, Counter-Strike, or Valorant.
              I used to be a mountaineer — turns out scaling peaks and scaling systems
              share the same kind of patience.
            </p>
          </div>

          <!-- Values -->
          <div class="mt-8 flex flex-wrap gap-2">
            <span v-for="tag in tags" :key="tag" class="px-3 py-1 bg-surface-2 border border-border rounded-full text-xs text-muted hover:text-accent hover:border-accent transition-all cursor-default">
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Right: Card stack -->
        <div class="reveal grid grid-cols-2 gap-4">
          <div
            v-for="(card, i) in cards"
            :key="card.title"
            :class="['glass-card p-5 hover:border-accent/40 transition-all duration-300 group', i === 0 ? 'col-span-2' : '']"
          >
            <div class="flex items-start gap-3">
              <div class="text-2xl">{{ card.icon }}</div>
              <div>
                <div class="font-display font-600 text-white text-sm mb-1">{{ card.title }}</div>
                <div class="text-muted text-xs leading-relaxed">{{ card.desc }}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      tags: [
        'Clean Architecture', 'Scalable Systems', 'API Design', 'Team Mentoring',
        'DevOps', 'AI Integration', 'Legacy Modernization', 'Performance Optimization',
      ],
      cards: [
        {
          icon: '🏗️',
          title: 'End-to-End Delivery',
          desc: 'From requirements gathering and system design to deployment and monitoring — I take projects from idea to production.',
        },
        {
          icon: '🤖',
          title: 'AI Systems',
          desc: 'Built chatbot platforms and automation pipelines using OpenAI, Ollama, and LLaMA.',
        },
        {
          icon: '🏢',
          title: 'Enterprise Scale',
          desc: 'Systems commercially deployed to other companies with hundreds of concurrent users.',
        },
        {
          icon: '🎓',
          title: 'Technical Leadership',
          desc: 'Code reviews, architecture decisions, and mentoring junior developers.',
        },
      ],
    }
  },
}
</script>
