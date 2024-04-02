import Link from 'next/link'
import logo from '@/public/images/logo_web.png'
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cannabase">
      <Image className={'w-fit h-16 md:h-20'} src={logo} alt={'Logo'}></Image>
    </Link>
  )
}
