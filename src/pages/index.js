import React, { useState } from 'react'
import CardComponent from '../components/CardComponent'
import StepCard from '../components/StepCard'
import WhyChooseCard from '../components/WhyChooseCard'
import ExploreMore from '../components/ExploreMore'

const technologies = [{}]
const steps = [
  {
    step: 'Step 1',
    title: 'Resume Screening',
    description:
      'Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.'
  },
  {
    step: 'Step 2',
    title: 'Video Interview',
    description:
      'Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.'
  },
  {
    step: 'Step 3',
    title: 'Technical Evaluation',
    description:
      'Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.'
  },
  {
    step: 'Step 4',
    title: 'Application Review',
    description:
      'Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.'
  },
  {
    step: 'Step 5',
    title: 'Lets get to work',
    description:
      'Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.'
  }
]

const journeySteps = [
  {
    imgSrc: '/assets/one.svg',
    imgAlt: 'one',
    title: 'Find your next star performer.',
    description:
      'Explore the vast Zwilt marketplace to find the candidate that meets your needs.',
    bgColor: 'bg-pewter',
    imgProfileSrc: '/assets/team-profile.svg',
    imgProfileAlt: 'team-profile'
  },
  {
    imgSrc: '/assets/two.svg',
    imgAlt: 'two',
    title: 'Evaluate to your heart’s content.',
    description:
      'Assess the candidate through work history, transparent tests and video interviews.',
    bgColor: 'bg-orange-2',
    imgProfileSrc: '/assets/team2.svg',
    imgProfileAlt: 'team2'
  },
  {
    imgSrc: '/assets/three.svg',
    imgAlt: 'three',
    title: 'Start building your team.',
    description:
      'Onboard your candidate right away and start creating the next big thing.',
    bgColor: 'bg-white-2',
    imgProfileSrc: '/assets/team3.svg',
    imgProfileAlt: 'team3'
  }
]

const whyChooseData = [
  {
    imgSrc: '/assets/onboard.svg',
    imgAlt: 'onboarding',
    title: 'Onboard without the risk.',
    details: [
      'We pick the best for you to select.',
      'Thousands of vetted candidates in dozens of categories.',
      'Risk-free resource swapping for the best fit.'
    ]
  },
  {
    imgSrc: '/assets/image2.svg',
    imgAlt: 'image2',
    title: 'An open book.',
    details: [
      'Easy and transparent one-to-one chat with candidates.',
      'Simple and convenient payment methods.',
      'Review past ratings.'
    ]
  },
  {
    imgSrc: '/assets/image3.svg',
    imgAlt: 'image3',
    title: 'Stay in the loop.',
    details: [
      'Track your staff activity down to every minute with screenshots.',
      'Comprehensive timesheet data to process payments.',
      'Create projects to organize and assign tasks more effectively.'
    ]
  }
]

const Home = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [showText, setShowText] = useState(false)
  const [inputValue, setInputValue] = useState('Looking for design |')

  const handleMouseEnter = () => {
    setIsHovered(true)
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  const handleChange = event => {
    setInputValue(event.target.value)
  }
  return (
    <div>
      <section className='mt-36'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-secondary text-center'>
          Finding the right fit
          <img
            src='/assets/zwilt-tba.gif'
            alt='zwilt'
            className='inline-block h-12'
          />
          has <br className='md:block hidden' /> never been easier.
        </h2>

        <p className='text-center text-lg sm:text-xl text-secondary mx-auto md:max-w-lg my-8'>
          With our rigorous pre-vetting process, you'll never have to worry
          about finding the ideal candidate ever again.
        </p>
        <form
          onSubmit={e => e.preventDefault()}
          className='flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0'
        >
          <input
            type='text'
            value={inputValue}
            onChange={handleChange}
            placeholder='Looking for design |'
            className='border border-tertiary rounded-2xl h-16 md:h-20 w-full md:max-w-lg px-6 font-medium'
          />
          <div className='h-16 md:h-20 w-16 md:w-20 rounded-2xl bg-sunflower flex justify-center items-center -ml-0 md:-ml-6 cursor-pointer'>
            <img src='/assets/arrow.svg' alt='arrow' className='h-6 w-6' />
          </div>
        </form>
        <div className='mx-auto w-full md:w-3/4 bg-pearl rounded-2xl py-4 px-4 sm:px-8 mt-8'>
          <div className='rounded-2xl flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-mint w-full md:w-fit mx-auto p-2'>
            <p className='bg-foam rounded-2xl px-4 py-2 sm:px-8 sm:py-3 font-semibold cursor-pointer'>
              IT & Development
            </p>
            <p className='rounded-2xl px-4 py-2 sm:px-8 sm:py-3 cursor-pointer'>
              Design and Creative
            </p>
          </div>
          <div className='grid grid-cols-1 text-center md:grid-cols-3 place-items-center mt-8 gap-4 md:gap-0  md:text-left'>
            <div>
              <p className='text-steel mb-4'>Python Developer</p>
              <p className='text-steel mb-4'>Shopify Developer</p>
              <p className='text-secondary mb-4 font-medium'>
                MERN Stack Developer
              </p>
              <p className='text-steel mb-4'>Full Stack Developer</p>
            </div>
            <div>
              <p className='text-steel mb-4'>Data Scientist</p>
              <p className='text-steel mb-4'>Front End Developer</p>
              <p className='text-steel mb-4'>Shopify Developer</p>
              <p className='text-steel mb-4'>Python Developer</p>
            </div>
            <div>
              <p className='text-steel mb-4'>Shopify Developer</p>
              <p className='text-steel mb-4'>Python Developer</p>
              <p className='text-steel mb-4'>Full Stack Developer</p>
              <p className='text-secondary mb-4 font-medium'>Explore More</p>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-24'>
        <img src='/assets/Union.svg' alt='union' className='w-full' />
        <div className='bg-pewter clip-diagonal -mt-12 pb-48'>
          <h2 className='text-center font-bold text-3xl sm:text-4xl md:text-5xl pt-40 md:pt-60 md:max-w-4xl mx-auto text-secondary px-4'>
            Your one-stop marketplace for finding the talent your business
            needs.
          </h2>
          <div className='px-4 sm:px-8 md:px-16 mt-20 flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10'>
            <div className='flex-1'>
              <h4 className='text-xl sm:text-2xl text-secondary font-medium md:max-w-sm'>
                Find Dev and IT professionals to scale your business.
              </h4>
              <div className='flex flex-wrap mt-6 gap-4'>
                <div className='flex items-center gap-2'>
                  <img src='/assets/medal.svg' alt='medals' />
                  <p className='text-secondary opacity-80'>989 Skills</p>
                </div>
                <div className='flex items-center gap-2'>
                  <img src='/assets/box.svg' alt='box' />
                  <p className='text-secondary opacity-80'>45 Sub-Categories</p>
                </div>
                <div className='flex items-center gap-2'>
                  <img src='/assets/avatar.svg' alt='avatar' />
                  <p className='text-secondary opacity-80'>1011 Profiles</p>
                </div>
              </div>
            </div>
            <div className='rounded-lg bg-white p-8 flex-1'>
              <h2 className='text-secondary font-medium mb-2'>
                IT & Development
              </h2>
              <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4'>
                <div className='flex flex-col items-center justify-center'>
                  <img src='/assets/shopify.svg' alt='shopify' />
                  <p className='mt-2 text-center'>Shopify Developer</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <img src='/assets/magneto.svg' alt='magneto' />
                  <p className='mt-2 text-center'>Magento Developer</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <img src='/assets/data.svg' alt='data scientist' />
                  <p className='mt-2 text-center'>Data Scientist</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <img src='/assets/webflow.svg' alt='webflow' />
                  <p className='mt-2 text-center'>Webflow Developer</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <img src='/assets/dotnet.svg' alt='dotnet' />
                  <p className='mt-2 text-center'>Dot Net Developer</p>
                </div>
                <div className='flex'>
                  <img
                    src='/assets/forward.svg'
                    alt='forward-arrow'
                    className='self-start'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='px-4 sm:px-8 md:px-16 mt-10 flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10'>
            <div className='flex-1'>
              <h4 className='text-xl sm:text-2xl text-secondary font-medium md:max-w-sm'>
                Explore Creative individuals with a keen eye for detail.
              </h4>
              <div className='flex flex-wrap mt-6 gap-4'>
                <div className='flex items-center gap-2'>
                  <img src='/assets/medal.svg' alt='medals' />
                  <p className='text-secondary opacity-80'>989 Skills</p>
                </div>
                <div className='flex items-center gap-2'>
                  <img src='/assets/box.svg' alt='box' />
                  <p className='text-secondary opacity-80'>45 Sub-Categories</p>
                </div>
                <div className='flex items-center gap-2'>
                  <img src='/assets/avatar.svg' alt='avatar' />
                  <p className='text-secondary opacity-80'>1011 Profiles</p>
                </div>
              </div>
            </div>
            <div className='rounded-lg bg-white p-8 flex-1'>
              <h2 className='text-secondary font-medium mb-2'>
                Design & Creative
              </h2>
              <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4'>
                <div className='flex'>
                  <img
                    src='/assets/backward.svg'
                    alt='backward'
                    className='self-start'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <img src='/assets/ux.svg' alt='UX' />
                  <p className='mt-2 text-center'>
                    UX <br /> Designer
                  </p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <img src='/assets/adobe.svg' alt='adobe' />
                  <p className='mt-2 text-center'>Graphics Designer</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <img src='/assets/illusai.svg' alt='illusai' />
                  <p className='mt-2 text-center'>Illustration Artist</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <img src='/assets/unreal.svg' alt='unreal' />
                  <p className='mt-2 text-center'>Unreal Engine</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <img src='/assets/cinema.svg' alt='cinema' />
                  <p className='mt-2 text-center'>
                    Cinema <br /> 4D
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='px-4 sm:px-8 md:px-16 mt-10 grid grid-cols-1 md:grid-cols-2 space-y-10 md:space-y-0 items-center'>
            {/* <ExploreMore /> */}
            <div className='flex items-center space-x-4'>
              <div className='h-20 w-20 bg-secondary rounded-3xl flex items-center justify-center'>
                <img
                  src='/assets/white-forward-arrow.svg'
                  alt='white-forward-arrow'
                />
              </div>
              <p className='text-secondary font-medium text-xl'>Explore More</p>
            </div>
            <div>
              <p className='text-secondary font-bold text-xl'>
                30 more{' '}
                <span className='text-secondary opacity-80 font-medium'>
                  to explore
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-secondary clip-diagonal-2 -mt-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 py-20 md:py-60 px-4 sm:px-8 md:px-16 gap-10'>
          <div>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white'>
              How it worked <br /> for Jason
              <img
                src='/assets/jason.svg'
                alt='Jason'
                className='inline-block mx-2 hover-jason'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              at
              <img src='/assets/groove.svg' alt='groove' />
            </h2>
            <p className='text-lg sm:text-xl text-white mt-8 md:max-w-md'>
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since.
            </p>
            <div className='flex items-center gap-5 mt-8'>
              <div className='h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-white flex items-center justify-center'>
                <img src='/assets/prev.svg' alt='arrow' />
              </div>
              <div className='h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-white flex items-center justify-center'>
                <img src='/assets/next.svg' alt='arrow' />
              </div>
            </div>
          </div>
          <div>
            <div className='flex flex-col'>
              <div className='flex gap-4'>
                <div className='h-24 w-24 sm:h-32 sm:w-32 rounded-3xl bg-purpletint flex items-center justify-center image-container'>
                  {isHovered ? (
                    <img
                      src='/assets/jason.svg'
                      alt='Jason'
                      className='transition-all'
                    />
                  ) : (
                    <img
                      src='/assets/groove-2.svg'
                      alt='groove'
                      className='transition-all'
                    />
                  )}
                </div>
                <div>
                  <h3 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-white'>
                    Jason Makki
                  </h3>
                  <p className='text-grey-1 font-medium my-3'>
                    Engineer at GROOVE
                  </p>
                  <p className='text-grey-1 font-medium'>San Francisco</p>
                </div>
              </div>
              <p className='text-lg sm:text-xl text-white mt-10 md:max-w-md'>
                Zwilt enabled us to deliver on time and they’ve been heavy
                hitters in our corner since. Zwilt enabled us to deliver on time
                and they’ve been heavy hitters in our corner since. Zwilt
                enabled us to deliver on time and they’ve been heavy hitters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='mx-4 sm:mx-8 md:mx-16 mt-16 md:mt-32'>
        <h2 className='text-secondary text-3xl sm:text-4xl md:text-5xl font-bold md:max-w-lg'>
          How we ensure you’re in good hands.
        </h2>
        <p className='text-lg sm:text-xl text-brown-1 opacity-80 mt-6 md:mt-10 md:max-w-2xl'>
          With our comprehensive screening process, we hand-pick highly skilled
          candidates so you can onboard them in a matter of days.
        </p>
        <div className='mt-10 md:mt-16'>
          {steps.map((step, index) => (
            <CardComponent key={index} step={step.step} title={step.title}>
              {step.description}
            </CardComponent>
          ))}
        </div>
      </section>

      <section className='mt-16 md:mt-32 mx-4 sm:mx-8 md:mx-16'>
        <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl text-secondary text-center mb-8'>
          Start your journey today.
        </h2>
        {journeySteps.map((step, index) => (
          <StepCard
            key={index}
            imgSrc={step.imgSrc}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
            bgColor={step.bgColor}
            imgAlt={step.imgAlt}
            imgProfileSrc={step.imgProfileSrc}
            imgProfileAlt={step.imgProfileAlt}
          />
        ))}
      </section>

      <section className='my-16 md:my-48 px-4 sm:px-8 md:px-16 flex items-center h-auto md:h-screen overflow-x-auto smooth-scroll'>
        <div className='flex flex-col md:flex-row md:items-center'>
          <div className='flex-shrink-0 mr-0 md:mr-28 mb-12 md:mb-0'>
            <h2 className='text-secondary font-bold text-3xl sm:text-4xl md:text-5xl leading-tight'>
              Why choose <br className='md:block hidden' /> Zwilt?
            </h2>
            <p className='text-secondary opacity-80 text-xl md:text-2xl mt-8'>
              We take complex hiring <br className='md:block hidden' />{' '}
              processes - and simplify them. <br className='md:block hidden' />{' '}
              Connecting you to the world’s <br className='md:block hidden' />{' '}
              highly qualified talent pool.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-8'>
            {whyChooseData.map((item, index) => (
              <WhyChooseCard
                key={index}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                title={item.title}
                details={item.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <section className='bg-white-2 pt-16 pb-32'>
        <h2 className='text-secondary font-bold text-5xl text-center mb-24'>
          Frequently asked questions
        </h2>
        <div className='border border-grey-3 flex'>
          <p className='text-secondary font-semibold text-xl py-8 px-16 border-r border-r-grey-3'>
            General
          </p>
          <p className='py-8 mx-auto text-secondary text-xl opacity-80'>
            I want to work part-time, is that possible
          </p>
        </div>
        <p className='py-8 text-secondary text-xl opacity-80 text-center border-b border-grey-3'>
          How long are the average projects?
        </p>
        <p className='py-8 text-secondary text-xl opacity-80 text-center border-b border-grey-3 bg-grey-4'>
          How does the payment works?
        </p>
        <p className='py-8 text-secondary text-xl opacity-80 text-center border-b border-grey-3'>
          How much can I earn?
        </p>
        <div className='border-b border-grey-3 flex'>
          <p className='text-secondary font-semibold text-xl py-8 px-16 border-r border-r-grey-3 bg-grey-4'>
            General
          </p>
          <p className='text-secondary font-semibold text-xl py-8 px-16 border-r border-r-grey-3'>
            Joining Process
          </p>
          <p className='py-8 mx-auto text-secondary text-xl opacity-80'>
            I want to work part-time, is that possible
          </p>
        </div>
        <p className='py-8 text-secondary text-xl opacity-80 text-center border-b border-grey-3'>
          How long are the average projects?
        </p>
        <p className='py-8 text-secondary text-xl opacity-80 text-center border-b border-grey-3'>
          How long are the average projects?
        </p>
        <p className='py-8 text-secondary text-xl opacity-80 text-center border-b border-grey-3'>
          How much can I earn?
        </p>
      </section> */}
      <section className='bg-white-2 pt-16 pb-32'>
        <h2 className='text-secondary font-bold text-4xl md:text-5xl text-center mb-12 md:mb-24'>
          Frequently asked questions
        </h2>
        <div className='border border-grey-3 flex flex-col md:flex-row'>
          <p className='text-secondary font-semibold text-lg md:text-xl py-4 md:py-8 px-4 md:px-16 border-b md:border-r border-grey-3'>
            General
          </p>
          <p className='py-4 md:py-8 mx-auto text-secondary text-lg md:text-xl opacity-80'>
            I want to work part-time, is that possible
          </p>
        </div>
        <p className='py-4 md:py-8 text-secondary text-lg md:text-xl opacity-80 text-center border-b border-grey-3'>
          How long are the average projects?
        </p>
        <p className='py-4 md:py-8 text-secondary text-lg md:text-xl opacity-80 text-center border-b border-grey-3 bg-grey-4'>
          How does the payment work?
        </p>
        <p className='py-4 md:py-8 text-secondary text-lg md:text-xl opacity-80 text-center border-b border-grey-3'>
          How much can I earn?
        </p>
        <div className='border-b border-grey-3 flex flex-col md:flex-row'>
          <p className='text-secondary font-semibold text-lg md:text-xl py-4 md:py-8 px-4 md:px-16 border-b md:border-r border-grey-3 bg-grey-4'>
            General
          </p>
          <p className='text-secondary font-semibold text-lg md:text-xl py-4 md:py-8 px-4 md:px-16 border-b md:border-r border-grey-3'>
            Joining Process
          </p>
          <p className='py-4 md:py-8 mx-auto text-secondary text-lg md:text-xl opacity-80'>
            I want to work part-time, is that possible
          </p>
        </div>
        <p className='py-4 md:py-8 text-secondary text-lg md:text-xl opacity-80 text-center border-b border-grey-3'>
          How long are the average projects?
        </p>
        <p className='py-4 md:py-8 text-secondary text-lg md:text-xl opacity-80 text-center border-b border-grey-3'>
          How long are the average projects?
        </p>
        <p className='py-4 md:py-8 text-secondary text-lg md:text-xl opacity-80 text-center border-b border-grey-3'>
          How much can I earn?
        </p>
      </section>

      <footer className='bg-secondary clip-diagonal -mt-16 pt-24'>
        <div className='bg-primary clip-diagonal-2 mx-4 md:mx-16 py-12 md:py-16 flex flex-col items-center justify-center'>
          <h2 className='text-white text-3xl md:text-5xl font-semibold md:max-w-2xl text-center'>
            Need a job done, and done well? Get started
          </h2>
          <div className='bg-secondary h-16 w-16 md:h-20 md:w-20 rounded-3xl flex items-center justify-center mt-8'>
            <img src='/assets/arrow-down-white.svg' alt='arrow' />
          </div>
        </div>
        <div className='flex flex-col md:flex-row mt-32 pb-32 px-4 md:px-16 gap-16'>
          <div>
            <img
              src='/assets/logo.svg'
              alt='brand-logo'
              className='w-32 md:w-auto'
            />
            <p className='text-white opacity-80 text-lg md:text-xl mt-6 md:max-w-sm'>
              We take complex hiring processes - and simplify them. Connecting
              you to the world’s highly qualified talent pool.
            </p>
            <p className='text-white text-lg md:text-xl font-semibold opacity-40 mt-16'>
              LINKS AND REDIRECTS
            </p>
            <div className='flex flex-col md:flex-row items-center gap-4 mt-8'>
              <div className='bg-dark-2 rounded-3xl w-full md:w-56 h-12 md:h-16 flex items-center justify-center'>
                <p className='text-pewter font-medium text-lg md:text-xl'>
                  Hire now
                </p>
              </div>
              <div className='bg-dark-2 rounded-3xl w-full md:w-56 h-12 md:h-16 flex items-center justify-center'>
                <p className='text-pewter font-medium text-lg md:text-xl'>
                  Apply now
                </p>
              </div>
            </div>
          </div>
          <div className='w-full'>
            <h2 className='text-white font-semibold text-3xl md:text-5xl md:max-w-2xl'>
              Connecting the right people to the right businesses.
            </h2>
            <div className='flex flex-wrap justify-between mt-16 md:mt-24 gap-8'>
              <div>
                <p className='text-white opacity-40 font-semibold text-lg md:text-xl mb-4 md:mb-8'>
                  PLATFORM
                </p>
                <p className='text-white font-medium text-lg md:text-xl mb-4 md:mb-8'>
                  Find Work
                </p>
                <p className='text-white font-medium text-lg md:text-xl mb-4 md:mb-8'>
                  Find Talent
                </p>
                <p className='text-white font-medium text-lg md:text-xl mb-4 md:mb-8'>
                  Categories
                </p>
                <p className='text-white font-medium text-lg md:text-xl mb-4 md:mb-8'>
                  About Us
                </p>
              </div>
              <div>
                <p className='text-white opacity-40 font-semibold text-lg md:text-xl mb-4 md:mb-8'>
                  CATEGORIES
                </p>
                <p className='text-white font-medium text-lg md:text-xl mb-4 md:mb-8'>
                  Data Science
                </p>
                <p className='text-white font-medium text-lg md:text-xl mb-4 md:mb-8'>
                  IT & Networking
                </p>
                <p className='text-white font-medium text-lg md:text-xl mb-4 md:mb-8'>
                  Web & Mobile
                </p>
              </div>
              <div>
                <p className='text-white opacity-40 font-semibold text-lg md:text-xl mb-4 md:mb-8'>
                  HELP
                </p>
                <p className='text-white font-medium text-lg md:text-xl mb-4 md:mb-8'>
                  FAQ’s
                </p>
                <p className='text-white font-medium text-lg md:text-xl mb-4 md:mb-8'>
                  Contact Us
                </p>
              </div>
              <div>
                <p className='text-white opacity-40 font-semibold text-lg md:text-xl mb-4 md:mb-8'>
                  GET IN TOUCH @
                </p>
                <p className='text-white font-medium text-lg md:text-xl mb-4 md:mb-8'>
                  Instagram
                </p>
                <p className='text-white font-medium text-lg md:text-xl mb-4 md:mb-8'>
                  LinkedIn
                </p>
                <p className='text-white font-medium text-lg md:text-xl mb-4 md:mb-8'>
                  Twitter
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 md:px-16 py-3 gradient-border flex flex-col md:flex-row items-center justify-between'>
          <p className='text-white font-medium mb-4 md:mb-0'>
            All rights reserved by Zwilt
          </p>
          <div>
            <span className='text-white opacity-60 font-medium mr-4 md:mr-8 underline'>
              Privacy Policy
            </span>
            <span className='text-white opacity-60 font-medium underline'>
              Terms and Conditions
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
