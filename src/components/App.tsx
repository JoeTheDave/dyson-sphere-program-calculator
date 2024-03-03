import images from '../lib/images'

function App() {
  console.log(images)
  return (
    <div className="flex flex-wrap grow-0 shrink-0 bg-gray-900">
      {Object.keys(images).map(key => (
        <div className="w-[120px] h-[120px] p-1 m-1 flex justify-center items-center">
          <img className="" src={images[key as keyof typeof images]} alt="Vite logo" />
        </div>
      ))}
    </div>
  )
}

export default App
