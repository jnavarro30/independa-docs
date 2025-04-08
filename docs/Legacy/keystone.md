---
outline: deep
---

### Keystone 
 - Dinh Note

I did some digging. And what we did previously at Keystone was one of our guys brought a macbook onsite to Keystone, connected to their WiFi and installed the TeamViewer software on it.
Then at home, we installed TeamViewer as well. Using TeamViewer, the keystone guy will provide an ID and a password that we connect to on our side at home. Then we remote in and can take over the mouse/keyboard just like a remote Desktop.
https://support.bitberry.com.au/base/media/url/nAXVji4cEZg5bObkE4yaBRrVqOrPpHGM
Now that we are inside a computer on their network. We just open up the terminal and can ssh/adb into any IATC device that is also on their network. IATCs are essentially just linux that you can ssh/adb into given you turn on debug mode for that device. You can view/stream the logs, install custom test .apks to it, reboot it, anything linux, etc.
However, I am not sure if the free version allows remote desktop anymore so you might have to pay $25 to use it for a month.
Free download with license options | TeamViewer 