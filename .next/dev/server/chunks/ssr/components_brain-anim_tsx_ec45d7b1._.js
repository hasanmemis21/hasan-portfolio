module.exports = [
"[project]/components/brain-anim.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BrainAnim
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
const nodes = [
    {
        x: 70,
        y: 90
    },
    {
        x: 120,
        y: 60
    },
    {
        x: 180,
        y: 80
    },
    {
        x: 230,
        y: 55
    },
    {
        x: 280,
        y: 85
    },
    {
        x: 330,
        y: 120
    },
    {
        x: 270,
        y: 150
    },
    {
        x: 210,
        y: 140
    },
    {
        x: 150,
        y: 130
    },
    {
        x: 110,
        y: 170
    },
    {
        x: 160,
        y: 195
    },
    {
        x: 220,
        y: 205
    },
    {
        x: 295,
        y: 190
    }
];
const links = [
    [
        0,
        1
    ],
    [
        1,
        2
    ],
    [
        2,
        3
    ],
    [
        3,
        4
    ],
    [
        4,
        5
    ],
    [
        2,
        7
    ],
    [
        7,
        8
    ],
    [
        8,
        1
    ],
    [
        8,
        9
    ],
    [
        9,
        10
    ],
    [
        10,
        11
    ],
    [
        11,
        12
    ],
    [
        7,
        10
    ],
    [
        5,
        12
    ]
];
function BrainAnim({ height = 380 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10 brain-scene",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/components/brain-anim.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            [
                ...Array(18)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                    className: "absolute block rounded-full bg-emerald-400/30 blur-[2px]",
                    style: {
                        width: 3,
                        height: 3,
                        left: `${i * 37 % 100}%`,
                        top: `${i * 19 % 100}%`
                    },
                    initial: {
                        opacity: 0,
                        y: 0
                    },
                    animate: {
                        opacity: [
                            0.1,
                            0.7,
                            0.1
                        ],
                        y: [
                            0,
                            -8,
                            0
                        ]
                    },
                    transition: {
                        duration: 3 + i % 5 * 0.5,
                        repeat: Infinity,
                        delay: i * 0.12
                    },
                    "aria-hidden": true
                }, i, false, {
                    fileName: "[project]/components/brain-anim.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].svg, {
                viewBox: "0 0 380 260",
                className: "w-full",
                style: {
                    maxHeight: height
                },
                initial: {
                    opacity: 0,
                    scale: 0.96
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 0.6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                id: "bgGlow",
                                cx: "50%",
                                cy: "40%",
                                r: "60%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "rgba(20,184,166,0.55)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/brain-anim.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "60%",
                                        stopColor: "rgba(16,185,129,0.15)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/brain-anim.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "rgba(0,0,0,0)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/brain-anim.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/brain-anim.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "linkGrad",
                                x1: "0%",
                                y1: "0%",
                                x2: "100%",
                                y2: "0%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#34d399"
                                    }, void 0, false, {
                                        fileName: "[project]/components/brain-anim.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "50%",
                                        stopColor: "#22c55e"
                                    }, void 0, false, {
                                        fileName: "[project]/components/brain-anim.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#60a5fa"
                                    }, void 0, false, {
                                        fileName: "[project]/components/brain-anim.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/brain-anim.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                id: "glow",
                                x: "-50%",
                                y: "-50%",
                                width: "200%",
                                height: "200%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                        stdDeviation: "2",
                                        result: "b"
                                    }, void 0, false, {
                                        fileName: "[project]/components/brain-anim.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                in: "b"
                                            }, void 0, false, {
                                                fileName: "[project]/components/brain-anim.tsx",
                                                lineNumber: 65,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                in: "SourceGraphic"
                                            }, void 0, false, {
                                                fileName: "[project]/components/brain-anim.tsx",
                                                lineNumber: 65,
                                                columnNumber: 43
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/brain-anim.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/brain-anim.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/brain-anim.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "0",
                        y: "0",
                        width: "380",
                        height: "260",
                        fill: "url(#bgGlow)"
                    }, void 0, false, {
                        fileName: "[project]/components/brain-anim.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                        d: "M95,110 C80,70 135,35 175,50 C195,25 245,35 255,75 C290,70 320,105 305,140 C330,170 300,215 260,205 C235,230 185,230 165,205 C140,220 105,205 110,175 C80,165 75,135 95,110 Z",
                        fill: "none",
                        stroke: "rgba(99,102,241,0.9)",
                        /* indigo vurgulu */ strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeDasharray: "6 10",
                        filter: "url(#glow)",
                        initial: {
                            strokeDashoffset: 0
                        },
                        animate: {
                            strokeDashoffset: [
                                0,
                                -180
                            ]
                        },
                        transition: {
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/brain-anim.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    links.map(([a, b], i)=>{
                        const A = nodes[a], B = nodes[b];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].line, {
                            x1: A.x,
                            y1: A.y,
                            x2: B.x,
                            y2: B.y,
                            stroke: "url(#linkGrad)",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            initial: {
                                opacity: 0.25
                            },
                            animate: {
                                opacity: [
                                    0.25,
                                    0.95,
                                    0.25
                                ]
                            },
                            transition: {
                                duration: 2.2,
                                repeat: Infinity,
                                delay: i * 0.12
                            },
                            filter: "url(#glow)"
                        }, i, false, {
                            fileName: "[project]/components/brain-anim.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this);
                    }),
                    nodes.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].circle, {
                            cx: n.x,
                            cy: n.y,
                            r: "5",
                            fill: i % 3 === 0 ? "#34d399" : i % 3 === 1 ? "#60a5fa" : "#f59e0b",
                            filter: "url(#glow)",
                            initial: {
                                scale: 0.8,
                                opacity: 0.7
                            },
                            animate: {
                                scale: [
                                    0.8,
                                    1.22,
                                    0.8
                                ],
                                opacity: [
                                    0.7,
                                    1,
                                    0.7
                                ]
                            },
                            transition: {
                                duration: 1.8,
                                repeat: Infinity,
                                delay: i * 0.06
                            }
                        }, i, false, {
                            fileName: "[project]/components/brain-anim.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/brain-anim.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/brain-anim.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=components_brain-anim_tsx_ec45d7b1._.js.map