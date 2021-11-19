import React from 'react';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
} from '../../components';
import { FormattedMessage } from '../../util/reactIntl';

import StaticPage from '../../containers/StaticPage/StaticPage';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';

import css from './FAQPaymentPage.module.css';

const FAQPaymentPage = () => {
  // prettier-ignore
  return (
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>



          <h1 align="center">
          <FormattedMessage id="FAQ.Payment" />
          </h1>

<ul>
<li>
<h3 align="center"><a href="/pages/faq-paiements-moyens-paiement" 
title="Quels moyens de paiement puis-je utiliser ?">
Quels moyens de paiement puis-je utiliser ?
</a></h3>
</li>
<hr/>

<li>
<h3 align="center"><a href="/pages/faq-paiements-paiement-mois-suivants" 
title="Je viens d'effectuer une réservation, quand devrai-je payer les mois suivants ?">
J'ai réservé une place pour plusieurs mois, quand devrai-je payer les mois suivants ?
</a></h3>
</li>
<hr/>

<li>
<h3 align="center"><a href="/pages/faq-paiements-code-promo" 
title="Comment bénéficier d'un code promo ?">
J'ai reçu un code promo, comment puis-je l'utiliser ?
</a></h3>
</li>
<hr/>

<li>
<h3 align="center"><a href="/pages/faq-paiements-reservation-annulee-remboursement" 
title="J'ai annulé ma réservation mais n'ai pas été remboursé totalement">
Pourquoi n'ai-je pas été remboursé totalement malgré l'annulation de ma réservation ?
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

export default FAQPaymentPage;

