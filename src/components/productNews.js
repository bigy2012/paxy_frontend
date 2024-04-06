import Link from "next/link";
import { MoreIcon } from "./Icon";
import Image from "next/image";

export default function ProductNews() {
  const numbers = [1, 2, 3];
  return (
    <div className="category px-20 mt-10">
      <div className="flex justify-between mb-5">
        <div>
          <h3 className="text-lg font-bold">สินค้าใหม่</h3>
        </div>
        <div>
          <MoreIcon className="" />
        </div>
      </div>
      <div className="bg-gray-100 py-5 px-3 rounded-lg">
        <div className="w-full rounded-md flex justify-center">
          <div className="flex">
            {numbers.map((number, index) =>
              <Link href={`/product${number}`}>
                <div className="bg-white  p-5 rounded-md mx-2 w-[350px] h-[300px] hover:scale-105">
                  <div className="w-full h-[200px] bg-gradient-to-r from-cyan-500 to-blue-500">
                    <Image src="/products/nikie1.jpg" width={500} height={100}  className="w-full h-[200px] " />
                  </div>
                  <div className="w-full">
                    <h3 className="font-medium">
                      Product {number}
                    </h3>
                  </div>
                  <div className="w-full">
                    <h3 className="font-normal">
                      Product {number} detail....?
                    </h3>
                  </div>
                  <div className="w-full">
                    <h3 className="font-bold text-red-600">
                        ฿150
                    </h3>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
