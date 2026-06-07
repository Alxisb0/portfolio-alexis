<template>
  <div>

    <div style="margin-bottom:24px;">
      <h1 style="font-size:24px;font-weight:700;color:#f1f5f9;margin:0 0 4px;">Alexis Bollengier</h1>
      <p style="font-size:13px;color:#6b7280;margin:0;">Stage du 7 avril au 12 juin 2026 · MD Tools</p>
    </div>

    <div class="card" style="margin-bottom:16px;">
      <h2 class="section-title">Présentation</h2>
      <p class="section-sub">Objectifs de ce portfolio</p>
      <p style="font-size:13px;color:#d1d5db;line-height:1.7;">
        Ce site présente une analyse de mes savoir-faire développés durant mon stage de fin de 2ème année de BUT Informatique à l'IUT Nord Franche-Comté.
        Il est organisé en trois parties : technique, suivi de projet, et intégration en entreprise.
        Chacune est illustrée par des captures d'écran issues de mon travail.
      </p>
    </div>

    <div class="card" style="margin-bottom:16px;">
      <h2 class="section-title">Contexte entreprise</h2>
      <p class="section-sub">MD Tools</p>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
        <div>
          <div v-for="item in entrepriseItems" :key="item.label" style="margin-bottom:10px;">
            <p style="font-size:11px;color:#6b7280;margin:0 0 2px;">{{ item.label }}</p>
            <p style="font-size:13px;color:#e2e8f0;margin:0;">{{ item.value }}</p>
          </div>
        </div>

        <div style="background:#111827;border:1px solid #374151;border-radius:6px;padding:14px;">
          <p style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 10px;">Équipe</p>
          <div v-for="m in equipe" :key="m.nom" style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
            <div style="width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;"
              :style="`background:${m.color}22;color:${m.color};border:1px solid ${m.color}44`">
              {{ m.nom[0] }}
            </div>
            <div>
              <p style="font-size:13px;color:#e2e8f0;margin:0;font-weight:500;">{{ m.nom }}</p>
              <p style="font-size:11px;color:#6b7280;margin:0;">{{ m.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card" style="margin-bottom:16px;">
      <h2 class="section-title">Sujet du stage</h2>
      <p class="section-sub">TaskMaster NG — application web de gestion de planning et de ressources</p>

      <p style="font-size:13px;color:#d1d5db;line-height:1.7;margin-bottom:14px;">
        MD Tools développe TaskMaster NG, une application web destinée aux PME qui gèrent encore leurs équipes et leurs plannings avec des fichiers Excel.
        L'idée est de proposer un outil accessible, sans les coûts des grandes solutions du marché,
        qui permet de visualiser et réorganiser la charge de travail des équipes et des ressources en temps réel.
        Au début du stage, le serveur (aussi appelé backend) était déjà développé (API REST en PHP Symfony), ainsi que la page de connexion.
        Ma mission était de créer l'interface web de zéro, de la connecter au backend, et d'implémenter toutes les fonctionnalités prévues.
        J'ai également contribué au backend quand c'était nécessaire, pour ajouter des routes, des filtres, ou corriger des bugs.
      </p>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;">
        <div style="background:#1a1020;border:1px solid #7f1d1d44;border-radius:6px;padding:12px;">
          <p style="font-size:11px;color:#f87171;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 8px;">À mon arrivée</p>
          <ul style="margin:0;padding-left:16px;">
            <li v-for="item in avant" :key="item" style="font-size:13px;color:#9ca3af;margin-bottom:4px;">{{ item }}</li>
          </ul>
        </div>
        <div style="background:#0e1a14;border:1px solid #05966944;border-radius:6px;padding:12px;">
          <p style="font-size:11px;color:#34d399;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 8px;">Ce que j'ai réalisé</p>
          <ul style="margin:0;padding-left:16px;">
            <li v-for="item in mission" :key="item" style="font-size:13px;color:#d1d5db;margin-bottom:4px;">{{ item }}</li>
          </ul>
        </div>
      </div>

      <div style="background:#111827;border:1px solid #4f46e544;border-radius:6px;padding:12px;">
        <p style="font-size:11px;color:#818cf8;margin:0 0 4px;">Problématique</p>
        <p style="font-size:13px;color:#e2e8f0;font-style:italic;margin:0;line-height:1.6;">
          « Comment concevoir et implémenter un planning interactif utilisable en production dans le délai d'un stage de 10 semaines ? »
        </p>
      </div>
    </div>

    <div class="card">
      <h2 class="section-title">Savoir-faire généraux mis en jeu</h2>
      <p class="section-sub">Compétences développées et présentées dans les trois parties du portfolio</p>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div v-for="sf in savoirFaire" :key="sf.label"
          style="background:#111827;border:1px solid #374151;border-radius:6px;padding:10px 12px;display:flex;align-items:start;gap:10px;">
          <div style="width:8px;height:8px;border-radius:50%;margin-top:4px;flex-shrink:0;" :style="`background:${sf.color}`"></div>
          <div style="flex:1;">
            <p style="font-size:13px;font-weight:600;color:#e2e8f0;margin:0 0 2px;">{{ sf.label }}</p>
            <p style="font-size:11px;color:#6b7280;margin:0;">{{ sf.detail }}</p>
          </div>
          <router-link :to="sf.lien" style="font-size:11px;color:#818cf8;text-decoration:none;white-space:nowrap;font-family:monospace;">voir →</router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const entrepriseItems = [
  { label: 'Création', value: 'Septembre 2025' },
  { label: 'Siège', value: "La Neuvelle-les-Lure (70), l'entreprise ne possède pas de bureaux" },
  { label: 'Secteur', value: 'Production et vente de SaaS (Software as a service)' },
  { label: 'Organisation', value: '2j/semaine coworking Ronchamp + télétravail avec suivi régulier' },
  { label: 'Tuteur entreprise', value: 'Marc Declercq (fondateur)' },
  { label: 'Tuteur IUT', value: 'Jean-Claude Charr' },
]

const equipe = [
  { nom: 'Marc Declercq', role: 'Fondateur · Dev full-stack · Tuteur', color: '#6366f1' },
  { nom: 'Florent', role: 'Architecture et backend', color: '#10b981' },
  { nom: 'Emmanuel', role: 'Commercial', color: '#f59e0b' },
  { nom: 'Alexis Bollengier', role: 'Stagiaire · Interface frontend', color: '#ec4899' },
]

const avant = [
  'Backend développé (API REST PHP)',
  'Page de connexion existante',
  'Aucune autre interface utilisateur',
]

const mission = [
  'Créer toutes les pages de gestion des entreprises, des équipes, des projets, des régulateurs ...',
  'Les connecter à l\'API REST',
  'Réaliser le planning interactif complet',
  'Contribuer au backend quand c\'était nécessaire',
]

const savoirFaire = [
  { label: 'Savoir développer une interface web moderne', detail: 'Vue 3, Vuestic, Tailwind — page Technique', color: '#6366f1', lien: '/technique' },
  { label: 'Savoir implémenter des fonctionnalités complexes', detail: 'Planning interactif, ordonnancement — page Technique', color: '#818cf8', lien: '/technique' },
  { label: 'Savoir organiser et documenter son travail', detail: 'Rapports, Git — page Suivi de projet', color: '#10b981', lien: '/suivi-projet' },
  { label: 'Savoir travailler en autonomie professionnelle', detail: 'Intégration, communication — page Intégration', color: '#ec4899', lien: '/integration' },
]
</script>
