(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const l=document.querySelector("#app"),_=document.querySelector(".header");document.querySelector(".footer");function d(r,a,n=0){return r.length>a&&window.innerWidth>n?`${r.slice(0,a)}…`:r}function c(r){r.classList.contains("blackout")?r.classList.remove("blackout"):r.classList.add("blackout")}const m={md:768},o={breakpoints:m},v="data:image/svg+xml,%3csvg%20width='46'%20height='46'%20viewBox='0%200%2046%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M44%2023C44%2034.598%2034.598%2044%2023%2044C11.402%2044%202%2034.598%202%2023C2%2011.402%2011.402%202%2023%202C34.598%202%2044%2011.402%2044%2023Z'%20stroke='%232D9CDB'%20stroke-width='4'/%3e%3cpath%20d='M13.462%2019.64C14.518%2019.64%2015.34%2019.904%2015.928%2020.432C16.516%2020.96%2016.81%2021.824%2016.81%2023.024V29H14.128V23.582C14.128%2022.43%2013.552%2021.854%2012.4%2021.854C12.124%2021.854%2011.842%2021.896%2011.554%2021.98C11.266%2022.064%2011.044%2022.166%2010.888%2022.286L10.852%2029H8.18799V16.292H10.888V20.306C11.716%2019.862%2012.574%2019.64%2013.462%2019.64Z'%20fill='white'/%3e%3cpath%20d='M19.0659%2026.462H21.6759V29H19.0659V26.462Z'%20fill='white'/%3e%3cpath%20d='M24.4111%2029V15.9922H26.9687L30.5723%2026.0557L34.2812%2015.9922H36.5664V29H34.8437V18.418L31.2578%2028.1299H29.4736L25.9932%2018.3916V29H24.4111Z'%20fill='white'/%3e%3c/svg%3e",h="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.62%2010.79C8.06%2013.62%2010.38%2015.93%2013.21%2017.38L15.41%2015.18C15.68%2014.91%2016.08%2014.821%2016.43%2014.94C17.55%2015.311%2018.76%2015.51%2020%2015.51C20.55%2015.51%2021%2015.96%2021%2016.51V20C21%2020.55%2020.55%2021%2020%2021C10.61%2021%203%2013.391%203%204C3%203.45%203.45%203%204%203H7.5C8.05%203%208.5%203.45%208.5%204C8.5%205.25%208.7%206.45%209.07%207.57C9.18%207.92%209.1%208.31%208.82%208.59L6.62%2010.79Z'%20fill='%235BC12C'/%3e%3c/svg%3e",g="data:image/svg+xml,%3csvg%20width='22'%20height='14'%20viewBox='0%200%2022%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%201H22M0%207H22M0%2013H22'%20stroke='%23F2994A'%20stroke-width='2'/%3e%3c/svg%3e";class b{constructor(){this.render(),this.addEventListeners()}toggleSubMenu(a){a.classList.contains("open")?a.classList.remove("open"):a.classList.add("open")}addEventListeners(){const a=document.querySelectorAll(".header__menu-item--sub"),n=document.querySelectorAll(".header__submenu-item--sub"),i=document.querySelectorAll("[data-val]"),t=document.querySelector(".header__burger");a.forEach(e=>{e.addEventListener("click",s=>{s.stopPropagation();const u=e.querySelector(".header__menu-wrapper");this.toggleSubMenu(u),this.toggleSubMenu(e)})}),n.forEach(e=>{e.addEventListener("click",s=>{s.stopPropagation();const u=e.querySelector(".header__submenu-wrapper");this.toggleSubMenu(u),this.toggleSubMenu(e)})}),t.addEventListener("click",e=>{e.stopPropagation();const s=document.querySelector(".header__menu");this.toggleSubMenu(s),c(l)}),i.forEach(e=>{e.getAttribute("data-val")&&e.getAttribute("data-val").length>31?e.innerHTML=d(e.getAttribute("data-val"),31,o.breakpoints.md):e.innerHTML=d(e.getAttribute("data-val"),1e3,o.breakpoints.md),window.addEventListener("resize",s=>{s.stopPropagation(),e.getAttribute("data-val")&&e.getAttribute("data-val").length>31?e.innerHTML=d(e.getAttribute("data-val"),31,o.breakpoints.md):e.innerHTML=d(e.getAttribute("data-val"),1e3,o.breakpoints.md)})}),l.addEventListener("click",e=>{e.stopPropagation(),document.querySelectorAll(".open").forEach(s=>{s.classList.contains("open")?(s.classList.remove("open"),c(l)):(s.classList.add("open"),c(l))})})}render(){const a=`
      <div class="container">
        <div class="header__inner">
          <a class="header__logo" href="#" target="_blank">
            <img src="${v}" alt="logo" width='46' height='46' />
          </a>

          <menu class='header__menu'>
            <li class='header__menu-item'>
              <a href="#" class="header__menu-link">
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
                    <a href="#" class="header__submenu-link">
                      <div class="header__submenu-link-text" data-val='Заказать вёрстку'>Заказать вёрстку</div>
                    </a>
                  </li>

                  <li class='header__submenu-item'>
                    <a href="#" class="header__submenu-link">
                      <div class="header__submenu-link-text" data-val='Отправить макет на проверку'>Отправить макет на проверку</div>
                    </a>
                  </li>

                  <li class='header__submenu-item'>
                    <a href="#" class="header__submenu-link">
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
                          <a href="#" class="header__submenu-sub-link">
                            <div data-val='У меня есть оффер'>У меня есть оффер</div>
                          </a>
                        </li>
                        
                        <li class='header__submenu-sub-item last-item'>
                          <a href="#" class="header__submenu-sub-link">
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
              <a href="#" class="header__menu-link">
                <div class="header__menu-link-text" data-val='Наши сервисы'>Наши сервисы</div>
              </a>
            </li>

            <li class='header__menu-item'>
              <a href="#" class="header__menu-link">
                <div class="header__menu-link-text" data-val='Контакты'>Контакты</div>
              </a>
            </li>
          </menu>

          <a class='header__phone header__phone--desktop' href="tel:+13212223333">
            <img src="${h}" class="phone" alt="phone" width='24' height='24' />
            <div class='header__phone-number'>+1 (321) 222 - 33 -33</div>
          </a>

          <div class='header__nav'>
            <a class='header__phone header__phone--mobile' href="tel:+13212223333">
              <img src="${h}" class="phone" alt="phone" width='24' height='24' />
              <div class='header__phone-number'>+1 (321) 222 - 33 -33</div>
            </a>

            <button class="header__burger">
              <img src="${g}" class="burger" alt="burger" width='22' height='12' />
            </button>
          <div>
        </div>
      </div>
    `;_.innerHTML=a}}document.addEventListener("DOMContentLoaded",()=>{(()=>{new b})()});
