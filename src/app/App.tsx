import { useEffect, useState } from "react";
import "./App.css";
import type { MenuType, MenuItemType, MenuItemOptionSetType, MenuSectionType } from "./types";
import { MenuSquare } from "lucide-react";
import React from "react";

function App() {
    const [loading, setLoading] = useState(false);
    const [menu, setMenu] = useState<MenuType>();
    const [error, setError] = useState<string>();

    useEffect(() => {
        async function getMenu() {
            try {
                setLoading(true);
                const response = await fetch("https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json");
                if (!response.ok) throw new Error();
                const json = await response.json();
                setMenu(json);
            } catch {
                setError("Error loading menu");
            } finally {
                setLoading(false);
            }
        }

        getMenu();
    }, []);

    return (
        <>
            <header className=" flex items-center justify-between p-6 border border-b-0 border-neutral-700 rounded">
                <h1 className="text-4xl font-extralight">MENU</h1>
                <MenuSquare />
            </header>
            <main className="border border-neutral-700 rounded">
                {loading && <p className="p-6">Loading...</p>}
                {error && !menu && <p className="p-6 text-red-500">{error}</p>}
                {menu?.MenuSections.map((menuSection) => (
                    <MenuSection key={menuSection.PublicId} section={menuSection} />
                ))}
            </main>
        </>
    );
}

function MenuSection({ section }: { section: MenuSectionType }) {
    if (section.IsAvailable && section.MenuItems.length) {
        return (
            <section>
                <h2
                    className="text-xl font-black p-6 flex justify-between bg-neutral-700 sticky top-0 overflow-hidden bg-gradient-to-br from-black to-transparent"
                    style={{
                        backgroundImage: `linear-gradient(90deg, black, transparent), url(${section.ImageUrl})`,
                        backgroundSize: "cover",
                    }}
                >
                    {section.Name}
                </h2>
                <div className="p-6 flex flex-col gap-5">
                    {section.MenuItems.map((menuItem, index) => (
                        <React.Fragment key={menuItem.PublicId}>
                            <MenuItem menuItem={menuItem} />
                            {index < section.MenuItems.length - 1 && <hr className="border-neutral-700 -mx-6" />}
                        </React.Fragment>
                    ))}
                </div>
            </section>
        );
    }
}

function MenuItem({ menuItem }: { menuItem: MenuItemType }) {
    return (
        <article className="flex flex-col">
            <header className="flex items-center justify-between gap-2">
                <div>
                    <h3 className="font-bold text-lg">{menuItem.Name}</h3>
                    {menuItem.Price > 0 && <p className="text-neutral-400 ml-auto">£{menuItem.Price.toFixed(2)}</p>}
                    <small className=" font-light text-neutral-400">{menuItem.Description}</small>
                </div>
                {menuItem.ImageUrl && (
                    <img className="max-h-[100px] rounded-lg aspect-square object-cover" src={menuItem.ImageUrl} alt={menuItem.Name} />
                )}
            </header>
            {menuItem.MenuItemOptionSets.length > 0 && (
                <div className="flex flex-col gap-5 mt-5">
                    {menuItem.MenuItemOptionSets.map((optionSet) => (
                        <MenuItemOptionSet key={optionSet.PublicId} optionSet={optionSet} />
                    ))}
                </div>
            )}
        </article>
    );
}

function MenuItemOptionSet({ optionSet }: { optionSet: MenuItemOptionSetType }) {
    return (
        <ul>
            {optionSet.Name && (
                <li>
                    <small className="text-neutral-300">{optionSet.Name}</small>
                </li>
            )}
            {optionSet.MenuItemOptionSetItems.map((optionSetItem) => (
                <li key={optionSetItem.PublicId} className="flex">
                    <p>{optionSetItem.Name}</p>
                    <p className="text-neutral-400 ml-auto">
                        {optionSet.IsMasterOptionSet ? "" : "+"} £{optionSetItem.Price.toFixed(2)}
                    </p>
                </li>
            ))}
        </ul>
    );
}

export default App;
