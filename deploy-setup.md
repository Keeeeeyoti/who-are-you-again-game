# GitHub Pages Deployment Setup

## Step 1: Create GitHub Repository
1. Go to https://github.com and sign in
2. Click the "+" icon → "New repository"
3. Repository name: `who-are-you-again-game` (or any name you prefer)
4. Make it **PUBLIC** (required for free GitHub Pages)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

## Step 2: Connect Local Repository to GitHub
After creating the repository, run these commands in your terminal:

```bash
# Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to GitHub Pages
```bash
npm run deploy
```

## Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch and "/(root)" folder
6. Click "Save"

## Step 5: Access Your App
Your app will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Example Commands (replace with your actual values):
```bash
git remote add origin https://github.com/johndoe/who-are-you-again-game.git
git branch -M main
git push -u origin main
npm run deploy
```

Then enable GitHub Pages in the repository settings. 