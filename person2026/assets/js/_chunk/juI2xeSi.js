/*!
 * jQuery fInview v2.0
 * Copyright 2021 Yusuke Fukunaga
 * Contributing Author: Yusuke Fukunaga
 */class s{setOptions(t){const i=this;let e={root:null,rootMargin:"-18% 50%",threshold:0,infinite:!1,enterClass:!0,enter_callback:()=>{},leave_callback:()=>{}};i.option=$.extend({},e,t)}initialize(){const t=this,i=a=>{Array.prototype.slice.call(a).forEach(o=>{o.isIntersecting?(t.option.enterClass&&o.target.classList.add("fInview--enter"),t.option.enter_callback(o),t.option.infinite||t.observer.unobserve(o.target)):t.option.infinite&&t.option.leave_callback(o)})};t.observer=new IntersectionObserver(i,t.option),Array.prototype.slice.call(t.$target).forEach(a=>{t.observer.observe(a)})}constructor(t,i){const e=this;e.$target=t,e.setOptions(i),e.initialize()}}(function(r){r.fInview=s})($);
