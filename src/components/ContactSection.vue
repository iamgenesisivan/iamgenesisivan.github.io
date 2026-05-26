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

              <!-- Success banner -->
              <transition name="fade">
                <div
                  v-if="submitted"
                  class="mb-6 flex items-center gap-3 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400"
                >
                  <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Message sent successfully! I'll get back to you within 24 hours.
                </div>
              </transition>

              <!-- 2 column -->
              <div class="grid md:grid-cols-2 gap-4 mb-4">

                <!-- Name -->
                <div>
                  <label class="block text-xs text-zinc-500 uppercase tracking-wider mb-2">
                    Name <span class="text-accent">*</span>
                  </label>

                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="John Doe"
                    @blur="touch('name')"
                    class="w-full rounded-xl border bg-black/20 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-all"
                    :class="fieldClass('name')"
                  />

                  <p v-if="errors.name" class="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <svg class="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                    </svg>
                    {{ errors.name }}
                  </p>
                </div>

                <!-- Email -->
                <div>
                  <label class="block text-xs text-zinc-500 uppercase tracking-wider mb-2">
                    Email <span class="text-accent">*</span>
                  </label>

                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="john@company.com"
                    @blur="touch('email')"
                    class="w-full rounded-xl border bg-black/20 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-all"
                    :class="fieldClass('email')"
                  />

                  <p v-if="errors.email" class="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <svg class="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                    </svg>
                    {{ errors.email }}
                  </p>
                </div>
              </div>

              <!-- inquiry -->
              <div class="mb-4">
                <label class="block text-xs text-zinc-500 uppercase tracking-wider mb-2">
                  Inquiry Type <span class="text-accent">*</span>
                </label>

                <select
                  v-model="form.type"
                  @blur="touch('type')"
                  class="w-full rounded-xl border bg-black/20 px-4 py-3 text-sm text-white outline-none transition-all"
                  :class="fieldClass('type')"
                >
                  <option value="" class="bg-zinc-900">Select inquiry</option>
                  <option class="bg-zinc-900">Full-time / Senior Role</option>
                  <option class="bg-zinc-900">Freelance Project</option>
                  <option class="bg-zinc-900">Architecture Consultation</option>
                  <option class="bg-zinc-900">Side Project / Collaboration</option>
                  <option class="bg-zinc-900">Just saying hi</option>
                </select>

                <p v-if="errors.type" class="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <svg class="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                  {{ errors.type }}
                </p>
              </div>

              <!-- message -->
              <div class="mb-6">
                <label class="block text-xs text-zinc-500 uppercase tracking-wider mb-2">
                  Message <span class="text-accent">*</span>
                  <span class="ml-auto float-right normal-case tracking-normal font-normal"
                    :class="form.message.length > 1000 ? 'text-red-400' : 'text-zinc-600'">
                    {{ form.message.length }}/1000
                  </span>
                </label>

                <textarea
                  v-model="form.message"
                  rows="4"
                  placeholder="Tell me about your project..."
                  @blur="touch('message')"
                  class="w-full resize-none rounded-xl border bg-black/20 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-all"
                  :class="fieldClass('message')"
                />

                <p v-if="errors.message" class="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <svg class="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                  {{ errors.message }}
                </p>
              </div>

              <!-- button -->
              <button
                @click="handleSubmit"
                :disabled="loading"
                class="group w-full rounded-xl bg-accent text-white py-3 text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                :class="{ 'hover:opacity-90': !loading }"
              >
                <template v-if="loading">
                  <!-- Spinner -->
                  <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  <span>Sending...</span>
                </template>

                <template v-else>
                  <span>Send Message</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    class="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11z"/>
                  </svg>
                </template>
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
      // tracks which fields the user has interacted with
      touched: {
        name: false,
        email: false,
        type: false,
        message: false,
      },
      loading: false,
      submitted: false,
    }
  },
  computed: {
    errors() {
      const e = {}

      if (this.touched.name) {
        if (!this.form.name.trim()) {
          e.name = 'Name is required.'
        } else if (this.form.name.trim().length < 2) {
          e.name = 'Name must be at least 2 characters.'
        }
      }

      if (this.touched.email) {
        if (!this.form.email.trim()) {
          e.email = 'Email is required.'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
          e.email = 'Please enter a valid email address.'
        }
      }

      if (this.touched.type) {
        if (!this.form.type) {
          e.type = 'Please select an inquiry type.'
        }
      }

      if (this.touched.message) {
        if (!this.form.message.trim()) {
          e.message = 'Message is required.'
        } else if (this.form.message.trim().length < 10) {
          e.message = 'Message must be at least 10 characters.'
        } else if (this.form.message.length > 1000) {
          e.message = 'Message must not exceed 1000 characters.'
        }
      }

      return e
    },

    isValid() {
      return (
        this.form.name.trim().length >= 2 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email) &&
        !!this.form.type &&
        this.form.message.trim().length >= 10 &&
        this.form.message.length <= 1000
      )
    },
  },
  methods: {
    touch(field) {
      this.touched[field] = true
    },

    touchAll() {
      Object.keys(this.touched).forEach((k) => (this.touched[k] = true))
    },

    fieldClass(field) {
      if (!this.touched[field]) return 'border-white/10 focus:border-accent/60'
      if (this.errors[field]) return 'border-red-500/60 focus:border-red-500/80'
      return 'border-green-500/40 focus:border-green-500/60'
    },

    async handleSubmit() {
      // mark all fields touched to show errors
      this.touchAll()

      if (!this.isValid) return

      this.loading = true
      this.submitted = false

      const webhookURL = 'https://cloud.activepieces.com/api/v1/webhooks/OtkLulQOa8zthoOowETgv'

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

        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong. Please try again.')
        }

        // reset
        this.form = { name: '', email: '', type: '', message: '' }
        this.touched = { name: false, email: false, type: false, message: false }
        this.submitted = true

        // hide success banner after 6s
        setTimeout(() => { this.submitted = false }, 6000)
      } catch (error) {
        console.error(error)
        alert(error.message)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>