# 🎂 Lakshanya Devi's 1st Birthday Invitation

A highly animated, mobile-first static baby birthday invitation website with sky blue theme.

## ✨ Features

### 🎨 Visual Design
- **Sky Blue Theme** with soft pastel gradients
- **Rotating animated shapes** in the background
- **Floating clouds, stars, and balloons**
- **Glowing borders and smooth shadows**
- **Confetti animation** on page load
- **Sparkle effect** that follows mouse/touch movement
- **Parallax scrolling** effects

### 🎯 Sections

1. **Hero Section**
   - Animated heading with bouncing emojis
   - Baby image in rotating circular frame (currently showing placeholder emoji)
   - Baby name with glowing effect
   - Subtitle message

2. **Birthday Details Card**
   - Baby Name: Lakshanya Devi
   - Birthday: 05 / 02 / 2026
   - Time: 6:30 PM
   - Location: Our Home, Ekkaduthangal
   - Slide-up animation with bounce effect

3. **Countdown Timer**
   - Live countdown to the birthday
   - Animated number flip effect
   - Shows Days, Hours, Minutes, Seconds

4. **Location Section**
   - Google Maps button with bounce animation
   - Direct link to location

5. **Interactive Gift Box Game**
   - Click the gift box to play
   - Random prizes: 🧸 🎈 🎀 🍰 🎁 👶
   - Confetti animation on winning
   - "Try Again" button to reset

6. **Invitation Message**
   - Floating heart animations
   - Parents' names: Selvan ❤️ Saranya Devi

7. **RSVP Section**
   - Call Now button (tel: 9566771569)
   - WhatsApp RSVP button with pre-filled message
   - Pulse animation on buttons

8. **Footer**
   - "Made with 💙 for Lakshanya Devi"

### 📱 Mobile Responsive
- **Mobile-first design**
- Optimized for all screen sizes (320px - 1920px+)
- Touch-friendly buttons
- Smooth scrolling
- Optimized animations for low-end phones

## 🎵 Music Toggle

The music toggle button is in the top-right corner. To add background music:

1. Add your music file to the project folder (e.g., `birthday-music.mp3`)
2. Open `script.js`
3. Find line 5: `musicUrl: '',`
4. Update it to: `musicUrl: 'birthday-music.mp3',`

## 🖼️ Adding Baby Photo

To replace the placeholder emoji with a real baby photo:

1. Add your baby photo to the project folder (e.g., `baby-photo.jpg`)
2. Open `index.html`
3. Find line 60-62 (the baby image section):
   ```html
   <div class="baby-image" id="baby-image">
       <div class="placeholder-baby">👶</div>
   </div>
   ```
4. Replace with:
   ```html
   <div class="baby-image" id="baby-image">
       <img src="baby-photo.jpg" alt="Lakshanya Devi" style="width: 100%; height: 100%; object-fit: cover;">
   </div>
   ```

## 🎨 Customization

All data is easily editable in the HTML file:

### Change Birthday Details
Edit lines 75-102 in `index.html`:
- Baby Name
- Birthday Date
- Time
- Location

### Change Countdown Date
Edit line 5 in `script.js`:
```javascript
birthdayDate: new Date('2026-02-05T18:30:00'),
```

### Change Phone Number
Edit lines 169 and 174 in `index.html`:
- Call button: `tel:9566771569`
- WhatsApp button: `https://wa.me/919566771569`

### Change Parents' Names
Edit line 161 in `index.html`:
```html
<p class="parents-names">Selvan ❤️ Saranya Devi</p>
```

### Change Colors
Edit `style.css` lines 12-23 (CSS variables):
```css
--primary-color: #87CEEB;  /* Sky Blue */
--secondary-color: #FFB6C1; /* Pink */
--accent-color: #FFD700;    /* Gold */
```

## 🚀 How to Use

1. **Open Locally**: Simply open `index.html` in any web browser
2. **Share via WhatsApp**: 
   - Upload the folder to a web hosting service (GitHub Pages, Netlify, Vercel)
   - Share the URL via WhatsApp
3. **Test on Mobile**: Open on your phone to see the mobile-optimized design

## 📂 File Structure

```
Baby_birthday/
├── index.html      # Main HTML structure
├── style.css       # All styles and animations
├── script.js       # Interactive features and animations
└── README.md       # This file
```

## 🎁 Gift Box Game Prizes

Current prizes (edit in `script.js` line 6):
- 🧸 Teddy Bear
- 🎈 Balloon
- 🎀 Ribbon
- 🍰 Cake
- 🎁 Gift
- 👶 Baby

## 🌐 Browser Compatibility

Works on all modern browsers:
- ✅ Chrome/Edge (Recommended)
- ✅ Safari
- ✅ Firefox
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips

1. **Best viewed on mobile** - The design is mobile-first
2. **Refresh the page** to see the confetti animation again
3. **Move your mouse/finger** to see sparkle effects
4. **Scroll slowly** to see all the animations
5. **Click the gift box** for a fun surprise!

## 📝 Technical Details

- **Pure HTML, CSS, JavaScript** - No frameworks required
- **Lightweight** - Fast loading even on slow connections
- **No backend** - Completely static website
- **SEO optimized** - Proper meta tags and semantic HTML
- **Accessible** - ARIA labels and semantic structure

## 🎉 Made with 💙 for Lakshanya Devi

Enjoy the celebration! 🎂✨
