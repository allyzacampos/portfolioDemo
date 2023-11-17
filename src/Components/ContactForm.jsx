import React from 'react'
import { ButtonStyleHover } from "../Components/ButtonStyleHover";
import { Card, Input, Textarea, Typography } from "@material-tailwind/react";

export const ContactForm = () => {
  return (
    <Card color="transparent" shadow={false}>
      <form className="mt-8 mb-2">
        <div className="mb-1 flex flex-col gap-6">
          <Typography className="p-bold -mb-3 text-black-dark">
            Your Name
          </Typography>
          <Input
            id='name'
            size="lg"
            autoComplete='true'
            placeholder="Full Name"
            className="!border-black-dark focus:!border-[#F2A227]"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography className="p-bold -mb-3 text-black-dark">
            Your Email
          </Typography>
          <Input
            id='email'
            autoComplete='true'
            size="lg"
            placeholder="Email Address"
            className=" !border-black-dark focus:!border-[#F2A227]"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography className="p-bold -mb-3 text-black-dark">
            Message
          </Typography>
          <Textarea
            type="message"
            id='message'
            size="lg"
            placeholder="Message"
            className=" !border-black-dark focus:!border-[#F2A227]"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div className='mt-8 w-full'>
          <ButtonStyleHover>Submit</ButtonStyleHover>
        </div>
      </form>
    </Card>
  )
}
