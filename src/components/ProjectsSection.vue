<template>
  <section id="projects" class="py-24 border-t border-border">
    <div class="section-container">
      <div class="reveal text-center mb-14">
        <p class="font-mono text-accent text-xs tracking-widest uppercase mb-3">// selected work</p>
        <h2 class="section-title">Projects that shipped.</h2>
        <p class="section-subtitle max-w-xl mx-auto">Real systems built for real business problems — deployed, maintained, and evolved.</p>
      </div>

      <!-- Featured project: Document Routing System -->
      <div class="reveal mb-8">
        <div class="glass-card overflow-hidden hover:border-accent/40 transition-all duration-300 group">
          <div class="grid md:grid-cols-2">
            <!-- Visual placeholder -->
            <div class="relative h-56 md:h-auto bg-surface-2 overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center">
                  <div class="text-6xl mb-3 animate-float">📄</div>
                  <div class="font-mono text-xs text-muted">document-routing-system</div>
                </div>
              </div>
              <div class="absolute inset-0 bg-gradient-to-r from-transparent to-surface-1/50 hidden md:block"></div>
              <div class="absolute bottom-4 left-4 right-4 bg-surface/90 border border-border rounded-lg p-3 font-mono text-xs">
                <div class="text-green-400">▶ Document routed → Finance Dept</div>
                <div class="text-muted">Status: <span class="text-accent">Awaiting Approval</span></div>
              </div>
            </div>

            <!-- Content -->
            <div class="p-7 flex flex-col justify-between">
              <div>
                <div class="mb-2">
                  <span class="text-xs text-accent font-mono bg-accent-glow px-2 py-0.5 rounded mb-2 inline-block">Featured</span>
                  <h3 class="font-display font-700 text-white text-xl">Enterprise Document Routing System</h3>
                </div>
                <p class="text-muted text-sm leading-relaxed mb-4">
                  Architected and delivered full-stack document workflow system end-to-end with Laravel and Vue.js.
                  Features role-based routing, multi-department approval chains, audit logs, and automated
                  notifications — significantly reducing manual document handling time across departments.
                </p>
                <div class="glass-card p-3 mb-4 text-xs">
                  <div class="text-green-400 font-mono mb-1">Business Impact</div>
                  <div class="text-muted">Eliminated manual routing bottlenecks across departments. Core operational system at Accent Micro Technologies.</div>
                </div>
              </div>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="tag in featured.tags" :key="tag" class="px-2 py-0.5 bg-surface-2 border border-border rounded text-xs text-muted font-mono">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Project grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
        <div
          v-for="project in projects"
          :key="project.title"
          class="glass-card flex flex-col hover:border-accent/40 transition-all duration-300 group overflow-hidden"
        >
          <div class="h-36 bg-surface-2 flex items-center justify-center relative overflow-hidden border-b border-border">
            <div class="text-5xl group-hover:scale-110 transition-transform duration-300">{{ project.emoji }}</div>
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 :style="`background: radial-gradient(ellipse at center, ${project.glow}10 0%, transparent 70%)`"></div>
          </div>

          <div class="p-5 flex flex-col flex-1">
            <h3 class="font-display font-600 text-white text-base mb-2">{{ project.title }}</h3>
            <p class="text-muted text-xs leading-relaxed mb-3 flex-1">{{ project.desc }}</p>

            <div v-if="project.impact" class="text-xs text-green-400/80 font-mono bg-surface-2 px-3 py-2 rounded mb-4">
              ↑ {{ project.impact }}
            </div>

            <div class="flex flex-wrap gap-1">
              <span v-for="tag in project.tags" :key="tag" class="px-1.5 py-0.5 bg-surface-3 rounded text-xs text-muted font-mono">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      featured: {
        tags: ['Laravel', 'Vue.js', 'MySQL', 'REST API', 'Docker', 'Nginx'],
      },
      projects: [
        {
          title: 'AI Chatbot Platform',
          desc: 'Contributing to a production AI chatbot system using OpenAI API. Working on user-facing chat UI and the admin management portal for monitoring conversations and system performance.',
          impact: 'Actively in production — reducing manual support load through intelligent automation',
          tags: ['Laravel', 'Vue.js', 'OpenAI API', 'Ollama', 'LLaMA', 'Python'],
          emoji: '🤖',
          glow: '#58a6ff',
        },
        {
          title: 'Internal System Modernization',
          desc: 'Full-stack maintainer of the company\'s core legacy operational platform — contributing new features, eliminating recurring downtime, and extending system lifespan through code refactors and query enhancements.',
          impact: 'Eliminated recurring downtime — extended critical system lifespan significantly',
          tags: ['Laravel', 'CodeIgniter', 'PHP', 'MySQL', 'Query Optimization', 'Refactoring'],
          emoji: '🔧',
          glow: '#ffa657',
        },
        {
          title: 'HRIS Platform for OFWs',
          desc: 'Full-featured Human Resource Information System for Overseas Filipino Workers — managing payroll, attendance, and employee records for a distributed workforce across multiple agencies.',
          impact: null,
          tags: ['Laravel', 'Vue.js', 'MySQL', 'REST API'],
          emoji: '👷',
          glow: '#56d364',
        },
        {
          title: 'OFW Contact Center & Membership System',
          desc: 'Multi-channel contact center system and public-facing website for OFW members. Includes a Membership System automating enrollment workflows and reducing manual processing for the operations team.',
          impact: null,
          tags: ['Laravel', 'Vue.js', 'JavaScript', 'MySQL'],
          emoji: '📞',
          glow: '#79c0ff',
        },
        {
          title: 'School Management System',
          desc: 'Contributed to Schuler — a multi-module School Management System handling student records, scheduling, and billing for an educational institution.',
          impact: null,
          tags: ['C#', 'ASP.NET', 'MS SQL', 'Laravel', 'MySQL'],
          emoji: '🎓',
          glow: '#d2a8ff',
        },
        {
          title: 'Warehouse Management System',
          desc: 'Real-time inventory tracking and order fulfillment system for logistics workflows. Improved inventory accuracy and operational visibility across the warehouse floor.',
          impact: 'Improved inventory accuracy and operational visibility for logistics workflows',
          tags: ['Laravel', 'MySQL', 'JavaScript'],
          emoji: '📦',
          glow: '#f78166',
        },
      ],
    }
  },
}
</script>
