(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"3Z9Z":function(e,t,a){"use strict";a("JHok");var r=a("wx14"),n=a("zLVn"),i=a("TSYQ"),s=a.n(i),o=a("q1tI"),l=a.n(o),c=a("vUet"),d=["xl","lg","md","sm","xs"],u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,o=e.noGutters,u=e.as,f=void 0===u?"div":u,p=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),m=Object(c.b)(a,"row"),g=m+"-cols",h=[];return d.forEach((function(e){var t,a=p[e];delete p[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&h.push(""+g+r+"-"+t)})),l.a.createElement(f,Object(r.a)({ref:t},p,{className:s.a.apply(void 0,[i,m,o&&"no-gutters"].concat(h))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.a=u},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return m(t||a).src},m=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=p(t);return g[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,w=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),c.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+c+s+o+a+r+t+i+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,s=e.ariaHidden,o=c.default.createElement(C,(0,l.default)({ref:t,src:a},i,{ariaHidden:s}));return r.length>1?c.default.createElement("picture",null,n(r),o):o})),C=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:a,srcSet:r,src:n},m,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));C.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=p(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,g=e.fluid,h=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,w=e.itemProp,E=e.loading,O=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,A=(0,l.default)({opacity:k?1:0,transition:z?"opacity "+b+"ms":"none"},o),N="boolean"==typeof v?"lightgray":v,V={transitionDelay:b+"ms"},W=(0,l.default)({opacity:this.state.imgLoaded?0:1},z&&V,o,f),T={title:t,alt:this.state.isVisible?"":a,style:W,className:p,itemProp:w};if(g){var j=g,H=m(g);return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},c.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),N&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&V)}),H.base64&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:T,imageVariants:j,generateSources:L}),H.tracedSVG&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:T,imageVariants:j,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,S(j),c.default.createElement(C,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:E},H,{imageVariants:j}))}}))}if(h){var P=h,B=m(h),G=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},i);return"inherit"===i.display&&delete G.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},N&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:N,width:B.width,opacity:this.state.imgLoaded?0:1,height:B.height},z&&V)}),B.base64&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:B.base64,spreadProps:T,imageVariants:P,generateSources:L}),B.tracedSVG&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:B.tracedSVG,spreadProps:T,imageVariants:P,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,S(P),c.default.createElement(C,{alt:a,title:t,width:B.width,height:B.height,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:E},B,{imageVariants:P}))}}))}return null},t}(c.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var A=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),N=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});z.propTypes={resolutions:A,sizes:N,fixed:d.default.oneOfType([A,d.default.arrayOf(A)]),fluid:d.default.oneOfType([N,d.default.arrayOf(N)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var V=z;t.default=V},JI6e:function(e,t,a){"use strict";a("JHok");var r=a("wx14"),n=a("zLVn"),i=a("TSYQ"),s=a.n(i),o=a("q1tI"),l=a.n(o),c=a("vUet"),d=["xl","lg","md","sm","xs"],u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,o=e.as,u=void 0===o?"div":o,f=Object(n.a)(e,["bsPrefix","className","as"]),p=Object(c.b)(a,"col"),m=[],g=[];return d.forEach((function(e){var t,a,r,n=f[e];if(delete f[e],null!=n&&"object"==typeof n){var i=n.span;t=void 0===i||i,a=n.offset,r=n.order}else t=n;var s="xs"!==e?"-"+e:"";null!=t&&m.push(!0===t?""+p+s:""+p+s+"-"+t),null!=r&&g.push("order"+s+"-"+r),null!=a&&g.push("offset"+s+"-"+a)})),m.length||m.push(p),l.a.createElement(u,Object(r.a)({},f,{ref:t,className:s.a.apply(void 0,[i].concat(m,g))}))}));u.displayName="Col",t.a=u},Kfvu:function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.OutboundLink=l,t.trackCustomEvent=function(e){var t=e.category,a=e.action,r=e.label,n=e.value,i=e.nonInteraction,s=void 0!==i&&i,o=e.transport,l=e.hitCallback,c=e.callbackTimeout,d=void 0===c?1e3:c;if("undefined"!=typeof window&&window.ga){var u={eventCategory:t,eventAction:a,eventLabel:r,eventValue:n,nonInteraction:s,transport:o};l&&"function"==typeof l&&(u.hitCallback=function(e,t){void 0===t&&(t=1e3);var a=!1,r=function(){a||(a=!0,e())};return setTimeout(r,t),r}(l,d)),window.ga("send","event",u)}};var n=r(a("pVnL")),i=r(a("8OQS")),s=r(a("q1tI")),o=r(a("17x9"));function l(e){var t=e.eventCategory,a=e.eventAction,r=e.eventLabel,o=e.eventValue,l=(0,i.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return s.default.createElement("a",(0,n.default)({},l,{onClick:function(n){"function"==typeof e.onClick&&e.onClick(n);var i=!0;return(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)&&(i=!1),e.target&&"_self"!==e.target.toLowerCase()&&(i=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:a||"click",eventLabel:r||e.href,eventValue:o,transport:i?"beacon":"",hitCallback:function(){i&&(document.location=e.href)}}):i&&(document.location=e.href),!1}}))}l.propTypes={href:o.default.string,target:o.default.string,eventCategory:o.default.string,eventAction:o.default.string,eventLabel:o.default.string,eventValue:o.default.number,onClick:o.default.func}},LWWf:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAACoElEQVQozx2RbUzMARzH/83JXXdRV1dhYrbQi2aWYWNmNrzIm0hSUpGeWUUO1Tk9XJzuutxdpamUoc0sFQppPelK5ZpCNVcpXcW84K2Hj/+8+G3f7ffZ97ff9yt867jI5848ahrvEWwdYX3ZFKusU6wsdeBr/MThh7NoOp2oX82xrWoGb8Mka6wzbK2eRv24j7k+K78GCnF2FjHerEHIqX3ATksf8mIHy0yzKMvm8C1xoDQ60Ntm+L1wnz9j2fx2lPJjsY3LXfMozbOoKudRmBfYYbXzpLGSHx1avr/MRZDoP+EiXpVYviArcyIvX8CzYAxvER6y34VbKn7m+7F4JYC/VhXf32nZdPsrXnkfUZVN42acQqkf54DxGYZyE4Lyag/KnHY81G1ISmf+j9wwzpKSRarbavlm3ozzzB6caXv5WuDPoBhRQNUiroUTuIuc/MYH3PXv2aJpRXauVTTUDaDQ2XEvGkZxfZRlVweRZ/cg1Y3gXTLGOssQOeG5ZIVpuHH9AvtMTQjXJkWuH9fs13jpBgkx9xBa1IxLZguCKqsBT/VTvDVduGt6kV54gTzzCZ6n7iAtGEbItbErRE9QRBWB6XcJOKZDKBzB75KNyPw2TDUdpN9sxF/dhCSnF2GNfgg/bTc+hgk88u1IM56jUHejSK5HrunHL6ackMBwdoeZEbR2VoRbxXffEXTWRsURCyfz+lDmv2VlXBXbr9Qh+DeMsKF+kLV1b1htaBLbbmf5zRY8S2pwK61HlW0iOCyJjSm5SIvuEXDegI+2HplllHUGG14WMaKKdqTGR+wvzkDwSYrGJyEKZXIs0qRYfBOOI0uNR5KWiCwtFteUeIRkUSdGoYiPQEiJY3lCNEvFvTT1NG6nTuAWc5QVkYfwCD3IPxhctpELRzeNAAAAAElFTkSuQmCC","aspectRatio":2.106741573033708,"src":"/static/163117dc2ac838196c109cdf712b38cc/0dadc/mural.png","srcSet":"/static/163117dc2ac838196c109cdf712b38cc/c6fa8/mural.png 375w,\\n/static/163117dc2ac838196c109cdf712b38cc/d8815/mural.png 750w,\\n/static/163117dc2ac838196c109cdf712b38cc/0dadc/mural.png 1500w,\\n/static/163117dc2ac838196c109cdf712b38cc/6a6cd/mural.png 1717w","sizes":"(max-width: 1500px) 100vw, 1500px"}}}}}')},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),s=a("Kfvu"),o=a("Bl7J"),l=a("LWWf"),c=a("9eSz"),d=a.n(c),u=function(){var e=l.data;return n.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid,alt:"Live Learn Love mural at Roosevelt Middle School"})},f=a("vrFN"),p=(a("ykqd"),a("7vrA")),m=a("3Z9Z"),g=a("JI6e"),h=a("cWnB");t.default=function(){return n.a.createElement(o.a,{pageClassName:"index-page"},n.a.createElement(f.a,{title:"Home"}),n.a.createElement("div",{className:"hero mx-auto"},n.a.createElement(u,null)),n.a.createElement(p.a,null,n.a.createElement(m.a,{className:"descriptions justify-content-center"},n.a.createElement(g.a,{xs:11,md:5,className:"px-md-5 py-md-4 px-3 py-3"},n.a.createElement("h1",{className:""},"What Is OpenOUSD?"),n.a.createElement("p",null,"OpenOUSD aims to bring greater transparency to the Oakland Unified School District's central office so that the community can fully participate in discussions about how it can best serve our students. OpenOUSD is a project of OpenOakland, a volunteer run group with the mission of increasing access to government through technology. OpenOUSD receives no public or private funds and is not an official OUSD website.")),n.a.createElement(g.a,{xs:11,md:5,className:"px-md-5 py-md-4 px-3 py-3"},n.a.createElement("h1",{className:""},"What Are Central Programs?"),n.a.createElement("p",null,"We define a central program as any activity managed by OUSD's central office rather than individual school sites. For example, a staff member working at a school site but hired by the central office would be considered part of a central program. There are more than 50 centrally managed programs at OUSD."),n.a.createElement(i.Link,{to:"/central-programs/"},n.a.createElement(h.a,{variant:"primary",size:"lg",className:"cta",onClick:function(e){return Object(s.trackCustomEvent)({category:"Home Card",action:"Explore Central Programs",label:" What Are Central Programs?"})}},"Explore Central Programs")))),n.a.createElement(m.a,null,n.a.createElement(g.a,{xs:11,sm:10,className:"mx-auto mt-3"},n.a.createElement("div",{className:"footnote"},n.a.createElement("p",null,"The image above is the Live Learn Love mural at Roosevelt Middle School."),n.a.createElement("p",null,' "Change will not come if we wait for some other person or'," ","some other time.",n.a.createElement("br",null),"We are the ones we've been waiting for.",n.a.createElement("br",null),'We are the change the we seek."'),n.a.createElement("p",null,"- B.H. OBAMA"),n.a.createElement("p",null,"Artists: V. Lopez / J. C. Bustamante / B. C. Conner"),n.a.createElement("p",null,"Source: ",n.a.createElement("a",{href:"https://localwiki.org/oakland/Live_Learn_Love_mural"},"Oakland Wiki")))))))}},SGlo:function(e,t,a){"use strict";var r=a("rj/q"),n=a("N+BI").getWeak,i=a("1a8y"),s=a("BjK0"),o=a("xa9o"),l=a("yde8"),c=a("Wadk"),d=a("qDzq"),u=a("O1i0"),f=c(5),p=c(6),m=0,g=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},v=function(e,t){return f(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=v(this,e);if(t)return t[1]},has:function(e){return!!v(this,e)},set:function(e,t){var a=v(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,i){var c=e((function(e,r){o(e,c,t,"_i"),e._t=t,e._i=m++,e._l=void 0,null!=r&&l(r,a,e[i],e)}));return r(c.prototype,{delete:function(e){if(!s(e))return!1;var a=n(e);return!0===a?g(u(this,t)).delete(e):a&&d(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=n(e);return!0===a?g(u(this,t)).has(e):a&&d(a,this._i)}}),c},def:function(e,t,a){var r=n(i(t),!0);return!0===r?g(e).set(t,a):r[e._i]=a,e},ufstore:g}},cWnB:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),i=a("TSYQ"),s=a.n(i),o=a("q1tI"),l=a.n(o),c=a("vUet"),d=a("dbZe"),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.variant,o=e.size,u=e.active,f=e.className,p=e.block,m=e.type,g=e.as,h=Object(n.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),v=Object(c.b)(a,"btn"),b=s()(f,v,u&&"active",v+"-"+i,p&&v+"-block",o&&v+"-"+o);if(h.href)return l.a.createElement(d.a,Object(r.a)({},h,{as:g,ref:t,className:s()(b,h.disabled&&"disabled")}));t&&(h.ref=t),g||(h.type=m);var y=g||"button";return l.a.createElement(y,Object(r.a)({},h,{className:b}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},t.a=u},eMsz:function(e,t,a){"use strict";var r,n=a("emib"),i=a("Wadk")(0),s=a("IYdN"),o=a("N+BI"),l=a("k5Iv"),c=a("SGlo"),d=a("BjK0"),u=a("O1i0"),f=a("O1i0"),p=!n.ActiveXObject&&"ActiveXObject"in n,m=o.getWeak,g=Object.isExtensible,h=c.ufstore,v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(d(e)){var t=m(e);return!0===t?h(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return c.def(u(this,"WeakMap"),e,t)}},y=e.exports=a("94Pd")("WeakMap",v,b,c,!0,!0);f&&p&&(l((r=c.getConstructor(v,"WeakMap")).prototype,b),o.NEED=!0,i(["delete","has","get","set"],(function(e){var t=y.prototype,a=t[e];s(t,e,(function(t,n){if(d(t)&&!g(t)){this._f||(this._f=new r);var i=this._f[e](t,n);return"set"==e?this:i}return a.call(this,t,n)}))})))},ykqd:function(e,t,a){},zTTH:function(e,t,a){"use strict";var r=a("P8UN"),n=a("Wadk")(6),i="findIndex",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(i)}}]);
//# sourceMappingURL=component---src-pages-index-js-83298ce366342f0f207d.js.map