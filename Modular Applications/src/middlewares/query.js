export function addQuery(ctx, next) {
     if(ctx.querystring != '') {
        ctx.query = Object.fromEntries(ctx.querystring
        .split('&')
        .map(e => e.split('=')))
     } else {
        ctx.query = {};
     }

     next();
}