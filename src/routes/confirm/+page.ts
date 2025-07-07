import type { Load } from '@sveltejs/kit';

export const load = (({ url }) => {
    return {
        qToken: url.searchParams.get('token')
    };
}) satisfies Load;
