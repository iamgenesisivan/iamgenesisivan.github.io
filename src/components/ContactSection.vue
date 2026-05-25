<template>
  <section id="contact" class="py-28 border-t border-white/5">
    <!-- 20% | 60% | 20% -->
    <div class="w-full px-6 lg:px-0">
      <div class="w-full lg:w-[80%] mx-auto">
        
        <!-- Header -->
        <div class="text-center mb-16">
          <p class="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4">
            // get in touch
          </p>

          <h2 class="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Let's build something.
          </h2>

          <p class="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Whether it's a senior role, scalable architecture, or a product idea —
            I'm always open to meaningful conversations.
          </p>
        </div>

        <!-- Main Grid -->
        <div class="grid lg:grid-cols-[340px_1fr] gap-8 items-start">

          <!-- LEFT SIDE -->
          <div class="space-y-4">

            <a
              v-for="link in links"
              :key="link.label"
              :href="link.href !== '#' ? link.href : undefined"
              :target="link.href !== '#' ? '_blank' : undefined"
              :rel="link.href !== '#' ? 'noopener noreferrer' : undefined"
              class="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300 p-5"
              :class="{ 'pointer-events-none': link.href === '#' }"
            >
              <!-- icon -->
              <div
                class="w-12 h-12 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center text-lg"
              >
                {{ link.icon }}
              </div>

              <!-- text -->
              <div class="flex-1 min-w-0">
                <p class="text-xs uppercase tracking-wider text-zinc-500 mb-1">
                  {{ link.label }}
                </p>

                <div
                  class="text-sm text-white group-hover:text-accent transition-colors leading-relaxed"
                  v-html="link.value"
                />
              </div>

              <!-- arrow -->
              <svg
                v-if="link.href !== '#'"
                class="w-4 h-4 text-zinc-600 group-hover:text-accent transition-colors"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 17L17 7M17 7H8M17 7V16"
                />
              </svg>
            </a>

          </div>

          <!-- RIGHT SIDE FORM -->
          <div
            class="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7"
          >
            <!-- glow -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent pointer-events-none"
            />

            <div class="relative z-10">

              <!-- top -->
              <div class="mb-7">
                <p class="text-xs uppercase tracking-[0.25em] text-accent font-mono mb-3">
                  Direct Inquiry
                </p>

                <h3 class="text-2xl font-semibold text-white mb-2">
                  Start a conversation.
                </h3>

                <p class="text-sm text-zinc-400">
                  Usually replies within 24 hours.
                </p>
              </div>

              <!-- 2 column -->
              <div class="grid md:grid-cols-2 gap-4 mb-4">

                <!-- Name -->
                <div>
                  <label class="block text-xs text-zinc-500 uppercase tracking-wider mb-2">
                    Name
                  </label>

                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="John Doe"
                    class="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-accent/60 transition-all"
                  />
                </div>

                <!-- Email -->
                <div>
                  <label class="block text-xs text-zinc-500 uppercase tracking-wider mb-2">
                    Email
                  </label>

                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="john@company.com"
                    class="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-accent/60 transition-all"
                  />
                </div>
              </div>

              <!-- inquiry -->
              <div class="mb-4">
                <label class="block text-xs text-zinc-500 uppercase tracking-wider mb-2">
                  Inquiry Type
                </label>

                <select
                  v-model="form.type"
                  class="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none focus:border-accent/60 transition-all"
                >
                  <option value="" class="bg-zinc-900">
                    Select inquiry
                  </option>

                  <option class="bg-zinc-900">
                    Full-time / Senior Role
                  </option>

                  <option class="bg-zinc-900">
                    Freelance Project
                  </option>

                  <option class="bg-zinc-900">
                    Architecture Consultation
                  </option>

                  <option class="bg-zinc-900">
                    Side Project / Collaboration
                  </option>

                  <option class="bg-zinc-900">
                    Just saying hi
                  </option>
                </select>
              </div>

              <!-- message -->
              <div class="mb-6">
                <label class="block text-xs text-zinc-500 uppercase tracking-wider mb-2">
                  Message
                </label>

                <textarea
                  v-model="form.message"
                  rows="4"
                  placeholder="Tell me about your project..."
                  class="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-accent/60 transition-all"
                />
              </div>

              <!-- button -->
              <button
                @click="handleSubmit"
                class="group w-full rounded-xl bg-accent hover:opacity-90 text-white py-3 text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  class="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11z"
                  />
                </svg>
              </button>

            </div>
          </div>
        </div>
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
        { icon: '🐙', label: 'GitHub', value: 'github.com/iamgenesisivan', href: 'https://github.com/iamgenesisivan' },
        { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/iamgenesisivan-public', href: 'https://linkedin.com/in/iamgenesisivan-public' },
        { icon: '📍', label: 'Location', value: 'Pasig, Metro Manila<br><span style="font-size:11px;opacity:0.5;">Open to Remote</span>', href: '#' },
      ],
      form: {
        name: '',
        email: '',
        type: '',
        message: '',
      },
    }
  },
  methods: {
    async handleSubmit() {
      let webhookURL = 'https://cloud.activepieces.com/api/v1/webhooks/OtkLulQOa8zthoOowETgv'
      try {
        const response = await fetch(webhookURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(this.form),
        })

        const data = await response.json()
        console.log('Response:', data)

        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong')
        }

        console.log('Success:', data)

        // reset form
        this.form = {
          name: '',
          email: '',
          type: '',
          message: '',
        }

        alert('Message sent successfully!')
      } catch (error) {
        console.error(error)
        alert(error.message)
      }
    },
  },
}
</script>