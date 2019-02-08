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
  '/design-research-handbook/contact/','/design-research-handbook/accueil/','/design-research-handbook/home/','/design-research-handbook/coordonnees/',
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
