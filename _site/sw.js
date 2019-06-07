importScripts( '/cache-polyfill.js' );

var filesToCache = [
  // root
  '/',
  '/index.html',
  // css
  '/assets/css/main.css',
  '/assets/css/normalize.css',
  '/assets/css/syntax.css',
  // images
  '/assets/img/octocat.png',
  // pages
  '/design-research-biz-reqs/','/design-research-biz-reqs/','/por/','/what-is-design-research/','/about-us/','/team-meetings/','/vision-objectives/','/why-not-users/','/your-role/','/home/','/interviewing/','/large-scale-testing/','/other-methods/','/usability-testing/','/privacy/','/qual-synthesis/','/research-frequency/','/safety/','/airtable/','/research-kit/','/google-drive/','/library-bibliography/','/protected-files/','/research-room/','/trello/','/a-propos-de-nous/','/pourquoi-nous-utilisateurs/','/reunions-d-equipe/','/vision-et-objectifs/','/votre-role/','/accueil/','/protection-des-renseignements-personnels/','/rop/','/securite/','/airtable-fr/','/bibliotheque-bibliographie/','/classeur-a-tiroirs-protege/','/equipment-de-recherche/','/gc-docs-fr/','/google-drive-fr/','/salle-de-recherche/','/trello-fr/','/other-methods/','/entrevue/','/tests-de-facilite-d-emploi/','',
  // posts
  
];

self.addEventListener( 'install', function( e ) {
  e.waitUntil(
    caches.open( 'DOCter-v1.1' )
      .then( function( cache ) {
        return cache.addAll( filesToCache );
    })
  );
});

self.addEventListener( 'fetch', function( event ) {
  event.respondWith(
    caches.match( event.request ).then( function( response ) {
      return response || fetch( event.request );
    })
 );
});
