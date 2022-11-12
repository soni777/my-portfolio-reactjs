import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">
        <img
          className="logo"
          src="https://res.cloudinary.com/dd5n3kmqc/image/upload/v1668229920/8f62a04378c94da9a10f1e2ea794d456_zlzkmj.png"
          alt="logo"
        />
      </p>
      <ul className="nav-menu">
        <li>
          <a href="https://www.linkedin.com/in/sonica-anapu/">
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
              alt="Linked In"
            />
          </a>
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
            alt="Git Hub"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png"
            alt="Twitter"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
