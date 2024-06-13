import Image from 'next/image';
import smashing from 'public/images/home/group_sesh.jpeg';
import summit from 'public/images/home/random.jpg';
import middlefinger from 'public/images/home/middle_finger.jpg';
import breathing from 'public/images/home/breathing_exercise.jpg';
import pregnant from 'public/images/home/yoga_solo.jpeg';
import there from 'public/images/home/there.jpg';
import amazonLogo from 'public/amazon.png';
import { PreloadResources } from 'app/preload';

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <section>
      <PreloadResources />
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        hey, I'm shibani 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm passionate about yoga, sustainability, fitness, and overall wellbeing. I currently `}
        work
        {` as a Program Manager at `}
        <span className="not-prose">
          <Badge href="https://www.linkedin.com/in/shibani-s-83815a1b1/">
            <Image
              alt="amazon logo"
              width="13"
              height="11"
              aria-label="Amazon logo"
              className="mr-1 inline-flex"
              src={amazonLogo}
            />{' '}
            <span className="pl-1">Amazon</span>
          </Badge>
        </span>
        .
      </p>
      <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        <div className="relative h-40">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={summit}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative sm:row-span-2 row-span-1">
          <Image
            alt="Me flipping people off"
            src={middlefinger}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative">
          <Image
            alt="breathing exercise with my fitness group"
            src={breathing}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Pregnant during yoga"
            src={pregnant}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={there}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={smashing}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I regularly host yoga sessions, retreats, and experiences. Drop your
          email below if you're interested!
        </p>
      </div>

      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/shibani_shekar/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">follow me</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://tally.so/r/3E1Mvo"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">get email updates</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
