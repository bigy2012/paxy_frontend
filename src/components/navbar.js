import Link from "next/link";
import { CartIcon, PersonIcon, SearchIcon } from "./Icon";

export default function Navbar() {
  return (
    <div>
      <div className="lg:flex lg:justify-between lg:px-20 lg:py-3">
        <div>
          <Link href="/" className="py-2">
            <h1 className="text-2xl font-medium py-2">Paxy</h1>
          </Link>
        </div>

        <div className="py-2">
          <ul className="lg:flex">
            <li className="mx-5 py-2">
              <Link href="/">หน้าแรก</Link>
            </li>
            <li className="mx-5 py-2">
              <Link href="/">หมวดหมู่สินค้า</Link>
            </li>
            <li className="mx-5 py-2">
              <Link href="/">สินค้าทั้งหมด</Link>
            </li>
            <li className="mx-5 py-2">
              <Link href="/">เกี่ยวกับร้านค้า</Link>
            </li>
          </ul>
        </div>

        <div className="Icon py-2">
          <ul className="lg:flex">
            <li className="mx-3 py-2">
              <Link href="/search">
                <SearchIcon className="w-[40px]" />
              </Link>
            </li>
            <li className="mx-3 py-2">
              <Link href="/cart">
                <CartIcon className="w-[40px]" />
              </Link>
            </li>
            <li className="mx-3 py-2">
              <Link href="/profile">
                <PersonIcon className="w-[40px]" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
