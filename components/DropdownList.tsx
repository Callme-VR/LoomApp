"use client"
import Image from "next/image";
import { useState } from "react"

export default function DropdownList() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <div className="filter-trigger">
                    <figure>
                        <Image src={"/assets/icons/hamburger.svg"} alt="icons" width={15} height={16} />
                        Most Recent
                    </figure>
                    <Image src={"/assets/icons/arrow-down.svg"} alt="icons" width={20} height={20}
                    />
                </div>
                {
                    isOpen && (
                        <ul className="dropdown-list">
                            {['most recent','most linked'].map((option)=>(
                            <li  key={option}className="list-item">
                                {option}
                            </li>    
                            ))}
                        </ul>
                    )
                }
            </div>
        </div>
    )
}

