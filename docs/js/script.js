var n,o,e,t,r,i,a,l;n=document,e={kitId:"pfr1cbw",scriptTimeout:3e3,async:!0},t=n.documentElement,r=setTimeout((function(){t.className=t.className.replace(/\bwf-loading\b/g,"")+" wf-inactive"}),e.scriptTimeout),i=n.createElement("script"),a=!1,l=n.getElementsByTagName("script")[0],t.className+=" wf-loading",i.src="https://use.typekit.net/"+e.kitId+".js",i.async=!0,i.onload=i.onreadystatechange=function(){if(o=this.readyState,!(a||o&&"complete"!=o&&"loaded"!=o)){a=!0,clearTimeout(r);try{Typekit.load(e)}catch(n){}}},l.parentNode.insertBefore(i,l);var s;class c extends HTMLElement{static get observedAttributes(){return["loading","data"]}constructor(){super(),this._setupDom()}_setupDom(){this.shadow=this.attachShadow({mode:"open"}),this.shadow.innerHTML='\n      <style>\n        /* OFFICIAL 2019-2020 BRAND COLORS */\n/*Secondary Brand Colors*/\n/*ADA compliant*/\n/*ADA compliant*/\n/*ADA compliant for hover over shaded table rows*/\n/*ADA compliant*/\n/*ADA compliant*/\n/* PHASE OUT THE CODE BELOW */\n/* Brand Color Palate*/\n/* link colors for body links */\n/* Other color palette */\n/* color variables */\n/*var(--uvalib-blue-700);*/\n/* paper components reference this */\n/* testing out colors for focus states */\n/* Color Remapping */\n/* OFFICIAL 2019-2020 BRAND COLORS */\n/*Secondary Brand Colors*/\n/*ADA compliant*/\n/*ADA compliant*/\n/*ADA compliant for hover over shaded table rows*/\n/*ADA compliant*/\n/*ADA compliant*/\n/* PHASE OUT THE CODE BELOW */\n/* Brand Color Palate*/\n/* link colors for body links */\n/* Other color palette */\n/* color variables */\n/*var(--uvalib-blue-700);*/\n/* paper components reference this */\n/* testing out colors for focus states */\n/* Color Remapping */\n/* common scsss variables for V4 client */\n/* small media width */\n/* spacing unit of measure */\n/* font variables */\n/* be sure to load fonts.js */\n/*Pulling in fonts via Typekit, weights will pull in font variants*/\n/*try to refrain from using this one, difficult to read on small screens*/\n/*not used?*/\n/* Main sizing unit - changing this will update most of the font size/spacing variables on the site */\n/* typography variables */\n/* used for headers in card body */\n/* main body font */\n/* common scsss variables for V4 client */\n/* small media width */\n/* spacing unit of measure */\n:host {\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  /* use --uvalib-footer-background-color to override background color */\n  background-color: var(--uvalib-footer-background-color, #232D4B);\n  /* use --uvalib-footer-color to override footer font color */\n  color: var(--uvalib-footer-color, #87B9D9);\n  font-family: "franklin-gothic-urw", arial, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: left;\n}\n\n#top {\n  flex: 1;\n  flex-basis: 1e-9px;\n  width: 95%;\n  max-width: 1200px;\n  flex-basis: auto;\n}\n\n.copyright {\n  text-align: center;\n  font-size: 14px;\n  padding-top: 20px;\n  background-color: #FFF;\n  color: #616161;\n  padding: 10px !important;\n  border-radius: 3px;\n}\n\na {\n  color: #87B9D9;\n  margin-bottom: 5px;\n}\n\nuvalib-liame {\n  color: #87B9D9;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nul li {\n  padding: 0;\n  padding-bottom: 8px;\n  color: #87B9D9;\n}\n\nul li a:hover {\n  text-decoration: underline;\n}\n\nh3 {\n  font-family: "franklin-gothic-urw", arial, sans-serif;\n  font-weight: 400;\n  text-transform: none;\n  color: #FFF;\n  margin-bottom: 25px;\n  font-style: normal;\n  font-size: 18px;\n  margin-top: 0;\n}\n\n#give-button {\n  margin-top: 0.5em;\n  margin-bottom: 1em;\n  margin-left: 0;\n  border: none;\n  font-weight: bold;\n  font-size: calc($uvalib-main-font-size-unit*1.125);\n}\n\n/*\npaper-button {\n  color: $color-white;\n  background: var(--uvalib-brand-orange);\n}\n*/\n.social-links {\n  display: flex;\n  flex-direction: row;\n}\n\naddress {\n  color: #FFF;\n  font-style: normal;\n  line-height: 1.4;\n}\n\n.bottom-bar {\n  width: 100%;\n  height: 80px;\n  color: #FFF;\n  background-color: #141E3C;\n  justify-content: center;\n}\n\n.bottom-bar a, .bottom-bar uvalib-liame, a, uvalib-liame {\n  text-decoration: none;\n}\n\n.bottom-bar ::slotted {\n  display: flex;\n  flex-direction: row;\n}\n\n.bottom-bar ::slotted(.footer-extended) {\n  background-color: initial !important;\n  height: 100% !important;\n}\n\n.bottom-bar uvalib-liame, .bottom-bar a {\n  color: #FFF;\n  padding: 0 10px 0 10px;\n  font-size: 1.1em;\n}\n\n.bottom-bar div.links {\n  float: left;\n  padding: 30px 0 0 28px;\n}\n\n.bottom-bar div.fdl {\n  float: left;\n  height: 80px;\n}\n\n.columns {\n  position: relative;\n  top: -23px;\n}\n\ndiv.fdl svg {\n  height: 50%;\n  padding-top: 20px;\n}\n\n#top .section paper-icon-button:focus {\n  outline: #BDBDBD dotted 3px;\n  padding: 0.15em;\n}\n\n/* Small Screen */\n@media screen and (max-width: 768px) {\n  :host {\n    padding: 30px 0 0 0;\n  }\n\n  .social-links {\n    justify-content: center;\n  }\n\n  .column {\n    padding-bottom: 10px;\n  }\n\n  .section > div {\n    flex: 1;\n    flex-basis: 1e-9px;\n    padding-bottom: 20px;\n    align-items: center;\n    text-align: center;\n  }\n\n  #top {\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 10px;\n  }\n\n  #top > .section {\n    flex: 2;\n    display: flex;\n    flex-direction: column;\n  }\n}\n/* Medium Screen */\n@media screen and (max-width: 925px) and (min-width: 768px) {\n  :host {\n    padding: 20px 0 0 0;\n  }\n\n  .column {\n    padding-bottom: 10px;\n  }\n\n  .section > div {\n    padding-bottom: 20px;\n  }\n\n  #top {\n    display: flex;\n    flex-direction: row;\n    padding-left: 90px;\n    padding-bottom: 10px;\n  }\n\n  #top > .section {\n    flex: 2;\n    display: flex;\n    flex-direction: column;\n  }\n}\n/* Large  Screen */\n@media screen and (min-width: 925px) {\n  :host {\n    padding: 50px 0 0 0;\n  }\n\n  #top {\n    display: flex;\n    flex-direction: row;\n    padding-left: 90px;\n    padding-bottom: 10px;\n  }\n\n  #top > .section {\n    flex: 2;\n    display: flex;\n    flex-direction: row;\n  }\n\n  .section > div {\n    flex: 1;\n    flex-basis: 1e-9px;\n  }\n}\n      </style>\n      <div role="contentinfo" id="top">\n        <div class="section">\n          <div class="column-1 column">\n            <h3>Contact Us</h3>\n            <ul>\n              <li>(434) 924-3021</li>\n              <li><a href="mailto:library@virginia.edu">library@virginia.edu</a></li>\n              <li><a href="https://library.virginia.edu/askalibrarian/">Ask a Librarian</a></li>\n            </ul>\n            <div class="social-links">\n\x3c!--\n              <uvalib-instagram-link style="color:white; height:40px; width:40px" alt="Library Instagram Account"></uvalib-instagram-link>\n              <uvalib-facebook-link style="color:white; height:40px; width:40px" alt="Library Facebook Account"></uvalib-facebook-link>\n              <uvalib-twitter-link style="color:white; height:40px; width:40px" alt="Library Twitter Account"></uvalib-twitter-link>\n--\x3e\n            </div>\n            <address>\n              UVA Library<br />\n              P.O. Box - 400109<br />\n              2450 Old Ivy Rd.<br />\n              Charlottesville, VA 22903\n            </address>\n          </div>\n          <div class="column-2 column">\n            <h3>About the Library</h3>\n            <ul>\n              <li><a href="https://library.virginia.edu/hours/">Hours</a></li>\n              <li><a href="https://library.virginia.edu/staff/">Staff Directory</a></li>\n              <li><a href="https://library.virginia.edu/jobs/">Jobs</a></li>\n              <li><a href="https://library.virginia.edu/press/">Press</a></li>\n              <li><a href="https://library.virginia.edu/renovation/">Renovation</a></li>\n              <li><a href="https://library.virginia.edu/jobs/fellowships/">Fellowship Opportunities</a></li>\n              <li><a href="https://library.virginia.edu/support-library/"><paper-button id="give-button">Give to the Library</paper-button></a></li>\n            </ul>\n          </div>\n        </div>\n        <div class="section">\n          <div class="column-3 column">\n            <h3>Help &amp; Assistance</h3>\n            <ul>\n              <li><a href="https://answers.lib.virginia.edu/" aria-label="F A Qs">FAQs</a></li>\n              <li><a href="https://library.virginia.edu/services/off-grounds-access/">Off-Grounds Access</a></li>\n              <li><a href="https://virginia.service-now.com/its?id=kb_article&sys_id=1cbb89a4db471b045bce5478dc9619ad" aria-label="I T S Computing Accounts">ITS Computing Accounts</a></li>\n              <li><a href="https://library.virginia.edu/services/accessibility-services/">Accessibility</a></li>\n              <li><a href="https://library.virginia.edu/emergency/">Emergency Information</a></li>\n              <li><a href="https://library.virginia.edu/policies/">Library Policies</a></li>\n            </ul>\n          </div>\n          <div class="column-4 column">\n            <h3>Related Resources</h3>\n            <ul>\n              <li><a href="http://www.virginia.edu" aria-label="U V A Home">UVA Home</a></li>\n              <li><a href="https://virginia.service-now.com/its?id=home" aria-label="I T S">ITS</a></li>\n              <li><a href="https://sisuva.admin.virginia.edu/ihprd/signon.html">SIS</a></li>\n              <li><a href="https://collab.itc.virginia.edu/portal" aria-label="U V A Collab">UVaCollab</a></li>\n              <li><a href="https://www.virginia.edu/cavalieradvantage/">Cavalier Advantage</a></li>\n              <li><a href="https://confluence.lib.virginia.edu/pages/viewpage.action?spaceKey=sw&title=StaffWeb">Library Staff Site</a></li>\n              <li><a href="https://analytics.lib.virginia.edu/index.php?module=CoreAdminHome&action=optOut&language=en">Tracking Opt-out</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n      <div class="bottom-bar lib3">\n        <slot name="bottom-bar">\n\n          <div class="links">\n            <a href="mailto:site-feedback@virginia.edu">Feedback</a> |\n\x3c!--\n            <iron-dropdown id="copydrop"\n              auto-fit-on-attach no-overlap\n              vertical-align="bottom"\n              horizontal-align="left">\n                <div slot="dropdown-content">\n                  <div id="copyright-info" class="copyright">Copyright {{_currentYear}} by the Rector and Visitors of the University of Virginia</div>\n                </div>\n            </iron-dropdown> --\x3e\n            <a href="" on-tap="_copyrightDropup" aria-labelledby="copyright-info">Copyright</a>\n          </div>\n          <div class="fdl">\n\x3c!--            <iron-dropdown id="fdlpdrop"\n              auto-fit-on-attach no-overlap always-on-top\n              vertical-align="bottom"\n              horizontal-align="left">\n                <div slot="dropdown-content">\n                  <div class="copyright">This library is a congressionally designated depository for U.S. Government documents. Public access to the government documents collection is guaranteed by public law. (Title 44 United States Code)</div>\n                </div>\n            </iron-dropdown>\n--\x3e\n            <a href="https://guides.lib.virginia.edu/findinggovinfo" id="fdl" >\n              <svg alt="Federal Depository Library Program logo" on-mouseover="_fdlpDropup" on-mouseout="_fdlpDropdown" width="50px" viewBox="0 0 76 69" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                  <title>Federal Depository Library Program</title>\n                  <desc>Created with Sketch.</desc>\n                  <defs></defs>\n                  <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                      <g id="First-Release" transform="translate(-1164.000000, -2888.000000)">\n                          <g id="footer" transform="translate(-1.000000, 2650.000000)">\n                              <g id="fdlp-emblem-logo-text-cmyk" transform="translate(1164.778054, 238.000000)">\n                                  <path d="M13.4360945,28.2205532 L2.35993899,28.2205532 C2.35993899,28.2205532 0.577055368,28.0392271 0.575613488,27.3131932 C0.565880804,19.4366373 0.594718388,19.7671834 0.594718388,19.7671834 C0.594718388,19.7671834 1.50598604,20.7522545 2.71824597,20.806251 C3.74774771,20.852221 14.3304201,20.806251 14.3304201,20.806251 C14.3304201,20.806251 17.2444579,21.0645585 16.6543688,23.3356948 C16.1432227,25.2930677 15.6944378,26.5462971 15.601797,29.8915257 L15.5808898,29.870365 C15.0560458,28.2511999 13.4360945,28.2205532 13.4360945,28.2205532" id="Fill-2" fill="#FFFFFF"></path>\n                                  <path d="M1.62277825,39.3398174 C2.12094751,40.9224984 3.90130785,40.1742092 3.90130785,40.1742092 C3.90130785,40.1742092 11.6283384,38.3894062 13.4169896,38.0493742 C15.2002337,37.7104368 16.4759363,38.5907985 16.4759363,38.5907985 C16.4759363,38.5907985 15.6695654,34.9529673 15.4013758,32.8952631 C15.1353491,30.8415721 12.2973704,30.5923856 12.2973704,30.5923856 C12.2973704,30.5923856 3.62230422,30.6022363 2.29649631,30.5923856 C0.89462926,30.579981 0.575613488,29.5058886 0.575613488,29.5058886 C0.575613488,29.5058886 0.610218589,36.0956498 1.62277825,39.3398174" id="Fill-3" fill="#FFFFFF"></path>\n                                  <path d="M18.1340974,26.4142246 C17.2916794,29.9969648 17.5137288,33.4023923 18.5035789,36.8924629 C21.4493381,47.2524927 32.2774904,53.7878925 42.599543,51.7210673 C42.3299116,52.3256091 41.8209283,52.7958894 41.5931114,53.3745275 C39.8444724,57.8595199 38.9851124,61.8942984 37.3824637,66.4445974 C37.1232859,67.1815766 36.5533831,67.7992527 36.0101551,68.372783 C35.8958862,68.4928157 36.0386322,68.6832628 36.166599,68.6894651 C41.1508149,68.9962966 46.0993443,68.2421699 50.8027542,66.5128227 C51.713301,66.181547 52.5816727,65.8626758 53.443556,65.4314335 C66.739845,58.8000805 75.3929225,45.3604264 75.5760411,31.4727474 C75.7259966,20.4629355 71.0557499,10.1277149 63.027727,2.29931795 C62.7069089,1.98117645 63.2814977,1.39816027 63.1081117,0.928609688 C63.027727,0.710799511 62.7872936,0.433520224 62.6009307,0.433520224 C57.3337461,0.421115624 52.153795,0.512325916 46.8916569,0.495908063 C46.5769668,0.495908063 46.2071248,0.933717464 46.0337388,1.30074768 C45.9461447,1.48937056 45.8617947,1.92316671 46.1764849,1.94907043 C47.4514665,2.05998215 47.9752291,3.2825649 49.0443826,3.57115426 C50.161118,3.86777013 51.0370596,3.0592821 52.0827825,2.78820512 C52.834362,2.59119089 53.6749776,2.54777479 54.3537422,2.96770697 C55.078647,3.41938034 54.9149937,4.68428466 54.1785539,5.00643941 C51.8037789,6.03930476 49.2321873,5.20454817 47.1652535,3.54889895 C46.8628193,3.31065767 46.3268008,2.8571601 45.8340385,3.1256832 C43.7883724,4.23334098 40.4972832,3.97722248 39.8307745,6.34431197 C39.3571172,8.02659459 40.4388871,9.90881018 41.1688384,11.5841608 C42.0548732,10.3079464 43.554788,10.1040002 44.9126777,10.5217433 C47.3476512,11.2663842 49.337805,12.5889334 51.0900487,14.381398 C53.2845888,16.6288196 54.3587888,19.5789253 54.6049897,22.6246194 C55.2826729,30.9032303 52.9735034,43.1640826 43.6823943,44.6551884 C28.0538657,47.1689441 24.0681512,37.5520957 24.0681512,32.7489618 C24.0681512,30.8696649 24.0184064,29.1041985 24.4819705,27.343475 C25.4361341,23.716589 27.4194389,20.6249249 30.6925047,18.7511007 C32.025522,17.9893123 33.5950075,17.6262954 34.4947401,16.2435474 C35.1781908,15.1949938 35.0603172,13.9800728 34.6821844,12.8720501 C34.3328892,11.8483058 33.3632254,10.9113937 32.413027,10.9113937 C21.7449233,10.9113937 9.9078161,10.9095695 0.621393153,10.9095695 C0.621393153,13.6221636 0.594718388,14.9177146 0.621393153,17.1443402 C0.632207247,18.1943531 1.28501805,18.7521952 2.40860241,18.7521952 L21.6551664,18.7521952 C20.4173131,21.3301629 18.8207923,23.4929414 18.1340974,26.4142246 Z" id="Fill-4" fill="#FFFFFF"></path>\n                                  <path d="M11.3828585,54.9313047 C12.5742112,54.515021 21.0726472,49.1828673 21.7878192,48.9209113 C22.4258508,48.6888724 22.9550204,48.6111612 23.8875558,49.2802799 C26.3931814,51.080771 29.0235295,52.8995043 30.3186975,52.8995043 C30.3186975,52.8995043 29.9146108,53.2154567 29.1107632,53.9827177 C28.3512533,54.7098461 20.9396338,62.70607 20.9396338,62.70607 C20.9396338,62.70607 19.600849,64.1081546 18.1705048,63.1599324 C18.1705048,63.1599324 13.3016392,59.7238583 9.37323939,55.293592 C9.37323939,55.293592 10.0894929,55.3848023 11.3828585,54.9313047" id="Fill-5" fill="#FFFFFF"></path>\n                                  <path d="M21.3422786,64.9199262 C21.3422786,64.9199262 22.5033518,64.8765101 23.1298483,64.2905752 C23.7545425,63.7020864 31.5673649,54.432202 31.5673649,54.432202 C31.5673649,54.432202 31.8672757,53.4431176 33.3996329,53.7988377 C35.3198555,54.2541595 38.4029537,54.390975 39.0265664,54.3431808 C39.0265664,54.3431808 38.6232007,54.7098461 38.1769391,55.9258617 C37.9166799,56.6376669 35.1421439,66.5026072 34.6057648,67.2705978 C34.0697462,68.0415072 33.9810706,68.7186524 32.1913381,68.4016055 C28.8014801,67.8010769 26.0694795,66.9685093 21.3422786,64.9199262" id="Fill-6" fill="#FFFFFF"></path>\n                                  <path d="M2.46159147,42.2184143 C2.46159147,42.2184143 3.39989436,42.4891264 4.33891818,42.3081652 C6.18308167,41.9528099 13.275325,40.0829989 14.6097841,39.9593177 C16.5307277,39.7765323 16.1738626,40.048339 17.1983178,41.0447202 C18.0803874,41.8940705 19.8340729,45.6968099 20.2817764,45.9693463 C20.7258752,46.2385991 20.9933438,46.7369721 21.754656,46.8756118 C21.754656,46.8756118 11.0227492,52.9334345 10.1868197,53.0220909 C9.29645932,53.1129363 8.42340147,53.9973113 7.50888959,52.661263 C4.33891818,48.0055248 4.25168449,47.3247312 2.86387577,43.4384431 L2.46159147,42.2184143" id="Fill-7" fill="#FFFFFF"></path>\n                                  <polygon id="Fill-8" fill="#C11E42" points="30.9895318 38.5240326 46.0903326 38.5240326 46.0903326 24.2594726 30.9895318 24.2594726"></polygon>\n                                  <path d="M38.5792234,23.2010684 C38.5792234,23.2010684 36.2116577,19.9455907 32.2828974,20.1283761 L32.2828974,22.7964596 L29.7372597,22.7964596 L29.7372597,39.8356366 L36.5238246,39.8356366 C36.5238246,39.8356366 36.8395961,38.750599 37.4181502,38.5240326 L31.0774864,38.5240326 L31.0774864,24.329887 L32.1913381,24.329887 L32.1913381,35.5418209 C32.1913381,35.5418209 35.7390818,35.4586371 37.7501428,38.5316943 L38.8928321,38.5316943" id="Fill-9" fill="#FFFFFF"></path>\n                                  <path d="M38.5792234,23.2010684 C38.5792234,23.2010684 40.9568822,19.9455907 44.8842006,20.1283761 L44.8842006,22.7964596 L47.4276755,22.7964596 L47.4276755,39.8356366 L40.6414711,39.8356366 C40.6414711,39.8356366 40.3303857,38.750599 39.7482269,38.5240326 L46.0903326,38.5240326 L46.0903326,24.329887 L44.9710738,24.329887 L44.9710738,35.5418209 C44.9710738,35.5418209 41.4290976,35.4586371 39.4201994,38.5316943 L38.7609002,38.5316943" id="Fill-10" fill="#FFFFFF"></path>\n                                  <path d="M37.8903656,24.329887 C37.8903656,24.329887 36.4823706,21.619482 33.5326462,21.619482 L33.5326462,34.5001994 C33.5326462,34.5001994 35.9016537,34.7716412 37.5500821,36.0832452 L37.9094705,36.3991976 L37.8903656,24.329887" id="Fill-11" fill="#C11E42"></path>\n                                  <path d="M39.30557,24.329887 C39.30557,24.329887 40.6854484,21.619482 43.6326495,21.619482 L43.6326495,34.5001994 C43.6326495,34.5001994 40.7535772,34.92378 39.735971,35.879299 C39.5377126,36.0660977 39.30557,36.4232772 39.30557,36.4232772 L39.30557,24.329887" id="Fill-12" fill="#C11E42"></path>\n                              </g>\n                          </g>\n                      </g>\n                  </g>\n              </svg>\n            </a>\n\n          </div>\n        </slot>\n      </div>\n    ',this._container=this.shadow.getElementById("container")}attributeChangedCallback(n,o,e){}}window.customElements.define("uvalib-footer",c),(s=document.createElement("link")).rel="stylesheet",s.href="https://use.fontawesome.com/releases/v5.14.0/css/all.css",document.head.appendChild(s);var d,p,u,h,m,g,f,b,y,v,C,x,B,w,A,k,S,F,L,D,T,E,_,O,M,I,R,G,H,z,P,W,N,V=[],U={},Y="appendChild",j="createElement",q="removeChild";function $(){var n=d.getBoundingClientRect(),o=n.top,e=n.left,t=n.width,r=n.height;return"transform:translate3D("+(e-(u.clientWidth-t)/2)+"px, "+(o-(u.clientHeight-r)/2)+"px, 0) scale3D("+d.clientWidth/h.clientWidth+", "+d.clientHeight/h.clientHeight+", 0)"}function Q(n){var o=z.length-1;if(!B){if(n>0&&H===o||n<0&&!H){if(!N.loop)return an(m,""),void setTimeout(an,9,m,"animation:"+(n>0?"bpl":"bpf")+" .3s;transition:transform .35s");H=n>0?-1:o+1}if([(H=Math.max(0,Math.min(H+n,o)))-1,H,H+1].forEach((function(n){if(n=Math.max(0,Math.min(n,o)),!U[n]){var e=z[n].src,t=document[j]("IMG");t.addEventListener("load",on.bind(null,e)),t.src=e,U[n]=t}})),U[H].complete)return X(n);B=!0,an(A,"opacity:.4;"),u[Y](A),U[H].onload=function(){T&&X(n)},U[H].onerror=function(){z[H]={error:"Error loading image"},T&&X(n)}}}function X(n){B&&(u[q](A),B=!1);var o=z[H];if(o.error)alert(o.error);else{var e=u.querySelector("img:last-of-type");an(m=h=U[H],"animation:"+(n>0?"bpfl":"bpfr")+" .35s;transition:transform .35s"),an(e,"animation:"+(n>0?"bpfol":"bpfor")+" .35s both"),u[Y](m),o.el&&(d=o.el)}P.innerHTML=H+1+"/"+z.length,nn(z[H].caption),I&&I([m,z[H]])}function J(){var n,o,e=.95*window.innerHeight,t=.95*window.innerWidth,r=e/t,i=N.dimensions||[1920,1080],a=i[0],l=i[1],s=l/a;s>r?o=(n=Math.min(l,e))/s:n=(o=Math.min(a,t))*s,b.style.cssText+="width:"+o+"px;height:"+n+"px;"}function K(n){~[1,4].indexOf(h.readyState)?(en(),setTimeout((function(){h.play()}),99)):h.error?en(n):w=setTimeout(K,35,n)}function Z(n){N.noLoader||(n&&an(A,"top:"+d.offsetTop+"px;left:"+d.offsetLeft+"px;height:"+d.clientHeight+"px;width:"+d.clientWidth+"px"),d.parentElement[n?Y:q](A),B=n)}function nn(n){n&&(S.innerHTML=n),an(k,"opacity:"+(n?"1;pointer-events:auto":"0"))}function on(n){!~V.indexOf(n)&&V.push(n)}function en(n){if(B&&Z(),O&&O(),"string"==typeof n)return rn(),N.onError?N.onError():alert("Error: The requested "+n+" could not be loaded.");_&&on(v),h.style.cssText+=$(),an(u,"opacity:1;pointer-events:auto"),M&&(M=setTimeout(M,410)),D=!0,T=!!z,setTimeout((function(){h.style.cssText+="transition:transform .35s;transform:none",F&&setTimeout(nn,250,F)}),60)}function tn(n){var o=n?n.target:u,e=[k,L,g,f,S,G,R,A];o.blur(),E||~e.indexOf(o)||(h.style.cssText+=$(),an(u,"pointer-events:auto"),setTimeout(rn,350),clearTimeout(M),D=!1,E=!0)}function rn(){if((h===b?y:h).removeAttribute("src"),document.body[q](u),u[q](h),an(u,""),an(h,""),nn(!1),T){for(var n=u.querySelectorAll("img"),o=0;o<n.length;o++)u[q](n[o]);B&&u[q](A),u[q](P),T=z=!1,U={},W||u[q](R),W||u[q](G),m.onload=en,m.onerror=en.bind(null,"image")}N.onClose&&N.onClose(),E=B=!1}function an(n,o){n.style.cssText=o}var ln=function(n){var o;return p||function(){var n;function o(n){var o=document[j]("button");return o.className=n,o.innerHTML='<svg viewBox="0 0 48 48"><path d="M28 24L47 5a3 3 0 1 0-4-4L24 20 5 1a3 3 0 1 0-4 4l19 19L1 43a3 3 0 1 0 4 4l19-19 19 19a3 3 0 0 0 4 0v-4L28 24z"/></svg>',o}function e(n,o){var e=document[j]("button");return e.className="bp-lr",e.innerHTML='<svg viewBox="0 0 129 129" height="70" fill="#fff"><path d="M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2a4.1 4.1 0 0 0 0-5.8l-51-51 51-51a4.1 4.1 0 0 0-5.8-5.8l-54 53.9a4.1 4.1 0 0 0 0 5.8l54 53.9z"/></svg>',an(e,o),e.onclick=function(o){o.stopPropagation(),Q(n)},e}var t=document[j]("STYLE");t.innerHTML="#bp_caption,#bp_container{bottom:0;left:0;right:0;position:fixed;opacity:0}#bp_container>*,#bp_loader{position:absolute;right:0;z-index:10}#bp_container,#bp_caption,#bp_container svg{pointer-events:none}#bp_container{top:0;z-index:9999;background:rgba(0,0,0,.7);opacity:0;transition:opacity .35s}#bp_loader{top:0;left:0;bottom:0;display:flex;align-items:center;cursor:wait;background:0;z-index:9}#bp_loader svg{width:50%;max-width:300px;max-height:50%;margin:auto;animation:bpturn 1s infinite linear}#bp_aud,#bp_container img,#bp_sv,#bp_vid{user-select:none;max-height:96%;max-width:96%;top:0;bottom:0;left:0;margin:auto;box-shadow:0 0 3em rgba(0,0,0,.4);z-index:-1}#bp_sv{background:#111}#bp_sv svg{width:66px}#bp_caption{font-size:.9em;padding:1.3em;background:rgba(15,15,15,.94);color:#fff;text-align:center;transition:opacity .3s}#bp_aud{width:650px;top:calc(50% - 20px);bottom:auto;box-shadow:none}#bp_count{left:0;right:auto;padding:14px;color:rgba(255,255,255,.7);font-size:22px;cursor:default}#bp_container button{position:absolute;border:0;outline:0;background:0;cursor:pointer;transition:all .1s}#bp_container>.bp-x{padding:0;height:41px;width:41px;border-radius:100%;top:8px;right:14px;opacity:.8;line-height:1}#bp_container>.bp-x:focus,#bp_container>.bp-x:hover{background:rgba(255,255,255,.2)}.bp-x svg,.bp-xc svg{height:21px;width:20px;fill:#fff;vertical-align:top;}.bp-xc svg{width:16px}#bp_container .bp-xc{left:2%;bottom:100%;padding:9px 20px 7px;background:#d04444;border-radius:2px 2px 0 0;opacity:.85}#bp_container .bp-xc:focus,#bp_container .bp-xc:hover{opacity:1}.bp-lr{top:50%;top:calc(50% - 130px);padding:99px 0;width:6%;background:0;border:0;opacity:.4;transition:opacity .1s}.bp-lr:focus,.bp-lr:hover{opacity:.8}@keyframes bpf{50%{transform:translatex(15px)}100%{transform:none}}@keyframes bpl{50%{transform:translatex(-15px)}100%{transform:none}}@keyframes bpfl{0%{opacity:0;transform:translatex(70px)}100%{opacity:1;transform:none}}@keyframes bpfr{0%{opacity:0;transform:translatex(-70px)}100%{opacity:1;transform:none}}@keyframes bpfol{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(-70px)}}@keyframes bpfor{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(70px)}}@keyframes bpturn{0%{transform:none}100%{transform:rotate(360deg)}}@media (max-width:600px){.bp-lr{font-size:15vw}}",document.head[Y](t),(u=document[j]("DIV")).id="bp_container",u.onclick=tn,C=o("bp-x"),u[Y](C),"ontouchstart"in window&&(W=!0,u.ontouchstart=function(o){var e=o.changedTouches;n=e[0].pageX},u.ontouchmove=function(n){n.preventDefault()},u.ontouchend=function(o){var e=o.changedTouches;if(T){var t=e[0].pageX-n;t<-30&&Q(1),t>30&&Q(-1)}});m=document[j]("IMG"),(g=document[j]("VIDEO")).id="bp_vid",g.setAttribute("playsinline",!0),g.controls=!0,g.loop=!0,(f=document[j]("audio")).id="bp_aud",f.controls=!0,f.loop=!0,(P=document[j]("span")).id="bp_count",(k=document[j]("DIV")).id="bp_caption",(L=o("bp-xc")).onclick=nn.bind(null,!1),k[Y](L),S=document[j]("SPAN"),k[Y](S),u[Y](k),R=e(1,"transform:scalex(-1)"),G=e(-1,"left:0;right:auto"),(A=document[j]("DIV")).id="bp_loader",A.innerHTML='<svg viewbox="0 0 32 32" fill="#fff" opacity=".8"><path d="M16 0a16 16 0 0 0 0 32 16 16 0 0 0 0-32m0 4a12 12 0 0 1 0 24 12 12 0 0 1 0-24" fill="#000" opacity=".5"/><path d="M16 0a16 16 0 0 1 16 16h-4A12 12 0 0 0 16 4z"/></svg>',(b=document[j]("DIV")).id="bp_sv",(y=document[j]("IFRAME")).setAttribute("allowfullscreen",!0),y.allow="autoplay; fullscreen",y.onload=function(){return b[q](A)},an(y,"border:0;position:absolute;height:100%;width:100%;left:0;top:0"),b[Y](y),m.onload=en,m.onerror=en.bind(null,"image"),window.addEventListener("resize",(function(){T||B&&Z(!0),h===b&&J()})),document.addEventListener("keyup",(function(n){var o=n.keyCode;27===o&&D&&tn(),T&&(39===o&&Q(1),37===o&&Q(-1),38===o&&Q(10),40===o&&Q(-10))})),document.addEventListener("keydown",(function(n){T&&~[37,38,39,40].indexOf(n.keyCode)&&n.preventDefault()})),document.addEventListener("focus",(function(n){D&&!u.contains(n.target)&&(n.stopPropagation(),C.focus())}),!0),p=!0}(),B&&(clearTimeout(w),rn()),N=n,x=n.ytSrc||n.vimeoSrc,O=n.animationStart,M=n.animationEnd,I=n.onChangeImage,d=n.el,_=!1,F=d.getAttribute("data-caption"),n.gallery?function(n,o){var e=N.galleryAttribute||"data-bp";if(Array.isArray(n))z=n,F=n[H=o||0].caption;else{var t=(z=[].slice.call("string"==typeof n?document.querySelectorAll(n+" ["+e+"]"):n)).indexOf(d);H=0===o||o?o:-1!==t?t:0,z=z.map((function(n){return{el:n,src:n.getAttribute(e),caption:n.getAttribute("data-caption")}}))}_=!0,v=z[H].src,!~V.indexOf(v)&&Z(!0),z.length>1?(u[Y](P),P.innerHTML=H+1+"/"+z.length,W||(u[Y](R),u[Y](G))):z=!1;(h=m).src=v}(n.gallery,n.position):x||n.iframeSrc?(h=b,function(){var n,o="https://",e="autoplay=1";N.ytSrc?n=o+"www.youtube"+(N.ytNoCookie?"-nocookie":"")+".com/embed/"+x+"?html5=1&rel=0&playsinline=1&"+e:N.vimeoSrc?n=o+"player.vimeo.com/video/"+x+"?"+e:N.iframeSrc&&(n=N.iframeSrc);an(A,""),b[Y](A),y.src=n,J(),setTimeout(en,9)}()):n.imgSrc?(_=!0,v=n.imgSrc,!~V.indexOf(v)&&Z(!0),(h=m).src=v):n.audio?(Z(!0),(h=f).src=n.audio,K("audio file")):n.vidSrc?(Z(!0),n.dimensions&&an(g,"width:"+n.dimensions[0]+"px"),o=n.vidSrc,Array.isArray(o)?(h=g.cloneNode(),o.forEach((function(n){var o=document[j]("SOURCE");o.src=n,o.type="video/"+n.match(/.(\w+)$/)[1],h[Y](o)}))):(h=g).src=o,K("video")):(h=m).src="IMG"===d.tagName?d.src:window.getComputedStyle(d).backgroundImage.replace(/^url|[(|)|'|"]/g,""),u[Y](h),document.body[Y](u),{close:tn,next:function(){return Q(1)},prev:function(){return Q(-1)}}};class sn extends HTMLElement{static get observedAttributes(){return["src","alt","enlargable"]}constructor(){super(),this._setupDom()}_setupDom(){this.shadow=this.attachShadow({mode:"open"}),this.shadow.innerHTML='\n      <style>\n        @import url("https://use.fontawesome.com/releases/v5.14.0/css/all.css");\n/** @color Black */\n/** @color White */\n/** @color Danger */\n/** @color Success */\n/* OFFICIAL 2019-2020 BRAND COLORS */\n/**\n * @color Blue (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue (lighter)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (darkest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (darkest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Beige\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Beige (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey Dark\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey Darkest\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Text Light\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red Emergency\n * @section 2019-2020 Brand Colors\n */\n/*Secondary Brand Colors*/\n/**\n * @color Secondary Web Orange\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Web Blue\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Cyan\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Yellow\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Teal\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Magenta\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Green (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Light Gray\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Medium Gray\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Text Grey (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Dark Grey (ADA compliant for hover over shaded table rows)\n * @section Secondary Brand Colors\n */\n/*ADA compliant for hover over shaded table rows*/\n/**\n * @color Secondary Text Almost Black (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Emergency Red (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/* PHASE OUT THE CODE BELOW */\n/* Brand Color Palate*/\n/* link colors for body links */\n/* Other color palette */\n/* color variables */\n/*var(--uvalib-blue-700);*/\n/* paper components reference this */\n/* testing out colors for focus states */\n/* Color Remapping */\n/** @color Black */\n/** @color White */\n/** @color Danger */\n/** @color Success */\n/* OFFICIAL 2019-2020 BRAND COLORS */\n/**\n * @color Blue (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue (lighter)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Blue\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Orange (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Alternative Blue (darkest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Teal (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Green (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red (darkest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Yellow (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Beige\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Beige (dark)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey (lightest)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey (light)\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey Dark\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Grey Darkest\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Text Light\n * @section 2019-2020 Brand Colors\n */\n/**\n * @color Red Emergency\n * @section 2019-2020 Brand Colors\n */\n/*Secondary Brand Colors*/\n/**\n * @color Secondary Web Orange\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Web Blue\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Cyan\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Yellow\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Teal\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Magenta\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Green (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Light Gray\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Medium Gray\n * @section Secondary Brand Colors\n */\n/**\n * @color Secondary Text Grey (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Dark Grey (ADA compliant for hover over shaded table rows)\n * @section Secondary Brand Colors\n */\n/*ADA compliant for hover over shaded table rows*/\n/**\n * @color Secondary Text Almost Black (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/**\n * @color Secondary Emergency Red (ADA compliant)\n * @section Secondary Brand Colors\n */\n/*ADA compliant*/\n/* PHASE OUT THE CODE BELOW */\n/* Brand Color Palate*/\n/* link colors for body links */\n/* Other color palette */\n/* color variables */\n/*var(--uvalib-blue-700);*/\n/* paper components reference this */\n/* testing out colors for focus states */\n/* Color Remapping */\n/**\n * Screen Reader only text for used where text is needed for non visual users\n *\n * @mixin\n * @section Accessibility Mixins\n * @example\n *  span.srOnly {\n *    @include sr-only;\n *  }\n */\n:host {\n  display: inline-block;\n  cursor: pointer;\n  position: relative;\n}\n\nimg {\n  max-width: 100%;\n}\n\nbutton {\n  cursor: pointer;\n  color: #232D4B;\n  background-color: white;\n  border: none;\n  padding: 0.4em 0.45em;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 18px;\n  margin: 4px 2px;\n  border-radius: 50%;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n\n.sr-only {\n  clip: rect(1px, 1px, 1px, 1px);\n  clip-path: inset(50%);\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n}\n      </style>\n      <button hidden><i class="fas fa-search-plus"></i><span class="sr-only">enlarge image</span></button>\n      <span id="image"></span>\n    ',this._button=this.shadow.querySelector("button"),this._imgContainer=this.shadow.getElementById("image")}attributeChangedCallback(n,o,e){switch(n){case"src":this.src=e,this._updateImg();break;case"alt":this.alt=e,this._updateImg();break;case"enlargable":console.log("enl: "+e),this.enlargable=""===e,console.log(this.enlargable),this._updateImg()}}_updateImg(){this.src&&this.alt&&(this.img||(this.img=document.createElement("img"),this._imgContainer.innerHTML="",this._imgContainer.appendChild(this.img)),this.img.setAttribute("src",this.src),this.img.setAttribute("alt",this.alt),this.enlargable?(this.img.addEventListener("click",function(n){ln({el:n.target})}.bind(this)),this._button.removeAttribute("hidden"),this._button.addEventListener("click",function(n){ln({el:this.img})}.bind(this))):console.log("not enlargable"))}}window.customElements.define("uvalib-image",sn);
