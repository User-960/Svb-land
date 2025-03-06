import { ROOT_HEADER } from '../../constants'
import './Header.module.scss'
import iconLogo from '../../assets/logo.svg'
import iconPhone from '../../assets/phone.svg'

const links = ['Главная', 'Основное меню', 'Наши сервисы', 'Контакты']

class Header {
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

            <li class='header__menu-item'>
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
            </menu>

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

          </ul>

          <a class='header__phone' href="#">
            <img src="${iconPhone}" class="phone" alt="phone" width='24' height='24' />
            <span class='header__phone-number'>+1 (321) 222 - 33 -33</span>
          </a>
        </div>
      </div>
    `

		ROOT_HEADER.innerHTML = html
	}
}

export const headerComponent = new Header()
