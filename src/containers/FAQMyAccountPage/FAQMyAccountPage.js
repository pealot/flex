import React from 'react';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';
import { FormattedMessage } from '../../util/reactIntl';

import StaticPage from '../../containers/StaticPage/StaticPage';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';

import css from './FAQMyAccountPage.module.css';

const FAQMyAccountPage = () => {
  // prettier-ignore
  return (
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>



          <h1 align="center">
          <FormattedMessage id="FAQ.MyAccount" />
          </h1>

<ul>
<li>
<h3 align="center"><a href="https://pealot.myshopify.com/pages/faq-mon-compte-reservations-actives" 
title="Je souhaite consulter les détails d'une réservation en cours. Comment faire ?">
Je souhaite consulter les détails d'une réservation en cours. Comment faire ?
</a></h3>
</li>
<hr/>

<li>
<h3 align="center"><a href="https://pealot.myshopify.com/pages/faq-mon-compte-reservations-passees" 
title="Puis-je consulter les détails d'une réservation passée ?">
Puis-je consulter les détails d'une réservation passée ?
</a></h3>
</li>
<li>
<hr/>

<h3 align="center"><a href="https://pealot.myshopify.com/pages/faq-mon-compte-changer-email-paiement" 
title="Je souhaite recevoir les liens de paiement sur une autre adresse email. Comment faire ?">
Je souhaite recevoir les liens de paiement sur une autre adresse email. Comment faire ?
</a></h3>
</li>
<hr/>

<li>
<h3 align="center"><a href="https://pealot.myshopify.com/pages/faq-mon-compte-mot-de-passe-oublie" 
title="J'ai oublié mon mot de passe, que dois-je faire ?">
J'ai oublié mon mot de passe, que dois-je faire ?
</a></h3>
</li>
</ul>


        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FAQMyAccountPage;

