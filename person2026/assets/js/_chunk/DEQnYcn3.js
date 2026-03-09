/*!
 * jQuery method fScroll v1.0
 * Copyright 2023 Yusuke Fukunaga
 * Require for jQuery v1.7 or above
 * @param offset
 * @param speed
 * @param ease
 * @param callback
 */(function(o){o.fScroll=function(l,a){var c={$container:o(window),offset:0,offset_custom:void 0,duration:!1,ease:!1,complete:void 0,jump:!1,autoKill:!1},t,n=void 0;if(o(document).height()-o(window).height(),t=o.extend({},c,a),l!=="#"){n=o(l).offset().top;let e=0;const f=parseInt(o("html").css("scroll-padding-top"));isNaN(f)||(e=f);const s=parseInt(o(l).css("scroll-margin-top"));!isNaN(s)&&s!==0&&(e=s),e&&(t.offset+=e)}else l=0,n=0;if(typeof t.jump=="function"){const e=t.jump(l);Math.abs(n-o(window).scrollTop())>e&&(n>o(window).scrollTop()?o("html, body").scrollTop(n-e):o("html, body").scrollTop(n+e))}return gsap.to(t.$container,{duration:Math.min(t.duration+Math.abs(o(window).scrollTop()-n)*4e-4,1.8),scrollTo:{y:l,offsetY:typeof t.offset_custom=="function"?t.offset_custom(l):t.offset,autoKill:t.autoKill},ease:t.ease,onComplete:()=>{typeof t.complete=="function"&&t.complete(l)}}),!1},o.fn.fScroll=function(l,a,c,t){var n=this;n.each(function(){var e=o(this);e.on("click.fScroll",function(f){var s=e.attr("href"),i=s.substr(s.indexOf("#"));i!=="#"&&o(i)&&!o(i)[0]||(f.preventDefault?f.preventDefault():f.returnValue=!1,f.stopPropagation?f.stopPropagation():f.cancelBubble=!0,o.fScroll(i,l,a,c,t))})})}})(jQuery);
