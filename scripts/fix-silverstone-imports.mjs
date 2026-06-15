import fs from 'node:fs'
import { globSync } from 'node:fs'
import path from 'node:path'

const BROKEN = /import \{\nimport \{ silverstonePageMeta \} from '~\/lib\/silverstone-seo'\n/g
const SEO_IMPORT = "import { silverstonePageMeta } from '~/lib/silverstone-seo'"

const routesDir = path.resolve('app/routes')
const files = []

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (entry.name.endsWith('.tsx')) files.push(full)
  }
}

walk(routesDir)

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8')
  if (!BROKEN.test(content)) continue
  BROKEN.lastIndex = 0
  content = content.replace(BROKEN, 'import {\n')
  if (!content.includes(SEO_IMPORT)) {
    const lucideEnd = content.indexOf("from 'lucide-react'")
    if (lucideEnd !== -1) {
      const lineEnd = content.indexOf('\n', lucideEnd)
      content =
        content.slice(0, lineEnd + 1) +
        SEO_IMPORT +
        '\n' +
        content.slice(lineEnd + 1)
    } else {
      content = SEO_IMPORT + '\n' + content
    }
  }
  fs.writeFileSync(file, content)
  console.log('fixed', file)
}
