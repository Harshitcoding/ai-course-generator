/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, Level: Basic, Duration: 1 hours, NoOf Chapters:5, in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course\": {\n    \"name\": \"Python Programming Fundamentals\",\n    \"description\": \"This course provides a comprehensive introduction to Python programming, covering the fundamentals of the language, data structures, control flow, functions, and more. It is designed for beginners with no prior programming experience.\",\n    \"chapters\": [\n      {\n        \"name\": \"Introduction to Python\",\n        \"about\": \"This chapter introduces the Python programming language, its history, and its applications. It also covers how to set up your development environment and write your first Python program.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Data Types and Variables\",\n        \"about\": \"This chapter explains the fundamental data types in Python, including integers, floats, strings, and booleans. You will learn how to declare variables and assign values to them.\",\n        \"duration\": \"25 minutes\"\n      },\n      {\n        \"name\": \"Operators and Expressions\",\n        \"about\": \"This chapter covers arithmetic, comparison, logical, and bitwise operators in Python. You will learn how to write expressions and evaluate them.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Control Flow\",\n        \"about\": \"This chapter introduces control flow statements in Python, including conditional statements (if, elif, else) and looping structures (for, while). You will learn how to write programs that make decisions and repeat actions.\",\n        \"duration\": \"25 minutes\"\n      },\n      {\n        \"name\": \"Functions and Modules\",\n        \"about\": \"This chapter explains how to define and call functions in Python. It also introduces the concept of modules and how to use them to organize code and reuse functionality.\",\n        \"duration\": \"20 minutes\"\n      }\n    ],\n    \"category\": \"Programming\",\n    \"topic\": \"Python\",\n    \"level\": \"Basic\",\n    \"duration\": \"1 hour\",\n    \"noOfChapters\": 5\n  }\n}\n```"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());



    export const GenerateChapterContent_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Explain the concept in Detail on Topic: Python Basic, Chapter: Variables and Data Types, in JSON Format with list of array with field as title, explanation on give chapter in detail, Code Example(Code field in <precode> format) if applicable\n\n\n\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"title\": \"Introduction to Variables\",\n    \"explanation\": \"Variables are like containers that hold data in your Python programs. They allow you to store and manipulate information efficiently. Think of them as named labels for specific values.\",\n    \"code_example\": \"<precode>name = \\\"Alice\\\"  # Assigning the string \\\"Alice\\\" to the variable 'name'\\nage = 25      # Assigning the integer 25 to the variable 'age'</precode>\"\n  },\n  {\n    \"title\": \"Variable Naming Conventions\",\n    \"explanation\": \"Python has rules for how you name variables. You must follow these rules to avoid errors:\\n\\n*   **Start with a Letter or Underscore:** Variable names can begin with letters (a-z, A-Z) or an underscore (_). \\n*   **Use Only Letters, Numbers, and Underscores:**  You can use letters, numbers, and underscores in variable names, but no other characters. \\n*   **Case Sensitivity:** Python distinguishes between uppercase and lowercase letters. For example, 'name' and 'Name' are considered different variables. \\n*   **Avoid Reserved Keywords:** Python has certain words (like 'if', 'for', 'while') that have special meanings. You can't use these as variable names.\",\n    \"code_example\": \"<precode>valid_variable_name = \\\"Example\\\"  # Valid variable name\\n_another_variable = 10    # Valid variable name\\nmyVariable = 20  # Also valid, but using camelCase convention\\n123variable = \\\"Invalid\\\"   # Invalid - Cannot start with a number\\nmy-variable = \\\"Invalid\\\"   # Invalid - Contains a hyphen (-)</precode>\"\n  },\n  {\n    \"title\": \"Data Types\",\n    \"explanation\": \"Data types tell Python what kind of information a variable holds. The most common data types are:\\n\\n*   **Integers (int):** Whole numbers (e.g., 10, -5, 0)\\n*   **Floats (float):** Numbers with decimal points (e.g., 3.14, -2.5, 0.0)\\n*   **Strings (str):** Sequences of characters enclosed in quotes (e.g., \\\"Hello\\\", 'Python', \\\"123\\\")\\n*   **Booleans (bool):** Represent truth values (True or False)\",\n    \"code_example\": \"<precode>age = 25       # Integer (int)\\nprice = 9.99    # Float (float)\\ngreeting = \\\"Hello!\\\"   # String (str)\\nis_active = True  # Boolean (bool)</precode>\"\n  },\n  {\n    \"title\": \"Type Conversion\",\n    \"explanation\": \"Sometimes you might need to change a variable's data type.  Python provides functions for this:\\n\\n*   **`int()`:**  Converts to an integer (rounds down if a float)\\n*   **`float()`:** Converts to a float\\n*   **`str()`:** Converts to a string\",\n    \"code_example\": \"<precode>num_str = \\\"10\\\"  # String representing a number\\nnum_int = int(num_str)   # Convert to integer\\n\\nprice = 9.99      # Float\\nprice_str = str(price)  # Convert to string</precode>\"\n  },\n  {\n    \"title\": \"Understanding Immutability\",\n    \"explanation\": \"In Python, variables of some data types (like integers and strings) are considered immutable. This means that once you assign a value to them, you can't directly change that value. Instead, you create a new value and assign it to the variable. This concept is important for understanding how Python handles data.\",\n    \"code_example\": \"<precode>name = \\\"Alice\\\"  # Original value\\nname = \\\"Bob\\\"    # Creates a new string and assigns it to 'name' (the original string \\\"Alice\\\" is still somewhere in memory)</precode>\"\n  },\n  {\n    \"title\": \"Variable Assignment and Re-Assignment\",\n    \"explanation\": \"You can assign values to variables using the `=` operator. You can also re-assign a different value to the same variable later in your program.\",\n    \"code_example\": \"<precode>x = 5  # Assign 5 to the variable x\\ny = x  # Assign the value of x (which is 5) to y\\nx = 10 # Re-assign 10 to x. Note that y still holds the value 5</precode>\"\n  }\n]\n```"},
          ],
        },
      ],
    });





