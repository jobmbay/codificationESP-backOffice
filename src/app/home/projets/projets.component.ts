import { Component, OnInit } from '@angular/core';
import {ProjetsService} from "./projets.service";

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css'],
  providers: [ProjetsService]
})
export class ProjetsComponent implements OnInit {

  projets = [];

  allProjets = [
    {
      id: "5a249da800b1e248ee4ce082",
      intitule: "Aider les jeunes migrants sans famille",
      description: "<p><strong>Des centaines d&rsquo;adolescents r&eacute;fugi&eacute;s vivent actuellement dans la rue en France. Des b&eacute;n&eacute;voles d&rsquo;Utopia 56 sont &agrave; leur contact pour les aider au maximum dans toutes leurs d&eacute;marches.</strong></p><p>Ils arrivent apr&egrave;s un long et &eacute;prouvant parcours migratoire en provenance du Moyen-Orient (Syrie, Afghanistan, Irak, etc.) et d&#39;Afrique (&Eacute;rythr&eacute;e, Soudan, Mali, etc.).&nbsp;Ici, en France, lorsqu&rsquo;aucune prise en charge n&rsquo;est possible, nous leur donnons un sac de couchage ou nous gonflons des matelas pneumatiques dans des camions.</p><p><strong>Nous sommes confront&eacute;s &agrave; leur d&eacute;nuement. &Agrave; leurs regards. &Agrave; leurs incompr&eacute;hensions. Ce sont avant tout des enfants en danger.</strong></p><p>C&rsquo;est pourquoi nous voulons les mettre &agrave; l&#39;abri, en priorit&eacute; cet hiver,&nbsp;en lan&ccedil;ant une campagne de financement participatif pour financer cette op&eacute;ration.</p><p><img src=\"https://drfhlmcehrc34.cloudfront.net/cache/7/a/7a709346ad0c5ba21e7b095649fe197b.jpg\" class=\"fr-fic fr-dii\"></p><p><strong>Gr&acirc;ce au r&eacute;seau d&rsquo;h&eacute;bergement citoyen Utopia 56 d&eacute;j&agrave; existant,&nbsp;nous avons trouv&eacute;, en moins de huit mois, un toit &agrave; plus de 200 jeunes.</strong></p><p>Notre h&eacute;bergement citoyen s&rsquo;est d&eacute;velopp&eacute; en C&ocirc;tes-d&rsquo;Armor, Finist&egrave;re, Indre, Nord, Morbihan, &agrave; Paris&hellip; Les h&eacute;bergeurs signent des conventions avec Utopia 56. L&rsquo;adolescent en prend connaissance et des &laquo; b&eacute;n&eacute;voles soutiens &raquo; assurent les d&eacute;marches et l&rsquo;aide &agrave; l&rsquo;h&eacute;bergeur. &nbsp;Mais nous voulons allez plus loin ! Avec ce crowdfunding <strong>&laquo;Au chaud les ados&raquo;</strong>, nous voulons d&eacute;velopper et structurer notre r&eacute;seau d&rsquo;h&eacute;bergement citoyen. Rapidement.&nbsp;</p><p><strong>Et d&rsquo;abord pour 80 adolescents de plus en 6 mois.</strong></p>",
      resume: "<p><strong>7.000 adh&eacute;rents depuis janvier 2016. La plupart sont des b&eacute;n&eacute;voles mobilis&eacute;s sur le terrain pour aider les migrants.&nbsp;</strong></p><p><strong>Nos valeurs</strong></p><p>Le respect des r&eacute;fugi&eacute;s<br>De leurs choix et de leurs r&ecirc;ves d&#39;avenir<br>L&#39;action face &agrave; l&#39;indignit&eacute;<br>La participation citoyenne<br>L&#39;ind&eacute;pendance et la libert&eacute; de parole</p><p><a href=\"http://www.utopia56.com/\" rel=\"nofollow\" target=\"_blank\"></a><a href=\"//www.utopia56.com\">www.utopia56.com</a><br><a href=\"https://www.facebook.com/asso.utopia56/\" rel=\"nofollow\" target=\"_blank\">https://www.facebook.com/asso.utopia56/</a></p><p>&nbsp;</p><p><strong>Notre histoire&nbsp;</strong></p><p>Utopia 56 est une association cr&eacute;&eacute;e en novembre 2015 en Bretagne pour encadrer du b&eacute;n&eacute;volat sur la jungle de Calais. Nous avons ouvert un premier appartement d&#39;accueil des b&eacute;n&eacute;voles le 15 janvier 2015. L&rsquo;association a ensuite g&eacute;r&eacute; le premier camp humanitaire de France d&egrave;s son ouverture &agrave; Grande-Synthe pr&egrave;s de Dunkerque. Nous avons aussi soutenu le Centre de Premier Accueil de la Porte de la Chapelle &agrave; Paris. Avec 7.000 adh&eacute;rents &agrave; ce jour, nous mettons &agrave; l&rsquo;abri des mineurs isol&eacute;s, nous aidons aux distributions de nourriture, sacs de couchages, et acc&egrave;s aux soins (hospitalisations), tant &agrave; Calais qu&rsquo;&agrave; Paris. Nous intervenons dans plusieurs autres r&eacute;gions de France (Lille, Lyon, Quimper, Saint-Brieuc, Tours, etc.)</p>",
      dateFinValidite: "2017-12-12T00:00:00+00:00",
      dateFinVisibilite: "2017-12-12T00:00:00+00:00",
      valid: false,
      medias: [
        {
          type: "image",
          lien: "https://cdn.pixabay.com/photo/2015/01/09/05/40/africa-593747_960_720.jpg"
        }
      ]
    },
    {
      id: "5a249da800b1e248ee4ce082",
      intitule: "Aider les jeunes migrants sans famille",
      description: "<p><strong>Des centaines d&rsquo;adolescents r&eacute;fugi&eacute;s vivent actuellement dans la rue en France. Des b&eacute;n&eacute;voles d&rsquo;Utopia 56 sont &agrave; leur contact pour les aider au maximum dans toutes leurs d&eacute;marches.</strong></p><p>Ils arrivent apr&egrave;s un long et &eacute;prouvant parcours migratoire en provenance du Moyen-Orient (Syrie, Afghanistan, Irak, etc.) et d&#39;Afrique (&Eacute;rythr&eacute;e, Soudan, Mali, etc.).&nbsp;Ici, en France, lorsqu&rsquo;aucune prise en charge n&rsquo;est possible, nous leur donnons un sac de couchage ou nous gonflons des matelas pneumatiques dans des camions.</p><p><strong>Nous sommes confront&eacute;s &agrave; leur d&eacute;nuement. &Agrave; leurs regards. &Agrave; leurs incompr&eacute;hensions. Ce sont avant tout des enfants en danger.</strong></p><p>C&rsquo;est pourquoi nous voulons les mettre &agrave; l&#39;abri, en priorit&eacute; cet hiver,&nbsp;en lan&ccedil;ant une campagne de financement participatif pour financer cette op&eacute;ration.</p><p><img src=\"https://drfhlmcehrc34.cloudfront.net/cache/7/a/7a709346ad0c5ba21e7b095649fe197b.jpg\" class=\"fr-fic fr-dii\"></p><p><strong>Gr&acirc;ce au r&eacute;seau d&rsquo;h&eacute;bergement citoyen Utopia 56 d&eacute;j&agrave; existant,&nbsp;nous avons trouv&eacute;, en moins de huit mois, un toit &agrave; plus de 200 jeunes.</strong></p><p>Notre h&eacute;bergement citoyen s&rsquo;est d&eacute;velopp&eacute; en C&ocirc;tes-d&rsquo;Armor, Finist&egrave;re, Indre, Nord, Morbihan, &agrave; Paris&hellip; Les h&eacute;bergeurs signent des conventions avec Utopia 56. L&rsquo;adolescent en prend connaissance et des &laquo; b&eacute;n&eacute;voles soutiens &raquo; assurent les d&eacute;marches et l&rsquo;aide &agrave; l&rsquo;h&eacute;bergeur. &nbsp;Mais nous voulons allez plus loin ! Avec ce crowdfunding <strong>&laquo;Au chaud les ados&raquo;</strong>, nous voulons d&eacute;velopper et structurer notre r&eacute;seau d&rsquo;h&eacute;bergement citoyen. Rapidement.&nbsp;</p><p><strong>Et d&rsquo;abord pour 80 adolescents de plus en 6 mois.</strong></p>",
      resume: "<p><strong>7.000 adh&eacute;rents depuis janvier 2016. La plupart sont des b&eacute;n&eacute;voles mobilis&eacute;s sur le terrain pour aider les migrants.&nbsp;</strong></p><p><strong>Nos valeurs</strong></p><p>Le respect des r&eacute;fugi&eacute;s<br>De leurs choix et de leurs r&ecirc;ves d&#39;avenir<br>L&#39;action face &agrave; l&#39;indignit&eacute;<br>La participation citoyenne<br>L&#39;ind&eacute;pendance et la libert&eacute; de parole</p><p><a href=\"http://www.utopia56.com/\" rel=\"nofollow\" target=\"_blank\"></a><a href=\"//www.utopia56.com\">www.utopia56.com</a><br><a href=\"https://www.facebook.com/asso.utopia56/\" rel=\"nofollow\" target=\"_blank\">https://www.facebook.com/asso.utopia56/</a></p><p>&nbsp;</p><p><strong>Notre histoire&nbsp;</strong></p><p>Utopia 56 est une association cr&eacute;&eacute;e en novembre 2015 en Bretagne pour encadrer du b&eacute;n&eacute;volat sur la jungle de Calais. Nous avons ouvert un premier appartement d&#39;accueil des b&eacute;n&eacute;voles le 15 janvier 2015. L&rsquo;association a ensuite g&eacute;r&eacute; le premier camp humanitaire de France d&egrave;s son ouverture &agrave; Grande-Synthe pr&egrave;s de Dunkerque. Nous avons aussi soutenu le Centre de Premier Accueil de la Porte de la Chapelle &agrave; Paris. Avec 7.000 adh&eacute;rents &agrave; ce jour, nous mettons &agrave; l&rsquo;abri des mineurs isol&eacute;s, nous aidons aux distributions de nourriture, sacs de couchages, et acc&egrave;s aux soins (hospitalisations), tant &agrave; Calais qu&rsquo;&agrave; Paris. Nous intervenons dans plusieurs autres r&eacute;gions de France (Lille, Lyon, Quimper, Saint-Brieuc, Tours, etc.)</p>",
      dateFinValidite: "2017-12-12T00:00:00+00:00",
      dateFinVisibilite: "2017-12-12T00:00:00+00:00",
      valid: false,
      medias: [
        {
          type: "image",
          lien: "https://trousseaprojets.fr/assets/logo-92f2a533cc1c396d79f11e2697f5887a5c49fc9d43363bac3e030c41db8f92ac.png"
        }
      ]
    },
    {
      id: "5a249da800b1e248ee4ce082",
      intitule: "Aider les jeunes migrants sans famille",
      description: "<p><strong>Des centaines d&rsquo;adolescents r&eacute;fugi&eacute;s vivent actuellement dans la rue en France. Des b&eacute;n&eacute;voles d&rsquo;Utopia 56 sont &agrave; leur contact pour les aider au maximum dans toutes leurs d&eacute;marches.</strong></p><p>Ils arrivent apr&egrave;s un long et &eacute;prouvant parcours migratoire en provenance du Moyen-Orient (Syrie, Afghanistan, Irak, etc.) et d&#39;Afrique (&Eacute;rythr&eacute;e, Soudan, Mali, etc.).&nbsp;Ici, en France, lorsqu&rsquo;aucune prise en charge n&rsquo;est possible, nous leur donnons un sac de couchage ou nous gonflons des matelas pneumatiques dans des camions.</p><p><strong>Nous sommes confront&eacute;s &agrave; leur d&eacute;nuement. &Agrave; leurs regards. &Agrave; leurs incompr&eacute;hensions. Ce sont avant tout des enfants en danger.</strong></p><p>C&rsquo;est pourquoi nous voulons les mettre &agrave; l&#39;abri, en priorit&eacute; cet hiver,&nbsp;en lan&ccedil;ant une campagne de financement participatif pour financer cette op&eacute;ration.</p><p><img src=\"https://drfhlmcehrc34.cloudfront.net/cache/7/a/7a709346ad0c5ba21e7b095649fe197b.jpg\" class=\"fr-fic fr-dii\"></p><p><strong>Gr&acirc;ce au r&eacute;seau d&rsquo;h&eacute;bergement citoyen Utopia 56 d&eacute;j&agrave; existant,&nbsp;nous avons trouv&eacute;, en moins de huit mois, un toit &agrave; plus de 200 jeunes.</strong></p><p>Notre h&eacute;bergement citoyen s&rsquo;est d&eacute;velopp&eacute; en C&ocirc;tes-d&rsquo;Armor, Finist&egrave;re, Indre, Nord, Morbihan, &agrave; Paris&hellip; Les h&eacute;bergeurs signent des conventions avec Utopia 56. L&rsquo;adolescent en prend connaissance et des &laquo; b&eacute;n&eacute;voles soutiens &raquo; assurent les d&eacute;marches et l&rsquo;aide &agrave; l&rsquo;h&eacute;bergeur. &nbsp;Mais nous voulons allez plus loin ! Avec ce crowdfunding <strong>&laquo;Au chaud les ados&raquo;</strong>, nous voulons d&eacute;velopper et structurer notre r&eacute;seau d&rsquo;h&eacute;bergement citoyen. Rapidement.&nbsp;</p><p><strong>Et d&rsquo;abord pour 80 adolescents de plus en 6 mois.</strong></p>",
      resume: "<p><strong>7.000 adh&eacute;rents depuis janvier 2016. La plupart sont des b&eacute;n&eacute;voles mobilis&eacute;s sur le terrain pour aider les migrants.&nbsp;</strong></p><p><strong>Nos valeurs</strong></p><p>Le respect des r&eacute;fugi&eacute;s<br>De leurs choix et de leurs r&ecirc;ves d&#39;avenir<br>L&#39;action face &agrave; l&#39;indignit&eacute;<br>La participation citoyenne<br>L&#39;ind&eacute;pendance et la libert&eacute; de parole</p><p><a href=\"http://www.utopia56.com/\" rel=\"nofollow\" target=\"_blank\"></a><a href=\"//www.utopia56.com\">www.utopia56.com</a><br><a href=\"https://www.facebook.com/asso.utopia56/\" rel=\"nofollow\" target=\"_blank\">https://www.facebook.com/asso.utopia56/</a></p><p>&nbsp;</p><p><strong>Notre histoire&nbsp;</strong></p><p>Utopia 56 est une association cr&eacute;&eacute;e en novembre 2015 en Bretagne pour encadrer du b&eacute;n&eacute;volat sur la jungle de Calais. Nous avons ouvert un premier appartement d&#39;accueil des b&eacute;n&eacute;voles le 15 janvier 2015. L&rsquo;association a ensuite g&eacute;r&eacute; le premier camp humanitaire de France d&egrave;s son ouverture &agrave; Grande-Synthe pr&egrave;s de Dunkerque. Nous avons aussi soutenu le Centre de Premier Accueil de la Porte de la Chapelle &agrave; Paris. Avec 7.000 adh&eacute;rents &agrave; ce jour, nous mettons &agrave; l&rsquo;abri des mineurs isol&eacute;s, nous aidons aux distributions de nourriture, sacs de couchages, et acc&egrave;s aux soins (hospitalisations), tant &agrave; Calais qu&rsquo;&agrave; Paris. Nous intervenons dans plusieurs autres r&eacute;gions de France (Lille, Lyon, Quimper, Saint-Brieuc, Tours, etc.)</p>",
      dateFinValidite: "2017-12-12T00:00:00+00:00",
      dateFinVisibilite: "2017-12-12T00:00:00+00:00",
      valid: false,
      medias: [
        {
          type: "image",
          lien: "http://www.montblanc.univ-evry.fr/wp-content/uploads/2016/04/Sans-titre-2-01-01-e1459954995659.png"
        }
      ]
    },
    {
      id: "5a249da800b1e248ee4ce082",
      intitule: "Aider les jeunes migrants sans famille",
      description: "<p><strong>Des centaines d&rsquo;adolescents r&eacute;fugi&eacute;s vivent actuellement dans la rue en France. Des b&eacute;n&eacute;voles d&rsquo;Utopia 56 sont &agrave; leur contact pour les aider au maximum dans toutes leurs d&eacute;marches.</strong></p><p>Ils arrivent apr&egrave;s un long et &eacute;prouvant parcours migratoire en provenance du Moyen-Orient (Syrie, Afghanistan, Irak, etc.) et d&#39;Afrique (&Eacute;rythr&eacute;e, Soudan, Mali, etc.).&nbsp;Ici, en France, lorsqu&rsquo;aucune prise en charge n&rsquo;est possible, nous leur donnons un sac de couchage ou nous gonflons des matelas pneumatiques dans des camions.</p><p><strong>Nous sommes confront&eacute;s &agrave; leur d&eacute;nuement. &Agrave; leurs regards. &Agrave; leurs incompr&eacute;hensions. Ce sont avant tout des enfants en danger.</strong></p><p>C&rsquo;est pourquoi nous voulons les mettre &agrave; l&#39;abri, en priorit&eacute; cet hiver,&nbsp;en lan&ccedil;ant une campagne de financement participatif pour financer cette op&eacute;ration.</p><p><img src=\"https://drfhlmcehrc34.cloudfront.net/cache/7/a/7a709346ad0c5ba21e7b095649fe197b.jpg\" class=\"fr-fic fr-dii\"></p><p><strong>Gr&acirc;ce au r&eacute;seau d&rsquo;h&eacute;bergement citoyen Utopia 56 d&eacute;j&agrave; existant,&nbsp;nous avons trouv&eacute;, en moins de huit mois, un toit &agrave; plus de 200 jeunes.</strong></p><p>Notre h&eacute;bergement citoyen s&rsquo;est d&eacute;velopp&eacute; en C&ocirc;tes-d&rsquo;Armor, Finist&egrave;re, Indre, Nord, Morbihan, &agrave; Paris&hellip; Les h&eacute;bergeurs signent des conventions avec Utopia 56. L&rsquo;adolescent en prend connaissance et des &laquo; b&eacute;n&eacute;voles soutiens &raquo; assurent les d&eacute;marches et l&rsquo;aide &agrave; l&rsquo;h&eacute;bergeur. &nbsp;Mais nous voulons allez plus loin ! Avec ce crowdfunding <strong>&laquo;Au chaud les ados&raquo;</strong>, nous voulons d&eacute;velopper et structurer notre r&eacute;seau d&rsquo;h&eacute;bergement citoyen. Rapidement.&nbsp;</p><p><strong>Et d&rsquo;abord pour 80 adolescents de plus en 6 mois.</strong></p>",
      resume: "<p><strong>7.000 adh&eacute;rents depuis janvier 2016. La plupart sont des b&eacute;n&eacute;voles mobilis&eacute;s sur le terrain pour aider les migrants.&nbsp;</strong></p><p><strong>Nos valeurs</strong></p><p>Le respect des r&eacute;fugi&eacute;s<br>De leurs choix et de leurs r&ecirc;ves d&#39;avenir<br>L&#39;action face &agrave; l&#39;indignit&eacute;<br>La participation citoyenne<br>L&#39;ind&eacute;pendance et la libert&eacute; de parole</p><p><a href=\"http://www.utopia56.com/\" rel=\"nofollow\" target=\"_blank\"></a><a href=\"//www.utopia56.com\">www.utopia56.com</a><br><a href=\"https://www.facebook.com/asso.utopia56/\" rel=\"nofollow\" target=\"_blank\">https://www.facebook.com/asso.utopia56/</a></p><p>&nbsp;</p><p><strong>Notre histoire&nbsp;</strong></p><p>Utopia 56 est une association cr&eacute;&eacute;e en novembre 2015 en Bretagne pour encadrer du b&eacute;n&eacute;volat sur la jungle de Calais. Nous avons ouvert un premier appartement d&#39;accueil des b&eacute;n&eacute;voles le 15 janvier 2015. L&rsquo;association a ensuite g&eacute;r&eacute; le premier camp humanitaire de France d&egrave;s son ouverture &agrave; Grande-Synthe pr&egrave;s de Dunkerque. Nous avons aussi soutenu le Centre de Premier Accueil de la Porte de la Chapelle &agrave; Paris. Avec 7.000 adh&eacute;rents &agrave; ce jour, nous mettons &agrave; l&rsquo;abri des mineurs isol&eacute;s, nous aidons aux distributions de nourriture, sacs de couchages, et acc&egrave;s aux soins (hospitalisations), tant &agrave; Calais qu&rsquo;&agrave; Paris. Nous intervenons dans plusieurs autres r&eacute;gions de France (Lille, Lyon, Quimper, Saint-Brieuc, Tours, etc.)</p>",
      dateFinValidite: "2017-12-12T00:00:00+00:00",
      dateFinVisibilite: "2017-12-12T00:00:00+00:00",
      valid: false,
      medias: [
        {
          type: "image",
          lien: "http://www.huisne-sarthoise.com/medias/2015/05/etudions-votre-projet.jpg"
        }
      ]
    },
    {
      id: "5a249da800b1e248ee4ce082",
      intitule: "Aider les jeunes migrants sans famille",
      description: "<p><strong>Des centaines d&rsquo;adolescents r&eacute;fugi&eacute;s vivent actuellement dans la rue en France. Des b&eacute;n&eacute;voles d&rsquo;Utopia 56 sont &agrave; leur contact pour les aider au maximum dans toutes leurs d&eacute;marches.</strong></p><p>Ils arrivent apr&egrave;s un long et &eacute;prouvant parcours migratoire en provenance du Moyen-Orient (Syrie, Afghanistan, Irak, etc.) et d&#39;Afrique (&Eacute;rythr&eacute;e, Soudan, Mali, etc.).&nbsp;Ici, en France, lorsqu&rsquo;aucune prise en charge n&rsquo;est possible, nous leur donnons un sac de couchage ou nous gonflons des matelas pneumatiques dans des camions.</p><p><strong>Nous sommes confront&eacute;s &agrave; leur d&eacute;nuement. &Agrave; leurs regards. &Agrave; leurs incompr&eacute;hensions. Ce sont avant tout des enfants en danger.</strong></p><p>C&rsquo;est pourquoi nous voulons les mettre &agrave; l&#39;abri, en priorit&eacute; cet hiver,&nbsp;en lan&ccedil;ant une campagne de financement participatif pour financer cette op&eacute;ration.</p><p><img src=\"https://drfhlmcehrc34.cloudfront.net/cache/7/a/7a709346ad0c5ba21e7b095649fe197b.jpg\" class=\"fr-fic fr-dii\"></p><p><strong>Gr&acirc;ce au r&eacute;seau d&rsquo;h&eacute;bergement citoyen Utopia 56 d&eacute;j&agrave; existant,&nbsp;nous avons trouv&eacute;, en moins de huit mois, un toit &agrave; plus de 200 jeunes.</strong></p><p>Notre h&eacute;bergement citoyen s&rsquo;est d&eacute;velopp&eacute; en C&ocirc;tes-d&rsquo;Armor, Finist&egrave;re, Indre, Nord, Morbihan, &agrave; Paris&hellip; Les h&eacute;bergeurs signent des conventions avec Utopia 56. L&rsquo;adolescent en prend connaissance et des &laquo; b&eacute;n&eacute;voles soutiens &raquo; assurent les d&eacute;marches et l&rsquo;aide &agrave; l&rsquo;h&eacute;bergeur. &nbsp;Mais nous voulons allez plus loin ! Avec ce crowdfunding <strong>&laquo;Au chaud les ados&raquo;</strong>, nous voulons d&eacute;velopper et structurer notre r&eacute;seau d&rsquo;h&eacute;bergement citoyen. Rapidement.&nbsp;</p><p><strong>Et d&rsquo;abord pour 80 adolescents de plus en 6 mois.</strong></p>",
      resume: "<p><strong>7.000 adh&eacute;rents depuis janvier 2016. La plupart sont des b&eacute;n&eacute;voles mobilis&eacute;s sur le terrain pour aider les migrants.&nbsp;</strong></p><p><strong>Nos valeurs</strong></p><p>Le respect des r&eacute;fugi&eacute;s<br>De leurs choix et de leurs r&ecirc;ves d&#39;avenir<br>L&#39;action face &agrave; l&#39;indignit&eacute;<br>La participation citoyenne<br>L&#39;ind&eacute;pendance et la libert&eacute; de parole</p><p><a href=\"http://www.utopia56.com/\" rel=\"nofollow\" target=\"_blank\"></a><a href=\"//www.utopia56.com\">www.utopia56.com</a><br><a href=\"https://www.facebook.com/asso.utopia56/\" rel=\"nofollow\" target=\"_blank\">https://www.facebook.com/asso.utopia56/</a></p><p>&nbsp;</p><p><strong>Notre histoire&nbsp;</strong></p><p>Utopia 56 est une association cr&eacute;&eacute;e en novembre 2015 en Bretagne pour encadrer du b&eacute;n&eacute;volat sur la jungle de Calais. Nous avons ouvert un premier appartement d&#39;accueil des b&eacute;n&eacute;voles le 15 janvier 2015. L&rsquo;association a ensuite g&eacute;r&eacute; le premier camp humanitaire de France d&egrave;s son ouverture &agrave; Grande-Synthe pr&egrave;s de Dunkerque. Nous avons aussi soutenu le Centre de Premier Accueil de la Porte de la Chapelle &agrave; Paris. Avec 7.000 adh&eacute;rents &agrave; ce jour, nous mettons &agrave; l&rsquo;abri des mineurs isol&eacute;s, nous aidons aux distributions de nourriture, sacs de couchages, et acc&egrave;s aux soins (hospitalisations), tant &agrave; Calais qu&rsquo;&agrave; Paris. Nous intervenons dans plusieurs autres r&eacute;gions de France (Lille, Lyon, Quimper, Saint-Brieuc, Tours, etc.)</p>",
      dateFinValidite: "2017-12-12T00:00:00+00:00",
      dateFinVisibilite: "2017-12-12T00:00:00+00:00",
      valid: false,
      medias: [
        {
          type: "image",
          lien: "https://projetarcadie.com/sites/default/files/logo_0.png"
        }
      ]
    }

    ];

  constructor(private projetService : ProjetsService) { }

  ngOnInit() {
    this.projets = this.allProjets;

    console.log(this.projets);
    /*this.projetService.getListProjets()
      .subscribe(
        data => this.handleProjet(data),
        error => this.handleError(error)
      )*/
  }

  handleProjet(data){
      this.projets = data;
      console.log(this.projets);
  }

  handleError(error){
    console.log(error);
  }
  getIdSelected(id){
    localStorage.setItem("idProjetSelected",id);
    console.log(localStorage.getItem("idProjetSelected"));
  }
}
