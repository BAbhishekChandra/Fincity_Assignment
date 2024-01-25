import {RiInstagramFill} from 'react-icons/ri'
import {FaLinkedin} from 'react-icons/fa'
import {IoIosMail} from 'react-icons/io'
import {PiCopyrightLight} from 'react-icons/pi'

// https://res.cloudinary.com/dl1iui8u1/image/upload/v1706117396/bg-small-image_i93ecs.png

const Contacts = () => {
  const Hello = 'mat '
  console.log(Hello)
  return (
    <div className="footer-container">
      <div className="footer-icons-container">
        <button type="button" className="custom-button">
          <RiInstagramFill className="footer-icons" aria-label="insta-icon" />
        </button>
        <button type="button" className="custom-button">
          <FaLinkedin className="footer-icons" aria-label="linkedin-icon" />
        </button>
        <button type="button" className="custom-button">
          <IoIosMail className="footer-icons" aria-label="mail-icon" />
        </button>
      </div>
      <p className="copyright-paragraph">
        Copyright <PiCopyrightLight /> 2024. All rights reserved.
      </p>
    </div>
  )
}

export default Contacts
