import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="font-serif text-4xl font-bold mb-8 text-[#E07A5F] text-center">
        Mentions Légales & Confidentialité
      </h1>

      <div className="space-y-8 text-[#264653]">
        
        {/* SECTION 1 : MENTIONS LÉGALES */}
        <section className="bg-white/50 p-6 rounded-lg shadow-sm border border-[#264653]/10">
          <h2 className="font-serif text-2xl font-bold mb-4">1. Mentions Légales</h2>
          
          <h3 className="font-bold mt-4">Éditeur du site</h3>
          <p>
            Le site <strong>Les Saveurs de Maghreb</strong> est édité par :<br />
            <strong>Nom du responsable :</strong> [TON NOM OU NOM DE SOCIÉTÉ]<br />
            <strong>Adresse :</strong> [TON ADRESSE COMPLÈTE]<br />
            <strong>Téléphone :</strong> 06 04 11 29 28<br />
            {/* Si tu es auto-entrepreneur ou société, ajoute ton SIRET ici */}
            <strong>SIRET :</strong> [NUMÉRO SIRET SI APPLICABLE]
          </p>

          <h3 className="font-bold mt-4">Hébergement</h3>
          <p>
            Ce site est hébergé par :<br />
            [NOM DE L'HÉBERGEUR, ex: Vercel Inc.]<br />
            [ADRESSE DE L'HÉBERGEUR]<br />
          </p>
        </section>

        {/* SECTION 2 : RGPD */}
        <section className="bg-white/50 p-6 rounded-lg shadow-sm border border-[#264653]/10">
          <h2 className="font-serif text-2xl font-bold mb-4">2. Politique de Confidentialité (RGPD)</h2>
          <p className="mb-2">
            Les Saveurs de Maghreb s'engage à ce que la collecte et le traitement de vos données, effectués à partir de ce site, soient conformes au règlement général sur la protection des données (RGPD).
          </p>

          <h3 className="font-bold mt-4">Données collectées</h3>
          <p>
            Nous pouvons être amenés à collecter les données suivantes lorsque vous nous contactez ou passez commande :
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Nom et Prénom</li>
            <li>Numéro de téléphone</li>
            <li>Informations relatives à votre commande</li>
          </ul>

          <h3 className="font-bold mt-4">Utilisation des données</h3>
          <p>
            Ces données sont utilisées uniquement pour :
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>La gestion et la livraison de vos commandes.</li>
              <li>Vous contacter en cas de problème avec une commande.</li>
            </ul>
            Vos données <strong>ne sont jamais vendues</strong> à des tiers.
          </p>

          <h3 className="font-bold mt-4">Vos droits</h3>
          <p>
            Conformément à la loi, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous au 06 04 11 29 28.
          </p>
        </section>

        {/* SECTION 3 : COOKIES */}
        <section className="bg-white/50 p-6 rounded-lg shadow-sm border border-[#264653]/10">
          <h2 className="font-serif text-2xl font-bold mb-4">3. Gestion des Cookies</h2>
          <p>
            Ce site utilise un minimum de cookies nécessaires à son bon fonctionnement technique. Nous n'utilisons pas de cookies publicitaires ou de traçage intrusifs.
          </p>
          <p className="mt-2">
            En continuant votre navigation sur ce site, vous acceptez l'utilisation de ces cookies techniques.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Legal;