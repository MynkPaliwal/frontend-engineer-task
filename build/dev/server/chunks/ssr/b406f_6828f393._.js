module.exports = [
"[project]/Documents/frontend-engineer-task/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/Documents/frontend-engineer-task/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/context.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTEXT_VERSION",
    ()=>CONTEXT_VERSION,
    "LeafletContext",
    ()=>LeafletContext,
    "createLeafletContext",
    ()=>createLeafletContext,
    "extendContext",
    ()=>extendContext,
    "useLeafletContext",
    ()=>useLeafletContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const CONTEXT_VERSION = 1;
function createLeafletContext(map) {
    return Object.freeze({
        __version: CONTEXT_VERSION,
        map
    });
}
function extendContext(source, extra) {
    return Object.freeze({
        ...source,
        ...extra
    });
}
const LeafletContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function useLeafletContext() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(LeafletContext);
    if (context == null) {
        throw new Error('No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>');
    }
    return context;
}
}),
"[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/component.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createContainerComponent",
    ()=>createContainerComponent,
    "createDivOverlayComponent",
    ()=>createDivOverlayComponent,
    "createLeafComponent",
    ()=>createLeafComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/context.js [app-ssr] (ecmascript)");
;
;
;
function createContainerComponent(useElement) {
    function ContainerComponent(props, forwardedRef) {
        const { instance, context } = useElement(props).current;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, ()=>instance);
        const { children } = props;
        return children == null ? null : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LeafletContext"], {
            value: context
        }, children);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(ContainerComponent);
}
function createDivOverlayComponent(useElement) {
    function OverlayComponent(props, forwardedRef) {
        const [isOpen, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
        const { instance } = useElement(props, setOpen).current;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, ()=>instance);
        // biome-ignore lint/correctness/useExhaustiveDependencies: update overlay when children change
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function updateOverlay() {
            if (isOpen) {
                instance.update();
            }
        }, [
            instance,
            isOpen,
            props.children
        ]);
        // @ts-ignore _contentNode missing in type definition
        const contentNode = instance._contentNode;
        return contentNode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(props.children, contentNode) : null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(OverlayComponent);
}
function createLeafComponent(useElement) {
    function LeafComponent(props, forwardedRef) {
        const { instance } = useElement(props).current;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, ()=>instance);
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(LeafComponent);
}
}),
"[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/control.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createControlHook",
    ()=>createControlHook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/context.js [app-ssr] (ecmascript)");
;
;
function createControlHook(useElement) {
    return function useLeafletControl(props) {
        const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLeafletContext"])();
        const elementRef = useElement(props, context);
        const { instance } = elementRef.current;
        const positionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(props.position);
        const { position } = props;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function addControl() {
            instance.addTo(context.map);
            return function removeControl() {
                instance.remove();
            };
        }, [
            context.map,
            instance
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function updateControl() {
            if (position != null && position !== positionRef.current) {
                instance.setPosition(position);
                positionRef.current = position;
            }
        }, [
            instance,
            position
        ]);
        return elementRef;
    };
}
}),
"[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/element.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createElementHook",
    ()=>createElementHook,
    "createElementObject",
    ()=>createElementObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function createElementObject(instance, context, container) {
    return Object.freeze({
        instance,
        context,
        container
    });
}
function createElementHook(createElement, updateElement) {
    if (updateElement == null) {
        return function useImmutableLeafletElement(props, context) {
            const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
            if (!elementRef.current) elementRef.current = createElement(props, context);
            return elementRef;
        };
    }
    return function useMutableLeafletElement(props, context) {
        const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
        if (!elementRef.current) elementRef.current = createElement(props, context);
        const propsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(props);
        const { instance } = elementRef.current;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function updateElementProps() {
            if (propsRef.current !== props) {
                updateElement(instance, props, propsRef.current);
                propsRef.current = props;
            }
        }, [
            instance,
            props,
            updateElement
        ]);
        return elementRef;
    };
}
}),
"[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/attribution.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAttribution",
    ()=>useAttribution
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useAttribution(map, attribution) {
    const attributionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(attribution);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function updateAttribution() {
        if (attribution !== attributionRef.current && map.attributionControl != null) {
            if (attributionRef.current != null) {
                map.attributionControl.removeAttribution(attributionRef.current);
            }
            if (attribution != null) {
                map.attributionControl.addAttribution(attribution);
            }
        }
        attributionRef.current = attribution;
    }, [
        map,
        attribution
    ]);
}
}),
"[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/events.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEventHandlers",
    ()=>useEventHandlers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useEventHandlers(element, eventHandlers) {
    const eventHandlersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function addEventHandlers() {
        if (eventHandlers != null) {
            element.instance.on(eventHandlers);
        }
        eventHandlersRef.current = eventHandlers;
        return function removeEventHandlers() {
            if (eventHandlersRef.current != null) {
                element.instance.off(eventHandlersRef.current);
            }
            eventHandlersRef.current = null;
        };
    }, [
        element,
        eventHandlers
    ]);
}
}),
"[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/pane.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "withPane",
    ()=>withPane
]);
function withPane(props, context) {
    const pane = props.pane ?? context.pane;
    return pane ? {
        ...props,
        pane
    } : props;
}
}),
"[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/div-overlay.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDivOverlayHook",
    ()=>createDivOverlayHook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$attribution$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/attribution.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/events.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$pane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/pane.js [app-ssr] (ecmascript)");
;
;
;
;
function createDivOverlayHook(useElement, useLifecycle) {
    return function useDivOverlay(props, setOpen) {
        const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLeafletContext"])();
        const elementRef = useElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$pane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withPane"])(props, context), context);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$attribution$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAttribution"])(context.map, props.attribution);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEventHandlers"])(elementRef.current, props.eventHandlers);
        useLifecycle(elementRef.current, context, props, setOpen);
        return elementRef;
    };
}
}),
"[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/layer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLayerHook",
    ()=>createLayerHook,
    "useLayerLifecycle",
    ()=>useLayerLifecycle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$attribution$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/attribution.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/events.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$pane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/pane.js [app-ssr] (ecmascript)");
;
;
;
;
;
function useLayerLifecycle(element, context) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function addLayer() {
        const container = context.layerContainer ?? context.map;
        container.addLayer(element.instance);
        return function removeLayer() {
            context.layerContainer?.removeLayer(element.instance);
            context.map.removeLayer(element.instance);
        };
    }, [
        context,
        element
    ]);
}
function createLayerHook(useElement) {
    return function useLayer(props) {
        const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLeafletContext"])();
        const elementRef = useElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$pane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withPane"])(props, context), context);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$attribution$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAttribution"])(context.map, props.attribution);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEventHandlers"])(elementRef.current, props.eventHandlers);
        useLayerLifecycle(elementRef.current, context);
        return elementRef;
    };
}
}),
"[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/path.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPathHook",
    ()=>createPathHook,
    "usePathOptions",
    ()=>usePathOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/events.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/layer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$pane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/pane.js [app-ssr] (ecmascript)");
;
;
;
;
;
function usePathOptions(element, props) {
    const optionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function updatePathOptions() {
        if (props.pathOptions !== optionsRef.current) {
            const options = props.pathOptions ?? {};
            element.instance.setStyle(options);
            optionsRef.current = options;
        }
    }, [
        element,
        props
    ]);
}
function createPathHook(useElement) {
    return function usePath(props) {
        const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLeafletContext"])();
        const elementRef = useElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$pane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withPane"])(props, context), context);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEventHandlers"])(elementRef.current, props.eventHandlers);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayerLifecycle"])(elementRef.current, context);
        usePathOptions(elementRef.current, props);
        return elementRef;
    };
}
}),
"[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/generic.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createControlComponent",
    ()=>createControlComponent,
    "createLayerComponent",
    ()=>createLayerComponent,
    "createOverlayComponent",
    ()=>createOverlayComponent,
    "createPathComponent",
    ()=>createPathComponent,
    "createTileLayerComponent",
    ()=>createTileLayerComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$control$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/control.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$div$2d$overlay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/div-overlay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/element.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/layer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$path$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/path.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function createControlComponent(createInstance) {
    function createElement(props, context) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElementObject"])(createInstance(props), context);
    }
    const useElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElementHook"])(createElement);
    const useControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$control$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createControlHook"])(useElement);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLeafComponent"])(useControl);
}
function createLayerComponent(createElement, updateElement) {
    const useElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElementHook"])(createElement, updateElement);
    const useLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLayerHook"])(useElement);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContainerComponent"])(useLayer);
}
function createOverlayComponent(createElement, useLifecycle) {
    const useElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElementHook"])(createElement);
    const useOverlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$div$2d$overlay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDivOverlayHook"])(useElement, useLifecycle);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDivOverlayComponent"])(useOverlay);
}
function createPathComponent(createElement, updateElement) {
    const useElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElementHook"])(createElement, updateElement);
    const usePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$path$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPathHook"])(useElement);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContainerComponent"])(usePath);
}
function createTileLayerComponent(createElement, updateElement) {
    const useElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElementHook"])(createElement, updateElement);
    const useLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLayerHook"])(useElement);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLeafComponent"])(useLayer);
}
}),
"[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/grid-layer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateGridLayer",
    ()=>updateGridLayer
]);
function updateGridLayer(layer, props, prevProps) {
    const { opacity, zIndex } = props;
    if (opacity != null && opacity !== prevProps.opacity) {
        layer.setOpacity(opacity);
    }
    if (zIndex != null && zIndex !== prevProps.zIndex) {
        layer.setZIndex(zIndex);
    }
}
}),
"[project]/Documents/frontend-engineer-task/node_modules/react-leaflet/lib/LayersControl.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayersControl",
    ()=>LayersControl,
    "createControlledLayer",
    ()=>createControlledLayer,
    "useLayersControl",
    ()=>useLayersControl,
    "useLayersControlElement",
    ()=>useLayersControlElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$control$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/control.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/element.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/leaflet/dist/leaflet-src.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
const useLayersControlElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElementHook"])(function createLayersControl({ children: _c, ...options }, ctx) {
    const control = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Control"].Layers(undefined, undefined, options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElementObject"])(control, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendContext"])(ctx, {
        layersControl: control
    }));
}, function updateLayersControl(control, props, prevProps) {
    if (props.collapsed !== prevProps.collapsed) {
        if (props.collapsed === true) {
            control.collapse();
        } else {
            control.expand();
        }
    }
});
const useLayersControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$control$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createControlHook"])(useLayersControlElement);
const LayersControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContainerComponent"])(useLayersControl);
function createControlledLayer(addLayerToControl) {
    return function ControlledLayer(props) {
        const parentContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLeafletContext"])();
        const propsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(props);
        const [layer, setLayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
        const { layersControl, map } = parentContext;
        const addLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((layerToAdd)=>{
            if (layersControl != null) {
                if (propsRef.current.checked) {
                    map.addLayer(layerToAdd);
                }
                addLayerToControl(layersControl, layerToAdd, propsRef.current.name);
                setLayer(layerToAdd);
            }
        }, [
            addLayerToControl,
            layersControl,
            map
        ]);
        const removeLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((layerToRemove)=>{
            layersControl?.removeLayer(layerToRemove);
            setLayer(null);
        }, [
            layersControl
        ]);
        const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendContext"])(parentContext, {
                layerContainer: {
                    addLayer,
                    removeLayer
                }
            });
        }, [
            parentContext,
            addLayer,
            removeLayer
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            if (layer !== null && propsRef.current !== props) {
                if (props.checked === true && (propsRef.current.checked == null || propsRef.current.checked === false)) {
                    map.addLayer(layer);
                } else if (propsRef.current.checked === true && (props.checked == null || props.checked === false)) {
                    map.removeLayer(layer);
                }
                propsRef.current = props;
            }
        });
        return props.children ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LeafletContext"], {
            value: context
        }, props.children) : null;
    };
}
LayersControl.BaseLayer = createControlledLayer(function addBaseLayer(layersControl, layer, name) {
    layersControl.addBaseLayer(layer, name);
});
LayersControl.Overlay = createControlledLayer(function addOverlay(layersControl, layer, name) {
    layersControl.addOverlay(layer, name);
});
}),
"[project]/Documents/frontend-engineer-task/node_modules/react-leaflet/lib/MapContainer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapContainer",
    ()=>MapContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/leaflet/dist/leaflet-src.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
function MapContainerComponent({ bounds, boundsOptions, center, children, className, id, placeholder, style, whenReady, zoom, ...options }, forwardedRef) {
    const [props] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        className,
        id,
        style
    });
    const [context, setContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const mapInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, ()=>context?.map ?? null, [
        context
    ]);
    // biome-ignore lint/correctness/useExhaustiveDependencies: ref callback
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((node)=>{
        if (node !== null && !mapInstanceRef.current) {
            const map = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Map"](node, options);
            mapInstanceRef.current = map;
            if (center != null && zoom != null) {
                map.setView(center, zoom);
            } else if (bounds != null) {
                map.fitBounds(bounds, boundsOptions);
            }
            if (whenReady != null) {
                map.whenReady(whenReady);
            }
            setContext((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLeafletContext"])(map));
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            context?.map.remove();
        };
    }, [
        context
    ]);
    const contents = context ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LeafletContext"], {
        value: context
    }, children) : placeholder ?? null;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...props,
        ref: mapRef
    }, contents);
}
const MapContainer = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(MapContainerComponent);
}),
"[project]/Documents/frontend-engineer-task/node_modules/react-leaflet/lib/Marker.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Marker",
    ()=>Marker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/element.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$generic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/generic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/leaflet/dist/leaflet-src.js [app-ssr] (ecmascript)");
;
;
const Marker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$generic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLayerComponent"])(function createMarker({ position, ...options }, ctx) {
    const marker = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Marker"](position, options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElementObject"])(marker, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendContext"])(ctx, {
        overlayContainer: marker
    }));
}, function updateMarker(marker, props, prevProps) {
    if (props.position !== prevProps.position) {
        marker.setLatLng(props.position);
    }
    if (props.icon != null && props.icon !== prevProps.icon) {
        marker.setIcon(props.icon);
    }
    if (props.zIndexOffset != null && props.zIndexOffset !== prevProps.zIndexOffset) {
        marker.setZIndexOffset(props.zIndexOffset);
    }
    if (props.opacity != null && props.opacity !== prevProps.opacity) {
        marker.setOpacity(props.opacity);
    }
    if (marker.dragging != null && props.draggable !== prevProps.draggable) {
        if (props.draggable === true) {
            marker.dragging.enable();
        } else {
            marker.dragging.disable();
        }
    }
});
}),
"[project]/Documents/frontend-engineer-task/node_modules/react-leaflet/lib/Popup.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popup",
    ()=>Popup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/element.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$generic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/generic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/leaflet/dist/leaflet-src.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
const Popup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$generic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOverlayComponent"])(function createPopup(props, context) {
    const popup = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popup"](props, context.overlayContainer);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElementObject"])(popup, context);
}, function usePopupLifecycle(element, context, { position }, setOpen) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function addPopup() {
        const { instance } = element;
        function onPopupOpen(event) {
            if (event.popup === instance) {
                instance.update();
                setOpen(true);
            }
        }
        function onPopupClose(event) {
            if (event.popup === instance) {
                setOpen(false);
            }
        }
        context.map.on({
            popupopen: onPopupOpen,
            popupclose: onPopupClose
        });
        if (context.overlayContainer == null) {
            // Attach to a Map
            if (position != null) {
                instance.setLatLng(position);
            }
            instance.openOn(context.map);
        } else {
            // Attach to container component
            context.overlayContainer.bindPopup(instance);
        }
        return function removePopup() {
            context.map.off({
                popupopen: onPopupOpen,
                popupclose: onPopupClose
            });
            context.overlayContainer?.unbindPopup();
            context.map.removeLayer(instance);
        };
    }, [
        element,
        context,
        setOpen,
        position
    ]);
});
}),
"[project]/Documents/frontend-engineer-task/node_modules/react-leaflet/lib/TileLayer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TileLayer",
    ()=>TileLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/element.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$generic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/generic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$grid$2d$layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/grid-layer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$pane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/pane.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/leaflet/dist/leaflet-src.js [app-ssr] (ecmascript)");
;
;
const TileLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$generic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTileLayerComponent"])(function createTileLayer({ url, ...options }, context) {
    const layer = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TileLayer"](url, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$pane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withPane"])(options, context));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElementObject"])(layer, context);
}, function updateTileLayer(layer, props, prevProps) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$grid$2d$layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateGridLayer"])(layer, props, prevProps);
    const { url } = props;
    if (url != null && url !== prevProps.url) {
        layer.setUrl(url);
    }
});
}),
"[project]/Documents/frontend-engineer-task/node_modules/react-leaflet/lib/hooks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMap",
    ()=>useMap,
    "useMapEvent",
    ()=>useMapEvent,
    "useMapEvents",
    ()=>useMapEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/@react-leaflet/core/lib/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function useMap() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLeafletContext"])().map;
}
function useMapEvent(type, handler) {
    const map = useMap();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function addMapEventHandler() {
        // @ts-ignore event type
        map.on(type, handler);
        return function removeMapEventHandler() {
            // @ts-ignore event type
            map.off(type, handler);
        };
    }, [
        map,
        type,
        handler
    ]);
    return map;
}
function useMapEvents(handlers) {
    const map = useMap();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function addMapEventHandlers() {
        map.on(handlers);
        return function removeMapEventHandlers() {
            map.off(handlers);
        };
    }, [
        map,
        handlers
    ]);
    return map;
}
}),
"[project]/Documents/frontend-engineer-task/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/Documents/frontend-engineer-task/node_modules/tailwind-variants/dist/chunk-LQJYWU4O.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils.js
__turbopack_context__.s([
    "cx",
    ()=>cx,
    "falsyToString",
    ()=>falsyToString,
    "flat",
    ()=>flat,
    "flatArray",
    ()=>flatArray,
    "flatMergeArrays",
    ()=>flatMergeArrays,
    "isBoolean",
    ()=>isBoolean,
    "isEmptyObject",
    ()=>isEmptyObject,
    "isEqual",
    ()=>isEqual,
    "joinObjects",
    ()=>joinObjects,
    "mergeObjects",
    ()=>mergeObjects,
    "removeExtraSpaces",
    ()=>removeExtraSpaces
]);
var SPACE_REGEX = /\s+/g;
var removeExtraSpaces = (str)=>{
    if (typeof str !== "string" || !str) return str;
    return str.replace(SPACE_REGEX, " ").trim();
};
var cx = (...classnames)=>{
    const classList = [];
    const buildClassString = (input)=>{
        if (!input && input !== 0 && input !== 0n) return;
        if (Array.isArray(input)) {
            for(let i = 0, len = input.length; i < len; i++)buildClassString(input[i]);
            return;
        }
        const type = typeof input;
        if (type === "string" || type === "number" || type === "bigint") {
            if (type === "number" && input !== input) return;
            classList.push(String(input));
        } else if (type === "object") {
            const keys = Object.keys(input);
            for(let i = 0, len = keys.length; i < len; i++){
                const key = keys[i];
                if (input[key]) classList.push(key);
            }
        }
    };
    for(let i = 0, len = classnames.length; i < len; i++){
        const c = classnames[i];
        if (c !== null && c !== void 0) buildClassString(c);
    }
    return classList.length > 0 ? removeExtraSpaces(classList.join(" ")) : void 0;
};
var falsyToString = (value)=>value === false ? "false" : value === true ? "true" : value === 0 ? "0" : value;
var isEmptyObject = (obj)=>{
    if (!obj || typeof obj !== "object") return true;
    for(const _ in obj)return false;
    return true;
};
var isEqual = (obj1, obj2)=>{
    if (obj1 === obj2) return true;
    if (!obj1 || !obj2) return false;
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for(let i = 0; i < keys1.length; i++){
        const key = keys1[i];
        if (!keys2.includes(key)) return false;
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
};
var isBoolean = (value)=>value === true || value === false;
var joinObjects = (obj1, obj2)=>{
    for(const key in obj2){
        if (Object.prototype.hasOwnProperty.call(obj2, key)) {
            const val2 = obj2[key];
            if (key in obj1) {
                obj1[key] = cx(obj1[key], val2);
            } else {
                obj1[key] = val2;
            }
        }
    }
    return obj1;
};
var flat = (arr, target)=>{
    for(let i = 0; i < arr.length; i++){
        const el = arr[i];
        if (Array.isArray(el)) flat(el, target);
        else if (el) target.push(el);
    }
};
function flatArray(arr) {
    const flattened = [];
    flat(arr, flattened);
    return flattened;
}
var flatMergeArrays = (...arrays)=>{
    const result = [];
    flat(arrays, result);
    const filtered = [];
    for(let i = 0; i < result.length; i++){
        if (result[i]) filtered.push(result[i]);
    }
    return filtered;
};
var mergeObjects = (obj1, obj2)=>{
    const result = {};
    for(const key in obj1){
        const val1 = obj1[key];
        if (key in obj2) {
            const val2 = obj2[key];
            if (Array.isArray(val1) || Array.isArray(val2)) {
                result[key] = flatMergeArrays(val2, val1);
            } else if (typeof val1 === "object" && typeof val2 === "object" && val1 && val2) {
                result[key] = mergeObjects(val1, val2);
            } else {
                result[key] = val2 + " " + val1;
            }
        } else {
            result[key] = val1;
        }
    }
    for(const key in obj2){
        if (!(key in obj1)) {
            result[key] = obj2[key];
        }
    }
    return result;
};
;
}),
"[project]/Documents/frontend-engineer-task/node_modules/tailwind-variants/dist/chunk-RZF76H2U.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultConfig",
    ()=>defaultConfig,
    "getTailwindVariants",
    ()=>getTailwindVariants,
    "state",
    ()=>state
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/tailwind-variants/dist/chunk-LQJYWU4O.js [app-ssr] (ecmascript)");
;
// src/config.js
var defaultConfig = {
    twMerge: true,
    twMergeConfig: {}
};
// src/state.js
function createState() {
    let cachedTwMerge = null;
    let cachedTwMergeConfig = {};
    let didTwMergeConfigChange = false;
    return {
        get cachedTwMerge () {
            return cachedTwMerge;
        },
        set cachedTwMerge (value){
            cachedTwMerge = value;
        },
        get cachedTwMergeConfig () {
            return cachedTwMergeConfig;
        },
        set cachedTwMergeConfig (value){
            cachedTwMergeConfig = value;
        },
        get didTwMergeConfigChange () {
            return didTwMergeConfigChange;
        },
        set didTwMergeConfigChange (value){
            didTwMergeConfigChange = value;
        },
        reset () {
            cachedTwMerge = null;
            cachedTwMergeConfig = {};
            didTwMergeConfigChange = false;
        }
    };
}
var state = createState();
// src/core.js
var getTailwindVariants = (cn)=>{
    const tv = (options, configProp)=>{
        const { extend = null, slots: slotProps = {}, variants: variantsProps = {}, compoundVariants: compoundVariantsProps = [], compoundSlots = [], defaultVariants: defaultVariantsProps = {} } = options;
        const config = {
            ...defaultConfig,
            ...configProp
        };
        const base = extend?.base ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(extend.base, options?.base) : options?.base;
        const variants = extend?.variants && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyObject"])(extend.variants) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeObjects"])(variantsProps, extend.variants) : variantsProps;
        const defaultVariants = extend?.defaultVariants && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyObject"])(extend.defaultVariants) ? {
            ...extend.defaultVariants,
            ...defaultVariantsProps
        } : defaultVariantsProps;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyObject"])(config.twMergeConfig) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEqual"])(config.twMergeConfig, state.cachedTwMergeConfig)) {
            state.didTwMergeConfigChange = true;
            state.cachedTwMergeConfig = config.twMergeConfig;
        }
        const isExtendedSlotsEmpty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyObject"])(extend?.slots);
        const componentSlots = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyObject"])(slotProps) ? {
            // add "base" to the slots object
            base: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(options?.base, isExtendedSlotsEmpty && extend?.base),
            ...slotProps
        } : {};
        const slots = isExtendedSlotsEmpty ? componentSlots : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["joinObjects"])({
            ...extend?.slots
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyObject"])(componentSlots) ? {
            base: options?.base
        } : componentSlots);
        const compoundVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyObject"])(extend?.compoundVariants) ? compoundVariantsProps : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flatMergeArrays"])(extend?.compoundVariants, compoundVariantsProps);
        const component = (props)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyObject"])(variants) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyObject"])(slotProps) && isExtendedSlotsEmpty) {
                return cn(base, props?.class, props?.className)(config);
            }
            if (compoundVariants && !Array.isArray(compoundVariants)) {
                throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof compoundVariants}`);
            }
            if (compoundSlots && !Array.isArray(compoundSlots)) {
                throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof compoundSlots}`);
            }
            const getVariantValue = (variant, vrs = variants, _slotKey = null, slotProps2 = null)=>{
                const variantObj = vrs[variant];
                if (!variantObj || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyObject"])(variantObj)) {
                    return null;
                }
                const variantProp = slotProps2?.[variant] ?? props?.[variant];
                if (variantProp === null) return null;
                const variantKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["falsyToString"])(variantProp);
                if (typeof variantKey === "object") {
                    return null;
                }
                const defaultVariantProp = defaultVariants?.[variant];
                const key = variantKey != null ? variantKey : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["falsyToString"])(defaultVariantProp);
                const value1 = variantObj[key || "false"];
                return value1;
            };
            const getVariantClassNames = ()=>{
                if (!variants) return null;
                const keys = Object.keys(variants);
                const result = [];
                for(let i = 0; i < keys.length; i++){
                    const value1 = getVariantValue(keys[i], variants);
                    if (value1) result.push(value1);
                }
                return result;
            };
            const getVariantClassNamesBySlotKey = (slotKey, slotProps2)=>{
                if (!variants || typeof variants !== "object") return null;
                const result = [];
                for(const variant in variants){
                    const variantValue = getVariantValue(variant, variants, slotKey, slotProps2);
                    const value1 = slotKey === "base" && typeof variantValue === "string" ? variantValue : variantValue && variantValue[slotKey];
                    if (value1) result.push(value1);
                }
                return result;
            };
            const propsWithoutUndefined = {};
            for(const prop in props){
                const value1 = props[prop];
                if (value1 !== void 0) propsWithoutUndefined[prop] = value1;
            }
            const getCompleteProps = (key, slotProps2)=>{
                const initialProp = typeof props?.[key] === "object" ? {
                    [key]: props[key]?.initial
                } : {};
                return {
                    ...defaultVariants,
                    ...propsWithoutUndefined,
                    ...initialProp,
                    ...slotProps2
                };
            };
            const getCompoundVariantsValue = (cv = [], slotProps2)=>{
                const result = [];
                const cvLength = cv.length;
                for(let i = 0; i < cvLength; i++){
                    const { class: tvClass, className: tvClassName, ...compoundVariantOptions } = cv[i];
                    let isValid = true;
                    const completeProps = getCompleteProps(null, slotProps2);
                    for(const key in compoundVariantOptions){
                        const value1 = compoundVariantOptions[key];
                        const completePropsValue = completeProps[key];
                        if (Array.isArray(value1)) {
                            if (!value1.includes(completePropsValue)) {
                                isValid = false;
                                break;
                            }
                        } else {
                            if ((value1 == null || value1 === false) && (completePropsValue == null || completePropsValue === false)) continue;
                            if (completePropsValue !== value1) {
                                isValid = false;
                                break;
                            }
                        }
                    }
                    if (isValid) {
                        if (tvClass) result.push(tvClass);
                        if (tvClassName) result.push(tvClassName);
                    }
                }
                return result;
            };
            const getCompoundVariantClassNamesBySlot = (slotProps2)=>{
                const compoundClassNames = getCompoundVariantsValue(compoundVariants, slotProps2);
                if (!Array.isArray(compoundClassNames)) return compoundClassNames;
                const result = {};
                const cnFn = cn;
                for(let i = 0; i < compoundClassNames.length; i++){
                    const className = compoundClassNames[i];
                    if (typeof className === "string") {
                        result.base = cnFn(result.base, className)(config);
                    } else if (typeof className === "object") {
                        for(const slot in className){
                            result[slot] = cnFn(result[slot], className[slot])(config);
                        }
                    }
                }
                return result;
            };
            const getCompoundSlotClassNameBySlot = (slotProps2)=>{
                if (compoundSlots.length < 1) return null;
                const result = {};
                const completeProps = getCompleteProps(null, slotProps2);
                for(let i = 0; i < compoundSlots.length; i++){
                    const { slots: slots2 = [], class: slotClass, className: slotClassName, ...slotVariants } = compoundSlots[i];
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyObject"])(slotVariants)) {
                        let isValid = true;
                        for(const key in slotVariants){
                            const completePropsValue = completeProps[key];
                            const slotVariantValue = slotVariants[key];
                            if (completePropsValue === void 0 || (Array.isArray(slotVariantValue) ? !slotVariantValue.includes(completePropsValue) : slotVariantValue !== completePropsValue)) {
                                isValid = false;
                                break;
                            }
                        }
                        if (!isValid) continue;
                    }
                    for(let j = 0; j < slots2.length; j++){
                        const slotName = slots2[j];
                        if (!result[slotName]) result[slotName] = [];
                        result[slotName].push([
                            slotClass,
                            slotClassName
                        ]);
                    }
                }
                return result;
            };
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyObject"])(slotProps) || !isExtendedSlotsEmpty) {
                const slotsFns = {};
                if (typeof slots === "object" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyObject"])(slots)) {
                    const cnFn = cn;
                    for(const slotKey in slots){
                        slotsFns[slotKey] = (slotProps2)=>{
                            const compoundVariantClasses = getCompoundVariantClassNamesBySlot(slotProps2);
                            const compoundSlotClasses = getCompoundSlotClassNameBySlot(slotProps2);
                            return cnFn(slots[slotKey], getVariantClassNamesBySlotKey(slotKey, slotProps2), ("TURBOPACK compile-time truthy", 1) ? compoundVariantClasses[slotKey] : "TURBOPACK unreachable", compoundSlotClasses ? compoundSlotClasses[slotKey] : void 0, slotProps2?.class, slotProps2?.className)(config);
                        };
                    }
                }
                return slotsFns;
            }
            return cn(base, getVariantClassNames(), getCompoundVariantsValue(compoundVariants), props?.class, props?.className)(config);
        };
        const getVariantKeys = ()=>{
            if (!variants || typeof variants !== "object") return;
            return Object.keys(variants);
        };
        component.variantKeys = getVariantKeys();
        component.extend = extend;
        component.base = base;
        component.slots = slots;
        component.variants = variants;
        component.defaultVariants = defaultVariants;
        component.compoundSlots = compoundSlots;
        component.compoundVariants = compoundVariants;
        return component;
    };
    const createTV = (configProp)=>{
        return (options, config)=>tv(options, config ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeObjects"])(configProp, config) : configProp);
    };
    return {
        tv,
        createTV
    };
};
;
}),
"[project]/Documents/frontend-engineer-task/node_modules/tailwind-variants/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "cnMerge",
    ()=>cnMerge,
    "createTV",
    ()=>createTV,
    "tv",
    ()=>tv
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$RZF76H2U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/tailwind-variants/dist/chunk-RZF76H2U.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/tailwind-variants/dist/chunk-LQJYWU4O.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
var createTwMerge = (cachedTwMergeConfig)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyObject"])(cachedTwMergeConfig) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendTailwindMerge"])({
        ...cachedTwMergeConfig,
        extend: {
            theme: cachedTwMergeConfig.theme,
            classGroups: cachedTwMergeConfig.classGroups,
            conflictingClassGroupModifiers: cachedTwMergeConfig.conflictingClassGroupModifiers,
            conflictingClassGroups: cachedTwMergeConfig.conflictingClassGroups,
            ...cachedTwMergeConfig.extend
        }
    });
};
var executeMerge = (classnames, config)=>{
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$LQJYWU4O$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(classnames);
    if (!base || !(config?.twMerge ?? true)) return base;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$RZF76H2U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["state"].cachedTwMerge || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$RZF76H2U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["state"].didTwMergeConfigChange) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$RZF76H2U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["state"].didTwMergeConfigChange = false;
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$RZF76H2U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["state"].cachedTwMerge = createTwMerge(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$RZF76H2U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["state"].cachedTwMergeConfig);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$RZF76H2U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["state"].cachedTwMerge(base) || void 0;
};
var cn = (...classnames)=>{
    return executeMerge(classnames, {});
};
var cnMerge = (...classnames)=>{
    return (config)=>executeMerge(classnames, config);
};
// src/index.js
var { createTV, tv } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$chunk$2d$RZF76H2U$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTailwindVariants"])(cnMerge);
;
}),
"[project]/Documents/frontend-engineer-task/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ __turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/frontend-engineer-task/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$frontend$2d$engineer$2d$task$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
];

//# sourceMappingURL=b406f_6828f393._.js.map