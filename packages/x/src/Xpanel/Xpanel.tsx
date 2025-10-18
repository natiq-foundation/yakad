"use client";

import { useEffect, useState } from "react";
import {
    AppBar,
    Button,
    Main,
    Navigation,
    Screen,
    ScreenProps,
    Spacer,
    Text,
} from "@yakad/ui";
import { Symbol } from "@yakad/symbols";

export interface XpanelProps extends ScreenProps {
    name?: string;
    appbarChildren?: React.ReactNode;
    navigationChildren?: React.ReactNode;
    children?: React.ReactNode;
}

export function Xpanel({
    name = "Yakad Panel",
    appbarChildren,
    navigationChildren,
    children,
    ref,
    ...restProps
}: XpanelProps & { ref?: React.Ref<HTMLDivElement> }) {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const toggleNavOpen = () => setNavOpen((prev) => !prev);

    const handleClickAwayNav = () =>
        window.innerWidth <= 1000 && setNavOpen(false);

    const handleNavOpenDependOnWindowSize = () =>
        setNavOpen(window.innerWidth > 1200);

    useEffect(() => {
        handleNavOpenDependOnWindowSize();
        const resizeListener = () => handleNavOpenDependOnWindowSize();
        window.addEventListener("resize", resizeListener);
        return () => {
            window.removeEventListener("resize", resizeListener);
        };
    }, []);

    return (
        <Screen ref={ref} {...restProps}>
            <AppBar position="sticky">
                <Button icon={<Symbol icon="menu" />} onClick={toggleNavOpen} />
                <Text variant="heading3">{name}</Text>
                <Spacer />
                {appbarChildren}
            </AppBar>
            <Main
                style={{
                    minHeight: "calc(100vh - 6rem)",
                }}
                navOpen={navOpen}
                onClick={() => handleClickAwayNav()}
            >
                {children}
            </Main>

            <Navigation open={navOpen}>{navigationChildren}</Navigation>
        </Screen>
    );
}
