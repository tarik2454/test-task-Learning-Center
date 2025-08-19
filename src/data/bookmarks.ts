export interface Bookmark {
  value: string;
  context: string;
  language_code: string;
  canonical_form: string;
  transliteration: string;
  context_translation: string;
  meanings: string[];
}

export const bookmarks: Bookmark[] = [
  {
    value: "kids",
    context: "The kids are happy that their mum is playing with them",
    language_code: "en",
    canonical_form: "kid",
    transliteration: "kid",
    context_translation: "Дети счастливы, что их мама играет с ними",
    meanings: ["дети", "ребята"],
  },
  {
    value: "book",
    context: "She is reading a book in the library",
    language_code: "en",
    canonical_form: "book",
    transliteration: "buk",
    context_translation: "Она читает книгу в библиотеке",
    meanings: ["книга"],
  },
  {
    value: "happy",
    context: "He felt happy after passing the exam",
    language_code: "en",
    canonical_form: "happy",
    transliteration: "hæpi",
    context_translation: "Он был счастлив после сдачи экзамена",
    meanings: ["счастливый", "довольный"],
  },
  {
    value: "car",
    context: "My father drives a new car",
    language_code: "en",
    canonical_form: "car",
    transliteration: "kar",
    context_translation: "Мой отец водит новую машину",
    meanings: ["машина", "автомобиль"],
  },
  {
    value: "school",
    context: "Children go to school every morning",
    language_code: "en",
    canonical_form: "school",
    transliteration: "skuːl",
    context_translation: "Дети ходят в школу каждое утро",
    meanings: ["школа"],
  },
  {
    value: "dog",
    context: "The dog is barking loudly",
    language_code: "en",
    canonical_form: "dog",
    transliteration: "dog",
    context_translation: "Собака громко лает",
    meanings: ["собака", "пес"],
  },
  {
    value: "house",
    context: "They live in a big house near the park",
    language_code: "en",
    canonical_form: "house",
    transliteration: "haus",
    context_translation: "Они живут в большом доме рядом с парком",
    meanings: ["дом", "здание"],
  },
  {
    value: "water",
    context: "Please, give me a glass of water",
    language_code: "en",
    canonical_form: "water",
    transliteration: "woːtər",
    context_translation: "Пожалуйста, дай мне стакан воды",
    meanings: ["вода"],
  },
  {
    value: "work",
    context: "She has a lot of work today",
    language_code: "en",
    canonical_form: "work",
    transliteration: "wɜːrk",
    context_translation: "У неё много работы сегодня",
    meanings: ["работа"],
  },
  {
    value: "sun",
    context: "The sun is shining brightly",
    language_code: "en",
    canonical_form: "sun",
    transliteration: "sʌn",
    context_translation: "Солнце светит ярко",
    meanings: ["солнце"],
  },
];
