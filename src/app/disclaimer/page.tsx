import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans ">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Disclaimer
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
           This is NOT to cause system discourse, nor cause harm with in the system community as a whole - NOR with Final Fantasy XIV. This is an entertainment series we are planning, and it's a ROUGH fictionalized version of what some of our system feels.. 

What one system feels doesn't mean it's everyone's choice nor every experience. We're not here to diagnose, nor lead anyone astray. 
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
         
        </div>
      </main>
    </div>
  );
}
