import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bluesky } from "@/components/ui/svgs/bluesky";

const HeroSection = () => {
  return (
  
	<section>
	<Card className="mx-auto w-full max-w-3xl text-center transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/15">
          <CardHeader> <CardTitle><h1 className='mt-6 text-3xl leading-[1.29167] text-balance sm:text-4xl lg:text-5xl'>

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

        </h1>    </CardTitle>  </CardHeader>
 <CardContent className="space-y-1">
        <div className='bg-muted mx-auto flex w-fit items-center gap-2.5 rounded-full border px-2 py-1 text-sm'>
          <Badge>Fan-Made</Badge>
          <span className='text-muted-foreground'>Video Series</span>
        </div>

        

        <p className='text-muted-foreground mt-4'>
          A machinima series utilizing Final Fantasy XIV. Mirroring the concept of multiversal selves, fictionalizing the world and feelings of those that may have once lived before.
		      </p>

              <p className='text-muted-foreground mt-4'>
          Much like the sundered worlds of Ancient Etheryis, the visions of other worlds start to show - and the differences start flooding in.  These visions however, are not just an Ascian playing head games.
				       </p>
		  <p className='text-muted-foreground mt-4'>
		  These events and visions are caused by an Ancient book from the Osenayans themselves. A book filled with incantations, memories and spells. Future, past and present from every universe start to converge - causing chaos beyond.    </p>
		  
	


           <div className="mt-6 flex justify-center space-x-4">
  <a
    href="https://bsky.app/profile/duskfallcrew.bsky.social"
    className="text-muted-foreground hover:text-foreground transition-colors"
    aria-label="Follow us on Bluesky"
  >
    <Bluesky className="h-5 w-5" />
  </a>
  <a
    href="https://discord.gg/gxD8XcNzAg"
    className="text-muted-foreground hover:text-foreground transition-colors"
    aria-label="Join us on Discord"
  >
    <img src="/Discord-Symbol-Blurple.svg" alt="Discord" className="h-5 w-5" />
  </a>
  <a
    href="https://www.threads.com/@duskfallcrew"
    className="text-muted-foreground hover:text-foreground transition-colors"
    aria-label="Connect with us on Threads"
  >
    <img src="/threads-logo-white.svg" alt="Threads" className="h-5 w-5" />
  </a>
</div>

	    <p className='text-muted-foreground mt-4'> 
        Disclaimer: The story within is a ficitonalized version of aspects of being a dissociative identity disorder system. There is no intention of romanticizing or diminishing the medical aspects of mental health, or things around the subject. More information on this is covered under the disclaimers, up in the nagivation menu. Feel free to connect if you have any questions or concerns. </p>
       
      </CardContent>
        </Card>

	 </section>
  )
}

export default HeroSection
