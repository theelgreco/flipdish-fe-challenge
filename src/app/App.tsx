import { useEffect, useState } from "react";
import "./App.css";
import type { Menu, MenuItem, MenuItemOptionSet, MenuSection } from "./types";
import { MenuSquare } from "lucide-react";
import React from "react";

function App() {
    const [menu, setMenu] = useState<Menu>();

    useEffect(() => {
        async function getMenu() {
            const response = await fetch("https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json");
            const json = await response.json();
            setMenu(json);
        }

        getMenu();
    }, []);

    return (
        <main className="flex flex-col lg:p-10 mx-auto max-w-[600px]">
            <header className=" flex items-center justify-between p-6 border border-b-0 border-neutral-700 rounded">
                <h1 className="text-4xl font-extralight">MENU</h1>
                <MenuSquare />
            </header>
            {menu ? (
                <>
                    {menu.MenuSections.map((menuSection) => (
                        <MenuSection key={menuSection.PublicId} section={menuSection} />
                    ))}
                </>
            ) : (
                <p>Loading...</p>
            )}
        </main>
    );
}

function MenuSection({ section }: { section: MenuSection }) {
    if (section.IsAvailable && section.MenuItems.length) {
        return (
            <article className="border border-neutral-700 rounded">
                <header
                    className="p-6 flex justify-between bg-neutral-700 sticky top-0 overflow-hidden bg-gradient-to-br from-black to-transparent"
                    style={{
                        backgroundImage: `linear-gradient(90deg, black, transparent), url(${section.ImageUrl})`,
                        backgroundSize: "cover",
                    }}
                >
                    <h2 className="text-xl font-black z-1">{section.Name}</h2>
                </header>
                <div className="p-6 flex flex-col gap-5">
                    {section.MenuItems.map((menuItem, index) => (
                        <React.Fragment key={menuItem.PublicId}>
                            <MenuItem menuItem={menuItem} />
                            {index === section.MenuItems.length - 1 ? <></> : <hr className="border-neutral-700 -mx-6" />}
                        </React.Fragment>
                    ))}
                </div>
            </article>
        );
    }
}

function MenuItem({ menuItem }: { menuItem: MenuItem }) {
    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between gap-2">
                <div>
                    <h3 className="font-bold text-lg">{menuItem.Name}</h3>
                    {menuItem.Price ? <p className="text-neutral-400 ml-auto">£{menuItem.Price.toFixed(2)}</p> : <></>}
                    <small className=" font-light text-neutral-400">{menuItem.Description}</small>
                </div>
                {menuItem.ImageUrl ? (
                    <img className="max-h-[100px] rounded-lg aspect-square object-cover" src={menuItem.ImageUrl} />
                ) : (
                    <></>
                )}
            </div>
            {menuItem.MenuItemOptionSets.length ? (
                <div className="flex flex-col gap-5 mt-5">
                    {menuItem.MenuItemOptionSets.map((optionSet) => (
                        <MenuItemOptionSet key={optionSet.PublicId} optionSet={optionSet} />
                    ))}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

function MenuItemOptionSet({ optionSet }: { optionSet: MenuItemOptionSet }) {
    return (
        <div>
            {optionSet.Name ? <small className="text-neutral-300">{optionSet.Name}</small> : <></>}
            <ul>
                {optionSet.MenuItemOptionSetItems.map((optionSetItem) => (
                    <li key={optionSetItem.PublicId} className="flex gap-2">
                        <p>{optionSetItem.Name}</p>
                        <p className="text-neutral-400 ml-auto">
                            {optionSet.IsMasterOptionSet ? "" : "+"} £{optionSetItem.Price.toFixed(2)}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
