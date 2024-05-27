import {
  navMenuContainer,
  menuLeft,
  menuRight,
  navbar,
  navbarMobile,
  textLogo,
  logo,
  leftMenuXl,
} from '@/components/styles/navigationStyle'
import Link from 'next/link'
import Menu from './Menu'
import Image from 'next/image'
import SearchBar from './SearchBar'
import NavIcon from './NavIcon'

const Navbar = () => {
  return (
    <div className={navbar}>
      {/* MOBILE */}
      <div className={navbarMobile}>
        <Link href='/'>
          <Image src='/heart.png' alt='face' width={45} height={45} />
          <div className={textLogo}>Noi</div>
        </Link>
        <Menu />
      </div>

      {/* {BIGGER SCREEN} */}
      <div className={navMenuContainer}>
        {/* LEFT */}
        <div className={menuLeft}>
          <Link href='/' className={logo}>
            <Image src='/heart.png' alt='face' width={45} height={45} />
            {/* <Image src='/face-icon.svg' alt='face' width={35} height={35} /> */}
            <div className={textLogo}>Noi</div>
          </Link>
          <div className={leftMenuXl}>
            <Link href='/'>Homepage</Link>
            <Link href='/'>Shop</Link>
            <Link href='/'>Deals</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className={menuRight}>
          <SearchBar />
          <NavIcon />
        </div>
      </div>
    </div>
  )
}

export default Navbar
