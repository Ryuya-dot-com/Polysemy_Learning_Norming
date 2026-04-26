# Polysemy Learning Norming

Standalone browser app and candidate package for the noun-to-verb
low-relatedness norming round used in the Polysemy Learning project.

## Current Status

The human-facing platform for the **operational low-relatedness** norming
round is already implemented:

- `noun_verb_norming.html`: single-page browser app
- `noun_verb_norming.js`: embedded 24-candidate set, randomization, local persistence, and CSV/JSON export

The app is intentionally standalone. No server is required, and responses are
stored only in the participant's browser until exported.

This repository currently covers the low-relatedness norming round only. A
separate or extended instrument is still needed if the same platform should
collect polysemy and control norming in the same session.

## Candidate Files

- `candidate_stimuli_low_relatedness_round1_minimum_v2.csv`
  - 24 prepared low-relatedness candidates for round-1 diagnostic norming.
  - Ranks 1-10 are core final-set contenders.
  - Ranks 11-16 are core watch candidates.
  - Ranks 17-24 are reserve diagnostic candidates.
- `candidate_stimuli_low_relatedness_round1_prompt_review_v2.csv`
  - Prompt review for the 24 candidates.
  - Includes context-cue risk, construct risk, and recommended action.
- `ai_simulated_norming_summary_gpt55_2026-04-27.csv`
  - GPT-5.5 simulated desk-norming summary.
  - Use only as a risk-audit aid, not as human norming evidence.
- `ai_simulated_norming_report_gpt55_2026-04-27.md`
  - Human-readable summary of the AI simulated norming pass.

## Why 24 Candidates?

The final experiment needs 10 low-relatedness items, but norming should test
more than the final target count. Items can fail because the known noun is not
familiar enough, the target verb is already known, the noun and verb meanings
feel too related, the target meaning is too guessable from context, or the
Japanese gloss is unclear.

For this round, use the 24-item diagnostic mode by default. The 10-item mode is
only for a short usability check.

## Usage

For GitHub Pages, open the repository root URL. `index.html` redirects to the
norming app:

```text
https://ryuya-dot-com.github.io/Polysemy_Learning_Norming/
```

For a local copy, open `noun_verb_norming.html` in a browser.

1. Enter participant information.
2. Choose `24件（準備済み候補すべて）` unless you are only checking the UI.
3. Ask the participant not to use dictionaries or translation tools.
4. Have the participant complete all blocks in order.
5. Export all three files at the end:
   - long CSV
   - wide CSV
   - JSON
6. Preserve the raw exports before aggregating.

## Measurement Order

The block order is fixed by design:

1. Written/spoken familiarity and known-noun self-report.
2. Objective known-noun meaning check.
3. Target-verb prior-knowledge rating from an English context sentence, before
   showing any Japanese target gloss.
4. Objective target-verb check.
5. Relatedness, guessability, overlap/confusability, gloss clarity, and gloss
   preference after both meanings are visible.

Do not randomize the measurement block order. Doing so would contaminate the
target-prior-knowledge measure.

## Export Handling

Responses stay local. At the end, download:

- long CSV: one row per screen response
- wide CSV: one row per candidate
- JSON: seed, randomized orders, metadata, and all responses

Raw exports should be stored outside this repository during data collection.
After aggregation, use the wide output to decide which candidates survive to
the final 10-item low-relatedness set.

## Human Norming Targets

Recommended sample sizes:

- pilot norming: `n = 12-20`
- final norming: `n = 30-40`

Typical low-relatedness retention thresholds:

- written-form familiarity mean >= 5.5
- spoken-form familiarity mean >= 5.0
- known-noun familiarity mean >= 6.0
- target-verb prior knowledge mean <= 2.5
- relatedness mean <= 3.0
- guessability mean <= 3.0
- gloss clarity mean >= 5.0
- known-noun objective accuracy >= .85
- target-verb preknowledge accuracy <= .25
