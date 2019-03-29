
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
          "correct_answer": "Accurate family or caregivers",
          "incorrect_answer": "Answering not a who question."
        },
        {
          "id": 2,
          "category": "receptive",
          "test_item": "What do you do with a pencil?",
          "examiner_instructions": "I'm going to ask you some questions. Do your best to answer them.",
          "correct_answer": "Draw or write with it.",
          "incorrect_answer": "Not describing a function of a pencil"
        },
        {
          "id": 3,
          "category": "receptive",
          "test_item": "When do you go to a doctor?",
          "examiner_instructions": "I'm going to ask you some questions. Do your best to answer them.",
          "correct_answer": "When I am sick or don't feel well",
          "incorrect_answer": "Answering not a when question."
        },
        {
          "id": 4,
          "category": "receptive",
          "test_item": "Where do you keep your toys?",
          "examiner_instructions": "I'm going to ask you some questions. Do your best to answer them.",
          "correct_answer": "A closet, toy chest,etc.",
          "incorrect_answer": "Answering now a where question."
        },
        {
          "id": 5,
          "category": "receptive",
          "test_item": "Why do you take a bath?",
          "examiner_instructions": "I'm going to ask you some questions. Do your best to answer them.",
          "correct_answer": "To clean myself.",
          "incorrect_answer": "Not a why answer or inaccurate response."
        },
        {
          "id": 6,
          "category": "receptive",
          "test_item": "Cup, table, light",
          "examiner_instructions": "I’m going to say some words and I want you to repeat them after me exactly how I say them. Let’s try one: “Black cat”. If correct: “Great job! You said the words just like I did! Let’s try another…” If incorrect: “Nice try, but you need to say the words exactly as I said them. Let’s try again, ‘Black cat’”.",
          "correct_answer": "Repeat all three words exactly.",
          "incorrect_answer": "Makes ommissions or errors on grammar or syntax"
        },
        {
          "id": 7,
          "category": "receptive",
          "test_item": "Cows are big",
          "examiner_instructions": "I’m going to say some words and I want you to repeat them after me exactly how I say them. Let’s try one: “Black cat”. If correct: “Great job! You said the words just like I did! Let’s try another…” If incorrect: “Nice try, but you need to say the words exactly as I said them. Let’s try again, ‘Black cat’”.",
          "correct_answer": "Repeat all three words exactly.",
          "incorrect_answer": "Makes ommissions or errors on grammar or syntax"
        },
        {
          "id": 8,
          "category": "receptive",
          "test_item": "Cats want to be loved",
          "examiner_instructions": "I’m going to say some words and I want you to repeat them after me exactly how I say them. Let’s try one: “Black cat”. If correct: “Great job! You said the words just like I did! Let’s try another…” If incorrect: “Nice try, but you need to say the words exactly as I said them. Let’s try again, ‘Black cat’”.",
          "correct_answer": "Repeat all five words exactly.",
          "incorrect_answer": "Makes ommissions or errors on grammar or syntax"
        },
        {
          "id": 9,
          "category": "receptive",
          "test_item": "The girl ate the cookies",
          "examiner_instructions": "I’m going to say some words and I want you to repeat them after me exactly how I say them. Let’s try one: “Black cat”. If correct: “Great job! You said the words just like I did! Let’s try another…” If incorrect: “Nice try, but you need to say the words exactly as I said them. Let’s try again, ‘Black cat’”.",
          "correct_answer": "Repeat all five words exactly.",
          "incorrect_answer": "Makes ommissions or errors on grammar or syntax"
        },
        {
          "id": 10,
          "category": "receptive",
          "test_item": "Stand up and turn around.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them:",
          "correct_answer": "Follows directions.",
          "incorrect_answer": "Follows directions out of order, follows less than all directions given, performs action not included in directions."
        },
        {
          "id": 11,
          "category": "receptive",
          "test_item": "Put the block in the cup.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them:",
          "correct_answer": "Follows directions.",
          "incorrect_answer": "Follows directions out of order, follows less than all directions given, performs action not included in directions."
        },
        {
          "id": 12,
          "category": "receptive",
          "test_item": "Put the block on your head.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them:",
          "correct_answer": "Follows directions.",
          "incorrect_answer": "Follows directions out of order, follows less than all directions given, performs action not included in directions."
        },
        {
          "id": 13,
          "category": "receptive",
          "test_item": "Put the block under the chair.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them:",
          "correct_answer": "Follows directions.",
          "incorrect_answer": "Follows directions out of order, follows less than all directions given, performs action not included in directions."
        },
        {
          "id": 14,
          "category": "receptive",
          "test_item": "Put the block next to the cup.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them (using block and cup as props):",
          "correct_answer": "Follows directions.",
          "incorrect_answer": "Follows directions out of order, follows less than all directions given, performs action not included in directions."
        },
        {
          "id": 15,
          "category": "receptive",
          "test_item": "Point to the color red.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them (using block and cup as props):",
          "correct_answer": "Follows directions.",
          "incorrect_answer": "Follows directions out of order, follows less than all directions given, performs action not included in directions."
        },
        {
          "id": 16,
          "category": "receptive",
          "test_item": "Point to the color blue.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them (using stimuli packet):",
          "correct_answer": "Follows directions.",
          "incorrect_answer": "Follows directions out of order, follows less than all directions given, performs action not included in directions."
        },
        {
          "id": 17,
          "category": "receptive",
          "test_item": "Point to the color orange.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them (using stimuli packet):",
          "correct_answer": "Follows directions.",
          "incorrect_answer": "Follows directions out of order, follows less than all directions given, performs action not included in directions."
        },
        {
          "id": 18,
          "category": "receptive",
          "test_item": "Point to the color green.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them (using stimuli packet):",
          "correct_answer": "Follows directions.",
          "incorrect_answer": "Follows directions out of order, follows less than all directions given, performs action not included in directions."
        },
        {
          "id": 19,
          "category": "receptive",
          "test_item": "Point to the color black.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them (using stimuli packet):",
          "correct_answer": "Follows directions.",
          "incorrect_answer": "Follows directions out of order, follows less than all directions given, performs action not included in directions."
        },
        {
          "id": 20,
          "category": "receptive",
          "test_item": "Point to all the animals",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them (using stimuli packet):",
          "correct_answer": "Points to all animals.",
          "incorrect_answer": "Does not point to all items in category, misses items in category, points to items outside of category"
        },
        {
          "id": 21,
          "category": "receptive",
          "test_item": "Point to all the foods.",
          "examiner_instructions": "Listen carefully. I’m going to give you some directions and I want you to follow them (using stimuli packet):",
          "correct_answer": "Points to all animals.",
          "incorrect_answer": "Does not point to all items in category, misses items in category, points to items outside of category"
        },
        {
          "id": 22,
          "category": "expressive",
          "test_item": "What is this (point to car)?",
          "examiner_instructions": "Use stimuli packet.",
          "correct_answer": "Answer: Car or vehicle type.",
          "incorrect_answer": "Erroneous label"
        },
        {
          "id": 23,
          "category": "expressive",
          "test_item": "What is this (point to bird)?",
          "examiner_instructions": "Use stimuli packet.",
          "correct_answer": "Answer: Bird or name of species of bird.",
          "incorrect_answer": "Erroneous label"
        },
        {
          "id": 24,
          "category": "expressive",
          "test_item": "What is this (point to baby)?",
          "examiner_instructions": "Use stimuli packet.",
          "correct_answer": "Answer: Baby, infant or synonym.",
          "incorrect_answer": "Erroneous label"
        },
        {
          "id": 25,
          "category": "expressive",
          "test_item": "Tell me about a dog.",
          "examiner_instructions": "Null",
          "correct_answer": "Includes at least 3 descriptors (category, action, parts, looks, texture, etc.) - e.g., “It’s an animal. It barks. It’s furry. It wags its tail.”",
          "incorrect_answer": "Provides less than 3 descriptors or provides inaccurate description"
        },
        {
          "id": 26,
          "category": "expressive",
          "test_item": "Tell me about an Apple.",
          "examiner_instructions": "Null",
          "correct_answer": "Includes at least 3 descriptors - e.g., “It’s a fruit. It’s red. You eat it…”",
          "incorrect_answer": "Provides less than 3 descriptors or provides inaccurate description"
        },
        {
          "id": 27,
          "category": "expressive",
          "test_item": "An elephant is big, a mouse is …",
          "examiner_instructions": "I’m going to say part of a sentence and I want you to finish it for me. Let’s try one: “Fire is hot, but ice is…” If correct: “Great job! You finished my sentence. Let’s do some more.” If incorrect: “Nice try. I wanted you to say ‘cold,’ fire is hot, but ice is cold. Let’s try it again.” (Repeat example.)",
          "correct_answer": "small or little",
          "incorrect_answer": "provides inaccurate answer"
        },
        {
          "id": 28,
          "category": "expressive",
          "test_item": "A race car is fast, a turtle is…",
          "examiner_instructions": "I’m going to say part of a sentence and I want you to finish it for me. Let’s try one: “Fire is hot, but ice is…” If correct: “Great job! You finished my sentence. Let’s do some more.” If incorrect: “Nice try. I wanted you to say ‘cold,’ fire is hot, but ice is cold. Let’s try it again.” (Repeat example.)",
          "correct_answer": "slow",
          "incorrect_answer": "provides inaccurate answer"
        },
        {
          "id": 29,
          "category": "expressive",
          "test_item": "Grass is short, trees are…",
          "examiner_instructions": "I’m going to say part of a sentence and I want you to finish it for me. Let’s try one: “Fire is hot, but ice is…” If correct: “Great job! You finished my sentence. Let’s do some more.” If incorrect: “Nice try. I wanted you to say ‘cold,’ fire is hot, but ice is cold. Let’s try it again.” (Repeat example.)",
          "correct_answer": "tall",
          "incorrect_answer": "provides inaccurate answer"
        },
        {
          "id": 30,
          "category": "expressive",
          "test_item": "Story sequence includes beginning",
          "examiner_instructions": "Tell me a story about these pictures (use stimuli packet)",
          "correct_answer": "Story sequence includes beginning",
          "incorrect_answer": "Story sequence does not include beginning"
        },
        {
          "id": 31,
          "category": "expressive",
          "test_item": "Story sequence includes middle",
          "examiner_instructions": "Tell me a story about these pictures (use stimuli packet)",
          "correct_answer": "Story sequence includes middle",
          "incorrect_answer": "Story sequence does not include middle"
        },
        {
          "id": 32,
          "category": "expressive",
          "test_item": "Story sequence includes end",
          "examiner_instructions": "Tell me a story about these pictures (use stimuli packet)",
          "correct_answer": "Story sequence includes end",
          "incorrect_answer": "Story sequence does not include end"
        },
        {
          "id": 33,
          "category": "expressive",
          "test_item": "Uses age-appropriate grammar",
          "examiner_instructions": "Tell me a story about these pictures (use stimuli packet)",
          "correct_answer": "Uses age-appropriate grammar",
          "incorrect_answer": "Does not use age-appropriate grammar"
        },
        {
          "id": 34,
          "category": "social",
          "test_item": "happy",
          "examiner_instructions": "I am going to show you some pictures. I want you to tell me how each person feels.",
          "correct_answer": "correctly identifies pictured emotion (synonyms allowed)",
          "incorrect_answer": "inaccurately identifies pictured emotion"
        },
        {
          "id": 35,
          "category": "social",
          "test_item": "sad",
          "examiner_instructions": "I am going to show you some pictures. I want you to tell me how each person feels.",
          "correct_answer": "correctly identifies pictured emotion (synonyms allowed)",
          "incorrect_answer": "inaccurately identifies pictured emotion"
        },
        {
          "id": 36,
          "category": "social",
          "test_item": "angry",
          "examiner_instructions": "I am going to show you some pictures. I want you to tell me how each person feels.",
          "correct_answer": "correctly identifies pictured emotion (synonyms allowed)",
          "incorrect_answer": "inaccurately identifies pictured emotion"
        },
        {
          "id": 37,
          "category": "social",
          "test_item": "scared",
          "examiner_instructions": "I am going to show you some pictures. I want you to tell me how each person feels.",
          "correct_answer": "correctly identifies pictured emotion (synonyms allowed)",
          "incorrect_answer": "inaccurately identifies pictured emotion"
        },
        {
          "id": 38,
          "category": "social",
          "test_item": "tired",
          "examiner_instructions": "I am going to show you some pictures. I want you to tell me how each person feels.",
          "correct_answer": "correctly identifies pictured emotion (synonyms allowed)",
          "incorrect_answer": "inaccurately identifies pictured emotion"
        },
        {
          "id": 39,
          "category": "social",
          "test_item": "Makes appropriate eye contact",
          "examiner_instructions": "Observe social-pragmatic behavior in conversation",
          "correct_answer": "behavior present",
          "incorrect_answer": "behavior not present"
        },
        {
          "id": 40,
          "category": "social",
          "test_item": "Takes turns in conversation",
          "examiner_instructions": "Observe social-pragmatic behavior in conversation",
          "correct_answer": "behavior present",
          "incorrect_answer": "behavior not present"
        },
        {
          "id": 41,
          "category": "social",
          "test_item": "Asks questions",
          "examiner_instructions": "Observe social-pragmatic behavior in conversation",
          "correct_answer": "behavior present",
          "incorrect_answer": "behavior not present"
        },
        {
          "id": 42,
          "category": "social",
          "test_item": "Responds appropriately to questions",
          "examiner_instructions": "Observe social-pragmatic behavior in conversation",
          "correct_answer": "behavior present",
          "incorrect_answer": "behavior not present"
        },
        {
          "id": 43,
          "category": "social",
          "test_item": "Demonstrates appropriate body positioning",
          "examiner_instructions": "Observe social-pragmatic behavior in conversation",
          "correct_answer": "behavior present",
          "incorrect_answer": "behavior not present"
        },
        {
          "id": 44,
          "category": "social",
          "test_item": "Demonstrates functional play with toys",
          "examiner_instructions": "Observe social-pragmatic behavior in conversation",
          "correct_answer": "behavior present",
          "incorrect_answer": "behavior not present"
        }
      ]
      );
    });
};
