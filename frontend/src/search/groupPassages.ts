import type { SearchItem } from '../api/generated/index.ts'

/** First surviving passage defines group order; neither documents nor passages are reranked. */
export function groupPassages(items: SearchItem[]) {
  const groups = new Map<string, SearchItem[]>()
  for (const item of items) {
    const key = JSON.stringify([item.workspace_id, item.document_id])
    const group = groups.get(key)
    if (group) group.push(item)
    else groups.set(key, [item])
  }
  return [...groups.entries()]
}
