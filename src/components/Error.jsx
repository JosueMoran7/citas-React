function Error({children}) {
  return (
    <div className="bg-red-800 text-center p-3 text-white uppercase font-bold mb-3 rounded-md ">
        {children}
    </div>
  )
}

export default Error