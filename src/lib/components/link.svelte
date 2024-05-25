<script lang="ts">
    export let location: string;
    export let newTab: boolean = false;
    export let color: string = "text-highlight";
    export let noDecoration: boolean = false;
    export let style: string = "";

    let styleString = ``;
    if (color) styleString += `color: var(--${color});`
    if (noDecoration) styleString += "text-decoration: none;"
    if (style) styleString += style;
</script>

<a href={location} style={styleString} target={newTab ? "_blank" : "_self"}>
    <slot/>
</a>
