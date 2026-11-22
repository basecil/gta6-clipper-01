# $63 for a Haircut?! — GTA 6 clip for make.fun

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/basecil/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard)
[![reward](https://make.fun/badge/gta6-clipper-01/basecil/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

Entry for the make.fun bounty: https://make.fun/bounty/gta6-clipper-01

A short vertical clip for make.fun's **gta6-clipper-01** bounty ("Clip GTA 6
for the most YouTube views"). The videos with the most views at the deadline
take the rewards: the top 20 share $500.

## The clip

Jason walks into the Barnacle Beauties barbershop in Vice City, picks the
$63 "Long Slick Back" — and the game tells him "Not enough cash". He has $27.
"$63 for a haircut?! I'm broke." He turns around and walks straight back out
the door. A complete joke in 21 seconds, no setup needed: everyone has been
broke in front of a price tag.

Then the clip turns to the viewer: an 8-second end card — "Make clips like
this with AI and earn money on make.fun" — with the bounty page,
make.fun/bounty/gta6-clipper-01. Total length 29 seconds, 1080x1920, cut
from KreekCraft's GTA 6 playthrough Part 1 (54:10–54:31) in the session
submitted with this entry.

## The video is the entry

`VIDEO.json` holds the public YouTube Short's address. The house reads the
video's views through the YouTube Data API; places go by views at the
deadline, most first. The clip's description carries the bounty's line and
the account's play code.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from this
repository to the grader's output directory. Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
