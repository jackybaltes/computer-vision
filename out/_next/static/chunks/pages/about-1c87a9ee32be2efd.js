(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{4019:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7942:function(e,t,n){"use strict";var o=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,a=n(7273).Z,u=r(n(7294)),l=n(4957),f=n(7995),c=n(647),i=n(1992),s=n(639),d=n(4019),p=n(227),v={};function y(e,t,n,o){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,o)).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;v[t+"%"+n+(r?"%"+r:"")]=!0}}var h=u.default.forwardRef((function(e,t){var n,r=e.href,h=e.as,b=e.children,_=e.prefetch,C=e.passHref,g=e.replace,x=e.shallow,m=e.scroll,M=e.locale,j=e.onClick,L=e.onMouseEnter,E=e.onTouchStart,R=e.legacyBehavior,O=void 0===R?!0!==Boolean(!1):R,k=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,!O||"string"!==typeof n&&"number"!==typeof n||(n=u.default.createElement("a",null,n));var w=!1!==_,P=u.default.useContext(c.RouterContext),T=u.default.useContext(i.AppRouterContext);T&&(P=T);var I,N=u.default.useMemo((function(){var e=l.resolveHref(P,r,!0),t=o(e,2),n=t[0],a=t[1];return{href:n,as:h?l.resolveHref(P,h):a||n}}),[P,r,h]),S=N.href,B=N.as,U=u.default.useRef(S),A=u.default.useRef(B);O&&(I=u.default.Children.only(n));var H=O?I&&"object"===typeof I&&I.ref:t,D=s.useIntersection({rootMargin:"200px"}),K=o(D,3),Z=K[0],G=K[1],X=K[2],q=u.default.useCallback((function(e){A.current===B&&U.current===S||(X(),A.current=B,U.current=S),Z(e),H&&("function"===typeof H?H(e):"object"===typeof H&&(H.current=e))}),[B,H,S,X,Z]);u.default.useEffect((function(){var e=G&&w&&l.isLocalURL(S),t="undefined"!==typeof M?M:P&&P.locale,n=v[S+"%"+B+(t?"%"+t:"")];e&&!n&&y(P,S,B,{locale:t})}),[B,S,G,M,w,P]);var z={ref:q,onClick:function(e){O||"function"!==typeof j||j(e),O&&I.props&&"function"===typeof I.props.onClick&&I.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,f,c,i,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:a,locale:c,scroll:f}):t[r?"replace":"push"](n,{forceOptimisticNavigation:!s})};i?u.default.startTransition(d):d()}}(e,P,S,B,g,x,m,M,Boolean(T),w)},onMouseEnter:function(e){O||"function"!==typeof L||L(e),O&&I.props&&"function"===typeof I.props.onMouseEnter&&I.props.onMouseEnter(e),!w&&T||l.isLocalURL(S)&&y(P,S,B,{priority:!0})},onTouchStart:function(e){O||"function"!==typeof E||E(e),O&&I.props&&"function"===typeof I.props.onTouchStart&&I.props.onTouchStart(e),!w&&T||l.isLocalURL(S)&&y(P,S,B,{priority:!0})}};if(!O||C||"a"===I.type&&!("href"in I.props)){var J="undefined"!==typeof M?M:P&&P.locale,F=P&&P.isLocaleDomain&&d.getDomainLocale(B,J,P.locales,P.domainLocales);z.href=F||p.addBasePath(f.addLocale(B,J,P&&P.defaultLocale))}return O?u.default.cloneElement(I,z):u.default.createElement("a",Object.assign({},k,z),n)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},639:function(e,t,n){"use strict";var o=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!u,i=r.useState(!1),s=o(i,2),d=s[0],p=s[1],v=r.useState(null),y=o(v,2),h=y[0],b=y[1];r.useEffect((function(){if(u){if(c||d)return;if(h&&h.tagName){var e=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=f.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(o&&(t=l.get(o)))return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:r},f.push(n),l.set(n,t),t}(n),r=o.id,a=o.observer,u=o.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),l.delete(r);var t=f.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&f.splice(t,1)}}}(h,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!d){var o=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(o)}}}),[h,c,n,t,d]);var _=r.useCallback((function(){p(!1)}),[]);return[b,d,_]};var r=n(7294),a=n(6286),u="function"===typeof IntersectionObserver,l=new Map,f=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1992:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294)),r=o.default.createContext(null);t.AppRouterContext=r;var a=o.default.createContext(null);t.LayoutRouterContext=a;var u=o.default.createContext(null);t.GlobalLayoutRouterContext=u;var l=o.default.createContext(null);t.TemplateContext=l},2780:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var o=n(1664),r=n.n(o),a=n(5893);function u(){return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:"About Jacky Baltes"}),(0,a.jsxs)("div",{children:["Back to"," ",(0,a.jsx)(r(),{href:"/",as:"/computer_vision/",children:(0,a.jsx)("a",{children:"Home"})})]})]})}},512:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(2780)}])},1664:function(e,t,n){e.exports=n(7942)}},function(e){e.O(0,[774,888,179],(function(){return t=512,e(e.s=t);var t}));var t=e.O();_N_E=t}]);