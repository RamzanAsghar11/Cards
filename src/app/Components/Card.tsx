import Image from "next/image"

const card = () => {
  return (
    <div className="flex justify-evenly flex-wrap  w-full   ">
      <div className="  border-black border-2 flex flex-col justify-center items-center my-2 ">
        <div  className="mb-4">
            <Image
            src="/titus.png"
            width={300}
            height={400}
            alt="product"
            />
        </div>
        <h1> Card 1</h1>
        <h3>price 5000/=</h3>
        <p>This a first card</p>
        <div>
            <button className="bg-blue-500 text-white rounded-lg hover:text-black p-3 my-2">Buy Now</button>
        </div>

      </div>

      <div className="  border-black border-2 flex flex-col justify-center items-center my-2">
        <div  className="mb-4">
            <Image
            src="/titus.png"
            width={300}
            height={400}
            alt="product"
            />
        </div>
        <h1> Card 1</h1>
        <h3>price 5000/=</h3>
        <p>This a first card</p>
        <div>
            <button className="bg-blue-500 text-white rounded-lg hover:text-black p-3 my-2">Buy Now</button>
        </div>

      </div>

      <div className="  border-black border-2 flex flex-col justify-center items-center my-2">
        <div  className="mb-4">
            <Image
            src="/titus.png"
            width={300}
            height={400}
            alt="product"
            />
        </div>
        <h1> Card 1</h1>
        <h3>price 5000/=</h3>
        <p>This a first card</p>
        <div>
            <button className="bg-blue-500 text-white rounded-lg hover:text-black p-3 my-2">Buy Now</button>
        </div>

      </div>

     
    </div>
  )
}

export default card
