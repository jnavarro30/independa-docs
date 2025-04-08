---
layout: page
title: Redirecting...
link: /index
---

<script setup>
const ua = navigator.userAgent.toLowerCase();

console.log('Navigator User Agent = ', ua);

if (ua.includes('android')) {
  window.open('https://play.google.com/store/apps/details?id=your.android.app', '_blank');
} else if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('mac')) {
  window.open('https://apps.apple.com/us/developer/independa/id986480420?l=zh-Hans-CN', '_blank');
} else {
  window.open('https://play.google.com/store/apps/details?id=com.reactnativezoomsdkpoc&hl=en_US&pli=1', '_blank');
}

window.location.href = '/';


</script>

> Redirecting you to the right app...
