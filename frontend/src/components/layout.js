const Layout = ({ children }) => {
  return (
    <div className='px-10 mb-60 w-full md:mx-auto md:max-w-[560px] lg:flex-row lg:pr-0 lg:mx-auto lg:max-w-[1200px]'>
      {children}
    </div>
  )
}

export default Layout
