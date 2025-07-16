import { visit } from "unist-util-visit"
import type { Node, Parent, Position } from "unist"

interface MarkdownNode extends Node {
    type: string
    data?: {
        hProperties?: {
            className?: string[]
            id?: string
        }
    }
    position?: Position
    depth?: number
    ordered?: boolean
    children?: MarkdownNode[]
    value?: string
    url?: string
    alt?: string
}

export function markdown() {
    function addClasses(node: MarkdownNode, ...classes: string[]) {
        node.data ??= {}
        node.data.hProperties ??= {}
        node.data.hProperties.className ??= []

        node.data.hProperties.className.push(...classes)
    }

    return (root: MarkdownNode) => {
        // Add .md-hX, separators and link
        visit(root, (node: MarkdownNode, index: number | undefined, parent: Parent | undefined) => {
            if (node.type == "heading") {
                addClasses(node, "md-h" + node.depth)

                if (node.depth && node.depth <= 2 && parent) {
                    parent.children.splice(index as number + 1, 0, {
                        type: "thematicBreak",
                        data: {
                            hProperties: {
                                className: ["md-hr"],
                            },
                        },
                    } as MarkdownNode)
                }

                if (node.children?.[0]?.value) {
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
                    } as MarkdownNode)
                }

                return index as number + 2
            }
        })

        visit(root, (node: MarkdownNode, _index: number | undefined, _parent: Parent | undefined) => {
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
