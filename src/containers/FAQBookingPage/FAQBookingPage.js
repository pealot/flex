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

import css from './FAQBookingPage.module.css';

const FAQBookingPage = () => {
  // prettier-ignore
  return (
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>



          <h1 align="center">
          <FormattedMessage id="FAQ.Bookings" />
          </h1>

<ul>
<li>
<h3 align="center"><a href="/pages/faq-reservations-reserver-place" 
title="Comment réserver une place de parc ?">
Comment réserver une place de parc ?
</a></h3>
</li>
<hr/>

<li>
<h3 align="center"><a href="/pages/faq-reservations-delai-reservation" 
title="Délai avant réservation ?">
Combien de temps à l'avance puis-je réserver une place de parc ?
</a></h3>
</li>
<hr/>

<li>
<h3 align="center"><a href="/pages/faq-reservations-modifier-reservation" 
title="Comment modifier ma réservation ?">
Puis-je modifier ma réservation ?
</a></h3>
</li>
<hr/>

<li>
<h3 align="center"><a href="/pages/faq-reservations-annuler-reservation" 
title="Puis-je annuler ma réservation ?">
Puis-je annuler ma réservation ?
</a></h3>
</li>
<hr/>

<li>
<h3 align="center"><a href="/pages/faq-reservations-acces-place-securisee" 
title="Comment accéder à une place sécurisée ?">
La place que j'ai réservée nécessite un badge, une clé ou un code. Comment faire pour y accéder ?
</a></h3>
</li>
<hr/>

<li>
<h3 align="center"><a href="/pages/faq-reservations-contact-hote" 
title="Comment contacter la personne qui me loue la place ?">
Comment contacter la personne qui me loue la place ?
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

export default FAQBookingPage;

