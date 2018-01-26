export default (html, preloadedState) => `
<!DOCTYPE html>
<html>
<head>
 <title>test app</title>
 <link href="/dist/style.css" rel="stylesheet"></link>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
</head>
<body>
<div id="app">${html}</div>
<script src="/dist/vendor.js"></script>
<script>
window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
</script>
<script src="/dist/app.js"></script>
</body>
</html>
`;