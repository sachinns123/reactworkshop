(self.webpackChunkreactworkshop=self.webpackChunkreactworkshop||[]).push([[749],{749:function(e,t,r){"use strict";r.r(t);r(791);var o=r(87),n=r(184);t.default=function(e){var t=e.name,i=e.posterImage,s="posterthatismissing.jpg"!==i?r(583)("./".concat(i)):r(609);return(0,n.jsxs)("div",{children:[(0,n.jsx)(o.LazyLoadImage,{className:"flex bg-slate-100",alt:i,src:s,loading:"lazy"}),(0,n.jsx)("div",{className:"flex text-black dark:text-white",children:(0,n.jsx)("span",{className:"text-sm font-thin text-black dark:text-white pt-2",children:t})})]})}},87:function(e,t,r){!function(){var t={296:function(e,t,r){var o=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,a="object"==typeof self&&self&&self.Object===Object&&self,l=u||a||Function("return this")(),f=Object.prototype.toString,p=Math.max,y=Math.min,d=function(){return l.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=i.test(e);return r||s.test(e)?c(e.slice(2),r?2:8):n.test(e)?NaN:+e}e.exports=function(e,t,r){var o,n,i,s,c,u,a=0,l=!1,f=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function A(t){var r=o,i=n;return o=n=void 0,a=t,s=e.apply(i,r)}function v(e){var r=e-u;return void 0===u||r>=t||r<0||f&&e-a>=i}function m(){var e=d();if(v(e))return C(e);c=setTimeout(m,function(e){var r=t-(e-u);return f?y(r,i-(e-a)):r}(e))}function C(e){return c=void 0,g&&o?A(e):(o=n=void 0,s)}function E(){var e=d(),r=v(e);if(o=arguments,n=this,u=e,r){if(void 0===c)return function(e){return a=e,c=setTimeout(m,t),l?A(e):s}(u);if(f)return c=setTimeout(m,t),A(u)}return void 0===c&&(c=setTimeout(m,t)),s}return t=b(t)||0,h(r)&&(l=!!r.leading,i=(f="maxWait"in r)?p(b(r.maxWait)||0,t):i,g="trailing"in r?!!r.trailing:g),E.cancel=function(){void 0!==c&&clearTimeout(c),a=0,o=u=n=c=void 0},E.flush=function(){return void 0===c?s:C(d())},E}},96:function(e,t,r){var o="Expected a function",n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,l="object"==typeof self&&self&&self.Object===Object&&self,f=a||l||Function("return this")(),p=Object.prototype.toString,y=Math.max,d=Math.min,h=function(){return f.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var r=s.test(e);return r||c.test(e)?u(e.slice(2),r?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),function(e,t,r){var n,i,s,c,u,a,l=0,f=!1,p=!1,A=!0;if("function"!=typeof e)throw new TypeError(o);function v(t){var r=n,o=i;return n=i=void 0,l=t,c=e.apply(o,r)}function m(e){var r=e-a;return void 0===a||r>=t||r<0||p&&e-l>=s}function C(){var e=h();if(m(e))return E(e);u=setTimeout(C,function(e){var r=t-(e-a);return p?d(r,s-(e-l)):r}(e))}function E(e){return u=void 0,A&&n?v(e):(n=i=void 0,c)}function w(){var e=h(),r=m(e);if(n=arguments,i=this,a=e,r){if(void 0===u)return function(e){return l=e,u=setTimeout(C,t),f?v(e):c}(a);if(p)return u=setTimeout(C,t),v(a)}return void 0===u&&(u=setTimeout(C,t)),c}return t=g(t)||0,b(r)&&(f=!!r.leading,s=(p="maxWait"in r)?y(g(r.maxWait)||0,t):s,A="trailing"in r?!!r.trailing:A),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,n=a=i=u=void 0},w.flush=function(){return void 0===u?c:E(h())},w}(e,t,{leading:n,maxWait:t,trailing:i})}},703:function(e,t,r){"use strict";var o=r(414);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,i,s){if(s!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return r.PropTypes=r,r}},697:function(e,t,r){e.exports=r(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(function(){"use strict";n.r(i),n.d(i,{LazyLoadComponent:function(){return H},LazyLoadImage:function(){return te},trackWindowScroll:function(){return x}});var e=r(791),t=n.n(e),o=n(697),s=r(164),c=n.n(s);function u(){return"undefined"!=typeof window&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){e.forEach((function(e){e.isIntersecting&&e.target.onVisible()}))},b={},g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(s,e);var r,o,n,i=(o=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(o);if(n){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return y(this,e)});function s(e){var t;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e)).supportsObserver=!e.scrollPosition&&e.useIntersectionObserver&&u(),t.supportsObserver){var r=e.threshold;t.observer=function(e){return b[e]=b[e]||new IntersectionObserver(h,{rootMargin:e+"px"}),b[e]}(r)}return t}return(r=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.placeholder&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.scrollPosition,t=this.placeholder.getBoundingClientRect(),r=c().findDOMNode(this.placeholder).style,o=parseInt(r.getPropertyValue("margin-left"),10)||0,n=parseInt(r.getPropertyValue("margin-top"),10)||0;return{bottom:e.y+t.bottom+n,left:e.x+t.left+o,right:e.x+t.right+o,top:e.y+t.top+n}}},{key:"isPlaceholderInViewport",value:function(){if("undefined"==typeof window||!this.placeholder)return!1;var e=this.props,t=e.scrollPosition,r=e.threshold,o=this.getPlaceholderBoundingBox(t),n=t.y+window.innerHeight,i=t.x,s=t.x+window.innerWidth,c=t.y;return Boolean(c-r<=o.bottom&&n+r>=o.top&&i-r<=o.right&&s+r>=o.left)}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var e=this,r=this.props,o=r.className,n=r.height,i=r.placeholder,s=r.style,c=r.width;if(i&&"function"!=typeof i.type)return t().cloneElement(i,{ref:function(t){return e.placeholder=t}});var u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({display:"inline-block"},s);return void 0!==c&&(u.width=c),void 0!==n&&(u.height=n),t().createElement("span",{className:o,ref:function(t){return e.placeholder=t},style:u},i)}}])&&function(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(s.prototype,r),s}(t().Component);g.propTypes={onVisible:o.PropTypes.func.isRequired,className:o.PropTypes.string,height:o.PropTypes.oneOfType([o.PropTypes.number,o.PropTypes.string]),placeholder:o.PropTypes.element,threshold:o.PropTypes.number,useIntersectionObserver:o.PropTypes.bool,scrollPosition:o.PropTypes.shape({x:o.PropTypes.number.isRequired,y:o.PropTypes.number.isRequired}),width:o.PropTypes.oneOfType([o.PropTypes.number,o.PropTypes.string])},g.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};var A=g,v=n(296),m=n.n(v),C=n(96),E=n.n(C),w=function(e){var t=getComputedStyle(e,null);return t.getPropertyValue("overflow")+t.getPropertyValue("overflow-y")+t.getPropertyValue("overflow-x")},I=function(e){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t instanceof HTMLElement;){if(/(scroll|auto)/.test(w(t)))return t;t=t.parentNode}return window};function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var B=["delayMethod","delayTime"];function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var K=function(){return"undefined"==typeof window?0:window.scrollX||window.pageXOffset},R=function(){return"undefined"==typeof window?0:window.scrollY||window.pageYOffset},x=function(e){var r=function(r){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(a,r);var o,n,i,s=(n=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(n);if(i){var r=T(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return Q(this,e)});function a(e){var r;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=s.call(this,e)).useIntersectionObserver=e.useIntersectionObserver&&u(),r.useIntersectionObserver)return Q(r);var o=r.onChangeScroll.bind(S(r));return"debounce"===e.delayMethod?r.delayedScroll=m()(o,e.delayTime):"throttle"===e.delayMethod&&(r.delayedScroll=E()(o,e.delayTime)),r.state={scrollPosition:{x:K(),y:R()}},r.baseComponentRef=t().createRef(),r}return(o=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){"undefined"==typeof window||this.useIntersectionObserver||I(c().findDOMNode(this.baseComponentRef.current))!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(this.scrollElement=I(c().findDOMNode(this.baseComponentRef.current)),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:K(),y:R()}})}},{key:"render",value:function(){var r=this.props,o=(r.delayMethod,r.delayTime,function(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(r,B)),n=this.useIntersectionObserver?null:this.state.scrollPosition;return t().createElement(e,j({forwardRef:this.baseComponentRef,scrollPosition:n},o))}}])&&function(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(a.prototype,o),a}(t().Component);return r.propTypes={delayMethod:o.PropTypes.oneOf(["debounce","throttle"]),delayTime:o.PropTypes.number,useIntersectionObserver:o.PropTypes.bool},r.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},r};function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(s,e);var r,o,n,i=(o=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(o);if(n){var r=M(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function s(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),i.call(this,e)}return(r=[{key:"render",value:function(){return t().createElement(A,this.props)}}])&&function(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(s.prototype,r),s}(t().Component),U=x(F);function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(s,e);var r,o,n,i=(o=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(o);if(n){var r=z(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===Y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return V(e)}(this,e)});function s(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),t=i.call(this,e);var r=e.afterLoad,o=e.beforeLoad,n=e.scrollPosition,c=e.visibleByDefault;return t.state={visible:c},c&&(o(),r()),t.onVisible=t.onVisible.bind(V(t)),t.isScrollTracked=Boolean(n&&Number.isFinite(n.x)&&n.x>=0&&Number.isFinite(n.y)&&n.y>=0),t}return(r=[{key:"componentDidUpdate",value:function(e,t){t.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var e=this.props,r=e.className,o=e.delayMethod,n=e.delayTime,i=e.height,s=e.placeholder,c=e.scrollPosition,a=e.style,l=e.threshold,f=e.useIntersectionObserver,p=e.width;return this.isScrollTracked||f&&u()?t().createElement(A,{className:r,height:i,onVisible:this.onVisible,placeholder:s,scrollPosition:c,style:a,threshold:l,useIntersectionObserver:f,width:p}):t().createElement(U,{className:r,delayMethod:o,delayTime:n,height:i,onVisible:this.onVisible,placeholder:s,style:a,threshold:l,width:p})}}])&&function(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(s.prototype,r),s}(t().Component);q.propTypes={afterLoad:o.PropTypes.func,beforeLoad:o.PropTypes.func,useIntersectionObserver:o.PropTypes.bool,visibleByDefault:o.PropTypes.bool},q.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};var H=q;function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var N=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){J(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function J(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ee=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(s,e);var r,o,n,i=(o=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=$(o);if(n){var r=$(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===G(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e)).state={loaded:!1},t}return(r=[{key:"onImageLoad",value:function(){var e=this;return this.state.loaded?null:function(){e.props.afterLoad(),e.setState({loaded:!0})}}},{key:"getImg",value:function(){var e=this.props,r=(e.afterLoad,e.beforeLoad,e.delayMethod,e.delayTime,e.effect,e.placeholder,e.placeholderSrc,e.scrollPosition,e.threshold,e.useIntersectionObserver,e.visibleByDefault,e.wrapperClassName,e.wrapperProps,function(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,N));return t().createElement("img",W({onLoad:this.onImageLoad()},r))}},{key:"getLazyLoadImage",value:function(){var e=this.props,r=e.beforeLoad,o=e.className,n=e.delayMethod,i=e.delayTime,s=e.height,c=e.placeholder,u=e.scrollPosition,a=e.style,l=e.threshold,f=e.useIntersectionObserver,p=e.visibleByDefault,y=e.width;return t().createElement(H,{beforeLoad:r,className:o,delayMethod:n,delayTime:i,height:s,placeholder:c,scrollPosition:u,style:a,threshold:l,useIntersectionObserver:f,visibleByDefault:p,width:y},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(e){var r=this.props,o=r.effect,n=r.height,i=r.placeholderSrc,s=r.width,c=r.wrapperClassName,u=r.wrapperProps,a=this.state.loaded,l=a?" lazy-load-image-loaded":"",f=a||!i?{}:{backgroundImage:"url(".concat(i,")"),backgroundSize:"100% 100%"};return t().createElement("span",W({className:c+" lazy-load-image-background "+o+l,style:X(X({},f),{},{color:"transparent",display:"inline-block",height:n,width:s})},u),e)}},{key:"render",value:function(){var e=this.props,t=e.effect,r=e.placeholderSrc,o=e.visibleByDefault,n=e.wrapperClassName,i=e.wrapperProps,s=this.getLazyLoadImage();return(t||r)&&!o||n||i?this.getWrappedLazyLoadImage(s):s}}])&&function(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(s.prototype,r),s}(t().Component);ee.propTypes={afterLoad:o.PropTypes.func,beforeLoad:o.PropTypes.func,delayMethod:o.PropTypes.string,delayTime:o.PropTypes.number,effect:o.PropTypes.string,placeholderSrc:o.PropTypes.string,threshold:o.PropTypes.number,useIntersectionObserver:o.PropTypes.bool,visibleByDefault:o.PropTypes.bool,wrapperClassName:o.PropTypes.string,wrapperProps:o.PropTypes.object},ee.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};var te=ee})(),e.exports=i}()},583:function(e,t,r){var o={"./Back.png":119,"./nav_bar.png":603,"./placeholder_for_missing_posters.png":609,"./poster1.jpg":570,"./poster2.jpg":542,"./poster3.jpg":412,"./poster4.jpg":196,"./poster5.jpg":987,"./poster6.jpg":722,"./poster7.jpg":346,"./poster8.jpg":863,"./poster9.jpg":441,"./search.png":256};function n(e){var t=i(e);return r(t)}function i(e){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=i,e.exports=n,n.id=583},609:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAAHhCAYAAAGHFTxJAAAACXBIWXMAAAsSAAALEgHS3X78AAAOXUlEQVR42u3dP0jc9x8G8Le/pERiv9RCKpIbmgwhl7sOLgcOHTRCKLRg2nBmdeggPVI6hf4Z6lJJOxWKToVIt15okg4podKg28EtdjhiQTCFnoQSqGCRtErzm5RczjP+iznj67W0nqf58Pjk8Xt6mpZMJvMomlvv/2IfcEiHdEiHdEiHdEiHdEiHdEiHdEiHdEiHPICH7OnpiYiISqXSvIecnJzcXx/u3Urz8LM6YDabbb4kh4eHn0mKEREtu/1F1GKxGAMDA7v5LntbfKXXmDukQzqkQzqkQzqkQzqkQzqkQzqkQza9wxHR2+RnnG76L7P8Txcd0AEd0AEd0AEd0AEd0AEd0AEd0AEd0AG3pKmf3LYqSZLmOWChUKh5OZvNRqlUap4Djo6O1t1WLpeb60P8+BPaKpVKDA4O7sr73dUvYBaLxZiamlo30aY4oB10QAd0QAd0QAd0QAd0QAd0QAd0QAc8YAds+ieY7Yef4Wt2++NnDP1dFiJCFKIQhYgQhShEISJEIQpRiCIQohCFiBCFKEQhIkQhClGICPHAhZjP5yOfz9fd3tfXF5VKJSqVSoyPjzfVmT2haeea5wlNSZLU/XDnelbbuJs/OnugmjgyMhJJksSlS5c0cSODg4Nr/wrJ5cuXo1gsRkdHR0RE9Pf3x9mzZ5vug2sTX8QmusQRIkIUohCFKAIhClGICFGIQhQiQhSiEIWIEIUoRCEiRCEKUYhsmaeRaKEABShABChAAQoQAQpQgAJEgAIUoAARoAAFKEAEKEABChABClCAAkSAAhSgABGgAAUoQAQoQAEKEAEKUIACFCACFKAABYgABShAASJAAQpw1/T09MQbb7wRERHpdDoqlUqMjIw01Rmb7hfv5PP5uHbtWt3tj//za9lsVgMbmZiY2Fd/hf3qpxelgYVCIS5evPjU+zXbv6bYVH+Fjx07tun7Jknir/B25HK5SKVScfPmTQGup7OzM+7fv9/wr28zfQZuur/Cg4ODMTQ0FF1dXQ0vY5pp/5ouwNV/+Hl6ejoiIorFYhSLxYiI+Oyzz2r+6zJmE1bDGxgYcB3oOhABClCAAkSAAhSgABGgAAUoQAQoQAEKUIAIUIACFCACFKAABYgABShAASJAAQpQgAhQgAIUIAIUoAAFiAAFKEABIkABClCACFCAzeNwRPSKYfv81g6et14ziM/FoIQoISghSghKiBKCEqKEoIQoISghSghKiBKCEqKEoIQoISghSghKiBKCEqKEoIQoISghSghKiBKCEqKEoIQoISghSghKiBKCEqKEoIQoISghSghKiBKCEqKEoIQoISghSgiHRbB9PT09ERHxxx9/xOzsrEC2qSWTyTwSQ2NdXV1x6tSpmJiYiIWFhbrXt7e3191eqVTq7jc4OBjlclmg9Xp9On6KU6dO1azek54sYC6XW/d+hUJBmJZwb5VKpUiSJCIiLly4EDMzM0JpsISuCZ+R7u7uiIhIkiRKpdLa7QppCZ8qlUrF+fPn114eHR3d0ftzfeiacMuq1WrcvHkz5ubm4ttvv93x+/vtt99qXl5cXFRAS4hrwn2kvb09Pvroo7WXh4eHN/V2ExMTcfz48Zr1W71GpJ5Pxxt48ssy7e3tNS9ns9nI5/PR1tZWc/vjBVx9cIJPx7uuWCzWvHz37t34/PPPa27L5XKu/zbx6VgJt6mtrS2uXr269vLAwIBQlJD9WkLXhHhgAkqIEoISooSghCghKCFKCEqIEoISooSghCghKCFKCEqIEoISooSghCghKCFKCEqIEoISooSghCghKCFKCEqIEoISooSghCghKCFKCEqIEoISooSghCghKCFKCEqIEkJLJpN5JAasIAoICogCggKigKCAKCAoIAoICogCggKigKCAKCAoIAoICogCggKigKCAKCAoIAoICogCggKigKCAKCAKCAqIAoICooCggCggKCAKCAqIAoICooCggCggKCAKCAqIAoICooCggCggKCAKCAqIAoICooCggCggCggKiAKCAqKAoIAoICggCggKiAKCAqKAoIAoICggCggKiAKCAqKAoIAoICggCggKiAKCAqKAoIAoICggCogCggKigKCAKCAoIAoICogCggKigKCAKCAoIC+CwyLYntbW1uju7o6IiMnJSYEo4N56+eWXG76uVCpFkiRrL2ezWYE10JLJZB6JobF8Ph9LS0tx69atute1t7fH33//HSsrK2u3jY+PRy6Xq7uvEroG3LK33347IiKOHj0aHR0dda9fWFioKV9ErFs+FHBbqtXq2v//9ddfAnENuLemp6ejUqnE8vLypt9mbGws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"},570:function(e,t,r){"use strict";e.exports=r.p+"static/media/poster1.d966e333249e4f74e821.jpg"},542:function(e,t,r){"use strict";e.exports=r.p+"static/media/poster2.bf23bfae49d854fec0f2.jpg"},412:function(e,t,r){"use strict";e.exports=r.p+"static/media/poster3.7ee7b802517e3b685aaf.jpg"},196:function(e,t,r){"use strict";e.exports=r.p+"static/media/poster4.a2f1de9b0f0c656226d7.jpg"},987:function(e,t,r){"use strict";e.exports=r.p+"static/media/poster5.d0a9cf21d7e7d56979e2.jpg"},722:function(e,t,r){"use strict";e.exports=r.p+"static/media/poster6.57e30e483bb184bc63b9.jpg"},346:function(e,t,r){"use strict";e.exports=r.p+"static/media/poster7.8f23c2d5749c68467aaf.jpg"},863:function(e,t,r){"use strict";e.exports=r.p+"static/media/poster8.61013e431fa5ca643217.jpg"},441:function(e,t,r){"use strict";e.exports=r.p+"static/media/poster9.080f33854a8c02368de2.jpg"}}]);
//# sourceMappingURL=749.084bcc70.chunk.js.map