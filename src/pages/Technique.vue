<template>
  <div>
    <div style="margin-bottom:20px;">
      <h2 style="font-size:20px;font-weight:700;color:#f1f5f9;margin:0 0 4px;">Technique</h2>
      <p style="font-size:13px;color:#6b7280;margin:0;">
        Présentation et évaluation des savoir-faire techniques développés lors de mon stage.
      </p>
    </div>

    <va-tabs v-model="activeTab" color="primary" style="margin-bottom:20px;">
      <va-tab name="trace1">Trace 1</va-tab>
      <va-tab name="trace2">Trace 2</va-tab>
      <va-tab name="bilan">Bilan & Évaluation</va-tab>
    </va-tabs>

    <div v-if="activeTab === 'trace1'">
      <TraceCard
        :numero="1"
        titre="Le planning interactif de TaskMaster NG"
        image-url="/images/trace1.png"
        legende="Trace 1 : vue hebdomadaire du planning — zones occupées ou indisponibles (cadres bleu), une tâche non affectée  (cadre violet), une flèche d'ordonnancement (rond vert), une tâche non affectée se faisant glisser sur le planning (cadre rouge)"
      >
        <template #savoir-faire>
          <span class="sf-1">créer et déboguer des composants Vue 3</span>
          <span style="color:#4b5563;margin:0 4px;">·</span>
          <span class="sf-2">gérer les données de l'interface avec un store</span>
          <span style="color:#4b5563;margin:0 4px;">·</span>
          <span class="sf-3">implémenter le glisser-déposer avec contraintes</span>
          <span style="color:#4b5563;margin:0 4px;">·</span>
          <span class="sf-4">implémenter un système d'ordonnancement de tâches</span>
          <span style="color:#4b5563;margin:0 4px;">·</span>
          <span class="sf-5">créer un système de tâches parent-enfant</span>
        </template>

        <p style="margin:0 0 10px;">
          La Trace 1 est une capture du planning interactif de TaskMaster NG, la fonctionnalité centrale de l'application.
          Il permet à un manager de voir et de modifier la répartition des tâches de son équipe sur une semaine.
          Le cadre bleu met en évidence les zones inaccessibles (car en dehors de la tâche parente) ou occupées par d'autres projets ou des congés, sur lesquelles il est impossible de déposer une tâche.
          Le cadre rouge montre une tâche se faisant glisser-déposer sur le planning : une tâche peut être déplacée directement sur le calendrier d'une ressource vers une autre.
          Le rond vert montre les flèches d'ordonnancement en orange qui relient deux tâches : la seconde ne peut commencer qu'une fois la première terminée.
          Le cadre violet indique une tâche non affectée, visible en bas à droite dans la zone des tâches non affectées.
        </p>
        <p style="margin:0 0 10px;">
          Le planning a représenté environ 70% du temps total du stage.
          <span class="sf-5">Il gère trois niveaux de tâches imbriquées</span> : une tâche principale peut contenir des sous-tâches, elles-mêmes pouvant en contenir d'autres.
          <span class="sf-3">La contrainte principale du glisser-déposer</span> est qu'une sous-tâche ne peut jamais sortir de la plage de sa tâche parente,
          ce qui devait être vérifié à chaque déplacement en tenant compte simultanément des zones occupées et de l'ordonnancement.
        </p>
        <p style="margin:0 0 10px;">
          <span class="sf-4">L'ordonnancement</span> permet de définir un ordre d'exécution entre tâches :
          si la tâche B doit commencer après la tâche A, il est impossible de la placer avant elle dans le planning.
          J'ai dû gérer les cas incohérents comme les cycles de dépendances.
        </p>
        <p style="margin:0;">
          Pour que les modifications soient répercutées en temps réel dans tous les composants de la page,
          j'ai utilisé <span class="sf-2">un store</span> — un outil qui centralise les données de l'application
          et les met à jour automatiquement partout où elles sont affichées, sans recharger la page.
          <span class="sf-1">La correction des bugs d'affichage</span> a représenté une part importante du travail :
          chaque nouvelle fonctionnalité du planning introduisait des décalages visuels ou des comportements inattendus
          lors des déplacements, que j'ai dû identifier et corriger un par un.
        </p>
      </TraceCard>
    </div>

    <div v-if="activeTab === 'trace2'">
      <TraceCard
        :numero="2"
        titre="Page de gestion d'une entreprise dans TaskMaster NG"
        image-url="/images/trace2.png"
        legende="Trace 2 : page de gestion d'une entreprise — formulaire de modification d'adresse (cadre rouge), onglets de navigation (cercle bleu), menu déroulant pour ajouter un régulateur (cercle vert)"
      >
        <template #savoir-faire>
          <span class="sf-1">créer et déboguer des composants Vue 3</span>
          <span style="color:#4b5563;margin:0 4px;">·</span>
          <span class="sf-8">connecter une interface à une API REST</span>
        </template>

        <p style="margin:0 0 10px;">
          La Trace 2 est une capture d'une page de gestion d'entreprise de TaskMaster NG.
          Ces pages ont été développées durant la première phase du stage et servent à configurer l'application :
          on y définit les entreprises, leurs sites avec dedans leurs équipes, leurs ressources et leurs projets,
          avant de pouvoir les visualiser dans le planning.
          Le cadre rouge montre le formulaire de modification d'adresse ouvert.
          Le cadre bleu met en évidence les onglets de navigation entre les différentes sections de la page (Projects, Sites, Administrators, Regulators).
          Le cadre vert montre un menu déroulant permettant d'assigner un régulateur parmi les utilisateurs disponibles,
          données récupérées en temps réel depuis le serveur.
        </p>
        <p style="margin:0 0 10px;">
          <span class="sf-8">La connexion à l'API REST</span>, le serveur de données de l'application développé en PHP par Marc et Florent, 
          demandait de comprendre la structure des données retournées pour chaque type d'entité,
          de gérer les erreurs de requête, et d'adapter l'affichage en conséquence.
          Par exemple, supprimer une ressource nécessitait de vérifier et supprimer ses tâches associées dans le planning avant de pouvoir la retirer.
        </p>
        <p style="margin:0;">
          <span class="sf-1">La correction de bugs</span> sur ces pages a été fréquente :
          des listes qui ne se mettaient pas à jour après un ajout, des menus déroulants qui ne s'ouvraient pas correctement,
          des filtres qui ne fonctionnaient pas à cause d'un problème côté serveur.
          J'ai appris à distinguer les bugs venant de mon code frontend de ceux venant du serveur,
          et à communiquer précisément à Marc ce qui nécessitait une correction de son côté.
        </p>
      </TraceCard>
    </div>

    <div v-if="activeTab === 'bilan'">

      <BilanBlock
        titre="Savoir développer une interface web moderne"
        avant="Notions de cours"
        apres="Bon"
      >
        <template #synthese>
          Les Traces 1 et 2 illustrent les savoir-faire
          <span class="sf-1">créer et déboguer des composants Vue 3</span>,
          <span class="sf-2">gérer les données de l'interface avec un store</span> et
          <span class="sf-8">connecter une interface à une API REST</span>.
          Vue 3 est un framework JavaScript qui permet de construire des interfaces en découpant l'affichage en composants réutilisables,
          mis à jour automatiquement quand les données changent.
          Je l'avais déjà utilisé à l'IUT.
          Vuestic (bibliothèque de composants d'interface) et Tailwind CSS (outil de mise en forme par classes utilitaires)
          m'ont été introduits par Marc en semaine 2.
          La principale difficulté a été de faire cohabiter ces deux outils dans les différents thèmes (mode clair et mode sombre),
          leurs systèmes de styles entrant régulièrement en conflit.
        </template>
        <template #evaluation>
          Avant le stage, j'avais utilisé Vue en cours mais uniquement sur des exercices et des petits projets.
          Après dix semaines sur une application de cette envergure, j'estime avoir atteint un niveau plutôt
          <strong style="color:#a5b4fc;">bon</strong> bien qu'il y ait toujours des aspects à approfondir :
          je suis capable de concevoir et d'implémenter des composants de façon autonome,
          de déboguer des problèmes d'affichage et de synchronisation, et de connecter une interface à une API REST existante.
          Certains aspects avancés de Nuxt comme le rendu côté serveur restent à approfondir.
        </template>
      </BilanBlock>

      <BilanBlock
        titre="Savoir implémenter des fonctionnalités complexes"
        avant="Notions (algorithmique en cours)"
        apres="Bon"
      >
        <template #synthese>
          La Trace 1 illustre les savoir-faire
          <span class="sf-3">implémenter le glisser-déposer avec contraintes</span>,
          <span class="sf-4">implémenter un système d'ordonnancement de tâches</span> et
          <span class="sf-5">créer un système de tâches parent-enfant</span>.
          Ces fonctionnalités ont été développées entièrement en autonomie, sans cours préalable sur ce type de problème.
          Le glisser-déposer nécessitait de gérer simultanément les coordonnées de déplacement,
          la validation des zones cibles, les contraintes tâches parentes et les zones occupées.
          L'ordonnancement demandait de modéliser les dépendances entre tâches et de détecter les cas incohérents comme les cycles.
          Le système parent-enfant impliquait de propager automatiquement toutes les contraintes de déplacement sur plusieurs niveaux.
        </template>
        <template #evaluation>
          Ces fonctionnalités représentent les défis techniques les plus importants du stage.
          Le planning m'a demandé plusieurs semaines de développement et de correction de bugs.
          J'estime avoir atteint un niveau <strong style="color:#a5b4fc;">plutôt bon</strong> :
          les fonctionnalités sont opérationnelles et validées par Marc.
        </template>
      </BilanBlock>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TraceCard from '@/components/TraceCard.vue'
import BilanBlock from '@/components/BilanBlock.vue'

const activeTab = ref('trace1')
</script>