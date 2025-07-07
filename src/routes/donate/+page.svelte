<script async lang="ts">
    import {
        type CreateOrderActions,
        type CreateOrderData,
        loadScript,
        type OnApproveActions,
        type OnApproveData,
        type OnCancelledActions
    } from '@paypal/paypal-js';
    import { onMount } from 'svelte';
    import { api } from '$lib/api';
    import { goto } from '$app/navigation';

    let amount = 5.0;
    const clientId = 'Abmv78qycqx6AFnq-5ICVQGd6KPXX7Sp5VA-U2ca41hJzlmJnLpXCDVq-Hj9PzIBM9Jlu0SHrwSGenHA';

    onMount(async () => {
        const paypal = await loadScript({ clientId: clientId, currency: 'EUR' });
        await paypal!.Buttons!({
            style: { color: 'blue' },
            createOrder,
            onApprove,
            onCancel,
            onError
        }).render('#paypal-buttons');
    });

    async function createOrder(_data: CreateOrderData, _actions: CreateOrderActions) {
        return (await api('payments/create?amount=' + amount.toFixed(2), true)).id;
    }

    async function onApprove(_data: OnApproveData, actions: OnApproveActions) {
        return actions.order!.capture().then(function (_details) {
            const text = document.getElementById('paypal-text');
            text!.innerText = 'Payment successful!';
            text!.style.color = '#0EA50E';

            goto('/account');
        });
    }

    async function onCancel(data: Record<string, unknown>, _actions: OnCancelledActions) {
        let res = await api('payments/cancel?id=' + data.orderId);

        const text = document.getElementById('paypal-text');

        if (res.success) {
            text!.innerText = 'Payment cancelled!';
            text!.style.color = '#FF0000';
        } else {
            text!.innerText = 'Something went wrong!';
            text!.style.color = '#FF0000';
        }

        return res;
    }

    async function onError(err: any) {
        if (err === 'Unauthorized.') {
            await goto('/account');
            alert('Please log in to your Meteor account before donating!');
        } else {
            const text = document.getElementById('paypal-text');
            text!.innerText = err;
            text!.style.color = '#FF0000';
        }

        return await api('payments/cancel', true);
    }
</script>

<div class="container">
    <div>
        <h1>Donations</h1>
        <p>Minimum amount to donate to get donator benefits is 5€.</p>
        <h3>Donation Amount (€)</h3>
        <input type="number" min="5" step="0.01" placeholder="5.00" bind:value={amount} />
        <p id="paypal-text"></p>
        <div id="paypal-buttons"></div>
    </div>
</div>

<style>
    h1 {
        color: black;
    }

    h3 {
        margin-top: 1rem;
    }

    h3 {
        margin-top: 1rem;
    }

    #paypal-buttons {
        margin-top: 1rem;
    }
</style>
