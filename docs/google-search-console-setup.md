# Google Search Console — Ready to Submit

**Domain:** https://www.reverencesummerlinhomes.com  
**Primary focus:** Silverstone Ranch (89131), Centennial Hills  
**Agent:** Dr. Jan Duffy · (702) 930-8222

---

## ✅ Site Preparation Complete

| Item                                   | Status                        | URL                        |
| -------------------------------------- | ----------------------------- | -------------------------- |
| Sitemap index                          | ✅ Live                       | `/sitemap-index.xml`       |
| Main sitemap                           | ✅ Live                       | `/sitemap.xml`             |
| Communities sitemap                    | ✅ Live                       | `/sitemap-communities.xml` |
| Properties sitemap                     | ✅ Live                       | `/sitemap-properties.xml`  |
| Images sitemap                         | ✅ Live                       | `/sitemap-images.xml`      |
| robots.txt                             | ✅ Updated                    | `/robots.txt`              |
| Silverstone Ranch priority             | ✅ 1.0 in communities sitemap | —                          |
| LocalBusiness / RealEstateAgent schema | ✅ In `app/root.tsx`          | —                          |
| FAQ schema helper                      | ✅ `silverstoneFaqSchema()`   | —                          |
| Hyperlocal meta (all pages)            | ✅ `silverstonePageMeta()`    | 55 pages                   |

---

## Step 1: Verify Domain Ownership

1. Open [Google Search Console](https://search.google.com/search-console)
2. **Add property** → choose **URL prefix**: `https://www.reverencesummerlinhomes.com`
3. Verification options:

### Option A — HTML meta tag (recommended)

1. Copy the verification code from Google
2. In Vercel → Project → Settings → Environment Variables, add:
   - **Name:** `GOOGLE_SITE_VERIFICATION`
   - **Value:** (paste code only, not the full meta tag)
3. Redeploy — the tag is injected in `app/root.tsx`

### Option B — DNS TXT record

Add the TXT record at your DNS provider (Cloudflare: DNS only, gray cloud).

### Option C — HTML file upload

Place `googleXXXXXXXX.html` in `/public/` and redeploy.

---

## Step 2: Submit Sitemaps

In Search Console → **Sitemaps**, submit each:

```
sitemap-index.xml
sitemap.xml
sitemap-communities.xml
sitemap-properties.xml
sitemap-images.xml
```

---

## Step 3: Request Indexing (Priority Pages)

After verification, use **URL Inspection** for:

- `https://www.reverencesummerlinhomes.com/`
- `https://www.reverencesummerlinhomes.com/communities/silverstone-ranch`
- `https://www.reverencesummerlinhomes.com/buying`
- `https://www.reverencesummerlinhomes.com/selling`
- `https://www.reverencesummerlinhomes.com/contact`
- `https://www.reverencesummerlinhomes.com/valuation`

---

## Step 4: Link Google Analytics

GA4 property `G-9HKNXWWHTR` is already in `app/root.tsx`. In GA4 Admin, link the Search Console property.

---

## Monitoring Checklist

**Weekly**

- [ ] Coverage → Pages indexed
- [ ] Sitemaps → Last read / errors
- [ ] Performance → Silverstone Ranch queries

**Monthly**

- [ ] Core Web Vitals
- [ ] Mobile usability
- [ ] Review FAQ rich results for Silverstone pages

---

**Last updated:** June 2026
