# Who Are You Again? - Party Game

A fun, interactive party game built with React Native and Expo for web deployment. Perfect for breaking the ice at parties, team building events, or just having a good time with friends!

## 🎮 Game Overview

"Who Are You Again?" features three levels of questions designed to help people get to know each other better:

### 🥶 Icebreakers
- **Perfect for:** Strangers and new coworkers
- **Content:** Safe, friendly questions to get to know each other
- **Questions:** 20 carefully crafted icebreaker questions

### 😏 Mildly Intrusive  
- **Perfect for:** Friends who work together too much
- **Content:** Slightly more personal but still workplace appropriate
- **Questions:** 25 questions that dig a little deeper

### 🔥 HR Alert
- **Perfect for:** Close friends and daring groups
- **Content:** Unfiltered, emotionally spicy questions
- **Questions:** 30 questions that might raise eyebrows

## 🚀 Features

- **Three Difficulty Levels** - Choose your comfort zone
- **Local Multiplayer** - Play with 2+ players on the same device
- **Turn-Based Gameplay** - Players rotate answering questions
- **Score Tracking** - Keep track of who's winning
- **Smooth Animations** - Beautiful transitions and effects
- **Responsive Design** - Works great on desktop and mobile
- **No Backend Required** - Everything runs client-side

## 🛠️ Technical Stack

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and build tools
- **Expo Router** - File-based routing
- **TypeScript** - Type-safe development
- **Linear Gradients** - Beautiful visual effects
- **Animated API** - Smooth transitions

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (optional, but recommended)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd who-are-you-again
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in your browser**
   - Press `w` to open in web browser
   - Or scan the QR code with Expo Go app on your phone

## 🎯 How to Play

1. **Choose Your Level** - Select from Icebreakers, Mildly Intrusive, or HR Alert
2. **Add Players** - Enter names for all players (minimum 2)
3. **Take Turns** - Players answer questions one by one
4. **Score Points** - Earn points for honest answers
5. **Win!** - The player with the most points at the end wins

### Game Rules
- Players take turns answering questions
- Each honest answer earns 1 point
- Players can skip questions if they're uncomfortable
- Game ends when all questions are answered
- Highest score wins (ties are possible!)

## 🌐 Web Deployment

### Build for Web
```bash
npm run build:web
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
1. Build the web version
2. Deploy to GitHub Pages using gh-pages
3. Make your game available at `https://yourusername.github.io/your-repo-name`

### Manual Deployment
1. Run `npm run build:web`
2. Upload the contents of `web-build/` to your web server
3. Ensure your server is configured for single-page applications

## 📱 Mobile Deployment

### Build for iOS/Android
```bash
# For iOS
npm run ios

# For Android  
npm run android
```

### Create Standalone Apps
```bash
# Build for app stores
expo build:ios
expo build:android
```

## 🎨 Customization

### Adding New Questions
Edit `data/questions.ts` to add your own questions:

```typescript
{
  id: 'custom-1',
  text: 'Your custom question here?',
  category: 'icebreakers', // or 'mildly-intrusive' or 'hr-alert'
}
```

### Styling
- Colors and gradients are defined in each component's StyleSheet
- Main theme colors: `#667eea` (primary), `#764ba2` (secondary)
- Level-specific colors are defined in the level selection logic

### Game Logic
- Question shuffling: `data/questions.ts`
- Game state management: `app/game.tsx`
- Player management: `app/player-setup.tsx`

## 🔧 Development

### Project Structure
```
├── app/                    # Expo Router pages
│   ├── _layout.tsx        # Root layout
│   ├── index.tsx          # Home screen
│   ├── level-selection.tsx # Level selection
│   ├── player-setup.tsx   # Player configuration
│   └── game.tsx           # Main game screen
├── data/                  # Game data
│   └── questions.ts       # Question database
├── assets/                # Images and icons
├── package.json           # Dependencies
├── app.json              # Expo configuration
└── README.md             # This file
```

### Available Scripts
- `npm start` - Start development server
- `npm run web` - Start web development server
- `npm run android` - Start Android development
- `npm run ios` - Start iOS development
- `npm run build:web` - Build for web deployment
- `npm run deploy` - Deploy to GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev/)
- Icons from [@expo/vector-icons](https://github.com/expo/vector-icons)
- Inspired by classic party games and icebreaker activities

## 🐛 Troubleshooting

### Common Issues

**Build fails on web:**
- Ensure all dependencies are installed: `npm install`
- Clear cache: `npm start -- --clear`

**Questions not loading:**
- Check that `data/questions.ts` is properly formatted
- Verify category names match exactly

**Styling issues on mobile:**
- Test on different screen sizes
- Check Platform.OS specific styles

**Deployment issues:**
- Ensure gh-pages is installed: `npm install -g gh-pages`
- Check repository permissions
- Verify build output in `web-build/` directory

## 📞 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Search existing GitHub issues
3. Create a new issue with detailed information

---

**Have fun playing "Who Are You Again?"! 🎉** 