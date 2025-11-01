/* --- Global Styling and Theme --- */
:root {
    --pink-light: #FFEDED; /* Softest pink background */
    --pink-hello-kitty: #FFC0CB; /* Classic Hello Kitty pink */
    --pink-deep: #D48092; /* Deep pink/rose for accents */
    --lily-white: #FFFFFF;
    --plumeria-yellow: #FFFACD;
    --text-color: #333;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: var(--pink-light);
    color: var(--text-color);
    margin: 0;
    padding: 0;
    text-align: center;
    overflow-x: hidden;
    /* REMINDER: Replace 'plumeria_pattern.png' with your image file for the background */
    background-image: url('plumeria_pattern.png'); 
    background-size: repeat;
}

.hk-icon {
    width: 80px;
    margin-bottom: 20px;
    animation: bounce 2s infinite ease-in-out;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

/* --- Password Screen Styling --- */
#intro-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--pink-hello-kitty);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    transition: opacity 1s ease-out; /* Fade out effect */
}

.intro-content {
    background: var(--lily-white);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    border: 5px solid var(--pink-deep);
}

#password-input {
    padding: 10px;
    margin: 15px 0;
    border: 2px solid var(--pink-deep);
    border-radius: 10px;
    text-align: center;
    font-size: 1.1em;
}

button {
    background-color: var(--pink-deep);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s, transform 0.1s;
}

button:hover {
    background-color: #A36070;
    transform: scale(1.05);
}

.clue {
    font-style: italic;
    color: var(--text-color);
}

.error-text {
    color: red;
    font-weight: bold;
    margin-top: 10px;
}

/* --- Main Content Styling --- */
#main-content {
    padding: 20px;
    opacity: 0;
    transition: opacity 1s ease-in;
}

.hidden {
    display: none;
}

header {
    background-color: var(--lily-white);
    padding: 20px 0;
    margin-bottom: 30px;
    border-bottom: 5px dashed var(--pink-hello-kitty);
}

h1, h2, h3 {
    color: var(--pink-deep);
    text-shadow: 1px 1px 2px var(--pink-hello-kitty);
}

/* --- Content Sections (Boxes) --- */
.content-box {
    background-color: var(--lily-white);
    padding: 30px;
    margin: 20px auto;
    max-width: 800px;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    border: 3px solid var(--pink-hello-kitty);
    opacity: 0;
}

/* --- Music Section Links --- */
.song-list {
    margin-top: 20px;
}

.spotify-link {
    display: block;
    margin: 10px auto;
    padding: 10px;
    background-color: var(--pink-hello-kitty);
    color: var(--text-color);
    text-decoration: none;
    border-radius: 20px;
    border: 2px solid var(--pink-deep);
    font-weight: bold;
    max-width: 300px;
    transition: background-color 0.3s, transform 0.3s;
}

.spotify-link:hover {
    background-color: var(--pink-deep);
    color: var(--lily-white);
    transform: scale(1.1);
}

/* --- Photo Section Grid and Styling --- */
.photo-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
}

.gallery-photo {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid var(--pink-deep);
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    transition: transform 0.3s;
}

.gallery-photo:hover {
    transform: scale(1.1) rotate(5deg);
}

/* --- Letter Section Styling --- */
.letter-box {
    text-align: left;
    white-space: pre-wrap;
    line-height: 1.6;
    background-color: var(--plumeria-yellow);
    padding: 20px;
    border-radius: 10px;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
}

.signature {
    margin-top: 20px;
    font-style: italic;
    font-weight: bold;
}

/* --- Transition and Animation Classes --- */

/* Intro Header Title Animation */
.animate-in {
    animation: textPop 1.5s ease-out;
}
@keyframes textPop {
    from { opacity: 0; transform: scale(0.5); }
    to { opacity: 1; transform: scale(1); }
}

/* Fade In Transition for Music Section */
.fade-in {
    animation: fadeIn 1s ease-out forwards;
}
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Slide In Left Transition for Photos Section */
.slide-in-left {
    animation: slideInLeft 1s ease-out forwards;
    animation-delay: 0.5s;
}
@keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-100px); }
    to { opacity: 1; transform: translateX(0); }
}

/* Slide In Right Transition for Letters Section */
.slide-in-right {
    animation: slideInRight 1s ease-out forwards;
    animation-delay: 1s;
}
@keyframes slideInRight {
    from { opacity: 0; transform: translateX(100px); }
    to { opacity: 1; transform: translateX(0); }
}