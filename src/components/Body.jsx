import React from 'react'
import { Button } from './Button';
import { Text } from './Text';
import Card from './Card';

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
                  src="./images/illustrations/illustration-1.svg"
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
                  fontSize="2.5rem"
              />
              <p className="w-145 ml-10">
                  At our digital marketing agency, we offer a range of services
                  to help businesses grow and succeed online. These services
                  include:
              </p>
          </section>
          <section className="grid grid-cols-2 gap-10 mt-20">
              <Card
                  bg={"#F3F3F3"}
                  img={"./images/card-images/card-1.svg"}
                  text={"#191A23"}
                  arrow={"#B9FF66"}
                  name={"Search engine optimization"}
                  bgColor={"#B9FF66"}
                  textColor={"#000000"}
              />
              <Card
                  bg={"#B9FF66"}
                  img={"./images/card-images/card-2.svg"}
                  text={"#191A23"}
                  arrow={"#B9FF66"}
                  name={"Pay-per-click advertising"}
                  bgColor={"#FFFFFF"}
                  textColor={"#000000"}
              />
              <Card
                  bg={"#191A23"}
                  img={"./images/card-images/card-3.svg"}
                  text={"#FFFFFF"}
                  arrow={"#000000"}
                  name={"Social Media Marketing"}
                  bgColor={"#FFFFFF"}
                  textColor={"#000000"}
              />
              <Card
                  bg={"#F3F3F3"}
                  img={"./images/card-images/card-4.svg"}
                  text={"#191A23"}
                  arrow={"#B9FF66"}
                  name={"Email Marketing"}
                  bgColor={"#B9FF66"}
                  textColor={"#000000"}
              />
              <Card
                  bg={"#B9FF66"}
                  img={"./images/card-images/card-5.svg"}
                  text={"#191A23"}
                  arrow={"#B9FF66"}
                  name={"Content Creation"}
                  bgColor={"#FFFFFF"}
                  textColor={"#000000"}
              />
              <Card
                  bg={"#191A23"}
                  img={"./images/card-images/card-6.svg"}
                  text={"#FFFFFF"}
                  arrow={"#000000"}
                  name={"Analytics and Tracking"}
                  bgColor={"#B9FF66"}
                  textColor={"#000000"}
              />
          </section>
          <section className="flex bg-[#F3F3F3] max-w-[1240px] h-[347px] mt-[123.5px] rounded-[45px] items-center justify-around">
              <div className="w-[500px] h-[227px] flex flex-col">
                  <h3 className="font-medium text-[30px] h-[38px]">
                      Let’s make things happen
                  </h3>
                  <p className="my-[26px] text-[1.125rem]">
                      Contact us today to learn more about how our digital
                      marketing services can help your business grow and succeed
                      online.
                  </p>
                  <Button
                      name={"Get your free proposal"}
                      classes={"bg-[#191A23] text-[#FFFFFF] w-72"}
                  />
              </div>
              <img src="./images/illustrations/illustration-2.svg" alt="illustration" className='h-[394px]' />
          </section>
      </main>
  );
}
