<template>
  <section id="skills" class="py-24 bg-surface-1 border-t border-border">
    <div class="section-container">
      <div class="reveal text-center mb-14">
        <p class="font-mono text-accent text-xs tracking-widest uppercase mb-3">// tech stack</p>
        <h2 class="section-title">Tools of the trade.</h2>
        <p class="section-subtitle max-w-xl mx-auto">Seven years of choosing the right tool for the right problem.</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
        <div
          v-for="category in skillCategories"
          :key="category.name"
          class="glass-card p-6 hover:border-accent/30 transition-all duration-300 group"
          :class="category.wide ? 'md:col-span-2 lg:col-span-1' : ''"
        >
          <div class="flex items-center gap-3 mb-5">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center text-lg" :style="`background: ${category.color}20`">
              {{ category.icon }}
            </div>
            <div>
              <div class="font-display font-600 text-white text-sm">{{ category.name }}</div>
            </div>
          </div>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="px-2.5 py-1 bg-surface-2 border border-border rounded-md text-xs text-muted font-mono hover:text-white hover:border-accent/50 hover:bg-surface-3 transition-all cursor-default"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      skillCategories: [
        {
          name: 'Backend',
          icon: '⚙️',
          color: '#58a6ff',
          skills: ['PHP', 'Laravel', 'CodeIgniter', 'REST APIs', 'JWT', 'Microservices', 'Node.js', 'Python', 'C#/.NET'],
        },
        {
          name: 'Frontend',
          icon: '🎨',
          color: '#79c0ff',
          skills: ['Vue.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'jQuery'],
        },
        {
          name: 'AI & Automation',
          icon: '🤖',
          color: '#a5d6ff',
          skills: ['OpenAI API', 'Ollama', 'LLaMA', 'Deepseek', 'Claude'],
        },
        {
          name: 'Databases',
          icon: '🗄️',
          color: '#56d364',
          skills: ['MySQL', 'PostgreSQL', 'MS SQL', 'Oracle SQL', 'Database Architecture'],
        },
        {
          name: 'DevOps & Infra',
          icon: '🐳',
          color: '#f78166',
          skills: ['Docker', 'Nginx', 'Linux',],
        },
        {
          name: 'Other',
          icon: '🛠️',
          color: '#d2a8ff',
          skills: ['Git', 'GitHub', 'WordPress', 'Architecture Planning', 'System Optimization', 'Third-party API Integration', 'Code Review'],
        },
      ],
    }
  },
}
</script>
