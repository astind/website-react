import Image from 'next/image'
import shared from '../styles/style.module.css'

const Footer = () => {
  return (
    <footer className={shared.footer}>
        Built using Next.js {' '}
        <span className={shared.logo}>
          <Image src="/favicon.ico" alt="Vercel Logo" width={16} height={16} />
        </span>
      </footer>
  )
}

export default Footer