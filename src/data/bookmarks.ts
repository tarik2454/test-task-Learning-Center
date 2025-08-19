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
    context_translation: "Діти щасливі, що їхня мама грає з ними",
    meanings: ["діти", "хлопці"],
  },
  {
    value: "book",
    context: "She is reading a book in the library",
    language_code: "en",
    canonical_form: "book",
    transliteration: "buk",
    context_translation: "Вона читає книгу в бібліотеці",
    meanings: ["книга"],
  },
  {
    value: "happy",
    context: "He felt happy after passing the exam",
    language_code: "en",
    canonical_form: "happy",
    transliteration: "hæpi",
    context_translation: "Він був щасливий після здачі іспиту",
    meanings: ["щасливий", "задоволений"],
  },
  {
    value: "car",
    context: "My father drives a new car",
    language_code: "en",
    canonical_form: "car",
    transliteration: "kar",
    context_translation: "Мій батько водить нову машину",
    meanings: ["машина", "автомобіль"],
  },
  {
    value: "school",
    context: "Children go to school every morning",
    language_code: "en",
    canonical_form: "school",
    transliteration: "skuːl",
    context_translation: "Діти ходять до школи щоранку",
    meanings: ["школа"],
  },
  {
    value: "dog",
    context: "The dog is barking loudly",
    language_code: "en",
    canonical_form: "dog",
    transliteration: "dog",
    context_translation: "Собака голосно гавкає",
    meanings: ["собака", "пес"],
  },
  {
    value: "house",
    context: "They live in a big house near the park",
    language_code: "en",
    canonical_form: "house",
    transliteration: "haus",
    context_translation: "Вони живуть у великому будинку поруч із парком",
    meanings: ["будинок", "споруда"],
  },
  {
    value: "water",
    context: "Please, give me a glass of water",
    language_code: "en",
    canonical_form: "water",
    transliteration: "woːtər",
    context_translation: "Будь ласка, дай мені склянку води",
    meanings: ["вода"],
  },
  {
    value: "work",
    context: "She has a lot of work today",
    language_code: "en",
    canonical_form: "work",
    transliteration: "wɜːrk",
    context_translation: "У неї сьогодні багато роботи",
    meanings: ["робота"],
  },
  {
    value: "sun",
    context: "The sun is shining brightly",
    language_code: "en",
    canonical_form: "sun",
    transliteration: "sʌn",
    context_translation: "Сонце світить яскраво",
    meanings: ["сонце"],
  },
];
