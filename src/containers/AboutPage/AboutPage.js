import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.module.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Pealot',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Profitez d'une expérience de stationnement unique.</h1>
          <img className={css.coverImage} src={image} alt="Louez votre place" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Saviez-vous qu'en Suisse, une place inoccupée en journée représente un manque à 
              gagner moyen de CHF 1'000.- par an ?</p>
            </div>

            <div className={css.contentMain}>
              <h2 align="justify">
                La plupart des places de parc inoccupées se trouve au domicile de pendulaires se 
                déplaçant avec leur véhicule sur leur lieu de travail. En effet, une grande partie
                des résidents suisses utilise une voiture pour aller travailler et libère donc
                des places de parc, souvent privées, à leur domicile.
              </h2>

              <p align="justify">
                Pour profiter d'une réelle expérience de stationnement en Suisse, 
                voyez plus loin que les places de parc publiques traditionnelles en réservant une
                place de parc privée aux créneaux qui vous conviennent. Pealot vous permet désormais
                de trouver la place idéale à moindre coût. Toutes les places de parc réservables sur Pealot
                sont des places privées, inaccessibles via les solutions de stationnement traditionnelles.
              </p>

              <p align="justify">
                <a href="/s?address=Suisse&bounds=47.16940648%2C8.136689%2C45.740402%2C5.87110585">
                Voir les places de parc</a>
              </p>

              <h3 className={css.subtitle}>Votre place est souvent inoccupée ?</h3>

              <p align="justify">
                Pealot vous permet de gagner de l'argent grâce à votre place ! Si votre place de parc 
                est libre la journée, la nuit, pendant vos vacances ou même pendant quelques heures 
                seulement, pourquoi ne pas la louer à quelqu'un qui en aurait besoin ? De cette manière, 
                vous réduisez considérablement vos dépenses de stationnement, et contribuez à la réduction 
                des bouchons et de la pollution en ville en évitant à d'autres utilisateurs de chercher une 
                place pendant de longues minutes.
              </p>
            
               <p align="justify">
                <a href="/l/new">Proposez votre place dès maintenant !</a>
              </p>

            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
