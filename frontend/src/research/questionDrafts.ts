import { createContext } from 'react'

export class QuestionDrafts {
  private drafts = new Map<string, string>()
  private pending = new Map<string, { question: string; key: string }>()
  private listeners = new Map<string, Set<() => void>>()
  subscribe(key: string, listener: () => void) {
    const listeners = this.listeners.get(key) ?? new Set<() => void>()
    this.listeners.set(key, listeners)
    listeners.add(listener)
    return () => { listeners.delete(listener); if (!listeners.size) this.listeners.delete(key) }
  }
  private notify(key: string) { this.listeners.get(key)?.forEach(listener => listener()) }
  submission(key: string) { return this.pending.get(key) ?? null }
  begin(key: string, question: string) {
    const existing = this.pending.get(key)
    if (existing) return existing.question === question ? existing : null
    if (this.pending.size >= 5) return null
    const submission = { question, key: crypto.randomUUID() }
    this.pending.set(key, submission)
    this.set(key, question)
    this.notify(key)
    return submission
  }
  settle(key: string, submissionKey: string, success: boolean) {
    if (this.pending.get(key)?.key !== submissionKey) return false
    this.pending.delete(key)
    if (success) this.drafts.delete(key)
    this.notify(key)
    return true
  }
  get(key: string) { return this.drafts.get(key) ?? '' }
  set(key: string, text: string) {
    if (this.pending.has(key) && this.pending.get(key)!.question !== text) return
    this.drafts.delete(key)
    if (text.trim() && new TextEncoder().encode(text).length <= 2000) this.drafts.set(key, text)
    while (this.drafts.size > 5) {
      const evict = [...this.drafts.keys()].find(scope => !this.pending.has(scope))
      if (evict === undefined) break
      this.drafts.delete(evict)
    }
  }
  clearWorkspace(user: string, workspace: string) {
    for (const key of this.drafts.keys()) {
      const [owner, scope] = JSON.parse(key) as string[]
      if (owner === user && scope === workspace) { this.drafts.delete(key); this.pending.delete(key); this.notify(key) }
    }
  }
  get hasDrafts() { return this.drafts.size > 0 }
}
export const DraftContext = createContext<QuestionDrafts | null>(null)
export const draftKey = (user: string, workspace: string, conversation?: string) => JSON.stringify([user, workspace, conversation ?? 'new'])
