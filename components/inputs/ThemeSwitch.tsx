import React from 'react'

type Props = {
    color: string;
    selectedAccentColor: string;
    setThemeColor: (color: string) => void;
}

function ThemeSwitch({ color, selectedAccentColor, setThemeColor }: Props) {

    const bg = `bg-${color}-accent`;
    return (
        <button
            onClick={() => { setThemeColor(color) }}
            className={`p-0.5 border-2 border-warm rounded-full ${selectedAccentColor == color ? "border-opacity-100" : "border-opacity-50"} hover:border-opacity-100 transition-opacity duration-200 ease group overflow-hidden`}
        >
            <div className={`w-4 h-4 rounded-full ${bg}`}></div>
        </button>
    )
}

export default ThemeSwitch
