import React from 'react';

export const ButtonStyleHover = (props) => {
  const { link } = props;
  const ButtonComponent = link ? 'a' : 'button';

  return (
    <div className=''>
      <ButtonComponent
        href={link}
        className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden rounded-full bg-green-default text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#F2A227] before:duration-500 before:ease-out hover:shadow-[#F2A227] hover:before:h-56 hover:before:w-56"
      >
        <span className="relative z-10">{props.children}</span>
      </ButtonComponent>
    </div>
  );
};
