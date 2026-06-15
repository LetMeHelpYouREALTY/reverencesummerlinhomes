#!/usr/bin/env node
/**
 * Applies Silverstone Ranch hyperlocal SEO meta to all route files.
 * Run: node scripts/apply-silverstone-seo.mjs
 */
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')

/** Map route file path (relative to app/routes) → silverstone page key */
const ROUTE_MAP = {
  'home.tsx': 'home',
  '_layout.tsx': 'layout',
  'buying/index.tsx': 'buying',
  'buying/new-home.tsx': 'buying-new-home',
  'buying/military-veterans.tsx': 'buying-military-veterans',
  'buying/mortgage-calculator.tsx': 'buying-mortgage-calculator',
  'buying/financing.tsx': 'buying-financing',
  'selling/index.tsx': 'selling',
  'selling/foreclosure-avoidance.tsx': 'selling-foreclosure-avoidance',
  'selling/short-sales.tsx': 'selling-short-sales',
  'selling/marketing.tsx': 'selling-marketing',
  'relocate/index.tsx': 'relocate',
  'relocate/summerlin.tsx': 'relocate-summerlin',
  'relocate/california.tsx': 'relocate-california',
  'relocate/los-angeles.tsx': 'relocate-los-angeles',
  'relocate/san-francisco.tsx': 'relocate-san-francisco',
  'relocate/new-york.tsx': 'relocate-new-york',
  'relocate/seattle.tsx': 'relocate-seattle',
  'relocate/phoenix.tsx': 'relocate-phoenix',
  'relocate/chicago.tsx': 'relocate-chicago',
  'communities/index.tsx': 'communities',
  'communities/silverstone-ranch.tsx': 'communities-silverstone-ranch',
  'communities/monument-at-reverence.tsx': 'communities-monument-at-reverence',
  'communities/reverence-summerlin.tsx': 'communities-reverence-summerlin',
  'communities/summerlin-west.tsx': 'communities-summerlin-west',
  'communities/downtown-summerlin.tsx': 'communities-downtown-summerlin',
  'communities/the-ridges.tsx': 'communities-the-ridges',
  'communities/luxury-homes.tsx': 'communities-luxury-homes',
  'communities/new-construction.tsx': 'communities-new-construction',
  'communities/red-rock-country-club.tsx': 'communities-red-rock-country-club',
  'communities/mesa-ridge.tsx': 'communities-mesa-ridge',
  'communities/the-peaks.tsx': 'communities-the-peaks',
  'communities/kestrel.tsx': 'communities-kestrel',
  'communities/skye-canyon.tsx': 'communities-skye-canyon',
  'communities/henderson.tsx': 'communities-henderson',
  'communities/ascension-summerlin.tsx': 'communities-ascension-summerlin',
  'communities/astra-la-madre-peaks.tsx': 'communities-astra-la-madre-peaks',
  'communities/boulder-city.tsx': 'communities-boulder-city',
  'resources/index.tsx': 'resources',
  'resources/blog.tsx': 'resources-blog',
  'resources/youtube.tsx': 'resources-youtube',
  'resources/schools.tsx': 'resources-schools',
  'resources/golf-courses.tsx': 'resources-golf-courses',
  'resources/trails.tsx': 'resources-trails',
  'resources/tennis-pickleball.tsx': 'resources-tennis-pickleball',
  'resources/pools.tsx': 'resources-pools',
  'contact.tsx': 'contact',
  'valuation.tsx': 'valuation',
  'properties.tsx': 'properties',
  'neighborhood-comparison.tsx': 'neighborhood-comparison',
  'market-trends.tsx': 'market-trends',
  'about/index.tsx': 'about',
  'about/media.tsx': 'about-media',
  'about/reviews.tsx': 'about-reviews',
  'about/zillow-premier.tsx': 'about-zillow-premier',
}

const SEO_IMPORT =
  "import { silverstonePageMeta, silverstoneCanonical } from '~/lib/silverstone-seo'"

function ensureImport(content) {
  if (content.includes("from '~/lib/silverstone-seo'")) return content
  const lines = content.split('\n')
  let lastImport = -1
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) lastImport = i
  }
  if (lastImport >= 0) {
    lines.splice(lastImport + 1, 0, SEO_IMPORT)
  } else {
    lines.unshift(SEO_IMPORT)
  }
  return lines.join('\n')
}

function replaceMeta(content, pageKey) {
  const metaFn = `export function meta() {
  return silverstonePageMeta('${pageKey}')
}`

  const metaRegex = /export function meta\(\) \{[\s\S]*?\n\}/
  if (!metaRegex.test(content)) {
    console.warn(`  ⚠ No meta() found, skipping meta replace`)
    return content
  }
  return content.replace(metaRegex, metaFn)
}

function replaceLinks(content, pageKey) {
  const pathMatch = content.match(/silverstonePageMeta\('([^']+)'\)/)
  if (!pathMatch) return content

  // Get path from PAGE_SEO via importing - use silverstoneCanonical with path from links
  const linksRegex = /export function links\(\) \{[\s\S]*?\n\}/
  const linksFn = `export function links() {
  return silverstoneCanonical(PAGE_SEO_PATH)
}`
  // Simpler: keep existing links if they use config.seo.siteUrl - only replace meta
  return content
}

let updated = 0
for (const [relPath, pageKey] of Object.entries(ROUTE_MAP)) {
  const filePath = path.join(ROOT, 'app/routes', relPath)
  if (!fs.existsSync(filePath)) {
    console.warn(`Missing: ${relPath}`)
    continue
  }

  let content = fs.readFileSync(filePath, 'utf8')
  if (!content.includes('export function meta()')) {
    console.warn(`No meta in ${relPath}`)
    continue
  }

  content = ensureImport(content)
  content = replaceMeta(content, pageKey)
  fs.writeFileSync(filePath, content)
  console.log(`✓ ${relPath} → ${pageKey}`)
  updated++
}

console.log(`\nUpdated ${updated} route files.`)
