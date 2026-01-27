# 🎂 Lakshanya Devi's 1st Birthday Invitation - Complete Guide

A highly animated, mobile-first static baby birthday invitation website with sky blue theme, background music, sound effects, and photo gallery.

## ✨ New Features Added

### 🎵 **Audio Features**
- **Background Music**: Happy Birthday song plays mildly in the background (30% volume)
- **Win Sound**: Crowd cheer sound when winning the gift game
- **Fail Sound**: Better luck sound when losing the gift game
- **Music Toggle**: Click the 🎵 button to start/stop background music

### 🖼️ **Image Features**
- **Background Image**: Full-page background image with overlay
- **Photo Gallery**: 3 photo frames for baby pictures
- **Baby Hero Image**: Main baby photo in rotating frame
- **Automatic Fallback**: Shows emoji placeholders if images are missing

## 📁 Required Files

To make everything work perfectly, add these files to your project folder:

### **Audio Files** (Place in the same folder as index.html)
1. `happy-birthday.mp3` - Background music (Happy Birthday song)
2. `crowd-cheer.mp3` - Win sound effect (crowd cheering)
3. `fail-sound.mp3` - Fail sound effect (better luck sound)

### **Image Files** (Place in the same folder as index.html)
1. `background.jpg` - Background image for the entire page
2. `baby-photo-1.jpg` - First gallery photo
3. `baby-photo-2.jpg` - Second gallery photo
4. `baby-photo-3.jpg` - Third gallery photo
5. `baby-main.jpg` - Main hero baby photo (optional)

## 🎵 Where to Get Audio Files

### **Free Audio Resources:**

1. **Happy Birthday Music:**
   - YouTube Audio Library (search "Happy Birthday instrumental")
   - FreeMusicArchive.org
   - Bensound.com (royalty-free music)

2. **Crowd Cheer Sound:**
   - Freesound.org (search "crowd cheer")
   - Zapsplat.com (free sound effects)
   - Mixkit.co (free sound effects)

3. **Fail Sound:**
   - Freesound.org (search "fail" or "wrong")
   - Zapsplat.com
   - Pixabay.com (sound effects section)

### **How to Download and Add:**
1. Download the audio files
2. Rename them to match the required names above
3. Place them in the same folder as `index.html`
4. Refresh the page

## 🖼️ How to Add Images

### **Method 1: Replace the Placeholder Baby Image**
1. Find the baby image section in `index.html` (around line 80)
2. Replace:
   ```html
   <div class="placeholder-baby">👶</div>
   ```
   With:
   ```html
   <img src="baby-main.jpg" alt="Lakshanya Devi" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
   ```

### **Method 2: Add Background Image**
1. Save your background image as `background.jpg`
2. Place it in the same folder as `index.html`
3. The image will automatically appear with a nice overlay

### **Method 3: Add Gallery Photos**
1. Save 3 baby photos as:
   - `baby-photo-1.jpg`
   - `baby-photo-2.jpg`
   - `baby-photo-3.jpg`
2. Place them in the same folder as `index.html`
3. They will automatically appear in the photo gallery

**Note:** If images are not found, cute emoji placeholders will show instead (📸, 🎂, 🎈)

## 🎮 How the Gift Game Works

1. **Click the gift box** 🎁
2. **Two possible outcomes:**
   - **WIN** 🎉: Random prize appears (🧸🎈🎀🍰🎁👶) + Confetti + Crowd cheer sound
   - **LOSE** 😄: "Better luck next time" message + Fail sound
3. **Click "Try Again"** to play again

## 🎵 Background Music Instructions

### **Auto-play is disabled by browsers**, so:
1. Click the **🎵 button** in the top-right corner
2. Music will start playing at 30% volume (mild background)
3. Click again to pause (button changes to 🔊 when playing)

### **If music doesn't play:**
- Make sure `happy-birthday.mp3` is in the correct folder
- Click the music button after the page loads
- Check browser console for errors

## 🎨 Customization Guide

### **Change Birthday Details**
Edit in `index.html`:
- **Baby Name**: Line 85, 101, etc.
- **Birthday Date**: Line 119
- **Time**: Line 126
- **Location**: Line 133

### **Change Countdown Date**
Edit in `script.js` (line 5):
```javascript
birthdayDate: new Date('2026-02-05T18:30:00'),
```

### **Change Phone Number**
Edit in `index.html`:
- **Call button**: Line 185
- **WhatsApp button**: Line 190

### **Change Parents' Names**
Edit in `index.html` (line 177):
```html
<p class="parents-names">Selvan ❤️ Saranya Devi</p>
```

### **Adjust Background Music Volume**
Edit in `script.js` (line 271):
```javascript
this.audio.volume = 0.3; // Change 0.3 to any value between 0.0 and 1.0
```

### **Change Gift Prizes**
Edit in `script.js` (line 6):
```javascript
giftOptions: ['🧸', '🎈', '🎀', '🍰', '🎁', '👶'],
```

## 📱 File Structure

```
Baby_birthday/
├── index.html              # Main HTML file
├── style.css               # All styles and animations
├── script.js               # Interactive features
├── README.md               # This guide
│
├── Audio Files (Add these):
│   ├── happy-birthday.mp3  # Background music
│   ├── crowd-cheer.mp3     # Win sound
│   └── fail-sound.mp3      # Fail sound
│
└── Image Files (Add these):
    ├── background.jpg      # Page background
    ├── baby-main.jpg       # Main baby photo (optional)
    ├── baby-photo-1.jpg    # Gallery photo 1
    ├── baby-photo-2.jpg    # Gallery photo 2
    └── baby-photo-3.jpg    # Gallery photo 3
```

## 🚀 Quick Start

1. **Open `index.html`** in your browser
2. **Click the music button** 🎵 to start background music
3. **Scroll down** to see all animations
4. **Click the gift box** 🎁 to play the game
5. **Test on mobile** for the best experience

## 🎯 Testing Checklist

- [ ] Background music plays when clicking 🎵 button
- [ ] Gift game plays crowd cheer sound on win
- [ ] Gift game plays fail sound on loss
- [ ] Background image shows (if added)
- [ ] Gallery photos show (if added)
- [ ] Countdown timer is working
- [ ] All animations are smooth
- [ ] RSVP buttons work (Call & WhatsApp)
- [ ] Google Maps button works

## 🎨 All Features

### **Visual Features:**
- ✅ Sky blue theme with gradients
- ✅ Background image support with overlay
- ✅ Photo gallery with 3 frames
- ✅ Rotating baby image frame
- ✅ Floating clouds, stars, balloons
- ✅ Confetti animation on page load
- ✅ Sparkle effect on mouse/touch
- ✅ Parallax scrolling
- ✅ 20+ different animations

### **Audio Features:**
- ✅ Background music (Happy Birthday)
- ✅ Win sound effect (crowd cheer)
- ✅ Fail sound effect
- ✅ Music toggle button
- ✅ Mild volume (30%)

### **Interactive Features:**
- ✅ Live countdown timer
- ✅ Gift box game with prizes
- ✅ Photo gallery with hover effects
- ✅ RSVP buttons (Call & WhatsApp)
- ✅ Google Maps integration
- ✅ Smooth scroll navigation

### **Mobile Features:**
- ✅ Mobile-first design
- ✅ Countdown shows first on mobile
- ✅ Touch-friendly buttons
- ✅ Responsive images
- ✅ Optimized animations

## 🌐 Hosting & Sharing

### **Option 1: GitHub Pages (Free)**
1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Enable GitHub Pages in settings
5. Share the URL via WhatsApp

### **Option 2: Netlify (Free)**
1. Go to netlify.com
2. Drag and drop your folder
3. Get instant URL
4. Share via WhatsApp

### **Option 3: Vercel (Free)**
1. Go to vercel.com
2. Import your project
3. Deploy instantly
4. Share the link

## 💡 Pro Tips

1. **Image Sizes:**
   - Background: 1920x1080px (Full HD)
   - Gallery photos: 800x800px (Square)
   - Main baby photo: 500x500px (Square)

2. **Audio Formats:**
   - MP3 is best for compatibility
   - Keep file sizes under 5MB
   - Use 128kbps quality for web

3. **Performance:**
   - Compress images before uploading
   - Use online tools like TinyPNG
   - Keep audio files under 3MB each

4. **Testing:**
   - Test on multiple devices
   - Check on both WiFi and mobile data
   - Test audio on iOS and Android

## 🎉 Made with 💙 for Lakshanya Devi

Enjoy the celebration! 🎂✨

---

## 📞 Support

If you need help:
1. Check the browser console (F12) for errors
2. Make sure all file names match exactly
3. Ensure files are in the correct folder
4. Try a different browser

**Happy Birthday Lakshanya Devi!** 🎈🎂🎉
