var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequire7bc7=n);var o=n("eWCmQ");function i(e,t){const r=Math.random()>.3;let n={position:e,delay:t};return new Promise(((e,t)=>{r&&e(n),t(n)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();let t=Number(e.currentTarget.delay.value),r=Number(e.currentTarget.step.value),n=Number(e.currentTarget.amount.value);for(let e=1;e<=n;e+=1)i(e,t).then((({position:e,delay:t})=>{setTimeout((()=>{o.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)}),t)})).catch((({position:e,delay:t})=>{setTimeout((()=>{o.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}),t)})),t+=r}));
//# sourceMappingURL=03-promises.63d96349.js.map
