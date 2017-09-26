'use strict';

// var spanTags = document.getElementsByTagName( 'span' );
// var searchText = 'Clone or download';
//
// var cloneRepo = function () {
//   var found;
//   for ( var i = 0; i < spanTags.length; i++ ) {
//     if ( spanTags[ i ].textContent == searchText ) {
//       found = spanTags[ i ];
//       break;
//     }
//   }
//   return found;
// };
//
// var buttonToClick = cloneRepo();
// button
//
// console.log( found );



for ( var i = 0; i < spanTags.length; i++ ) {
  var spanTags = document.getElementsByTagName( 'span' );
  var searchText = 'Clone or download';
  if ( spanTags[ i ].textContent == searchText ) {
    spanTags[ i ].click();
    document.getElementsByClassName( 'js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s' )[ 0 ];
    thing.click();
    break;
  }
}
