// vite.config.ts
import { nodeTypes } from "file:///Users/f.marie-louise/Workspace/pigment/node_modules/.pnpm/@mdx-js+mdx@2.3.0/node_modules/@mdx-js/mdx/index.js";
import { parse } from "file:///Users/f.marie-louise/Workspace/pigment/node_modules/.pnpm/acorn@8.8.2/node_modules/acorn/dist/acorn.mjs";
import Slugger from "file:///Users/f.marie-louise/Workspace/pigment/node_modules/.pnpm/github-slugger@1.5.0/node_modules/github-slugger/index.js";
import rehypePrettyCode from "file:///Users/f.marie-louise/Workspace/pigment/node_modules/.pnpm/rehype-pretty-code@0.9.4_shiki@0.14.1/node_modules/rehype-pretty-code/dist/rehype-pretty-code.js";
import rehypeRaw from "file:///Users/f.marie-louise/Workspace/pigment/node_modules/.pnpm/rehype-raw@6.1.1/node_modules/rehype-raw/index.js";
import rehypeSlug from "file:///Users/f.marie-louise/Workspace/pigment/node_modules/.pnpm/rehype-slug@5.1.0/node_modules/rehype-slug/index.js";
import remarkGfm from "file:///Users/f.marie-louise/Workspace/pigment/node_modules/.pnpm/remark-gfm@3.0.1/node_modules/remark-gfm/index.js";
import remarkShikiTwoslash from "file:///Users/f.marie-louise/Workspace/pigment/node_modules/.pnpm/remark-shiki-twoslash@3.1.2_typescript@4.9.5/node_modules/remark-shiki-twoslash/dist/index.js";
import solid from "file:///Users/f.marie-louise/Workspace/pigment/node_modules/.pnpm/solid-start@0.2.24_l76r2s3tut7m73pawhgetmn25m/node_modules/solid-start/vite/plugin.js";
import netlify from "file:///Users/f.marie-louise/Workspace/pigment/node_modules/.pnpm/solid-start-netlify@0.2.24_solid-start@0.2.24/node_modules/solid-start-netlify/index.js";
import node from "file:///Users/f.marie-louise/Workspace/pigment/node_modules/.pnpm/solid-start-node@0.2.24_5wyam4in76zoiwtfcs6d676ckq/node_modules/solid-start-node/index.js";
import { visit } from "file:///Users/f.marie-louise/Workspace/pigment/node_modules/.pnpm/unist-util-visit@4.1.2/node_modules/unist-util-visit/index.js";
import { defineConfig } from "file:///Users/f.marie-louise/Workspace/pigment/node_modules/.pnpm/vite@3.2.5/node_modules/vite/dist/node/index.js";
function jsToTreeNode(jsString, acornOpts) {
  return {
    type: "mdxjsEsm",
    value: "",
    data: {
      estree: {
        body: [],
        ...parse(
          jsString,
          acornOpts ?? {
            sourceType: "module",
            ecmaVersion: 2020
          }
        ),
        type: "Program",
        sourceType: "module"
      }
    }
  };
}
async function mdx(config) {
  const cache = /* @__PURE__ */ new Map();
  const headingsCache = /* @__PURE__ */ new Map();
  function rehypeCollectHeadings() {
    const slugger = new Slugger();
    return function(tree, file) {
      const headings = [];
      visit(tree, (node2) => {
        if (node2.type !== "element") {
          return;
        }
        const { tagName } = node2;
        if (tagName[0] !== "h") {
          return;
        }
        const [_, level] = tagName.match(/h([0-6])/) ?? [];
        if (!level) {
          return;
        }
        const depth = Number.parseInt(level);
        let text = "";
        visit(node2, (child, __, parent) => {
          if (child.type === "element" || parent == null) {
            return;
          }
          if (child.type === "raw" && child.value.match(/^\n?<.*>\n?$/)) {
            return;
          }
          if ((/* @__PURE__ */ new Set(["text", "raw", "mdxTextExpression"])).has(child.type)) {
            text += child.value;
          }
        });
        node2.properties = node2.properties || {};
        if (typeof node2.properties.id !== "string") {
          let slug = slugger.slug(text);
          if (slug.endsWith("-")) {
            slug = slug.slice(0, -1);
          }
          node2.properties.id = slug;
        }
        headings.push({ depth, slug: node2.properties.id, text });
      });
      headingsCache.set(file.path, headings);
      tree.children.unshift(
        jsToTreeNode(`export function getHeadings() { return ${JSON.stringify(headings)} }`)
      );
    };
  }
  const plugin = {
    ...(await import("file:///Users/f.marie-louise/Workspace/pigment/node_modules/.pnpm/@mdx-js+rollup@2.3.0_rollup@3.20.2/node_modules/@mdx-js/rollup/index.js")).default({
      jsx: true,
      jsxImportSource: "solid-js",
      providerImportSource: "solid-mdx",
      rehypePlugins: [
        ...config.rehypePlugins,
        rehypeSlug,
        rehypeCollectHeadings,
        [rehypeRaw, { passThrough: nodeTypes }]
      ],
      remarkPlugins: [
        ...config.remarkPlugins,
        [
          remarkShikiTwoslash.default,
          {
            disableImplicitReactImport: true,
            includeJSDocInHover: true,
            themes: ["github-light", "github-dark"],
            defaultOptions: {
              lib: ["dom", "es2015"]
            },
            defaultCompilerOptions: {
              allowSyntheticDefaultImports: true,
              esModuleInterop: true,
              target: "ESNext",
              module: "ESNext",
              lib: ["dom", "es2015"],
              jsxImportSource: "solid-js",
              jsx: "preserve",
              types: ["vite/client"],
              paths: {
                "~/*": ["./src/*"]
              }
            }
          }
        ]
      ]
    }),
    enforce: "pre"
  };
  return [
    {
      ...plugin,
      async transform(code, id) {
        var _a;
        if (id.endsWith(".mdx") || id.endsWith(".md")) {
          if (cache.has(code)) {
            return cache.get(code);
          }
          const result = await ((_a = plugin.transform) == null ? void 0 : _a.call(this, code, id));
          cache.set(code, result);
          return result;
        }
      }
    },
    {
      ...plugin,
      name: "mdx-meta",
      async transform(code, id) {
        var _a;
        if (id.endsWith(".mdx?meta") || id.endsWith(".md?meta")) {
          let getCode2 = function() {
            return `
              export function getHeadings() { return ${JSON.stringify(
              headingsCache.get(id),
              null,
              2
            )}
              }
              `;
          };
          var getCode = getCode2;
          id = id.replace(/\?meta$/, "");
          if (cache.has(code)) {
            return { code: getCode2() };
          }
          const result = await ((_a = plugin.transform) == null ? void 0 : _a.call(this, code, id));
          cache.set(code, result);
          return {
            code: getCode2()
          };
        }
      }
    }
  ];
}
var adapter = process.env.GITHUB_ACTIONS ? node() : netlify();
var vite_config_default = defineConfig({
  plugins: [
    await mdx({
      rehypePlugins: [rehypePrettyCode],
      remarkPlugins: [remarkGfm]
    }),
    solid({ adapter, extensions: [".mdx", ".md"] })
  ],
  ssr: {
    noExternal: ["@kobalte/pigment"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZi5tYXJpZS1sb3Vpc2UvV29ya3NwYWNlL3BpZ21lbnQvYXBwcy9kb2NzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZi5tYXJpZS1sb3Vpc2UvV29ya3NwYWNlL3BpZ21lbnQvYXBwcy9kb2NzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9mLm1hcmllLWxvdWlzZS9Xb3Jrc3BhY2UvcGlnbWVudC9hcHBzL2RvY3Mvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBub2RlVHlwZXMgfSBmcm9tIFwiQG1keC1qcy9tZHhcIjtcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSBcImFjb3JuXCI7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgU2x1Z2dlciBmcm9tIFwiZ2l0aHViLXNsdWdnZXJcIjtcbmltcG9ydCByZWh5cGVQcmV0dHlDb2RlIGZyb20gXCJyZWh5cGUtcHJldHR5LWNvZGVcIjtcbmltcG9ydCByZWh5cGVSYXcgZnJvbSBcInJlaHlwZS1yYXdcIjtcbmltcG9ydCByZWh5cGVTbHVnIGZyb20gXCJyZWh5cGUtc2x1Z1wiO1xuaW1wb3J0IHJlbWFya0dmbSBmcm9tIFwicmVtYXJrLWdmbVwiO1xuaW1wb3J0IHJlbWFya1NoaWtpVHdvc2xhc2ggZnJvbSBcInJlbWFyay1zaGlraS10d29zbGFzaFwiO1xuaW1wb3J0IHNvbGlkIGZyb20gXCJzb2xpZC1zdGFydC92aXRlXCI7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgbmV0bGlmeSBmcm9tIFwic29saWQtc3RhcnQtbmV0bGlmeVwiO1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IG5vZGUgZnJvbSBcInNvbGlkLXN0YXJ0LW5vZGVcIjtcbmltcG9ydCB7IHZpc2l0IH0gZnJvbSBcInVuaXN0LXV0aWwtdmlzaXRcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5cbmZ1bmN0aW9uIGpzVG9UcmVlTm9kZShqc1N0cmluZzogYW55LCBhY29ybk9wdHM6IGFueSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFwibWR4anNFc21cIixcbiAgICB2YWx1ZTogXCJcIixcbiAgICBkYXRhOiB7XG4gICAgICBlc3RyZWU6IHtcbiAgICAgICAgYm9keTogW10sXG4gICAgICAgIC4uLnBhcnNlKFxuICAgICAgICAgIGpzU3RyaW5nLFxuICAgICAgICAgIGFjb3JuT3B0cyA/PyB7XG4gICAgICAgICAgICBzb3VyY2VUeXBlOiBcIm1vZHVsZVwiLFxuICAgICAgICAgICAgZWNtYVZlcnNpb246IDIwMjAsXG4gICAgICAgICAgfVxuICAgICAgICApLFxuICAgICAgICB0eXBlOiBcIlByb2dyYW1cIixcbiAgICAgICAgc291cmNlVHlwZTogXCJtb2R1bGVcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbWR4KGNvbmZpZzogYW55KSB7XG4gIGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xuICBjb25zdCBoZWFkaW5nc0NhY2hlID0gbmV3IE1hcCgpO1xuXG4gIGZ1bmN0aW9uIHJlaHlwZUNvbGxlY3RIZWFkaW5ncygpIHtcbiAgICBjb25zdCBzbHVnZ2VyID0gbmV3IFNsdWdnZXIoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRyZWU6IGFueSwgZmlsZTogYW55KSB7XG4gICAgICBjb25zdCBoZWFkaW5nczogYW55W10gPSBbXTtcbiAgICAgIHZpc2l0KHRyZWUsIG5vZGUgPT4ge1xuICAgICAgICBpZiAobm9kZS50eXBlICE9PSBcImVsZW1lbnRcIikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gbm9kZTtcblxuICAgICAgICBpZiAodGFnTmFtZVswXSAhPT0gXCJoXCIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBbXywgbGV2ZWxdID0gdGFnTmFtZS5tYXRjaCgvaChbMC02XSkvKSA/PyBbXTtcblxuICAgICAgICBpZiAoIWxldmVsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVwdGggPSBOdW1iZXIucGFyc2VJbnQobGV2ZWwpO1xuXG4gICAgICAgIGxldCB0ZXh0ID0gXCJcIjtcblxuICAgICAgICB2aXNpdChub2RlLCAoY2hpbGQsIF9fLCBwYXJlbnQpID0+IHtcbiAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJlbGVtZW50XCIgfHwgcGFyZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJyYXdcIiAmJiBjaGlsZC52YWx1ZS5tYXRjaCgvXlxcbj88Lio+XFxuPyQvKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChuZXcgU2V0KFtcInRleHRcIiwgXCJyYXdcIiwgXCJtZHhUZXh0RXhwcmVzc2lvblwiXSkuaGFzKGNoaWxkLnR5cGUpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IGNoaWxkLnZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbm9kZS5wcm9wZXJ0aWVzID0gbm9kZS5wcm9wZXJ0aWVzIHx8IHt9O1xuXG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZS5wcm9wZXJ0aWVzLmlkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgbGV0IHNsdWcgPSBzbHVnZ2VyLnNsdWcodGV4dCk7XG5cbiAgICAgICAgICBpZiAoc2x1Zy5lbmRzV2l0aChcIi1cIikpIHtcbiAgICAgICAgICAgIHNsdWcgPSBzbHVnLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBub2RlLnByb3BlcnRpZXMuaWQgPSBzbHVnO1xuICAgICAgICB9XG5cbiAgICAgICAgaGVhZGluZ3MucHVzaCh7IGRlcHRoLCBzbHVnOiBub2RlLnByb3BlcnRpZXMuaWQsIHRleHQgfSk7XG4gICAgICB9KTtcblxuICAgICAgaGVhZGluZ3NDYWNoZS5zZXQoZmlsZS5wYXRoLCBoZWFkaW5ncyk7XG5cbiAgICAgIHRyZWUuY2hpbGRyZW4udW5zaGlmdChcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBqc1RvVHJlZU5vZGUoYGV4cG9ydCBmdW5jdGlvbiBnZXRIZWFkaW5ncygpIHsgcmV0dXJuICR7SlNPTi5zdHJpbmdpZnkoaGVhZGluZ3MpfSB9YClcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHBsdWdpbiA9IHtcbiAgICAuLi4oYXdhaXQgaW1wb3J0KFwiQG1keC1qcy9yb2xsdXBcIikpLmRlZmF1bHQoe1xuICAgICAganN4OiB0cnVlLFxuICAgICAganN4SW1wb3J0U291cmNlOiBcInNvbGlkLWpzXCIsXG4gICAgICBwcm92aWRlckltcG9ydFNvdXJjZTogXCJzb2xpZC1tZHhcIixcbiAgICAgIHJlaHlwZVBsdWdpbnM6IFtcbiAgICAgICAgLi4uY29uZmlnLnJlaHlwZVBsdWdpbnMsXG4gICAgICAgIHJlaHlwZVNsdWcsXG4gICAgICAgIHJlaHlwZUNvbGxlY3RIZWFkaW5ncyxcbiAgICAgICAgW3JlaHlwZVJhdywgeyBwYXNzVGhyb3VnaDogbm9kZVR5cGVzIH1dLFxuICAgICAgXSxcbiAgICAgIHJlbWFya1BsdWdpbnM6IFtcbiAgICAgICAgLi4uY29uZmlnLnJlbWFya1BsdWdpbnMsXG4gICAgICAgIFtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgcmVtYXJrU2hpa2lUd29zbGFzaC5kZWZhdWx0LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRpc2FibGVJbXBsaWNpdFJlYWN0SW1wb3J0OiB0cnVlLFxuICAgICAgICAgICAgaW5jbHVkZUpTRG9jSW5Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgIHRoZW1lczogW1wiZ2l0aHViLWxpZ2h0XCIsIFwiZ2l0aHViLWRhcmtcIl0sXG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICAgICAgICBsaWI6IFtcImRvbVwiLCBcImVzMjAxNVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWZhdWx0Q29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgICAgICAgIGFsbG93U3ludGhldGljRGVmYXVsdEltcG9ydHM6IHRydWUsXG4gICAgICAgICAgICAgIGVzTW9kdWxlSW50ZXJvcDogdHJ1ZSxcbiAgICAgICAgICAgICAgdGFyZ2V0OiBcIkVTTmV4dFwiLFxuICAgICAgICAgICAgICBtb2R1bGU6IFwiRVNOZXh0XCIsXG4gICAgICAgICAgICAgIGxpYjogW1wiZG9tXCIsIFwiZXMyMDE1XCJdLFxuICAgICAgICAgICAgICBqc3hJbXBvcnRTb3VyY2U6IFwic29saWQtanNcIixcbiAgICAgICAgICAgICAganN4OiBcInByZXNlcnZlXCIsXG4gICAgICAgICAgICAgIHR5cGVzOiBbXCJ2aXRlL2NsaWVudFwiXSxcbiAgICAgICAgICAgICAgcGF0aHM6IHtcbiAgICAgICAgICAgICAgICBcIn4vKlwiOiBbXCIuL3NyYy8qXCJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgXSxcbiAgICB9KSxcbiAgICBlbmZvcmNlOiBcInByZVwiLFxuICB9O1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIC4uLnBsdWdpbixcbiAgICAgIGFzeW5jIHRyYW5zZm9ybShjb2RlOiBhbnksIGlkOiBhbnkpIHtcbiAgICAgICAgaWYgKGlkLmVuZHNXaXRoKFwiLm1keFwiKSB8fCBpZC5lbmRzV2l0aChcIi5tZFwiKSkge1xuICAgICAgICAgIGlmIChjYWNoZS5oYXMoY29kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZS5nZXQoY29kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBsdWdpbi50cmFuc2Zvcm0/LmNhbGwodGhpcywgY29kZSwgaWQpO1xuICAgICAgICAgIGNhY2hlLnNldChjb2RlLCByZXN1bHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuXG4gICAge1xuICAgICAgLi4ucGx1Z2luLFxuICAgICAgbmFtZTogXCJtZHgtbWV0YVwiLFxuICAgICAgYXN5bmMgdHJhbnNmb3JtKGNvZGU6IGFueSwgaWQ6IGFueSkge1xuICAgICAgICBpZiAoaWQuZW5kc1dpdGgoXCIubWR4P21ldGFcIikgfHwgaWQuZW5kc1dpdGgoXCIubWQ/bWV0YVwiKSkge1xuICAgICAgICAgIGlkID0gaWQucmVwbGFjZSgvXFw/bWV0YSQvLCBcIlwiKTtcblxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1pbm5lci1kZWNsYXJhdGlvbnNcbiAgICAgICAgICBmdW5jdGlvbiBnZXRDb2RlKCkge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldEhlYWRpbmdzKCkgeyByZXR1cm4gJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICBoZWFkaW5nc0NhY2hlLmdldChpZCksXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY2FjaGUuaGFzKGNvZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4geyBjb2RlOiBnZXRDb2RlKCkgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGx1Z2luLnRyYW5zZm9ybT8uY2FsbCh0aGlzLCBjb2RlLCBpZCk7XG5cbiAgICAgICAgICBjYWNoZS5zZXQoY29kZSwgcmVzdWx0KTtcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiBnZXRDb2RlKCksXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICBdO1xufVxuXG4vLy9cblxuY29uc3QgYWRhcHRlciA9IHByb2Nlc3MuZW52LkdJVEhVQl9BQ1RJT05TID8gbm9kZSgpIDogbmV0bGlmeSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGF3YWl0IG1keCh7XG4gICAgICByZWh5cGVQbHVnaW5zOiBbcmVoeXBlUHJldHR5Q29kZV0sXG4gICAgICByZW1hcmtQbHVnaW5zOiBbcmVtYXJrR2ZtXSxcbiAgICB9KSxcbiAgICBzb2xpZCh7IGFkYXB0ZXIsIGV4dGVuc2lvbnM6IFtcIi5tZHhcIiwgXCIubWRcIl0gfSksXG4gIF0sXG4gIHNzcjoge1xuICAgIG5vRXh0ZXJuYWw6IFtcIkBrb2JhbHRlL3BpZ21lbnRcIl0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVUsU0FBUyxpQkFBaUI7QUFDL1YsU0FBUyxhQUFhO0FBRXRCLE9BQU8sYUFBYTtBQUNwQixPQUFPLHNCQUFzQjtBQUM3QixPQUFPLGVBQWU7QUFDdEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxlQUFlO0FBQ3RCLE9BQU8seUJBQXlCO0FBQ2hDLE9BQU8sV0FBVztBQUVsQixPQUFPLGFBQWE7QUFFcEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsYUFBYTtBQUN0QixTQUFTLG9CQUFvQjtBQUU3QixTQUFTLGFBQWEsVUFBZSxXQUFnQjtBQUNuRCxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsTUFDSixRQUFRO0FBQUEsUUFDTixNQUFNLENBQUM7QUFBQSxRQUNQLEdBQUc7QUFBQSxVQUNEO0FBQUEsVUFDQSxhQUFhO0FBQUEsWUFDWCxZQUFZO0FBQUEsWUFDWixhQUFhO0FBQUEsVUFDZjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLE1BQU07QUFBQSxRQUNOLFlBQVk7QUFBQSxNQUNkO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLGVBQWUsSUFBSSxRQUFhO0FBQzlCLFFBQU0sUUFBUSxvQkFBSSxJQUFJO0FBQ3RCLFFBQU0sZ0JBQWdCLG9CQUFJLElBQUk7QUFFOUIsV0FBUyx3QkFBd0I7QUFDL0IsVUFBTSxVQUFVLElBQUksUUFBUTtBQUM1QixXQUFPLFNBQVUsTUFBVyxNQUFXO0FBQ3JDLFlBQU0sV0FBa0IsQ0FBQztBQUN6QixZQUFNLE1BQU0sQ0FBQUEsVUFBUTtBQUNsQixZQUFJQSxNQUFLLFNBQVMsV0FBVztBQUMzQjtBQUFBLFFBQ0Y7QUFFQSxjQUFNLEVBQUUsUUFBUSxJQUFJQTtBQUVwQixZQUFJLFFBQVEsT0FBTyxLQUFLO0FBQ3RCO0FBQUEsUUFDRjtBQUVBLGNBQU0sQ0FBQyxHQUFHLEtBQUssSUFBSSxRQUFRLE1BQU0sVUFBVSxLQUFLLENBQUM7QUFFakQsWUFBSSxDQUFDLE9BQU87QUFDVjtBQUFBLFFBQ0Y7QUFFQSxjQUFNLFFBQVEsT0FBTyxTQUFTLEtBQUs7QUFFbkMsWUFBSSxPQUFPO0FBRVgsY0FBTUEsT0FBTSxDQUFDLE9BQU8sSUFBSSxXQUFXO0FBQ2pDLGNBQUksTUFBTSxTQUFTLGFBQWEsVUFBVSxNQUFNO0FBQzlDO0FBQUEsVUFDRjtBQUVBLGNBQUksTUFBTSxTQUFTLFNBQVMsTUFBTSxNQUFNLE1BQU0sY0FBYyxHQUFHO0FBQzdEO0FBQUEsVUFDRjtBQUVBLGVBQUksb0JBQUksSUFBSSxDQUFDLFFBQVEsT0FBTyxtQkFBbUIsQ0FBQyxHQUFFLElBQUksTUFBTSxJQUFJLEdBQUc7QUFDakUsb0JBQVEsTUFBTTtBQUFBLFVBQ2hCO0FBQUEsUUFDRixDQUFDO0FBRUQsUUFBQUEsTUFBSyxhQUFhQSxNQUFLLGNBQWMsQ0FBQztBQUV0QyxZQUFJLE9BQU9BLE1BQUssV0FBVyxPQUFPLFVBQVU7QUFDMUMsY0FBSSxPQUFPLFFBQVEsS0FBSyxJQUFJO0FBRTVCLGNBQUksS0FBSyxTQUFTLEdBQUcsR0FBRztBQUN0QixtQkFBTyxLQUFLLE1BQU0sR0FBRyxFQUFFO0FBQUEsVUFDekI7QUFFQSxVQUFBQSxNQUFLLFdBQVcsS0FBSztBQUFBLFFBQ3ZCO0FBRUEsaUJBQVMsS0FBSyxFQUFFLE9BQU8sTUFBTUEsTUFBSyxXQUFXLElBQUksS0FBSyxDQUFDO0FBQUEsTUFDekQsQ0FBQztBQUVELG9CQUFjLElBQUksS0FBSyxNQUFNLFFBQVE7QUFFckMsV0FBSyxTQUFTO0FBQUEsUUFFWixhQUFhLDBDQUEwQyxLQUFLLFVBQVUsUUFBUSxLQUFLO0FBQUEsTUFDckY7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUVBLFFBQU0sU0FBUztBQUFBLElBQ2IsSUFBSSxNQUFNLE9BQU8sOElBQW1CLFFBQVE7QUFBQSxNQUMxQyxLQUFLO0FBQUEsTUFDTCxpQkFBaUI7QUFBQSxNQUNqQixzQkFBc0I7QUFBQSxNQUN0QixlQUFlO0FBQUEsUUFDYixHQUFHLE9BQU87QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0EsQ0FBQyxXQUFXLEVBQUUsYUFBYSxVQUFVLENBQUM7QUFBQSxNQUN4QztBQUFBLE1BQ0EsZUFBZTtBQUFBLFFBQ2IsR0FBRyxPQUFPO0FBQUEsUUFDVjtBQUFBLFVBRUUsb0JBQW9CO0FBQUEsVUFDcEI7QUFBQSxZQUNFLDRCQUE0QjtBQUFBLFlBQzVCLHFCQUFxQjtBQUFBLFlBQ3JCLFFBQVEsQ0FBQyxnQkFBZ0IsYUFBYTtBQUFBLFlBQ3RDLGdCQUFnQjtBQUFBLGNBQ2QsS0FBSyxDQUFDLE9BQU8sUUFBUTtBQUFBLFlBQ3ZCO0FBQUEsWUFDQSx3QkFBd0I7QUFBQSxjQUN0Qiw4QkFBOEI7QUFBQSxjQUM5QixpQkFBaUI7QUFBQSxjQUNqQixRQUFRO0FBQUEsY0FDUixRQUFRO0FBQUEsY0FDUixLQUFLLENBQUMsT0FBTyxRQUFRO0FBQUEsY0FDckIsaUJBQWlCO0FBQUEsY0FDakIsS0FBSztBQUFBLGNBQ0wsT0FBTyxDQUFDLGFBQWE7QUFBQSxjQUNyQixPQUFPO0FBQUEsZ0JBQ0wsT0FBTyxDQUFDLFNBQVM7QUFBQSxjQUNuQjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFNBQVM7QUFBQSxFQUNYO0FBQ0EsU0FBTztBQUFBLElBQ0w7QUFBQSxNQUNFLEdBQUc7QUFBQSxNQUNILE1BQU0sVUFBVSxNQUFXLElBQVM7QUF0SjFDO0FBdUpRLFlBQUksR0FBRyxTQUFTLE1BQU0sS0FBSyxHQUFHLFNBQVMsS0FBSyxHQUFHO0FBQzdDLGNBQUksTUFBTSxJQUFJLElBQUksR0FBRztBQUNuQixtQkFBTyxNQUFNLElBQUksSUFBSTtBQUFBLFVBQ3ZCO0FBR0EsZ0JBQU0sU0FBUyxRQUFNLFlBQU8sY0FBUCxtQkFBa0IsS0FBSyxNQUFNLE1BQU07QUFDeEQsZ0JBQU0sSUFBSSxNQUFNLE1BQU07QUFFdEIsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUVBO0FBQUEsTUFDRSxHQUFHO0FBQUEsTUFDSCxNQUFNO0FBQUEsTUFDTixNQUFNLFVBQVUsTUFBVyxJQUFTO0FBeEsxQztBQXlLUSxZQUFJLEdBQUcsU0FBUyxXQUFXLEtBQUssR0FBRyxTQUFTLFVBQVUsR0FBRztBQUl2RCxjQUFTQyxXQUFULFdBQW1CO0FBQ2pCLG1CQUFPO0FBQUEsdURBQ29DLEtBQUs7QUFBQSxjQUM1QyxjQUFjLElBQUksRUFBRTtBQUFBLGNBQ3BCO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQTtBQUFBO0FBQUEsVUFHSjtBQVRTLHdCQUFBQTtBQUhULGVBQUssR0FBRyxRQUFRLFdBQVcsRUFBRTtBQWM3QixjQUFJLE1BQU0sSUFBSSxJQUFJLEdBQUc7QUFDbkIsbUJBQU8sRUFBRSxNQUFNQSxTQUFRLEVBQUU7QUFBQSxVQUMzQjtBQUdBLGdCQUFNLFNBQVMsUUFBTSxZQUFPLGNBQVAsbUJBQWtCLEtBQUssTUFBTSxNQUFNO0FBRXhELGdCQUFNLElBQUksTUFBTSxNQUFNO0FBRXRCLGlCQUFPO0FBQUEsWUFDTCxNQUFNQSxTQUFRO0FBQUEsVUFDaEI7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFJQSxJQUFNLFVBQVUsUUFBUSxJQUFJLGlCQUFpQixLQUFLLElBQUksUUFBUTtBQUU5RCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFFUCxNQUFNLElBQUk7QUFBQSxNQUNSLGVBQWUsQ0FBQyxnQkFBZ0I7QUFBQSxNQUNoQyxlQUFlLENBQUMsU0FBUztBQUFBLElBQzNCLENBQUM7QUFBQSxJQUNELE1BQU0sRUFBRSxTQUFTLFlBQVksQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDO0FBQUEsRUFDaEQ7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFlBQVksQ0FBQyxrQkFBa0I7QUFBQSxFQUNqQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbIm5vZGUiLCAiZ2V0Q29kZSJdCn0K
