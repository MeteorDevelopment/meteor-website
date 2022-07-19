<script async lang="ts">
    import { loadScript } from "@paypal/paypal-js";
    import { onMount } from "svelte";
    import { api } from "$lib/api";
    import { goto } from '$app/navigation';

    export var amount = 5.00;
    export const clientId = "AQwX-Z2PR6vUPbFVakBoSQVUCW_QmMlc7ZfTdd_fMqZ9ZKb2YyGAGCppB95XCDlZAUwZsmZAlcVaUUZm";

    onMount(async () => {
        const paypal = await loadScript({ "client-id": clientId, currency: "GBP" });
        await paypal.Buttons({ style: { color: "blue" }, createOrder, onApprove, onCancel, onError}).render("#paypal-buttons");
    });

    async function createOrder(data, actions) {
        return (await api("payments/create?amount=" + amount.toFixed(2), true)).id;
    }

    async function onApprove(data, actions) {
        return actions.order.capture().then(function (details) {
            const text: HTMLElement = document.getElementById("paypal-text");
            text.innerText = "Payment successful!"
            text.style.color = "#0EA50E"

            goto("/account")
        });
    }

    async function onCancel(data, actions) {
        let res = await api("payments/cancel?id=" + data.orderId);

        const text: HTMLElement = document.getElementById("paypal-text");

        if (res.success) {
            text.innerText = "Payment cancelled!"
            text.style.color = "#FF0000"
        }
        else {
            text.innerText = "Something went wrong!"
            text.style.color = "#FF0000"
        }

        return res;
    }

    async function onError(err) {
        if (err === "Unauthorized.") {
            await goto("/account")
            alert("Please log in to your Meteor account before donating!")
        }

        const text: HTMLElement = document.getElementById("paypal-text");
        text.innerText = err
        text.style.color = "#FF0000"

        return await api("payments/cancel", true);
    }

    function onInput() {

    }
</script>

<div class="container">
    <div>
        <h1>Donations</h1>
        <p>Minimum amount to donate to get donator benefits is 5€.</p>
        <p>Remember to include your discord tag and Minecraft IGN in the PayPal note so we can link the donation to your account!</p>
        <h3>Donation Amount</h3>
        <input type="number" min="5" step="0.01" placeholder="5.00" bind:value={amount} on:input={onInput} />
        <p id="paypal-text"></p>
        <div id="paypal-buttons"></div>
    </div>
</div>

<style>
    h1 {
        color: black;
    }

    #paypal-buttons {
        margin-top: 2rem;
    }
</style>