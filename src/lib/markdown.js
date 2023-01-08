import {visit} from "unist-util-visit";

export function markdown() {
    // @ts-ignore
    function addClasses(node, ...classes) {
        node.data = node.data || {};
        node.data.hProperties = node.data.hProperties || {};
        node.data.hProperties.className = node.data.hProperties.className || [];

        node.data.hProperties.className.push(...classes)
    }

    // @ts-ignore
    return (root) => {
        // Add .md-hX, spearators and link
        visit(root, (node, index, parent) => {
            if (node.type == "heading") {
                addClasses(node, "md-h" + node.depth);

                if (node.depth <= 2) {
                    // @ts-ignore
                    parent.children.splice(index + 1, 0, {
                        type: "thematicBreak",
                        data: {
                            hProperties: {
                                className: ["md-hr"]
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
                            className: ["md-h-a"]
                        }
                    }
                })

                // @ts-ignore
                return index + 2;
            }
        });

        // @ts-ignore
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
            // Add .md-table
            else if (node.type == "table") {
                addClasses(node, "md-table");
            }
            // Add .md-td
            else if (node.type == "tableCell") {
                addClasses(node, "md-td");
            }
        });
    };
}
