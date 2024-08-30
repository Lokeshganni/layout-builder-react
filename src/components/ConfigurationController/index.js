import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div className="configuration-controller-main-container">
          <h1>Layout</h1>
          <ul className="configuration-controller-ul-container">
            <li>
              <input
                onChange={event => onToggleShowContent(event)}
                id="content"
                type="checkbox"
                checked={showContent}
              />
              <label htmlFor="content">Content</label>
            </li>
            <li>
              <input
                id="leftNavbar"
                type="checkbox"
                checked={showLeftNavbar}
                onChange={event => onToggleShowLeftNavbar(event)}
              />
              <label htmlFor="leftNavbar">Left Navbar</label>
            </li>
            <li>
              <input
                id="rightNavbar"
                type="checkbox"
                checked={showRightNavbar}
                onChange={event => onToggleShowRightNavbar(event)}
              />
              <label htmlFor="rightNavbar">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
