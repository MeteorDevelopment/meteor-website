import { visit } from "unist-util-visit"

export function markdown() {
    // @ts-ignore
    function addClasses(node, ...classes) {
        node.data = node.data || {}
        node.data.hProperties = node.data.hProperties || {}
        node.data.hProperties.className = node.data.hProperties.className || []

        node.data.hProperties.className.push(...classes)
    }

    // @ts-ignore
    return (root) => {
        // Add .md-hX, separators and link
        visit(root, (node, index, parent) => {
            if (node.type == "heading") {
                addClasses(node, "md-h" + node.depth)

                if (node.depth <= 2) {
                    // @ts-ignore
                    parent.children.splice(index + 1, 0, {
                        type: "thematicBreak",
                        data: {
                            hProperties: {
                                className: ["md-hr"],
                            },
                        },
                    })
                }

                let id = node.children[0].value.toLowerCase().replaceAll(" ", "-")
                node.children.splice(0, 0, {
                    type: "link",
                    url: "#" + id,
                    children: [
                        {
                            type: "image",
                            url: "/icons/link.svg",
                            alt: "X",
                        },
                    ],
                    data: {
                        hProperties: {
                            id,
                            className: ["md-h-a"],
                        },
                    },
                })

                // @ts-ignore
                return index + 2
            }
        })

        visit(root, (node, _index, _parent) => {
            if (node.type == "list") {
                // Add .md-ul and .md-ol
                addClasses(node, node.ordered ? "md-ol" : "md-ul")
            } else if (node.type == "inlineCode") {
                // Add .md-code
                addClasses(node, "md-code")
            } else if (node.type == "link") {
                // Add .md-a
                addClasses(node, "md-a")
            } else if (node.type == "image") {
                // Add .md-img and set alt
                addClasses(node, "md-img")

                if (node.position) node.alt = node.url
            } else if (node.type == "table") {
                // Add .md-table
                addClasses(node, "md-table")
            } else if (node.type == "tableCell") {
                // Add .md-td
                addClasses(node, "md-td")
            }
        })
    }
}
