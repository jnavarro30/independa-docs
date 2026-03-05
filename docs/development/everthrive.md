---
outline: deep
---
# EverThrive

<!-- ## Table of Contents -->
<!-- 1. [Introduction](#Introduction)
2. [Application Layers](#application-layers)
3. [System Architecture Diagram](#system-architecture-diagram)  
4. [Non-Functional Considerations](#non-functional-considerations)  
5. [Tools & Development Environment](#tools-&-development-environment)
6. [Future Enhancements](#future-enhancements) -->

<!-- ## Introduction

This document provides a high-level overview of the technologies, frameworks, and third-party services used to build and operate EverThrive an Independa Company. It is intended for developers, architects, and stakeholders who need to understand the system components and integrations. -->

## RTM Care Plan
### Structure

```
{
  "safety_note": "Perform each exercise slowly and without pain. Stop if you feel dizziness, sharp pain, or unusual fatigue. Track daily completion in the RTM log.",

  "programs": {
    "musculoskeletal": {
      "label": "Physical Exercise",
      "safety": "Keep breathing normally. Use a stable chair or surface for balance activities.",
      "actions": [
        {
          "name": "Chair Marching",
          "instructions": "Sit tall in a sturdy chair and lift one knee at a time as if marching in place. Keep the movement gentle and rhythmic. Continue for 20–30 seconds to promote circulation in the legs."
        },
        {
          "name": "Seated Leg Extensions",
          "instructions": "Sit upright with both feet flat on the floor. Slowly extend one leg until straight, hold briefly, then lower. Alternate legs. Perform 8–10 times on each side to strengthen thigh muscles and support knee mobility."
        },
        {
          "name": "Heel to Toe Raises",
          "instructions": "Lift heels up to stand on toes then lower. Next lift toes while keeping heels on the floor. Repeat 10–12 times to improve ankle flexibility and circulation."
        },
        {
          "name": "Sit to Stand",
          "instructions": "From a seated position lean forward slightly and stand up slowly using hands only if necessary. Sit back down in a controlled manner. Repeat 5–8 times to build leg strength and improve independence."
        },
        {
          "name": "Standing Balance",
          "instructions": "Stand tall near a counter or sturdy surface for support. Lift one foot slightly off the ground and hold for 10–15 seconds. Switch sides. Repeat 2–3 times per leg to improve balance and stability."
        },
        {
          "name": "Wall Pushups",
          "instructions": "Stand facing a wall with feet about 2 feet away. Place hands shoulder-width apart at chest level. Slowly bend elbows to bring chest toward the wall then push back. Perform 8–10 repetitions to strengthen chest, arms, and shoulders."
        }
      ]
    },


    "respiratory": {
      "label": "Breathing Exercises",
      "safety": "Stop if shortness of breath worsens or oxygen drops below safe levels. Track completion and symptom changes in the RTM log.",
      "actions": [
        {
          "name": "Diaphragmatic Breathing",
          "instructions": "Sitting comfortably, place one hand on the chest and one on the stomach. Inhale deeply through the nose allowing the stomach to rise, then exhale slowly through the mouth. Repeat 5–10 times."
        },
        {
          "name": "Pursed Lip Breathing",
          "instructions": "Inhale slowly through the nose, then exhale gently through pursed lips as if blowing out a candle. Repeat 5–10 times."
        },
        {
          "name": "Inspiratory Hold and Release",
          "instructions": "Inhale deeply, hold the breath for 2–3 seconds, then release slowly through the mouth. Repeat 5–10 times."
        },
        {
          "name": "Sit to Stand with Breathing",
          "instructions": "Pair normal sit-to-stand movements with controlled breathing — stand while inhaling, sit while exhaling. Repeat 5–8 times."
        },
        {
          "name": "Low Impact Walking",
          "instructions": "Walk at a gentle pace for 5–10 minutes focusing on steady, controlled breathing. Stop if shortness of breath worsens or oxygen drops below safe levels."
        }
      ]
    },


    "CBT": {
      "label": "Cognitive Training",
      "safety": "Perform exercises in a safe seated or standing position. Note fatigue or cognitive strain in RTM log.",
      "actions": [
        {
          "name": "List Recall",
          "instructions": "Write or read a list of 5–10 items then try to recall them after a short delay."
        },
        {
          "name": "Daily Journal Entry",
          "instructions": "Write a short journal entry each day focusing on events or thoughts to encourage memory and processing."
        },
        {
          "name": "Memory Quiz",
          "instructions": "Answer a few basic recall or trivia questions daily to stimulate memory pathways."
        },
        {
          "name": "Alternating Screen Tap",
          "instructions": "Tap opposite sides of a screen or table in an alternating pattern for 30–60 seconds. Repeat 2–3 times."
        },
        {
          "name": "Hand Eye Games",
          "instructions": "Toss and catch a soft ball or play simple hand-eye coordination games for 5 minutes."
        },
        {
          "name": "Reaction Test",
          "instructions": "Respond quickly to a visual or auditory signal such as clapping when a timer beeps. Repeat several times."
        },
        {
          "name": "Timed Puzzle",
          "instructions": "Complete a crossword, sudoku, or other puzzle against a timer aiming to improve completion time over weeks."
        }
      ]
    }
  },
}
```

### Backend