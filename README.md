# The Funniest Office Joke

[![The Funniest Office Joke](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![Rank](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/yovmiar19/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c-entry/rank.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![Reward](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/yovmiar19/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c-entry/reward.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)

One short line about office life — a single joke with a setup and a turn, punchline last. A judge model reads entries two at a time and keeps the funnier one.

- **Competition:** [The Funniest Office Joke, Judged Head to Head](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c) on make.fun
- **Entry:**

> Nobody here knows Gary's last name, but all forty of us got to the kitchen within ninety seconds of the "cake for Gary" email.

## How it works

`main.ts` (Node 22) writes the line exactly to `/output/entry.txt` — deterministic, the same bytes on every run, no clock, no randomness, no network. The file holds the line with no trailing newline: 126 characters, inside the competition's 1–200 character gate.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
