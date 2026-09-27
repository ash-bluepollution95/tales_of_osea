import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'


const HeroSection = () => {
  return (
    <section className='relative isolate flex flex-1 flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-24'>

      {/* Glass card */}
      <div className='w-full max-w-3xl rounded-3xl border border-border/60 bg-background/70 bg-gradient-to-b from-white/[0.06] to-transparent p-8 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_24px_48px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-12'>
        <div className='bg-muted mx-auto flex w-fit items-center gap-2.5 rounded-full border px-2 py-1 text-sm'>
          <Badge>Fan-Made</Badge>
          <span className='text-muted-foreground'>Video Series</span>
        </div>

        <h1 className='mt-6 text-3xl leading-[1.29167] text-balance sm:text-4xl lg:text-5xl'>

          <span className='relative'>
            Tales of Osea
            <svg
              width='223'
              height='12'
              viewBox='0 0 223 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='absolute inset-x-0 bottom-0 w-full translate-y-1/2 max-sm:hidden'
            >
              <path
                d='M1.11716 10.428C39.7835 4.97282 75.9074 2.70494 114.894 1.98894C143.706 1.45983 175.684 0.313587 204.212 3.31596C209.925 3.60546 215.144 4.59884 221.535 5.74551'
                stroke='url(#paint0_linear_10365_68643)'
                strokeWidth='2'
                strokeLinecap='round'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_10365_68643'
                  x1='18.8541'
                  y1='3.72033'
                  x2='42.6487'
                  y2='66.6308'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='var(--primary)' />
                  <stop offset='1' stopColor='var(--primary-foreground)' />
                </linearGradient>
              </defs>
            </svg>
          </span>{' '}

        </h1>

        <p className='text-muted-foreground mt-4'>
          A machinima series utilizing Final Fantasy XIV. Mirroring the concept of multiversal selves, fictionalizing the world and feelings of those that may have once lived before.
		      </p>

              <p className='text-muted-foreground mt-4'>
          Much like the sundered worlds of Ancient Etheryis, the cracks of other worlds start to show - and the differences start flooding in.  The cracks however, are not just an Ascian playing head games.
				       </p>
		  <p className='text-muted-foreground mt-4'>
		  These cracks are caused by an Ancient book from the Osenayans themselves. A book filled with incantations, memories and spells.    </p>
		  
		    <p className='text-muted-foreground mt-4'> Future, past and present from every universe start to converge - causing chaos beyond. 
        </p>



       
      </div>

    </section>
  )
}

export default HeroSection
