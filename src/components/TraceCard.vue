<template>
  <div style="background:#1f2937;border:1px solid #374151;border-radius:8px;margin-bottom:20px;overflow:hidden;">

    <!-- En-tête -->
    <div style="background:#111827;padding:10px 16px;border-bottom:1px solid #374151;display:flex;align-items:center;gap:10px;">
      <span style="font-family:monospace;font-size:11px;color:#818cf8;font-weight:700;text-transform:uppercase;">
        Trace {{ numero }}
      </span>
      <span style="color:#374151;">—</span>
      <span style="font-size:13px;font-weight:600;color:#e2e8f0;">{{ titre }}</span>
    </div>

    <!-- Liste savoir-faire -->
    <div style="padding:12px 16px;border-bottom:1px solid #374151;background:#1a2233;">
      <span style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;margin-right:8px;">
        Savoir-faire élémentaires :
      </span>
      <slot name="savoir-faire" />
    </div>

    <!-- Corps -->
    <div style="padding:16px;display:grid;gap:16px;" :style="imageUrl || showPlaceholder ? 'grid-template-columns:1.4fr 0.6fr' : ''">

      <!-- Image -->
      <div v-if="imageUrl || showPlaceholder" style="display:flex;flex-direction:column;gap:8px;">
        <div style="border-radius:6px;overflow:hidden;border:1px solid #374151;background:#111827;">
          <img v-if="imageUrl" :src="imageUrl" :alt="titre" style="width:100%;display:block;cursor:pointer;" />
          <div v-else style="height:180px;display:flex;align-items:center;justify-content:center;border:2px dashed #374151;border-radius:6px;">
            <span style="color:#4b5563;font-size:12px;font-family:monospace;">[ capture à ajouter ]</span>
          </div>
        </div>
        <p style="font-size:11px;color:#6b7280;text-align:center;font-style:italic;">{{ legende }}</p>
      </div>

      <!-- Texte -->
      <div style="font-size:13px;color:#d1d5db;line-height:1.7;">
        <slot />
      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  numero: { type: Number, required: true },
  titre: { type: String, required: true },
  imageUrl: { type: String, default: null },
  legende: { type: String, default: '' },
  showPlaceholder: { type: Boolean, default: true },
})
</script>
