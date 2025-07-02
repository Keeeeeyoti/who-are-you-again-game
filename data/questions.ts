export interface Question {
  id: string;
  text: string;
  category: 'icebreakers' | 'mildly-intrusive' | 'hr-alert';
}

export const questions: Question[] = [
  // Icebreakers - Safe, friendly questions
  {
    id: 'ice-1',
    text: 'What\'s your favorite way to spend a weekend?',
    category: 'icebreakers',
  },
  {
    id: 'ice-2',
    text: 'If you could have dinner with anyone, dead or alive, who would it be?',
    category: 'icebreakers',
  },
  {
    id: 'ice-3',
    text: 'What\'s the best book you\'ve read recently?',
    category: 'icebreakers',
  },
  {
    id: 'ice-4',
    text: 'What\'s your go-to karaoke song?',
    category: 'icebreakers',
  },
  {
    id: 'ice-5',
    text: 'What\'s the most interesting place you\'ve traveled to?',
    category: 'icebreakers',
  },
  {
    id: 'ice-6',
    text: 'What\'s your favorite season and why?',
    category: 'icebreakers',
  },
  {
    id: 'ice-7',
    text: 'What\'s a skill you\'d like to learn?',
    category: 'icebreakers',
  },
  {
    id: 'ice-8',
    text: 'What\'s your favorite comfort food?',
    category: 'icebreakers',
  },
  {
    id: 'ice-9',
    text: 'What\'s the best piece of advice you\'ve ever received?',
    category: 'icebreakers',
  },
  {
    id: 'ice-10',
    text: 'What\'s your favorite movie genre?',
    category: 'icebreakers',
  },
  {
    id: 'ice-11',
    text: 'What\'s something you\'re looking forward to?',
    category: 'icebreakers',
  },
  {
    id: 'ice-12',
    text: 'What\'s your favorite way to stay active?',
    category: 'icebreakers',
  },
  {
    id: 'ice-13',
    text: 'What\'s the most interesting job you\'ve ever had?',
    category: 'icebreakers',
  },
  {
    id: 'ice-14',
    text: 'What\'s your favorite holiday and why?',
    category: 'icebreakers',
  },
  {
    id: 'ice-15',
    text: 'What\'s something that always makes you laugh?',
    category: 'icebreakers',
  },
  {
    id: 'ice-16',
    text: 'What\'s your favorite type of music?',
    category: 'icebreakers',
  },
  {
    id: 'ice-17',
    text: 'What\'s the best gift you\'ve ever received?',
    category: 'icebreakers',
  },
  {
    id: 'ice-18',
    text: 'What\'s your favorite way to relax?',
    category: 'icebreakers',
  },
  {
    id: 'ice-19',
    text: 'What\'s something you\'re passionate about?',
    category: 'icebreakers',
  },
  {
    id: 'ice-20',
    text: 'What\'s your favorite childhood memory?',
    category: 'icebreakers',
  },

  // Mildly Intrusive - More personal but still appropriate
  {
    id: 'mild-1',
    text: 'What\'s the most embarrassing thing that happened to you at work?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-2',
    text: 'What\'s your biggest pet peeve about your coworkers?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-3',
    text: 'What\'s the worst date you\'ve ever been on?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-4',
    text: 'What\'s something you\'ve done that you\'re secretly proud of?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-5',
    text: 'What\'s your biggest fear about your career?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-6',
    text: 'What\'s the most money you\'ve ever spent on something ridiculous?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-7',
    text: 'What\'s your biggest guilty pleasure?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-8',
    text: 'What\'s the most embarrassing thing in your search history?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-9',
    text: 'What\'s something you\'ve lied about on your resume?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-10',
    text: 'What\'s your biggest insecurity about your work?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-11',
    text: 'What\'s the most dramatic thing you\'ve done to avoid a meeting?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-12',
    text: 'What\'s your biggest workplace crush story?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-13',
    text: 'What\'s the most unprofessional thing you\'ve done at work?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-14',
    text: 'What\'s your biggest regret from college?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-15',
    text: 'What\'s the most embarrassing thing your parents have done?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-16',
    text: 'What\'s your biggest fear about relationships?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-17',
    text: 'What\'s the most dramatic thing you\'ve done for love?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-18',
    text: 'What\'s your biggest financial mistake?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-19',
    text: 'What\'s the most embarrassing thing you\'ve said in a job interview?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-20',
    text: 'What\'s your biggest fear about getting older?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-21',
    text: 'What\'s the most dramatic thing you\'ve done to impress someone?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-22',
    text: 'What\'s your biggest regret from high school?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-23',
    text: 'What\'s the most embarrassing thing you\'ve done while drunk?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-24',
    text: 'What\'s your biggest fear about being a parent?',
    category: 'mildly-intrusive',
  },
  {
    id: 'mild-25',
    text: 'What\'s the most dramatic thing you\'ve done to avoid confrontation?',
    category: 'mildly-intrusive',
  },

  // HR Alert - Spicy, unfiltered questions
  {
    id: 'hr-1',
    text: 'What\'s the most inappropriate thing you\'ve ever said to your boss?',
    category: 'hr-alert',
  },
  {
    id: 'hr-2',
    text: 'What\'s your biggest workplace scandal story?',
    category: 'hr-alert',
  },
  {
    id: 'hr-3',
    text: 'What\'s the most dramatic thing you\'ve done to get revenge on a coworker?',
    category: 'hr-alert',
  },
  {
    id: 'hr-4',
    text: 'What\'s your biggest workplace crush confession?',
    category: 'hr-alert',
  },
  {
    id: 'hr-5',
    text: 'What\'s the most inappropriate thing you\'ve done at a work party?',
    category: 'hr-alert',
  },
  {
    id: 'hr-6',
    text: 'What\'s your biggest workplace gossip story?',
    category: 'hr-alert',
  },
  {
    id: 'hr-7',
    text: 'What\'s the most dramatic thing you\'ve done to avoid getting fired?',
    category: 'hr-alert',
  },
  {
    id: 'hr-8',
    text: 'What\'s your biggest workplace relationship drama?',
    category: 'hr-alert',
  },
  {
    id: 'hr-9',
    text: 'What\'s the most inappropriate thing you\'ve ever said in a meeting?',
    category: 'hr-alert',
  },
  {
    id: 'hr-10',
    text: 'What\'s your biggest workplace betrayal story?',
    category: 'hr-alert',
  },
  {
    id: 'hr-11',
    text: 'What\'s the most dramatic thing you\'ve done to get a promotion?',
    category: 'hr-alert',
  },
  {
    id: 'hr-12',
    text: 'What\'s your biggest workplace secret?',
    category: 'hr-alert',
  },
  {
    id: 'hr-13',
    text: 'What\'s the most inappropriate thing you\'ve ever done with a coworker?',
    category: 'hr-alert',
  },
  {
    id: 'hr-14',
    text: 'What\'s your biggest workplace lie?',
    category: 'hr-alert',
  },
  {
    id: 'hr-15',
    text: 'What\'s the most dramatic thing you\'ve done to sabotage a coworker?',
    category: 'hr-alert',
  },
  {
    id: 'hr-16',
    text: 'What\'s your biggest workplace crush fantasy?',
    category: 'hr-alert',
  },
  {
    id: 'hr-17',
    text: 'What\'s the most inappropriate thing you\'ve ever said to a client?',
    category: 'hr-alert',
  },
  {
    id: 'hr-18',
    text: 'What\'s your biggest workplace revenge story?',
    category: 'hr-alert',
  },
  {
    id: 'hr-19',
    text: 'What\'s the most dramatic thing you\'ve done to avoid responsibility?',
    category: 'hr-alert',
  },
  {
    id: 'hr-20',
    text: 'What\'s your biggest workplace confession?',
    category: 'hr-alert',
  },
  {
    id: 'hr-21',
    text: 'What\'s the most inappropriate thing you\'ve ever done for money?',
    category: 'hr-alert',
  },
  {
    id: 'hr-22',
    text: 'What\'s your biggest workplace scandal confession?',
    category: 'hr-alert',
  },
  {
    id: 'hr-23',
    text: 'What\'s the most dramatic thing you\'ve done to cover up a mistake?',
    category: 'hr-alert',
  },
  {
    id: 'hr-24',
    text: 'What\'s your biggest workplace relationship confession?',
    category: 'hr-alert',
  },
  {
    id: 'hr-25',
    text: 'What\'s the most inappropriate thing you\'ve ever said about your boss?',
    category: 'hr-alert',
  },
  {
    id: 'hr-26',
    text: 'What\'s your biggest workplace betrayal confession?',
    category: 'hr-alert',
  },
  {
    id: 'hr-27',
    text: 'What\'s the most dramatic thing you\'ve done to get attention?',
    category: 'hr-alert',
  },
  {
    id: 'hr-28',
    text: 'What\'s your biggest workplace secret confession?',
    category: 'hr-alert',
  },
  {
    id: 'hr-29',
    text: 'What\'s the most inappropriate thing you\'ve ever done for a promotion?',
    category: 'hr-alert',
  },
  {
    id: 'hr-30',
    text: 'What\'s your biggest workplace drama confession?',
    category: 'hr-alert',
  },
];

export const getQuestionsByCategory = (category: string): Question[] => {
  return questions.filter(question => question.category === category);
};

export const shuffleQuestions = (questions: Question[]): Question[] => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}; 