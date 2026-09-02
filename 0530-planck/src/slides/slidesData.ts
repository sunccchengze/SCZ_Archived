export interface Slide {
  id: number;
  section: string;
  title: string;
  subtitle?: string;
  teleprompter: string;
  duration?: string;
}

export const slides: Slide[] = [
  // ========== OPENING ==========
  {
    id: 1,
    section: "Opening",
    title: "The Reluctant Revolutionary",
    subtitle: "The Story of Max Planck",
    duration: "~3 min",
    teleprompter: `Hello everyone! Thank you for being here today.

Let me start with a question. Have you ever had a moment where you solved a math problem, but the answer was so weird, so strange, that you thought you must have made a mistake? You checked it again and again, and the answer was still the same weird thing. So you just sat there thinking, "This can't be right... can it?"`
  },
  {
    id: 2,
    section: "Opening",
    title: "A Discovery Too Strange to Believe",
    teleprompter: `Well, imagine that feeling — but multiply it by a million. Because that is exactly what happened to a German physicist named Max Planck in the year 1900. He solved a problem. And his answer was so strange, so revolutionary, that it took him YEARS to believe his own work. And that answer — that one strange idea — ended up completely destroying the old physics and giving birth to something entirely new: quantum physics.

Today, I want to tell you the story of Max Planck. Not just the science — though we will definitely talk about the science — but also the man himself. Because his story is one of the most dramatic, heartbreaking, and inspiring stories in the entire history of science.

So, are you ready? Let's go back to nineteenth-century Germany.`
  },

  // ========== PART 1: YOUNG PLANCK ==========
  {
    id: 3,
    section: "Part 1: The Young Max Planck",
    title: "Born into Brilliance",
    subtitle: "Kiel, Germany — 1858",
    duration: "~5 min",
    teleprompter: `Max Karl Ernst Ludwig Planck was born on April 23, 1858, in the city of Kiel, Germany. His family was — how should I put it — seriously academic. His father was a law professor. His grandfather was a theology professor. His great-grandfather was also a professor. So you could say that being brilliant was basically the family business.

Young Max was a good student — not a flashy genius like Mozart, not a troublemaker like Einstein. He was quiet, disciplined, hardworking, and deeply serious.`
  },
  {
    id: 4,
    section: "Part 1: The Young Max Planck",
    title: "The Musician Who Chose Physics",
    teleprompter: `He loved music. In fact, he was so talented at the piano that he seriously considered becoming a professional musician. He could play piano, cello, organ, and he even composed songs. Imagine — the history of physics could have lost one of its greatest minds to a career in music!

But in the end, Max chose physics. And here is an interesting story. When he went to the University of Munich and told one of his professors, Philipp von Jolly, that he wanted to study physics, the professor actually tried to TALK HIM OUT OF IT.`
  },
  {
    id: 5,
    section: "Part 1: The Young Max Planck",
    title: '"Physics Is Complete"',
    subtitle: "The Wrong Prediction",
    teleprompter: `Professor von Jolly said something like: "Young man, why would you want to study physics? Physics is essentially complete. All the great discoveries have already been made. There are only a few small details left to clean up."

Can you imagine? "Physics is complete." This was a common belief in the late 1800s. Scientists thought they had figured out almost everything. Newton had given them mechanics. Maxwell had given them electromagnetism. The laws of thermodynamics were well established. Everything seemed to fit together beautifully.`
  },
  {
    id: 6,
    section: "Part 1: The Young Max Planck",
    title: "A Man in Love with Deep Truth",
    teleprompter: `But Planck was not trying to make new discoveries anyway. He said — and I love this quote — "I do not wish to discover new things. I only wish to understand the existing foundations of physics more deeply." He just wanted to understand. He was a man in love with deep truth and elegant order.

So he studied. He got his doctorate at the age of 21. He became a professor. And he devoted himself to the subject he loved most: thermodynamics — the science of heat and energy.

Now, this might sound boring to some people. Thermodynamics? Heat? Really? But let me tell you, this "boring" subject was about to lead Planck straight into the biggest revolution in the history of physics.`
  },

  // ========== PART 2: BLACKBODY RADIATION ==========
  {
    id: 7,
    section: "Part 2: The Problem",
    title: "The Blackbody Radiation Problem",
    subtitle: "The Puzzle That Drove Everyone Crazy",
    duration: "~7 min",
    teleprompter: `Okay, now we need to talk about the science. Don't worry — I will make this as clear as I possibly can.

In the late 1890s, there was a physics problem that was driving everyone crazy. It was called the "blackbody radiation" problem. Let me explain what that means.

First, what is a blackbody? A blackbody is an idealized object that absorbs ALL the light and radiation that hits it. Nothing is reflected. Everything is absorbed. And here is the key part: when you heat a blackbody, it glows. It emits radiation.`
  },
  {
    id: 8,
    section: "Part 2: The Problem",
    title: "Glowing Hot Metal",
    subtitle: "You've Seen This Before!",
    teleprompter: `You have actually seen this in real life. Think about a piece of metal — say, an iron poker for a fireplace. When you heat it up, what happens? First it glows a dull red. Heat it more, it turns orange. Even more, it turns yellow, then white. If you could heat it to extremely high temperatures, it would even glow blue. The color changes because the radiation it emits changes with temperature.

This is basically blackbody radiation. And physicists wanted to find a formula — a mathematical equation — that could perfectly describe exactly how much radiation a blackbody emits at every wavelength, for any given temperature. Sounds straightforward, right? Just measure the light, find the pattern, write the equation.

But here is where things went terribly wrong.`
  },
  {
    id: 9,
    section: "Part 2: The Problem",
    title: "Two Halves of an Answer",
    subtitle: "Wien vs. Rayleigh-Jeans",
    teleprompter: `Two famous physicists tried to solve this problem, and each of them got HALF the answer right.

First, there was Wilhelm Wien. In 1896, Wien came up with a formula. And his formula worked beautifully — but ONLY for short wavelengths, meaning high-frequency light like ultraviolet. For long wavelengths — like infrared — Wien's formula gave the wrong numbers. It did not match the experiments.

Then, there were Lord Rayleigh and James Jeans. They approached the problem using classical physics — the well-established physics of Newton and Maxwell. And their formula worked well for long wavelengths. But for short wavelengths — for ultraviolet light and beyond — their formula went completely haywire. It predicted that the energy emitted should become INFINITE as the wavelength gets shorter and shorter. Infinite energy! That is obviously impossible.`
  },
  {
    id: 10,
    section: "Part 2: The Problem",
    title: "The Ultraviolet Catastrophe ☢️",
    subtitle: "When Classical Physics Broke Down",
    teleprompter: `A hot object does not emit infinite energy — if it did, you would be vaporized every time you turned on your stove.

This absurd prediction was so disturbing that it got a dramatic name: the Ultraviolet Catastrophe. I love that name. It sounds like a superhero movie. But it was actually a catastrophe for physics, because it meant that classical physics — the physics everyone trusted — was giving a nonsensical answer.

So let me summarize the situation around 1900. Wien's formula works for short wavelengths but fails for long ones. The Rayleigh-Jeans formula works for long wavelengths but fails catastrophically for short ones. Nobody had a formula that worked for ALL wavelengths.

This is the problem that Max Planck decided to tackle. And this is where our story gets really exciting.`
  },

  // ========== PART 3: PLANCK'S SOLUTION ==========
  {
    id: 11,
    section: "Part 3: The Quantum Is Born",
    title: "October 19, 1900",
    subtitle: "The Birthday of Quantum Physics",
    duration: "~8 min",
    teleprompter: `Now, Planck was the perfect person for this problem. Why? Because he was an expert in thermodynamics, and blackbody radiation is fundamentally about how heat energy is converted into light energy. This was his territory.

So Planck went to work. And on October 19, 1900, he presented a new formula to the German Physical Society. This date is important — some people call it the birthday of quantum physics.

Planck's formula was elegant. And — this is the amazing part — it matched the experimental data PERFECTLY. For short wavelengths, for long wavelengths, for every wavelength in between, at every temperature — Planck's formula agreed with the measurements. It was a complete success.`
  },
  {
    id: 12,
    section: "Part 3: The Quantum Is Born",
    title: "Working Backwards",
    subtitle: "Why Does This Formula Work?",
    teleprompter: `But here is the thing. At that point, Planck did not fully understand WHY his formula worked. He had found it partly through intuition, partly through clever mathematical interpolation between Wien's formula and the Rayleigh-Jeans formula. He knew the formula was correct, but he did not yet know the deep reason behind it.

So he spent the next two months working backward. He was trying to find a theoretical justification — a physical explanation — for why this formula was true. And in December 1900, he found it. But the explanation shocked him.`
  },
  {
    id: 13,
    section: "Part 3: The Quantum Is Born",
    title: "Energy Is Not Continuous!",
    subtitle: "The Revolutionary Discovery",
    teleprompter: `Here is what Planck discovered. The only way — the ONLY way — to derive his formula from first principles was to make a very strange assumption. He had to assume that energy is not continuous.

Let me explain what that means. In classical physics, energy was believed to be like water flowing from a tap. You can have any amount. You can have 1.0 units of energy, or 1.1, or 1.01, or 1.001 — any value at all. Energy was thought to be smooth and continuous, like a ramp.

But Planck found that to make his formula work, he had to assume that energy comes in tiny, discrete packets. Not a ramp — a staircase. You can stand on step one, or step two, or step three, but you cannot stand between the steps. Energy can only be emitted or absorbed in specific amounts — in multiples of a basic unit.`
  },
  {
    id: 14,
    section: "Part 3: The Quantum Is Born",
    title: "E = hf",
    subtitle: "The Most Important Equation You've Never Heard Of",
    teleprompter: `He called each unit of energy a quantum — from the Latin word "quantum," meaning "how much." And the size of each quantum depends on the frequency of the radiation. Specifically, the energy of one quantum equals:

E = hf

Where E is energy, f is the frequency of the radiation, and h is a brand new constant that Planck introduced — now called Planck's constant. This constant, h, is incredibly small: about 6.626 times 10 to the power of negative 34 joule-seconds. It is a tiny, tiny number. But its meaning is gigantic.`
  },
  {
    id: 15,
    section: "Part 3: The Quantum Is Born",
    title: "The Sugar Bag Analogy",
    subtitle: "Making Quantum Intuitive",
    teleprompter: `Let me give you an analogy. Imagine you are at a store, and you want to buy some sugar. In classical physics, you could buy any amount of sugar — 1 gram, 1.5 grams, 1.37 grams, any amount. But in Planck's quantum world, sugar only comes in fixed packets — say, 1-gram bags. You can buy 1 bag, 2 bags, 3 bags, but you cannot buy 1.5 bags. The sugar is "quantized."

That is what Planck was saying about energy. Energy is quantized. It comes in packets. And the size of each packet depends on the frequency.

Now, this might sound like a minor technical detail to you. But trust me — this was an absolute EARTHQUAKE in physics. Because for over 200 years, everyone had assumed energy was continuous. This assumption was built into the very foundation of classical physics. And Planck was now saying, "Nope. That assumption is wrong."

But here is the most fascinating part of the story: Planck himself did not believe it.`
  },

  // ========== PART 4: RELUCTANT REVOLUTIONARY ==========
  {
    id: 16,
    section: "Part 4: The Reluctant Revolutionary",
    title: "An Act of Desperation",
    duration: "~4 min",
    teleprompter: `This is what makes Planck such a unique figure in the history of science. He was, by nature, a conservative man. He loved order. He loved tradition. He respected the established laws of physics. He was not some wild rebel trying to overthrow the old system.

And yet, his own mathematics was telling him that the old system was broken.

Planck later described his quantum hypothesis as "an act of desperation." He said, "I was ready to sacrifice any of my previous convictions about physics." He did not introduce the quantum because he wanted to. He introduced it because the mathematics FORCED him to. The data demanded it. There was no other way to explain the blackbody spectrum.

For years after 1900, Planck tried to find a way to reconcile his quantum idea with classical physics. He tried to show that maybe the quantum was just a mathematical trick, not a real physical phenomenon. He hoped that someone would find a way to derive the same formula without the quantum hypothesis.

But no one could. Because the quantum was not a trick. It was reality.`
  },
  {
    id: 17,
    section: "Part 4: The Reluctant Revolutionary",
    title: "Einstein Takes the Baton",
    subtitle: "From Quanta to Photons",
    teleprompter: `It took another physicist — a young man named Albert Einstein — to take Planck's idea truly seriously. In 1905, Einstein used the quantum concept to explain the photoelectric effect. Einstein said that light itself comes in quanta — particles of light that we now call photons. Each photon carries energy equal to hf, just as Planck had proposed.

Einstein was braver than Planck in this regard. While Planck said, "Energy is absorbed and emitted in quanta," Einstein went further and said, "No — light ITSELF is made of quanta. The quantum is not just a property of how matter handles energy. The quantum is a property of light itself."

And for this work — not for relativity, but for the quantum explanation of the photoelectric effect — Einstein won the Nobel Prize in 1921. And Planck won the Nobel Prize in 1918, for his discovery of energy quanta.

So you see the irony? Planck started a revolution that he himself was uncomfortable with. He opened a door that he was afraid to walk through. And it was others — Einstein, Bohr, Heisenberg, Schrödinger, Dirac — who walked through that door and built the full theory of quantum mechanics.`
  },

  // ========== PART 5: WHY IT MATTERS ==========
  {
    id: 18,
    section: "Part 5: Why It Matters",
    title: "Quantum Leaps & Atomic Orbits",
    subtitle: "Connecting to What You Know",
    duration: "~5 min",
    teleprompter: `Okay, now I want to take a moment to connect Planck's work to things you might have already learned or heard about.

You know about atoms, right? You know that electrons orbit the nucleus. But have you ever wondered WHY electrons only exist in certain orbits and not others? Why can't an electron be at any distance from the nucleus?

The answer is: because of Planck's constant. Because energy is quantized. In 1913, Niels Bohr used Planck's quantum idea to build a model of the atom where electrons can only occupy specific energy levels. They can jump from one level to another — we call this a "quantum leap" — but they cannot exist in between. And when they jump, they emit or absorb exactly one quantum of light — one photon — with energy equal to hf.`
  },
  {
    id: 19,
    section: "Part 5: Why It Matters",
    title: "Why Stars Have Colors",
    subtitle: "Spectroscopy & The Universe",
    teleprompter: `This is why different elements produce different colors of light when you heat them. Sodium glows yellow. Neon glows red. Each element has its own set of energy levels, so each element emits its own specific set of frequencies. This is the basis of spectroscopy, which allows us to figure out what distant stars are made of — just by analyzing their light!`
  },
  {
    id: 20,
    section: "Part 5: Why It Matters",
    title: "E = hf vs. E = mc²",
    subtitle: "The Universe Is Digital, Not Analog",
    teleprompter: `And here is something even more mind-blowing. You know the formula E = mc²? Einstein's famous equation? Well, guess what — Planck's formula E = hf is equally important. Some physicists argue it is even MORE important. Because E = mc² tells us about the relationship between mass and energy, but E = hf tells us about the fundamental graininess of nature itself. It tells us that at the deepest level, the universe is not smooth — it is lumpy. It is digital, not analog.

Think about it this way. If you zoom into a digital photograph on your computer, eventually you see individual pixels. The image looks smooth from far away, but up close, it is made of tiny discrete squares. Planck's constant tells us that the universe works the same way. Energy, and ultimately everything in nature, is made of tiny "pixels" — quanta.

Planck's constant also sets the scale of the quantum world. It tells us how small things have to be before quantum effects become important. For everyday objects — baseballs, cars, people — quantum effects are so tiny that we never notice them. The "energy steps" are so small compared to the total energy that they appear continuous, like a staircase with billions of tiny steps looks like a ramp. But for atoms and electrons and photons, quantum effects dominate everything.`
  },

  // ========== PART 6: TRAGEDY ==========
  {
    id: 21,
    section: "Part 6: The Tragedy of Planck's Life",
    title: "A Life of Loss",
    subtitle: "The Personal Side of Max Planck",
    duration: "~5 min",
    teleprompter: `Now, I want to share the personal side of Planck's story, because it is deeply moving.

Planck lived a long life — from 1858 to 1947, spanning nearly 89 years. But his personal life was marked by one tragedy after another.

His first wife, Marie Merck, died in 1909. He remarried, but loss continued to follow him.

His eldest son, Karl, was killed in action during World War I, in 1916.

His two twin daughters, Margarete and Emma — this is heartbreaking — both died in childbirth, just two years apart, in 1917 and 1919. Two daughters, both lost so young.

But the greatest tragedy was yet to come.`
  },
  {
    id: 22,
    section: "Part 6: The Tragedy of Planck's Life",
    title: "Under the Shadow of Darkness",
    subtitle: "Planck and Nazi Germany",
    teleprompter: `Planck lived through the rise of Nazi Germany. He was one of the most respected scientists in Germany, the president of the Kaiser Wilhelm Society — the most prestigious scientific organization in the country. When Hitler came to power in 1933, Planck was in an impossible position.

Planck was not a Nazi. He disagreed with their ideology. In fact, he personally met with Hitler in 1933 to protest the Nazi policy of firing Jewish scientists from universities. He tried to defend his Jewish colleagues, including Fritz Haber, a Nobel Prize-winning chemist.

But Hitler reportedly flew into a rage and dismissed Planck. There was nothing Planck could do. He watched helplessly as some of the greatest scientific minds in Germany — including Einstein — were forced to flee the country.

Planck chose to stay in Germany. He has been criticized for this by some historians. Why didn't he leave? Why didn't he speak out more loudly? But we should understand the context. Planck was an old man — in his seventies. He was a patriot who loved his country, even though he hated what it had become. He believed he could do more good by staying and trying to protect science from within.`
  },
  {
    id: 23,
    section: "Part 6: The Tragedy of Planck's Life",
    title: "The Final Blow",
    subtitle: "January 23, 1945",
    teleprompter: `And then came the final, most devastating blow. His remaining son, Erwin Planck, was involved in the July 20, 1944 plot to assassinate Hitler. The plot failed. Erwin was arrested, tried, and sentenced to death. Max Planck wrote desperate letters to Hitler, begging for his son's life. But on January 23, 1945 — just months before the war ended — Erwin was executed.

Planck was 86 years old. He had lost almost everything — his children, his home, his country's soul. His house in Berlin had been destroyed by Allied bombing. He was a refugee in his own land.

And yet, Planck endured. He survived the war. He was rescued by American forces and lived his final years in Göttingen. He died on October 4, 1947, at the age of 89.

When I read about Planck's life, I am struck by the contrast. In physics, he discovered that nature is fundamentally about discontinuity — about sudden jumps and discrete packets. But in his personal life, he embodied continuity — steadfastness, perseverance, an unbreakable commitment to truth and duty, no matter how much suffering life threw at him.`
  },

  // ========== PART 7: LEGACY ==========
  {
    id: 24,
    section: "Part 7: Planck's Legacy",
    title: "The Seed of Everything Modern",
    subtitle: "Science & Technology",
    duration: "~3 min",
    teleprompter: `So, what is Planck's legacy?

First, the science. Planck's discovery of the quantum was the seed from which ALL of modern quantum physics grew. Quantum mechanics is now the most successful and accurate theory in the history of science. It is the foundation of modern technology — semiconductors, lasers, transistors, computer chips, MRI machines, LED lights, solar cells, nuclear energy. Every electronic device you use exists because of quantum mechanics. And quantum mechanics exists because of Planck.

Without Planck, no quantum theory. Without quantum theory, no understanding of atoms. Without understanding atoms, no modern chemistry, no molecular biology, no modern electronics. The entire technological civilization we live in stands on the foundation that Planck laid.`
  },
  {
    id: 25,
    section: "Part 7: Planck's Legacy",
    title: "The Max Planck Society & Planck Units",
    teleprompter: `Second, the Max Planck Society. After the war, the Kaiser Wilhelm Society — which Planck had led — was renamed the Max Planck Society in his honor. Today, it operates over 80 research institutes across Germany and is one of the most important scientific organizations in the world. Some of the greatest discoveries in modern science have come from Max Planck Institutes.

Third, the Planck units. Planck realized that his constant h, combined with the speed of light c and the gravitational constant G, could be used to define a set of natural units — the Planck length, Planck time, Planck mass, and Planck temperature. These represent the most fundamental scales in the universe. The Planck length, about 1.6 times 10 to the power of negative 35 meters, is believed to be the smallest meaningful length in physics. Below this scale, our current understanding of space and time breaks down.`
  },
  {
    id: 26,
    section: "Part 7: Planck's Legacy",
    title: "The Lesson: Intellectual Courage",
    teleprompter: `And fourth, the lesson. Planck's life teaches us something profound about science and about courage. He teaches us that truth does not care about our preferences. Planck did not want to discover the quantum. He would have been perfectly happy if classical physics had been complete. But when the evidence pointed to a new truth, he followed it — reluctantly, painfully, but honestly. He did not hide his results. He did not pretend the data said something different. He published the truth, even though it overthrew everything he believed in.

That is intellectual courage. And that is the highest standard of science.`
  },

  // ========== CLOSING ==========
  {
    id: 27,
    section: "Closing",
    title: "Remember the Glow",
    subtitle: "A Message for the New Generation",
    duration: "~2 min",
    teleprompter: `So let me bring this all together.

In the year 1900, a careful, conservative, music-loving German professor sat at his desk and found a formula that perfectly described how hot objects glow. And buried inside that formula was a tiny constant — h — that blew open the doors to a completely new understanding of the universe.

The universe, Planck showed us, is not smooth. It is grainy. It is not continuous. It is quantized. And that discovery — that one desperate act of a reluctant revolutionary — changed everything.`
  },
  {
    id: 28,
    section: "Closing",
    title: "Planck's Principle",
    subtitle: "A Final Quote",
    teleprompter: `I want to leave you with something Planck once said. It is one of my favorite quotes from any scientist:

"A new scientific truth does not triumph by convincing its opponents and making them see the light, but rather because its opponents eventually die, and a new generation grows up that is familiar with it."

This is sometimes called "Planck's Principle." And it is both cynical and hopeful at the same time. Cynical because it suggests that people resist new ideas. But hopeful because it means that YOU — the new generation — you are the ones who will embrace new truths, who will see further, who will build on what Planck started.

You are the new generation. Quantum physics is YOUR physics. The quantum world is YOUR world.

So the next time you look at a glowing lightbulb, or the red coils of a toaster, or the light of a star — remember Max Planck. Remember the man who found a crack in the foundation of classical physics, and through that crack, let in the light of a new universe.

Thank you.`
  },
];
