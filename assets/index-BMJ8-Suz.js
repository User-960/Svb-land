(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(s){if(s.ep)return;s.ep=!0;const e=n(s);fetch(s.href,e)}})();const c=document.querySelector("#app"),g=document.querySelector(".header");document.querySelector(".footer");const u=document.querySelector(".loader");function d(r,t,n=0){return r.length>t&&window.innerWidth>n?`${r.slice(0,t)}…`:r}function h(r){r.classList.contains("blackout")?r.classList.remove("blackout"):r.classList.add("blackout")}const v={md:768},i={breakpoints:v},m="data:image/svg+xml,%3csvg%20width='46'%20height='46'%20viewBox='0%200%2046%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M44%2023C44%2034.598%2034.598%2044%2023%2044C11.402%2044%202%2034.598%202%2023C2%2011.402%2011.402%202%2023%202C34.598%202%2044%2011.402%2044%2023Z'%20stroke='%232D9CDB'%20stroke-width='4'/%3e%3cpath%20d='M13.462%2019.64C14.518%2019.64%2015.34%2019.904%2015.928%2020.432C16.516%2020.96%2016.81%2021.824%2016.81%2023.024V29H14.128V23.582C14.128%2022.43%2013.552%2021.854%2012.4%2021.854C12.124%2021.854%2011.842%2021.896%2011.554%2021.98C11.266%2022.064%2011.044%2022.166%2010.888%2022.286L10.852%2029H8.18799V16.292H10.888V20.306C11.716%2019.862%2012.574%2019.64%2013.462%2019.64Z'%20fill='white'/%3e%3cpath%20d='M19.0659%2026.462H21.6759V29H19.0659V26.462Z'%20fill='white'/%3e%3cpath%20d='M24.4111%2029V15.9922H26.9687L30.5723%2026.0557L34.2812%2015.9922H36.5664V29H34.8437V18.418L31.2578%2028.1299H29.4736L25.9932%2018.3916V29H24.4111Z'%20fill='white'/%3e%3c/svg%3e",_="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.62%2010.79C8.06%2013.62%2010.38%2015.93%2013.21%2017.38L15.41%2015.18C15.68%2014.91%2016.08%2014.821%2016.43%2014.94C17.55%2015.311%2018.76%2015.51%2020%2015.51C20.55%2015.51%2021%2015.96%2021%2016.51V20C21%2020.55%2020.55%2021%2020%2021C10.61%2021%203%2013.391%203%204C3%203.45%203.45%203%204%203H7.5C8.05%203%208.5%203.45%208.5%204C8.5%205.25%208.7%206.45%209.07%207.57C9.18%207.92%209.1%208.31%208.82%208.59L6.62%2010.79Z'%20fill='%235BC12C'/%3e%3c/svg%3e",b="data:image/svg+xml,%3csvg%20width='22'%20height='14'%20viewBox='0%200%2022%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%201H22M0%207H22M0%2013H22'%20stroke='%23F2994A'%20stroke-width='2'/%3e%3c/svg%3e";class p{constructor(){this.render(),this.addEventListeners(),this.startInstructions()}toggleSubMenu(t){t.classList.contains("open")?t.classList.remove("open"):t.classList.add("open")}toggleMenu(t){t.classList.contains("open")?(t.classList.remove("open"),setTimeout(()=>{t.classList.add("close")},200)):(t.classList.add("open"),t.classList.remove("close"))}addEventListeners(){const t=document.querySelectorAll(".header__menu-item--sub"),n=document.querySelectorAll(".header__submenu-item--sub"),l=document.querySelectorAll("[data-val]"),s=document.querySelector(".header__burger");t.forEach(e=>{e.addEventListener("click",a=>{a.stopPropagation();const o=e.querySelector(".header__menu-wrapper");this.toggleSubMenu(o),this.toggleSubMenu(e)})}),n.forEach(e=>{e.addEventListener("click",a=>{a.stopPropagation();const o=e.querySelector(".header__submenu-wrapper");this.toggleSubMenu(o),this.toggleSubMenu(e)})}),s.addEventListener("click",e=>{e.stopPropagation();const a=document.querySelector(".header__menu");this.toggleMenu(a),h(c)}),l.forEach(e=>{e.getAttribute("data-val")&&e.getAttribute("data-val").length>31?e.innerHTML=d(e.getAttribute("data-val"),31,i.breakpoints.md):e.innerHTML=d(e.getAttribute("data-val"),1e3,i.breakpoints.md),window.addEventListener("resize",a=>{a.stopPropagation(),e.getAttribute("data-val")&&e.getAttribute("data-val").length>31?e.innerHTML=d(e.getAttribute("data-val"),31,i.breakpoints.md):e.innerHTML=d(e.getAttribute("data-val"),1e3,i.breakpoints.md)})}),c.addEventListener("click",e=>{e.stopPropagation(),document.querySelectorAll(".open").forEach(a=>{a.classList.contains("open")&&(a.classList.remove("open"),a.classList.contains("header__menu")&&setTimeout(()=>{a.classList.add("close")},200),h(c))})})}startInstructions(){const t=document.querySelector(".header__menu");window.innerWidth<=i.breakpoints.md&&t.classList.add("close")}render(){const t=`
      <div class="container">
        <div class="header__inner">
          <a class="header__logo" href="#" target="_blank">
            <img src="${m}" alt="logo" width='46' height='46' />
          </a>

          <menu class='header__menu'>
            <li class='header__menu-item'>
              <a href="#" target="_blank" class="header__menu-link">
                <div class="header__menu-link-text">Главная</div>
              </a>
            </li>

            <li class='header__menu-item header__menu-item--sub'>
              <div class="header__menu-link header__menu-link--sub">
                <div class="header__menu-link-text" data-val='Основное меню'>Основное меню</div>
              </div>
            
              <div class='header__menu-wrapper'>
                <ul class='header__submenu'>
                  <li class='header__submenu-item'>
                    <a href="#" target="_blank" class="header__submenu-link">
                      <div class="header__submenu-link-text" data-val='Заказать вёрстку'>Заказать вёрстку</div>
                    </a>
                  </li>

                  <li class='header__submenu-item'>
                    <a href="#" target="_blank" class="header__submenu-link">
                      <div class="header__submenu-link-text" data-val='Отправить макет на проверку'>Отправить макет на проверку</div>
                    </a>
                  </li>

                  <li class='header__submenu-item'>
                    <a href="#" target="_blank" class="header__submenu-link">
                      <div class="header__submenu-link-text" data-val='Хочу работать у вас'>Хочу работать у вас</div>
                    </a>
                  </li>

                  <li class='header__submenu-item header__submenu-item--sub last-item'>
                    <div class="header__submenu-link header__submenu-link--sub">
                      <div class="header__submenu-link-text" data-val='Есть предложение по работе с клиентами'>Есть предложение по работе с клиентами</div>
                    </div>
                    <div class='header__submenu-wrapper'>
                      <ul class='header__submenu-sub'>
                        <li class='header__submenu-sub-item first-item'>
                          <a href="#" target="_blank" class="header__submenu-sub-link">
                            <div data-val='У меня есть оффер'>У меня есть оффер</div>
                          </a>
                        </li>
                        
                        <li class='header__submenu-sub-item last-item'>
                          <a href="#" target="_blank" class="header__submenu-sub-link">
                            <div data-val='Сделать партнёром'>Сделать партнёром</div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            <li class='header__menu-item'>
              <a href="#" target="_blank" class="header__menu-link">
                <div class="header__menu-link-text" data-val='Наши сервисы'>Наши сервисы</div>
              </a>
            </li>

            <li class='header__menu-item'>
              <a href="#" target="_blank" class="header__menu-link">
                <div class="header__menu-link-text" data-val='Контакты'>Контакты</div>
              </a>
            </li>
          </menu>

          <a class='header__phone header__phone--desktop' href="tel:+13212223333">
            <img src="${_}" class="phone" alt="phone" width='24' height='24' />
            <div class='header__phone-number'>+1 (321) 222 - 33 -33</div>
          </a>

          <div class='header__nav'>
            <a class='header__phone header__phone--mobile' href="tel:+13212223333">
              <img src="${_}" class="phone" alt="phone" width='24' height='24' />
              <div class='header__phone-number'>+1 (321) 222 - 33 -33</div>
            </a>

            <button class="header__burger">
              <img src="${b}" class="burger" alt="burger" width='22' height='12' />
            </button>
          <div>
        </div>
      </div>
    `;g.innerHTML=t}}class f{constructor(){this.render()}handlerClear(){u.innerHTML=""}render(){const t=`
      <div class="loader__inner">
        <img class="loader__img" src="${m}" width="46" height="46" alt="Loading..."/>
      </div>
    `;u.innerHTML=t}}document.addEventListener("DOMContentLoaded",()=>{(()=>{const t=new f;new p,setTimeout(()=>{t.handlerClear()},2e3)})()});
