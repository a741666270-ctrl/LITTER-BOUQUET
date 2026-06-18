# Little Bouquet

**A bouquet that stays with you.**

A luxury jewelry customization website where users create personalized flower ring collections with birthstones.

## Tech Stack

- **Next.js** 15
- **TypeScript**
- **Tailwind CSS**

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Website Flow

1. **Homepage** - Brand introduction and call to action
2. **Choose Flower** - Select from 3 flower styles (Peach Blossom, Daisy, Plum Blossom)
3. **Choose Birthstone** - Select from 12 monthly birthstones
4. **Build Your Bouquet** - View and manage your ring collection (up to 5 rings)
5. **Bouquet Story** - Generated narrative based on your selections

## Features

- Fully functional page navigation
- Local storage persistence for bouquet state
- Dynamic story generation based on ring count and selections
- Elegant luxury editorial design
- Responsive layout

## Replacing Placeholders

All images use placeholder divs. To replace:

1. Find placeholder areas marked in the code (search for `bg-warm` divs used as image placeholders)
2. Replace with Next.js `<Image>` component using your actual image paths
3. Recommended image dimensions:
   - Flower cards: 600x600px
   - Hero section: 1920x1080px

## Project Structure

```
app/
├── page.tsx              # Homepage
├── choose-flower/        # Flower selection page
├── choose-birthstone/    # Birthstone selection page
├── build-bouquet/        # Bouquet management page
└── bouquet-story/        # Generated story page

components/
├── HomePage.tsx
├── ChooseFlowerPage.tsx
├── ChooseBirthstonePage.tsx
├── BuildBouquetPage.tsx
└── BouquetStoryPage.tsx

context/
└── BouquetContext.tsx    # State management

data/
└── flowers.ts            # Flower and birthstone data

types/
└── index.ts              # TypeScript interfaces
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
