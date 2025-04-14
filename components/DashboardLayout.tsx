import React from 'react';

const DashboardLayout = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-950 to-gray-800 min-h-screen py-10 px-5">
      <div className="max-w-[1400px] mx-auto grid grid-cols-[1fr_2fr_1fr] gap-6">

        {/* Left Tall Card */}
        <aside className="flex flex-col overflow-hidden rounded-[22px] border border-dark-400 bg-gradient-to-b from-[#0a0915]  via-[#0d0c1d] to-[#1d1b3b] lg:col-span-1 lg:row-span-3 max-lg:hidden">
          <div className="h-[350px] w-full bg-cover bg-center"><img src="tech.png" alt="" /></div>

          <h1 className="global-16-semibold md:global-20-semibold xl:global-24-semibold px-2.5 pb-5 text-center text-white sm:px-5">
            <span className="text-primary-1">Regular updates and new content</span> — fresh tutorials, lessons, and resources.
          </h1>
        </aside>


       {/* Middle: Two Stacked Cards */}
<div className="flex flex-col gap-6 h-[600px]"> {/* Adjust the height here */}
  <div className="flex h-full w-full flex-col justify-between gap-2.5 overflow-hidden rounded-[22px] bg-gradient-to-r from-[#0a0915] via-[#0d0c1d] to-[#1d1b3b] pt-5">
    <h1 className="global-16-semibold md:global-20-semibold xl:global-24-semibold max-w-[500px] self-center px-6 text-center text-white">
      <span className="text-primary-1">Project-based learning </span>— build a portfolio that proves your skills.
    </h1>
    <figure className="flex w-full justify-between">
      <img src="interact-1.webp" alt="interact-1" width="292" height="124" className="rotate-[5.681deg]" />
      <img src="interact-2.webp" alt="interact-2" width="292" height="124" className="rotate-[-2.479deg]" />
    </figure>
  </div>

  <div className="flex h-full w-full flex-col justify-between gap-2.5 overflow-hidden rounded-[22px] bg-gradient-to-r from-[#0a0915] via-[#0d0c1d] to-[#1d1b3b] pt-5">
    <h1 className="global-16-semibold md:global-20-semibold xl:global-24-semibold max-w-[500px] self-center px-6 text-center text-white">
      <span className="text-primary-1">Project-based learning </span>— build a portfolio that proves your skills.
    </h1>
    <figure className="flex w-full justify-between">
      <img src="interact-1.webp" alt="interact-1" width="292" height="124" className="rotate-[5.681deg]" />
      <img src="interact-2.webp" alt="interact-2" width="292" height="124" className="rotate-[-2.479deg]" />
    </figure>
  </div>
</div>


        {/* Right Tall Card */}
        <aside className="relative flex flex-col rounded-[22px] border border-dark-400 bg-gradient-to-b from-[#0a0915]  via-[#0d0c1d] to-[#1d1b3b] pt-10 md:row-span-3 col-span-1 row-span-3 max-md:hidden md:max-w-[300px] " >
          <h1 className="global-16-semibold md:global-20-semibold xl:global-24-semibold px-2.5 text-center text-white sm:px-6"><span className="text-primary-1">Private Community </span>to connect, get feedback, and stay accountable.</h1><figure className="flex h-full items-end"><img src="world.png" alt="world" width="348" height="348" /></figure></aside>
      </div>

    {/* Bottom Two Cards */}
<div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

<aside className="flex flex-col overflow-hidden bg-gradient-to-r from-[#0a0915] via-[#0d0c1d] to-[#1d1b3b] rounded-xl h-[350px] pt-10"> {/* Adjust the height here */}
  <header className="flex flex-col justify-between gap-4 px-[30px] md:flex-row lg:items-start">
    <h1 className="text-white text-lg md:text-2xl max-w-[500px]">
      <span className="text-primary-1">Personalized learning path </span>
      with hands-on projects, real-world examples, and expert guidance.
    </h1>
  </header>
  <div className="h-[250px] w-full bg-cover bg-bottom">
    <img src="/path.png" alt="Learning path visual" className="h-full w-full" />
  </div>
</aside>

<aside className="flex flex-col overflow-hidden bg-gradient-to-r from-[#0a0915] via-[#0d0c1d] to-[#1d1b3b] rounded-xl h-[350px] pt-10"> {/* Adjust the height here */}
  <header className="flex flex-col justify-between gap-4 px-[30px] md:flex-row lg:items-start">
    <h1 className="text-white text-lg md:text-2xl max-w-[500px]">
      <span className="text-primary-1">Personalized learning path </span>
      with hands-on projects, real-world examples, and expert guidance.
    </h1>
  </header>
  <div className="h-[250px] w-full bg-cover bg-bottom">
    <img src="/path.png" alt="Learning path visual" className="h-full w-full" />
  </div>
</aside>

</div>

    </div>
  );
};

export default DashboardLayout;
