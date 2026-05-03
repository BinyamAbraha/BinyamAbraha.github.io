/* ============================================================
   blog.js | Blog Post Rendering via Marked.js
   Posts are defined here as Markdown strings.
   To add a new post: copy the post object format and add
   your markdown content to the `content` field.
   ============================================================ */

// ── Blog Post Data ─────────────────────────────────────────
// Each post has: id, title, date, category, emoji, excerpt, content (Markdown)
const blogPosts = [
  {
    id: 'post-1',
    title: 'Building a Local AI Speaker with Gemma 4 & Ollama',
    date: 'April 28, 2025',
    category: 'AI · Hardware',
    emoji: '🔊',
    excerpt: 'What happens when you combine a Raspberry Pi, an open-source LLM, and a weekend with too much free time? You get a privacy-first AI speaker that never phones home.',
    content: `
# Building a Local AI Speaker with Gemma 4 & Ollama

**What happens when you combine a Raspberry Pi, an open-source LLM, and a weekend with too much free time?**

You get a fully local, privacy-preserving AI smart home speaker — no cloud required, no data leaving your home, and surprisingly snappy responses.

## Why Build It?

I wanted something like a smart speaker, but I've always been uncomfortable with the idea of a device in my home constantly listening and sending data to a corporation's servers. So I decided to build one that runs entirely on-device.

The goal:
- Voice activation
- Natural language understanding powered by an LLM
- Smart home control (lights, thermostat, etc.)
- **Zero cloud dependency**

## The Stack

- **Hardware:** Raspberry Pi 5 (8GB) + USB microphone + small speaker
- **LLM:** [Gemma 4](https://ai.google.dev/gemma) via [Ollama](https://ollama.ai)
- **Wake word:** Custom lightweight model using Python + vosk
- **Speech-to-text:** Whisper (local)
- **Text-to-speech:** Coqui TTS (local)
- **Home control:** Home Assistant REST API

## How It Works

\`\`\`
[Wake word detected]
      ↓
[Audio captured → Whisper STT]
      ↓
[Text prompt sent to Gemma 4 via Ollama]
      ↓
[Response → Coqui TTS → Speaker]
      ↓
[If command → Home Assistant API call]
\`\`\`

## Key Challenges

**Latency** was the biggest issue. Running Whisper + Gemma 4 on a Pi 5 adds up. I got response times down to ~2–3 seconds by:
- Using the smallest Whisper model (tiny.en)
- Quantizing Gemma 4 to 4-bit (via Ollama's built-in support)
- Caching common intents

**Wake word accuracy** was tricky — I ended up training a small custom model on my own voice using a 30-minute dataset.

## Lessons Learned

> "Running AI locally is getting surprisingly accessible. The tools have caught up."

The biggest takeaway: edge AI in 2025 is genuinely viable for hobbyists. A year ago this would have required a GPU. Now it runs on a $80 Pi.

---

*Full source code and build guide coming to GitHub soon.*
    `
  },
  {
    id: 'post-2',
    title: 'What I Learned From My First Data Analytics Project',
    date: 'March 15, 2025',
    category: 'Data',
    emoji: '📊',
    excerpt: 'Data is messy. Cleaning it teaches you more about the real world than any algorithm does. Here\'s what surprised me most on my first end-to-end analytics project.',
    content: `
# What I Learned From My First Data Analytics Project

**Nobody tells you how much time you'll spend cleaning data.**

Seriously — I'd estimate 70% of my time on my first real analytics project was spent on data cleaning alone. Here's an honest breakdown of what I learned.

## The Project

I analyzed a dataset of [placeholder — project details coming] to answer a set of business questions including:
- What trends exist over time?
- What are the strongest predictors of outcome X?
- Where are the biggest inefficiencies?

## The Reality of "Real" Data

In class, datasets are clean. In the real world:

- Columns have inconsistent naming conventions
- Missing values aren't always \`NaN\` — sometimes they're \`"N/A"\`, \`"none"\`, \`-1\`, or just empty strings
- Dates come in 6 different formats in the same column
- Duplicate rows exist for non-obvious reasons

## What I Actually Used

\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Load
df = pd.read_csv('data.csv')

# First thing I always do now:
print(df.info())
print(df.isnull().sum())
print(df.duplicated().sum())
\`\`\`

Those three lines alone tell you so much about the health of a dataset before you do anything else.

## Key Insight

The most valuable skill I built wasn't a specific algorithm — it was learning to **ask better questions before writing a single line of code**.

What does this column actually represent? What does a missing value mean here — is it unknown, zero, or not applicable? Those questions matter more than what model you use.

---

*More posts on data projects and methodology coming soon.*
    `
  }
];

// ── Render Blog Cards ──────────────────────────────────────
function renderBlogCards() {
  const grid  = document.getElementById('blogGrid');
  const empty = document.getElementById('blogEmpty');

  if (!grid) return;

  if (blogPosts.length === 0) {
    if (empty) empty.style.display = 'block';
    return;
  }

  blogPosts.forEach((post, index) => {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', String(index * 80));
    card.innerHTML = `
      <div class="blog-card-header">${post.emoji}</div>
      <div class="blog-card-body">
        <div class="blog-meta">
          <span class="blog-category">${post.category}</span>
          <span class="blog-date">${post.date}</span>
        </div>
        <div class="blog-title">${post.title}</div>
        <p class="blog-excerpt">${post.excerpt}</p>
        <span class="blog-read-more">
          Read Post <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    `;

    card.addEventListener('click', () => openPost(post));
    grid.appendChild(card);
  });

  // Re-init AOS for dynamically added cards
  if (typeof AOS !== 'undefined') AOS.refresh();
}

// ── Open Post Modal ────────────────────────────────────────
function openPost(post) {
  const modal   = document.getElementById('postModal');
  const content = document.getElementById('postContent');

  if (!modal || !content) return;

  // Render markdown
  content.innerHTML = marked.parse(post.content);

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ── Close Post Modal ───────────────────────────────────────
function closePost() {
  const modal = document.getElementById('postModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Close on backdrop click
document.getElementById('postModal')?.addEventListener('click', function(e) {
  if (e.target === this) closePost();
});

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closePost();
});

// ── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', renderBlogCards);
