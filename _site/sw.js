importScripts( '/design-research-handbook/cache-polyfill.js' );

var filesToCache = [
  // root
  '/design-research-handbook/',
  '/design-research-handbook/index.html',
  // css
  '/design-research-handbook/assets/css/main.css',
  '/design-research-handbook/assets/css/normalize.css',
  '/design-research-handbook/assets/css/syntax.css',
  // images
  '/design-research-handbook/assets/img/octocat.png',
  // pages
  '/design-research-handbook/qrr/','/design-research-handbook/bibliography/','/design-research-handbook/protected-files/','/design-research-handbook/field-safety/','/design-research-handbook/airtable/','/design-research-handbook/bibliography/','/design-research-handbook/channels/','/design-research-handbook/contact/','/design-research-handbook/design-researcher-job-desc/','/design-research-handbook/field-safety/','/design-research-handbook/qrr/','/design-research-handbook/hiring-process/','/design-research-handbook/home/','/design-research-handbook/interviewing-basics/','/design-research-handbook/bibliography/','/design-research-handbook/okrs/','/design-research-handbook/bibliography/','/design-research-handbook/por/','/design-research-handbook/privacy/','/design-research-handbook/prof-development/','/design-research-handbook/quantifying/','/design-research-handbook/recruiting-participants/','/design-research-handbook/team-meetings/','/design-research-handbook/think-talk/','/design-research-handbook/translation/','/design-research-handbook/contact/','/design-research-handbook/accueil/','/design-research-handbook/coordonnees/',
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
