import adapter from "@sveltejs/adapter-node";
import preprocess from "svelte-preprocess";
import atImport from "postcss-import";
import { mdsvex } from "mdsvex";
import { visit } from "unist-util-visit";

function markdown() {
	function addClasses(node, ...classes) {
		node.data = node.data || {};
		node.data.hProperties = node.data.hProperties || {};
		node.data.hProperties.className = node.data.hProperties.className || [];

		node.data.hProperties.className.push(...classes)
	}

	return (root) => {
		// Add .md-hX, spearators and link
		visit(root, (node, index, parent) => {
			if (node.type == "heading") {
				addClasses(node, "md-h" + node.depth);

				if (node.depth <= 2) {
					parent.children.splice(index + 1, 0, {
						type: "thematicBreak",
						data: {
							hProperties: {
								className: [ "md-hr" ]
							}
						}
					});
				}

				let id = node.children[0].value.toLowerCase().replaceAll(" ", "-");
				node.children.splice(0, 0, {
					type: "link",
					url: "#" + id,
					children: [
						{
							type: "image",
							url: "/icons/link.svg",
							alt: "X"
						}
					],
					data: {
						hProperties: {
							id,
							className: [ "md-h-a" ]
						}
					}
				})

				return index + 2;
			}
		});

		visit(root, (node, index, parent) => {
			// Add .md-ul and .md-ol
			if (node.type == "list") {
				addClasses(node, node.ordered ? "md-ol" : "md-ul");
			}
			// Add .md-code
			else if (node.type == "inlineCode") {
				addClasses(node, "md-code");
			}
			// Add .md-a
			else if (node.type == "link") {
				addClasses(node, "md-a");
			}
			// Add .md-img and set alt
			else if (node.type == "image") {
				addClasses(node, "md-img");
				
				if (node.position) node.alt = node.url;
			}
		});
	};
}

/** @type {import("@sveltejs/kit").Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: [ ".svelte", ".md" ],

	preprocess: [
		preprocess({
			postcss: {
				plugins: [
					atImport({
						path: "static/css"
					})
				]
			}
		}),
		mdsvex({
			extensions: [ ".md" ],
			layout: {
				faq: "src/layouts/faq.svelte"
			},
			remarkPlugins: [markdown]
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
