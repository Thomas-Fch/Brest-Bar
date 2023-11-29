import Image from 'next/image'
import "./_navbar.scss"
import cheers from '../../assets/Cheers.svg'

const Nav = () => {
  return (
    <nav>
      <div className='SiteTitle'>
      <Image 
      alt="bières qui s'entre choc  "
      src={cheers}
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}/>
      <h3>
        <span>
        Brest
          </span>Brest bar
        </h3>
      </div>
      </nav>
  )
}

export default Nav