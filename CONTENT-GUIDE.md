# AnaMine Website — Content Editing Guide

This guide explains how to edit the website content without touching the code.

---

## Quick Start

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Open browser: `http://localhost:3000`
4. Build for production: `npm run build && npm run start`

---

## Editing Content (CMS)

### Method 1: JSON Content File (Recommended for non-developers)

Edit `src/data/content.json` to update:
- Company name, tagline, description
- Office addresses, phone numbers, emails
- Statistics (years, projects, etc.)
- Services list
- Industries list

**Example — Update phone number:**
```json
{
  "offices": [
    {
      "phone": "+244 927 359 000"  ← change this
    }
  ]
}
```

### Method 2: Edit Page Files Directly

Each page is a standalone file you can edit:

| Page | File |
|------|------|
| Home | `src/app/page.tsx` |
| About Us | `src/app/about/page.tsx` |
| Services | `src/app/services/page.tsx` |
| Industries | `src/app/industries/page.tsx` |
| Global Operations | `src/app/global-operations/page.tsx` |
| Contact | `src/app/contact/page.tsx` |

To edit text, find the relevant string in the file and change it.

---

## Adding Images

1. Place image files in `public/images/`
2. Reference them as `/images/your-image.jpg` in page files
3. Recommended sizes:
   - Hero background: 1920×1080px (JPG, optimized)
   - Office photos: 800×600px
   - Team photos: 400×400px (square)

### Hero Background Image (Optional)
To add a real background image to the hero:
1. Add `hero-bg.jpg` to `public/images/`
2. In `src/app/page.tsx`, add this to the hero section background div:
   ```
   style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
   ```

---

## SEO

Each page has its own metadata. To update a page's SEO title/description, find `export const metadata` at the top of each page file:

```typescript
export const metadata: Metadata = {
  title: "Your Page Title",
  description: "Your meta description (150-160 characters recommended)",
};
```

---

## Deploying to Production

### Option 1: Vercel (Easiest — Free tier available)
1. Push code to GitHub
2. Go to vercel.com → Import project
3. Connect GitHub repo → Deploy automatically

### Option 2: Netlify
1. Push code to GitHub  
2. Go to netlify.com → New site from Git
3. Build command: `npm run build`
4. Publish directory: `.next`

### Option 3: Self-hosted (VPS/Server)
```bash
npm install
npm run build
npm run start  # runs on port 3000
```
Use Nginx/Apache as reverse proxy on port 80/443.

---

## Custom Domain

After deploying, configure your domain DNS:
- Add CNAME record pointing to your hosting provider
- Enable HTTPS (automatic on Vercel/Netlify)

---

## Connecting a Real CMS (Optional Future Enhancement)

For a full CMS with visual editing, the site can be connected to:
- **Sanity.io** (free tier available, recommended)
- **Contentful** (free tier available)
- **Strapi** (self-hosted, free)

Contact your developer to set this up.

---

## Color Palette Reference

| Color | Hex | Usage |
|-------|-----|-------|
| Navy Deep | `#0B1528` | Hero, dark sections |
| Navy | `#1B3A6B` | Cards, accents |
| Gold | `#C9963F` | Buttons, highlights |
| Gold Light | `#D4A853` | Hover states |
| White | `#FFFFFF` | Light sections |
| Slate | `#F8FAFC` | Off-white sections |

---

## Support

For technical issues, contact your web developer or open an issue on the project repository.
