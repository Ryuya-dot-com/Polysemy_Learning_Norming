# GPT-5.5 AI-Simulated Norming Report

This is an AI-simulated desk norming pass, not human participant data. Do not merge these values into `main_norming_decision_summary.csv` as empirical norming evidence.

## Inputs

- Source items: `main_stimuli.csv`
- Raters: 5 GPT-5.5 agents with different Japanese L1 A2-B1 learner profiles
- Raw output: `ai_simulated_norming_gpt55_2026-04-27.csv`
- Item summary: `ai_simulated_norming_summary_gpt55_2026-04-27.csv`
- Condition summary: `ai_simulated_norming_condition_summary_gpt55_2026-04-27.csv`

## Condition Summary

| condition | items | written | spoken | known noun | target prior | target preknow prob | relatedness | guessability | gloss clarity | watch/formal | minor | ok |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| polysemy | 10 | 6.18 | 6.14 | 6.32 | 2.54 | 0.24 | 4.54 | 3.84 | 6.42 | 10 | 0 | 0 |
| operational_low_relatedness | 10 | 5.50 | 5.50 | 5.44 | 1.70 | 0.13 | 1.86 | 2.38 | 6.34 | 6 | 1 | 3 |
| control | 10 | 2.32 | 2.32 |  | 1.36 | 0.09 |  |  | 6.46 | 3 | 0 | 7 |

## Main Watch Items

- chair (polysemy, poly_nv_p02): WATCH_BEFORE_FORMAL; watch=3/5; issues=none
- screen (polysemy, poly_nv_p03): WATCH_BEFORE_FORMAL; watch=3/5; issues=relatedness_mean>=5.0 failed: 4.20
- pocket (polysemy, poly_nv_p04): WATCH_BEFORE_FORMAL; watch=2/5; issues=relatedness_mean>=5.0 failed: 3.40
- mirror (polysemy, poly_nv_p05): WATCH_BEFORE_FORMAL; watch=4/5; issues=target_prior_knowledge_mean<=2.5 failed: 2.80; target_verb_preknowledge_prob_mean<=0.25 failed: 0.27
- ship (polysemy, poly_nv_p06): WATCH_BEFORE_FORMAL; watch=5/5; issues=target_prior_knowledge_mean<=2.5 failed: 3.80; target_verb_preknowledge_prob_mean<=0.25 failed: 0.43; relatedness_mean>=5.0 failed: 4.60
- channel (polysemy, poly_nv_p07): WATCH_BEFORE_FORMAL; watch=2/5; issues=known_noun_familiarity_mean>=6.0 failed: 5.80; relatedness_mean>=5.0 failed: 4.00
- market (polysemy, poly_nv_p08): WATCH_BEFORE_FORMAL; watch=5/5; issues=target_prior_knowledge_mean<=2.5 failed: 3.40; target_verb_preknowledge_prob_mean<=0.25 failed: 0.37
- shoulder (polysemy, poly_nv_p09): WATCH_BEFORE_FORMAL; watch=1/5; issues=relatedness_mean>=5.0 failed: 4.40
- head (polysemy, poly_nv_p10): WATCH_BEFORE_FORMAL; watch=5/5; issues=target_prior_knowledge_mean<=2.5 failed: 3.60; target_verb_preknowledge_prob_mean<=0.25 failed: 0.40
- corner (polysemy, poly_nv_p11): WATCH_BEFORE_FORMAL; watch=1/5; issues=known_noun_familiarity_mean>=6.0 failed: 5.80; relatedness_mean>=5.0 failed: 4.20
- pound (operational_low_relatedness, low_nv_x07): WATCH_BEFORE_FORMAL; watch=5/5; issues=written_form_familiarity_mean>=5.5 failed: 4.60; spoken_form_familiarity_mean>=5.0 failed: 4.60; known_noun_familiarity_mean>=6.0 failed: 3.80; known_noun_accuracy_prob_mean>=0.85 failed: 0.62; preferred_guessability<=2.5 missed: 3.00
- coast (operational_low_relatedness, homo_nv_p04): WATCH_BEFORE_FORMAL; watch=1/5; issues=written_form_familiarity_mean>=5.5 failed: 5.00; known_noun_familiarity_mean>=6.0 failed: 5.00; known_noun_accuracy_prob_mean>=0.85 failed: 0.78; preferred_guessability<=2.5 missed: 2.80
- needle (operational_low_relatedness, low_nv_x25): WATCH_BEFORE_FORMAL; watch=1/5; issues=written_form_familiarity_mean>=5.5 failed: 5.20; known_noun_familiarity_mean>=6.0 failed: 5.20; known_noun_accuracy_prob_mean>=0.85 failed: 0.82
- cap (operational_low_relatedness, low_nv_x13): WATCH_BEFORE_FORMAL; watch=3/5; issues=known_noun_familiarity_mean>=6.0 failed: 5.80; preferred_guessability<=2.5 missed: 3.00
- bolt (operational_low_relatedness, low_nv_x27): WATCH_BEFORE_FORMAL; watch=5/5; issues=written_form_familiarity_mean>=5.5 failed: 3.80; spoken_form_familiarity_mean>=5.0 failed: 3.80; known_noun_familiarity_mean>=6.0 failed: 3.60; known_noun_accuracy_prob_mean>=0.85 failed: 0.56
- frame (operational_low_relatedness, low_nv_x03): WATCH_BEFORE_FORMAL; watch=3/5; issues=written_form_familiarity_mean>=5.5 failed: 5.40; known_noun_familiarity_mean>=6.0 failed: 5.20; known_noun_accuracy_prob_mean>=0.85 failed: 0.79; overlap_confusability_mean<=3.0 failed: 3.80
- jolt (control, ctrl_nv_p03): WATCH_BEFORE_FORMAL; watch=4/5; issues=written_form_familiarity_mean<=2.5 failed: 3.20; spoken_form_familiarity_mean<=2.5 failed: 3.20
- clench (control, ctrl_nv_x03): WATCH_BEFORE_FORMAL; watch=2/5; issues=written_form_familiarity_mean<=2.5 failed: 2.60; spoken_form_familiarity_mean<=2.5 failed: 2.60
- elude (control, ctrl_nv_x04): WATCH_BEFORE_FORMAL; watch=3/5; issues=written_form_familiarity_mean<=2.5 failed: 2.60; spoken_form_familiarity_mean<=2.5 failed: 2.60

## Minor Watch Items

- stomach (operational_low_relatedness): watch=0/5; issues=preferred_guessability<=2.5 missed: 2.60

## Interpretation

- The AI pass agrees that the experiment is operationally runnable, but it highlights likely human-norming pressure points.
- Polysemy items are broadly familiar, but several target verb meanings may be too guessable or partly known from school/test vocabulary.
- Operational low-relatedness items mostly preserve low relatedness, but many context sentences make the target verb meaning guessable; this is a prompt-design risk rather than necessarily an item-level semantic-risk.
- Control items are mostly low familiarity, but `jolt`, `abate`, `elude`, and some context-rich sentences need human preknowledge checks.
