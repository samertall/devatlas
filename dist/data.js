// DevAtlas catalog: user-provided technologies plus additional relevant languages and tools.
// Categories intentionally overlap; a language can serve several disciplines.
export const groups = [
  { id: 'frontend', name: 'Front-end & Web', icon: '◈', items: `HTML|CSS|JavaScript|TypeScript|JSX|TSX|SCSS|Sass|Less|CoffeeScript|Elm|ReScript|Dart` },
  { id: 'backend', name: 'Back-end Development', icon: '⬡', items: `JavaScript (Node.js)|TypeScript|Python|PHP|Java|C#|Go (Golang)|Ruby|Rust|Kotlin|Scala|Elixir|Erlang|Perl|Lua|Groovy|Clojure|F#|Visual Basic .NET` },
  { id: 'mobile', name: 'Mobile Development', icon: '▯', items: `Swift|Objective-C|Kotlin|Java|Dart|JavaScript|TypeScript|C#|C++` },
  { id: 'ai', name: 'AI & Machine Learning', icon: '✳', items: `Python|R|Julia|MATLAB|Lisp|Prolog|C++|Java|Scala|Wolfram Language` },
  { id: 'systems', name: 'Systems & Low-level', icon: '⌘', items: `C|C++|Rust|Assembly|Zig|Ada|D|Nim|Fortran|COBOL|Pascal|Object Pascal|Modula-2|V|Carbon` },
  { id: 'database', name: 'Database & Query', icon: '▤', items: `SQL|PL/SQL|T-SQL|PostgreSQL PL/pgSQL|GraphQL|Cypher|SPARQL|XQuery|XPath|DAX|MDX|M (Power Query)` },
  { id: 'games', name: 'Games & Graphics', icon: '✦', items: `C++|C#|GDScript|Lua|HLSL|GLSL|UnrealScript|Verse|JavaScript|Python|Rust` },
  { id: 'devops', name: 'DevOps & Automation', icon: '⌁', items: `Bash|PowerShell|Shell Script (sh)|Zsh|Fish|Python|Perl|Ruby|Lua|Groovy|HCL|Nix|Make|AWK|Tcl` },
  { id: 'data', name: 'Science & Data', icon: '◫', items: `R|Python|Julia|MATLAB|Fortran|SAS|Stata|Wolfram Language|Octave|IDL|LabVIEW G` },
  { id: 'blockchain', name: 'Blockchain & Web3', icon: '⬢', items: `Solidity|Vyper|Move|Rust|Cairo|Clarity|Michelson|Plutus (Haskell)|FunC|Tact` },
  { id: 'enterprise', name: 'Enterprise & Legacy', icon: '▦', items: `ABAP|COBOL|RPG|PL/I|Ada|Delphi (Object Pascal)|Visual Basic|VBA|Power Fx|Apex|X++|PeopleCode|Progress OpenEdge ABL` },
  { id: 'functional', name: 'Functional & Logic', icon: 'λ', items: `Haskell|OCaml|F#|Erlang|Elixir|Clojure|Common Lisp|Scheme|Racket|Prolog|Mercury|Standard ML|PureScript|Idris|Agda` },
  { id: 'embedded', name: 'Hardware & Embedded', icon: '▧', items: `C|C++|Assembly|Rust|MicroPython|CircuitPython|VHDL|Verilog|SystemVerilog|Chisel|Arduino Language (C/C++ based)` },
  { id: 'markup', name: 'Markup & Configuration', icon: '◇', items: `HTML|XML|CSS|SCSS|Sass|Less|Markdown|YAML|JSON|JSON5|TOML|INI|LaTeX|SVG|XSLT|HCL` },
  { id: 'other', name: 'More Languages', icon: '∞', items: `Smalltalk|Scratch|Logo|BASIC|QBasic|FreeBASIC|ActionScript|ColdFusion Markup Language (CFML)|Hack|Crystal|Haxe|Fantom|Eiffel|Raku|Chapel|Pony|Janet|Red|Rebol|Io|Factor|Forth|APL|J|K|Q|Ballerina` },
  { id: 'emerging', name: 'Emerging & Specialized', icon: '✧', items: `Gleam|Mojo|Odin|Jai|BQN|Uiua|WGSL|WebAssembly Text (WAT)|OpenCL C|OpenQASM|Q#|Processing|p5.js|GameMaker Language (GML)|Ladder Logic|Structured Text|G-code|Wren|Ceylon|Cython|Nushell|Typst|Purescript|Dhall|Nickel|Pkl|Bicep|Jsonnet|Cue|Kusto Query Language (KQL)|PromQL|LogQL|jq|Starlark|Euphoria|Inform 7|Ren'Py Script|Vimscript|Emacs Lisp|AutoHotkey|AutoIt` },
  { id: 'ecosystem', name: 'Frameworks, Runtimes & Tools', icon: '◉', kind: 'tool', items: `React|Next.js|Angular|Vue.js|Nuxt|Svelte|SvelteKit|SolidJS|Astro|Qwik|Remix|Gatsby|jQuery|Lit|Alpine.js|Tailwind CSS|Bootstrap|Material UI|Shadcn/ui|Vite|Webpack|Rollup|Parcel|Babel|ESLint|Prettier|Node.js|Bun|Deno|Express|Fastify|NestJS|Django|Flask|FastAPI|Spring Boot|Quarkus|Micronaut|Laravel|Symfony|Ruby on Rails|ASP.NET Core|Phoenix|Gin|Fiber|React Native|Expo|Flutter|Ionic|Capacitor|Electron|Tauri|Unity|Unreal Engine|Godot|TensorFlow|PyTorch|JAX|scikit-learn|Hugging Face Transformers|LangChain|OpenCV|NumPy|Pandas|Jupyter|Docker|Kubernetes|Terraform|OpenTofu|Ansible|GitHub Actions|Jenkins|Git|PostgreSQL|MySQL|SQLite|MongoDB|Redis|Elasticsearch|Firebase|Supabase|Prisma|Drizzle ORM|GraphQL Yoga|Apollo GraphQL|gRPC|REST APIs|OpenAPI|Vitest|Jest|Playwright|Cypress|Selenium|Storybook|Figma|WebAssembly|Cloudflare Workers|Vercel` },
];

export const featured = {
  'JavaScript': { tagline: 'The language of the interactive web.', difficulty: 'Beginner-friendly', use: 'Web interfaces, servers and automation', docs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  'TypeScript': { tagline: 'JavaScript with a powerful type system.', difficulty: 'Intermediate', use: 'Scalable web and full-stack apps', docs: 'https://www.typescriptlang.org/docs/' },
  'Python': { tagline: 'A versatile language for building and exploring.', difficulty: 'Beginner-friendly', use: 'AI, data, scripting and back-end', docs: 'https://docs.python.org/3/' },
  'Rust': { tagline: 'Performance with a focus on memory safety.', difficulty: 'Advanced', use: 'Systems, tooling and infrastructure', docs: 'https://doc.rust-lang.org/book/' },
  'Go (Golang)': { tagline: 'Simple, fast, and built for services.', difficulty: 'Intermediate', use: 'Cloud services, APIs and tooling', docs: 'https://go.dev/learn' },
  'Java': { tagline: 'A mature ecosystem that runs at scale.', difficulty: 'Intermediate', use: 'Enterprise, Android and services', docs: 'https://dev.java/learn/' },
  'C#': { tagline: 'A modern language across apps and games.', difficulty: 'Intermediate', use: 'Enterprise, games and services', docs: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
  'C++': { tagline: 'Fine-grained control for demanding software.', difficulty: 'Advanced', use: 'Games, systems and embedded', docs: 'https://isocpp.org/get-started' },
  'C': { tagline: 'A foundation of modern systems programming.', difficulty: 'Advanced', use: 'Embedded and operating systems', docs: 'https://en.cppreference.com/w/c' },
  'Kotlin': { tagline: 'Concise code for Android and beyond.', difficulty: 'Intermediate', use: 'Android and back-end services', docs: 'https://kotlinlang.org/docs/home.html' },
  'Swift': { tagline: 'Expressive development for Apple platforms.', difficulty: 'Intermediate', use: 'iOS, macOS and server apps', docs: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/' },
  'Dart': { tagline: 'A productive language for multiplatform apps.', difficulty: 'Beginner-friendly', use: 'Flutter apps and UI', docs: 'https://dart.dev/guides' },
  'PHP': { tagline: 'A practical engine behind much of the web.', difficulty: 'Beginner-friendly', use: 'Web apps and content platforms', docs: 'https://www.php.net/manual/en/' },
  'Ruby': { tagline: 'An expressive language built for developer joy.', difficulty: 'Beginner-friendly', use: 'Web apps and scripting', docs: 'https://www.ruby-lang.org/en/documentation/' },
  'SQL': { tagline: 'The common language of relational data.', difficulty: 'Beginner-friendly', use: 'Databases, analysis and reporting', docs: 'https://www.postgresql.org/docs/current/tutorial-sql.html' },
  'R': { tagline: 'A toolkit for statistical exploration.', difficulty: 'Intermediate', use: 'Statistics, research and visualization', docs: 'https://cran.r-project.org/manuals.html' },
  'Julia': { tagline: 'High-level numerical computing with speed.', difficulty: 'Intermediate', use: 'Science, numerical modeling and data', docs: 'https://docs.julialang.org/en/v1/' },
  'HTML': { tagline: 'Structure and meaning for every web page.', difficulty: 'Beginner-friendly', use: 'Web content and semantics', docs: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  'CSS': { tagline: 'The styling language of the web.', difficulty: 'Beginner-friendly', use: 'Responsive visual interfaces', docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  'React': { tagline: 'A component library for building interfaces.', difficulty: 'Intermediate', use: 'Interactive front-end applications', docs: 'https://react.dev/learn' },
  'Angular': { tagline: 'A complete framework for web applications.', difficulty: 'Intermediate', use: 'Complex web and enterprise products', docs: 'https://angular.dev/tutorials' },
  'Next.js': { tagline: 'A React framework for full-stack web products.', difficulty: 'Intermediate', use: 'Web apps, sites and server rendering', docs: 'https://nextjs.org/docs' },
  'Vue.js': { tagline: 'An approachable progressive UI framework.', difficulty: 'Beginner-friendly', use: 'Front-end applications', docs: 'https://vuejs.org/guide/introduction.html' },
  'Svelte': { tagline: 'A compiler-driven approach to UI.', difficulty: 'Intermediate', use: 'Lean interactive web apps', docs: 'https://svelte.dev/docs/svelte/overview' },
  'Flutter': { tagline: 'A cross-platform UI toolkit using Dart.', difficulty: 'Intermediate', use: 'Mobile, desktop and web apps', docs: 'https://docs.flutter.dev/get-started/learn-flutter' },
  'Solidity': { tagline: 'Smart contracts for EVM-compatible chains.', difficulty: 'Advanced', use: 'Blockchain applications', docs: 'https://docs.soliditylang.org/' },
  'Bash': { tagline: 'Automate your command-line workflows.', difficulty: 'Intermediate', use: 'Shell tasks and automation', docs: 'https://www.gnu.org/software/bash/manual/' },
  'Zig': { tagline: 'Explicit, low-level systems engineering.', difficulty: 'Advanced', use: 'Systems and embedded software', docs: 'https://ziglang.org/learn/' },
  'Haskell': { tagline: 'Pure functional programming and strong types.', difficulty: 'Advanced', use: 'Compilers, research and services', docs: 'https://www.haskell.org/documentation/' },
  'Lua': { tagline: 'Small, embeddable, flexible scripting.', difficulty: 'Beginner-friendly', use: 'Games, extensions and embedded scripts', docs: 'https://www.lua.org/manual/5.4/' },
};

export const paths = [
  { id: 'web', icon: '⌘', name: 'Build for the web', subtitle: 'Interfaces people love using', foundation: ['HTML','CSS','JavaScript'], build: ['TypeScript','React','Next.js'], ship: ['Git','Playwright','Vercel'], project: 'Build and publish an accessible personal dashboard.' },
  { id: 'ai', icon: '✳', name: 'Build with AI', subtitle: 'Models, data and useful products', foundation: ['Python','SQL','Jupyter'], build: ['Pandas','PyTorch','FastAPI'], ship: ['Docker','Git','Hugging Face Transformers'], project: 'Ship a small AI-powered research assistant with clear limitations.' },
  { id: 'mobile', icon: '▯', name: 'Build mobile apps', subtitle: 'From prototype to pocket', foundation: ['Dart','Flutter','Git'], build: ['Firebase','SQL','Figma'], ship: ['Playwright','TypeScript','React Native'], project: 'Create a habit tracker with offline-first storage.' },
  { id: 'backend', icon: '⬡', name: 'Build scalable APIs', subtitle: 'Services, data and reliability', foundation: ['JavaScript','TypeScript','SQL'], build: ['Node.js','PostgreSQL','NestJS'], ship: ['Docker','GitHub Actions','Redis'], project: 'Develop a rate-limited public API with automated tests.' },
  { id: 'security', icon: '◈', name: 'Explore cybersecurity', subtitle: 'Understand systems and harden software', foundation: ['Python','Bash','SQL'], build: ['C','Rust','PowerShell'], ship: ['Docker','Git','Go (Golang)'], project: 'Create a local security checklist and safe configuration linter.' },
  { id: 'games', icon: '✦', name: 'Create games', subtitle: 'Physics, play and interaction', foundation: ['GDScript','Godot','Git'], build: ['C#','Unity','GLSL'], ship: ['C++','Unreal Engine','Lua'], project: 'Build a tiny puzzle game with keyboard and controller support.' },
  { id: 'data', icon: '◫', name: 'Work with data', subtitle: 'Turn messy numbers into insight', foundation: ['Python','SQL','R'], build: ['Pandas','Jupyter','Julia'], ship: ['PostgreSQL','Docker','Git'], project: 'Publish a transparent, reproducible data story.' },
  { id: 'systems', icon: '⌁', name: 'Build close to hardware', subtitle: 'Performance and fundamentals', foundation: ['C','Python','Assembly'], build: ['C++','Rust','Zig'], ship: ['Git','Bash','Docker'], project: 'Implement and benchmark a small command-line utility.' },
];

export const challenges = [
  'Build the same tiny to-do app in two different languages. Share what surprised you.',
  'Recreate a favorite interface using semantic HTML, CSS, and zero dependencies.',
  'Make a 100-line tool that solves one annoying daily developer problem.',
  'Write a beginner-friendly guide for a language nobody on your team uses.',
  'Build an accessible keyboard-only mini game and invite friends to test it.',
  'Compare two implementations of the same API: one typed, one dynamically typed.',
  'Find a real bug in a small open-source project, reproduce it, and document the fix.',
];

const records = new Map();
for (const group of groups) {
  for (const name of group.items.split('|').map(s => s.trim()).filter(Boolean)) {
    const key = name.toLowerCase();
    if (!records.has(key)) records.set(key, { name, categories: [], kind: group.kind || 'language' });
    const record = records.get(key);
    record.categories.push(group.id);
    if (group.kind !== 'tool') record.kind = 'language';
  }
}
export const catalog = [...records.values()].sort((a,b) => a.name.localeCompare(b.name));
export const categoryName = Object.fromEntries(groups.map(g => [g.id,g.name]));
