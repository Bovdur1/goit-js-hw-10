import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as u,i as l}from"./assets/vendor-651d7991.js";const s=document.querySelector("button[data-start]");s.disabled=!0;const m=document.querySelector("span[data-days]"),h=document.querySelector("span[data-hours]"),f=document.querySelector("span[data-minutes]"),p=document.querySelector("span[data-seconds]");let a=0;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0].getTime();e>Date.now()?(a=e,s.disabled=!1):l.error({message:"Please, choose a date in the future",messageColor:"#FFF",messageSize:"20px",backgroundColor:"#f54e59",position:"topRight"})}};u("#datetime-picker",y);function n(t){return String(t).padStart(2,"0")}function S(){s.disabled=!0;let t=0;const e=setInterval(()=>{if(t=a-Date.now(),t>0){let o=g(t);m.textContent=n(o.days),h.textContent=n(o.hours),f.textContent=n(o.minutes),p.textContent=n(o.seconds)}else clearInterval(e)},1e3)}s.addEventListener("click",S);function g(t){const r=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),i=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:c,minutes:d,seconds:i}}
//# sourceMappingURL=commonHelpers.js.map
