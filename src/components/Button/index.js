import React from "react";
const variants = {
  primary:
    "rounded-lg bg-indigo-600 text-white hover:enabled:bg-indigo-700 focus:ring-indigo-500",
  danger: "bg-red-600 text-white hover:enabled:bg-red-500 focus:ring-red-500",
  naked: "hover:text-gray-500  shadow:none",
  taskButton:" rouded-r-full w-64 h-14 mt-11 text-white bg-black font-bold items-center justify-center",
  formButton:"bg-black rounded-full  h-10  w-full hover:enabled:bg-indigo-70 text-white",
  locationButton:"rounded-r-full w-64 h-14 mt-6 text-black bg-white font-bold ",
  logoutButton:"rounded-r-full w-64 h-14  text-black bg-white font-bold ",
  secondButton:"bg-white text-black hover:enabled:bg-black w-96 h-14",
};
const sizes = {
  small: "px-2 py-1 text-xs leading-1",
  medium: "px-4 py-2 text-sm",
  large: "px-4 py-2 text-base",
};
export const Button = ({
  className,
  variant = "primary",
  size = "small",
  ...props
}) => {
  return (
    <button
      className={`inline-flex justify-center  items-center border border-transparent  bg-black font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
            ${className}
            ${variants[variant]}
            ${sizes[size]}
            `}
      {...props}
    />
  );
};