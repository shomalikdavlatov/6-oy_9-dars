import React from 'react'
import { Button } from './Button';
import { Text } from './Text';

export function Body() {
  return (
      <main>
          <section className="flex justify-between">
              <div className="flex flex-col gap-8.75 max-w-133">
                  <h1 className="font-medium text-[3.75rem]/[100%] ">
                      Navigating the digital landscape for success
                  </h1>
                  <p>
                      Our digital marketing agency helps businesses grow and
                      succeed online through a range of services including SEO,
                      PPC, social media marketing, and content creation.
                  </p>
                  <Button
                      name="Book a consultation"
                      classes="bg-[#191A23] text-[#FFFFFF]"
                  />
                  <button></button>
              </div>
              <img
                  src="./images/illustration.svg"
                  alt="illustration"
                  className="max-w-150"
              />
          </section>
          <section className="flex justify-between">
              <img
                  src="./images/company-logos/company-logo-1.svg"
                  alt="company-logo"
              />
              <img
                  src="./images/company-logos/company-logo-2.svg"
                  alt="company-logo"
              />
              <img
                  src="./images/company-logos/company-logo-3.svg"
                  alt="company-logo"
              />
              <img
                  src="./images/company-logos/company-logo-4.svg"
                  alt="company-logo"
              />
              <img
                  src="./images/company-logos/company-logo-5.svg"
                  alt="company-logo"
              />
              <img
                  src="./images/company-logos/company-logo-6.svg"
                  alt="company-logo"
              />
          </section>
          <section className="flex mt-35">
              <Text
                  name="Services"
                  textColor="#000000"
                  bgColor="#B9FF66"
                  fontSize="text-[2.5rem]"
              />
              <p className='w-145 ml-10'>
                  At our digital marketing agency, we offer a range of services
                  to help businesses grow and succeed online. These services
                  include:
              </p>
          </section>
      </main>
  );
}
