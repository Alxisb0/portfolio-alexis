<template>
  <div>
    <div style="margin-bottom:20px;">
      <h2 style="font-size:20px;font-weight:700;color:#f1f5f9;margin:0 0 4px;">Intégration en entreprise</h2>
      <p style="font-size:13px;color:#6b7280;margin:0;">
        Présentation et évaluation des savoir-faire liés à l'intégration chez MD Tools.
      </p>
    </div>

    <va-tabs v-model="activeTab" color="primary" style="margin-bottom:20px;">
      <va-tab name="trace5">Trace 5</va-tab>
      <va-tab name="trace6">Trace 6</va-tab>
      <va-tab name="bilan">Bilan & Évaluation</va-tab>
    </va-tabs>

    <div v-if="activeTab === 'trace5'">
      <TraceCard
        :numero="5"
        titre="Documentation de l'API REST via API Platform"
        image-url="/images/trace5.png"
        legende="Trace 5 : interface API Platform — bouton Authorize (cadre rouge), routes de l'entité CompanyAddress avec GET, POST, DELETE, PATCH (cadre bleu)"
      >
        <template #savoir-faire>
          <span class="sf-1">lire et exploiter une documentation technique</span>
          <span style="color:#4b5563;margin:0 4px;">·</span>
          <span class="sf-2">comprendre l'architecture d'une API REST inconnue</span>
          <span style="color:#4b5563;margin:0 4px;">·</span>
          <span class="sf-3">mettre en place un environnement de développement</span>
        </template>

        <p style="margin:0 0 10px;">
          La Trace 5 est une capture de l'interface API Platform du projet TaskMaster NG.
          API Platform est un outil intégré au framework PHP Symfony qui génère automatiquement
          une documentation interactive de l'API REST : on y trouve la liste de toutes les routes disponibles
          pour accéder aux données du serveur, avec leurs paramètres et les résultats attendus.
          Le cadre rouge met en évidence le bouton "Authorize" qui permet de s'identifier
          avec un token de connexion pour accéder aux routes protégées.
          Le cadre bleu montre les routes de l'entité CompanyAddress avec les différentes méthodes disponibles :
          GET pour récupérer, POST pour créer, DELETE pour supprimer, PATCH pour modifier.
        </p>
        <p style="margin:0 0 10px;">
          Dès la première semaine, j'ai dû <span class="sf-2">comprendre l'architecture de cette API</span>
          que je n'avais jamais utilisée.
          Le serveur était développé en PHP avec Symfony, un framework PHP que je ne connaissais pas.
          Il fallait comprendre les relations entre les entités du projet :
          une entreprise contient des sites, un site contient des équipes, une équipe contient des ressources, et ainsi de suite.
          Cette compréhension s'est faite à partir de la documentation, des échanges avec Marc, et en explorant les routes directement.
          <span class="sf-1">Lire et exploiter cette documentation</span> était indispensable 
            avant d'écrire la moindre ligne de code : sans comprendre quelles routes existaient 
            et ce qu'elles retournaient, impossible de connecter l'interface au serveur.
        </p>
        <p style="margin:0;">
          En parallèle, j'ai dû <span class="sf-3">mettre en place l'environnement de développement</span>
          avec Marc dès les premiers jours : installation de Docker (outil qui isole l'environnement de l'application
          pour qu'il fonctionne de façon identique sur tous les postes), Make, et les dépendances du projet frontend.
        </p>
      </TraceCard>
    </div>

    <div v-if="activeTab === 'trace6'">
      <TraceCard
        :numero="6"
        titre="Échange WhatsApp avec Marc sur une correction de code"
        image-url="/images/trace6.png"
        legende="Trace 6 : message WhatsApp de Marc — référence à ma branche de travail (cadre rouge), nom de la branche de correction et demande de fusion (cadre bleu)"
      >
        <template #savoir-faire>
          <span class="sf-6">communiquer efficacement à distance avec son tuteur</span>
          <span style="color:#4b5563;margin:0 4px;">·</span>
          <span class="sf-4">s'intégrer dans un mode de travail collaboratif à distance</span>
          <span style="color:#4b5563;margin:0 4px;">·</span>
          <span class="sf-7">agir en autonomie tout en restant coordonné</span>
        </template>

        <p style="margin:0 0 10px;">
          La Trace 6 est une capture de l'échange WhatsApp avec Marc.
          On y voit les messages d'aides et de corrections que Marc m'envoyait régulièrement.
          Dans le message du 17 avril, Marc m'explique qu'il a corrigé un problème de perte de session
          sur une page lors du rafraîchissement, à partir de ma branche de travail.
          Le cadre rouge met en évidence la référence à ma branche de travail,
          ce qui montre que Marc suivait régulièrement ce que je poussais sur le dépôt.
          Le cadre bleu montre le nom de la branche de correction qu'il a créée (fix/divers)
          et sa demande de la fusionner dans ma branche la semaine suivante.
        </p>
        <p style="margin:0 0 10px;">
          Ce type d'échange illustre comment s'est organisée la collaboration au quotidien.
          Le stage se déroulait en partie au coworking de Ronchamp avec Marc deux jours par semaine,
          et le reste du temps en télétravail avec des visioconférences régulières.
          <span class="sf-6">La communication à distance</span> prenait plusieurs formes :
          visioconférences pour faire le point sur l'avancement, messages pour les retours ponctuels sur le code,
          et GitHub pour les échanges directement liés aux modifications.
          <span class="sf-4">S'intégrer dans ce mode de travail</span> (revues de code à distance,
          corrections croisées sur les branches, visioconférences régulières)
          était différent d'un projet scolaire : ici les enjeux étaient réels et le rythme imposé par un vrai tuteur.
        </p>
        <p style="margin:0;">
          <span class="sf-7">Travailler avec une certaine autonomie</span> tout en restant coordonné avec Marc
          a été un apprentissage concret : savoir avancer seul, mais aussi savoir quand poser une question
          plutôt que de rester bloqué plusieurs heures. En semaine 4, Marc m'a donné accès à l'abonnement
          Claude Code de l'entreprise pour m'aider sur les modifications backend,
          ce qui témoigne de la confiance qui s'était installée.
        </p>
      </TraceCard>
    </div>

    <div v-if="activeTab === 'bilan'">

      <BilanBlock
        titre="Savoir s'intégrer dans un environnement professionnel et travailler en autonomie"
        avant="Scolaire (encadrement constant)"
        apres="Bon"
      >
        <template #synthese>
          Les Traces 5 et 6 illustrent les savoir-faire
          <span class="sf-1">lire et exploiter une documentation technique</span>,
          <span class="sf-2">comprendre l'architecture d'une API REST inconnue</span>,
          <span class="sf-3">mettre en place un environnement de développement</span>,
          <span class="sf-6">communiquer efficacement à distance avec son tuteur</span> et
          <span class="sf-4">s'intégrer dans un mode de travail collaboratif à distance</span>.
          MD Tools est une jeune entreprise sans procédures formelles établies.
          Les premiers jours se sont passés avec Marc au coworking, ce qui a facilité la prise en main.
          Ensuite, le travail en télétravail majoritaire demandait de s'organiser seul et de communiquer clairement à distance.
        </template>
        <template #evaluation>
          Le principal changement par rapport au contexte scolaire était l'autonomie :
          pas d'énoncé précis, des décisions techniques à prendre seul, un projet réel en cours de développement.
          L'adaptation a pris environ deux semaines, notamment pour la prise en main de l'API PHP.
          J'estime avoir atteint un niveau <strong style="color:#a5b4fc;">bon</strong> :
          je suis capable de m'organiser de façon autonome, de chercher des solutions par moi-même,
          et de communiquer efficacement à distance avec un tuteur.
        </template>
      </BilanBlock>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TraceCard from '@/components/TraceCard.vue'
import BilanBlock from '@/components/BilanBlock.vue'

const activeTab = ref('trace5')
</script>
