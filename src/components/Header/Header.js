import { ROOT_HEADER } from '../../constants'
import './Header.module.scss'
import iconLogo from '../../assets/logo.svg'
import iconPhone from '../../assets/phone.svg'
import iconBurger from '../../assets/burger.svg'

class Header {
	constructor() {
		this.render()
		this.addEventListeners()
	}

	toggleSubMenu(menu) {
		if (menu.classList.contains('open')) {
			menu.classList.remove('open')
		} else {
			menu.classList.add('open')
		}
	}

	addEventListeners() {
		const subMenuItems = document.querySelectorAll('.header__menu-item--sub')
		const subSubMenuItems = document.querySelectorAll('.header__submenu-item--sub')
		const burger = document.querySelector('.header__burger')

		subMenuItems.forEach(item => {
			item.addEventListener('click', event => {
				event.stopPropagation()
				const submenu = item.querySelector('.header__menu-wrapper')
				this.toggleSubMenu(submenu)
				this.toggleSubMenu(item)
			})
		})

		subSubMenuItems.forEach(item => {
			item.addEventListener('click', event => {
				event.stopPropagation()
				const submenu = item.querySelector('.header__submenu-wrapper')
				this.toggleSubMenu(submenu)
				this.toggleSubMenu(item)
			})
		})

		burger.addEventListener('click', event => {
			event.stopPropagation()
			const menu = document.querySelector('.header__menu')
			this.toggleSubMenu(menu)
		})
	}

	render() {
		const html = `
      <div class="container">
        <div class="header__inner">
          <a class="header__logo" href="#" target="_blank">
            <img src="${iconLogo}" alt="logo" width='46' height='46' />
          </a>

          <menu class='header__menu'>
            <li class='header__menu-item'>
              <a href="#" class="header__menu-link">
                <span>Главная</span>
              </a>
            </li>

            <li class='header__menu-item header__menu-item--sub'>
              <span class="header__menu-link">
                Основное меню
              </span>
            
              <div class='header__menu-wrapper'>
              <ul class='header__submenu'>
                <li class='header__submenu-item'>
                  <a href="#" class="header__submenu-link">
                    <span>Заказать вёрстку</span>
                  </a>
                </li>

                <li class='header__submenu-item'>
                  <a href="#" class="header__submenu-link">
                    <span>Отправить макет на проверку</span>
                  </a>
                </li>

                <li class='header__submenu-item'>
                  <a href="#" class="header__submenu-link">
                    <span>Хочу работать у вас</span>
                  </a>
                </li>

                <li class='header__submenu-item header__submenu-item--sub last-item'>
                  <span class="header__submenu-link">Есть предложение по работе с кл...</span>
                  <div class='header__submenu-wrapper'>
                    <ul class='header__submenu-sub'>
                      <li class='header__submenu-sub-item first-item'>
                        <a href="#" class="header__submenu-sub-link">
                          <span>У меня есть оффер</span>
                        </a>
                      </li>
                      <li class='header__submenu-sub-item last-item'>
                        <a href="#" class="header__submenu-sub-link">
                          <span>Сделать партнёром</span>
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
                <span>Наши сервисы</span>
              </a>
            </li>

            <li class='header__menu-item'>
              <a href="#" class="header__menu-link">
                <span>Контакты</span>
              </a>
            </li>
          </menu>

          <div class='header__nav'>
            <a class='header__phone' href="tel:+13212223333">
              <img src="${iconPhone}" class="phone" alt="phone" width='24' height='24' />
              <span class='header__phone-number'>+1 (321) 222 - 33 -33</span>
            </a>

            <button class="header__burger">
              <img src="${iconBurger}" class="burger" alt="burger" width='22' height='12' />
            </button>
          <div>
        </div>
      </div>
    `

		ROOT_HEADER.innerHTML = html
	}
}

export const headerComponent = new Header()
