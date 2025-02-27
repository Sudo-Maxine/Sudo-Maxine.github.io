export class DataManager {
  static shuffel(){
    for (let i = data["wordClassification"]["Content"].length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data["wordClassification"]["Content"][i], data["wordClassification"]["Content"][j]] = [data["wordClassification"]["Content"][j], data["wordClassification"]["Content"][i]];
    };
  }

  static getMiniGameInstruction(type) {
    return data[type]["Instruction"];
  }

  static getMinigameContent(type,index){
  if(data[type]["Content"].lenght < index)
    {return voidData[NullMinigame][Content][0];}

    return data[type]["Content"][index];
  }
}

const voidData = {
  NullMinigame: {
    Instruction: "An error has ocurred",
    Content: [
      {
        Word: "Error",
        Text: "An error has ocurred",
        Answer: "error",
        dialogue: [
          "Hey, what’s up? An error has ocurred",
          "Not much, An error has ocurred"
        ],
        BadAnswers: [
          "A type of An error has ocurred",
          "A traditional error has ocurred",
          "A type of error has ocurred"
        ]
      }
    ]
  }
}

let data = {
  wordClassification: {
      Instruction: "Read the sentence and classify the word into a noun, verb, adjective, adverb.",
      Content: [
          {
              Word: "Culture",
              Text: "The festival showcased the rich culture of the indigenous community.",
              Answer: "Noun"
          },
          {
              Word: "Ethnicity",
              Text: "Her ethnicity is an important part of her identity.",
              Answer: "Noun"
          },
          {
              Word: "Diversity",
              Text: "The school promotes diversity by welcoming students from all backgrounds.",
              Answer: "Noun"
          },
          {
              Word: "Gender",
              Text: "Gender equality is a fundamental human right.",
              Answer: "Noun"
          },
          {
              Word: "Identity",
              Text: "Language plays a key role in shaping cultural identity.",
              Answer: "Noun"
          },
          {
              Word: "Community",
              Text: "The local community came together to support the fundraiser.",
              Answer: "Noun"
          },
          {
              Word: "Heritage",
              Text: "She is proud of her African heritage and often shares stories about it.",
              Answer: "Noun"
          },
          {
              Word: "Celebrate",
              Text: "We celebrate cultural diversity  during Culture Day Festivities.",
              Answer: "Verb"
          },
          {
              Word: "Respect",
              Text: "It’s important to respect people’s beliefs, even if they’re different from yours.",
              Answer: "Verb"
          },
          {
              Word: "Belong",
              Text: "Everyone wants to feel like they belong in their community.",
              Answer: "Verb"
          },
          {
              Word: "Understand",
              Text: "We need to understand each other’s perspectives to build empathy.",
              Answer: "Verb"
          },
          {
              Word: "Communicate",
              Text: "Learning a new language helps people communicate across cultures.",
              Answer: "Verb"
          },
          {
              Word: "Accept",
              Text: "We should accept people for who they are, not judge them based on stereotypes.",
              Answer: "Verb"
          },
          {
              Word: "Reject",
              Text: "The school has a zero-tolerance policy and will reject any form of bullying.",
              Answer: "Verb"
          },
          {
              Word: "Diverse",
              Text: "The city is known for its diverse population and vibrant neighborhoods.",
              Answer: "Adjective"
          },
          {
              Word: "Cultural",
              Text: "The museum offers many cultural exhibits that highlight local traditions.",
              Answer: "Adjective"
          },
          {
              Word: "Inclusive",
              Text: "An inclusive classroom ensures that every student feels valued.",
              Answer: "Adjective"
          },
          {
              Word: "Traditional",
              Text: "She wore a traditional dress to the wedding ceremony.",
              Answer: "Adjective"
          },
          {
              Word: "Unique",
              Text: "Every culture has its own unique customs and practices.",
              Answer: "Adjective"
          },
          {
              Word: "Tolerant",
              Text: "A tolerant society respects and accepts differences among its people.",
              Answer: "Adjective"
          },
          {
              Word: "Biased",
              Text: "The article was criticized for being biased and not presenting all sides of the story.",
              Answer: "Adjective"
          },
          {
              Word: "Respectfully",
              Text: "He listened respectfully to his friend’s opinion, even though he disagreed.",
              Answer: "Adverbs"
          },
          {
              Word: "Culturally",
              Text: "The event was culturally significant for the local community.",
              Answer: "Adverbs"
          },
          {
              Word: "Inclusively",
              Text: "The school works inclusively to ensure that all students feel welcome.",
              Answer: "Adverbs"
          },
          {
              Word: "Traditionally",
              Text: "Traditionally, the holiday is celebrated with a large family dinner.",
              Answer: "Adverbs"
          },
          {
              Word: "Sensitively",
              Text: "The teacher handled the topic of cultural differences sensitively.",
              Answer: "Adverbs"
          },
          {
              Word: "Fairly",
              Text: "Everyone should be treated fairly, regardless of their background.",
              Answer: "Adverbs"
          },
          {
              Word: "Equally",
              Text: "All students are valued equally in this classroom.",
              Answer: "Adverbs"
          }
      ]
  },
  formalityIdentification: {
      Instruction: "Read the following dialogue. Then, choose an answer with the correct level of formality used",
      Content: [
          {
              dialogue: [
                  "Hey, what’s up? How’s it going?",
                  "Not much, just chilling. How about you?"
              ],
              Answer: "Informal"
          },
          {
              dialogue: [
                  "In my culture, it is customary to bow when greeting someone as a sign of respect.",
                  "That is fascinating. Could you tell me more about other cultural practices?"
              ],
              Answer: "Formal"
          },
          {
              dialogue: [
                  "People say Costa Ricans just surf all day. Is that true?",
                  "Actually, that is a common misconception. Costa Ricans are involved in diverse industries, not just tourism."
              ],
              Answer: "Formal"
          },
          {
              dialogue: [
                  "Dude, that’s so cool! I love learning about different cultures.",
                  "Yeah, it’s awesome! We should hang out and talk more about it."
              ],
              Answer: "informal"
          },
          {
              dialogue: [
                  "Why should we care about diversity?",
                  "Diversity is essential because it allows us to gain new insights and fosters mutual understanding among people from various backgrounds."
              ],
              Answer: "Formal"
          },
          {
              dialogue: [
                  "Hey, can you help me with this real quick?",
                  "Sure thing! What do you need help with?"
              ],
              Answer: "Informal"
          },
          {
              dialogue: [
                  "What is the Festival of Lights in Costa Rica about?",
                  "The Festival of Lights is a vibrant celebration featuring parades, lights, and cultural performances to commemorate the holiday season."
              ],
              Answer: "Formal"
          },
          {
              dialogue: [
                  "I think it’s awesome that we have so many different cultures here!",
                  "Totally! It makes life way more interesting, don’t you think?"
              ],
              Answer: "Informal"
          },
          {
              dialogue: [
                  "What are cultural norms?",
                  "Cultural norms are the shared expectations and rules that guide behavior within a society."
              ],
              Answer: "Formal"
          },
          {
              dialogue: [
                  "Wanna hang out later and grab some food?",
                  "Sounds great! Let’s meet at 7."
              ],
              Answer: "Informal"
          }
      ]
  },
  definitionSelection: {
      Instruction: "Read the following dialogues. Then, select an appropriate definition for the highlighted words.",
      Content: [
          {
              dialogue: [
                  "In Japan, people take off their shoes before entering a house. It’s considered polite.",
                  "Yes, that’s a cultural norm there. It’s about keeping the home clean and respecting the space."
              ],
              BadAnswers: [
                  "A type of food people eat",
                  "A traditional dance or performance",
                  "A type of clothing people wear"
              ],
              Answer: "A shared rule or expectation in a society"
          },
          {
              dialogue: [
                  "Every year, my family celebrates Diwali by lighting lamps and sharing sweets with our neighbors.",
                  "That sounds like a beautiful tradition! It must make you feel connected to your cultural identity."
              ],
              BadAnswers: [
                  "A type of food people cook",
                  "A type of dance people perform",
                  "A shared rule or expectation in a society"
              ],
              Answer: "A custom passed through generations"
          }
      ]
  }
}