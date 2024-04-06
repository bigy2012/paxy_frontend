import Link from "next/link";
import { MoreIcon } from "./Icon";

export default function Category() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="category px-20 mt-10">
      <div className="flex justify-between mb-5">
        <div>
          <h3 className="text-lg font-bold">หมวดหมู่สินค้า</h3>
        </div>
        <div>
          <MoreIcon />
        </div>
      </div>
      <div className="bg-gray-100 py-5 rounded-lg">
        <div className="w-full rounded-md flex justify-center">
          <div className="flex">
            {numbers.map((number, index) =>
              <Link href={`/cat${number}`}>
                <div className="bg-white  p-5 rounded-md mx-2 w-[130px] h-[65px] text-center hover:scale-105">
                  category {number}
                </div>
              </Link>
            )}
          </div>
        </div>
        <div className="w-full rounded-md mt-3 flex justify-center">
          <div className="flex">
            {numbers.map((number, index) =>
              <Link href={`/cat${number}`}>
                <div className="bg-white  p-5 rounded-md mx-2 w-[130px] h-[65px] text-center hover:scale-105">
                  category {number}
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
