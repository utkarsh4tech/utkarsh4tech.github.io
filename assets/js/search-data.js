// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-coursework",
          title: "coursework",
          description: "A detailed walkthrough of the courses I have taken so far over.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/course/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "activities-statistics-ii-extra-activity-1",
          title: 'Statistics II - Extra Activity 1',
          description: "",
          section: "Activities",handler: () => {
              window.location.href = "/activities/stats2_act1/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "courses-business-data-management",
          title: 'Business Data Management',
          description: "A course providing a foundational understanding of how businesses are organized and run from a data perspective, using case studies across multiple industries.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/bdm/";
            },},{id: "courses-business-analytics",
          title: 'Business Analytics',
          description: "A course focused on building quantitative models and applying statistical techniques to solve complex business problems and make better decisions.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/businessanalytics/";
            },},{id: "courses-computational-thinking",
          title: 'Computational Thinking',
          description: "A course designed to build algorithmic thinking by manually solving problems and understanding core programming concepts from variables to concurrency.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/computationalthinking/";
            },},{id: "courses-corporate-finance",
          title: 'Corporate Finance',
          description: "A foundational course on financial principles, covering time value of money, capital budgeting, portfolio theory, asset pricing models, and an introduction to derivatives.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/corporatefinance/";
            },},{id: "courses-database-management-systems",
          title: 'Database Management Systems',
          description: "A comprehensive introduction to database design, management, and application development using the relational model and SQL.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/dbms/";
            },},{id: "courses-financial-forensics",
          title: 'Financial Forensics',
          description: "A course on detecting financial fraud using both traditional forensic accounting techniques and modern data-driven methods like anomaly detection and data visualization.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/financialforencics/";
            },},{id: "courses-game-theory-and-strategy",
          title: 'Game Theory and Strategy',
          description: "An exploration of strategic decision-making, covering simultaneous and sequential games, mixed strategies, and applications in matching, voting, and auctions.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/gametheory/";
            },},{id: "courses-programming-concepts-using-java",
          title: 'Programming Concepts using Java',
          description: "A comprehensive course on core programming paradigms using Java, focusing on Object-Oriented Programming, generics, exception handling, and concurrent programming.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/java/";
            },},{id: "courses-linear-statistical-models",
          title: 'Linear Statistical Models',
          description: "An introduction to the theory and application of linear statistical models, covering least squares estimation, hypothesis testing, and ANOVA/ANCOVA using R.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/lsm/";
            },},{id: "courses-modern-application-development-i",
          title: 'Modern Application Development I',
          description: "A comprehensive introduction to modern web application development, covering front-end, back-end, databases, APIs, security, testing, and deployment through a detailed case study.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/mad1/";
            },},{id: "courses-modern-application-development-ii",
          title: 'Modern Application Development II',
          description: "An advanced course on modern application development focusing on JavaScript, the Vue.js framework, and advanced back-end concepts like asynchronous jobs and inter-service messaging.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/mad2/";
            },},{id: "courses-managerial-economics",
          title: 'Managerial Economics',
          description: "An application of microeconomic theory to managerial decision-making, covering market dynamics, consumer behavior, market structures, and modern business challenges.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/maneco/";
            },},{id: "courses-mathematics-for-data-science-i",
          title: 'Mathematics for Data Science I',
          description: "A foundational course covering essential concepts in functions, single-variable calculus, and graph theory to model real-world scenarios.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/maths1/";
            },},{id: "courses-mathematics-for-data-science-ii",
          title: 'Mathematics for Data Science II',
          description: "An advanced course in linear algebra, multivariable calculus, and optimization, tailored for applications in machine learning and data science.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/maths2/";
            },},{id: "courses-machine-learning-foundations",
          title: 'Machine Learning Foundations',
          description: "A foundational course covering the essential mathematical prerequisites—Calculus, Linear Algebra, Optimization, and Probability—necessary for a comprehensive understanding of Machine Learning.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/mlf/";
            },},{id: "courses-machine-learning-practice",
          title: 'Machine Learning Practice',
          description: "A hands-on course using Python&#39;s scikit-learn library to implement the machine learning models and methods learned in theory.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/mlp/";
            },},{id: "courses-machine-learning-techniques",
          title: 'Machine Learning Techniques',
          description: "An introduction to the main methods and models for regression, classification, and clustering, focusing on their properties and suitability for different problems.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/mlt/";
            },},{id: "courses-introduction-to-python-programming",
          title: 'Introduction to Python Programming',
          description: "A first course in programming using Python, focusing on algorithmic problem-solving and core language features from control flow to data processing with Pandas and Numpy.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/python/";
            },},{id: "courses-system-commands",
          title: 'System Commands',
          description: "A course on mastering the command line in a Linux environment to automate complex tasks, manage systems, and improve efficiency beyond graphical interfaces.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/sc/";
            },},{id: "courses-statistics-for-data-science-i",
          title: 'Statistics for Data Science I',
          description: "An introduction to the foundational concepts of statistics, from describing data and understanding probability to working with random variables.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/statistics1/";
            },},{id: "courses-statistics-for-data-science-ii",
          title: 'Statistics for Data Science II',
          description: "An exploration of advanced probability and statistical inference to model and draw conclusions from complex data.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/statistics2/";
            },},{id: "courses-tools-in-data-science",
          title: 'Tools in Data Science',
          description: "A practical course on using popular tools for sourcing data, transforming it, building models, creating visual stories, and deploying them in production.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/tds/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%75%74%6B%61%72%73%68%73%61%68%75%34%74%65%63%68@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/utkarsh4tech", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/utkarsh4tech", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/Utkarsh4tech", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@Utkarshsahu4tech", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
