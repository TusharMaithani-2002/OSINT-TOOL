/**
 *
 * @param data robots.txt from the url
 * @returns Object from txt
 */
function parseTextData(data: string) {
  const lines = data.split('\n')
  const rules: { label: string; val: string }[] = []

  const regex = /^\s*(User-agent|Allow|Disallow):\s*(.*)$/i

  for (let line of lines) {
    // removing comments
    if (line.startsWith('#') || line === '') continue

    const match = regex.exec(line)

    if (match) {
      const rule = {
        label: match[1]?.toString() || '',
        val: match[2]?.toString().trim() || ''
      }

      rules.push(rule)
    }
  }

  return rules
}

export async function getRobotTxtInfo(url: string) {
  try {
    const res = await fetch(url + '/robots.txt')
    const data = await res.text()

    return parseTextData(data)
  } catch (error: any) {
    console.error(error.message)
    return {}
  }
}
