import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="side-navbar-container">
              <h1>Left Navbar Menu</h1>
              <ul className="left-ul-container">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-container">
              <h1>Content</h1>
              <p>Lorem ipsum</p>
            </div>
          )}
          {showRightNavbar && (
            <div className="side-navbar-container">
              <h1>Right Navbar</h1>
              <ul className="right-ul-container">
                <li>Ad 1</li>
                <li>Ad 2</li>
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
