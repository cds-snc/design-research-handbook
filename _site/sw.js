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
  '/cds-tips/','/about-us/','/team-meetings/','/vision-objectives/','/why-not-users/','/your-role/','/home/','/interviewing/','/quantifying-attitudes/','/usability-testing/','/hiring-process/','/prof-development/','/progression-process/','/note-taking/','/partners/','/por/','/privacy/','/recruiting/','/safety/','/team-members/','/translation/','/quality-research/','/airtable/','/google-drive/','/library-bibliography/','/protected-files/','/research-kit/','/research-room/','/trello/','/accueil/','/coordonnees/','/fr-needed/',
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
