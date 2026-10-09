@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #0b0d0f;
  --bg-soft: #12171b;
  --panel: rgba(18, 21, 25, 0.82);
  --panel-strong: rgba(13, 15, 18, 0.94);
  --line: rgba(211, 191, 167, 0.18);
  --text: #f3efe8;
  --muted: #b9b0a5;
  --primary: #d8c1a2;
  --accent: #c28d5d;
  --accent-strong: #d9b07d;
  --gold: #d5b585;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(194, 141, 93, 0.12), transparent 18%),
    radial-gradient(circle at bottom right, rgba(216, 193, 162, 0.08), transparent 20%),
    var(--bg);
  color: var(--text);
  font-family: Inter, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

img,
svg {
  display: block;
  max-width: 100%;
}

a {
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

::selection {
  background: rgba(194, 141, 93, 0.3);
  color: #fff;
}

@layer components {
  .container-custom {
    @apply mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8;
  }

  .section-shell {
    @apply relative overflow-hidden py-20 md:py-32;
  }

  .eyebrow {
    @apply inline-flex items-center gap-2 rounded-full border border-[#d8c1a2]/20 bg-[#d8c1a2]/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.32em] text-[#e9d8be];
  }

  .btn-primary {
    @apply inline-flex items-center justify-center rounded-full bg-[#d8c1a2] px-7 py-3.5 text-sm font-semibold text-[#101214] shadow-[0_18px_40px_rgba(216,193,162,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e5d0b0] focus:outline-none focus:ring-2 focus:ring-[#d8c1a2]/70;
  }

  .btn-secondary {
    @apply inline-flex items-center justify-center rounded-full border border-[#d8c1a2]/20 bg-white/3 px-7 py-3.5 text-sm font-semibold text-[#f3efe8] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d8c1a2]/40 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#d8c1a2]/40;
  }

  .panel {
    @apply rounded-[1.75rem] border border-[#d8c1a2]/15 bg-[#12171b]/80 backdrop-blur-sm;
  }
}

@keyframes float {
  0%,
  100% { transform: translateY(0px); }
  50% { transform: translateY(-14px); }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }
}
