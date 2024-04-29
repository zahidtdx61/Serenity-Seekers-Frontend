import useCustomTheme from "../../hooks/useTheme"

const CountrySection = () => {
  const {theme} = useCustomTheme()
  return (
    <div className={`w-[95%]  lg:max-w-screen-xl mx-auto ${(theme==='0' ? 'bg-gray-100' : 'bg-zinc-900')}  rounded-lg  mt-12 mb-8 p-2 md:p-4 lg:p-10`}>

    </div>
  )
}

export default CountrySection