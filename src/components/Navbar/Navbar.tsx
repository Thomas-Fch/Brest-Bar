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
        width: '28px',
        height: 'auto',
      }}/>
      <h3 className='c-GradientPink'>
        <span>
        Brest
          </span> bar
        </h3>
      </div>
      </nav>
  )
}

export default Nav