<template>
  <div style="min-height:100vh;background:#111827;">

    <header style="position:fixed;top:0;left:0;right:0;z-index:50;height:48px;background:#1f2937;border-bottom:1px solid #374151;display:flex;align-items:center;padding:0 20px;gap:12px;">
      <span style="font-weight:700;color:#f1f5f9;font-size:15px;">Alexis Bollengier</span>
      <span style="color:#4b5563;">|</span>
      <a href="mailto:alexis.bollengier@edu.univ-fcomte.fr"
        style="color:#818cf8;font-size:13px;text-decoration:none;">
        alexis.bollengier@edu.univ-fcomte.fr
      </a>
      <span style="margin-left:auto;display:flex;align-items:center;gap:8px;font-size:12px;color:#6b7280;">
        <span>BUT Informatique · 2ème année · IUT Nord Franche-Comté</span>
        <img src="/favicon.png" alt="favicon" style="height:20px;width:auto;object-fit:contain;display:block;" />
      </span>
    </header>

    <div style="display:flex;padding-top:48px;min-height:100vh;">

      <nav style="position:fixed;left:0;top:48px;bottom:0;width:210px;background:#1a2233;border-right:1px solid #374151;padding:24px 12px;display:flex;flex-direction:column;">

        <router-link
          v-for="item in navItems" :key="item.path"
          :to="item.path"
          style="display:block;padding:8px 12px;border-radius:6px;font-size:13px;font-weight:500;text-decoration:none;margin-bottom:4px;transition:all 0.15s;"
          :style="$route.path === item.path
            ? 'background:#312e81;color:#c7d2fe;'
            : 'color:#9ca3af;'">
          {{ item.label }}
        </router-link>

        <div style="margin-top:auto;padding-top:20px;border-top:1px solid #374151;">
          <p style="font-size:11px;color:#4b5563;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:10px;padding:0 4px;">Technologies utilisées</p>
          <div style="display:flex;flex-direction:column;gap:6px;padding:0 4px;">
            <div v-for="tech in stack" :key="tech.name" style="display:flex;align-items:center;gap:8px;">
              <img v-if="tech.logo" :src="tech.logo" :alt="tech.name" style="width:16px;height:16px;object-fit:contain;flex-shrink:0;" />
              <div v-else style="width:16px;height:16px;border-radius:3px;flex-shrink:0;" :style="`background:${tech.color}`"></div>
              <span style="font-size:12px;color:#9ca3af;">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </nav>

      <main :style="mainStyle" @click="onMainClick">
        <router-view />
      </main>

      <div v-if="selectedImage" @click.self="closeImage" style="position:fixed;inset:0;background:rgba(15,23,42,0.92);display:flex;align-items:center;justify-content:center;z-index:60;padding:24px;">
        <div style="max-width:100%;max-height:100%;display:flex;flex-direction:column;align-items:center;gap:16px;">
          <img @click="closeImage" :src="selectedImage" :alt="selectedImageAlt" style="max-width:100%;max-height:100%;border-radius:14px;box-shadow:0 24px 60px rgba(0,0,0,0.45);cursor:pointer;" />
          <button @click="closeImage" style="padding:10px 18px;border:none;border-radius:10px;background:#4f46e5;color:#fff;font-weight:700;cursor:pointer;">Fermer</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const selectedImage = ref(null)
const selectedImageAlt = ref('')

function onMainClick(event) {
  const target = event.target
  if (target.tagName === 'IMG') {
    const src = target.src || target.getAttribute('src')
    if (src && !src.includes('/favicon.png')) {
      selectedImage.value = src
      selectedImageAlt.value = target.alt || ''
    }
  }
}

function closeImage() {
  selectedImage.value = null
  selectedImageAlt.value = ''
}

const navItems = [
  { path: '/', label: 'Accueil' },
  { path: '/technique', label: 'Technique' },
  { path: '/suivi-projet', label: 'Suivi de projet' },
  { path: '/integration', label: 'Intégration en entreprise' },
]

const mainStyle = computed(() => {
  if (route.path === '/') {
    return 'margin-left:210px;flex:1;padding:28px 48px;max-width:1200px;'
  }
  return 'margin-left:210px;flex:1;padding:28px 48px;max-width:1600px;'
})

const stack = [
  { name: 'Vue 3', logo: 'https://vuejs.org/logo.svg' },
  { name: 'Nuxt 3', logo: 'https://nuxt.com/icon.png' },
  { name: 'Tailwind CSS', logo: 'https://tailwindcss.com/favicons/favicon-32x32.png' },
  { name: 'Vuestic UI', logo: '/images/vuestic.png' },
  { name: 'Docker', logo: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png' },
  { name: 'Git', logo: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
]
</script>
