import './Header.module.scss'
import { ROOT_HEADER, ROOT_APP } from '../../constants'
import { cutString, toggleBlackout } from '../../utils'
import { variables } from '../../helpers'
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
		const textsCut = document.querySelectorAll('[data-val]')
		const burger = document.querySelector('.header__burger')

		subMenuItems.forEach(item => {
			item.addEventListener('click', e => {
				e.stopPropagation()
				const submenu = item.querySelector('.header__menu-wrapper')
				this.toggleSubMenu(submenu)
				this.toggleSubMenu(item)
			})
		})

		subSubMenuItems.forEach(item => {
			item.addEventListener('click', e => {
				e.stopPropagation()
				const submenu = item.querySelector('.header__submenu-wrapper')
				this.toggleSubMenu(submenu)
				this.toggleSubMenu(item)
			})
		})

		burger.addEventListener('click', e => {
			e.stopPropagation()
			const menu = document.querySelector('.header__menu')
			this.toggleSubMenu(menu)
			toggleBlackout(ROOT_APP)
		})

		textsCut.forEach(item => {
			if (item.getAttribute('data-val') && item.getAttribute('data-val').length > 31) {
				item.innerHTML = cutString(item.getAttribute('data-val'), 31, variables.breakpoints.md)
			} else {
				item.innerHTML = cutString(item.getAttribute('data-val'), 1000, variables.breakpoints.md)
			}
			window.addEventListener('resize', e => {
				e.stopPropagation()
				if (item.getAttribute('data-val') && item.getAttribute('data-val').length > 31) {
					item.innerHTML = cutString(item.getAttribute('data-val'), 31, variables.breakpoints.md)
				} else {
					item.innerHTML = cutString(item.getAttribute('data-val'), 1000, variables.breakpoints.md)
				}
			})
		})

		ROOT_APP.addEventListener('click', e => {
			e.stopPropagation()
			document.querySelectorAll('.open').forEach(item => {
				if (item.classList.contains('open')) {
					item.classList.remove('open')
					toggleBlackout(ROOT_APP)
				} else {
					item.classList.add('open')
					toggleBlackout(ROOT_APP)
				}
			})
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
            <img src="${iconPhone}" class="phone" alt="phone" width='24' height='24' />
            <div class='header__phone-number'>+1 (321) 222 - 33 -33</div>
          </a>

          <div class='header__nav'>
            <a class='header__phone header__phone--mobile' href="tel:+13212223333">
              <img src="${iconPhone}" class="phone" alt="phone" width='24' height='24' />
              <div class='header__phone-number'>+1 (321) 222 - 33 -33</div>
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
