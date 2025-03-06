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

		subMenuItems.forEach(item => {
			item.addEventListener('click', event => {
				event.stopPropagation()
				console.log(1)
				const submenu = item.querySelector('.header__submenu')
				this.toggleSubMenu(submenu)
			})
		})
	}

	render() {
		const html = `
      <div class="container">
        <div class="header__inner">
          <a href="#" target="_blank">
            <img src="${iconLogo}" class="header__logo" alt="logo" width='46' height='46' />
          </a>

          <menu class='header__menu'>
            <li class='header__menu-item'>
              <a href="#" class="header__menu-link">
                Главная
              </a>
            </li>

            <li class='header__menu-item header__menu-item--sub'>
              Основное меню
              <ul class='header__submenu'>
                <li class='header__submenu-item'>
                  <a href="#" class="header__menu-link">
                    Заказать вёрстку
                  </a>
                </li>

                <li class='header__submenu-item'>
                  <a href="#" class="header__menu-link">
                    Отправить макет на проверку
                  </a>
                </li>

                <li class='header__submenu-item'>
                  <a href="#" class="header__menu-link">
                    Хочу работать у вас
                  </a>
                </li>

                <li class='header__submenu-item'>
                  <span>Есть предложение по работе с кл...<span>
                  <ul class='header__submenu-sub'>
                    <li class='header__submenu-item'>
                      <a href="#" class="header__menu-link">
                        У меня есть оффер
                      </a>
                    </li>
                    <li class='header__submenu-item'>
                      <a href="#" class="header__menu-link">
                        Сделать партнёром
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li class='header__menu-item'>
              <a href="#" class="header__menu-link">
                Наши сервисы
              </a>
            </li>

            <li class='header__menu-item'>
              <a href="#" class="header__menu-link">
                Контакты
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
