import React from "react";

const variantClasses = {
  h1: "font-medium sm:text-[24px] md:text-[26px] text-[28px]",
  h2: "font-medium sm:text-[17px] md:text-[19px] text-[21px]",
  h3: "text-[14px]",
  h4: "font-normal text-[12px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
