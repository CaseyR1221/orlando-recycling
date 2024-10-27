const HeaderSubheader = ({ header, subheader}) => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full">
        <h2 className="text-4xl md:text-6xl text-white max-w-5xl my-4">{header}</h2>
        <p className="text-xl text-white">{subheader}</p>
    </div>
  )
}

export default HeaderSubheader