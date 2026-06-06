<template>
  <div style="background:#1f2937;border:1px solid #374151;border-radius:8px;margin-bottom:16px;overflow:hidden;">

    <!-- Titre + niveau -->
    <div style="background:#1a2233;padding:12px 16px;border-bottom:1px solid #374151;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
      <h3 style="font-size:14px;font-weight:700;color:#f1f5f9;margin:0;">{{ titre }}</h3>
      <div style="display:flex;align-items:center;gap:6px;font-size:12px;">
        <span style="color:#6b7280;">Avant :</span>
        <span style="background:#374151;color:#9ca3af;padding:2px 8px;border-radius:12px;font-size:11px;">{{ avant }}</span>
        <span style="color:#4b5563;">→</span>
        <span style="color:#6b7280;">Après :</span>
        <span style="background:#312e81;color:#c7d2fe;padding:2px 8px;border-radius:12px;font-size:11px;">{{ apres }}</span>
      </div>
    </div>

    <div style="padding:16px;">
      <!-- Synthèse -->
      <div style="margin-bottom:14px;">
        <p style="font-size:11px;color:#818cf8;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;font-family:monospace;">Synthèse</p>
        <p style="font-size:13px;color:#d1d5db;line-height:1.7;margin:0;">
          <slot name="synthese" />
        </p>
      </div>

      <!-- Évaluation -->
      <div style="border-top:1px solid #374151;padding-top:14px;">
        <p style="font-size:11px;color:#818cf8;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;font-family:monospace;">Évaluation</p>
        <p style="font-size:13px;color:#d1d5db;line-height:1.7;margin:0;">
          <slot name="evaluation" />
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  titre: { type: String, required: true },
  avant: { type: String, default: 'Aucun' },
  apres: { type: String, default: 'Bon' },
})
</script>
