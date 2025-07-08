import React from "react";
import {Button} from "./Button";

export function Header() {
    return (
        <header className="flex justify-between mt-15 mb-17.5">
            <img src="./images/logo.svg" alt="logo" />
            <nav className="w-[811] flex items-center gap-10 text-[1.25rem]">
                <ul className="flex gap-10">
                    <li>
                        <a href="">
                            About us
                        </a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
                    <li>
                        <a href="">Use Cases</a>
                    </li>
                    <li>
                        <a href="">Pricing</a>
                    </li>
                    <li>
                        <a href="">
                            Blog
                        </a>
                    </li>
                </ul>
                <Button
                    name="Request a quote"
                    classes="border border-[#191A23]"
                />
            </nav>
        </header>
    );
}
