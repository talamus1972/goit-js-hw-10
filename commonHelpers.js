import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as b,i as S}from"./assets/vendor-651d7991.js";let y;const g=document.querySelector("#datetime-picker"),o=document.querySelector("button");o.setAttribute("disabled","true");o.classList.add("start");const i=document.querySelector("span[data-days]"),l=document.querySelector("span[data-hours]"),m=document.querySelector("span[data-minutes]"),h=document.querySelector("span[data-seconds]"),f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]),e[0]<f.defaultDate&&(o.setAttribute("disabled","true"),S.show({position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",messageSize:"16px",messageLineHeight:"1.5",message:"Please choose a date in the future"})),o.removeAttribute("disabled"),y=e[0]}};b(g,f);o.addEventListener("click",()=>{o.setAttribute("disabled","true");const e=n=>n.toString().padStart(2,"0"),c=setInterval(()=>{const n=y,d=Date.now(),u=n-d,t=C(u);i.textContent=`${t.days}`,l.textContent=`${t.hours}`,m.textContent=`${t.minutes}`,h.textContent=`${t.seconds}`;const s=e(t.days),a=e(t.hours),r=e(t.minutes),p=e(t.seconds);i.textContent=s,l.textContent=a,m.textContent=r,h.textContent=p,t.days+t.hours+t.minutes+t.seconds===0&&(clearInterval(c),console.log("Interval cleared"))},1e3)});function C(e){const t=Math.floor(e/864e5),s=Math.floor(e%864e5/36e5),a=Math.floor(e%864e5%36e5/6e4),r=Math.floor(e%864e5%36e5%6e4/1e3);return{days:t,hours:s,minutes:a,seconds:r}}
//# sourceMappingURL=commonHelpers.js.map
