<template>
  <section id="experience" class="py-24 bg-surface-1 border-t border-border">
    <div class="section-container">
      <div class="reveal text-center mb-14">
        <p class="font-mono text-accent text-xs tracking-widest uppercase mb-3">// professional journey</p>
        <h2 class="section-title">7 years. Shipped. Scaled. Led.</h2>
        <p class="section-subtitle max-w-xl mx-auto">The chapters that shaped how I build software.</p>
      </div>

      <div class="max-w-3xl mx-auto">
        <div
          v-for="(item, i) in timeline"
          :key="item.title"
          class="reveal relative pl-10 mb-10 pb-10 timeline-item"
        >
          <!-- Dot -->
          <div class="absolute left-0 top-0 w-6 h-6 bg-surface-2 border-2 border-accent rounded-full flex items-center justify-center text-xs">
            {{ item.icon }}
          </div>

          <div class="glass-card p-6 hover:border-accent/40 transition-all duration-300">
            <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
              <div>
                <h3 class="font-display font-700 text-white text-base">{{ item.title }}</h3>
                <div class="text-accent text-sm font-500">{{ item.company }}</div>
                <div class="text-muted text-xs mt-0.5">{{ item.location }}</div>
              </div>
              <span class="font-mono text-xs text-muted bg-surface-2 border border-border px-3 py-1 rounded-full whitespace-nowrap">
                {{ item.period }}
              </span>
            </div>

            <ul class="space-y-1.5 mb-4">
              <li
                v-for="point in item.points"
                :key="point"
                class="flex items-start gap-2 text-xs text-muted"
              >
                <span class="text-accent mt-0.5 flex-shrink-0">▸</span>
                <span>{{ point }}</span>
              </li>
            </ul>

            <div class="flex flex-wrap gap-1.5">
              <span v-for="tag in item.tags" :key="tag" class="px-2 py-0.5 bg-surface-2 border border-border rounded text-xs text-muted font-mono">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection',
  data() {
    return {
      timeline: [
        {
          icon: '🏆',
          title: 'Senior Web & Application Developer',
          company: 'Accent Micro Technologies Inc.',
          location: 'Pasig, Metro Manila',
          period: 'July 2019 – Present',
          points: [
            'Architected and delivered a full-stack Document Routing System end-to-end (Laravel + Vue.js), reducing manual document handling time across departments',
            'Contributing to a production AI Chatbot platform using OpenAI API — working on user-facing chat UI and admin management portal',
            'Designed and maintained Docker image/container infrastructure, streamlining deployment pipelines and enabling horizontal scalability for high-traffic workloads',
            'Modernized and stabilized a critical multi-module legacy internal system — the company\'s core operational platform — eliminating recurring downtime and extending system lifespan',
            'Built microservices to separate heavy and slow-running tasks from the main system, reducing processing bottlenecks and improving overall speed and reliability',
            'Integrated 3rd-party APIs and implemented email notification plugins, extending platform capabilities without increasing internal infrastructure cost',
            'Mentored junior developers and interns — conducting code reviews and establishing coding standards that improved PR quality and reduced review cycles',
            'Presented project demos to stakeholders, translating technical deliverables into clear business value',
          ],
          tags: ['Laravel', 'CodeIgniter', 'Vue.js', 'MySQL', 'PostgreSQL', 'Docker', 'Nginx', 'Python', 'Ollama', 'LLaMA', 'OpenAI', 'Linux', 'WordPress'],
        },
        {
          icon: '⚡',
          title: 'Laravel Developer',
          company: 'CMA Mental Arithmetic',
          location: 'Pasig, Metro Manila',
          period: 'May 2018 – July 2019',
          points: [
            'Built a full HRIS platform for Overseas Filipino Workers (OFWs), managing payroll, attendance, and employee records for a distributed workforce',
            'Developed an OFW Contact Center system and public-facing website, enabling multi-channel communication and self-service capabilities for members',
            'Designed and launched a Membership System, automating enrollment workflows and reducing manual processing overhead for the operations team',
          ],
          tags: ['Laravel', 'Vue.js', 'HTML', 'CSS', 'JavaScript'],
        },
        {
          icon: '🌱',
          title: 'System Development Engineer',
          company: 'Simplevia Technologies Inc.',
          location: 'Pasig, Metro Manila',
          period: 'May 2017 – May 2018',
          points: [
            'Contributed to Schuler, a multi-module School Management System serving student records, scheduling, and billing',
            'Built a Laptop Monitoring System and KTX Wallet System, delivering asset-tracking and digital payment capabilities',
            'Developed a Warehouse Management System, improving inventory accuracy and operational visibility for logistics workflows',
          ],
          tags: ['C#', 'ASP.NET', 'VB.NET', 'Laravel', 'HTML', 'CSS', 'JavaScript', 'MS SQL', 'MySQL', 'WordPress'],
        },
      ],
    }
  },
}
</script>
