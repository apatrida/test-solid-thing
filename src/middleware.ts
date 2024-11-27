import { createMiddleware } from '@solidjs/start/middleware';
import {FetchEvent} from "@solidjs/start/dist/server";

const logHits = async (event: FetchEvent) => {
    const serverFunc = event.request.headers.get('x-server-id');
    console.info(
        `>>> ${event.request.method} ${event.request.url}${serverFunc ? ' ' + serverFunc : ''} (referer: ${event.request.headers.get('referer') ?? 'n/a'})`
    );
};

const logCookieSet = async (event: FetchEvent) => {
    if (
        event.response.headers.get('set-cookie') &&
        event.response.headers.getSetCookie()?.some((e) => e !== null)
    ) {
        if (import.meta.env.DEV) {
            console.debug(
                '+++ DEBUG dev: COOKIE SET FROM ',
                event.request.method,
                event.request.url,
                event.response.headers.getSetCookie()
            );
        }
    }
};

export default createMiddleware({
    onRequest: [
        logHits,
    ],
    onBeforeResponse: [ logCookieSet],
});
