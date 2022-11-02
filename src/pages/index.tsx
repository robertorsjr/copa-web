import Image from "next/image";
import previewAppImage from '../assets/app-nlw-copa.png'
import logoImage from '../assets/logo.svg'
import avatarImage from '../assets/users-example.png'
import checkIcon from '../assets/check-icon.svg'

interface HomeProps {
  count: number
}

export default function Home({count}: HomeProps) {
  return (
    <div className='max-w-[1224px] h-screen mx-auto grid grid-cols-2 gap-28 items-center'>
      <main>
        <Image src={logoImage} alt='logo image' quality={100} />
        <h1  className='mt-14 text-white text-5xl font-bold leading-tight'>
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className='mt-10 flex items-center gap-2'>
          <Image src={avatarImage} alt='avatars' quality={100} />
          <strong className='text-gray-100 text-xl'>
            <span className='text-ignite-500'>+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form className='mt-10 flex gap-2'>
          <input
            type='text'
            required
            placeholder='Qual nome do seu bolão?'
            className='flex-1 px-6 py-4 rounded bg-gray-800 border-gray-600 text-sm'
          />
          <button
            className='bg-yellow-500 px-6 py-4 rounded font-bold text-gray-900 text-sm hover:bg-yellow-600'
            type='submit'>
            CRIAR MEU BOLÃO
          </button>
        </form>

        <p className='text-gray-300 mt-4 text-sm leading-relaxed '>
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀
        </p>

        <div className='mt-10 pt-10 border-t border-gray-600 flex justify-between items-center text-gray-100'>
          <div className='flex items-center gap-6'>
            <Image src={checkIcon} alt='check' quality={100} />
            <div className='flex flex-col'>
              <span className='font-bold text-2xl'>+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>

          <div className='w-px h-14 bg-gray-600'/>

          <div className='flex items-center gap-6'>
            <Image src={checkIcon} alt='check 2' quality={100} />
            <div className='flex flex-col'>
              <span className='font-bold text-2xl'>+192.847</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>

      </main>

      <Image src={previewAppImage} alt='app preview' quality={100} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()
  return {
    props: {
      count: data.count
    }
  }
}

