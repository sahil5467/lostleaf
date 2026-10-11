/* =========================================================================
   LOST LEAF — SCRIPT ENGINE
   - Mobile Menu & Scrollable Regional Language Modal Handlers
   - Guaranteed Two-Way Language Switching (Any Indian Lang <-> Clean English)
   - Dual Reflection Engine (10 & 30 Questions)
   - Trait Scoring & Archetype Analysis with Direct Linking to reading.html
   - NEW: Live Online & Unlimited Zen Inquiry Engine (Date-synced)
   - NEW: Fully Customizable Box Breathing (3s-8s Pace & 1-5 Min Duration)
   - NEW: Archetype 1080x1920 Story Snapshot Canvas Generator
   ========================================================================= */

const $ = id => document.getElementById(id);

/* ================= 1. ENGLISH BASE QUESTIONS ================= */
const questions10_EN = [
  {
    q: "When someone publicly points out a flaw in your work or opinion, what happens first inside you?",
    o: [
      ["A", "Defensive heat, irritation, or an impulse to discredit them.", ["emotion", 3, "self", 2]],
      ["B", "Mild embarrassment, but I mentally rehearse justifications.", ["emotion", 1, "self", 1]],
      ["C", "I detach from the tone and check if the fact is true.", ["reflection", 3, "open", 2]],
      ["D", "Curiosity about what they caught that I was blind to.", ["growth", 3, "reflection", 2]]
    ]
  },
  {
    q: "A peer achieves the exact milestone (wealth, recognition, relationship) you crave. Your unfiltered first reaction:",
    o: [
      ["A", "A sting of jealousy, unfairness, or resentment.", ["self", 3, "emotion", 2]],
      ["B", "Polite praise outside, but comparison and insecurity inside.", ["self", 1, "emotion", 2]],
      ["C", "A reminder to refocus on my own discipline and craft.", ["reflection", 2, "growth", 2]],
      ["D", "Genuine happiness for them, followed by studying their path.", ["empathy", 3, "growth", 3]]
    ]
  },
  {
    q: "You are tired, stressed, and in a hurry. An acquaintance asks for a favor that gives you zero return:",
    o: [
      ["A", "Irritation. I avoid or curtly turn them away.", ["self", 3, "empathy", -1]],
      ["B", "I agree reluctantly, but carry inner resentment.", ["emotion", 2, "empathy", 1]],
      ["C", "I evaluate if their emergency exceeds my fatigue.", ["reflection", 2, "empathy", 2]],
      ["D", "I assist gladly if possible, or decline with respectful warmth.", ["empathy", 3, "growth", 2]]
    ]
  },
  {
    q: "You realize you made a serious error, but circumstances make it very easy to let someone else take the blame:",
    o: [
      ["A", "I let them take it; self-preservation comes first.", ["self", 3, "honesty", -3]],
      ["B", "I stay quiet unless cornered or directly accused.", ["self", 2, "honesty", -1]],
      ["C", "I feel deep discomfort and privately try to rectify it.", ["honesty", 2, "reflection", 1]],
      ["D", "I openly step forward and own the responsibility immediately.", ["honesty", 4, "growth", 2]]
    ]
  },
  {
    q: "When someone is expressing a painful grief or trouble, what are you usually doing while they speak?",
    o: [
      ["A", "Mentally waiting for my turn to give advice or talk.", ["self", 2]],
      ["B", "Comparing their situation to something that happened to me.", ["self", 1, "empathy", 1]],
      ["C", "Listening quietly while holding space for their emotion.", ["empathy", 3]],
      ["D", "Focusing entirely on their experience without centering myself.", ["empathy", 4, "reflection", 2]]
    ]
  },
  {
    q: "You are given power, financial abundance, or authority over people. How do your boundaries change?",
    o: [
      ["A", "I naturally expect special treatment and deference.", ["self", 4, "empathy", -2]],
      ["B", "I become more distant and guarded with people.", ["self", 2]],
      ["C", "I stay cautious that authority doesn't inflate my ego.", ["reflection", 3, "growth", 2]],
      ["D", "I become increasingly conscious of my responsibility to serve.", ["empathy", 3, "honesty", 3]]
    ]
  },
  {
    q: "In a heated disagreement where you suddenly realize midway that you are dead wrong:",
    o: [
      ["A", "I double down or derail the conversation to avoid looking bad.", ["self", 3, "honesty", -2]],
      ["B", "I quietly withdraw or change the topic without admitting it.", ["emotion", 2, "honesty", 0]],
      ["C", "I admit it after the argument cools down.", ["honesty", 2, "reflection", 2]],
      ["D", "I stop right there and explicitly say: 'You are right, I was wrong.'", ["honesty", 4, "growth", 3]]
    ]
  },
  {
    q: "When life knocks you down with unexpected failure or rejection:",
    o: [
      ["A", "I blame external circumstances, unfair systems, or enemies.", ["emotion", 3, "self", 2]],
      ["B", "I sink into helplessness and negative rumination.", ["emotion", 3]],
      ["C", "I grieve the loss, then audit where my calculation failed.", ["reflection", 3, "growth", 2]],
      ["D", "I treat the breakdown as raw data to recalibrate my trajectory.", ["growth", 4, "reflection", 2]]
    ]
  },
  {
    q: "You see someone being bullied or mistreated. Intervening carries a real risk of social backlash for you:",
    o: [
      ["A", "I ignore it; survival means minding my own business.", ["self", 3, "empathy", -2]],
      ["B", "I feel bad, but I comfort myself that someone else will step in.", ["empathy", 1]],
      ["C", "I seek an indirect or calculated way to help them safely.", ["empathy", 2, "reflection", 2]],
      ["D", "I intervene or voice objection regardless of the personal discomfort.", ["empathy", 4, "honesty", 3]]
    ]
  },
  {
    q: "When you look at your unvarnished self in absolute silence late at night:",
    o: [
      ["A", "Frustration that I haven't acquired what I desire yet.", ["self", 2, "emotion", 2]],
      ["B", "Restless numbness, seeking immediate digital distraction.", ["emotion", 2]],
      ["C", "A sober inventory of my flaws, choices, and progress.", ["reflection", 3, "growth", 2]],
      ["D", "Gratitude for being alive and a calm resolve to be kinder and truer.", ["growth", 3, "empathy", 3, "reflection", 2]]
    ]
  }
];

const questions30_EN = [
  {
    q: "If someone criticizes you right now, what is your first inner reaction?", o: [
      ["A", "I get angry or defensive immediately.", ["emotion", 2, "self", 1]],
      ["B", "I feel bad and try to defend myself.", ["emotion", 1, "self", 1]],
      ["C", "I first check whether there is truth in what they said.", ["reflection", 2, "open", 2]],
      ["D", "I don't give criticism much importance.", ["self", 1, "emotion", 0]]
    ]
  },
  {
    q: "Right now, if someone is getting ahead of you in something you really want, what do you feel first?", o: [
      ["A", "Jealousy or irritation.", ["self", 2, "emotion", 2]],
      ["B", "I feel a little bad, even if I don't show it.", ["self", 1, "emotion", 1]],
      ["C", "I compare myself and think about what I can improve.", ["reflection", 2, "growth", 2]],
      ["D", "I feel inspired to learn and improve.", ["growth", 3, "empathy", 1]]
    ]
  },
  {
    q: "When you hear something that challenges your current belief, what do you usually do these days?", o: [
      ["A", "I immediately assume it is wrong.", ["open", -1, "self", 2]],
      ["B", "I start arguing for my side.", ["emotion", 1, "self", 1]],
      ["C", "I try to understand the full point first.", ["open", 2, "reflection", 2]],
      ["D", "If evidence is stronger, I am willing to change my view.", ["open", 3, "growth", 2]]
    ]
  },
  {
    q: "If someone close to you asks for help today when you really don't feel like helping, what are you most likely to do?", o: [
      ["A", "I simply refuse.", ["self", 2, "empathy", -1]],
      ["B", "I help, but mainly because I feel obligated.", ["empathy", 1, "emotion", 1]],
      ["C", "I look at how serious their need is.", ["reflection", 2, "empathy", 2]],
      ["D", "I try to help as much as I realistically can.", ["empathy", 3, "growth", 1]]
    ]
  },
  {
    q: "When you are alone these days, where does your mind go most often?", o: [
      ["A", "My own benefit, money, status or future.", ["self", 2]],
      ["B", "My worries and problems.", ["emotion", 2]],
      ["C", "Plans and things I want to improve.", ["growth", 2]],
      ["D", "Different ideas, people and questions about life.", ["reflection", 2, "open", 2]]
    ]
  },
  {
    q: "When you remember a recent mistake, what do you normally do?", o: [
      ["A", "Try not to think about it.", ["reflection", -1]],
      ["B", "Think about why circumstances caused it.", ["self", 1, "reflection", 1]],
      ["C", "Try to understand exactly why I made it.", ["reflection", 3]],
      ["D", "Use it to change what I do next time.", ["growth", 3, "reflection", 2]]
    ]
  },
  {
    q: "If money is tight right now but you get a chance to buy something you really want, what is your first instinct?", o: [
      ["A", "Find a way to get it anyway.", ["self", 2]],
      ["B", "If it is a small expense, maybe I will.", ["self", 1]],
      ["C", "I look at my current needs and future situation.", ["reflection", 2]],
      ["D", "I can postpone a want if it isn't necessary.", ["growth", 2, "self", -1]]
    ]
  },
  {
    q: "If you see someone making fun of a weaker or vulnerable person, how do you react these days?", o: [
      ["A", "I may find it funny too.", ["empathy", -2]],
      ["B", "I usually stay quiet.", ["empathy", 0]],
      ["C", "I don't like it, though I don't always speak up.", ["empathy", 2]],
      ["D", "If needed, I try to stop it or support the person.", ["empathy", 3, "growth", 1]]
    ]
  },
  {
    q: "If you receive credit for work that someone else actually did, what do you feel?", o: [
      ["A", "I like it — the credit is mine now.", ["self", 3, "honesty", -2]],
      ["B", "I feel a little uncomfortable.", ["honesty", 1]],
      ["C", "I think about giving the right person credit.", ["honesty", 2]],
      ["D", "I clarify who actually did the work.", ["honesty", 3, "empathy", 1]]
    ]
  },
  {
    q: "A friend achieves something you deeply wanted. What is your first feeling?", o: [
      ["A", "Why did they get it and not me?", ["self", 2, "emotion", 2]],
      ["B", "I'm happy for them, but I feel jealous too.", ["self", 1, "emotion", 1]],
      ["C", "I'm happy, then I think about my own path.", ["growth", 2, "reflection", 2]],
      ["D", "I'm genuinely happy and interested in learning from them.", ["empathy", 2, "growth", 3]]
    ]
  },
  {
    q: "When someone doesn't agree with you right now, what usually happens?", o: [
      ["A", "I get irritated.", ["emotion", 2, "self", 1]],
      ["B", "I keep explaining until they understand.", ["self", 1]],
      ["C", "I try to understand why they disagree.", ["open", 2, "reflection", 2]],
      ["D", "I accept that another person can reasonably see things differently.", ["open", 3, "empathy", 2]]
    ]
  },
  {
    q: "If an opportunity benefits you but requires bending a small rule, what is your current instinct?", o: [
      ["A", "If the benefit is big, I'll do it.", ["self", 3, "honesty", -2]],
      ["B", "For a small rule, maybe I would.", ["self", 2, "honesty", -1]],
      ["C", "I check whether anyone could be harmed.", ["reflection", 2, "honesty", 1]],
      ["D", "I look for another way that doesn't require breaking the rule.", ["honesty", 3, "growth", 1]]
    ]
  },
  {
    q: "When someone ignores you these days, what do you assume first?", o: [
      ["A", "They have an attitude.", ["emotion", 2, "open", -1]],
      ["B", "They probably have a problem with me.", ["emotion", 1, "self", 1]],
      ["C", "There may be another reason.", ["open", 2, "reflection", 1]],
      ["D", "I avoid conclusions until I know what happened.", ["open", 3, "reflection", 2]]
    ]
  },
  {
    q: "If someone asks you for help and you get absolutely no benefit from it, what is your first thought?", o: [
      ["A", "What's in it for me?", ["self", 3, "empathy", -1]],
      ["B", "Do I even have the time?", ["self", 1]],
      ["C", "Do they genuinely need my help?", ["reflection", 2, "empathy", 1]],
      ["D", "If I can help without harming myself, I will.", ["empathy", 3, "growth", 1]]
    ]
  },
  {
    q: "If you had to honestly admit one thing about your current self, which is closest?", o: [
      ["A", "I often put myself first.", ["self", 3]],
      ["B", "I change a lot depending on circumstances.", ["emotion", 2]],
      ["C", "My emotions sometimes control my reactions.", ["emotion", 3, "reflection", 1]],
      ["D", "I notice my weaknesses and try to work on them.", ["growth", 3, "reflection", 2]]
    ]
  },
  {
    q: "If someone treats you badly today but you later discover they were struggling, what do you feel?", o: [
      ["A", "I don't care; they shouldn't have done it.", ["self", 2]],
      ["B", "I understand, but I still stay angry.", ["emotion", 2]],
      ["C", "I can understand the reason while keeping boundaries.", ["empathy", 2, "reflection", 2]],
      ["D", "Understanding their situation changes how I see the incident.", ["empathy", 3, "open", 2]]
    ]
  },
  {
    q: "If you notice a person has a problem you could solve in two minutes, but they haven't asked you, what do you usually do?", o: [
      ["A", "Nothing; it isn't my problem.", ["self", 2]],
      ["B", "Only help if it benefits me too.", ["self", 2]],
      ["C", "Ask whether they want help.", ["empathy", 2]],
      ["D", "Offer help without making them feel incapable.", ["empathy", 3]]
    ]
  },
  {
    q: "When you are angry right now, how much control do you usually have over what you say?", o: [
      ["A", "Very little; I say whatever comes out.", ["emotion", 3]],
      ["B", "I sometimes say things I regret.", ["emotion", 2]],
      ["C", "I can usually pause before reacting.", ["emotion", 0, "reflection", 2]],
      ["D", "I deliberately wait until I can speak without trying to hurt someone.", ["emotion", -1, "growth", 3]]
    ]
  },
  {
    q: "If you discover that a close friend has lied to you, what is your current response most likely to be?", o: [
      ["A", "Lie back or hurt them in return.", ["self", 2, "emotion", 3, "honesty", -1]],
      ["B", "Cut them off immediately.", ["emotion", 2]],
      ["C", "Ask why they lied before deciding what to do.", ["reflection", 3, "open", 2]],
      ["D", "Set a boundary but still try to understand the situation.", ["empathy", 2, "reflection", 3]]
    ]
  },
  {
    q: "If you make more money or gain more status than the people around you, how do you think your behavior changes?", o: [
      ["A", "I naturally start feeling above them.", ["self", 3, "empathy", -2]],
      ["B", "I become more confident and may become distant.", ["self", 2]],
      ["C", "I try to stay the same with people.", ["growth", 2, "empathy", 2]],
      ["D", "I become more conscious of how my position affects others.", ["empathy", 3, "reflection", 2]]
    ]
  },
  {
    q: "When someone tells you a painful personal story, what do you usually do?", o: [
      ["A", "I quickly give advice.", ["self", 1]],
      ["B", "I compare it with something that happened to me.", ["self", 1, "empathy", 1]],
      ["C", "I listen and ask questions.", ["empathy", 3]],
      ["D", "I listen without trying to make the conversation about me.", ["empathy", 3, "reflection", 1]]
    ]
  },
  {
    q: "If a stranger makes a small mistake that inconveniences you, what is your immediate reaction?", o: [
      ["A", "I get irritated and let them know.", ["emotion", 2]],
      ["B", "I complain to someone else.", ["emotion", 2, "self", 1]],
      ["C", "I consider that it could happen to anyone.", ["empathy", 2]],
      ["D", "I stay calm unless the mistake creates real harm.", ["emotion", -1, "empathy", 2]]
    ]
  },
  {
    q: "When you receive praise these days, what happens inside you?", o: [
      ["A", "I want more praise and recognition.", ["self", 2]],
      ["B", "I enjoy it but don't think much about it.", ["self", 1]],
      ["C", "I appreciate it and keep working.", ["growth", 2]],
      ["D", "I can accept praise without needing it to define me.", ["growth", 3, "reflection", 2]]
    ]
  },
  {
    q: "If someone you dislike succeeds, what do you honestly feel?", o: [
      ["A", "I wish they hadn't.", ["self", 2, "emotion", 2]],
      ["B", "I don't like it, but I accept it.", ["emotion", 1]],
      ["C", "Their success is separate from how I feel about them.", ["reflection", 2, "emotion", -1]],
      ["D", "I can acknowledge their success even if I dislike them.", ["open", 3, "growth", 2]]
    ]
  },
  {
    q: "When you are wrong in an argument, what do you usually do?", o: [
      ["A", "Change the subject or find another reason.", ["self", 2, "honesty", -1]],
      ["B", "Stay quiet but feel annoyed.", ["emotion", 2]],
      ["C", "Admit it after thinking about it.", ["honesty", 2, "reflection", 2]],
      ["D", "Say clearly that I was wrong.", ["honesty", 3, "growth", 2]]
    ]
  },
  {
    q: "If you see someone being treated unfairly and speaking up could make your own life slightly harder, what do you do?", o: [
      ["A", "Stay out of it.", ["self", 3, "empathy", -1]],
      ["B", "Help only if the situation becomes serious.", ["empathy", 1]],
      ["C", "Look for a safe way to help.", ["empathy", 2, "reflection", 2]],
      ["D", "Speak up when I believe the harm is significant.", ["empathy", 3, "growth", 2]]
    ]
  },
  {
    q: "When you feel insecure about yourself these days, what do you tend to do?", o: [
      ["A", "Put others down or compare myself.", ["self", 2, "emotion", 2]],
      ["B", "Hide it and pretend I'm fine.", ["emotion", 2]],
      ["C", "Work on the area that makes me insecure.", ["growth", 3]],
      ["D", "Accept the feeling and try to understand where it comes from.", ["reflection", 3, "growth", 2]]
    ]
  },
  {
    q: "If you could erase one uncomfortable truth about yourself without anyone knowing, what would you be most likely to do?", o: [
      ["A", "Erase it immediately.", ["reflection", -1, "honesty", -1]],
      ["B", "Probably erase it if it doesn't affect anyone.", ["honesty", 0]],
      ["C", "Keep it because it may teach me something.", ["reflection", 2, "growth", 2]],
      ["D", "Face it and use it to change.", ["honesty", 3, "growth", 3]]
    ]
  },
  {
    q: "When you think about the kind of person you are becoming right now, which statement feels most accurate?", o: [
      ["A", "I'm mainly focused on protecting my own interests.", ["self", 3]],
      ["B", "I'm still figuring myself out and often react to circumstances.", ["emotion", 2, "reflection", 1]],
      ["C", "I'm trying to become more balanced and aware.", ["reflection", 3, "growth", 2]],
      ["D", "I'm deliberately working to become more honest, considerate and responsible.", ["growth", 3, "empathy", 3, "honesty", 2]]
    ]
  },
  {
    q: "At the end of a long day, when you look at yourself in the mirror, what feeling stands out most?", o: [
      ["A", "Frustration that things didn't go entirely my way.", ["emotion", 2, "self", 1]],
      ["B", "Numbness, just waiting for the next day to start.", ["emotion", 1]],
      ["C", "Curiosity about how I handled situations today.", ["reflection", 3, "growth", 1]],
      ["D", "A quiet gratitude and willingness to do better tomorrow.", ["growth", 3, "empathy", 2, "reflection", 2]]
    ]
  }
];

/* ================= 2. PSYCHOLOGICAL ARCHETYPE DATA ================= */
const LOCALIZED_DATA = {
  en: {
    self: [
      "The Self-Guarded Mindset",
      "Your choices reflect a primary instinct toward self-preservation and protecting your own territory. In modern society, this often develops when someone has felt unsupported or learned that no one else will look out for them.",
      "THE TRAP OF OVER-PROTECTION",
      "When self-defense becomes your default lens, you survive, but you stay isolated. You begin treating relationships as transactions: 'What do I get from this?' The real danger is that you end up pushing away genuine loyalty because you anticipate betrayal.\n\nActionable Step: Pick one interaction this week where you offer complete help or listening without calculating what comes back to you. Notice the peace in not having to protect yourself for just an hour.",
      "Beyond Transactional Living",
      "Boundaries are healthy; walls are suffocating. Notice when you are keeping boundaries to stay safe versus when you are holding walls to keep people out."
    ],
    emotion: [
      "The Emotion-Reactive Mindset",
      "Your choices indicate that your emotions move faster than your rationale. When triggered by unfairness, disrespect, or jealousy, your instinct reacts immediately—often before your deeper values can intervene.",
      "THE 6-SECOND GAP",
      "Strong reactions feel authentic in the heat of the moment, but they usually hand power over to the person who triggered you. When you lash out or withdraw in silence, you pay the emotional price later in regret or lost trust.\n\nActionable Step: Implement the '6-Second Rule'. When your pulse spikes from criticism or anger, deliberately force a 6-second physical pause—drink water, take two slow breaths. Let the biochemical flood recede before speaking. Words spoken in quiet conviction have tenfold the strength of words shouted in defense.",
      "The Mastery of the Pause",
      "A pause is not weakness or surrender; it is the deliberate choice of a conscious mind refusing to be controlled by an event."
    ],
    balanced: [
      "The Grounded & Aware Mindset",
      "Your answers demonstrate high internal honesty, healthy empathy, and a conscious ability to pause before reacting. You show willingness to admit faults without collapsing into shame.",
      "AVOIDING THE MORAL PEDESTAL",
      "The hidden pitfall of high self-awareness is spiritual arrogance—subtly looking down on those who are reactive, selfish, or loud. True character isn't proven when you are well-rested and respected; it is proven when you are exhausted, underpaid, insulted, or unappreciated.\n\nActionable Step: Observe yourself during your worst days. When stress peaks, do your high ideals remain, or do you regress into irritability? Keep testing your values against reality.",
      "Growth as an Endless Practice",
      "A mature character is not a monument you finish carving. It is a garden you have to weed every single morning."
    ]
  }
};

/* ================= 3. APP STATE CONTROLLER ================= */
let activeMode = 10;
let currentQuestionIndex = 0;
let userAnswers = [];
let scores = { self: 0, empathy: 0, honesty: 0, reflection: 0, growth: 0, open: 0, emotion: 0 };
let lastCalculatedArchetype = "balanced";

function getActiveQuestionSet() {
  return (activeMode === 10) ? questions10_EN : questions30_EN;
}

function selectMode(count) {
  activeMode = count;
  $("mode10").classList.toggle("active", count === 10);
  $("mode30").classList.toggle("active", count === 30);
}

function startReflection() {
  $("testIntro").classList.add("hidden");
  $("quiz").classList.remove("hidden");
  $("result").classList.add("hidden");

  currentQuestionIndex = 0;
  const currentSet = getActiveQuestionSet();
  userAnswers = new Array(currentSet.length).fill(undefined);
  scores = { self: 0, empathy: 0, honesty: 0, reflection: 0, growth: 0, open: 0, emotion: 0 };

  $("qTotal").textContent = currentSet.length;
  renderQuestion();
  $("test").scrollIntoView({ behavior: "smooth" });
}

function renderQuestion() {
  const currentSet = getActiveQuestionSet();
  const item = currentSet[currentQuestionIndex];

  $("qNumber").textContent = currentQuestionIndex + 1;
  $("questionText").textContent = item.q;

  const progressPercent = ((currentQuestionIndex + 1) / currentSet.length) * 100;
  $("progressBar").style.width = progressPercent + "%";

  $("prevBtn").disabled = (currentQuestionIndex === 0);
  $("nextBtn").disabled = (userAnswers[currentQuestionIndex] === undefined);
  $("nextBtn").textContent = (currentQuestionIndex === currentSet.length - 1) ? "See My Reflection →" : "Next →";

  const optionsContainer = $("options");
  optionsContainer.innerHTML = "";

  item.o.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option" + (userAnswers[currentQuestionIndex] === idx ? " selected" : "");
    btn.innerHTML = `
      <span class="option-letter">${opt[0]}</span>
      <span class="option-text">${opt[1]}</span>
    `;
    btn.onclick = () => {
      userAnswers[currentQuestionIndex] = idx;
      [...optionsContainer.children].forEach(c => c.classList.remove("selected"));
      btn.classList.add("selected");
      $("nextBtn").disabled = false;
    };
    optionsContainer.appendChild(btn);
  });
}

function handleNext() {
  const currentSet = getActiveQuestionSet();
  if (userAnswers[currentQuestionIndex] === undefined) return;

  if (currentQuestionIndex < currentSet.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    calculateResults();
  }
}

function handlePrev() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

/* ================= 4. SCORING & ARCHETYPE CALCULATION ================= */
function calculateResults() {
  scores = { self: 0, empathy: 0, honesty: 0, reflection: 0, growth: 0, open: 0, emotion: 0 };
  const currentSet = getActiveQuestionSet();

  currentSet.forEach((q, qIdx) => {
    const chosenIdx = userAnswers[qIdx];
    if (chosenIdx !== undefined) {
      const optionData = q.o[chosenIdx];
      const tags = optionData[2] || [];
      for (let i = 0; i < tags.length; i += 2) {
        const trait = tags[i];
        const val = tags[i + 1];
        if (scores[trait] !== undefined) scores[trait] += val;
      }
    }
  });

  const positive = scores.empathy + scores.honesty + scores.reflection + scores.growth + scores.open;
  const is10 = (activeMode === 10);
  const selfCutoff = is10 ? 7 : 18;
  const emotionCutoff = is10 ? 6 : 14;
  const positiveCutoff = is10 ? 11 : 28;

  let archetypeKey = "balanced";
  if (scores.self >= selfCutoff && positive < positiveCutoff) {
    archetypeKey = "self";
  } else if (scores.emotion >= emotionCutoff && scores.reflection < (is10 ? 7 : 16)) {
    archetypeKey = "emotion";
  } else {
    archetypeKey = "balanced";
  }

  lastCalculatedArchetype = archetypeKey;
  displayResults(archetypeKey);
}

function displayResults(key) {
  const pack = LOCALIZED_DATA.en;
  const [title, summary, advTitle, advText, readTitle, readText] = pack[key];

  $("quiz").classList.add("hidden");
  $("result").classList.remove("hidden");

  $("resultTitle").textContent = title;
  $("resultSummary").textContent = summary;
  $("adviceTitle").textContent = advTitle;
  $("adviceText").textContent = advText;

  // Direct Deep Link to reading.html based on archetype outcome
  const articleMap = {
    self: "person",
    emotion: "reactions",
    balanced: "growth"
  };
  const recArtKey = articleMap[key] || "person";

  $("readingTitle").innerHTML = `<a href="reading.html?article=${recArtKey}" style="color:var(--forest); text-decoration:underline;">${readTitle} →</a>`;
  $("readingText").textContent = readText;

  const traitLabels = ["Empathy", "Self-Awareness", "Growth Mindset", "Honesty", "Emotional Reactivity"];
  const signalLabels = ["Dominant", "Moderate", "Subtle"];

  const is10 = (activeMode === 10);
  const highThreshold = is10 ? 5 : 10;
  const midThreshold = is10 ? 2 : 4;
  const getSig = v => (v >= highThreshold ? signalLabels[0] : v >= midThreshold ? signalLabels[1] : signalLabels[2]);

  const traits = [
    [traitLabels[0], scores.empathy],
    [traitLabels[1], scores.reflection],
    [traitLabels[2], scores.growth],
    [traitLabels[3], scores.honesty],
    [traitLabels[4], scores.emotion]
  ];

  $("traitGrid").innerHTML = traits
    .map(t => `<div class="trait"><b>${t[0]}</b><span>${getSig(t[1])}</span></div>`)
    .join("");

  $("test").scrollIntoView({ behavior: "smooth" });
}

/* ================= 5. FEATURE 1: LIVE ONLINE & UNLIMITED REFLECTION PROMPTS ================= */
const OFFLINE_FALLBACK_PROMPTS = [
  "What is one emotion you felt today that you tried to quickly hide or pretend didn't exist?",
  "Did your reactions today protect your ego, or did they reflect who you genuinely want to be?",
  "Where are you currently holding a defensive wall, assuming someone is about to betray or judge you?",
  "If no one was ever going to applaud your achievements, what would you still choose to work on?",
  "What was the smallest moment today where you chose patience instead of reacting defensively?",
  "Are you listening to understand people around you, or just waiting for your turn to explain yourself?",
  "What truth about your own habits are you currently avoiding because facing it feels uncomfortable?",
  "In what situation today did you let a temporary emotion make a permanent impression on someone else?",
  "What would you do today if you completely stopped caring about proving yourself to strangers?",
  "Is the thought in your head right now a real fact, or just a story your anxiety is telling you?",
  "When you feel envy, can you identify the exact insecurity it is trying to bring to light?",
  "How much of your busy schedule today was necessary, and how much was just running away from silence?",
  "Can you forgive yourself for a past version of you that didn't know the things you know today?",
  "What boundary do you need to set with your own mind before setting one with others?",
  "Who did you judge today without knowing the weight they were carrying?",
  "If your daily actions were mirrored back to you by someone else, would you admire them?",
  "What are you waiting for permission to do?",
  "Notice your posture and breath right now. Are you bracing for an imaginary threat?",
  "Can you let someone be wrong about you without needing to exhaust yourself correcting them?",
  "What is a compliment you received that you refused to believe because of self-doubt?",
  "What would happen if you stopped complaining about the one thing you refuse to change?",
  "Are you choosing peace today, or are you secretly addicted to inner chaos?",
  "Whom do you need to thank, not out of formality, but out of genuine appreciation?",
  "What desire is currently running your thoughts: fear of loss, or genuine curiosity to live?"
];

let promptHistory = [];
let currentPromptIndex = 0;

async function fetchOnlinePrompt() {
  const promptElem = $("zenPromptText");
  const dateElem = $("zenDateDisplay");
  if (!promptElem) return;

  const today = new Date();
  const dateStr = today.toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
  if (dateElem) dateElem.textContent = `${dateStr} • Reflection Mirror`;

  promptElem.style.opacity = "0.35";

  // Try Online Live Philosophical APIs with Timeout
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2400);

    // Online Source: Stoic & Mindful Quotes API
    const response = await fetch("https://api.adviceslip.com/advice?t=" + Date.now(), {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (data && data.slip && data.slip.advice) {
        const onlineText = `"${data.slip.advice}"`;
        promptHistory.push(onlineText);
        currentPromptIndex = promptHistory.length - 1;
        promptElem.textContent = onlineText;
        promptElem.style.opacity = "1";
        return;
      }
    }
  } catch (err) {
    // Graceful offline fallback
  }

  // Fallback to Curated Pool if offline or API limit reached
  const dayIndex = (today.getDate() + currentPromptIndex) % OFFLINE_FALLBACK_PROMPTS.length;
  promptElem.textContent = `"${OFFLINE_FALLBACK_PROMPTS[dayIndex]}"`;
  promptElem.style.opacity = "1";
}

function initDailyZen() {
  fetchOnlinePrompt();

  const shuffleBtn = $("shuffleZenBtn");
  if (shuffleBtn) {
    shuffleBtn.onclick = () => {
      currentPromptIndex++;
      fetchOnlinePrompt();
    };
  }
}

/* ================= 6. FEATURE 2: CUSTOMIZABLE BOX BREATHING ENGINE ================= */
let breathingRunning = false;
let breathingInterval = null;
let breathingTimerInterval = null;
let breathingSecondsLeft = 60;
let customPaceSeconds = 4; // User selected 3s to 8s
let boxStep = 0; // 0: Inhale, 1: Hold, 2: Exhale, 3: Hold

const BREATH_PHASES = [
  { text: "Inhale...", class: "inhale" },
  { text: "Hold...", class: "hold" },
  { text: "Exhale...", class: "exhale" },
  { text: "Hold Empty...", class: "hold-empty" }
];

function initBreathingWidget() {
  const modal = $("breathingModal");
  const openBtn = $("openBreathingBtn");
  const closeBtn = $("closeBreathingModal");
  const toggleBtn = $("toggleBreathingBtn");
  const paceSelect = $("breathPaceSelect");
  const durationSelect = $("breathDurationSelect");

  if (!modal || !openBtn) return;

  openBtn.onclick = () => modal.classList.add("open");

  const closeModal = () => {
    modal.classList.remove("open");
    stopBreathingSession();
  };

  if (closeBtn) closeBtn.onclick = closeModal;
  modal.onclick = (e) => { if (e.target === modal) closeModal(); };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });

  if (paceSelect) {
    paceSelect.onchange = () => {
      customPaceSeconds = parseInt(paceSelect.value, 10) || 4;
      if (!breathingRunning) {
        if ($("breathCountdown")) $("breathCountdown").textContent = `${customPaceSeconds}s`;
      }
      applyOrbAnimationPace();
    };
  }

  if (durationSelect) {
    durationSelect.onchange = () => {
      if (!breathingRunning) {
        breathingSecondsLeft = parseInt(durationSelect.value, 10) || 60;
        if ($("breathingSessionTimer")) $("breathingSessionTimer").textContent = breathingSecondsLeft;
      }
    };
  }

  if (toggleBtn) {
    toggleBtn.onclick = () => {
      if (breathingRunning) {
        stopBreathingSession();
      } else {
        startBreathingSession();
      }
    };
  }

  applyOrbAnimationPace();
}

function applyOrbAnimationPace() {
  const orb = $("breathingOrb");
  if (orb) {
    // Dynamic CSS transition time mapped directly to user selected seconds
    orb.style.transition = `transform ${customPaceSeconds}s cubic-bezier(0.4, 0, 0.2, 1), background 1s ease`;
  }
}

function startBreathingSession() {
  breathingRunning = true;
  const durationSelect = $("breathDurationSelect");
  const paceSelect = $("breathPaceSelect");

  customPaceSeconds = paceSelect ? (parseInt(paceSelect.value, 10) || 4) : 4;
  breathingSecondsLeft = durationSelect ? (parseInt(durationSelect.value, 10) || 60) : 60;
  boxStep = 0;

  applyOrbAnimationPace();

  const toggleBtn = $("toggleBreathingBtn");
  if (toggleBtn) toggleBtn.innerHTML = "<span>⏹ Stop Session</span>";

  if ($("breathingSessionTimer")) $("breathingSessionTimer").textContent = breathingSecondsLeft;
  runBreathPhase();

  // Run dynamic phase cycle based on custom pace seconds
  clearInterval(breathingInterval);
  breathingInterval = setInterval(() => {
    boxStep = (boxStep + 1) % 4;
    runBreathPhase();
  }, customPaceSeconds * 1000);

  // 1-second countdown tick
  clearInterval(breathingTimerInterval);
  let stepSubSeconds = customPaceSeconds;

  breathingTimerInterval = setInterval(() => {
    breathingSecondsLeft--;
    stepSubSeconds--;

    if (stepSubSeconds <= 0) stepSubSeconds = customPaceSeconds;

    if ($("breathingSessionTimer")) $("breathingSessionTimer").textContent = breathingSecondsLeft;
    if ($("breathCountdown")) $("breathCountdown").textContent = `${stepSubSeconds}s`;

    if (breathingSecondsLeft <= 0) {
      stopBreathingSession();
      if ($("breathPhaseText")) $("breathPhaseText").textContent = "Complete ✓";
      if ($("breathCountdown")) $("breathCountdown").textContent = "Peaceful";
    }
  }, 1000);
}

function runBreathPhase() {
  const orb = $("breathingOrb");
  const phaseText = $("breathPhaseText");
  const countdown = $("breathCountdown");
  const phase = BREATH_PHASES[boxStep];

  if (!orb || !phaseText) return;

  phaseText.textContent = phase.text;
  if (countdown) countdown.textContent = `${customPaceSeconds}s`;

  orb.className = "breathing-orb " + phase.class;
}

function stopBreathingSession() {
  breathingRunning = false;
  clearInterval(breathingInterval);
  clearInterval(breathingTimerInterval);

  const durationSelect = $("breathDurationSelect");
  const paceSelect = $("breathPaceSelect");

  customPaceSeconds = paceSelect ? (parseInt(paceSelect.value, 10) || 4) : 4;
  const defaultTotal = durationSelect ? (parseInt(durationSelect.value, 10) || 60) : 60;

  const toggleBtn = $("toggleBreathingBtn");
  if (toggleBtn) toggleBtn.innerHTML = "<span>▶ Start Breathing</span>";

  const orb = $("breathingOrb");
  if (orb) {
    orb.style.transition = "transform 0.6s ease";
    orb.className = "breathing-orb";
  }

  if ($("breathPhaseText")) $("breathPhaseText").textContent = "Ready";
  if ($("breathCountdown")) $("breathCountdown").textContent = `${customPaceSeconds}s`;
  if ($("breathingSessionTimer")) $("breathingSessionTimer").textContent = defaultTotal;
}

/* ================= 7. FEATURE 3: SNAPSHOT DOWNLOAD ENGINE (Canvas 1080x1920) ================= */
function initSnapshotGenerator() {
  const dlBtn = $("downloadSnapshotBtn");
  if (!dlBtn) return;

  dlBtn.onclick = () => {
    const canvas = $("snapshotCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Dimensions: 1080 x 1920 (Instagram Story / WhatsApp Status)
    canvas.width = 1080;
    canvas.height = 1920;

    // Background Gradient (Deep Forest to Ink)
    const bgGrad = ctx.createLinearGradient(0, 0, 1080, 1920);
    bgGrad.addColorStop(0, "#062b21");
    bgGrad.addColorStop(0.5, "#0b3d2e");
    bgGrad.addColorStop(1, "#031c15");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1080, 1920);

    // Decorative Borders
    ctx.strokeStyle = "rgba(215, 181, 109, 0.4)";
    ctx.lineWidth = 4;
    ctx.strokeRect(60, 60, 960, 1800);

    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(75, 75, 930, 1770);

    // Brand Logo Emblem Watermark
    ctx.font = "800 120px Georgia, serif";
    ctx.fillStyle = "rgba(215, 181, 109, 0.08)";
    ctx.textAlign = "center";
    ctx.fillText("❧", 540, 480);

    // Top Brand Tag
    ctx.font = "700 28px 'DM Sans', sans-serif";
    ctx.fillStyle = "#d7b56d";
    ctx.letterSpacing = "6px";
    ctx.fillText("L O S T   L E A F", 540, 240);

    ctx.font = "500 20px 'DM Sans', sans-serif";
    ctx.fillStyle = "#a7cfb7";
    ctx.letterSpacing = "3px";
    ctx.fillText("THE INNER LENS • SELF-INQUIRY ARCHETYPE", 540, 285);

    // Divider Line
    ctx.strokeStyle = "#d7b56d";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(440, 320);
    ctx.lineTo(640, 320);
    ctx.stroke();

    // Archetype Title
    const pack = LOCALIZED_DATA.en;
    const [title, summary, advTitle, advText] = pack[lastCalculatedArchetype] || pack["balanced"];

    ctx.font = "italic 700 58px 'Playfair Display', Georgia, serif";
    ctx.fillStyle = "#ffffff";
    ctx.letterSpacing = "0px";
    ctx.fillText(title, 540, 460);

    // Trait Grid Badges inside Story Card
    const traitLabels = ["Empathy", "Awareness", "Growth", "Honesty", "Emotion"];
    const traitVals = [scores.empathy, scores.reflection, scores.growth, scores.honesty, scores.emotion];
    const badgeY = 560;

    traitLabels.forEach((label, i) => {
      const bx = 160 + (i * 155);
      ctx.fillStyle = "rgba(234, 245, 238, 0.08)";
      ctx.fillRect(bx, badgeY, 135, 90);
      ctx.strokeStyle = "rgba(215, 181, 109, 0.3)";
      ctx.strokeRect(bx, badgeY, 135, 90);

      ctx.font = "700 18px 'DM Sans', sans-serif";
      ctx.fillStyle = "#d7b56d";
      ctx.fillText(label, bx + 67, badgeY + 40);

      const val = traitVals[i];
      const sig = val >= 5 ? "Dominant" : val >= 2 ? "Balanced" : "Subtle";
      ctx.font = "600 16px 'DM Sans', sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.fillText(sig, bx + 67, badgeY + 68);
    });

    // Summary Quote Box
    ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
    ctx.roundRect(140, 720, 800, 380, [24]);
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
    ctx.stroke();

    ctx.font = "600 22px 'DM Sans', sans-serif";
    ctx.fillStyle = "#d7b56d";
    ctx.textAlign = "left";
    ctx.fillText("REFLECTION MIRROR:", 180, 780);

    ctx.font = "400 28px 'Playfair Display', Georgia, serif";
    ctx.fillStyle = "#e2efe6";
    wrapText(ctx, `"${summary}"`, 180, 835, 720, 44);

    // Actionable Truth Box
    ctx.fillStyle = "rgba(215, 181, 109, 0.1)";
    ctx.roundRect(140, 1150, 800, 420, [24]);
    ctx.fill();
    ctx.strokeStyle = "rgba(215, 181, 109, 0.4)";
    ctx.stroke();

    ctx.font = "700 22px 'DM Sans', sans-serif";
    ctx.fillStyle = "#d7b56d";
    ctx.fillText(advTitle, 180, 1215);

    const cleanAdv = advText.split("\n")[0];
    ctx.font = "400 26px 'DM Sans', sans-serif";
    ctx.fillStyle = "#f5fdf7";
    wrapText(ctx, cleanAdv, 180, 1270, 720, 42);

    // Signature Footer
    ctx.textAlign = "center";
    ctx.font = "italic 26px 'Playfair Display', Georgia, serif";
    ctx.fillStyle = "#a7cfb7";
    ctx.fillText("“The goal isn’t to be flawless. It is to notice who you are becoming.”", 540, 1680);

    ctx.font = "700 18px 'DM Sans', sans-serif";
    ctx.fillStyle = "#d7b56d";
    ctx.letterSpacing = "2px";
    ctx.fillText("LOSTLEAF.SPACE", 540, 1740);

    // Download trigger
    const link = document.createElement("a");
    link.download = `LostLeaf_${lastCalculatedArchetype}_Snapshot.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };
}

// Canvas Text Wrapping Helper
function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}

/* ================= 8. TWO-WAY TRANSLATION ENGINE ================= */
const langModal = $("indian_lang_modal");

function clearAllGoogleTranslateCookies() {
  const hostname = window.location.hostname;
  const domainParts = hostname.split('.');

  document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + hostname + ";";
  document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." + hostname + ";";

  if (domainParts.length > 2) {
    const parentDomain = domainParts.slice(-2).join('.');
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." + parentDomain + ";";
  }
}

function setLanguage(langCode) {
  if (langModal) langModal.classList.remove("open");

  if (langCode === "en") {
    const selectElem = document.querySelector("#google_translate_element select.goog-te-combo");
    if (selectElem) {
      selectElem.value = "";
      selectElem.dispatchEvent(new Event("change"));
    }
    clearAllGoogleTranslateCookies();
    window.location.reload();
    return;
  }

  clearAllGoogleTranslateCookies();
  document.cookie = `googtrans=/en/${langCode}; path=/;`;
  document.cookie = `googtrans=/en/${langCode}; path=/; domain=.${window.location.hostname};`;

  const selectElem = document.querySelector("#google_translate_element select.goog-te-combo");
  if (selectElem) {
    selectElem.value = langCode;
    selectElem.dispatchEvent(new Event("change"));
  } else {
    window.location.reload();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  // Init newly added features
  initDailyZen();
  initBreathingWidget();
  initSnapshotGenerator();

  const menuBtn = $("menuBtn");
  const navLinks = $("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.onclick = (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("open");
    };

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.onclick = () => navLinks.classList.remove("open");
    });
  }

  const gBtn = $("googleTranslateBtn");
  if (gBtn && langModal) {
    gBtn.onclick = (e) => {
      e.stopPropagation();
      langModal.classList.add("open");
      if (navLinks) navLinks.classList.remove("open");
    };
  }

  const closeBtn = $("closeLangModal");
  if (closeBtn && langModal) {
    closeBtn.onclick = () => langModal.classList.remove("open");
  }

  if (langModal) {
    langModal.onclick = (e) => {
      if (e.target === langModal) langModal.classList.remove("open");
    };
  }

  document.querySelectorAll(".lang-btn-item").forEach(itemBtn => {
    itemBtn.onclick = () => {
      const selectedLang = itemBtn.dataset.lang;
      setLanguage(selectedLang);
    };
  });
});

/* ================= 9. GENERAL EVENT LISTENERS ================= */
if ($("startTest")) $("startTest").onclick = startReflection;
if ($("nextBtn")) $("nextBtn").onclick = handleNext;
if ($("prevBtn")) $("prevBtn").onclick = handlePrev;

if ($("retakeBtn")) {
  $("retakeBtn").onclick = () => {
    $("result").classList.add("hidden");
    $("testIntro").classList.remove("hidden");
    $("test").scrollIntoView({ behavior: "smooth" });
  };
}

if ($("quitTest")) {
  $("quitTest").onclick = () => {
    $("quiz").classList.add("hidden");
    $("testIntro").classList.remove("hidden");
  };
}

// Copy Reflection Summary
if ($("copyResult")) {
  $("copyResult").onclick = async () => {
    const text = `Lost Leaf — My Inner Lens\n\nOutcome: ${$("resultTitle").textContent}\n${$("resultSummary").textContent}\n\nNote:\n${$("adviceTitle").textContent}\n${$("adviceText").textContent}`;

    try {
      await navigator.clipboard.writeText(text);
      const original = $("copyResult").textContent;
      $("copyResult").textContent = "Copied ✓";
      setTimeout(() => $("copyResult").textContent = original, 1600);
    } catch (err) {
      alert(text);
    }
  };
}

if ($("year")) $("year").textContent = new Date().getFullYear();