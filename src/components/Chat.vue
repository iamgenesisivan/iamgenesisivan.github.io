<template>
  <div>
    <!-- ── Floating toggle ── -->
    <button
      class="gc-toggle"
      :class="{ 'gc-toggle--open': isOpen }"
      @click="isOpen = !isOpen"
      aria-label="Open Genesis AI chat"
    >
      <!-- Chat icon -->
      <svg v-if="!isOpen" width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <!-- Close icon -->
      <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18M6 6l12 12" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
      <span class="gc-toggle__pulse"></span>
    </button>

    <!-- ── Chat window ── -->
    <Transition name="gc-slide">
      <div v-if="isOpen" class="gc-window" role="dialog" aria-label="Genesis AI Chat">

        <!-- Header -->
        <div class="gc-header">
          <div class="gc-header__avatar">G</div>
          <div class="gc-header__info">
            <h2 class="gc-header__title">Genesis <span class="gc-header__accent">AI</span></h2>
            <p class="gc-header__subtitle">
              <span class="gc-header__dot"></span>
              Senior Software Developer
            </p>
          </div>
          <button class="gc-header__close" @click="isOpen = false" aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
          </button>
        </div>

        <!-- Messages -->
        <div class="gc-messages" ref="messagesEl">

          <!-- Welcome (no messages yet) -->
          <div v-if="messages.length === 0" class="gc-welcome">
            <div class="gc-welcome__icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="gc-welcome__heading">Hey there 👋</p>
            <p class="gc-welcome__sub">I'm Genesis AI. Ask me about my projects, tech stack, services, or anything else.</p>
            <div class="gc-welcome__chips">
              <button
                v-for="chip in quickChips"
                :key="chip"
                class="gc-chip"
                @click="sendQuick(chip)"
              >{{ chip }}</button>
            </div>
          </div>

          <!-- Message list -->
          <template v-else>
            <div
              v-for="(msg, i) in messages"
              :key="i"
              class="gc-msg"
              :class="msg.role === 'user' ? 'gc-msg--user' : 'gc-msg--bot'"
            >
              <div v-if="msg.role === 'bot'" class="gc-msg__avatar">G</div>
              <div class="gc-msg__bubble" v-html="renderMarkdown(msg.content)"></div>
            </div>

            <!-- Typing dots -->
            <div v-if="isTyping" class="gc-msg gc-msg--bot">
              <div class="gc-msg__avatar">G</div>
              <div class="gc-msg__bubble gc-msg__bubble--typing">
                <span></span><span></span><span></span>
              </div>
            </div>
          </template>
        </div>

        <!-- Input footer -->
        <div class="gc-footer">
          <div class="gc-input-wrap" :class="{ 'gc-input-wrap--focused': inputFocused }">
            <textarea
              ref="inputEl"
              v-model="inputText"
              class="gc-input"
              placeholder="Ask something..."
              rows="1"
              @focus="inputFocused = true"
              @blur="inputFocused = false"
              @keydown.enter.exact.prevent="send"
              @input="autoResize"
            ></textarea>
            <button
              class="gc-send"
              :disabled="!inputText.trim() || isTyping"
              @click="send"
              aria-label="Send"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
                      stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <p class="gc-footer__hint">Enter to send &middot; Shift+Enter for new line</p>
        </div>

      </div>
    </Transition>
  </div>
</template>

<script>
const WEBHOOK_URL = 'https://gen.rps-home-lab.com/webhook/9baf0bfa-c3e6-42c5-8084-b11aa4c65ce4/chat'

export default {
  name: 'Chat',

  data() {
    return {
      isOpen: false,
      inputText: '',
      inputFocused: false,
      isTyping: false,
      sessionId: crypto.randomUUID(),
      messages: [],
      quickChips: [
        "What's your tech stack?",
        'Tell me about your projects',
        'What services do you offer?',
        'How can I contact you?',
      ],
    }
  },

  watch: {
    isOpen(val) {
      if (val) {
        this.$nextTick(() => {
          this.$refs.inputEl && this.$refs.inputEl.focus()
        })
      }
    },
  },

  methods: {
    scrollToBottom() {
      this.$nextTick(() => {
        const el = this.$refs.messagesEl
        if (el) el.scrollTop = el.scrollHeight
      })
    },

    autoResize(e) {
      const el = e.target
      el.style.height = 'auto'
      el.style.height = Math.min(el.scrollHeight, 120) + 'px'
    },

    async send() {
      const text = this.inputText.trim()
      if (!text || this.isTyping) return

      this.messages.push({ role: 'user', content: text })
      this.inputText = ''
      this.$nextTick(() => {
        if (this.$refs.inputEl) this.$refs.inputEl.style.height = 'auto'
      })
      this.scrollToBottom()
      this.isTyping = true

      try {
        const res = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'sendMessage',
            sessionId: this.sessionId,
            chatInput: text,
          }),
        })

        if (!res.ok) throw new Error('HTTP ' + res.status)

        const data = await res.json()

        // n8n AI Agent returns { output: "..." } by default.
        // Fallbacks cover other common response shapes.
        const reply =
          (data && data.output) ||
          (data && data.text) ||
          (data && data.message) ||
          (data && data.response) ||
          (typeof data === 'string' ? data : null) ||
          'Sorry, I did not get a response.'

        this.messages.push({ role: 'bot', content: reply })
      } catch (err) {
        console.error('[GenesisChat]', err)
        this.messages.push({
          role: 'bot',
          content: 'Something went wrong connecting to my backend. Please try again in a moment.',
        })
      } finally {
        this.isTyping = false
        this.scrollToBottom()
      }
    },

    sendQuick(text) {
      this.inputText = text
      this.send()
    },

    renderMarkdown(text) {
      if (!text) return ''
      return text
        // Fenced code blocks
        .replace(/```([\s\S]*?)```/g, function (_, code) {
          return '<pre><code>' + escHtml(code.trim()) + '</code></pre>'
        })
        // Inline code
        .replace(/`([^`]+)`/g, function (_, code) {
          return '<code>' + escHtml(code) + '</code>'
        })
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Markdown links
        .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
        // Line breaks
        .replace(/\n/g, '<br>')
    },
  },
}

function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
</script>

<style scoped>
/* ── Design tokens ───────────────────────────────────────── */
.gc-toggle,
.gc-window {
  --gc-cyan:       #22d3ee;
  --gc-blue:       #3b82f6;
  --gc-cyan-dim:   rgba(34, 211, 238, 0.12);
  --gc-bg:         #030712;
  --gc-surface:    rgba(15, 23, 42, 0.85);
  --gc-border:     rgba(34, 211, 238, 0.10);
  --gc-soft:       rgba(255, 255, 255, 0.06);
  --gc-text:       #f1f5f9;
  --gc-muted:      rgba(241, 245, 249, 0.50);
  --gc-grad:       linear-gradient(135deg, #0891b2, #1d4ed8);
  --gc-font:       'Inter', ui-sans-serif, system-ui, sans-serif;
}

/* ── Toggle button ───────────────────────────────────────── */
.gc-toggle {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 9998;
  width: 60px;
  height: 60px;
  border-radius: 18px;
  background: var(--gc-grad);
  border: 1px solid rgba(255, 255, 255, 0.14);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 28px rgba(34,211,238,0.30), 0 10px 40px rgba(0,0,0,0.55);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  overflow: visible;
  position: fixed;
}

.gc-toggle:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 0 42px rgba(34,211,238,0.50), 0 16px 48px rgba(0,0,0,0.60);
}

.gc-toggle--open {
  background: linear-gradient(135deg, #1e293b, #0f172a);
  border-color: rgba(34, 211, 238, 0.20);
}

.gc-toggle__pulse {
  position: absolute;
  inset: -10px;
  border-radius: 26px;
  background: radial-gradient(rgba(34,211,238,0.25), transparent 65%);
  animation: gcPulse 3.5s ease-in-out infinite;
  pointer-events: none;
  z-index: -1;
}

@keyframes gcPulse {
  0%, 100% { transform: scale(0.88); opacity: 0.5; }
  50%       { transform: scale(1.20); opacity: 0.1; }
}

/* ── Window ──────────────────────────────────────────────── */
.gc-window {
  position: fixed;
  bottom: 100px;
  right: 28px;
  z-index: 9999;
  width: 400px;
  max-width: calc(100vw - 32px);
  height: 580px;
  max-height: calc(100vh - 120px);
  border-radius: 20px;
  background: var(--gc-bg);
  border: 1px solid var(--gc-border);
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.03),
    0 0 60px rgba(34,211,238,0.07),
    0 24px 80px rgba(0,0,0,0.75);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: var(--gc-font);
}

/* ── Transition ──────────────────────────────────────────── */
.gc-slide-enter-active {
  transition: opacity 0.22s ease, transform 0.22s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.gc-slide-leave-active {
  transition: opacity 0.16s ease, transform 0.16s ease;
}
.gc-slide-enter-from,
.gc-slide-enter {
  opacity: 0;
  transform: translateY(12px) scale(0.97);
}
.gc-slide-leave-to {
  opacity: 0;
  transform: translateY(8px) scale(0.97);
}

/* ── Header ──────────────────────────────────────────────── */
.gc-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 20px;
  background: linear-gradient(160deg, #0f172a 0%, #0c1628 100%);
  border-bottom: 1px solid var(--gc-border);
  position: relative;
  flex-shrink: 0;
}

.gc-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 20px;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, var(--gc-cyan), var(--gc-blue));
  border-radius: 999px;
}

.gc-header__avatar {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--gc-grad);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 0 14px rgba(34,211,238,0.28);
}

.gc-header__info { flex: 1; min-width: 0; }

.gc-header__title {
  font-size: 16px;
  font-weight: 700;
  color: var(--gc-text);
  margin: 0;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.gc-header__accent { color: var(--gc-cyan); }

.gc-header__subtitle {
  font-size: 12px;
  color: var(--gc-muted);
  margin: 3px 0 0;
  display: flex;
  align-items: center;
  gap: 6px;
}

.gc-header__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 6px rgba(34,197,94,0.60);
  flex-shrink: 0;
}

.gc-header__close {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--gc-muted);
  padding: 6px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s, background 0.2s;
  flex-shrink: 0;
}

.gc-header__close:hover {
  color: var(--gc-text);
  background: rgba(255,255,255,0.06);
}

/* ── Messages ────────────────────────────────────────────── */
.gc-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background:
    radial-gradient(ellipse 60% 35% at 50% 0%, rgba(34,211,238,0.05) 0%, transparent 70%),
    var(--gc-bg);
  scroll-behavior: smooth;
}

.gc-messages::-webkit-scrollbar { width: 4px; }
.gc-messages::-webkit-scrollbar-track { background: transparent; }
.gc-messages::-webkit-scrollbar-thumb {
  background: rgba(34,211,238,0.18);
  border-radius: 999px;
}
.gc-messages::-webkit-scrollbar-thumb:hover {
  background: rgba(34,211,238,0.32);
}

/* ── Welcome screen ──────────────────────────────────────── */
.gc-welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  padding: 24px 12px;
  animation: gcFadeUp 0.4s ease;
}

.gc-welcome__icon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: rgba(34,211,238,0.08);
  border: 1px solid var(--gc-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gc-cyan);
  margin-bottom: 4px;
}

.gc-welcome__heading {
  font-size: 17px;
  font-weight: 700;
  color: var(--gc-text);
  margin: 0;
}

.gc-welcome__sub {
  font-size: 13px;
  color: var(--gc-muted);
  line-height: 1.55;
  max-width: 280px;
  margin: 0;
}

.gc-welcome__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  justify-content: center;
  margin-top: 8px;
}

.gc-chip {
  font-family: var(--gc-font);
  font-size: 12px;
  color: var(--gc-cyan);
  background: rgba(34,211,238,0.07);
  border: 1px solid rgba(34,211,238,0.18);
  border-radius: 999px;
  padding: 6px 14px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, transform 0.15s;
}

.gc-chip:hover {
  background: rgba(34,211,238,0.14);
  border-color: rgba(34,211,238,0.35);
  transform: translateY(-1px);
}

/* ── Message rows ────────────────────────────────────────── */
.gc-msg {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  animation: gcFadeUp 0.25s ease;
}

.gc-msg--user { flex-direction: row-reverse; }

.gc-msg__avatar {
  width: 28px;
  height: 28px;
  border-radius: 9px;
  background: var(--gc-grad);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.gc-msg__bubble {
  max-width: 82%;
  font-size: 14px;
  line-height: 1.6;
  padding: 11px 15px;
  border-radius: 16px;
  word-break: break-word;
}

.gc-msg--bot .gc-msg__bubble {
  background: var(--gc-surface);
  border: 1px solid var(--gc-cyan-dim);
  color: var(--gc-text);
  border-radius: 4px 16px 16px 16px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.04), 0 4px 14px rgba(0,0,0,0.28);
}

.gc-msg--user .gc-msg__bubble {
  background: var(--gc-grad);
  color: white;
  border-radius: 16px 4px 16px 16px;
  box-shadow: 0 6px 18px rgba(8,145,178,0.28), 0 2px 6px rgba(29,78,216,0.18);
}

/* Markdown content inside bubbles */
.gc-msg__bubble :deep(a) {
  color: var(--gc-cyan);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.gc-msg__bubble :deep(pre) {
  background: rgba(2,6,23,0.90);
  border: 1px solid var(--gc-cyan-dim);
  border-radius: 8px;
  padding: 10px 12px;
  overflow-x: auto;
  margin: 6px 0;
}

.gc-msg__bubble :deep(code) {
  color: var(--gc-cyan);
  font-size: 12.5px;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}

.gc-msg__bubble :deep(strong) {
  font-weight: 600;
}

/* ── Typing indicator ────────────────────────────────────── */
.gc-msg__bubble--typing {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 14px 18px;
  min-width: 54px;
}

.gc-msg__bubble--typing span {
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(34,211,238,0.65);
  animation: gcDot 1.4s ease-in-out infinite;
}

.gc-msg__bubble--typing span:nth-child(2) { animation-delay: 0.2s; }
.gc-msg__bubble--typing span:nth-child(3) { animation-delay: 0.4s; }

@keyframes gcDot {
  0%, 80%, 100% { transform: scale(0.8); opacity: 0.4; }
  40%            { transform: scale(1.2); opacity: 1; }
}

@keyframes gcFadeUp {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Footer / input ──────────────────────────────────────── */
.gc-footer {
  padding: 14px 16px 10px;
  background: rgba(3,7,18,0.97);
  border-top: 1px solid var(--gc-soft);
  flex-shrink: 0;
}

.gc-input-wrap {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  background: rgba(15,23,42,0.80);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 14px;
  padding: 2px 2px 2px 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.gc-input-wrap--focused {
  border-color: rgba(34,211,238,0.38);
  box-shadow: 0 0 0 3px rgba(34,211,238,0.07);
}

.gc-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  color: var(--gc-text);
  font-size: 14px;
  line-height: 1.55;
  font-family: var(--gc-font);
  padding: 10px 0;
  min-height: 40px;
  max-height: 120px;
  overflow-y: auto;
}

.gc-input::placeholder { color: rgba(241,245,249,0.28); }

.gc-send {
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 11px;
  background: var(--gc-grad);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.18s, box-shadow 0.18s, opacity 0.18s;
  margin: 2px;
}

.gc-send:hover:not(:disabled) {
  transform: scale(1.07);
  box-shadow: 0 0 16px rgba(34,211,238,0.40);
}

.gc-send:active:not(:disabled) { transform: scale(0.96); }

.gc-send:disabled {
  opacity: 0.35;
  cursor: default;
}

.gc-footer__hint {
  font-size: 11px;
  color: rgba(148,163,184,0.35);
  text-align: center;
  margin: 7px 0 0;
  font-family: var(--gc-font);
}

/* ── Mobile ──────────────────────────────────────────────── */
@media (max-width: 480px) {
  .gc-window {
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    height: 92dvh;
    max-height: 92dvh;
    border-radius: 20px 20px 0 0;
  }

  .gc-toggle {
    bottom: 20px;
    right: 20px;
  }
}
</style>
