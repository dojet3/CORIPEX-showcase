import { expect, it } from 'vitest'
import { QuestionDrafts, draftKey } from './questionDrafts.ts'

it('retains five bounded contexts without mixing identities, workspaces or conversations', () => {
  const drafts = new QuestionDrafts()
  const first = draftKey('a', 'w', 'one')
  drafts.set(first, 'First')
  for (let i = 0; i < 5; i++) drafts.set(draftKey('a', 'w', String(i)), `Question ${i}`)
  expect(drafts.get(first)).toBe('')
  expect(drafts.get(draftKey('a', 'w', '4'))).toBe('Question 4')
  expect(drafts.get(draftKey('b', 'w', '4'))).toBe('')
  expect(drafts.get(draftKey('a', 'other', '4'))).toBe('')
  drafts.set(first, 'א'.repeat(1000))
  expect(drafts.get(first)).toHaveLength(1000)
  drafts.set(first, '🔬'.repeat(501))
  expect(drafts.get(first)).toBe('')
  drafts.clearWorkspace('a', 'w')
  expect(drafts.hasDrafts).toBe(false)
})

it('retains pending identities under draft eviction and fences settlement to the original request', () => {
  const drafts = new QuestionDrafts()
  const scope = draftKey('user', 'workspace', 'conversation')
  const pending = drafts.begin(scope, 'Uncertain question')!
  for (let n = 0; n < 8; n++) drafts.set(draftKey('user', 'workspace', `draft-${n}`), `Draft ${n}`)
  expect(drafts.get(scope)).toBe('Uncertain question')
  expect(drafts.begin(scope, 'Uncertain question')).toEqual(pending)
  expect(drafts.begin(scope, 'Different question')).toBeNull()
  expect(drafts.submission(draftKey('other-user', 'workspace', 'conversation'))).toBeNull()
  expect(drafts.submission(draftKey('user', 'other-workspace', 'conversation'))).toBeNull()
  expect(drafts.submission(draftKey('user', 'workspace', 'other-conversation'))).toBeNull()
  drafts.clearWorkspace('user', 'workspace')
  const replacement = drafts.begin(scope, 'Replacement')!
  expect(drafts.settle(scope, pending.key, true)).toBe(false)
  expect(drafts.submission(scope)).toEqual(replacement)
  expect(drafts.get(scope)).toBe('Replacement')
})

it('bounds pending requests without silently discarding unresolved identities', () => {
  const drafts = new QuestionDrafts()
  for (let n = 0; n < 5; n++) expect(drafts.begin(draftKey('user', 'workspace', `${n}`), `Question ${n}`)).not.toBeNull()
  expect(drafts.begin(draftKey('user', 'workspace', 'sixth'), 'Another question')).toBeNull()
  expect(drafts.submission(draftKey('user', 'workspace', '0'))?.question).toBe('Question 0')
})
