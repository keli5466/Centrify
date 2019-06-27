/* Source and licensing information for the line(s) below can be found at https://www.centrify.com/themes/custom/centrify/js/cookieconsent-setup.js. */
'use strict';(function(n,o,s,e){o.behaviors.centrifyCookieConsent={attach:function(i,o){var a='#block-cookieconsentbanner';n(a,i).once('block-cookieconsentbanner').each(function(){e.userData=e.userData||{};e.userData.country=e.userData.country||{};if(!o.centrify||!o.centrify.cookieconsent){return};var n=o.centrify.cookieconsent.content,i={container:document.querySelector(a),content:{message:n.message,href:n.href,link:n.link,dismiss:n.dismiss},revokable:!1,law:{countryCode:e.userData.country.isocode||null,regionalLaw:!0},location:!1,theme:'centrify-default',elements:{dismiss:'<a aria-label="dismiss cookie message" role="button" tabindex="0" class="cc-btn cc-dismiss btn">{{dismiss}}</a>',messagelink:'<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role="button" tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="_blank">{{link}}</a>.</span>'}};if(s){s.initialise(i)}})}}})(jQuery,Drupal,window.cookieconsent,window.centrify=window.centrify||{});
/* Source and licensing information for the above line(s) can be found at https://www.centrify.com/themes/custom/centrify/js/cookieconsent-setup.js. */