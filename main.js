/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@vkontakte/vk-bridge/dist/index.umd.js":
/*!*************************************************************!*\
  !*** ./node_modules/@vkontakte/vk-bridge/dist/index.umd.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("!function(e,n){ true?n(exports):0}(this,(function(e){\"use strict\";var n=function(){return n=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},n.apply(this,arguments)};function t(e,n,t){if(t||2===arguments.length)for(var o,r=0,a=n.length;r<a;r++)!o&&r in n||(o||(o=Array.prototype.slice.call(n,0,r)),o[r]=n[r]);return e.concat(o||Array.prototype.slice.call(n))}function o(e,t){var o,r,a=(o={current:0,next:function(){return++this.current}},r={},{add:function(e,n){var t=null!=n?n:o.next();return r[t]=e,t},resolve:function(e,n,t){var o=r[e];o&&(t(n)?o.resolve(n):o.reject(n),r[e]=null)}});return t((function(e){if(e.detail&&e.detail.data&&\"object\"==typeof e.detail.data&&\"request_id\"in e.detail.data){var n=e.detail.data,t=n.request_id,o=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&\"function\"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t}(n,[\"request_id\"]);t&&a.resolve(t,o,(function(e){return!(\"error_type\"in e)}))}})),function(t,o){return void 0===o&&(o={}),new Promise((function(r,p){var i=a.add({resolve:r,reject:p},o.request_id);e(t,n(n({},o),{request_id:i}))}))}}var r=\"undefined\"!=typeof window,a=Boolean(r&&window.AndroidBridge),p=Boolean(r&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.VKWebAppClose),i=Boolean(r&&window.ReactNativeWebView&&\"function\"==typeof window.ReactNativeWebView.postMessage),s=r&&!a&&!p,u=s&&/(^\\?|&)vk_platform=mobile_web(&|$)/.test(location.search),d=s?\"message\":\"VKWebAppEvent\",c=t([\"VKWebAppInit\",\"VKWebAppGetCommunityAuthToken\",\"VKWebAppAddToCommunity\",\"VKWebAppAddToHomeScreenInfo\",\"VKWebAppClose\",\"VKWebAppCopyText\",\"VKWebAppCreateHash\",\"VKWebAppGetUserInfo\",\"VKWebAppSetLocation\",\"VKWebAppSendToClient\",\"VKWebAppGetClientVersion\",\"VKWebAppGetPhoneNumber\",\"VKWebAppGetEmail\",\"VKWebAppGetGroupInfo\",\"VKWebAppGetGeodata\",\"VKWebAppGetCommunityToken\",\"VKWebAppGetConfig\",\"VKWebAppGetLaunchParams\",\"VKWebAppSetTitle\",\"VKWebAppGetAuthToken\",\"VKWebAppCallAPIMethod\",\"VKWebAppJoinGroup\",\"VKWebAppLeaveGroup\",\"VKWebAppAllowMessagesFromGroup\",\"VKWebAppDenyNotifications\",\"VKWebAppAllowNotifications\",\"VKWebAppOpenPayForm\",\"VKWebAppOpenApp\",\"VKWebAppShare\",\"VKWebAppShowWallPostBox\",\"VKWebAppScroll\",\"VKWebAppShowOrderBox\",\"VKWebAppShowLeaderBoardBox\",\"VKWebAppShowInviteBox\",\"VKWebAppShowRequestBox\",\"VKWebAppAddToFavorites\",\"VKWebAppShowStoryBox\",\"VKWebAppStorageGet\",\"VKWebAppStorageGetKeys\",\"VKWebAppStorageSet\",\"VKWebAppFlashGetInfo\",\"VKWebAppSubscribeStoryApp\",\"VKWebAppOpenWallPost\",\"VKWebAppCheckAllowedScopes\",\"VKWebAppCheckBannerAd\",\"VKWebAppHideBannerAd\",\"VKWebAppShowBannerAd\",\"VKWebAppCheckNativeAds\",\"VKWebAppShowNativeAds\",\"VKWebAppRetargetingPixel\",\"VKWebAppConversionHit\",\"VKWebAppShowSubscriptionBox\",\"VKWebAppCheckSurvey\",\"VKWebAppShowSurvey\",\"VKWebAppScrollTop\",\"VKWebAppScrollTopStart\",\"VKWebAppScrollTopStop\",\"VKWebAppShowSlidesSheet\",\"VKWebAppTranslate\"],s&&!u?[\"VKWebAppResizeWindow\",\"VKWebAppAddToMenu\",\"VKWebAppShowInstallPushBox\",\"VKWebAppGetFriends\",\"VKWebAppShowCommunityWidgetPreviewBox\",\"VKWebAppCallStart\",\"VKWebAppCallJoin\",\"VKWebAppCallGetStatus\"]:[\"VKWebAppShowImages\"],!0),l=r?window.AndroidBridge:void 0,b=p?window.webkit.messageHandlers:void 0,f=s?parent:void 0;var A,v,m,W,_,V,K;e.EAdsFormats=void 0,(A=e.EAdsFormats||(e.EAdsFormats={})).REWARD=\"reward\",A.INTERSTITIAL=\"interstitial\",e.BannerAdLayoutType=void 0,(v=e.BannerAdLayoutType||(e.BannerAdLayoutType={})).RESIZE=\"resize\",v.OVERLAY=\"overlay\",e.BannerAdLocation=void 0,(m=e.BannerAdLocation||(e.BannerAdLocation={})).TOP=\"top\",m.BOTTOM=\"bottom\",e.EGrantedPermission=void 0,(W=e.EGrantedPermission||(e.EGrantedPermission={})).CAMERA=\"camera\",W.LOCATION=\"location\",W.PHOTO=\"photo\",e.EGetLaunchParamsResponseLanguages=void 0,(_=e.EGetLaunchParamsResponseLanguages||(e.EGetLaunchParamsResponseLanguages={})).RU=\"ru\",_.UK=\"uk\",_.UA=\"ua\",_.EN=\"en\",_.BE=\"be\",_.KZ=\"kz\",_.PT=\"pt\",_.ES=\"es\",e.EGetLaunchParamsResponseGroupRole=void 0,(V=e.EGetLaunchParamsResponseGroupRole||(e.EGetLaunchParamsResponseGroupRole={})).ADMIN=\"admin\",V.EDITOR=\"editor\",V.MEMBER=\"member\",V.MODER=\"moder\",V.NONE=\"none\",e.EGetLaunchParamsResponsePlatforms=void 0,(K=e.EGetLaunchParamsResponsePlatforms||(e.EGetLaunchParamsResponsePlatforms={})).DESKTOP_WEB=\"desktop_web\",K.DESKTOP_WEB_MESSENGER=\"desktop_web_messenger\",K.DESKTOP_APP_MESSENGER=\"desktop_app_messenger\",K.MOBILE_WEB=\"mobile_web\",K.MOBILE_ANDROID=\"mobile_android\",K.MOBILE_ANDROID_MESSENGER=\"mobile_android_messenger\",K.MOBILE_IPHONE=\"mobile_iphone\",K.MOBILE_IPHONE_MESSENGER=\"mobile_iphone_messenger\",K.MOBILE_IPAD=\"mobile_ipad\";var w=function(e){var n=void 0,r=[];function u(e){r.push(e)}function A(){return p||a}function v(){return s&&window.parent!==window}function m(){return A()||v()}function W(e){if(p||a)return t([],r,!0).map((function(n){return n.call(null,e)}));var o=null==e?void 0:e.data;if(s&&o){if(i&&\"string\"==typeof o)try{o=JSON.parse(o)}catch(e){}var u=o.type,d=o.data,c=o.frameId;u&&(\"VKWebAppSettings\"!==u?t([],r,!0).map((function(e){return e({detail:{type:u,data:d}})})):n=c)}}i&&/(android)/i.test(navigator.userAgent)?document.addEventListener(d,W):\"undefined\"!=typeof window&&\"addEventListener\"in window&&window.addEventListener(d,W);var _=o((function(t,o){l&&l[t]?l[t](JSON.stringify(o)):b&&b[t]&&\"function\"==typeof b[t].postMessage?b[t].postMessage(o):i?window.ReactNativeWebView.postMessage(JSON.stringify({handler:t,params:o})):f&&\"function\"==typeof f.postMessage&&f.postMessage({handler:t,params:o,type:\"vk-connect\",webFrameId:n,connectVersion:e},\"*\")}),u);return{send:_,sendPromise:_,subscribe:u,unsubscribe:function(e){var n=r.indexOf(e);n>-1&&r.splice(n,1)},supports:function(e){return a?!(!l||\"function\"!=typeof l[e]):p?!(!b||!b[e]||\"function\"!=typeof b[e].postMessage):!!s&&c.includes(e)},isWebView:A,isIframe:v,isEmbedded:m,isStandalone:function(){return!m()}}}(\"2.10.0\");e.applyMiddleware=function e(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return t.includes(void 0)||t.includes(null)?e.apply(void 0,t.filter((function(e){return\"function\"==typeof e}))):function(e){if(0===t.length)return e;var o,r={subscribe:e.subscribe,send:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.send.apply(e,n)}},a=t.filter((function(e){return\"function\"==typeof e})).map((function(e){return e(r)})).reduce((function(e,n){return function(t){return e(n(t))}}));return o=a(e.send),n(n({},e),{send:o})}},e.default=w,e.parseURLSearchParamsForGetLaunchParams=function(n){var t={};try{var o=new URLSearchParams(n);o.forEach((function(n,o){switch(o){case\"vk_ts\":case\"vk_is_recommended\":case\"vk_profile_id\":case\"vk_has_profile_button\":case\"vk_testing_group_id\":case\"vk_user_id\":case\"vk_app_id\":case\"vk_group_id\":t[o]=Number(n);break;case\"sign\":case\"vk_chat_id\":case\"vk_ref\":case\"vk_access_token_settings\":t[o]=n;break;case\"odr_enabled\":t.odr_enabled=\"1\"===n?1:void 0;break;case\"vk_is_app_user\":case\"vk_are_notifications_enabled\":case\"vk_is_favorite\":t[o]=function(e){switch(e){case\"0\":return 0;case\"1\":return 1;default:return}}(n);break;case\"vk_language\":t.vk_language=function(n){return Object.values(e.EGetLaunchParamsResponseLanguages).some((function(e){return e===n}))}(n)?n:void 0;break;case\"vk_viewer_group_role\":t.vk_viewer_group_role=function(n){return Object.values(e.EGetLaunchParamsResponseGroupRole).some((function(e){return e===n}))}(n)?n:void 0;break;case\"vk_platform\":t.vk_platform=function(n){return Object.values(e.EGetLaunchParamsResponsePlatforms).some((function(e){return e===n}))}(n)?n:void 0}}))}catch(e){console.warn(e)}return t},Object.defineProperty(e,\"__esModule\",{value:!0})}));\n//# sourceMappingURL=index.umd.js.map\n\n\n//# sourceURL=webpack://new_try/./node_modules/@vkontakte/vk-bridge/dist/index.umd.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vkontakte_vk_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vkontakte/vk-bridge */ \"./node_modules/@vkontakte/vk-bridge/dist/index.umd.js\");\n/* harmony import */ var _vkontakte_vk_bridge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vkontakte_vk_bridge__WEBPACK_IMPORTED_MODULE_0__);\n\r\n_vkontakte_vk_bridge__WEBPACK_IMPORTED_MODULE_0___default().send(\"VKWebAppInit\", {});\r\n\r\n\r\n\r\n//import {mod} from './some.js';\r\n\r\n//alert(mod);\r\n// Отправляет событие инициализации нативному клиенту\r\n//vkBridge.send(\"VKWebAppInit\");\r\n/*\r\n    TODO\r\n    поле\r\n\r\n\r\n*/\r\n\r\n\r\nvar game_field_size = 600;\r\nvar vk_width = 900;\r\nvar vk_height = 750;\r\nvar cell_size = 40;\r\nvar colors = [\"#d22\",\"#3d3\",\"blue\",\"#aaa\",\"yellow\",\"purple\"];\r\nvar salt = new Date();\r\nvar user_area = [1];\r\nvar area_color = \"\";\r\nvar max_attempts = 25;\r\nvar user_attempt = 1;\r\nvar cells_in_row = parseInt(game_field_size /cell_size);\r\nvar cells_in_field = cells_in_row * cells_in_row;\r\nvar game_result = 0;\r\nvar game_status = 1;\r\nvar times_played = 0;\r\n\r\n\r\n\r\nmain();\r\n\r\nfunction main()\r\n{\r\n    set_body();\r\n    \r\n    create_game_field();\r\n    create_info_field();\r\n    create_attempts_bar();\r\n    \r\n}\r\n\r\nfunction set_body()\r\n{\r\n    //document.body.style.fontSize = 0;\r\n    const eframe = document.createElement(\"div\");\r\n    eframe.id = \"window\";\r\n    eframe.position = \"absolute\";\r\n    //eframe.style.border = \"1px solid red\";\r\n    eframe.style.width = vk_width + \"px\";\r\n    eframe.style.height = vk_height + \"px\";\r\n    eframe.style.background = \"url('images/back.jpg')\";\r\n    document.body.appendChild(eframe);\r\n    \r\n\r\n}\r\n\r\nfunction create_game_field()\r\n{\r\n    \r\n    const elem = document.createElement(\"div\");\r\n    elem.id = \"gameField\";\r\n    elem.style.position = \"absolute\";\r\n    elem.style.width = game_field_size + \"px\";\r\n    elem.style.height = game_field_size + \"px\";\r\n    elem.style.marginLeft = \"250px\";\r\n    elem.style.marginTop = \"50px\";\r\n    //elem.style.border = \"3px solid black\";\r\n    elem.style.background = \"black\";\r\n    elem.style.display = \"block\";\r\n    elem.onclick = cell_chosen;\r\n    elem.style.fontSize = 0;\r\n    elem.style.border = \"1px solid black\";\r\n    for(var i = 0; i < cells_in_field; i++)\r\n    {\r\n        const cell = document.createElement(\"div\");\r\n        cell.id = i + 1;\r\n        cell.style.display = \"inline-block\";\r\n        cell.style.border = \"0px\";\r\n        cell.style.margin = \"0\";\r\n        //cell.style.position = \"absolute\";\r\n        cell.style.minWidth = cell_size + \"px\";\r\n        cell.style.height = cell_size + \"px\";\r\n        cell.style.background = colors[parseInt(Math.random()*1000*(salt%119))%colors.length];\r\n        elem.appendChild(cell);\r\n    }\r\n    const eframe = document.getElementById(\"window\");\r\n    eframe.appendChild(elem);\r\n    const el1 = document.getElementById(1);\r\n    area_color = el1.style.background;\r\n    update_area();\r\n}\r\n\r\nfunction generate_field()\r\n{\r\n    salt = new Date();\r\n    for(var i = 0; i < cells_in_field; i++)\r\n    {\r\n        const cell = document.getElementById(i + 1);\r\n        cell.style.background = colors[parseInt(Math.random()*1000*(salt%119))%colors.length];\r\n    }\r\n}\r\n\r\nfunction cell_chosen(event)\r\n{\r\n    if(game_status)\r\n    {\r\n        const cell = document.elementFromPoint(event.x, event.y);\r\n        area_color = cell.style.background;\r\n        paint_area();\r\n        update_area();\r\n        if(user_area.length >= cells_in_field || user_attempt >= max_attempts)\r\n        {\r\n       // alert(user_attempt);\r\n            game_status = 0;\r\n            if(user_attempt >= max_attempts)\r\n                game_result = 0;\r\n            else\r\n                game_result = 1;\r\n            if(times_played == 0)\r\n                create_resultBar();\r\n            else\r\n                display_resultBar();\r\n        }\r\n        user_attempt += 1;\r\n        if(game_status)\r\n            update_attempts();\r\n    }\r\n}\r\n\r\nfunction create_resultBar()\r\n{\r\n    const rb = document.createElement(\"div\");\r\n    rb.id=\"resultBar\";\r\n    rb.style.position = \"absolute\";\r\n    rb.style.width = \"auto\";\r\n    rb.style.height = \"auto\";\r\n    rb.style.marginLeft = \"320px\";\r\n    rb.style.fontSize = \"2em\";\r\n    rb.style.marginTop = \"280px\";\r\n    rb.style.padding = \"20px\";\r\n    rb.style.border = \"3px solid black\";\r\n    rb.style.fontFamily = \"Open Sans\";\r\n    if(game_result)\r\n        rb.innerText = \"Получилось! Еще раз?\\n\";\r\n    else\r\n        rb.innerText = \"Не вышло... Пробуем ещё?\\n\";\r\n    rb.style.background = \"white\";\r\n\r\n    const yeslem = document.createElement(\"div\");\r\n    yeslem.id = \"yesBtn\";\r\n    yeslem.style.position = \"relative\";\r\n    yeslem.innerText = \"Да\";\r\n    yeslem.style.marginTop = \"10px\";\r\n    yeslem.style.background = \"#3c3\";\r\n    yeslem.style.width = \"auto\";\r\n    yeslem.style.display = \"inline-block\";\r\n    yeslem.style.height = \"auto\";\r\n    yeslem.style.marginLeft = \"10%\";\r\n    yeslem.style.padding = \"5px 20px\";\r\n    yeslem.onmouseover = mouse_over_choice;\r\n    yeslem.onmouseout = mouse_out_choice;\r\n    yeslem.onclick = restart;\r\n    yeslem.style.border = \"2px solid black\";\r\n    rb.appendChild(yeslem);\r\n    \r\n    const surelem = document.createElement(\"div\");\r\n    surelem.id = \"sureBtn\";\r\n    surelem.style.display = \"inline-block\";\r\n    surelem.style.position = \"relative\";\r\n    surelem.innerText = \"Конечно!\";\r\n    surelem.style.background = \"#77c\";\r\n    surelem.style.width = \"auto\";\r\n    surelem.style.height = \"auto\";\r\n    surelem.style.float = \"right\";\r\n    surelem.style.marginRight = \"10%\";\r\n    surelem.style.marginTop = \"10px\";\r\n    surelem.onmouseover = mouse_over_choice;\r\n    surelem.onmouseout = mouse_out_choice;\r\n    surelem.style.border = \"2px solid black\";\r\n    surelem.style.padding = \"5px 10px\";\r\n    surelem.onclick = restart;\r\n    rb.appendChild(surelem);\r\n\r\n    const w = document.getElementById(\"window\");\r\n    w.appendChild(rb);\r\n}\r\n\r\nfunction display_resultBar()\r\n{\r\n    const rb = document.getElementById(\"resultBar\");\r\n    rb.style.display = \"block\";\r\n}\r\n\r\nfunction mouse_over_choice(event)\r\n{\r\n    const ch = document.elementFromPoint(event.x, event.y);\r\n    ch.style.cursor = \"pointer\";\r\n    ch.style.background = \"black\";\r\n    ch.style.color = \"white\";\r\n}\r\n\r\nfunction mouse_out_choice()\r\n{\r\n    const yesb = document.getElementById(\"yesBtn\");\r\n    yesb.style.cursor = \"default\";\r\n    const sureb = document.getElementById(\"sureBtn\");\r\n    sureb.style.cursor = \"default\";\r\n    yesb.style.background = \"#3c3\";\r\n    yesb.style.color = \"black\";\r\n    sureb.style.background = \"#77c\";\r\n    sureb.style.color = \"black\";\r\n}\r\n\r\nfunction restart(event)\r\n{\r\n    const ch = document.elementFromPoint(event.x, event.y);\r\n    ch.style.cursor = \"default\";\r\n    const resbar = document.getElementById(\"resultBar\");\r\n    resbar.style.display = \"none\";\r\n    times_played += 1;\r\n    if(times_played % 2 == 0)\r\n        show_add();\r\n    generate_field();\r\n    const el1 = document.getElementById(1);\r\n    area_color = el1.style.background;\r\n    user_area = [1];\r\n    user_attempt = 1;\r\n    update_attempts();\r\n    update_area();\r\n    game_status = 1;\r\n}\r\n\r\nfunction show_add()\r\n{\r\n    _vkontakte_vk_bridge__WEBPACK_IMPORTED_MODULE_0___default().send('VKWebAppCheckNativeAds', { ad_format: 'interstitial' })\r\n    .then((data) => {\r\n    if (data.result) {\r\n      // Предзагруженная реклама есть.\r\n\r\n      // Теперь можно создать кнопку\r\n      // \"Посмотрите рекламу\".   \r\n      // ...\r\n            \r\n    } else {\r\n      console.log('Рекламные материалы не найдены.');\r\n    }\r\n  })\r\n    .catch((error) => { console.log(error);   });\r\n    _vkontakte_vk_bridge__WEBPACK_IMPORTED_MODULE_0___default().send('VKWebAppShowNativeAds', { ad_format: 'interstitial' })\r\n    .then((data) => {\r\n    if (data.result)\r\n        console.log('Реклама показана');\r\n    else\r\n        console.log('Ошибка при показе');\r\n    })\r\n    .catch((error) => { console.log(error); });\r\n}\r\nfunction update_area()\r\n{\r\n    for(var i = 1; i <= cells_in_field; i++)\r\n    {\r\n        var should_add = false;\r\n        const cell = document.getElementById(i);\r\n        if(cell.style.background == area_color && (exist_in_area(i) == false))\r\n        {\r\n            if(i > cells_in_row && exist_in_area(i - cells_in_row))\r\n                should_add = true;\r\n            else if(i + cells_in_row <= cells_in_field && exist_in_area(i + cells_in_row))\r\n                should_add = true;\r\n            else if(i % cells_in_row != 1 && exist_in_area(i - 1))\r\n                should_add = true;\r\n            else if(i % cells_in_row != 0 && exist_in_area(i + 1))\r\n                should_add = true;\r\n        }\r\n        if(should_add)\r\n            user_area.push(i);\r\n    }\r\n    \r\n\r\n}\r\n\r\nfunction exist_in_area(elem)\r\n{\r\n    for(var i = 0; i < user_area.length; i++)\r\n    {\r\n        if(user_area[i] == elem)\r\n            return true;\r\n    }\r\n    return false;\r\n}\r\nfunction paint_area()\r\n{\r\n    for(var i = 0; i < user_area.length; i++)\r\n    {\r\n        const cell = document.getElementById(user_area[i]);\r\n        cell.style.background = area_color;\r\n    }\r\n\r\n}\r\n\r\nfunction create_info_field()\r\n{\r\n    const einfo = document.createElement(\"div\");\r\n    einfo.id = \"infoField\";\r\n    einfo.style.position = \"absolute\";\r\n    einfo.style.marginTop = \"15%\";\r\n    einfo.style.height = \"auto\";\r\n    einfo.style.border = \"1px solid white\";\r\n    einfo.style.width = \"200px\";\r\n    einfo.style.fontSize = \"1em\";\r\n    einfo.style.fontFamily = \"Open Sans\";\r\n    einfo.style.color = \"white\";\r\n   // einfo.style.background = \"white\";\r\n    einfo.style.marginLeft = \"10px\";\r\n    einfo.innerText = \"Цель игры - заполнить всё поле одним цветом, продвигаясь из левого верхнего угла. \\nДля этого нужно выбирать прилегающий к занятой области цвет, кликая на него. \\nКоличество ходов ограничено.\";\r\n    einfo.style.padding = \"5px\";\r\n    const w = document.getElementById(\"window\");\r\n    w.appendChild(einfo);\r\n    \r\n  \r\n}\r\n\r\nfunction create_attempts_bar()\r\n{\r\n    const elem = document.createElement(\"div\");\r\n    elem.id = \"attemptsBar\";\r\n    elem.style.position = \"absolute\";\r\n    elem.innerText = \"Ход\\n\"+user_attempt+\"/\"+max_attempts;\r\n    elem.style.marginTop = \"5%\";\r\n    elem.style.marginLeft = \"50px\";\r\n    \r\n    elem.style.color = \"white\";\r\n\r\n    elem.style.border = \"1px solid white\";\r\n    elem.style.width = \"auto\";\r\n    elem.style.padding = \"5px 20px\";\r\n    elem.style.height = \"auto\";\r\n    elem.style.textAlign = \"center\";\r\n    elem.style.fontSize = \"2em\";\r\n    const w = document.getElementById(\"window\");\r\n    w.appendChild(elem);\r\n}\r\n\r\n\r\n\r\nfunction update_attempts()\r\n{\r\n    const elem = document.getElementById(\"attemptsBar\");\r\n    elem.innerText = \"Ход\\n\"+user_attempt+\"/\"+max_attempts;\r\n}\r\n\n\n//# sourceURL=webpack://new_try/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;