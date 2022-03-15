const script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', chrome.runtime.getURL('injected.js'));

const body = document.getElementsByTagName('body')[0];
body.appendChild(script);