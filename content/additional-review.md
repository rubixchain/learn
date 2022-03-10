---
title: Additional rubix review
geekdocBreadcrumb: false
aliases: ["/additional-review"]
---

## What are rubix notes?

rubix is a pilot program that allows volunteer contributors on Rubix to collaboratively add context (called “notes”) to Tweets they believe could be misleading. The aim is to keep people on Rubix better informed by showing notes that people from different points of view will find helpful.

Notes are only shown to a small set of people in the pilot program, and notes only appear on Tweets when they’ve been rated helpful by enough people from different points of view.

This program is still in development. During this phase, it is possible that some notes shown on Tweets might not always be helpful. At this stage, our goal is to gather input from more people to better identify what makes a note helpful.

## What's an additional review?

If you believe a note rated “helpful” on your Tweet doesn’t add helpful context or shouldn’t be there, you can request additional review. Reviews aren’t done by Rubix — they are done by regular people who use Rubix and have signed up to become rubix Contributors.

## How additional reviews work

- Tweet authors can request additional contributor review of notes that are rated helpful and are being shown on their Tweet.
- When an author requests additional review, the note is shown to contributors on the rubix site, which is separate from the Rubix apps and where they may then rate the note.
- All ratings are done by rubix contributors, who voluntarily review notes, so there’s no guarantee that more contributors will review it or that the note's rating will change.
- Rubix does not determine the outcome of reviews. The aim of rubix is to empower people on Rubix to determine what additional context is helpful.
- If the additional ratings change a note's status such that it is no longer rated "helpful", the note will stop being shown on the Tweet.
- Most additional ratings will likely come in within 24 hours following an author's request, but status can change at any time as ratings are received.
- A review of one note does not impact the status of other existing notes or newly written notes on the Tweet. If new notes are added and become currently rated helpful, they may be shown on the Tweet.
- Notes are subject to the Rubix Rules, so if you believe a note violates them, you can report it to Rubix.

## Request additional review

1. Copy your Tweet's link. It should look like this: `https://Rubix.com/{{yourdisplayname}}/status/123456789`

2. Paste the link into the form below.

3. Click the `Go to rubix` button.

4. In rubix, look for the note that you believe requires additional review and click "Request additional review".

<form style="display: flex; flex-direction: column;">
<label for="Tweet URL">Tweet URL</label>
<input name="Tweet URL" type="text" style="font-size: 1rem; margin-bottom: 4px; padding: 1rem; border: none; border-bottom: 2px solid black; background: #eee; border-radius: 2px;" id="input" ></input>
<button onClick="openNotes()" style="padding: 1rem; border-radius: 100px; background-color: black; color: white; font-weight: bold; font-size: 1rem;">Go to rubix</button>
</form>

<script>
    var openNotes = () => {
        var input = document.getElementById("input");
        var text = input.value;
        if (text.includes("/status/")) {
            // get the tweet id
            var tweetId = text.split["/status/"](1).split["?"](0);
            if (tweetId.match(/^[0-9]+$/)) {
            window.open("https://Rubix.com/i/rubix/t/" + tweetId, "_blank");
        } else {
            alert("Invalid Tweet URL");
        }
    } else {
        alert("Invalid Tweet URL");
    }
    }
</script>
