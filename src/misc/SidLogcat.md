<style>
body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #0f172a;
    color: #e5e7eb;
}

.card {
    background-color: #020617;
    padding: 32px;
    border-radius: 12px;
    max-width: 900px;
    margin: 40px auto;
    box-shadow: 0 0 30px rgba(0, 255, 150, 0.15);
}

h1 {
    color: #22c55e;
    text-align: center;
    font-size: 32px;
    margin-bottom: 4px;
}

h2 {
    margin: 0;
}

.name-line {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
}

.subtitle {
    color: #94a3b8;
    font-size: 16px;
}

ul {
    font-size: 18px;
    line-height: 1.8;
    padding-left: 20px;
}

li {
    margin-bottom: 20px;
}

.inline-image {
    display: block;
    margin: 10px 0 22px 0;
    max-width: 70%;
    border-radius: 8px;
    border: 1px solid #334155;
}

.inline-image.small {
    max-width: 45%;
}

.github-icon {
    width: 18px;
    height: 18px;
    fill: #94a3b8;
    transition: fill 0.2s ease;
}

.github-icon:hover {
    fill: #22c55e;
}
</style>

<div class="card">

# How to Make a Logcat for FTC

<div class="name-line">
<h2>by: Sid Shah</h2>
<a href="https://github.com/siddharth-shah121" target="_blank">
<svg class="github-icon" viewBox="0 0 24 24">
<path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.8-.7 2.1-1 .1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.8 5.5-5.4 5.8.4.4.8 1 .8 2.1v3.1c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/>
</svg>
</a>
</div>

<div class="name-line subtitle">
<span>credits to Oscar Froze ’n’ Milk</span>
<a href="https://github.com/Froze-N-Milk" target="_blank">
<svg class="github-icon" viewBox="0 0 24 24">
<path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.8-.7 2.1-1 .1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.8 5.5-5.4 5.8.4.4.8 1 .8 2.1v3.1c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/>
</svg>
</a>
</div>

---

## Steps

1. **Connect your computer to the robot**

   <img src="rev-control-hub.png" class="inline-image">

2. **Click _Logcat_ in the bottom left of Android Studio**

   <img src="android-studio-logcat.png" class="inline-image">

3. **Click _Delete_**

   <img src="clear-logcat.png" class="inline-image">

4. **Restart the robot**

   <img src="driver-station-restart.png" class="inline-image">

5. **Reproduce the issue**

   <img src="reproduce-issue-opmode.png" class="inline-image">

6. **Click _Export_ and send the log**

   <img src="export-logcat.png" class="inline-image small">

</div>
