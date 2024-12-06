"use client";

import React, { useState } from "react";

const PixelLogo: React.FC<{ d: string; viewBox?: string }> = ({
                                                                  d,
                                                                  viewBox = "0 0 24 24",
                                                              }) => (
    <svg viewBox={viewBox} className="w-full h-full">
        <path d={d} fill="currentColor" />
    </svg>
);

const frameworks = [
    {
        name: "Next.js",
        path: "M18.4 18h-3.7v-1.3h3.7V18zm-5 0H9.7v-1.3h3.7V18zm-5 0H4.7v-1.3h3.7V18zm9.4-2.5h-3.7v-1.3h3.7v1.3zm-5 0H9.1v-1.3h3.7v1.3zm-5 0H4.1v-1.3h3.7v1.3zm9.4-2.5h-3.7v-1.3h3.7V13zm-5 0H9.1v-1.3h3.7V13zm-5 0H4.1v-1.3h3.7V13zm9.4-2.5h-3.7V9.2h3.7v1.3zm-5 0H9.1V9.2h3.7v1.3zm-5 0H4.1V9.2h3.7v1.3zm9.4-2.5h-3.7V6.7h3.7v1.3zm-5 0H9.1V6.7h3.7v1.3zm-5 0H4.1V6.7h3.7v1.3z",
    },
    {
        name: "React",
        path: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z",
    },
    {
        name: "Vue",
        path: "M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z",
    },
    {
        name: "Angular",
        path: "M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z",
    },
    {
        name: "Svelte",
        path: "M23.2 3.8l-9.4 15.9C13.4 20.3 13 20.8 12 21c-1 .2-1.7-.1-2.2-.6-.6-.6-.8-1.2-.6-2 .1-.3.2-.6.4-.8l9.4-15.9c.4-.6.8-1.1 1.8-1.3 1-.2 1.7.1 2.2.6.6.6.8 1.2.6 2-.1.3-.2.6-.4.8M9.1 16.5L6.3 21c-.4.6-.8 1.1-1.8 1.3-1 .2-1.7-.1-2.2-.6-.6-.6-.8-1.2-.6-2 .1-.3.2-.6.4-.8l2.8-4.5c.4-.6.8-1.1 1.8-1.3 1-.2 1.7.1 2.2.6.6.6.8 1.2.6 2-.1.3-.2.5-.4.8M17 0c1.4.4 2.4 1.3 2.9 2.4.1.3.2.6.2 1 0 .3 0 .6-.1.9 0 .1 0 .3-.1.5s-.1.3-.2.5c-.6-.5-1.3-.7-2.1-.7-.2 0-.4 0-.6.1-.9.2-1.6.7-2 1.5L5.4 21.5c-.5.7-1 1.2-1.7 1.5-.7.3-1.5.3-2.3.1 0 .1 0 .2-.1.3-.1.3-.1.7-.1 1 0 .4.1.7.2 1 .5 1.2 1.5 2 2.9 2.4 1.3.4 2.6.1 3.7-.7.5-.4 1-.9 1.4-1.5L19.1 9.1c.5-.7 1-1.2 1.7-1.5.7-.3 1.5-.3 2.3-.1v-.3c.1-.3.1-.7.1-1 0-.4-.1-.7-.2-1-.5-1.1-1.5-1.9-2.9-2.3-1.3-.4-2.6-.1-3.7.7-.5.4-1 .9-1.4 1.5L4.3 21.6c-.4.6-.8 1.1-1.4 1.5-1.1.8-2.4 1.1-3.7.7C.7 23.3.3 22.7 0 22c.3.1.6.2 1 .2.4 0 .7 0 1.1-.1.9-.2 1.6-.7 2-1.5L13.7 5.2c.5-.7 1-1.2 1.7-1.5.7-.3 1.5-.3 2.3-.1 0-.1 0-.2.1-.3.1-.3.1-.7.1-1 0-.4-.1-.7-.2-1C17.3.9 16.8.4 16.2.1c.2 0 .5 0 .8-.1",
    },
    {
        name: "Nuxt",
        path: "M9.078 3.965c-.588 0-1.177.289-1.514.867L.236 17.433c-.672 1.156.17 2.601 1.514 2.601h5.72a1.676 1.676 0 0 1-.35-2.117l5.547-9.513-2.076-3.572a1.734 1.734 0 0 0-1.513-.867zm7.407 2.922c-.487 0-.973.236-1.252.709L9.17 17.25c-.557.945.138 2.13 1.251 2.13h12.13c1.114 0 1.81-1.185 1.253-2.13l-6.067-9.654c-.278-.473-.765-.709-1.252-.709z",
    },
    {
        name: "Gatsby",
        path: "M12,10.11C11.47,10.11 10.95,10.32 10.56,10.71C9.78,11.49 9.78,12.76 10.56,13.54C11.34,14.32 12.61,14.32 13.39,13.54C14.17,12.76 14.17,11.49 13.39,10.71C13,10.32 12.53,10.11 12,10.11M14.83,11.5C15.24,11.91 15.5,12.45 15.5,13.04C15.5,13.63 15.24,14.17 14.83,14.58L13.04,16.37C12.63,16.78 12.09,17.04 11.5,17.04C10.91,17.04 10.37,16.78 9.96,16.37L8.17,14.58C7.76,14.17 7.5,13.63 7.5,13.04C7.5,12.45 7.76,11.91 8.17,11.5L9.96,9.71C10.37,9.3 10.91,9.04 11.5,9.04C12.09,9.04 12.63,9.3 13.04,9.71L14.83,11.5M12,0C5.37,0 0,5.37 0,12C0,18.63 5.37,24 12,24C18.63,24 24,18.63 24,12C24,5.37 18.63,0 12,0M6.21,17.79C5.42,17 5,15.93 5,14.83C5,13.73 5.42,12.66 6.21,11.87L8,10.08C8.79,9.29 9.86,8.87 10.96,8.87C12.06,8.87 13.13,9.29 13.92,10.08L15.71,11.87C16.5,12.66 16.92,13.73 16.92,14.83C16.92,15.93 16.5,17 15.71,17.79L13.92,19.58C13.13,20.37 12.06,20.79 10.96,20.79C9.86,20.79 8.79,20.37 8,19.58L6.21,17.79Z",
    },
    {
        name: "Astro",
        path: "M16.074 16.86c-.72.616-2.157 1.035-3.812 1.035-2.032 0-3.735-.607-4.48-1.493-.082-.099-.123-.198-.123-.298 0-.139.113-.25.255-.25.061 0 .135.032.199.099.77.518 2.207 1.047 4.126 1.047 1.621 0 3.003-.44 3.667-.91.08-.055.134-.113.19-.113.139 0 .25.12.25.256 0 .076-.045.18-.135.244l-.023.024.086.073zm.401-1.76c-.72.616-2.157 1.035-3.812 1.035-2.032 0-3.735-.607-4.48-1.493-.082-.099-.123-.198-.123-.298 0-.139.113-.25.255-.25.061 0 .135.032.199.099.77.518 2.207 1.047 4.126 1.047 1.621 0 3.003-.44 3.667-.91.08-.055.134-.113.19-.113.139 0 .25.12.25.256 0 .076-.045.18-.135.244l-.023.024.086.073zm.401-1.76c-.72.616-2.157 1.035-3.812 1.035-2.032 0-3.735-.607-4.48-1.493-.082-.099-.123-.198-.123-.298 0-.139.113-.25.255-.25.061 0 .135.032.199.099.77.518 2.207 1.047 4.126 1.047 1.621 0 3.003-.44 3.667-.91.08-.055.134-.113.19-.113.139 0 .25.12.25.256 0 .076-.045.18-.135.244l-.023.024.086.073zM24 12.42C24 18.943 18.627 24 12 24S0 18.943 0 12.42C0 5.902 5.373.839 12 .839c3.058 0 5.842 1.154 7.961 3.039l-3.05 3.094A8.808 8.808 0 0 0 12 4.738c-4.89 0-8.854 3.778-8.854 8.423 0 4.645 3.967 8.424 8.854 8.424 4.888 0 8.853-3.779 8.853-8.424 0-.568-.058-1.124-.173-1.661l3.463-3.513c.683 1.439 1.052 3.04 1.052 4.713z",
    },
    {
        name: "Qwik",
        path: "M12 2L1 7.69231L3.46154 19L12 23L20.5385 19L23 7.69231L12 2ZM15.2885 15.5654L12 18.8538L8.71154 15.5654L7.82692 11.1346L12 7.84615L16.1731 11.1346L15.2885 15.5654Z",
    },
    {
        name: "Expo",
        path: "M11.2574 1.04443C11.7313 0.815384 12.269 0.815383 12.7429 1.04443L21.9572 5.48552C22.4311 5.71457 22.7824 6.16658 22.9135 6.69807L24.9135 14.5731C25.0446 15.1046 24.9438 15.6636 24.6367 16.1168L19.3009 24.3198C18.9938 24.773 18.5111 25.0666 17.9796 25.0978L9.77514 25.4332C9.24367 25.4644 8.73005 25.2285 8.37023 24.8003L1.71457 16.9288C1.35474 16.5006 1.20082 15.9424 1.29287 15.3971L3.29287 7.52212C3.38492 6.97682 3.71029 6.50327 4.16349 6.23737L11.2574 1.04443Z",
    },
    {
        name: "Spring",
        path: "M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21zm.042-13.28a9.212 9.212 0 0 1 1.264 1.627s-.669-.93-1.808-1.647c-.423-.267-1.288-.638-1.897-.719-.006-.018 2.359.42 2.441.739z",
    },
    {
        name: "PHP",
        path: "M12 5.5C5.271 5.5 0 8.355 0 12s5.271 6.5 12 6.5 12-2.855 12-6.5-5.271-6.5-12-6.5zm-1.246 2.993c.676 0 1.172.15 1.487.45.315.301.473.735.473 1.301 0 .568-.165 1.004-.495 1.31-.33.305-.824.457-1.484.457h-.925l-.461-3.518h1.405zm-6.21 0h1.307l-.461 3.518h1.17l.461-3.518h1.302l-.12.916h1.213c.637 0 1.131.15 1.481.45.35.301.524.736.524 1.305 0 .569-.182 1.006-.547 1.312-.365.305-.881.458-1.547.458H6.457l.087-.664h-.954L5.129 15h-1.36l.775-5.907zm12.455.037c.783 0 1.376.15 1.778.45.403.301.604.726.604 1.275 0 .646-.233 1.137-.698 1.474-.465.338-1.155.506-2.07.506h-.733l-.337 2.565h-1.36l.91-6.27h1.906zm-11.027.806l-.233 1.775h.855c.465 0 .815-.083 1.051-.248.236-.166.354-.416.354-.75 0-.219-.07-.384-.21-.495-.14-.11-.368-.166-.683-.166h-.907l-.227-.116zm12.455.037h-.472l-.327 2.489h.517c.596 0 1.045-.1 1.347-.3.301-.2.452-.508.452-.922 0-.283-.087-.49-.26-.62-.174-.129-.45-.194-.827-.194l-.43-.453zm-6.57.154h-.472l-.327 2.489h.517c.596 0 1.045-.1 1.347-.3.301-.2.452-.508.452-.922 0-.283-.087-.49-.26-.62-.174-.129-.45-.194-.827-.194l-.43-.453z",
    },
    {
        name: "Laravel",
        path: "M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z",
    },
    {
        name: "Django",
        path: "M11.146 0h3.924v18.165c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.001 2.65-6.6 6.753-6.6.637 0 1.121.051 1.707.204V0zm0 9.143a3.894 3.894 0 0 0-1.325-.204c-1.988 0-3.134 1.223-3.134 3.364 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.097c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.529 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39V.021z",
    },
];

export default function FrameworkSection() {
    const [hoveredFramework, setHoveredFramework] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-8"> {/* Added dark mode classes */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text inline-block">
                    Supported frameworks and libraries for your project
                </h2>
            </div>
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">
                    Your framework,
                    <br />
                    your way
                    {hoveredFramework && (
                        <span className="text-blue-600 ml-2 transition-opacity duration-300">
                            {hoveredFramework}
                        </span>
                    )}
                </h1>
                <div className="grid grid-cols-5 gap-px bg-gray-200 dark:bg-gray-800"> {/* Added dark mode background */}
                    {frameworks.map((framework) => (
                        <div
                            key={framework.name}
                            className="aspect-square bg-white flex items-center justify-center group relative dark:bg-gray-700" // Added dark mode background
                            onMouseEnter={() => setHoveredFramework(framework.name)}
                            onMouseLeave={() => setHoveredFramework(null)}
                        >
                            <div className="w-12 h-12 text-gray-800 opacity-70 group-hover:opacity-100 transition-opacity duration-300 dark:text-white"> {/* Added dark text color */}
                                <PixelLogo d={framework.path} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}