import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Reimbursment.module.css';

const Reimbursment = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Dernière mise à jour : 19 octobre 2021
      </p>

      <p align="justify">Notre politique dure 14 jours. Si 14 jours se sont écoulés depuis votre achat, nous ne pouvons malheureusement pas vous offrir un remboursement ou un échange.</p>
<p align="justify">Pour toute réservation de produit ou service dont la location doit débuter 7 jours ou moins aprés le paiement de la réservation, les remboursements seront seulement autorisés dans leur totalité dans les 24 heures après que le paiement ait été effectué.<br /><br />Pour pouvoir bénéficier d’un remboursement, votre produit ou service doit être inutilisé et la période de réservation de votre produit ou service ne doit pas avoir été entamée.<br /><br />Plusieurs types de produits ne peuvent pas être remboursés. Les cartes cadeaux, codes promotionnels, bons d'achat ainsi que les logiciels téléchargeables ne peuvent pas être remboursés. Les remboursements sont également exclus à la suite d'une utilisation non autorisée, illégale, non conforme ou abusive du Service notamment, mais ne se limitant pas à ces cas, toute utilisation allant à l'encontre des lois et règles prévues dans <span>la commune, le canton (ou la région) ainsi que l'État ou toute région géographique ou juridiction dans lesquels vous vous trouvez et ceux dans lesquels le Service est fourni ou utilisé</span>. <span>Tout produit ou service ayant été utilisé ou partiellement utilisé ne pourra pas, non plus, faire l'objet d'un remboursement.</span><br /><br />Pour effectuer un remboursement, vous devez nous présenter un reçu ou une preuve d’achat.<br /><br />Il y a certaines situations où seul un remboursement partiel pourrait être accordé : </p>


<p align="justify">Tout produit ou service dont la période de réservation doit débuter dans 7 jours ou moins :</p>


<li>moins de 24h avant le début de la période de réservation : pas de remboursement</li>
<li>entre 1 et 3 jours avant le début de la période de réservation : seule la moitié des frais de location est remboursée, l'autre moitié ainsi que les frais de service ne sont pas remboursés</li>
<li>entre 3 et 7 jours avant le début de la période de réservation : les frais de location sont remboursés, les frais de service ne sont pas remboursés</li>



<p align="justify"><br />Une fois que nous aurons reçu et étudié votre demande de remboursement, nous vous enverrons un e-mail pour vous confirmer que nous l’avons bien reçue. Nous vous informerons également de notre décision quant à l’approbation ou au rejet de votre demande de remboursement.<br />Si votre demande est approuvée, alors votre remboursement sera traité, et un crédit sera automatiquement appliqué à votre carte de crédit ou à votre méthode originale de paiement, dans un délai d’un certain nombre de jours.<br /><br />Remboursements en retard ou manquants :<br />Si vous n’avez pas encore reçu votre remboursement, veuillez d’abord consulter votre compte bancaire à nouveau. Ensuite, contactez l’entité émettrice de votre carte de crédit, car il pourrait y avoir un délai avant que votre remboursement ne soit officiellement affiché. Ensuite, contactez votre banque. Il y a souvent un délai de traitement nécessaire avant qu’un remboursement ne soit affiché.<br />Si après avoir effectué toutes ces étapes, vous n’avez toujours pas reçu votre remboursement, veuillez s’il vous plait nous contacter à <strong>contact@pealot.com</strong>.<br /><br />Articles soldés, avec rabais :<br />Seuls les articles à prix courant peuvent être remboursés. Malheureusement, les articles soldés ou présentant des rabais ne sont pas remboursables.</p>
    </div>
  );
};

Reimbursment.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

Reimbursment.propTypes = {
  rootClassName: string,
  className: string,
};

export default Reimbursment;
