<template>
  <div>
    <div style="margin-bottom:20px;">
      <h2 style="font-size:20px;font-weight:700;color:#f1f5f9;margin:0 0 4px;">Suivi de projet</h2>
      <p style="font-size:13px;color:#6b7280;margin:0;">
        Présentation et évaluation des savoir-faire liés à l'organisation et au suivi du travail.
      </p>
    </div>

    <va-tabs v-model="activeTab" color="primary" style="margin-bottom:20px;">
      <va-tab name="trace3">Trace 3</va-tab>
      <va-tab name="trace4">Trace 4</va-tab>
      <va-tab name="bilan">Bilan & Évaluation</va-tab>
    </va-tabs>

    <div v-if="activeTab === 'trace3'">
      <TraceCard
        :numero="3"
        titre="Extrait d'un rapport hebdomadaire de suivi de stage"
        image-url="/images/trace3.png"
        legende="Trace 3 : rapport hebdomadaire semaine 7 — section apprentissages (cadre vert), section difficultés rencontrées (cadre rouge)"
      >
        <template #savoir-faire>
          <span class="sf-1">rédiger un rapport de suivi hebdomadaire structuré</span>
          <span style="color:#4b5563;margin:0 4px;">·</span>
          <span class="sf-2">analyser et formuler les difficultés rencontrées</span>
          <span style="color:#4b5563;margin:0 4px;">·</span>
          <span class="sf-3">identifier ses apprentissages au fil du stage</span>
        </template>

        <p style="margin:0 0 10px;">
          La Trace 3 est un extrait du rapport hebdomadaire de la semaine 7, saisi sur la plateforme de gestion de stage de l'IUT.
          Ces rapports étaient demandés pour suivre l'avancement à distance.
          Chaque rapport couvre le travail technique réalisé, les apprentissages, les difficultés rencontrées, et les échanges de la semaine.
          Le cadre vert de la Trace 3 montre la section "Apprentissages" de cette semaine,
          où j'explique avoir commencé à utiliser davantage les commits et les branches GitHub pour mieux organiser mon travail.
          Le cadre rouge met en évidence la section "Difficultés rencontrées",
          où j'explique que la mise en place de l'ordonnancement a nécessité de réfléchir à plusieurs règles
          et que chaque correction de bug en entraînait un nouveau.
          <span class="sf-2">Analyser et formuler ces difficultés</span> m'a forcé à comprendre 
précisément ce qui bloquait, plutôt que de juste constater que ça ne marchait pas.
        </p>
        <p style="margin:0 0 10px;">
          <span class="sf-1">Rédiger ces rapports</span> demandait plus qu'une liste de tâches.
          Il fallait expliquer les choix techniques de la semaine de façon compréhensible pour quelqu'un
          qui ne suit pas le projet au quotidien, ce qui m'obligeait à prendre du recul sur mon propre travail.
          Je savais déjà structurer un écrit avant le stage, mais la régularité et le contexte professionnel ont apporté quelque chose de différent.
        </p>
        <p style="margin:0;">
          La section "Apprentissages" m'a permis de
          <span class="sf-3">formuler explicitement ce que j'avais appris</span> chaque semaine.
          En semaine 2 par exemple, j'y ai noté que j'avais fait mon premier merge Git et rebuild Docker en conditions réelles.
          Ces notes m'ont été directement utiles pour la rédaction de ce portfolio.
        </p>
      </TraceCard>
    </div>

    <div v-if="activeTab === 'trace4'">
      <TraceCard
        :numero="4"
        titre="Branches et commits sur le dépôt GitHub du projet"
        image-url="/images/trace4.png"
        legende="Trace 4 : liste des branches GitHub (en haut) et historique de commits (en bas) — branche develop encadrée en rouge, branches de correction et de fonctionnalité encadrées en bleu, commits détaillés encadrés en bleu"
      >
        <template #savoir-faire>
          <span class="sf-6">travailler sur un dépôt Git partagé</span>
          <span style="color:#4b5563;margin:0 4px;">·</span>
          <span class="sf-4">créer et fusionner des branches Git</span>
          <span style="color:#4b5563;margin:0 4px;">·</span>
          <span class="sf-7">intégrer les corrections d'un autre développeur</span>
        </template>

        <p style="margin:0 0 10px;">
          La Trace 4 montre la liste des branches du dépôt GitHub du projet ainsi que l'historique des commits sur ma branche de travail principale.
          Git est un outil de versioning qui enregistre l'historique de toutes les modifications du code et permet de travailler sur des versions parallèles.
          Le cadre rouge met en évidence la branche develop, gérée par Marc.
                    <span class="sf-6">Travailler sur un dépôt partagé</span> avec Marc et Florent 
          impliquait de ne jamais modifier directement la branche principale et de toujours 
          passer par des branches dédiées pour éviter d'écraser le travail des autres.
          Le cadre bleu en haut regroupe les branches de correction et de fonctionnalité créées au fil du stage :
          fix/divers (corrections de Marc), bugfix/zipcode-validation, feature/api/companies.
          Le cadre bleu en bas montre l'historique de commits sur ma branche, avec des messages détaillés décrivant précisément ce qui a été modifié.
        </p>
        <p style="margin:0 0 10px;">
          En cours, j'utilisais Git pour des commits et pushs simples sur une seule branche.
          En stage, le dépôt était partagé avec Marc et Florent, avec des branches parallèles et des fusions régulières.
          <span class="sf-4">La création de branches dédiées</span> est une pratique que j'ai adoptée de moi-même après quelques semaines,
          après avoir constaté que les modifications du planning se cassaient mutuellement.
        </p>
        <p style="margin:0;">
          <span class="sf-7">Intégrer les corrections de Marc</span> demandait de comprendre ce qu'il avait modifié et pourquoi,
          pour ne pas réintroduire le même problème dans mes développements suivants.
          C'est une pratique de travail en équipe que j'avais encore peu expérimentée en cours.
        </p>
      </TraceCard>
    </div>

    <div v-if="activeTab === 'bilan'">

      <BilanBlock
        titre="Savoir organiser et documenter son travail"
        avant="Scolaire (comptes-rendus de TP)"
        apres="Bon"
      >
        <template #synthese>
          Les Traces 3 et 4 illustrent les savoir-faire
          <span class="sf-1">rédiger un rapport de suivi hebdomadaire structuré</span>,
          <span class="sf-2">analyser et formuler les difficultés rencontrées</span> et
          <span class="sf-3">identifier ses apprentissages au fil du stage</span>.
          La rédaction de rapports hebdomadaires m'était demandée.
          Ces rapports m'ont servi de base directe pour la rédaction de ce portfolio.
        </template>
        <template #evaluation>
          Je savais déjà rédiger des comptes-rendus avant le stage, mais dans un contexte scolaire et de façon ponctuelle.
          La régularité hebdomadaire et la nécessité d'être compréhensible pour quelqu'un qui ne suit pas le projet
          m'ont appris à structurer différemment.
          J'estime avoir atteint un niveau <strong style="color:#a5b4fc;">bon</strong> sur cet aspect.
        </template>
      </BilanBlock>

      <BilanBlock
        titre="Savoir utiliser un outil de versioning"
        avant="Basique (commits simples en cours)"
        apres="Bon"
      >
        <template #synthese>
          La Trace 4 illustre les savoir-faire
          <span class="sf-6">travailler sur un dépôt Git partagé</span>,
          <span class="sf-4">créer et fusionner des branches Git</span> et
          <span class="sf-7">intégrer les corrections d'un autre développeur</span>.
          En cours, j'utilisais Git pour des commits simples sur une seule branche.
          En stage, j'ai travaillé sur un dépôt partagé avec des branches parallèles et des fusions régulières.
          La création de branches dédiées par fonctionnalité a été un apprentissage autonome, motivé par un besoin concret.
        </template>
        <template #evaluation>
          J'estime avoir atteint un niveau <strong style="color:#a5b4fc;">bon</strong> :
          les opérations courantes comme la création de branches, les fusions et la résolution de conflits simples sont acquises.
          Des pratiques plus avancées comme le rebase restent à explorer.
        </template>
      </BilanBlock>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TraceCard from '@/components/TraceCard.vue'
import BilanBlock from '@/components/BilanBlock.vue'

const activeTab = ref('trace3')
</script>
