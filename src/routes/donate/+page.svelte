<script lang="ts">
    import Centered from "$lib/components/centered.svelte";
    import { onMount } from "svelte";
    import type { CreateOrderActions, CreateOrderData, OnApproveActions, OnApproveData, OnCancelledActions } from "@paypal/paypal-js";
    import { loadScript } from "@paypal/paypal-js";

    import { api } from "$lib/api";
    import { goto } from "$app/navigation";

    let amount: number = 5.00;
    const clientId = "Abmv78qycqx6AFnq-5ICVQGd6KPXX7Sp5VA-U2ca41hJzlmJnLpXCDVq-Hj9PzIBM9Jlu0SHrwSGenHA";

    onMount(async () => {
        await loadScript({ clientId: clientId, currency: "EUR", debug: true })
            .then((paypal) => {
                paypal?.Buttons!({
                    style: { color: "blue" },
                    createOrder,
                    onApprove,
                    onCancel,
                    onError
                }).render("#paypal-buttons");
            });
    });

    async function createOrder(data: CreateOrderData, actions: CreateOrderActions) {
        return (await api("payments/create?amount=" + amount.toFixed(2), true)).id;
    }

    async function onApprove(data: OnApproveData, actions: OnApproveActions) {
        return actions.order!.capture().then(function (details) {
            setText("Payment successful!", true);
            goto("/account");
        });
    }

    async function onCancel(data: Record<string, unknown>, actions: OnCancelledActions) {
        let res = await api("payments/cancel?id=" + data.orderId);
        setText(res.success ? "Payment cancelled!" : "Something went wrong!", false);
        return res;
    }

    async function onError(err: any) {
        if (err === "Unauthorized.") {
            await goto("/account");
            alert("Please log in to your Meteor account before donating!");
        } else {
            setText(err, false)
        }

        return await api("payments/cancel", true);
    }

    function setText(newText: string, success: boolean) {
        const text = document.getElementById("paypal-text")!;
        text.innerText = newText;
        text.style.color = success ? "#0EA50E" : "#FF0000";
    }
</script>

<Centered>
    <div id="container">
        <h2>Donate</h2>
        <label for="amount" class="form-label">Amount (€):</label>
        <input name="amount" type="number" min="5" step="0.01" placeholder="5.00" bind:value={amount} />
        <p id="paypal-text" style="display: none" />
        <div id="paypal-buttons" />
    </div>
</Centered>
