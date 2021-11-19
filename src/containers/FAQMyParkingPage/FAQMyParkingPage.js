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

import css from './FAQMyParkingPage.module.css';

const FAQMyParkingPage = () => {
  // prettier-ignore
  return (
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>



          <h1 align="center">
          <FormattedMessage id="FAQ.MyParkingSpace" />
          </h1>

<ul>
<li>
<h3 align="center"><a href="/pages/faq-ma-place-modifier-details" 
title="Puis-je modifier les détails de ma place ?">Puis-je modifier les détails de ma place ?
</a></h3>
</li>
<hr/>

<li>
<h3 align="center"><a href="/pages/faq-ma-place-louer" 
title="Comment faire pour louer ma place de parc ?">
Je souhaite louer ou sous-louer ma place de parc, comment faire ?
</a></h3>
</li>
<hr/>

<li>
<h3 align="center"><a href="/pages/faq-ma-place-sous-location" 
title="La sous-location de places de parc est-elle autorisée en Suisse ?">
La sous-location de places de parc est-elle autorisée en Suisse ?
</a></h3>
</li>
<hr/>

<li>
<h3 align="center"><a href="/pages/faq-ma-place-code-cle-badge" 
title="Ma place de parc nécessite un code, une clé ou un badge. Comment puis-je procéder ?">
Ma place de parc nécessite un code, une clé ou un badge. Comment puis-je procéder ?
</a></h3>
</li>
<hr/>

<li>
<h3 align="center"><a href="/pages/faq-ma-place-horaires-differents" 
title="Puis-je définir des horaires de disponibilté différents en fonction des jours de la semaine ?">
Puis-je définir des horaires de disponibilté différents en fonction des jours de la semaine ?
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

export default FAQMyParkingPage;

