export function generateAdjectiveNounUsername() {
  const adjectives = [
    "happy",
    "silly",
    "brave",
    "swift",
    "clever",
    "dark",
    "bright",
    "quiet",
    "loud",
    "mystic",
    "ancient",
    "golden",
    "silver",
    "curious",
  ];
  const nouns = [
    "cat",
    "dog",
    "bird",
    "tree",
    "river",
    "mountain",
    "star",
    "moon",
    "sun",
    "cloud",
    "ocean",
    "forest",
    "shadow",
    "spirit",
  ];

  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective}${randomNoun}${Math.floor(Math.random() * 1000)}`; // Add a number for uniqueness
}

export function generateShortMessage() {
  const messages = [
    "You've got this!",
    "Seize the day.",
    "Keep shining bright.",
    "Small steps, big dreams.",
    "Hello there!",
    "Stay curious.",
    "Make today amazing.",
  ];

  // Randomly select one message from the array
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}
