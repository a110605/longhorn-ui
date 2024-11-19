import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Popover, Icon, Button, Tooltip } from 'antd'
import styles from './Header.less'
import Menus from './Menu'
import longhornLogo from '../../assets/images/longhorn-logo.svg'
import darkLogo from '../../assets/images/dark2.svg'
import lightLogo from '../../assets/images/light2.svg'

function Header({ isNavbar, menuPopoverVisible, location, switchMenuPopover }) {
  const [light, setLightMode] = useState(true)
  const [icon, setIcon] = useState(lightLogo)
  const menusProps = {
    location,
    isNavbar,
    switchMenuPopover,
  }

  const themeTooltip = !light ? 'dark mode' : 'light mode'
  const themeClick = () => {
    if (light) {
      // eslint-disable-next-line no-undef
      DarkReader.enable({
        brightness: 100,
        contrast: 100,
        sepia: 25,
      })
      setIcon(darkLogo)
    } else {
      // eslint-disable-next-line no-undef
      DarkReader.disable()
      setIcon(lightLogo)
    }
    setLightMode(!light)
  }

  return (
    <div className={styles.header}>
      <Row>
        <Col className={styles.logoCol} lg={4} md={5} sm={8} xs={12}>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={longhornLogo} alt="LONGHORN" />
          </div>
        </Col>
        <Col lg={0} md={0} sm={16} xs={12}>
          {isNavbar ? <div className={styles.popupMenu}>
              <Popover placement="bottomLeft" onVisibleChange={switchMenuPopover} visible={menuPopoverVisible} overlayClassName={styles.popovermenu} trigger="click" content={<Menus {...menusProps} />}>
                <div className={styles.button}>
                  <Icon type="bars" />
                </div>
              </Popover>
            </div> : ''}
        </Col>
        <Col className={styles.menuCol} lg={20} md={19} sm={0} xs={0}>
          <Menus {...menusProps} />
            <Button type="link" shape="circle" onClick={themeClick} style={{ height: 'inherit' }}>
               <Tooltip placement="top" title={themeTooltip}>
                <img className={styles.themeLogo} src={icon} alt="theme" />
               </Tooltip>
            </Button>
        </Col>
      </Row>
    </div>
  )
}

Header.propTypes = {
  isNavbar: PropTypes.bool,
  location: PropTypes.object,
  menuPopoverVisible: PropTypes.bool,
  switchMenuPopover: PropTypes.func,
}

export default Header
