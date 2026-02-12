# Sanity CMS Setup Guide

## Getting Started with Sanity

### 1. Create Sanity Project

Run this command in your terminal:

```bash
cd my-feed-store
npx sanity@latest init
```

Follow the prompts:
- Create new project: **Yes**
- Project name: **Subur Makmur Store**
- Output path: **studio** (or just press Enter)
- Package manager: **npm**
- TypeScript: **Yes**
- Template: **Clean project**

### 2. Get Your Project ID

After creating the project:
1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Copy your Project ID
3. Paste it in `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Deploy Sanity Studio

```bash
cd studio
npm run deploy
```

Your CMS will be available at: `https://your-project-id.sanity.studio`

### 4. Add Products

1. Open your Sanity Studio URL
2. Go to **Produk** in the sidebar
3. Click **Create** to add new products
4. Upload images, fill in prices, descriptions

### 5. Development

For local development of Sanity Studio:

```bash
cd studio
npm run dev
```

## Updating Next.js to Use Sanity

Once Sanity is set up, update `src/data/products.ts` to fetch from Sanity:

```typescript
import { client } from '@/sanity/client'

export async function getProducts() {
  const query = `*[_type == "product"] | order(_createdAt desc)`
  return client.fetch(query)
}
```

## Image Management

- Images are uploaded directly in Sanity Studio
- Automatically optimized and hosted on Sanity CDN
- Free tier includes 100GB storage

## Troubleshooting

### "Project ID not found"
Make sure your `.env.local` has the correct Project ID from sanity.io/manage

### Images not showing
Check that the image field is filled in Sanity Studio and has alt text

## Notes

- Free tier: 100GB asset storage, unlimited API calls
- Images are automatically optimized
- Studio can be deployed separately or embedded
