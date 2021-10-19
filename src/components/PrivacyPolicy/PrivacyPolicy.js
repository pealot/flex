import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './PrivacyPolicy.module.css';

const PrivacyPolicy = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Dernère mise à jour : 19 octobre 2021
      </p>

      <p align="justify">
        Cette politique de confidentialité décrit comment vos informations personnelles sont 
        collectées, utilisées et partagées lorsque vous visitez, utilisez ou effectuez une 
        transaction depuis pealot.com (le/ce/notre "site", "site web").
      </p>

      <h2>ARTICLE 1 – RENSEIGNEMENTS PERSONNELS RECUEILLIS</h2>
      <p align="justify">
        Lorsque vous effectuez un achat sur notre site, dans le cadre de notre processus d’achat 
        et de vente, nous recueillons les renseignements personnels que vous nous fournissez, 
        tels que votre nom, votre adresse et votre adresse e-mail.
      </p>

      <p align="justify">
        Lorsque vous naviguez sur notre boutique, nous recevons également automatiquement l’adresse 
        de protocole Internet (adresse IP) de votre ordinateur, qui nous permet d’obtenir plus 
        de détails au sujet du navigateur et du système d’exploitation que vous utilisez.
      </p>

      <p align="justify">
        Marketing par e-mail : Avec votre permission, nous pourrions vous envoyer des e-mails 
        au sujet de notre boutique, de nouveaux produits et services et d’autres mises à jour.
      </p>


      <h2>ARTICLE 2 - CONSENTEMENT</h2>
      <p align="justify">
        Comment obtenez-vous mon consentement ?
      </p>

      <p align="justify">
        Lorsque vous nous fournissez vos renseignements personnels pour conclure une transaction, 
        vérifier votre carte de crédit, passer une commande ou demander un remboursement, nous 
        présumons que vous consentez à ce que nous recueillions vos renseignements et à ce que 
        nous les utilisions à cette fin uniquement.
      </p>

      <p align="justify">
        Si nous vous demandons de nous fournir vos renseignements personnels pour une autre raison, 
        à des fins de marketing par exemple, nous vous demanderons directement votre consentement 
        explicite, ou nous vous donnerons la possibilité de refuser.
      </p>

      <p align="justify">
        Comment puis-je retirer mon consentement ?
      </p>

      <p align="justify">
        Si après nous avoir donné votre consentement, vous changez d’avis et ne consentez plus à 
        ce que nous puissions vous contacter, recueillir vos renseignements ou les divulguer, 
        vous pouvez nous en aviser en nous contactant à contact@pealot.com
      </p>

      <h2>ARTICLE 3 – DIVULGATION</h2>
      <p align="justify">
        Nous pouvons divulguer vos renseignements personnels si la loi nous oblige à le faire ou 
        si vous violez nos Conditions Générales de Service et d’Utilisation.
      </p>

      <h2>ARTICLE 4 – SHARETRIBE</h2>
      <p align="justify">
        Notre boutique  est hébergée sur Sharetribe Inc. Ils nous fournissent la plate-forme 
        e-commerce en ligne qui nous permet de vous vendre nos services et produits.
      </p>
      
      <p align="justify">
        Vos données sont stockées dans le système de stockage de données et les bases de 
        données de Sharetribe, et dans l’application générale de Sharetribe. Vos données 
        sont conservées sur un serveur sécurisé protégé par un pare-feu.
      </p>

      <p align="justify">
      Paiement :
      </p>

      <p align="justify">
      Si vous réalisez votre achat par le biais d’une passerelle de paiement direct, dans 
      ce cas Sharetribe stockera vos renseignements de carte de crédit. Ces renseignements 
      sont chiffrés conformément à la norme de sécurité des données établie par l’industrie 
      des cartes de paiement (norme PCI-DSS). Les renseignements relatifs à votre transaction 
      d’achat sont conservés aussi longtemps que nécessaire pour finaliser votre commande. 
      Une fois votre commande finalisée, les renseignements relatifs à la transaction d’achat 
      sont supprimés.
      </p>

      <p align="justify">
      Toutes les passerelles de paiement direct respectent la norme PCI-DSS, gérée par le conseil 
      des normes de sécurité PCI, qui résulte de l’effort conjoint d’entreprises telles que Visa, 
      MasterCard, American Express et Discover.
      </p>

      <p align="justify">
      Les exigences de la norme PCI-DSS permettent d’assurer le traitement sécurisé des données 
      de cartes de crédit par notre boutique et par ses prestataires de services.
      </p>

      <p align="justify">
      Pour plus d’informations, veuillez consulter les Conditions d’Utilisation de Sharetribe ou 
      la Politique de Confidentialité.
      </p>


      <h2>ARTICLE 5 – SERVICES FOURNIS PAR DES TIERS</h2>
      <p align="justify">
        De manière générale, les fournisseurs tiers que nous utilisons vont uniquement recueillir, 
        utiliser et divulguer vos renseignements dans la mesure du nécessaire pour pouvoir réaliser 
        les services qu’ils nous fournissent.
      </p>
      
      <p align="justify">
        Cependant, certains tiers fournisseurs de services, comme les passerelles de paiement et 
        autres processeurs de transactions de paiement, possèdent leurs propres politiques de 
        confidentialité quant aux renseignements que nous sommes tenus de leur fournir pour vos 
        transactions d’achat.
      </p>

      <p align="justify">
      En ce qui concerne ces fournisseurs, nous vous recommandons de lire attentivement leurs 
      politiques de confidentialité pour que vous puissiez comprendre la manière dont ils traiteront 
      vos renseignements personnels.
      </p>

      <p align="justify">
      Il ne faut pas oublier que certains fournisseurs peuvent être situés ou avoir des installations 
      situées dans une juridiction différente de la vôtre ou de la nôtre. Donc si vous décidez de 
      poursuivre une transaction qui requiert les services d’un fournisseur tiers, vos renseignements 
      pourraient alors être régis par les lois de la juridiction dans laquelle ce fournisseur se situe 
      ou celles de la juridiction dans laquelle ses installations sont situées.
      </p>

      <p align="justify">
      À titre d’exemple, si vous êtes situé en Suisse et que votre transaction est traitée par une 
      passerelle de paiement située aux États-Unis, les renseignements vous appartenant qui ont été 
      utilisés pour conclure la transaction pourraient être divulgués en vertu de la législation des 
      États-Unis, y compris le Patriot Act.
      </p>

      <p align="justify">
      Une fois que vous quittez notre site ou que vous êtes redirigé vers le site web ou l’application 
      d’un tiers, vous n’êtes plus régi par la présente Politique de Confidentialité ni par les 
      Conditions Générales de Service et d’Utilisation de notre site web.
      </p>

      <p align="justify">
      Liens :
      </p>

      <p align="justify">
      Vous pourriez être amené à quitter notre site web en cliquant sur certains liens présents sur 
      notre site. Nous n’assumons aucune responsabilité quant aux pratiques de confidentialité exercées 
      par ces autres sites et vous recommandons de lire attentivement leurs politiques de confidentialité.
      </p>

      <h2>ARTICLE 6 – SÉCURITÉ</h2>
      <p align="justify">
        Pour protéger vos données personnelles, nous prenons des précautions raisonnables et suivons 
        les meilleures pratiques de l’industrie pour nous assurer qu’elles ne soient pas perdues, 
        détournées, consultées, divulguées, modifiées ou détruites de manière inappropriée.
      </p>
      
      <p align="justify">
        Si vous nous fournissez vos informations de carte de crédit, elles seront chiffrées par le 
        biais de l’utilisation du protocole de sécurisation SSL et conservées avec un chiffrement 
        de type AES-256. Bien qu’aucune méthode de transmission sur Internet ou de stockage électronique 
        ne soit sûre à 100 %, nous suivons toutes les exigences de la norme PCI-DSS et mettons en œuvre 
        des normes supplémentaires généralement reconnues par l’industrie.
      </p>


      <h2>ARTICLE 7 – ÂGE DE CONSENTEMENT</h2>
      <p align="justify">
        En utilisant ce site, vous déclarez que vous avez au moins l’âge de la majorité dans votre 
        État ou province de résidence, et que vous nous avez donné votre consentement pour permettre 
        à toute personne d’âge mineur à votre charge d’utiliser ce site web.
      </p>
      
      <h2>ARTICLE 8 – MODIFICATIONS APPORTÉES À LA PRÉSENTE POLITIQUE DE CONFIDENTIALITÉ</h2>
      <p align="justify">
        Nous nous réservons le droit de modifier la présente politique de confidentialité à tout 
        moment, donc veuillez s’il vous plait la consulter fréquemment. Les changements et les 
        clarifications prendront effet immédiatement après leur publication sur le site web. 
        Si nous apportons des changements au contenu de cette politique, nous vous aviserons 
        ici qu’elle a été mise à jour, pour que vous sachiez quels renseignements nous recueillons, 
        la manière dont nous les utilisons, et dans quelles circonstances nous les divulguons, 
        s’il y a lieu de le faire.
      </p>
      
      <p align="justify">
        Si notre boutique fait l’objet d’une acquisition par ou d’une fusion avec une autre entreprise, 
        vos renseignements pourraient être transférés aux nouveaux propriétaires pour que nous puissions 
        continuer à vous vendre des produits et services.
      </p>
      
      <br></br>

      <p align="justify">
      QUESTIONS ET COORDONNÉES
      </p>

      <p align="justify">
        Si vous souhaitez accéder à, corriger, modifier ou supprimer toute information personnelle que 
        nous avons à votre sujet, déposer une plainte, ou si vous souhaitez simplement avoir plus 
        d’informations, contactez notre agent responsable des normes de confidentialité à contact@pealot.com.
      </p>
      

    </div>
  );
};

PrivacyPolicy.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

PrivacyPolicy.propTypes = {
  rootClassName: string,
  className: string,
};

export default PrivacyPolicy;
