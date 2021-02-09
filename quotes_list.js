const quotes = [
    {
        title: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    },
    {
        title: "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
    },
    {
        title: "The most disastrous thing that you can ever learn is your first programming language.",
    },
    {
        title: "The most important property of a program is whether it accomplishes the intention of its user.",
    },
    {
        title: "A conscious human is driven by their conscience, not popular opinion.",
    },
    {
        title: "There is no CTRL Z in life.",
    },

    {
        title: "Learning to code is useful no matter what your career ambitions are.",
    },
    {
        title: "Programmer: A machine that turns coffee into code.",
    },

    {
        title: "Computers are fast; programmers keep it slow.",
    },
    {
        title: "When I wrote this code, only God and I understood what I did. Now only God knows.",
    },
    {
        title: "Copy-and-Paste was programmed by programmers for programmers actually.",
    },
    {
        title: "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.",
    },
    {
        title: "There are two ways to write error-free programs; only the third works.",
    },
    {
        title: "No code has zero defects.",
    },
    {
        title: "Remember that there is no code faster than no code.",
    },
    {
        title: "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
    },
    {
        title: "I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.",
    },
    {
        title: "It’s not a bug – it’s an undocumented feature.",
    },
    {
        title: "Deleted code is debugged code.",
    },
    {
        title: "The cheapest, fastest, and most reliable components are those that aren’t there.",
    },
    {
        title: "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.",
    },
    {
        title: "First, solve the problem. Then, write the code.",
    },
    {
        title: "Java is to JavaScript what car is to Carpet.",
    },
    {
        title: "Ruby is rubbish! PHP is phpantastic!",
    },
    {
        title: "Fix the cause, not the symptom.",
    },
    {
        title: "Make it work, make it right, make it fast.",
    },
    {
        title: "You should name a variable using the same care with which you name a first-born child.",
    },
    {
        title: "Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else.",
    },
    {
        title: "Every time you write a comment, you should grimace and feel the failure of your ability of expression.",
    },
    {
        title: "When you see commented-out code, delete it!",
    },
    {
        title: "Obsolete comments are worse than no comments.",
    },
    {
        title: "Comments are often lies waiting to happen. Code should speak for itself whenever possible.",
    },
    {
        title: "Programmers must avoid leaving false clues that obscure the meaning of code.",
    },
    {
        title: "Clean code always looks like it was written by someone who cares.",
    },
    {
        title: "Simplicity is prerequisite for reliability.",
    },
    {
        title: "If you’re good at the debugger it means you spent a lot of time debugging. I don’t want you to be good at the debugger.",
    },
    {
        title: "Practice, Practice, Practice! Musicians don’t only play when they are on stage in front of an audience.",
    },
    {
        title: "So much complexity in software comes from trying to make one thing do two things.",
    },
    {
        title: "You want it in one line? Does it have to fit in 80 columns?",
    },
    {
        title: "There’s nothing more permanent than a temporary hack.",
    },
    {
        title: "Of course bad code can be cleaned up. But it’s very expensive.",
    },
    {
        title: "Repetition is the root of all software evil.",
    },
    {
        title: "It can be better to copy a little code than to pull in a big library for one function. Dependency hygiene trumps code reuse.",
    },
    {
        title: "There are only two hard things in Computer Science: cache invalidation and naming things.",
    },
    {
        title: "Code is like humor. When you have to explain it, it’s bad.",
    },
    {
        title: "Pasting code from the Internet into production code is like chewing gum found in the street.",
    },
    {
        title: "Weeks of coding can save you hours of planning.",
    },
    {
        title: "Plans are worthless, but planning is everything.",
    },
    {
        title: "Never trust a computer you can’t throw out a window.",
    },
    {
        title: "Java is to JavaScript as ham is to hamster.",
    },
    {
        title: "A good programmer looks both ways before crossing a one-way street.",
    },
    {
        title: "They have computers, and they may have other weapons of mass destruction.",
    },
    {
        title: "Computers are useless.  They can only give you answers",
    },
    {
        title: "The question of whether computers can think is like the question of whether submarines can swim.",
    },
    {
        title: "Hardware: The parts of a computer system that can be kicked.",
    },
    {
        title: "The Web is like a dominatrix.  Everywhere I turn, I see little buttons ordering me to Submit.",
    },
    {
        title: "A programming language is for thinking about programs, not for expressing programs you've already thought of. It should be a pencil, not a pen",
    },
    {
        title: "  Don't comment bad code - rewrite it.",
    },
    {
        title: "One of my most productive days was throwing away 1000 lines of code.",
    },
    {
        title: "One main'scrappy software is another man's full time job.",
    },

    {
        title: "Walking on water and developing software from a specification are easy if both are frozen.",
    },
    {
        title: "System programmers are the high priests of a low cult. ",
    },
    {
        title: "The computer was born to solve problems that did not exist before.",
    },
    {
        title: "Real programmers don't comment their code. If it was hard to write, it should be hard to understand.",
    },
    {
        title: "We have to stop optimizing for programmers and start optimizing for users. ",
    },
    {
        title: "If you optimize everything, you will always be unhappy. ",
    },
    {
        title: "Talk is cheap.Show me the code. ",
    },
    {
        title: "First, solve the problem.Then write the code.",
    },
    {
        title: "Small minds are concerned with the extraordinary, great minds with the ordinary.",
    },
    {
        title: "The purpose of software engineering is to control complexity, not to create it.",
    },
    {
        title: "esting can only prove the presence of bugs, not their absence.",
    },
    {
        title: "You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.",
    },
    {
        title: "Every programmer is an author.",
    },
    {
        title: "In software, the most beautiful code, the most beautiful functions, and the most beautiful programs are sometimes not there at all.",
    },
    {
        title: "There are 10 types of people in this world, those who understand binary and those who don't.",
    },
    {
        title: "Code never lies, comments sometimes do.",
    },
    {
        title: "Linux is only free if your time has no value.",
    },
    {
        title: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code",
    },
    {
        title: "Premature optimization is the root of all evil.",
    },
    {
        title: "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.",
    },
    {
        title: "What one programmer can do in one month, two programmers can do in two months.",
    },
    {
        title: "Simplicity is prerequisite for reliability.",
    },
    {
        title: "The value of a prototype is in the education it gives you, not in the code itself.",
    },
    {
        title: "Software being 'Done' is like lawn being 'Mowed'.",
    },

];

exports.quotes = quotes;