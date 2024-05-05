"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
// useeffect is called after the moment the element is needed to be rendered or when it's hooked element is updated
//Only on client side

export default function Navbar() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);
  const incCount = () => {
    setCount(count + 1);
  };
  return (
    <nav>
      <h1 onClick={incCount}>Increment</h1>
      <ul>
        <li>
          <Link href="/" className="p-1">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="p-[1.25rem] w-full bg-pink-500">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
