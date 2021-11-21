import { Carousel, Layout } from 'antd';
import dayjs from 'dayjs';
import Image from 'next/image';
import { ReactElement } from 'react';

const { Footer } = Layout;

export default function AntFooter(): ReactElement {
  return (
    <Footer className="mt-8 text-center">
      <h3 className="uppercase text-center pb-8">As featured in</h3>
      <div className="max-w-3xl mx-auto">
        <ul className="hidden lg:flex flex-wrap flex-row justify-center md:justify-between items-center">
          <li>
            <a
              href="https://weareparking.org/general/custom.asp?page=40under40_2016winner"
              target="_blank"
              rel="noopener noreferrer nofollow"
              title="National Parking Association"
            >
              <Image
                quality={75}
                src="/staticmyapp/npa-min.png"
                alt="National Parking Association"
                width={140}
                height={61}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.washingtonpost.com/lifestyle/travel/parking-tickets-boot-travel/2020/09/23/00788332-f8f6-11ea-89e3-4b9efa36dc64_story.html"
              target="_blank"
              rel="noopener noreferrer nofollow"
              title="The Washington Post"
            >
              <Image
                quality={75}
                src="/staticmyapp/twp-logo.png"
                alt="The Washington Post"
                width={200}
                height={31}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.forbes.com/sites/elainepofeldt/2018/11/30/by-easing-the-pain-of-airport-parking-they-built-a-million-dollar-two-man-business/#2028b5b50493"
              target="_blank"
              rel="noopener noreferrer nofollow"
              title="Forbes"
            >
              <Image
                quality={75}
                src="/staticmyapp/forbes.png"
                alt="Forbes"
                width={100}
                height={27}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.inc.com/melanie-curtin/resumes-dont-help-you-hire-innovative-people-but-this-does-hint-teslas-doing-it.html"
              target="_blank"
              rel="noopener noreferrer nofollow"
              title="Inc."
            >
              <Image
                quality={75}
                src="/staticmyapp/inc.png"
                alt="Inc."
                width={100}
                height={35}
              />
            </a>
          </li>
        </ul>
        <div className="lg:hidden">
          <Carousel
            autoplay
            dots={false}
            effect="fade"
            vertical={true}
            useCSS
            centerMode
            lazyLoad="progressive"
            className="overflow-hidden md:overflow-visible"
          >
            <div className="flex flex-col justify-center items-center">
              <a
                href="https://weareparking.org/general/custom.asp?page=40under40_2016winner"
                target="_blank"
                rel="noopener noreferrer nofollow"
                title="National Parking Association"
              >
                <Image
                  quality={75}
                  src="/staticmyapp/npa-min.png"
                  alt="National Parking Association"
                  width={140}
                  height={61}
                />
              </a>
            </div>
            <div className="flex flex-col justify-center items-center">
              <a
                href="https://www.washingtonpost.com/lifestyle/travel/parking-tickets-boot-travel/2020/09/23/00788332-f8f6-11ea-89e3-4b9efa36dc64_story.html"
                target="_blank"
                rel="noopener noreferrer nofollow"
                title="The Washington Post"
              >
                <Image
                  quality={75}
                  src="/staticmyapp/twp-logo.png"
                  alt="The Washington Post"
                  width={200}
                  height={31}
                />
              </a>
            </div>
            <div className="flex flex-col justify-center items-center">
              <a
                href="https://www.forbes.com/sites/elainepofeldt/2018/11/30/by-easing-the-pain-of-airport-parking-they-built-a-million-dollar-two-man-business/#2028b5b50493"
                target="_blank"
                rel="noopener noreferrer nofollow"
                title="Forbes"
              >
                <Image
                  quality={75}
                  src="/staticmyapp/forbes.png"
                  alt="Forbes"
                  width={100}
                  height={27}
                />
              </a>
            </div>
            <div className="flex flex-col justify-center items-center">
              <a
                href="https://www.inc.com/melanie-curtin/resumes-dont-help-you-hire-innovative-people-but-this-does-hint-teslas-doing-it.html"
                target="_blank"
                rel="noopener noreferrer nofollow"
                title="Inc."
              >
                <Image
                  quality={75}
                  src="/staticmyapp/inc.png"
                  alt="Inc."
                  width={100}
                  height={35}
                />
              </a>
            </div>
          </Carousel>
        </div>
        <div className="my-12">
          <a
            href="https://www.bbb.org/us/ca/san-francisco/profile/parking-facilities/on-air-parking-1116-880678/#sealclick"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Image
              quality={100}
              src="https://seal-goldengate.bbb.org/seals/blue-seal-200-42-bbb-880678.png"
              alt="BBB Rating: A+"
              width={200}
              height={42}
            />
          </a>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 place-items-center my-8 w-32 mx-auto">
          <div className="flex flex-col items-center">
            <a
              href="https://www.facebook.com/ParkOnAir/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              title="Our Facebook"
            >
              <Image
                quality={75}
                src="/staticmyapp/icon-face.svg"
                alt="Our Facebook"
                width={25}
                height={20}
              />
            </a>
          </div>

          <div className="flex flex-col items-center">
            <a
              href="https://www.instagram.com/onairparking/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              title="Our Instagram"
            >
              <Image
                quality={75}
                src="/staticmyapp/icon-insta.svg"
                alt="Our Instagram"
                width={25}
                height={20}
              />
            </a>
          </div>

          <div className="flex flex-col items-center my-4">
            <a
              href="https://twitter.com/onairparking"
              target="_blank"
              rel="noopener noreferrer nofollow"
              title="Our Twitter"
            >
              <Image
                quality={75}
                src="/staticmyapp/icon-twitter.svg"
                alt="Our Twitter"
                width={25}
                height={20}
              />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-4 divide-x divide-secondary my-8 max-w-xs mx-auto">
          <a
            title="Our sitemap"
            className="text-secondary hover:text-secondary hover:underline underline"
          >
            Sitemap
          </a>

          <a
            title="Be our partner"
            className="text-secondary hover:text-secondary hover:underline underline"
          >
            Partner
          </a>

          <a
            title="Read our terms of service"
            className="text-secondary hover:text-secondary hover:underline underline"
          >
            Terms
          </a>

          <a
            title="Read our privacy policy"
            className="text-secondary hover:text-secondary hover:underline underline"
          >
            Privacy
          </a>
        </div>
        <p>
          © Copyright On Air Parking {dayjs().format('YYYY')}
          <br />
          1.0.7708.18077 2/7/2021
        </p>
      </div>
    </Footer>
  );
}
