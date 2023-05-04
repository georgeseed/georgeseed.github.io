# Application Architecture for LLM Goal Achievement App

This application architecture outlines an app that allows a user to state a goal for a large language model (LLM) to autonomously achieve using pre-built commands and self-prompting.

## Components

1. User Interface (UI)
2. Goal Input Handler
3. LLM Interaction Manager
4. Command Functions
5. Logging

### 1. User Interface (UI)

The user interface takes an end goal as input from the user via the terminal:

```
function getUserInput():
  print("Enter your goal:")
  goal = input()
  return goal
```

### 2. Goal Input Handler

The Goal Input Handler processes the user input and initializes the LLM Interaction Manager:

```
function handleGoalInput(goal):
  llmInteractionManager = LLMInteractionManager(goal)
  llmInteractionManager.start()
```

### 3. LLM Interaction Manager

The LLM Interaction Manager handles API calls to the LLM and manages self-prompting:

```
class LLMInteractionManager:

  def __init__(self, goal):
    self.goal = goal
    self.commands = getAvailableCommands()

  def start(self):
    response = self.callLLM(self.goal, self.commands)
    self.processResponse(response)

  def callLLM(self, goal, commands):
    // Make API call to LLM with a prompt that includes the goal and the available commands
    // Return the LLM's response

  def processResponse(self, response):
    // Process the LLM's response, which includes the chosen command and any additional prompts
    // Execute the chosen command, and log the LLM's reasoning
    // If the LLM needs to reprompt itself based on the outcome, call callLLM() again with the new prompt
```

### 4. Command Functions

A list of functions that can be used as 'commands' by the LLM. These can be described with pseudocode:

```
function commandA():
  // Perform action A
  // Return the outcome of the action

function commandB():
  // Perform action B
  // Return the outcome of the action

function commandC():
  // Perform action C
  // Return the outcome of the action

function getAvailableCommands():
  return [commandA, commandB, commandC]
```

### 5. Logging

A logging function to let the user see the LLM's reasoning at each step:

```
function logLLMReasoning(step, reasoning):
  print(f"Step {step}: {reasoning}")
```

## Execution Flow

1. Get the user's goal using the UI.
2. Pass the goal to the Goal Input Handler.
3. Initialize the LLM Interaction Manager with the goal.
4. Start the LLM Interaction Manager.
5. Make API calls to the LLM, prompting it with the goal and available commands.
6. Process the LLM's response, execute the chosen command, and log the LLM's reasoning.
7. If the LLM needs to reprompt itself based on the outcome, call the LLM again with the new prompt.
