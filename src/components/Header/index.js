import './index.css'

const Header = () => {
  const value = '0'
  console.log(value)

  return (
    <div className="header-container">
      <h1 className="name">Madelyn Torff</h1>
      <div>
        <button className="custom-button" type="button">
          About
        </button>
        <button className="custom-button" type="button">
          Products
        </button>
        <button className="custom-button" type="button">
          Contacts
        </button>
      </div>
    </div>
  )
}

export default Header
