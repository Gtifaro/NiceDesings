export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="w-4/12 h-fit bg-[#111] rounded-[.5vw] p-[1vw]">
        <span className="w-[100%] h-fit text-[2vw]">Hello World</span>
        <p className="py-[.5vw] text-pretty w-full">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        </p>
        <button className="py-[.5vw] px-[1vw] border-[1px] border-[#c0c0c0] rounded-[.5vw] my-[.5vw] float-end">Saber Más</button>
      </div>
    </main>
  )
}
