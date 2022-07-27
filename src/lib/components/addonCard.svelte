<script lang="ts">
    import { type Addon, getDevelopersHtml } from "$lib/addonts";
    import { formatDistance } from "date-fns";

    export let addon: Addon;
</script>

<div class="main">
    <a href={"addons/" + addon.id}>
        <img src={addon.icon} alt="icon">
    </a>

    <div class="idk">
        <div class="text">
            <div class="omg">
                <a href={"addons/" + addon.id}>{addon.title}</a>
                <span>{@html getDevelopersHtml(addon)}</span>
            </div>

            <p>{addon.description}</p>
    
            <div class="dates">
                <span><img src="/icons/calendar.svg" alt="calendar" class="icon"> Created {formatDistance(addon.createdAt, new Date(), { addSuffix: true })}</span>
                <span><img src="/icons/refresh.svg" alt="refresh" class="icon"> Updated {formatDistance(addon.updatedAt, new Date(), { addSuffix: true })}</span>
            </div>
        </div>
    
        <div class="right">
            <span style="white-space: nowrap;"><img src="/icons/downloads.svg" alt="downloads" class="icon"> <b>{addon.downloadCount}</b> downloads</span>
            <span><img src="/icons/meteor.svg" alt="meteor" class="icon"><b>Meteor:</b> {addon.meteorVersions.join(" ")}</span>
        </div>
    </div>
</div>

<style>
    .main {
        display: flex;
        gap: 1rem;

        padding: 1rem;
        text-align: left;

        background-color: rgb(240, 240, 240);
        border-radius: 0.375rem;
        box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.2);
    }

    .text {
        display: flex;
        flex-direction: column;
    }

    .idk {
        flex: 1;

        display: flex;
        justify-content: space-between;
    }

    .dates {
        display: flex;
        gap: 2rem;
    }

    a {
        color: black;
        font-size: 2rem;
    }

    a:hover {
        text-decoration: none;
    }

    img {
        width: 4rem;
        height: 4rem;

        border-radius: 0.375rem;
    }

    p {
        line-height: 1.25;
        margin-bottom: 0.5rem;
    }

    span {
        display: flex;
        align-items: center;
        gap: 0.2rem;

        color: rgb(75, 75, 75);
        font-size: 0.8rem;
    }

    .icon {
        width: 1rem;
        height: 1rem;

        border-radius: 0;
    }

    .omg {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    @media screen and (max-width: 1100px) {
        .idk {
            flex-direction: column;
        }

        .omg {
            flex-direction: column;
            align-items: flex-start;
            gap: 0;

            margin-bottom: 0.5rem;
        }
    }
</style>