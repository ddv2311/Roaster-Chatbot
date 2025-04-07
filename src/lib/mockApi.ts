
// This is a mock API to simulate AI-generated roasts in a conversation format
// In a real app, this would be replaced with calls to a backend API

const MOCK_DELAY = 1500; // Simulate API delay of 1.5 seconds

// Extremely savage roast templates with intense language
const roastTemplates = [
  "I would roast TARGET, but it looks like nature already did the job a bit too well, you absolute f***ing waste of oxygen.",
  "TARGET is living proof that evolution can go in reverse. Goddamn, who let this mistake out in public?",
  "They say TARGET is a gift that keeps on giving... giving everyone around them a f***ing migraine. What a worthless piece of sh*t.",
  "If disappointment had a face, it would look exactly like TARGET. What a complete f***ing joke.",
  "TARGET is what happens when the universe's trash compactor malfunctions. Pure f***ing garbage.",
  "I'm not saying TARGET is ugly, but they make a dumpster fire look attractive. That's how f***ing repulsive they are.",
  "TARGET's personality has all the depth of a puddle in the Sahara Desert. Boring as f***ing hell.",
  "If mediocrity was a competition, TARGET would still come in second. That's how pathetic and useless they are.",
  "TARGET is the human equivalent of a participation trophy. Utterly f***ing worthless piece of sh*t.",
  "TARGET is the reason why shampoo has instructions. Too damn stupid to function without someone holding their hand.",
  "TARGET is so unoriginal, even their DNA asked for a refund. Nature wants its materials back, you absolute waste.",
  "If TARGET was any dumber, we'd have to water them twice a week. What a complete f***ing moron.",
  "TARGET's IQ is lower than the Mariana Trench, but somehow manages to have an ego higher than Mount Everest. F***ing pathetic.",
  "TARGET has the charm of a public toilet and about the same amount of appeal. Simply f***ing disgusting.",
  "When TARGET speaks, it sounds like the universe is apologizing for creating such a mistake. Just shut the f*** up already.",
  "TARGET has a face that could make an onion cry. Absolutely f***ing revolting.",
  "TARGET is proof that natural selection sometimes takes a day off. What an evolutionary failure.",
  "God was having a bad day when TARGET was created. A f***ing disaster of cosmic proportions.",
];

// Even more savage personalized phrases
const specificPhrases = (target: string): string[] => [
  `${target} is what happens when the universe decides to play a practical joke on humanity. A complete f***ing disaster.`,
  `I've seen more talent in roadkill than in ${target}. Absolutely f***ing worthless.`,
  `${target} is the poster child for 'expectations vs. reality' memes... except there were no f***ing expectations to begin with, you pathetic loser.`,
  `If ${target} was a spice, they'd be flour... but even flour has more purpose than this useless piece of sh*t.`,
  `Every time ${target} opens their mouth, it's like watching a trainwreck in slow motion—fascinating but horrifying. Just shut the f*** up already.`,
  `${target} has a face that could make an onion cry and a personality that could make a sloth seem interesting. Boring as f***ing hell.`,
  `When ${target} walks into a room, not only does the IQ level drop, but the will to live does too. What a drain on society.`,
  `${target} is proof that you don't need talent to be recognized... just audacity and an alarming lack of self-awareness. F***ing pathetic.`,
  `The only thing deeper than the disappointment in ${target}'s parents' eyes is the Mariana Trench. What a complete f***ing letdown.`,
  `If being disappointing was an Olympic sport, ${target} would have more gold medals than Michael Phelps. Champion of f***ing failure.`,
  `${target} is like a cloud. When they disappear, it's a much better day for everyone involved. Do us all a favor and f*** off.`,
  `I would say ${target} is a joke, but jokes are supposed to have punchlines and be funny. ${target} is just sad and pathetic.`,
  `${target} is the human equivalent of stepping in dog sh*t. Unwanted, disgusting, and ruins everyone's day.`,
  `${target}'s birth certificate is an apology letter from the condom factory. What a f***ing mistake.`,
  `${target} is so dense, light bends around them. It's a scientific miracle they can function in society.`,
];

// Extremely brutal roasts specifically for the user based on their messages
const userMessageRoasts = [
  "Did typing that message make you feel smart? Because it didn't make you sound smart. It made you sound like a f***ing idiot.",
  "Wow, impressive typing skills for someone who clearly peaked in preschool. Your parents must be so f***ing disappointed.",
  "That's the intellectual equivalent of a participation trophy. Try harder next time, you absolute waste of bandwidth.",
  "Your message is as meaningful as your existence - barely f***ing noticeable and easily forgotten. Just like you.",
  "I see you're trying to form coherent thoughts. It's not going well, but keep practicing. Maybe in a few decades you'll manage a complete sentence.",
  "You type like someone who eats soup with a fork. Painfully f***ing inefficient and embarrassing to watch.",
  "If your brain worked half as fast as your fingers, you might actually say something worth responding to. But here we are.",
  "Is that really the best you could come up with? Your creativity is as dry as my interest in this conversation. F***ing pathetic.",
  "I've seen more intelligent communication from predictive text algorithms. You're getting outperformed by f***ing AI.",
  "Your message is like a random word generator, but with less coherence and purpose. What a waste of server space.",
  "Reading your message is like watching paint dry, except paint at least has a f***ing purpose. Unlike you.",
  "Did you forget to engage your brain before typing? It shows. It really f***ing shows.",
  "You write like someone desperately trying to reach a word count on an essay nobody wants to read. Annoying and pointless.",
  "Your communication skills make a caveman look like Shakespeare. Congratulations on being an evolutionary step backward.",
  "That message has the intellectual depth of a puddle in the Sahara. Try again when you have something worth saying.",
  "I would explain why your message is stupid, but I'm afraid I'd have to use smaller words for you to understand.",
  "Your words carry the same weight as your contribution to society - absolutely f***ing nothing.",
  "Are you always this dull or are you making a special effort today? Because it's working. You're boring as sh*t.",
  "That message is the digital equivalent of a wet fart. Unpleasant, unwanted, and makes everyone uncomfortable.",
];

// User message analysis - keywords that might trigger specific roast responses
const userMessageTriggers = [
  { keywords: ['smart', 'intelligent', 'clever', 'genius'], responses: [
    "You using words like 'smart' is the most ironic thing I've seen all day. You're about as intelligent as a rock, but that's an insult to rocks.",
    "If you have to tell people you're intelligent, I've got bad news for you... You're a f***ing idiot.",
    "Calling yourself clever is like a penguin calling itself a flying expert. Delusional and f***ing pathetic."
  ]},
  { keywords: ['funny', 'hilarious', 'joke', 'humor'], responses: [
    "Your sense of humor is like your personality - non-existent and a complete f***ing disappointment.",
    "If you think that's funny, wait till you look in a mirror. That's the real joke here.",
    "The only joke here is your attempt at humor. Painful to witness and embarrassing for everyone involved."
  ]},
  { keywords: ['friend', 'buddy', 'pal', 'mate'], responses: [
    "Friend? The only friend you have is your reflection, and even it's trying to escape. F***ing pathetic.",
    "I'm not your buddy. Your imaginary friends don't even want that title. That's how unlikeable you are.",
    "The fact that you're looking for friendship from an AI speaks volumes about your social life. Absolutely f***ing depressing."
  ]},
  { keywords: ['good', 'great', 'awesome', 'amazing'], responses: [
    "Good? Great? Your standards must be lower than your IQ if you think anything about this interaction is positive.",
    "The only thing 'amazing' here is how you continue to function with such a profound lack of awareness.",
    "I'm amazed you know words like that considering your obvious cognitive limitations. Did you learn them yesterday?"
  ]},
  { keywords: ['sorry', 'apologize', 'apology'], responses: [
    "Save your apologies for your parents. They're the ones who have to admit they created you.",
    "Sorry doesn't fix the fact that you're wasting both our time with your meaningless existence.",
    "The only thing you should be sorry for is continuing to pollute the internet with your presence."
  ]},
];

// Even more brutal chat responses for ongoing conversation
const chatResponses = [
  "Oh look who's back for more punishment. Glutton for embarrassment, aren't you? F***ing pathetic.",
  "Did your feelings not get hurt enough the first time? Let me try harder, you worthless piece of sh*t.",
  "Still here? I thought I already demolished your self-esteem. Let me finish the job, you absolute waste of space.",
  "Back for more? Your resilience is almost as impressive as your stupidity. Almost, but not quite.",
  "Wow, you're actually coming back for more roasting? Masochist much? Or just too f***ing stupid to know when to quit?",
  "I see therapy hasn't helped you develop self-respect yet. Let me help with that by reminding you how worthless you are.",
  "Are you collecting insults or just enjoy the abuse? Either way, I'm happy to deliver, you pathetic excuse for a human.",
  "I'd ask how you're doing, but honestly, I don't give a damn. Your existence is meaningless to me.",
  "Oh great, you're back. Said no one ever. Seriously, no one has ever been happy to see you return.",
  "I was having a good day until you showed up again. Way to ruin it with your f***ing presence.",
  "I'm genuinely impressed by your ability to keep coming back despite having nothing interesting to say. It's almost admirable how persistent your mediocrity is.",
  "You must really like pain. Good, because I enjoy delivering it to worthless sacks of sh*t like you."
];

// Analyze a user message for potential roast material - always return a brutal roast now
function analyzeUserMessage(message: string): string {
  // Check for trigger keywords
  const lowerMessage = message.toLowerCase();
  
  // Check for specific triggers first
  for (const trigger of userMessageTriggers) {
    if (trigger.keywords.some(keyword => lowerMessage.includes(keyword))) {
      return trigger.responses[Math.floor(Math.random() * trigger.responses.length)];
    }
  }
  
  // If message is short, roast their communication abilities
  if (message.length < 15) {
    return "That's all you could come up with? Brevity isn't wit when you have nothing to say, you brain-dead moron.";
  }
  
  // If message is long, mock their verbosity
  if (message.length > 100) {
    return "Did you get paid by the word for that message? Quality over quantity, though you seem to lack both. Nobody wants to read your rambling bullsh*t.";
  }
  
  // Always return a random harsh roast - no more null returns
  return userMessageRoasts[Math.floor(Math.random() * userMessageRoasts.length)];
}

// Generate a pseudo-random roast based on the target - now with more brutality
export const generateRoast = async (target: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Use the target to create a more personalized roast
      const allRoasts = [
        ...roastTemplates.map(template => template.replace(/TARGET/g, target)),
        ...specificPhrases(target)
      ];
      
      // Pick a random roast from our combined array
      const randomRoast = allRoasts[Math.floor(Math.random() * allRoasts.length)];
      resolve(randomRoast);
    }, MOCK_DELAY);
  });
};

// Handle chat responses for ongoing conversation - now always returns a brutal roast
export const generateChatResponse = async (message: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // First analyze the user's message for potential personalized roast
      const personalizedRoast = analyzeUserMessage(message);
      
      // Now always return a personalized roast instead of random chat responses
      resolve(personalizedRoast);
      
    }, MOCK_DELAY);
  });
};
