module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Documents/frontend-engineer-task/src/utils/helpers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "concatenateTypologies",
    ()=>concatenateTypologies,
    "formatDate",
    ()=>formatDate,
    "formatPrice",
    ()=>formatPrice,
    "para",
    ()=>para
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/tailwind-variants/dist/index.js [app-ssr] (ecmascript) <locals>");
;
;
;
const formatDate = (dateString, locale = "en-US", options = {
    year: "numeric",
    month: "short"
})=>{
    if (!dateString) {
        console.log("No date string provided");
        return "Invalid Date";
    }
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        console.log(`Invalid date string provided: ${dateString}`);
        return "Invalid Date";
    }
    return new Intl.DateTimeFormat(locale, options).format(date);
};
const formatPrice = (amount, fullFormat)=>{
    if (amount === 0) return "0";
    if (amount >= 10000000) {
        const value = parseFloat((amount / 10000000).toFixed(2));
        const suffix = value === 1 ? fullFormat ? "Crore" : "Cr" : fullFormat ? "Crores" : "Cr";
        return `${value} ${suffix}`;
    }
    const value = parseFloat((amount / 100000).toFixed(2));
    const suffix = value === 1 ? fullFormat ? "Lakh" : "L" : fullFormat ? "Lakhs" : "L";
    return `${value} ${suffix}`;
};
function concatenateTypologies(input) {
    const lastType = input[input.length - 1];
    if (input.length > 1) {
        const otherTypes = input.slice(0, -1);
        let result = otherTypes.join(", ");
        return result + " & " + lastType;
    } else {
        return lastType;
    }
}
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
// Shared color variants
const colorVariants = {
    white: "text-white",
    extralight: "text-[#D5D8E3]",
    dark: "text-[#212130]",
    normal: "text-[#66677E]",
    light: "text-[#A6ACBD]",
    primary: "text-[#FF6D33]",
    primarylight: "text-[#FFF4EF]",
    secondary: "text-[#9A4AFB]",
    tertiary: "text-[#9A4AFB]",
    success: "text-[#47B881]",
    danger: "text-[#F64C4C]",
    warning: "text-[#FFAD0D]",
    info: "text-[#3B95F6]"
};
const para = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tv"])({
    base: "inline font-regular",
    variants: {
        color: colorVariants,
        size: {
            xs: "text-sm leading-[1.35]",
            sm: "text-sm xl:text-base leading-[1.35]",
            md: "text-sm xl:text-lg leading-[1.35]",
            lg: "text-lg leading-normal",
            xl: "text-xl xl:text-[2rem] leading-normal"
        }
    },
    defaultVariants: {
        size: "md"
    }
});
}),
"[project]/Documents/frontend-engineer-task/src/assets/PropsochRating.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropscoreRating",
    ()=>PropscoreRating,
    "RatingFilled",
    ()=>RatingFilled,
    "RatingUnfilled",
    ()=>RatingUnfilled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/src/utils/helpers.ts [app-ssr] (ecmascript)");
;
;
const PropscoreRating = ({ rating, className, width = 260, height = 48 })=>{
    let calculateFilledPercent = rating / 5 * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RatingUnfilled, {
                width: width,
                height: height
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/PropsochRating.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 overflow-hidden whitespace-nowrap"),
                style: {
                    width: `${calculateFilledPercent}%`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RatingFilled, {
                    width: width,
                    height: height
                }, void 0, false, {
                    fileName: "[project]/Documents/frontend-engineer-task/src/assets/PropsochRating.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/PropsochRating.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/PropsochRating.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const RatingUnfilled = ({ width = 260, height = 48, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: "0 0 260 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.69936 29.2106C1.35086 28.8798 1.12322 28.3987 1.10667 27.872C1.09011 27.3452 1.2874 26.8605 1.61413 26.4987C1.95082 26.1464 2.41695 25.9169 2.93809 25.9005C7.18434 25.7671 10.9698 23.8807 13.6403 20.9454C16.2174 18.1108 17.7496 14.3032 17.6383 10.1469L17.638 10.1371C17.6278 10.1179 17.6271 10.0984 17.6265 10.0789L17.6262 10.0691C17.6256 10.0496 17.625 10.0301 17.6337 10.0005C17.6277 9.50272 17.8256 9.03755 18.1433 8.69557C18.4704 8.34352 18.9462 8.11374 19.4673 8.09736C19.9884 8.08099 20.468 8.28074 20.8262 8.61125C21.1847 8.95151 21.412 9.42284 21.4285 9.94962L21.4289 9.95938C21.4945 12.047 21.9623 14.0243 22.7721 15.8151C23.5722 17.6062 24.7046 19.2111 26.0896 20.5542C26.1294 20.592 26.1692 20.6298 26.209 20.6676C29.0468 23.3613 32.8935 24.9591 37.0818 24.8274C37.603 24.811 38.0826 25.0108 38.4407 25.3413C38.7992 25.6816 39.0265 26.1529 39.0431 26.6797C39.0762 27.7332 38.2539 28.6184 37.212 28.6609L37.2023 28.6612C36.0539 28.6973 34.8902 28.8608 33.7313 29.1804C30.2639 30.1194 27.4023 32.2013 25.4398 34.919C23.505 37.5968 22.4297 40.8823 22.4984 44.2978L22.5018 44.4051C22.5024 44.4246 22.513 44.4536 22.5136 44.4731C22.5145 44.5023 22.5055 44.5222 22.5064 44.5514L22.507 44.5709C22.4906 45.587 21.6861 46.4227 20.6728 46.4546C20.1517 46.471 19.6624 46.2715 19.3136 45.9309C18.9853 45.6288 18.7692 45.2059 18.7249 44.7191C18.7237 44.6801 18.7128 44.6413 18.7112 44.5926C18.71 44.5536 18.7184 44.5142 18.7172 44.4752L18.7169 44.4655C18.672 43.3439 18.5013 42.2166 18.2049 41.0834C17.264 37.5781 15.2023 34.6842 12.5124 32.6986C9.83208 30.7127 6.51349 29.6257 3.07788 29.7337L3.05858 29.7343C2.53744 29.7507 2.05782 29.5509 1.69936 29.2106Z",
                fill: "#D5D8E3"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/PropsochRating.tsx",
                lineNumber: 41,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M56.6837 27.4821C56.3352 27.1513 56.1076 26.6702 56.091 26.1435C56.0745 25.6167 56.2718 25.132 56.5985 24.7702C56.9352 24.4179 57.4013 24.1884 57.9225 24.172C62.1687 24.0385 65.9542 22.1521 68.6247 19.2169C71.2018 16.3822 72.734 12.5746 72.6227 8.41835L72.6224 8.40859C72.6121 8.38938 72.6115 8.36987 72.6109 8.35036L72.6106 8.34061C72.61 8.3211 72.6094 8.30159 72.6181 8.27202C72.6121 7.7742 72.81 7.30904 73.1277 6.96705C73.4547 6.61501 73.9305 6.38523 74.4517 6.36885C74.9728 6.35247 75.4524 6.55222 75.8106 6.88273C76.169 7.223 76.3964 7.69433 76.4129 8.22111L76.4132 8.23086C76.4788 10.3185 76.9467 12.2958 77.7565 14.0866C78.5566 15.8777 79.689 17.4826 81.0739 18.8256C81.1138 18.8634 81.1536 18.9013 81.1934 18.9391C84.0312 21.6328 87.8779 23.2305 92.0662 23.0989C92.5873 23.0825 93.067 23.2823 93.4251 23.6128C93.7836 23.9531 94.0109 24.4244 94.0275 24.9512C94.0606 26.0047 93.2383 26.8899 92.1963 26.9324L92.1867 26.9327C91.0383 26.9688 89.8745 27.1323 88.7157 27.4519C85.2483 28.3909 82.3867 30.4728 80.4241 33.1905C78.4893 35.8683 77.4141 39.1538 77.4828 42.5693L77.4861 42.6766C77.4868 42.6961 77.4973 42.725 77.4979 42.7446C77.4989 42.7738 77.4898 42.7936 77.4907 42.8229L77.4914 42.8424C77.475 43.8585 76.6705 44.6942 75.6572 44.7261C75.1361 44.7424 74.6468 44.543 74.298 44.2024C73.9697 43.9003 73.7535 43.4774 73.7093 42.9906C73.708 42.9515 73.6972 42.9128 73.6956 42.8641C73.6944 42.825 73.7028 42.7857 73.7016 42.7467L73.7013 42.7369C73.6564 41.6154 73.4857 40.4881 73.1893 39.3549C72.2483 35.8496 70.1867 32.9557 67.4968 30.9701C64.8165 28.9842 61.4979 27.8972 58.0623 28.0052L58.043 28.0058C57.5218 28.0221 57.0422 27.8224 56.6837 27.4821Z",
                fill: "#D5D8E3"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/PropsochRating.tsx",
                lineNumber: 45,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M111.668 25.7536C111.32 25.4228 111.092 24.9417 111.075 24.4149C111.059 23.8882 111.256 23.4035 111.583 23.0417C111.92 22.6893 112.386 22.4599 112.907 22.4435C117.153 22.31 120.939 20.4236 123.609 17.4884C126.186 14.6537 127.718 10.8461 127.607 6.68983L127.607 6.68008C127.597 6.66087 127.596 6.64136 127.595 6.62185L127.595 6.61209C127.594 6.59258 127.594 6.57307 127.602 6.5435C127.596 6.04569 127.794 5.58052 128.112 5.23854C128.439 4.88649 128.915 4.65671 129.436 4.64033C129.957 4.62396 130.437 4.82371 130.795 5.15422C131.153 5.49448 131.381 5.96581 131.397 6.49259L131.398 6.50235C131.463 8.58995 131.931 10.5673 132.741 12.3581C133.541 14.1492 134.673 15.7541 136.058 17.0971C136.098 17.1349 136.138 17.1727 136.178 17.2105C139.016 19.9043 142.862 21.502 147.051 21.3704C147.572 21.354 148.051 21.5538 148.409 21.8843C148.768 22.2245 148.995 22.6959 149.012 23.2226C149.045 24.2762 148.223 25.1613 147.181 25.2039L147.171 25.2042C146.023 25.2403 144.859 25.4038 143.7 25.7234C140.233 26.6624 137.371 28.7443 135.409 31.462C133.474 34.1398 132.398 37.4252 132.467 40.8407L132.471 40.9481C132.471 40.9676 132.482 40.9965 132.482 41.016C132.483 41.0453 132.474 41.0651 132.475 41.0944L132.476 41.1139C132.459 42.1299 131.655 42.9657 130.642 42.9976C130.12 43.0139 129.631 42.8145 129.282 42.4739C128.954 42.1718 128.738 41.7489 128.694 41.2621C128.692 41.223 128.682 41.1843 128.68 41.1355C128.679 41.0965 128.687 41.0572 128.686 41.0182L128.686 41.0084C128.641 39.8869 128.47 38.7595 128.174 37.6264C127.233 34.1211 125.171 31.2272 122.481 29.2416C119.801 27.2557 116.482 26.1687 113.047 26.2766L113.027 26.2773C112.506 26.2936 112.027 26.0939 111.668 25.7536Z",
                fill: "#D5D8E3"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/PropsochRating.tsx",
                lineNumber: 49,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M166.652 24.0271C166.304 23.6962 166.076 23.2152 166.06 22.6884C166.043 22.1616 166.241 21.6769 166.567 21.3151C166.904 20.9628 167.37 20.7333 167.891 20.7169C172.137 20.5835 175.923 18.6971 178.593 15.7618C181.171 12.9272 182.703 9.11957 182.591 4.96327L182.591 4.95351C182.581 4.93431 182.58 4.9148 182.58 4.89529L182.579 4.88553C182.579 4.86602 182.578 4.84651 182.587 4.81694C182.581 4.31913 182.779 3.85396 183.096 3.51197C183.423 3.15993 183.899 2.93015 184.42 2.91377C184.942 2.89739 185.421 3.09714 185.779 3.42765C186.138 3.76792 186.365 4.23925 186.382 4.76603L186.382 4.77578C186.448 6.86338 186.915 8.84069 187.725 10.6315C188.525 12.4226 189.658 14.0275 191.043 15.3706C191.083 15.4084 191.122 15.4462 191.162 15.484C194 18.1778 197.847 19.7755 202.035 19.6438C202.556 19.6274 203.036 19.8272 203.394 20.1577C203.752 20.498 203.98 20.9693 203.996 21.4961C204.029 22.5496 203.207 23.4348 202.165 23.4773L202.155 23.4776C201.007 23.5137 199.843 23.6772 198.684 23.9968C195.217 24.9358 192.355 27.0177 190.393 29.7354C188.458 32.4132 187.383 35.6987 187.452 39.1142L187.455 39.2215C187.456 39.241 187.466 39.27 187.467 39.2895C187.468 39.3187 187.459 39.3386 187.459 39.3678L187.46 39.3873C187.444 40.4034 186.639 41.2391 185.626 41.271C185.105 41.2874 184.616 41.0879 184.267 40.7474C183.938 40.4452 183.722 40.0223 183.678 39.5355C183.677 39.4965 183.666 39.4578 183.664 39.409C183.663 39.37 183.672 39.3306 183.67 39.2916L183.67 39.2819C183.625 38.1603 183.454 37.033 183.158 35.8998C182.217 32.3945 180.155 29.5006 177.466 27.515C174.785 25.5291 171.467 24.4421 168.031 24.5501L168.012 24.5507C167.491 24.5671 167.011 24.3673 166.652 24.0271Z",
                fill: "#D5D8E3"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/PropsochRating.tsx",
                lineNumber: 53,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M221.637 22.2985C221.288 21.9677 221.061 21.4866 221.044 20.9599C221.028 20.4331 221.225 19.9484 221.552 19.5866C221.888 19.2343 222.354 19.0048 222.876 18.9884C227.122 18.8549 230.907 16.9686 233.578 14.0333C236.155 11.1986 237.687 7.39105 237.576 3.23475L237.576 3.225C237.565 3.20579 237.565 3.18628 237.564 3.16677L237.564 3.15701C237.563 3.1375 237.562 3.11799 237.571 3.08843C237.565 2.59061 237.763 2.12545 238.081 1.78346C238.408 1.43141 238.884 1.20163 239.405 1.18526C239.926 1.16888 240.406 1.36863 240.764 1.69914C241.122 2.03941 241.349 2.51073 241.366 3.03751L241.366 3.04727C241.432 5.13487 241.9 7.11218 242.71 8.90298C243.51 10.6941 244.642 12.299 246.027 13.642C246.067 13.6799 246.107 13.7177 246.147 13.7555C248.984 16.4492 252.831 18.0469 257.019 17.9153C257.54 17.8989 258.02 18.0987 258.378 18.4292C258.737 18.7695 258.964 19.2408 258.981 19.7676C259.014 20.8211 258.191 21.7063 257.149 21.7488L257.14 21.7491C255.991 21.7852 254.828 21.9487 253.669 22.2683C250.201 23.2073 247.34 25.2892 245.377 28.0069C243.442 30.6847 242.367 33.9702 242.436 37.3857L242.439 37.493C242.44 37.5125 242.45 37.5414 242.451 37.561C242.452 37.5902 242.443 37.61 242.444 37.6393L242.444 37.6588C242.428 38.6749 241.624 39.5106 240.61 39.5425C240.089 39.5589 239.6 39.3594 239.251 39.0188C238.923 38.7167 238.707 38.2938 238.662 37.807C238.661 37.768 238.65 37.7292 238.649 37.6805C238.648 37.6414 238.656 37.6021 238.655 37.5631L238.654 37.5533C238.61 36.4318 238.439 35.3045 238.142 34.1713C237.201 30.666 235.14 27.7721 232.45 25.7865C229.77 23.8006 226.451 22.7136 223.015 22.8216L222.996 22.8222C222.475 22.8386 221.995 22.6388 221.637 22.2985Z",
                fill: "#D5D8E3"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/PropsochRating.tsx",
                lineNumber: 58,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/PropsochRating.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const RatingFilled = ({ width = 260, height = 48, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: "0 0 260 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.69936 29.2106C1.35086 28.8798 1.12322 28.3987 1.10667 27.872C1.09011 27.3452 1.2874 26.8605 1.61413 26.4987C1.95082 26.1464 2.41695 25.9169 2.93809 25.9005C7.18434 25.7671 10.9698 23.8807 13.6403 20.9454C16.2174 18.1108 17.7496 14.3032 17.6383 10.1469L17.638 10.1371C17.6278 10.1179 17.6271 10.0984 17.6265 10.0789L17.6262 10.0691C17.6256 10.0496 17.625 10.0301 17.6337 10.0005C17.6277 9.50272 17.8256 9.03755 18.1433 8.69557C18.4704 8.34352 18.9462 8.11374 19.4673 8.09736C19.9884 8.08099 20.468 8.28074 20.8262 8.61125C21.1847 8.95151 21.412 9.42284 21.4285 9.94962L21.4289 9.95938C21.4945 12.047 21.9623 14.0243 22.7721 15.8151C23.5722 17.6062 24.7046 19.2111 26.0896 20.5542C26.1294 20.592 26.1692 20.6298 26.209 20.6676C29.0468 23.3613 32.8935 24.9591 37.0818 24.8274C37.603 24.811 38.0826 25.0108 38.4407 25.3413C38.7992 25.6816 39.0265 26.1529 39.0431 26.6797C39.0762 27.7332 38.2539 28.6184 37.212 28.6609L37.2023 28.6612C36.0539 28.6973 34.8902 28.8608 33.7313 29.1804C30.2639 30.1194 27.4023 32.2013 25.4398 34.919C23.505 37.5968 22.4297 40.8823 22.4984 44.2978L22.5018 44.4051C22.5024 44.4246 22.513 44.4536 22.5136 44.4731C22.5145 44.5023 22.5055 44.5222 22.5064 44.5514L22.507 44.5709C22.4906 45.587 21.6861 46.4227 20.6728 46.4546C20.1517 46.471 19.6624 46.2715 19.3136 45.9309C18.9853 45.6288 18.7692 45.2059 18.7249 44.7191C18.7237 44.6801 18.7128 44.6413 18.7112 44.5926C18.71 44.5536 18.7184 44.5142 18.7172 44.4752L18.7169 44.4655C18.672 43.3439 18.5013 42.2166 18.2049 41.0834C17.264 37.5781 15.2023 34.6842 12.5124 32.6986C9.83208 30.7127 6.51349 29.6257 3.07788 29.7337L3.05858 29.7343C2.53744 29.7507 2.05782 29.5509 1.69936 29.2106Z",
                fill: "#FF6D33"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/PropsochRating.tsx",
                lineNumber: 78,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M56.6837 27.4821C56.3352 27.1513 56.1076 26.6702 56.091 26.1435C56.0745 25.6167 56.2718 25.132 56.5985 24.7702C56.9352 24.4179 57.4013 24.1884 57.9225 24.172C62.1687 24.0385 65.9542 22.1521 68.6247 19.2169C71.2018 16.3822 72.734 12.5746 72.6227 8.41835L72.6224 8.40859C72.6121 8.38938 72.6115 8.36987 72.6109 8.35036L72.6106 8.34061C72.61 8.3211 72.6094 8.30159 72.6181 8.27202C72.6121 7.7742 72.81 7.30904 73.1277 6.96705C73.4547 6.61501 73.9305 6.38523 74.4517 6.36885C74.9728 6.35247 75.4524 6.55222 75.8106 6.88273C76.169 7.223 76.3964 7.69433 76.4129 8.22111L76.4132 8.23086C76.4788 10.3185 76.9467 12.2958 77.7565 14.0866C78.5566 15.8777 79.689 17.4826 81.0739 18.8256C81.1138 18.8634 81.1536 18.9013 81.1934 18.9391C84.0312 21.6328 87.8779 23.2305 92.0662 23.0989C92.5873 23.0825 93.067 23.2823 93.4251 23.6128C93.7836 23.9531 94.0109 24.4244 94.0275 24.9512C94.0606 26.0047 93.2383 26.8899 92.1963 26.9324L92.1867 26.9327C91.0383 26.9688 89.8745 27.1323 88.7157 27.4519C85.2483 28.3909 82.3867 30.4728 80.4241 33.1905C78.4893 35.8683 77.4141 39.1538 77.4828 42.5693L77.4861 42.6766C77.4868 42.6961 77.4973 42.725 77.4979 42.7446C77.4989 42.7738 77.4898 42.7936 77.4907 42.8229L77.4914 42.8424C77.475 43.8585 76.6705 44.6942 75.6572 44.7261C75.1361 44.7424 74.6468 44.543 74.298 44.2024C73.9697 43.9003 73.7535 43.4774 73.7093 42.9906C73.708 42.9515 73.6972 42.9128 73.6956 42.8641C73.6944 42.825 73.7028 42.7857 73.7016 42.7467L73.7013 42.7369C73.6564 41.6154 73.4857 40.4881 73.1893 39.3549C72.2483 35.8496 70.1867 32.9557 67.4968 30.9701C64.8165 28.9842 61.4979 27.8972 58.0623 28.0052L58.043 28.0058C57.5218 28.0221 57.0422 27.8224 56.6837 27.4821Z",
                fill: "#FF6D33"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/PropsochRating.tsx",
                lineNumber: 82,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M111.668 25.7536C111.32 25.4228 111.092 24.9417 111.075 24.4149C111.059 23.8882 111.256 23.4035 111.583 23.0417C111.92 22.6893 112.386 22.4599 112.907 22.4435C117.153 22.31 120.939 20.4236 123.609 17.4884C126.186 14.6537 127.718 10.8461 127.607 6.68983L127.607 6.68008C127.597 6.66087 127.596 6.64136 127.595 6.62185L127.595 6.61209C127.594 6.59258 127.594 6.57307 127.602 6.5435C127.596 6.04569 127.794 5.58052 128.112 5.23854C128.439 4.88649 128.915 4.65671 129.436 4.64033C129.957 4.62396 130.437 4.82371 130.795 5.15422C131.153 5.49448 131.381 5.96581 131.397 6.49259L131.398 6.50235C131.463 8.58995 131.931 10.5673 132.741 12.3581C133.541 14.1492 134.673 15.7541 136.058 17.0971C136.098 17.1349 136.138 17.1727 136.178 17.2105C139.016 19.9043 142.862 21.502 147.051 21.3704C147.572 21.354 148.051 21.5538 148.409 21.8843C148.768 22.2245 148.995 22.6959 149.012 23.2226C149.045 24.2762 148.223 25.1613 147.181 25.2039L147.171 25.2042C146.023 25.2403 144.859 25.4038 143.7 25.7234C140.233 26.6624 137.371 28.7443 135.409 31.462C133.474 34.1398 132.398 37.4252 132.467 40.8407L132.471 40.9481C132.471 40.9676 132.482 40.9965 132.482 41.016C132.483 41.0453 132.474 41.0651 132.475 41.0944L132.476 41.1139C132.459 42.1299 131.655 42.9657 130.642 42.9976C130.12 43.0139 129.631 42.8145 129.282 42.4739C128.954 42.1718 128.738 41.7489 128.694 41.2621C128.692 41.223 128.682 41.1843 128.68 41.1355C128.679 41.0965 128.687 41.0572 128.686 41.0182L128.686 41.0084C128.641 39.8869 128.47 38.7595 128.174 37.6264C127.233 34.1211 125.171 31.2272 122.481 29.2416C119.801 27.2557 116.482 26.1687 113.047 26.2766L113.027 26.2773C112.506 26.2936 112.027 26.0939 111.668 25.7536Z",
                fill: "#FF6D33"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/PropsochRating.tsx",
                lineNumber: 86,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M166.652 24.0271C166.304 23.6962 166.076 23.2152 166.06 22.6884C166.043 22.1616 166.241 21.6769 166.567 21.3151C166.904 20.9628 167.37 20.7333 167.891 20.7169C172.137 20.5835 175.923 18.6971 178.593 15.7618C181.171 12.9272 182.703 9.11957 182.591 4.96327L182.591 4.95351C182.581 4.93431 182.58 4.9148 182.58 4.89529L182.579 4.88553C182.579 4.86602 182.578 4.84651 182.587 4.81694C182.581 4.31913 182.779 3.85396 183.096 3.51197C183.423 3.15993 183.899 2.93015 184.42 2.91377C184.942 2.89739 185.421 3.09714 185.779 3.42765C186.138 3.76792 186.365 4.23925 186.382 4.76603L186.382 4.77578C186.448 6.86338 186.915 8.84069 187.725 10.6315C188.525 12.4226 189.658 14.0275 191.043 15.3706C191.083 15.4084 191.122 15.4462 191.162 15.484C194 18.1778 197.847 19.7755 202.035 19.6438C202.556 19.6274 203.036 19.8272 203.394 20.1577C203.752 20.498 203.98 20.9693 203.996 21.4961C204.029 22.5496 203.207 23.4348 202.165 23.4773L202.155 23.4776C201.007 23.5137 199.843 23.6772 198.684 23.9968C195.217 24.9358 192.355 27.0177 190.393 29.7354C188.458 32.4132 187.383 35.6987 187.452 39.1142L187.455 39.2215C187.456 39.241 187.466 39.27 187.467 39.2895C187.468 39.3187 187.459 39.3386 187.459 39.3678L187.46 39.3873C187.444 40.4034 186.639 41.2391 185.626 41.271C185.105 41.2874 184.616 41.0879 184.267 40.7474C183.938 40.4452 183.722 40.0223 183.678 39.5355C183.677 39.4965 183.666 39.4578 183.664 39.409C183.663 39.37 183.672 39.3306 183.67 39.2916L183.67 39.2819C183.625 38.1603 183.454 37.033 183.158 35.8998C182.217 32.3945 180.155 29.5006 177.466 27.515C174.785 25.5291 171.467 24.4421 168.031 24.5501L168.012 24.5507C167.491 24.5671 167.011 24.3673 166.652 24.0271Z",
                fill: "#FF6D33"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/PropsochRating.tsx",
                lineNumber: 90,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M221.637 22.2985C221.288 21.9677 221.061 21.4866 221.044 20.9599C221.028 20.4331 221.225 19.9484 221.552 19.5866C221.888 19.2343 222.354 19.0048 222.876 18.9884C227.122 18.8549 230.907 16.9686 233.578 14.0333C236.155 11.1986 237.687 7.39105 237.576 3.23475L237.576 3.225C237.565 3.20579 237.565 3.18628 237.564 3.16677L237.564 3.15701C237.563 3.1375 237.562 3.11799 237.571 3.08843C237.565 2.59061 237.763 2.12545 238.081 1.78346C238.408 1.43141 238.884 1.20163 239.405 1.18526C239.926 1.16888 240.406 1.36863 240.764 1.69914C241.122 2.03941 241.349 2.51073 241.366 3.03751L241.366 3.04727C241.432 5.13487 241.9 7.11218 242.71 8.90298C243.51 10.6941 244.642 12.299 246.027 13.642C246.067 13.6799 246.107 13.7177 246.147 13.7555C248.984 16.4492 252.831 18.0469 257.019 17.9153C257.54 17.8989 258.02 18.0987 258.378 18.4292C258.737 18.7695 258.964 19.2408 258.981 19.7676C259.014 20.8211 258.191 21.7063 257.149 21.7488L257.14 21.7491C255.991 21.7852 254.828 21.9487 253.669 22.2683C250.201 23.2073 247.34 25.2892 245.377 28.0069C243.442 30.6847 242.367 33.9702 242.436 37.3857L242.439 37.493C242.44 37.5125 242.45 37.5414 242.451 37.561C242.452 37.5902 242.443 37.61 242.444 37.6393L242.444 37.6588C242.428 38.6749 241.624 39.5106 240.61 39.5425C240.089 39.5589 239.6 39.3594 239.251 39.0188C238.923 38.7167 238.707 38.2938 238.662 37.807C238.661 37.768 238.65 37.7292 238.649 37.6805C238.648 37.6414 238.656 37.6021 238.655 37.5631L238.654 37.5533C238.61 36.4318 238.439 35.3045 238.142 34.1713C237.201 30.666 235.14 27.7721 232.45 25.7865C229.77 23.8006 226.451 22.7136 223.015 22.8216L222.996 22.8222C222.475 22.8386 221.995 22.6388 221.637 22.2985Z",
                fill: "#FF6D33"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/PropsochRating.tsx",
                lineNumber: 95,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/PropsochRating.tsx",
        lineNumber: 70,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/Documents/frontend-engineer-task/src/assets/budget-icon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BudgetIcon",
    ()=>BudgetIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const BudgetIcon = ({ size, width = 48, height = 48, color = "#292D32", ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: "0 0 49 48",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M25.375 37c-.42 0-.82-.168-1.115-.465l-9.52-9.627a2.56 2.56 0 0 1-.74-1.8c0-.944.765-1.708 1.707-1.708h6.853q2.2 0 3.48-1.16 1.32-1.16 1.64-3.2H15.2a1.2 1.2 0 0 1 0-2.4h12.52q-.2-2.04-1.4-3.2t-3.56-1.16h-7.4a1.36 1.36 0 0 1 0-2.72H33.6a1.2 1.2 0 0 1 0 2.4h-4.52a6 6 0 0 1 1.32 2.12q.44 1.2.52 2.56h2.68a1.2 1.2 0 0 1 0 2.4h-2.72q-.28 2.08-1.28 3.72a6.86 6.86 0 0 1-2.64 2.52q-1.68.88-4.12.88h-4.4l8.051 8.172c.977.99.275 2.668-1.116 2.668",
            fill: color
        }, void 0, false, {
            fileName: "[project]/Documents/frontend-engineer-task/src/assets/budget-icon.tsx",
            lineNumber: 11,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/budget-icon.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/Documents/frontend-engineer-task/src/assets/house-icon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HouseIcon",
    ()=>HouseIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const HouseIcon = ({ size, width = 48, height = 48, strokeWidth = 2, color = "#292D32", ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: "0 0 49 48",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M39.3384 17.8073L39.3808 17.8395C40.2641 18.5635 40.8338 19.6553 40.8575 20.8794V35.1547C40.8575 36.2635 40.4082 37.2672 39.6809 37.9945C38.9536 38.7219 37.9499 39.1711 36.8411 39.1711H28.7625L12.5086 39.1728C10.291 39.1728 8.49219 37.374 8.49219 35.1564V20.9472C8.49219 19.8384 8.94147 18.8347 9.6688 18.1074C9.78239 17.9938 9.90276 17.887 10.0299 17.787L10.035 17.7836L10.1672 17.6835L10.1723 17.6801L22.2216 8.65548C22.2386 8.64361 22.2538 8.63005 22.2708 8.61818C22.9388 8.12143 23.7661 7.82812 24.663 7.82812H24.685C25.5158 7.82812 26.2872 8.08073 26.9281 8.51306L26.9297 8.51475L27.2468 8.75042L39.1062 17.6344L39.1435 17.6615L39.3384 17.8073Z",
                stroke: color,
                strokeWidth: strokeWidth
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/house-icon.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.6758 27C18.6758 25.3431 20.0189 24 21.6758 24H27.6758C29.3326 24 30.6758 25.3431 30.6758 27V39.1724H18.6758V27Z",
                stroke: color,
                strokeWidth: strokeWidth
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/house-icon.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/house-icon.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/Documents/frontend-engineer-task/src/assets/location-icon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocationIcon",
    ()=>LocationIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const LocationIcon = ({ size, width = 48, height = 48, color = "#292D32", ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: "0 0 49 48",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M24.0066 4.34985C32.3451 4.34985 39.1185 11.1233 39.1185 19.4765C39.1185 26.3589 32.0535 36.5629 25.8838 42.1271C24.8511 43.0585 23.2981 43.0377 22.2571 42.1157C14.7253 35.4443 8.87891 26.6069 8.87891 19.4765C8.87891 11.1232 15.6523 4.34985 24.0066 4.34985ZM31.3547 19.166C31.3547 15.1043 28.0613 11.8109 23.9987 11.8109C19.936 11.8109 16.6437 15.1043 16.6437 19.166C16.6437 23.2286 19.936 26.522 23.9987 26.522C28.0614 26.522 31.3547 23.2286 31.3547 19.166Z",
            stroke: color,
            strokeWidth: "2"
        }, void 0, false, {
            fileName: "[project]/Documents/frontend-engineer-task/src/assets/location-icon.tsx",
            lineNumber: 11,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/location-icon.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/Documents/frontend-engineer-task/src/assets/utility.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarIcon",
    ()=>CalendarIcon,
    "CallIcon",
    ()=>CallIcon,
    "CheckIcon",
    ()=>CheckIcon,
    "CircleIcon",
    ()=>CircleIcon,
    "DownArrowIcon",
    ()=>DownArrowIcon,
    "FilterIcon",
    ()=>FilterIcon,
    "HamburgerIcon",
    ()=>HamburgerIcon,
    "InstagramIcon",
    ()=>InstagramIcon,
    "LeftArrowIcon",
    ()=>LeftArrowIcon,
    "LinkedInIcon",
    ()=>LinkedInIcon,
    "LinkedInIconNoBg",
    ()=>LinkedInIconNoBg,
    "ListStarColored",
    ()=>ListStarColored,
    "MailIcon",
    ()=>MailIcon,
    "MailIconNoBg",
    ()=>MailIconNoBg,
    "RightArrowIcon",
    ()=>RightArrowIcon,
    "SearchIcon",
    ()=>SearchIcon,
    "ShareIcon",
    ()=>ShareIcon,
    "SortIcon",
    ()=>SortIcon,
    "UpArrowIcon",
    ()=>UpArrowIcon,
    "UpChevronIcon",
    ()=>UpChevronIcon,
    "YoutubeIcon",
    ()=>YoutubeIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const ShareIcon = ({ size, width = 48, height = 48, color = "#292D32", ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: "0 0 49 48",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M19.4436 26.265L29.6886 32.235M29.6736 15.765L19.4436 21.735M38.0586 13.5C38.0586 15.9853 36.0439 18 33.5586 18C31.0733 18 29.0586 15.9853 29.0586 13.5C29.0586 11.0147 31.0733 9 33.5586 9C36.0439 9 38.0586 11.0147 38.0586 13.5ZM20.0586 24C20.0586 26.4853 18.0439 28.5 15.5586 28.5C13.0733 28.5 11.0586 26.4853 11.0586 24C11.0586 21.5147 13.0733 19.5 15.5586 19.5C18.0439 19.5 20.0586 21.5147 20.0586 24ZM38.0586 34.5C38.0586 36.9853 36.0439 39 33.5586 39C31.0733 39 29.0586 36.9853 29.0586 34.5C29.0586 32.0147 31.0733 30 33.5586 30C36.0439 30 38.0586 32.0147 38.0586 34.5Z",
            stroke: color,
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
            lineNumber: 11,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const CallIcon = ({ size, width = 48, height = 48, color = "292D32", ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: "0 0 49 48",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M30.4453 7.5C32.9896 8.18283 35.3095 9.52285 37.1722 11.3856C39.035 13.2483 40.375 15.5682 41.0578 18.1125",
                stroke: color,
                strokeWidth: "3",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M28.8906 13.2939C30.4208 13.7003 31.8164 14.504 32.936 15.6235C34.0555 16.7431 34.8592 18.1387 35.2656 19.6689",
                stroke: color,
                strokeWidth: "3",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.9023 23.3996C19.4459 26.5871 22.0234 29.158 25.2148 30.6933C25.4503 30.8048 25.7106 30.853 25.9704 30.8333C26.2301 30.8136 26.4802 30.7266 26.6961 30.5808L31.3836 27.4496C31.5907 27.3091 31.83 27.2234 32.0792 27.2004C32.3284 27.1775 32.5793 27.218 32.8086 27.3183L41.5836 31.0871C41.8835 31.2119 42.1341 31.4318 42.2967 31.713C42.4593 31.9942 42.525 32.3211 42.4836 32.6433C42.2055 34.8141 41.1459 36.8091 39.5032 38.2551C37.8604 39.7012 35.7471 40.4991 33.5586 40.4996C26.7956 40.4996 20.3095 37.813 15.5274 33.0308C10.7452 28.2486 8.05859 21.7626 8.05859 14.9996C8.05909 12.8111 8.857 10.6977 10.303 9.05499C11.749 7.41225 13.7441 6.35269 15.9148 6.07457C16.237 6.03318 16.5639 6.09886 16.8451 6.26149C17.1263 6.42411 17.3463 6.67467 17.4711 6.97457L21.2398 15.7683C21.3378 15.994 21.3788 16.2403 21.3592 16.4855C21.3396 16.7307 21.26 16.9674 21.1273 17.1746L17.9961 21.9371C17.8567 22.1525 17.7749 22.4 17.7585 22.6561C17.742 22.9121 17.7916 23.1681 17.9023 23.3996Z",
                stroke: color,
                strokeWidth: "3",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 43,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
        lineNumber: 28,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const RightArrowIcon = ({ size, width = 48, height = 48, color = "#292D32", ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size || width,
        height: size || height,
        viewBox: "0 0 49 48",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M42.1562 24H5.84375",
                stroke: color,
                strokeWidth: "4",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 67,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M26.1992 41.3861L41.1164 26.4689C41.4423 26.1458 41.701 25.7613 41.8774 25.3373C42.0542 24.9136 42.1449 24.4593 42.1449 24.0001C42.1449 23.541 42.0542 23.0867 41.8774 22.6629C41.701 22.239 41.4423 21.8545 41.1164 21.5316L26.1992 6.61426",
                stroke: color,
                strokeWidth: "4",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 73,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const LeftArrowIcon = ({ size, width = 48, height = 48, color = "#292D32", ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size || width,
        height: size || height,
        viewBox: "0 0 49 48",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M42 24H5.6875",
                stroke: color,
                strokeWidth: "4",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 96,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21.6332 41.3861L6.71606 26.4689C6.39015 26.1458 6.13143 25.7613 5.95508 25.3373C5.77829 24.9136 5.6875 24.4593 5.6875 24.0001C5.6875 23.541 5.77829 23.0867 5.95508 22.6629C6.13143 22.239 6.39015 21.8545 6.71606 21.5316L21.6332 6.61426",
                stroke: color,
                strokeWidth: "4",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 102,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
        lineNumber: 89,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const DownArrowIcon = ({ size, width = 48, height = 48, color = "#292D32", ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: "0 0 49 48",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M24 10L24 39",
                stroke: color,
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 119,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M33.3857 31.0543C28.9995 35.1875 26.4685 37.9714 26.4685 37.9714C26.1454 38.2974 25.7609 38.5561 25.3369 38.7324C24.9132 38.9092 24.4589 39 23.9997 39C23.5406 39 23.0863 38.9092 22.6625 38.7324C22.2386 38.5561 21.5312 37.9714 21.5312 37.9714L14.6138 31.0543",
                stroke: color,
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 125,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
        lineNumber: 118,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const UpArrowIcon = ({ size, width = 48, height = 48, color = "#292D32", strokeWidth = 2, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: "0 0 49 48",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M23.9995 39L23.9995 10",
                stroke: color,
                strokeWidth: strokeWidth,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 143,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.6139 17.9457C19 13.8125 21.5311 11.0286 21.5311 11.0286C21.8542 10.7026 22.2387 10.4439 22.6627 10.2676C23.0864 10.0908 23.5407 10 23.9999 10C24.459 10 24.9133 10.0908 25.3371 10.2676C25.761 10.4439 26.4684 11.0286 26.4684 11.0286L33.3857 17.9457",
                stroke: color,
                strokeWidth: strokeWidth,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 149,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
        lineNumber: 142,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const UpChevronIcon = ({ size, width = 48, height = 48, color = "#292D32", strokeWidth = 2, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: "0 0 49 48",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M14.6139 27.9457C19 23.8125 21.5311 21.0286 21.5311 21.0286C21.8542 20.7026 22.2387 20.4439 22.6627 20.2676C23.0864 20.0908 23.5407 20 23.9999 20C24.459 20 24.9133 20.0908 25.3371 20.2676C25.761 20.4439 26.4684 21.0286 26.4684 21.0286L33.3857 27.9457",
            stroke: color,
            strokeWidth: strokeWidth,
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
            lineNumber: 167,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
        lineNumber: 166,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const FilterIcon = ({ size, width = 48, height = 48, color = "#292D32", strokeWidth, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: "0 0 49 48",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 13.2598H41.8476",
                stroke: color,
                strokeWidth: strokeWidth ?? 2,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 185,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 24H42",
                stroke: color,
                strokeWidth: strokeWidth ?? 2,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 191,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 36H42",
                stroke: color,
                strokeWidth: strokeWidth ?? 2,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 197,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16.5",
                cy: "36",
                r: "4.5",
                fill: "white",
                stroke: color,
                strokeWidth: strokeWidth ?? 2
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 203,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16.5",
                cy: "13.25",
                r: "4.5",
                fill: "white",
                stroke: color,
                strokeWidth: strokeWidth ?? 2
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 211,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "32.5",
                cy: "24",
                r: "4.5",
                fill: "white",
                stroke: color,
                strokeWidth: strokeWidth ?? 2
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 219,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
        lineNumber: 184,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const CalendarIcon = ({ size, width = 48, height = 48, color = "#292D32", ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: "0 0 49 48",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M41.1033 15.2661L35.4866 37.8162C35.0866 39.4995 33.5866 40.6661 31.8533 40.6661H9.95328C7.43661 40.6661 5.63664 38.1993 6.38664 35.7827L13.4033 13.2495C13.8866 11.6828 15.3366 10.5994 16.97 10.5994H37.47C39.0533 10.5994 40.37 11.566 40.92 12.8994C41.2366 13.616 41.3033 14.4328 41.1033 15.2661Z",
                stroke: color,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 238,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M31.2266 40.6667H39.1932C41.3432 40.6667 43.0265 38.85 42.8765 36.7L41.2266 14",
                stroke: color,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 245,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.6875 14.6335L22.4208 7.43359",
                stroke: color,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 252,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M31.8594 14.6492L33.426 7.41602",
                stroke: color,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 259,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.3867 24H30.7201",
                stroke: color,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 266,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.7227 30.667H29.056",
                stroke: color,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 273,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
        lineNumber: 237,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const SortIcon = ({ size, width = 48, height = 48, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: "0 0 49 48",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 34L15 6",
                stroke: "#292D32",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 290,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M33 13L33 42",
                stroke: "#292D32",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 296,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.61385 13.6332C10 9.5 12.5311 6.71606 12.5311 6.71606C12.8542 6.39015 13.2387 6.13143 13.6627 5.95508C14.0864 5.77829 14.5407 5.6875 14.9999 5.6875C15.459 5.6875 15.9133 5.77829 16.3371 5.95508C16.761 6.13143 17.4684 6.71606 17.4684 6.71606L24.3857 13.6332",
                stroke: "#292D32",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 302,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M42.3857 34.0543C37.9995 38.1875 35.4685 40.9714 35.4685 40.9714C35.1454 41.2974 34.7609 41.5561 34.3369 41.7324C33.9132 41.9092 33.4589 42 32.9997 42C32.5406 42 32.0863 41.9092 31.6625 41.7324C31.2386 41.5561 30.5312 40.9714 30.5312 40.9714L23.6138 34.0543",
                stroke: "#292D32",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 308,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
        lineNumber: 289,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const SearchIcon = ({ size, width = 48, height = 48, color = "#292D32", ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: "0 0 49 48",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.5 28C25.2989 28 30 23.299 30 17.5C30 11.701 25.2989 7 19.5 7C13.701 7 9 11.701 9 17.5C9 23.299 13.701 28 19.5 28Z",
                stroke: color,
                strokeWidth: "3"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 325,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M39.9999 41C40.5857 41.5858 41.5354 41.5858 42.1212 41C42.707 40.4142 42.707 39.4645 42.1212 38.8787L39.9999 41ZM25.9999 27L39.9999 41L42.1212 38.8787L28.1212 24.8787L25.9999 27Z",
                stroke: color
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 330,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
        lineNumber: 324,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const HamburgerIcon = ({ size, width = 24, height = 24, color = "#292D32", ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: "0 0 49 48",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 13.2598H41.8476",
                stroke: color,
                strokeWidth: "3",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 345,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 24H42",
                stroke: color,
                strokeWidth: "3",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 351,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 36H42",
                stroke: color,
                strokeWidth: "3",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 352,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
        lineNumber: 344,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const ListStarColored = ({ size = 12, width, height, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size || width,
        height: size || height,
        viewBox: "0 0 12 13",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            clipRule: "evenodd",
            d: "M11.996 6.50087C11.996 6.831 11.7294 7.0987 11.3999 7.10043H11.3958C11.0321 7.10043 10.6633 7.14264 10.2938 7.22995C9.1895 7.4907 8.265 8.11339 7.61686 8.94307C6.97856 9.75946 6.60795 10.7765 6.59639 11.8449C6.59639 11.853 6.59639 11.8611 6.59639 11.8692V11.8727V11.8767C6.59697 11.8848 6.59697 11.8923 6.59697 11.8999C6.59697 11.9074 6.59697 11.9149 6.59639 11.9224V11.9241C6.59639 11.9265 6.59639 11.9305 6.59639 11.9305C6.5802 12.2473 6.31829 12.4994 5.9974 12.4994C5.83146 12.4994 5.68172 12.4324 5.57302 12.3237C5.47357 12.2242 5.40882 12.0895 5.39899 11.9397C5.39783 11.9265 5.39725 11.9132 5.39725 11.8999C5.39725 11.8866 5.39783 11.8738 5.39899 11.8605V11.8588C5.39552 11.509 5.35331 11.1534 5.27006 10.7984C5.0093 9.69412 4.38661 8.76962 3.55693 8.12149C2.72725 7.47336 1.69116 7.10101 0.603614 7.10101H0.599566C0.43363 7.10101 0.283883 7.03394 0.175765 6.92525C0.0670682 6.81655 0 6.66623 0 6.50087C0 6.33551 0.0670682 6.18518 0.175765 6.07707C0.284462 5.96837 0.434209 5.9013 0.599566 5.9013C1.94324 5.9013 3.15741 5.34914 4.02814 4.45991C4.87112 3.59901 5.39263 2.42243 5.39783 1.12385V1.12154C5.39783 1.11518 5.39725 1.10882 5.39725 1.10246V1.09957C5.39725 1.09263 5.39725 1.08569 5.39783 1.07817V1.07702C5.40361 0.920911 5.46953 0.779258 5.57302 0.675765C5.68172 0.567068 5.83204 0.5 5.9974 0.5C6.16276 0.5 6.31308 0.567068 6.4212 0.675765C6.5299 0.784462 6.59697 0.934209 6.59697 1.09957V1.10246C6.59697 2.40855 7.11906 3.59265 7.9655 4.45818C7.97764 4.4709 7.98979 4.48304 8.00251 4.49576C8.87092 5.36418 10.0706 5.9013 11.3958 5.9013C11.5612 5.9013 11.7115 5.96837 11.8196 6.07707C11.9289 6.18518 11.996 6.33551 11.996 6.50087Z",
            fill: "#FF6D33",
            fillRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
            lineNumber: 369,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
        lineNumber: 362,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const CircleIcon = ({ size = 12, width, height, color = "#292D32", ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size || width,
        height: size || height,
        viewBox: "0 0 48 48",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "24",
            cy: "24",
            r: "18",
            fill: color
        }, void 0, false, {
            fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
            lineNumber: 392,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
        lineNumber: 385,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const CheckIcon = ({ size = 12, width, height, color = "#FFFFFF", strokeWidth = "3", ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size || width,
        height: size || height,
        viewBox: "0 0 48 48",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M15 25.776L18.3154 29.8011C19.6249 31.3913 21.9505 31.401 23.2718 29.8217L34 17",
            stroke: color,
            strokeWidth: strokeWidth,
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
            lineNumber: 411,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
        lineNumber: 404,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const InstagramIcon = ({ size = 12, width, height, color = "#FFFFFF", ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size || width,
        height: size || height,
        viewBox: "0 0 48 48",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M38 6H10C7.79086 6 6 7.79086 6 10V38C6 40.2091 7.79086 42 10 42H38C40.2091 42 42 40.2091 42 38V10C42 7.79086 40.2091 6 38 6Z",
                fill: "#292D32"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 434,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32 12H16C13.7909 12 12 13.7909 12 16V32C12 34.2091 13.7909 36 16 36H32C34.2091 36 36 34.2091 36 32V16C36 13.7909 34.2091 12 32 12Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 438,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z",
                stroke: "#292D32",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 442,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M31 16C31.5523 16 32 16.4477 32 17C32 17.5523 31.5523 18 31 18C30.4477 18 30 17.5523 30 17C30 16.4477 30.4477 16 31 16Z",
                fill: "#292D32",
                stroke: "#292D32",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 447,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
        lineNumber: 427,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const MailIcon = ({ size = 12, width, height, color = "#FFFFFF", ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size || width,
        height: size || height,
        viewBox: "0 0 48 48",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M38 6H10C7.79086 6 6 7.79086 6 10V38C6 40.2091 7.79086 42 10 42H38C40.2091 42 42 40.2091 42 38V10C42 7.79086 40.2091 6 38 6Z",
                fill: "#292D32"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 470,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32 15H16C13.7909 15 12 16.7909 12 19V29C12 31.2091 13.7909 33 16 33H32C34.2091 33 36 31.2091 36 29V19C36 16.7909 34.2091 15 32 15Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 474,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 19L22.0462 22.4763C23.199 23.207 24.6415 23.1706 25.7605 22.3824L31 19",
                stroke: "#292D32",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 478,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
        lineNumber: 463,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const MailIconNoBg = ({ size = 14, width, height, color = "#FFFFFF", ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size || width,
        height: size || height,
        viewBox: "0 0 48 48",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32 15H16C13.7909 15 12 16.7909 12 19V29C12 31.2091 13.7909 33 16 33H32C34.2091 33 36 31.2091 36 29V19C36 16.7909 34.2091 15 32 15Z",
                fill: "#292D32"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 504,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 19L22.0462 22.4763C23.199 23.207 24.6415 23.1706 25.7605 22.3824L31 19",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 508,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
        lineNumber: 493,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const LinkedInIcon = ({ size = 12, width, height, color = "#FFFFFF", ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size || width,
        height: size || height,
        viewBox: "0 0 48 48",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M38 6H10C7.79086 6 6 7.79086 6 10V38C6 40.2091 7.79086 42 10 42H38C40.2091 42 42 40.2091 42 38V10C42 7.79086 40.2091 6 38 6Z",
                fill: "#292D32"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 531,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M31 12H17C14.2386 12 12 14.2386 12 17V31C12 33.7614 14.2386 36 17 36H31C33.7614 36 36 33.7614 36 31V17C36 14.2386 33.7614 12 31 12Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 535,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.6465 19.074V16.986H19.8425V19.074H17.6465ZM17.6465 30V20.532H19.8425V30H17.6465ZM22.1816 30V20.532H24.0176L24.1976 21.792H24.3236C24.5396 21.504 24.7916 21.252 25.0796 21.036C25.3796 20.808 25.7156 20.634 26.0876 20.514C26.4716 20.382 26.8916 20.316 27.3476 20.316C27.9476 20.316 28.4756 20.424 28.9316 20.64C29.3996 20.856 29.7656 21.204 30.0296 21.684C30.2936 22.164 30.4256 22.806 30.4256 23.61V30H28.2116V24.006C28.2116 23.67 28.1696 23.394 28.0856 23.178C28.0136 22.95 27.8996 22.77 27.7436 22.638C27.5996 22.494 27.4196 22.392 27.2036 22.332C26.9876 22.272 26.7476 22.242 26.4836 22.242C26.0876 22.242 25.7276 22.338 25.4036 22.53C25.0916 22.722 24.8396 22.986 24.6476 23.322C24.4676 23.658 24.3776 24.048 24.3776 24.492V30H22.1816Z",
                fill: "#292D32"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 539,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
        lineNumber: 524,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const LinkedInIconNoBg = ({ size = 12, width, height, color = "#FFFFFF", ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size || width,
        height: size || height,
        viewBox: "0 0 48 48",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M31 12H17C14.2386 12 12 14.2386 12 17V31C12 33.7614 14.2386 36 17 36H31C33.7614 36 36 33.7614 36 31V17C36 14.2386 33.7614 12 31 12Z",
                fill: "#292D32"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 559,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.6465 19.074V16.986H19.8425V19.074H17.6465ZM17.6465 30V20.532H19.8425V30H17.6465ZM22.1816 30V20.532H24.0176L24.1976 21.792H24.3236C24.5396 21.504 24.7916 21.252 25.0796 21.036C25.3796 20.808 25.7156 20.634 26.0876 20.514C26.4716 20.382 26.8916 20.316 27.3476 20.316C27.9476 20.316 28.4756 20.424 28.9316 20.64C29.3996 20.856 29.7656 21.204 30.0296 21.684C30.2936 22.164 30.4256 22.806 30.4256 23.61V30H28.2116V24.006C28.2116 23.67 28.1696 23.394 28.0856 23.178C28.0136 22.95 27.8996 22.77 27.7436 22.638C27.5996 22.494 27.4196 22.392 27.2036 22.332C26.9876 22.272 26.7476 22.242 26.4836 22.242C26.0876 22.242 25.7276 22.338 25.4036 22.53C25.0916 22.722 24.8396 22.986 24.6476 23.322C24.4676 23.658 24.3776 24.048 24.3776 24.492V30H22.1816Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 563,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
        lineNumber: 552,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const YoutubeIcon = ({ size = 12, width, height, color = "#FFFFFF", ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size || width,
        height: size || height,
        viewBox: "0 0 48 48",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M38 6H10C7.79086 6 6 7.79086 6 10V38C6 40.2091 7.79086 42 10 42H38C40.2091 42 42 40.2091 42 38V10C42 7.79086 40.2091 6 38 6Z",
                fill: "#292D32"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 584,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32 14H16C13.7909 14 12 15.7909 12 18V30C12 32.2091 13.7909 34 16 34H32C34.2091 34 36 32.2091 36 30V18C36 15.7909 34.2091 14 32 14Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 588,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M26.8571 22.7628C27.8095 23.3127 27.8095 24.6873 26.8571 25.2372L23.6429 27.0929C22.6905 27.6428 21.5 26.9555 21.5 25.8558V22.1442C21.5 21.0445 22.6905 20.3572 23.6429 20.9071L26.8571 22.7628Z",
                fill: "#292D32"
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
                lineNumber: 592,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/frontend-engineer-task/src/assets/utility.tsx",
        lineNumber: 577,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/Documents/frontend-engineer-task/src/components/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/src/utils/helpers.ts [app-ssr] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2 py-1.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            tertiary: "border-transparent bg-tertiarylight text-tertiary",
            white: "border-transparent bg-background text-foreground hover:bg-background/80",
            destructive: "border-transparent bg-destructivelight text-destructive hover:bg-destructivelight/80",
            outline: "text-foreground",
            primaryLight: "rounded-full bg-primarylight border-none text-primary",
            muted: "bg-muted text-foreground border-none",
            success: "bg-successlight text-success border-none",
            warning: "bg-warninglight text-warning border-none"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/frontend-engineer-task/src/components/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/async_hooks [external] (async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("async_hooks", () => require("async_hooks"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DiscoveryMap,
    "renderIcon",
    ()=>renderIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// TODO:  When zooming out, property nodes overlap and become cluttered.
// Improve visual spacing for a better UI/UX.
// TODO : Clicking a marker should ideally open the popup with the selected property details. Currently not implemented. Implement it.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$LayersControl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/react-leaflet/lib/LayersControl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/react-leaflet/lib/MapContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/react-leaflet/lib/Marker.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/react-leaflet/lib/Popup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/react-leaflet/lib/TileLayer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/react-leaflet/lib/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$assets$2f$PropsochRating$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/src/assets/PropsochRating.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/src/utils/helpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$assets$2f$budget$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/src/assets/budget-icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$assets$2f$house$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/src/assets/house-icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$assets$2f$location$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/src/assets/location-icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$assets$2f$utility$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/src/assets/utility.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/leaflet/dist/leaflet-src.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$components$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/src/components/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$server$2e$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/compiled/react-dom/server.node.js [app-ssr] (ecmascript)");
"use client";
;
;
// Load Leaflet CSS only on client side
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
;
;
;
;
;
;
;
;
;
;
;
;
const renderIcon = (icon, ariaLabel, transform = "translate(-8px, -4px)")=>`<div style="transform: ${transform}" aria-label="${ariaLabel}" role="button">${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$server$2e$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderToString"])(icon)}</div>`;
function getOtherLocationIcon(label, isSelected, icon = true) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].divIcon({
        html: renderIcon(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$components$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "white",
            className: "w-max whitespace-nowrap",
            children: label
        }, void 0, false, {
            fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this), label, isSelected ? "translate(-10px, -20px)" : "translate(-15px, -20px)")
    });
}
function MapClickHandler({ onClick }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMapEvents"])({
        click: ()=>onClick()
    });
    return null;
}
function MapZoomHandler({ onZoomChange }) {
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMapEvents"])({
        zoomend: ()=>{
            onZoomChange(map.getZoom());
        }
    });
    return null;
}
function MapController({ selectedLocation }) {
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMap"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedLocation) {
            map.panTo([
                selectedLocation.lat,
                selectedLocation.lon
            ], {
                animate: true,
                duration: 1.5
            });
        }
    }, [
        selectedLocation,
        map
    ]);
    return null;
}
function getJitteredPosition(lat, lon, index, zoom) {
    // Only apply jitter when fairly zoomed out to reduce visual clutter.
    if (zoom >= 13) return [
        lat,
        lon
    ];
    const baseOffset = 0.002; // ~200m; small enough to keep points in the same area
    const angle = index % 8 * (Math.PI / 4); // distribute around a circle
    const radius = baseOffset * (zoom <= 10 ? 1.5 : 1);
    const dLat = Math.cos(angle) * radius;
    const dLon = Math.sin(angle) * radius;
    return [
        lat + dLat,
        lon + dLon
    ];
}
function DiscoveryMap({ allFilteredData }) {
    const [selectedLocation, setSelectedLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedProperty, setSelectedProperty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(12);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load Leaflet compatibility and ensure client-side rendering
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedLocation) {
            const found = allFilteredData.projects.find((prop)=>prop.name == selectedLocation.name);
            setSelectedProperty(found);
            const el = document.querySelector(`[data-marker-id="${selectedLocation.name}"]`);
            if (el) {
                el.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });
            }
        }
    }, [
        selectedLocation
    ]);
    // Don't render map until client-side is ready
    if (!isMounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: sectionRef,
            style: {
                fontFamily: "Arial, sans-serif"
            },
            className: "flex aspect-auto h-full flex-col gap-4 overflow-hidden",
            "aria-label": `Project discovery via map`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative size-full overflow-hidden flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-500",
                    children: "Loading map..."
                }, void 0, false, {
                    fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                    lineNumber: 177,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
            lineNumber: 170,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        style: {
            fontFamily: "Arial, sans-serif"
        },
        className: "flex aspect-auto h-full flex-col gap-4 overflow-hidden",
        "aria-label": `Project discovery via map`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative size-full overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MapContainer"], {
                center: [
                    12.97,
                    77.59
                ],
                zoom: 12,
                scrollWheelZoom: true,
                dragging: true,
                touchZoom: true,
                className: "border-lightborder z-10 size-full rounded-lg border object-cover",
                "aria-label": "Map view",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$LayersControl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayersControl"], {
                        position: "bottomleft",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$LayersControl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayersControl"].BaseLayer, {
                                checked: true,
                                name: "Street View",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TileLayer"], {
                                    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                                    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$LayersControl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayersControl"].BaseLayer, {
                                name: "Satellite View",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TileLayer"], {
                                    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                                    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                }, void 0, false, {
                                    fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MapClickHandler, {
                        onClick: ()=>setSelectedLocation(null)
                    }, void 0, false, {
                        fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MapZoomHandler, {
                        onZoomChange: setZoom
                    }, void 0, false, {
                        fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MapController, {
                        selectedLocation: selectedLocation
                    }, void 0, false, {
                        fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this),
                    allFilteredData && allFilteredData.projects.length > 0 ? allFilteredData.projects.map((project, index)=>{
                        const position = getJitteredPosition(project.latitude, project.longitude, index, zoom);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Marker"], {
                            position: position,
                            icon: getOtherLocationIcon(project.name, selectedProperty?.id == project.id),
                            eventHandlers: {
                                click: ()=>setSelectedLocation({
                                        name: project.name,
                                        lat: project.latitude,
                                        lon: project.longitude,
                                        distance: 0,
                                        duration: 0
                                    })
                            }
                        }, project.id, false, {
                            fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                            lineNumber: 235,
                            columnNumber: 21
                        }, this);
                    }) : null,
                    selectedLocation && selectedProperty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popup"], {
                        position: [
                            selectedLocation.lat,
                            selectedLocation.lon
                        ],
                        autoClose: false,
                        closeOnClick: false,
                        offset: [
                            0,
                            -20
                        ],
                        closeOnEscapeKey: true,
                        minWidth: 400,
                        closeButton: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/property-for-sale-in/${selectedProperty.city.toLowerCase()}/${selectedProperty.slug.toLowerCase()}/${selectedProperty.id}`,
                            target: "_blank",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: selectedProperty.image,
                                        alt: selectedProperty.alt,
                                        width: 500,
                                        height: 500,
                                        loading: "lazy",
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("aspect-video size-full rounded-lg object-cover transition-all duration-400 ease-in-out", selectedProperty.projectStatus === "soldOut" && "grayscale")
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                        lineNumber: 273,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["para"])({
                                            size: "lg",
                                            color: "dark"
                                        }), "font-semibold"),
                                        children: selectedProperty.name
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                        lineNumber: 285,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3 whitespace-nowrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex w-full items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["para"])({
                                                            color: "dark",
                                                            size: "sm"
                                                        }), "flex w-full items-center gap-2"),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$assets$2f$location$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocationIcon"], {
                                                                width: 20,
                                                                height: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                                                lineNumber: 302,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: selectedProperty.micromarket
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                                                lineNumber: 303,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["para"])({
                                                            color: "dark",
                                                            size: "sm"
                                                        }), "flex w-full items-center justify-end gap-2"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$assets$2f$PropsochRating$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PropscoreRating"], {
                                                            rating: selectedProperty.propscore,
                                                            width: 110,
                                                            height: 24,
                                                            className: "ml-auto w-max max-w-40"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                                        lineNumber: 305,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                                lineNumber: 295,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex w-full items-center justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["para"])({
                                                            color: "dark",
                                                            size: "sm"
                                                        }), "flex w-full max-w-40 items-center gap-2 truncate"),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$assets$2f$budget$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BudgetIcon"], {
                                                                width: 20,
                                                                height: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 25
                                                            }, this),
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(selectedProperty.minPrice, false),
                                                            " -",
                                                            " ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(selectedProperty.maxPrice, false)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["para"])({
                                                            color: "dark",
                                                            size: "sm"
                                                        }), "flex w-full items-center justify-end gap-2"),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$assets$2f$utility$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CalendarIcon"], {
                                                                height: 20,
                                                                width: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                                                lineNumber: 336,
                                                                columnNumber: 25
                                                            }, this),
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(selectedProperty.possessionDate)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                                lineNumber: 319,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex w-full items-center justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["para"])({
                                                            color: "dark",
                                                            size: "sm"
                                                        }), "flex w-full max-w-40 items-center gap-2 truncate"),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$assets$2f$house$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HouseIcon"], {
                                                                width: 20,
                                                                height: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                                                lineNumber: 347,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-32 max-w-32 truncate",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatenateTypologies"])(selectedProperty.typologies)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                                                lineNumber: 348,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["para"])({
                                                            color: "dark",
                                                            size: "sm"
                                                        }), "flex w-full items-center justify-end gap-2"),
                                                        children: [
                                                            selectedProperty.minSaleableArea,
                                                            " -",
                                                            " ",
                                                            selectedProperty.maxSaleableArea,
                                                            " sqft"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                                lineNumber: 340,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                        lineNumber: 294,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                                lineNumber: 272,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                            lineNumber: 267,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                        lineNumber: 258,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
                lineNumber: 192,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
            lineNumber: 191,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/frontend-engineer-task/src/components/discovery-map.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__53d8e1a7._.js.map