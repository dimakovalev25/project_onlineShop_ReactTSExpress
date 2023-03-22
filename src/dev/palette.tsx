import React from "react";
import {Fragment} from "react";
import {
    Category,
    Component,
    Variant,
    Palette,
} from "@react-buddy/ide-toolbox";

export const PaletteTree = () => (
    <Palette>
        <Category name="App">
            <Component name="Loader">
                <Variant name={'button red'}>
                    <button color={'red'}></button>
                </Variant>
                <Variant name={'button green'}>
                    <button color={'green'}></button>
                </Variant>
                <Variant name={'a'}>
                    <a href={'#'}></a>
                </Variant>
            </Component>
        </Category>
    </Palette>
);

export function ExampleLoaderComponent() {
    return (
        <Fragment>Loading...</Fragment>
    );
}