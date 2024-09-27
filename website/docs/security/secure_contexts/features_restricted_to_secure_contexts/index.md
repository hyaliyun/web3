---
title: Features restricted to secure contexts
slug: Web/Security/Secure_Contexts/features_restricted_to_secure_contexts
page-type: guide
---



This reference lists the web platform features available only in secure contexts — see [Secure Contexts](/Web/Security/Secure_Contexts) for a definition and more details.

## Current features available only in secure contexts

This section lists APIs that specifications make available only in secure contexts.

- [Async Clipboard API](/Web/API/Clipboard)
- {{domxref("Audio Output Devices API", "", "", "nocode")}}
- {{domxref("Background Fetch API", "", "", "nocode")}}
- {{domxref("Background Synchronization API", "", "", "nocode")}}
- {{domxref("Badging API", "", "", "nocode")}}
- {{domxref("Barcode Detection API", "", "", "nocode")}}
- {{domxref("Battery Status API", "", "", "nocode")}}
- [`Cache-Control: immutable`](/Web/HTTP/Headers/Cache-Control)
- {{domxref("Contact Picker API", "", "", "nocode")}}
- {{domxref("Content Index API", "", "", "nocode")}}
- {{domxref("Cookie Store API", "", "", "nocode")}}
- [Credential Management API](/Web/API/Credential_Management_API)
- {{domxref("Device Memory API", "", "", "nocode")}}
- [Device Orientation / Device Motion](/Web/API/Device_orientation_events/Detecting_device_orientation)
- {{domxref("Document Picture-in-Picture API", "", "", "nocode")}}
- [EyeDropper API](/Web/API/EyeDropper)
- [Encrypted Media Extensions](/Web/API/Encrypted_Media_Extensions_API)
- {{domxref("File System API", "", "", "nocode")}}
- [Generic Sensor API](https://w3c.github.io/sensors/)
- {{domxref("Gamepad API", "", "", "nocode")}}
- {{domxref("Geolocation API", "", "", "nocode")}}
- {{domxref("Idle Detection API", "", "", "nocode")}}
- {{domxref("Keyboard API", "", "", "nocode")}}
- {{domxref("Local Font Access API", "", "", "nocode")}}
- [Notifications API](/Web/API/Notifications_API)
- {{domxref("Payment Handler API", "", "", "nocode")}}
- [Payment Request API](/Web/API/Payment_Request_API)
- [Presentation API](/Web/API/Presentation_API)
- [Push API](/Web/API/Push_API)
- [Reporting API](/Web/API/Reporting_API)
- {{domxref("Screen Capture API", "", "", "nocode")}}
- {{domxref("Screen Wake Lock API", "", "", "nocode")}}
- [Service Workers](/Web/API/Service_Worker_API)
- {{domxref("Shared Storage API", "", "", "nocode")}}
- [Storage API](/Web/API/Storage_API)
- {{domxref("VirtualKeyboard API", "", "", "nocode")}}
- [Web Authentication API](/Web/API/Web_Authentication_API)
- [Web Bluetooth](/Web/API/Web_Bluetooth_API)
- {{domxref("Web Locks API", "", "", "nocode")}}
- [Web MIDI](/Web/API/Web_MIDI_API)
- {{domxref("Web NFC API", "", "", "nocode")}}
- [Web Crypto API](/Web/API/Web_Crypto_API)
- {{domxref("WebCodecs API", "", "", "nocode")}}
- [WebGPU API](/Web/API/WebGPU_API)
- {{domxref("WebHID API", "", "", "nocode")}}
- {{domxref("WebOTP API", "", "", "nocode")}}
- {{domxref("WebTransport API", "", "", "nocode")}}
- {{domxref("WebUSB API", "", "", "nocode")}}
- {{domxref("WebXR Device API", "", "", "nocode")}}
- [Web Share API](/Web/API/Web_Share_API)
- {{domxref("Window Management API", "", "", "nocode")}}

In addition, the following methods require a secure context (even if the associated API does not):

- [`MediaDevices.getUserMedia()`](/Web/API/MediaDevices/getUserMedia)
- [`Navigator.registerProtocolHandler()`](/Web/API/Navigator/registerProtocolHandler)

## See also

- [Secure contexts](/Web/Security/Secure_Contexts)
- ["secure context" query on Chrome Platform Status](https://chromestatus.com/features#secure%20context)
