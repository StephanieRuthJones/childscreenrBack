
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('testItems').del()
    .then(function () {
      // Inserts seed entries
      return knex('testItems').insert([
        {
          "id": 1,
          "category": "receptive",
          "test_item": "Who do you live with?",
          "examiner_instructions": "I'm going to ask you some questions. Do your best to answer them.",
          "correct_answer": "Answers 'who' question",
          "correct_answer_value": 1,
          "incorrect_answer": "Answers a different wh-question type",
          "incorrect_answer_value": 0
        },
        {
          "id": 2,
          "category": "receptive",
          "test_item": "What do you do with a pencil?",
          "examiner_instructions": "I'm going to ask you some questions. Do your best to answer them.",
          "correct_answer": "Draw or write",
          "correct_answer_value": 1,
          "incorrect_answer": "Answers a different wh-question type or does not describe function of a pencil",
          "incorrect_answer_value": 0
        },
        {
          "id": 3,
          "category": "receptive",
          "test_item": "When do you go to a doctor?",
          "examiner_instructions": "I'm going to ask you some questions. Do your best to answer them.",

          "correct_answer": "When sick or other reason to go to the doctor",
          "correct_answer_value": 1,
          "incorrect_answer": "Answers a different wh-question type or does not give accurate reason to go to the doctor",
          "incorrect_answer_value": 0
        },
        {
          "id": 4,
          "category": "receptive",
          "test_item": "Where do you keep your toys?",
          "examiner_instructions": "I'm going to ask you some questions. Do your best to answer them.",
          "correct_answer": "Answers 'where' question",
          "correct_answer_value": 1,
          "incorrect_answer": "Answers a different wh-question type",
          "incorrect_answer_value": 0
        },
        {
          "id": 5,
          "category": "receptive",
          "test_item": "Why do you take a bath?",
          "examiner_instructions": "I'm going to ask you some questions. Do your best to answer them.",
          "correct_answer": "Answers 'why' question and accurately provides a reason to take a bath",
          "correct_answer_value": 1,
          "incorrect_answer": "Answers a different wh-question type or does not provide reason to take a bath",
          "incorrect_answer_value": 0
        },
        {
          "id": 6,
          "category": "receptive",
          "test_item": "Cup, table, light",
          "examiner_instructions": "I’m going to say some words and I want you to repeat them after me exactly how I say them. Let’s try one: “Black cat”. If correct: “Great job! You said the words just like I did! Let’s try another…” If incorrect: “Nice try, but you need to say the words exactly as I said them. Let’s try again, ‘Black cat’”.",
          "correct_answer": "Repeats all words without omissions or grammatical errors",
          "correct_answer_value": 1,
          "incorrect_answer": "Makes ommissions or errors on grammar or syntax",
          "incorrect_answer_value": 0
        },
        {
          "id": 7,
          "category": "receptive",
          "test_item": "Cows are big",
          "examiner_instructions": "I’m going to say some words and I want you to repeat them after me exactly how I say them. Let’s try one: “Black cat”. If correct: “Great job! You said the words just like I did! Let’s try another…” If incorrect: “Nice try, but you need to say the words exactly as I said them. Let’s try again, ‘Black cat’”.",

          "correct_answer": "Repeats all words without omissions or grammatical errors",
          "correct_answer_value": 1,
          "incorrect_answer": "Makes ommissions or errors on grammar or syntax",
          "incorrect_answer_value": 0
        },
        {
          "id": 8,
          "category": "receptive",
          "test_item": "Cats want to be loved",
          "examiner_instructions": "I’m going to say some words and I want you to repeat them after me exactly how I say them. Let’s try one: “Black cat”. If correct: “Great job! You said the words just like I did! Let’s try another…” If incorrect: “Nice try, but you need to say the words exactly as I said them. Let’s try again, ‘Black cat’”.",
          "correct_answer": "Repeats all words without omissions or grammatical errors",
          "correct_answer_value": 1,
          "incorrect_answer": "Makes ommissions or errors on grammar or syntax",
          "incorrect_answer_value": 0
        },
        {
          "id": 9,
          "category": "receptive",
          "test_item": "The girl ate the cookies",
          "examiner_instructions": "I’m going to say some words and I want you to repeat them after me exactly how I say them. Let’s try one: “Black cat”. If correct: “Great job! You said the words just like I did! Let’s try another…” If incorrect: “Nice try, but you need to say the words exactly as I said them. Let’s try again, ‘Black cat’”.",
          "correct_answer": "Repeats all words without omissions or grammatical errors",
          "correct_answer_value": 1,
          "incorrect_answer": "Makes ommissions or errors on grammar or syntax",
          "incorrect_answer_value": 0
        },
        {
          "id": 10,
          "category": "receptive",
          "test_item": "Stand up and turn around.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them:",
          "correct_answer": "Follows directions.",
          "correct_answer_value": 1,
          "correct_answer": "Repeats all words without omissions or grammatical errors",
          "correct_answer_value": 1,
          "incorrect_answer": "Follows directions out of order, follows less than all directions given, performs action not included in directions.",
          "incorrect_answer_value": 0,

        },
        {
          "id": 11,
          "category": "receptive",
          "test_item": "Put the block in the cup.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them:",
          "correct_answer": "Repeats all words without omissions or grammatical errors",
          "correct_answer_value": 1,
          "incorrect_answer": "Follows directions out of order, follows less than all directions given, performs action not included in directions.",
          "incorrect_answer_value": 0,

        },
        {
          "id": 12,
          "category": "receptive",
          "test_item": "Put the block on your head.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them:",
          "correct_answer": "Repeats all words without omissions or grammatical errors",
          "correct_answer_value": 1,
          "incorrect_answer": "Follows directions out of order, follows less than all directions given, performs action not included in directions.",
          "incorrect_answer_value": 0,

        },
        {
          "id": 13,
          "category": "receptive",
          "test_item": "Put the block under the chair.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them:",
          "correct_answer": "Repeats all words without omissions or grammatical errors",
          "correct_answer_value": 1,
          "incorrect_answer": "Follows directions out of order, follows less than all directions given, performs action not included in directions.",
          "incorrect_answer_value": 0,

        },
        {
          "id": 14,
          "category": "receptive",
          "test_item": "Put the block next to the cup.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them (using block and cup as props):",
          "correct_answer": "Repeats all words without omissions or grammatical errors",
          "correct_answer_value": 1,
          "incorrect_answer": "Follows directions out of order, follows less than all directions given, performs action not included in directions.",
          "incorrect_answer_value": 0,

        },
        {
          "id": 15,
          "category": "receptive",
          "test_item": "Point to the color red.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them (using block and cup as props):",
          "correct_answer": "Does not point to the labeled color",
          "correct_answer_value": 1,
          "incorrect_answer": "Points to labeled color",
          "incorrect_answer_value": 0,

        },
        {
          "id": 16,
          "category": "receptive",
          "test_item": "Point to the color blue.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them (using stimuli packet):",

          "correct_answer": "Does not point to the labeled color",
          "correct_answer_value": 1,
          "incorrect_answer": "Points to labeled color",
          "incorrect_answer_value": 0,

        },
        {
          "id": 17,
          "category": "receptive",
          "test_item": "Point to the color orange.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them (using stimuli packet):",
          "correct_answer": "Does not point to the labeled color",
          "correct_answer_value": 1,
          "incorrect_answer": "Points to labeled color",
          "incorrect_answer_value": 0,

        },
        {
          "id": 18,
          "category": "receptive",
          "test_item": "Point to the color green.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them (using stimuli packet):",
          "correct_answer": "Does not point to the labeled color",
          "correct_answer_value": 1,
          "incorrect_answer": "Points to labeled color",
          "incorrect_answer_value": 0,

        },
        {
          "id": 19,
          "category": "receptive",
          "test_item": "Point to the color black.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them (using stimuli packet):",
          "correct_answer": "Does not point to the labeled color",
          "correct_answer_value": 1,
          "incorrect_answer": "Points to labeled color",
          "incorrect_answer_value": 0,

        },
        {
          "id": 20,
          "category": "receptive",
          "test_item": "Point to all the animals",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them (using stimuli packet):",

          "correct_answer": "Does not point to all items in labeled category",
          "correct_answer_value": 1,
          "incorrect_answer": "Points to all items in labeled category",
          "incorrect_answer_value": 0,
        },
        {
          "id": 21,
          "category": "receptive",
          "test_item": "Point to all the foods.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them (using stimuli packet):",

          "correct_answer": "Does not point to all items in labeled category",
          "correct_answer_value": 1,
          "incorrect_answer": "Points to all items in labeled category",
          "incorrect_answer_value": 0
        },
        {
          "id": 22,
          "category": "expressive",
          "test_item": "What is this (point to car)?",
          "examiner_instructions": "Use stimuli packet.",
          "correct_answer": "Car or vehicle type.",
          "correct_answer_value": 1,
          "incorrect_answer": "Erroneous label",
          "incorrect_answer_value": 0,
        },
        {
          "id": 23,
          "category": "expressive",
          "test_item": "What is this (point to bird)?",
          "examiner_instructions": "Use stimuli packet.",
          "correct_answer": "Bird or name of species of bird.",
          "correct_answer_value": 1,
          "incorrect_answer": "Erroneous label",
          "incorrect_answer_value": 0
        },
        {
          "id": 24,
          "category": "expressive",
          "test_item": "What is this (point to baby)?",
          "examiner_instructions": "Use stimuli packet.",
          "correct_answer": "Baby or synonym",
          "correct_answer_value": 1,
          "incorrect_answer": "Erroneous label",
          "incorrect_answer_value": 0

        },
        {
          "id": 25,
          "category": "expressive",
          "test_item": "Tell me about a dog.",
          "examiner_instructions": "Null",

          "correct_answer": "Includes at least 3 descriptors (category, action, parts, looks, texture, etc.) - e.g., It’s an animal. It barks. It’s furry. It wags its tail...",
          "correct_answer_value": 1,
          "incorrect_answer": "Provides less than 3 descriptors or provides inaccurate description",
          "incorrect_answer_value": 0
        },
        {
          "id": 26,
          "category": "expressive",
          "test_item": "Tell me about an Apple.",
          "examiner_instructions": "Null",
          "correct_answer": "Includes at least 3 descriptors (category, action, parts, looks, texture, etc.) - e.g., It’s a fruit. It’s red. You eat it…",
          "correct_answer_value": 1,
          "incorrect_answer": "Provides less than 3 descriptors or provides inaccurate description",
          "incorrect_answer_value": 0
        },
        {
          "id": 27,
          "category": "expressive",
          "test_item": "An elephant is big, a mouse is …",
          "examiner_instructions": "I’m going to say part of a sentence and I want you to finish it for me. Let’s try one: “Fire is hot, but ice is…” If correct: “Great job! You finished my sentence. Let’s do some more.” If incorrect: “Nice try. I wanted you to say ‘cold,’ fire is hot, but ice is cold. Let’s try it again.” (Repeat example.)",
          "correct_answer": "Small or synonym",
          "correct_answer_value": 1,
          "incorrect_answer": "Not small or synonym",
          "incorrect_answer_value": 0
        },
        {
          "id": 28,
          "category": "expressive",
          "test_item": "A race car is fast, a turtle is…",
          "examiner_instructions": "I’m going to say part of a sentence and I want you to finish it for me. Let’s try one: “Fire is hot, but ice is…” If correct: “Great job! You finished my sentence. Let’s do some more.” If incorrect: “Nice try. I wanted you to say ‘cold,’ fire is hot, but ice is cold. Let’s try it again.” (Repeat example.)",
          "correct_answer": "Slow or synonym",
          "correct_answer_value": 1,
          "incorrect_answer": "Not slow or synonym",
          "incorrect_answer_value": 0
        },
        {
          "id": 29,
          "category": "expressive",
          "test_item": "Grass is short, trees are…",
          "examiner_instructions": "I’m going to say part of a sentence and I want you to finish it for me. Let’s try one: “Fire is hot, but ice is…” If correct: “Great job! You finished my sentence. Let’s do some more.” If incorrect: “Nice try. I wanted you to say ‘cold,’ fire is hot, but ice is cold. Let’s try it again.” (Repeat example.)",
          "correct_answer": "Tall or synonym",
          "correct_answer_value": 1,
          "incorrect_answer": "Not tall or synonym",
          "incorrect_answer_value": 0
        },
        {
          "id": 30,
          "category": "expressive",
          "test_item": "Story sequence includes beginning",
          "examiner_instructions": "Tell me a story about these pictures (use stimuli packet)",
          "correct_answer": "Story sequence includes beginning",
          "correct_answer_value": 1,
          "incorrect_answer": "Story sequence does not include beginning",
          "incorrect_answer_value": 0
        },
        {
          "id": 31,
          "category": "expressive",
          "test_item": "Story sequence includes middle",
          "examiner_instructions": "Tell me a story about these pictures (use stimuli packet)",
          "correct_answer": "Story sequence includes middle",
          "correct_answer_value": 1,
          "incorrect_answer": "Story sequence does not include middle",
          "incorrect_answer_value": 0
        },
        {
          "id": 32,
          "category": "expressive",
          "test_item": "Story sequence includes end",
          "examiner_instructions": "Tell me a story about these pictures (use stimuli packet)",
          "correct_answer": "Story sequence includes end",
          "correct_answer_value": 1,
          "incorrect_answer": "Story sequence does not include end",
          "incorrect_answer_value": 0
        },
        {
          "id": 33,
          "category": "expressive",
          "test_item": "Uses age-appropriate grammar",
          "examiner_instructions": "Tell me a story about these pictures (use stimuli packet)",
          "correct_answer": "Uses age-appropriate grammar",
          "correct_answer_value": 1,
          "incorrect_answer": "Does not use age-appropriate grammar",
          "incorrect_answer_value": 0
        },
        {
          "id": 34,
          "category": "social",
          "test_item": "happy",
          "examiner_instructions": "I am going to show you some pictures. I want you to tell me how each person feels.",
          "correct_answer": "correctly identifies pictured emotion (synonyms allowed)",
          "correct_answer_value": 1,
          "incorrect_answer": "Inaccurately identifies pictured emotion",
          "incorrect_answer_value": 0
        },
        {
          "id": 35,
          "category": "social",
          "test_item": "sad",
          "examiner_instructions": "I am going to show you some pictures. I want you to tell me how each person feels.",
          "correct_answer": "Correctly identifies pictured emotion (synonyms allowed)",
          "correct_answer_value": 1,
          "incorrect_answer": "Inaccurately identifies pictured emotion",
          "incorrect_answer_value": 0
        },
        {
          "id": 36,
          "category": "social",
          "test_item": "angry",
          "examiner_instructions": "I am going to show you some pictures. I want you to tell me how each person feels.",
          "correct_answer": "Correctly identifies pictured emotion (synonyms allowed)",
          "correct_answer_value": 1,
          "incorrect_answer": "Inaccurately identifies pictured emotion",
          "incorrect_answer_value": 0
        },
        {
          "id": 37,
          "category": "social",
          "test_item": "scared",
          "examiner_instructions": "I am going to show you some pictures. I want you to tell me how each person feels.",
          "correct_answer": "Correctly identifies pictured emotion (synonyms allowed)",
          "correct_answer_value": 1,
          "incorrect_answer": "Inaccurately identifies pictured emotion",
          "incorrect_answer_value": 0,
        },
        {
          "id": 38,
          "category": "social",
          "test_item": "tired",
          "examiner_instructions": "I am going to show you some pictures. I want you to tell me how each person feels.",
          "correct_answer": "Correctly identifies pictured emotion (synonyms allowed)",
          "correct_answer_value": 1,
          "incorrect_answer": "Inaccurately identifies pictured emotion",
          "incorrect_answer_value": 0,
        },
        {
          "id": 39,
          "category": "social",
          "test_item": "Makes appropriate eye contact",
          "examiner_instructions": "Observe social-pragmatic behavior in conversation",
          "correct_answer": "Behavior present",
          "correct_answer_value": 1,
          "incorrect_answer": "Behavior not present",
          "incorrect_answer_value": 0
        },
        {
          "id": 40,
          "category": "social",
          "test_item": "Takes turns in conversation",
          "examiner_instructions": "Observe social-pragmatic behavior in conversation",
          "correct_answer": "Behavior present",
          "correct_answer_value": 1,
          "incorrect_answer": "Behavior not present",
          "incorrect_answer_value": 0
        },
        {
          "id": 41,
          "category": "social",
          "test_item": "Asks questions",
          "examiner_instructions": "Observe social-pragmatic behavior in conversation",
          "correct_answer": "Behavior present",
          "correct_answer_value": 1,
          "incorrect_answer": "Behavior not present",
          "incorrect_answer_value": 0
        },
        {
          "id": 42,
          "category": "social",
          "test_item": "Responds appropriately to questions",
          "examiner_instructions": "Observe social-pragmatic behavior in conversation",
          "correct_answer": "Behavior present",
          "correct_answer_value": 1,
          "incorrect_answer": "Behavior not present",
          "incorrect_answer_value": 0
        },
        {
          "id": 43,
          "category": "social",
          "test_item": "Demonstrates appropriate body positioning",
          "examiner_instructions": "Observe social-pragmatic behavior in conversation",
          "correct_answer": "Behavior present",
          "correct_answer_value": 1,
          "incorrect_answer": "Behavior not present",
          "incorrect_answer_value": 0
        },
        {
          "id": 44,
          "category": "social",
          "test_item": "Demonstrates functional play with toys",
          "examiner_instructions": "Observe social-pragmatic behavior in conversation",
          "correct_answer": "Behavior present",
          "correct_answer_value": 1,
          "incorrect_answer": "Behavior not present",
          "incorrect_answer_value": 0
        }
      ]
      );
    });
};
