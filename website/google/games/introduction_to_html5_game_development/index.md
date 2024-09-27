---
title: Introduction to HTML Game Development
slug: Games/Introduction_to_HTML5_Game_Development
page-type: guide
---



## Advantages

1. Games built with HTML work on smartphones, tablets, PCs and Smart TVs.
2. Advertise and promote your game all over the Web as well as other media.
3. Payments. Charge what you want and use whatever payment processing service you like.
4. Update your game whenever you want.
5. Collect your own analytics!
6. Connect with your customers more closely,
7. Players can play the game anywhere, anytime.

## Web Technologies

<table class="no-markdown standard-table">
  <caption>Web technologies in game development and their function</caption>
  <thead>
    <tr>
      <th scope="col"><strong>Function</strong></th>
      <th scope="col"><strong>Technology</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Audio</strong></td>
      <td><a href="/Web/API/Web_Audio_API">Web Audio API</a></td>
    </tr>
    <tr>
      <td><strong>Graphics</strong></td>
      <td>
        <a href="/Web/API/WebGL_API">WebGL</a> (<a
          href="https://www.khronos.org/opengles/"
          >OpenGL ES</a
        >
        2.0)
      </td>
    </tr>
    <tr>
      <td><strong>Input</strong></td>
      <td>
        <a href="/Web/API/Touch_events">Touch events</a>,
        <a href="/Web/API/Gamepad_API/Using_the_Gamepad_API"
          >Gamepad API</a
        >, device sensors, <a href="/Web/API/WebRTC_API">WebRTC</a>,
        <a href="/Web/API/Fullscreen_API">Full Screen API</a>,
        <a href="/Web/API/Pointer_Lock_API">Pointer Lock API</a>
      </td>
    </tr>
    <tr>
      <td><strong>Language</strong></td>
      <td>
        <a href="/Web/JavaScript">JavaScript</a> (or C/C++ using
        <a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a> to
        compile to JavaScript)
      </td>
    </tr>
    <tr>
      <td><strong>Networking</strong></td>
      <td>
        <a href="/Web/API/WebRTC_API">WebRTC</a> and/or
        <a href="/Web/API/WebSockets_API">WebSockets</a>
      </td>
    </tr>
    <tr>
      <td><strong>Storage</strong></td>
      <td>
        <a href="/Web/API/IndexedDB_API">IndexedDB</a> or the "cloud"
      </td>
    </tr>
    <tr>
      <td><strong>Web</strong></td>
      <td>
        <a href="/Web/HTML">HTML</a>,
        <a href="/Web/CSS">CSS</a>,
        <a href="/Web/SVG">SVG</a> (and much more!)
      </td>
    </tr>
  </tbody>
</table>

- [Fetch API](/Web/API/Fetch_API)
  - : Send and receive any kind of data you want from a Web server like downloading new game levels and artwork to transmitting non-real-time game status information back and forth.
- [Full Screen API](/Web/API/Fullscreen_API)
  - : Full screen gameplay.
- [Gamepad API](/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Use gamepads or other game controllers.
- [HTML](/Web/HTML) and [CSS](/Web/CSS)
  - : Build, style, and lay out your game's user interface.
- [HTML audio](/Web/HTML/Element/audio)
  - : Easily play simple sound effects and music.
- [IndexedDB](/Web/API/IndexedDB_API)
  - : Store user data on their own computer or device.
- [JavaScript](/Web/JavaScript)
  - : Fast web programming language to write the code for your game.
    To easily port your existing games [Emscripten](https://github.com/emscripten-core/emscripten/wiki) or [Asm.js](http://asmjs.org/spec/latest/)
- [Pointer Lock API](/Web/API/Pointer_Lock_API)
  - : Lock the mouse or other pointing device within your game's interface.
- [SVG](/Web/SVG) (Scalable Vector Graphics)
  - : Build vector graphics that scale smoothly regardless of the size or resolution of the user's display.
- [Typed Arrays](/Web/JavaScript/Guide/Typed_arrays)
  - : Access raw binary data from within JavaScript; Manipulate GL textures, game data, or anything else.
- [Web Audio API](/Web/API/Web_Audio_API)
  - : Control the playback, synthesis, and manipulation of audio in real time.
- [WebGL](/Web/API/WebGL_API)
  - : Create high-performance, hardware-accelerated 3D (and 2D) graphics. [OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/Web/API/WebRTC_API)
  - : Real-Time Communications to control audio and video data, including teleconferencing and transmitting other application data back and forth between two users like chat.
- [WebSockets](/Web/API/WebSockets_API)
  - : Connect your app or site to a server to transmit data back and forth in real-time. Perfect for multiplayer gaming action, chat services, and so forth.
- [Web Workers](/Web/API/Web_Workers_API/Using_web_workers)
  - : Spawn background threads running their own JavaScript code for multicore processors.
