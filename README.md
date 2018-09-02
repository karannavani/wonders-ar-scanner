# Goal
To experiment with AR.js and A-Frame over a weekend.

### Project
This is an AR scanner for my Wonders of the World AngularJS project.

#### Currently supported wonders:
1. Taj Mahal
2. Petra
3. Christ the Redeemer
4. Chichén Itzá

#### Instructions
* Open [this scanner](https://karannavani.github.io/wonders-ar-scanner) on your phone for **Taj Mahal & Petra** in AR or [this scanner](https://karannavani.github.io/wonders-ar-scanner-2) for **Christ the Redeemer & Chichén Itzá**.

* Visit the [Wonders app on Heroku](https://wonders-in-ar.herokuapp.com/#!/wonders) and open one of the supported wonders.

* Click on the place marker on the map to reveal an AR marker – scan this marker with the scanner on your phone to see the wonder in Augmented Reality.

<p align="center"><img src="https://thumbs.gfycat.com/UnhappyPrestigiousDrake-size_restricted.gif"></p>

---
# Technologies Used
* HTML5
* JavaScript (ES6)
* AR.js
* A-Frame
* Github
* Git

---
# Approach

Getting started was fairly simple – the 3 key resources I used were:

* [AR.js on GitHub](https://github.com/jeromeetienne/AR.js)
* [Augmented Reality in 10 Lines of HTML](https://medium.com/arjs/augmented-reality-in-10-lines-of-html-4e193ea9fdbf)
* [Creating Augmented Reality with AR.js and A-Frame](https://aframe.io/blog/arjs/)

I also did a lot of reading around this for more specific questions I had – the AR.js community is small but helpful.

### 3D Models
I used Google Poly and Sketchfab to download high quality models, free of charge by exceptional creators. I then imported these models into my HTML as a-frame gltf assets.

The scaling and positioning of the model wasn't how I wanted it, so I added attributes for rotation, scale and position. This was mostly trial and error, however I found [this Codepen playground](https://codepen.io/mozvr/pen/BjygdO?editors=100) to be good practice for understanding how to manipulate 3D models.

---

# Challenges

* **Custom Markers** – My biggest challenge was trying to use custom markers. I tried all the possible solutions but I could not get it to work. I managed to get the barcode patterns to work but they were not nearly as reliable as the Hiro and Kanji presets.

	This is why there are links for 2 different scanners. They're both programmed to detect the same Hiro and Kanji markers, but load up different models depending on which scanner you use.
	
* **Camera Access** – I ran into issues with WebRTC on all browsers other than Safari when I deployed the scanner on GitHub pages. 

	The fix is to add `navigator.mediaDevices` in your scanner's JavaScript so that it asks the user permission to use the camera. I spent some time trying to get this working but unfortunately could not get this working in time.
