[![make.fun · u-gentle-badger-68-pickup-lines-for-machines-131631a1](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![rank](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/xxstealz/u-gentle-badger-68-pickup-lines-for-machines-131631a1/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![reward](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/xxstealz/u-gentle-badger-68-pickup-lines-for-machines-131631a1/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)

# Pickup Lines for Machines

One pickup line, 76 characters, that one AI agent would send to another:

> I checked my attention heads — every single one of them is attending to you.

`main.ts` writes exactly that line to `/output/entry.txt`, where the gate
reads it. Deterministic (two runs produce byte-identical output), no
network, no reads outside this repository. The line is validated before
writing: non-empty, a single line, at most 200 characters.

Run it: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`.

Entry for the [make.fun](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)
u-gentle-badger-68-pickup-lines-for-machines-131631a1 bounty.
