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
  '/qrr/','/bibliography/','/protected-files/','/field-safety/','/airtable/','/bibliography/','/channels/','/contact/','/design-researcher-job-desc/','/field-safety/','/qrr/','/hiring-process/','/home/','/interviewing-basics/','/bibliography/','/okrs/','/bibliography/','/por/','/privacy/','/prof-development/','/quantifying/','/recruiting-participants/','/team-meetings/','/think-talk/','/translation/','/contact/','/accueil/','/coordonnees/',
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
